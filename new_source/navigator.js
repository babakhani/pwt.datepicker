class Navigator {
    constructor(options, datepicker) {
        this.datepicker = datepicker;
        this._attachEvents();
    }

    getSwitchText(pdate) {
        return
    }

    _attachEvents() {
        var that = this;
        $(document).on('click', '#' + that.datepicker.id + ' .btn', function () {
            if ($(this).is('.btn-next')) {
                that.datepicker.state.navigate('next');
            }
            else if ($(this).is('.btn-switch')) {
                that.datepicker.state.switchViewMode();
            }
            else if ($(this).is('.btn-prev')) {
                that.datepicker.state.navigate('prev');
            }
        });
        $(document).on('click', '#' + that.datepicker.id + ' .datepicker-day-view td', function () {
            let thisUnix = $(this).data('unix');
            that.datepicker.state.setSelectedDateTime('unix', thisUnix);
            that.datepicker.state.updateView('unix', thisUnix);

        });
        $(document).on('click', '#' + that.datepicker.id + ' .datepicker-month-view .month-item', function () {
            that.datepicker.state.switchViewModeTo('day');

            if (!that.datepicker.options.justSelectOnDate) {
                that.datepicker.state.setSelectedDateTime('month', $(this).data('month'));
            }
            that.datepicker.state.updateView('month', $(this).data('month'));
        });
        $(document).on('click', '#' + that.datepicker.id + ' .datepicker-year-view .year-item', function () {
            that.datepicker.state.switchViewModeTo('month');

            if (!that.datepicker.options.justSelectOnDate) {
                that.datepicker.state.setSelectedDateTime('year', $(this).data('year'));
            }
            that.datepicker.state.updateView('year', $(this).data('year'));
        });
    }
}