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
    constructor(model) {

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
    liveAttach() {
        // Check options
        if (this.model.options.navigator.scroll.enabled) {
            let that = this;
            let gridPlot = $('#' + that.model.view.id + ' .datepicker-grid-view')[0];
            Hamster(gridPlot).wheel(function (event, delta) {
                if (delta > 0) {
                    that.model.state.navigate('next');
                } else {
                    that.model.state.navigate('prev');
                }
                that.model.view.render();
                event.preventDefault();
            });

            if (this.model.options.timePicker.enabled) {
                $('#' + that.model.view.id + ' .time-segment').each(function(){
                    Hamster(this).wheel(function (event, delta) {
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
                });
            }
        }
    }

    /**
     * @desc set time up depend to timekey
     * @param {String} timekey - accept hour, minute,second
     * @public
     */
    timeUp(timekey) {
        if (this.model.options.timePicker[timekey] == undefined) {
            return;
        }
        let step, t, that = this;
        if (timekey == 'meridian') {
            step = 12;
            if (this.model.state.view.meridian == 'PM') {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
            } else {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
            }
            this.model.state.meridianToggle();
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
    timeDown(timekey) {
        if (this.model.options.timePicker[timekey] == undefined) {
            return;
        }
        let step, t, that = this;
        if (timekey == 'meridian') {
            step = 12;
            if (this.model.state.view.meridian == 'AM') {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
            } else {
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
            }
            this.model.state.meridianToggle();
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
    _attachEvents() {
        let that = this;

        if (this.model.options.navigator.enabled) {
            /**
             * @description navigator click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .pwt-btn', function () {
                if ($(this).is('.pwt-btn-next')) {
                    that.model.state.navigate('next');
                    that.model.view.render();
                    that.model.options.navigator.onNext(that.model);
                }
                else if ($(this).is('.pwt-btn-switch')) {
                    that.model.state.switchViewMode();
                    that.model.view.render();
                    that.model.options.navigator.onSwitch(that.model);
                }
                else if ($(this).is('.pwt-btn-prev')) {
                    that.model.state.navigate('prev');
                    that.model.view.render();
                    that.model.options.navigator.onPrev(that.model);
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
                that.model.options.onSelect(that.model.state.selected.unixDate);
            });

            /**
             * @description time down btn click event
             */
            $(document).on('click', '#' + that.model.view.id + ' .down-btn', function () {
                let timekey = $(this).data('time-key');
                that.timeDown(timekey);
                that.model.options.onSelect(that.model.state.selected.unixDate);
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
                let thisUnix = $(this).data('unix'), mustRender;
                that.model.state.setSelectedDateTime('unix', thisUnix);
                if (that.model.state.selected.month !== that.model.state.view.month) {
                    mustRender = true;
                } else {
                    mustRender = false;
                }
                that.model.state.setViewDateTime('unix', that.model.state.selected.unixDate);
                if (that.model.options.autoClose) {
                    that.model.view.hide();
                    that.model.options.onHide(that);
                }
                if (mustRender) {
                    that.model.view.render();
                } else {
                    that.model.view.markSelectedDay();
                }
                that.model.options.dayPicker.onSelect(thisUnix);
                that.model.options.onSelect(thisUnix);
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
                that.model.options.onSelect(that.model.state.selected.unix);
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
                that.model.options.onSelect(that.model.state.selected.unix);
            });
        }
    }
}

module.exports = Navigator;
