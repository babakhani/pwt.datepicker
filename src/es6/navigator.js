let Hamster = require('hamsterjs');

/**
 * This navigator class do every thing about navigate and select date
 * @public
 */
class Navigator {

    /**
     * @param {object} datepicker
     * @return {Navigator}
     */
    constructor (model) {

        /**
         * @type {Datepicker}
         */
        this.model = model;
        this.liveAttach();
        this._attachEvents();
        return this;
    }


    /**
     * @desc attach events that needed attach after every render
     * @public
     * @todo attach as a live way
     */
    liveAttach () {
        // Check options
        if (this.model.options.navigator.scroll.enabled) {
            let that = this;
            let gridPlot = $('#' + that.model.view.id + ' .datepicker-grid-view')[0];
            Hamster(gridPlot).wheel(function (event, delta, deltaX, deltaY) {
                if (delta > 0) {
                    that.model.state.navigate('next');
                } else {
                    that.model.state.navigate('prev');
                }
                that.model.view.render();
                event.preventDefault();
            });

            if (this.model.options.timePicker.enabled) {
                let timePlot = $('#' + that.model.view.id + ' .datepicker-time-view')[0];
                Hamster(timePlot).wheel(function (event, delta, deltaX, deltaY) {
                    let $target = $(event.target);
                    let key = $target.data('time-key') ? $target.data('time-key') : $target.parents('[data-time-key]').data('time-key');
                    if (key) {
                        if (delta > 0) {
                            that.timeUp(key);
                        } else {
                            that.timeDown(key);
                        }
                    }
                    that.model.view.render();
                    event.preventDefault();
                });
            }
        }
    }

    /**
     * @desc set time up depend to timekey
     * @param {String} timekey - accept hour, minute,second
     * @public
     */
    timeUp (timekey) {
        let step, t, that = this;
        if (timekey == 'meridiem') {
            step = 12;
            if (this.model.state.view.meridiem == 'PM') {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
            } else {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
            }
            this.model.state.meridiemToggle();
        } else {
            step = this.model.options.timePicker[timekey].step;
            t = this.model.PersianDate.date(this.model.state.selected.unixDate).add(timekey, step).valueOf();
        }
        this.model.state.setViewDateTime('unix', t);
        this.model.state.setSelectedDateTime('unix', t);
        this.model.view.renderTimePartial();
        clearTimeout(this.scrollDelayTimeDown);
        this.scrollDelayTimeUp = setTimeout(function () {
            that.model.view.markSelectedDay();
        }, 300);

    }


    /**
     * @desc set time down depend to timekey
     * @param {String} timekey - accept hour, minute,second
     * @public
     */
    timeDown (timekey) {
        let step, t, that = this;
        if (timekey == 'meridiem') {
            step = 12;
            if (this.model.state.view.meridiem == 'AM') {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
            } else {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
            }
            this.model.state.meridiemToggle();
        } else {
            step = this.model.options.timePicker[timekey].step;
            t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract(timekey, step).valueOf();
        }
        this.model.state.setViewDateTime('unix', t);
        this.model.state.setSelectedDateTime('unix', t);
        this.model.view.renderTimePartial();
        clearTimeout(this.scrollDelayTimeDown);
        this.scrollDelayTimeDown = setTimeout(function () {
            that.model.view.markSelectedDay();
        }, 300);
    }


    /**
     * @desc attach dom events
     * @todo remove jquery
     * @private
     */
    _attachEvents () {
        let that = this;

        if (this.model.options.navigator.enabled) {
            /**
             * @description navigator click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .btn', function () {
                if ($(this).is('.btn-next')) {
                    that.model.state.navigate('next');
                    that.model.options.navigator.onNext(that);
                    that.model.view.render();
                }
                else if ($(this).is('.btn-switch')) {
                    that.model.state.switchViewMode();
                    that.model.options.navigator.onSwitch(that);
                    that.model.view.render();
                }
                else if ($(this).is('.btn-prev')) {
                    that.model.state.navigate('prev');
                    that.model.options.navigator.onPrev(that);
                    that.model.view.render();
                }
            });
        }


        /**
         * @description check if timePicker enabled attach Events
         */
        if (this.model.options.timePicker.enabled) {

            /**
             * @description time up btn click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .up-btn', function () {
                let timekey = $(this).data('time-key');
                that.timeUp(timekey);
            });

            /**
             * @description time down btn click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .down-btn', function () {
                let timekey = $(this).data('time-key');
                that.timeDown(timekey);
            });

        }


        /**
         * @description check if dayPicker enabled attach Events
         */
        if (this.model.options.dayPicker.enabled) {

            /**
             * @description days click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .datepicker-day-view td:not(.disabled)', function () {
                let thisUnix = $(this).data('unix');
                that.model.state.setSelectedDateTime('unix', thisUnix);
                that.model.state.setViewDateTime('unix', that.model.state.selected.unixDate);
                that.model.options.dayPicker.onSelect(thisUnix);
                if (that.model.options.autoClose) {
                    that.model.view.hide();
                    that.model.options.onHide(that);
                }
                that.model.view.markSelectedDay();
            });
        }


        /**
         * @description check if monthPicker enabled attach Events
         */
        if (this.model.options.monthPicker.enabled) {

            /**
             * @description month click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .datepicker-month-view .month-item:not(.month-item-disable)', function () {
                let month = $(this).data('month');
                that.model.state.switchViewModeTo('day');
                if (!that.model.options.onlySelectOnDate) {
                    that.model.state.setSelectedDateTime('month', month);
                    if (that.model.options.autoClose) {
                        that.model.view.hide();
                        that.model.options.onHide(that);
                    }
                }
                that.model.state.setViewDateTime('month', month);
                that.model.view.render();
                that.model.options.monthPicker.onSelect(month);
            });
        }


        /**
         * @description check if yearPicker enabled attach Events
         */
        if (this.model.options.yearPicker.enabled) {

            /**
             * @description year click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .datepicker-year-view .year-item:not(.year-item-disable)', function () {
                let year = $(this).data('year');
                that.model.state.switchViewModeTo('month');
                if (!that.model.options.onlySelectOnDate) {
                    that.model.state.setSelectedDateTime('year', year);
                    if (that.model.options.autoClose) {
                        that.model.view.hide();
                        that.model.options.onHide(that);
                    }
                }
                that.model.state.setViewDateTime('year', year);
                that.model.view.render();
                that.model.options.yearPicker.onSelect(year);
            });
        }
    }
}

module.exports = Navigator;
