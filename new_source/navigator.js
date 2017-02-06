class Navigator {
    constructor(options, datepicker) {
        this.datepicker = datepicker;
        this._attachEvents();
    }

    liveAttach() {
        var that = this;
        let gridPlot = $('#' + that.datepicker.id + ' .datepicker-grid-view')[0];
        Hamster(gridPlot).wheel(function (event, delta, deltaX, deltaY) {
            if (delta > 0) {
                that.datepicker.state.navigate('next');
            } else {
                that.datepicker.state.navigate('prev');
            }
            event.preventDefault();
        });

        if (this.datepicker.options.timePicker.enabled) {
            let timePlot = $('#' + that.datepicker.id + ' .datepicker-time-view')[0];
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

    timeUp(timekey) {
        let step = this.datepicker.options.timePicker[timekey].step;
        let currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) + step);
        this.datepicker.state.setViewDateTime(timekey, currentState);
        this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
    }

    timeDown(timekey) {
        let step = this.datepicker.options.timePicker[timekey].step;
        let currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) - step);
        this.datepicker.state.setViewDateTime(timekey, currentState);
        this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
    }

    _attachEvents() {
        var that = this;

        this.liveAttach();

        if (this.datepicker.options.navigator.enabled) {
            /**
             * @description navigator click event
             */
            $(document).on('click', '#' + that.datepicker.id + ' .btn', function () {
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
            $(document).on('click', '#' + that.datepicker.id + ' .up-btn', function () {
                let timekey = $(this).data('time-key');
                that.timeUp(timekey);
            });

            /**
             * @description time down btn click event
             */
            $(document).on('click', '#' + that.datepicker.id + ' .down-btn', function () {
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
            $(document).on('click', '#' + that.datepicker.id + ' .datepicker-day-view td', function () {
                let thisUnix = $(this).data('unix');
                that.datepicker.state.setSelectedDateTime('unix', thisUnix);
                that.datepicker.state.setViewDateTime('unix', that.datepicker.state.selected.unixDate);
                that.datepicker.options.dayPicker.onSelect(thisUnix);
            });
        }


        /**
         * @description check if monthPicker enabled attach Events
         */
        if (this.datepicker.options.monthPicker.enabled) {
            /**
             * @description month click event
             */
            $(document).on('click', '#' + that.datepicker.id + ' .datepicker-month-view .month-item', function () {
                let month = $(this).data('month');
                that.datepicker.state.switchViewModeTo('day');
                if (!that.datepicker.options.onlySelectOnDate) {
                    that.datepicker.state.setSelectedDateTime('month', month);
                }
                that.datepicker.state.setViewDateTime('month', month);
                that.datepicker.options.monthPicker.onSelect(month);
            });
        }


        /**
         * @description check if yearPicker enabled attach Events
         */
        if (this.datepicker.options.monthPicker.enabled) {
            /**
             * @description year click event
             */
            $(document).on('click', '#' + that.datepicker.id + ' .datepicker-year-view .year-item', function () {
                let year = $(this).data('year');
                that.datepicker.state.switchViewModeTo('month');
                if (!that.datepicker.options.onlySelectOnDate) {
                    that.datepicker.state.setSelectedDateTime('year', year);
                }
                that.datepicker.state.setViewDateTime('year', year);
                that.datepicker.options.yearPicker.onSelect(year);
            });
        }
    }
}