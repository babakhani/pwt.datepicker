/**
 * This navigator class do every thing about navigate and select date
 * @public
 */
class Navigator {

    /**
     * @param {object} datepicker
     * @return {Navigator}
     */
    constructor(datepicker) {

        /**
         * @type {Datepicker}
         */
        this.datepicker = datepicker;
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
        var that = this;
        let gridPlot = $('#' + that.datepicker.view.id + ' .datepicker-grid-view')[0];
        Hamster(gridPlot).wheel(function (event, delta, deltaX, deltaY) {
            if (delta > 0) {
                that.datepicker.state.navigate('next');
            } else {
                that.datepicker.state.navigate('prev');
            }
            event.preventDefault();
        });

        if (this.datepicker.options.timePicker.enabled) {
            let timePlot = $('#' + that.datepicker.view.id + ' .datepicker-time-view')[0];
            Hamster(timePlot).wheel(function (event, delta, deltaX, deltaY) {
                let $target = $(event.target);
                let key = $target.data('time-key') ? $target.data('time-key') : $target.parents('[data-time-key]').data('time-key');
                if (delta > 0) {
                    that.timeUp(key);
                } else {
                    that.timeDown(key);
                }
                event.preventDefault();
            });
        }
    }

    /**
     * @desc set time up depend to timekey
     * @param {String} timekey - accept hour, minute,second
     * @public
     */
    timeUp(timekey) {
        let step = this.datepicker.options.timePicker[timekey].step;
        let currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) + step);
        this.datepicker.state.setViewDateTime(timekey, currentState);
        this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
    }


    /**
     * @desc set time down depend to timekey
     * @param {String} timekey - accept hour, minute,second
     * @public
     */
    timeDown(timekey) {
        let step = this.datepicker.options.timePicker[timekey].step;
        let currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) - step);
        this.datepicker.state.setViewDateTime(timekey, currentState);
        this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
    }


    /**
     * @desc attach dom events
     * @todo remove jquery
     * @private
     */
    _attachEvents() {
        var that = this;

        if (this.datepicker.options.navigator.enabled) {
            /**
             * @description navigator click event
             */
            $(document).on('click', '#' + that.datepicker.view.id + ' .btn', function () {
                if ($(this).is('.btn-next')) {
                    that.datepicker.state.navigate('next');
                    that.datepicker.options.navigator.onNext(that);
                }
                else if ($(this).is('.btn-switch')) {
                    that.datepicker.state.switchViewMode();
                    that.datepicker.options.navigator.onSwitch(that);
                }
                else if ($(this).is('.btn-prev')) {
                    that.datepicker.state.navigate('prev');
                    that.datepicker.options.navigator.onPrev(that);
                }
            });
        }


        /**
         * @description check if timePicker enabled attach Events
         */
        if (this.datepicker.options.timePicker.enabled) {

            /**
             * @description time up btn click event
             */
            $(document).on('click', '#' + that.datepicker.view.id + ' .up-btn', function () {
                let timekey = $(this).data('time-key');
                that.timeUp(timekey);
            });

            /**
             * @description time down btn click event
             */
            $(document).on('click', '#' + that.datepicker.view.id + ' .down-btn', function () {
                var timekey = $(this).data('time-key');
                that.timeDown(timekey);
            });
        }


        /**
         * @description check if dayPicker enabled attach Events
         */
        if (this.datepicker.options.dayPicker.enabled) {

            /**
             * @description days click event
             */
            $(document).on('click', '#' + that.datepicker.view.id + ' .datepicker-day-view td', function () {
                let thisUnix = $(this).data('unix');
                that.datepicker.state.setSelectedDateTime('unix', thisUnix);
                that.datepicker.state.setViewDateTime('unix', that.datepicker.state.selected.unixDate);
                that.datepicker.options.dayPicker.onSelect(thisUnix);
                if (that.datepicker.options.autoClose) {
                    that.datepicker.view.hide();
                    that.datepicker.options.onHide(that);
                }
            });
        }


        /**
         * @description check if monthPicker enabled attach Events
         */
        if (this.datepicker.options.monthPicker.enabled) {

            /**
             * @description month click event
             */
            $(document).on('click', '#' + that.datepicker.view.id + ' .datepicker-month-view .month-item', function () {
                let month = $(this).data('month');
                that.datepicker.state.switchViewModeTo('day');
                if (!that.datepicker.options.onlySelectOnDate) {
                    that.datepicker.state.setSelectedDateTime('month', month);
                    if (that.datepicker.options.autoClose) {
                        that.datepicker.view.hide();
                        that.datepicker.options.onHide(that);
                    }
                }
                that.datepicker.state.setViewDateTime('month', month);
                that.datepicker.options.monthPicker.onSelect(month);

            });
        }


        /**
         * @description check if yearPicker enabled attach Events
         */
        if (this.datepicker.options.yearPicker.enabled) {

            /**
             * @description year click event
             */
            $(document).on('click', '#' + that.datepicker.view.id + ' .datepicker-year-view .year-item', function () {
                let year = $(this).data('year');
                that.datepicker.state.switchViewModeTo('month');
                if (!that.datepicker.options.onlySelectOnDate) {
                    that.datepicker.state.setSelectedDateTime('year', year);
                    if (that.datepicker.options.autoClose) {
                        that.datepicker.view.hide();
                        that.datepicker.options.onHide(that);
                    }
                }
                that.datepicker.state.setViewDateTime('year', year);
                that.datepicker.options.yearPicker.onSelect(year);
            });
        }
    }
}