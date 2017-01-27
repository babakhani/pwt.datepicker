class Navigator {
    constructor(options, datepicker) {
        this.datepicker = datepicker;
        this._attachEvents();
    }

    getSwitchText(pdate){
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
            log('day select');
            log($(this).data('unix'))

            that.datepicker.state.updateView('unix', $(this).data('unix'));
        });
        $(document).on('click', '#' + that.datepicker.id + ' .datepicker-month-view .month-item', function () {
            log('month select');
            that.datepicker.state.switchViewModeTo('day');
            that.datepicker.state.updateView('month', $(this).data('month'));

        });
        $(document).on('click', '#' + that.datepicker.id + ' .datepicker-year-view .year-item', function () {
            log('year select');
            that.datepicker.state.switchViewModeTo('month');
            that.datepicker.state.updateView('year', $(this).data('year'));
        });
    }
}