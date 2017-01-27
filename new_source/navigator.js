class Navigator {
    constructor(options, datepicker) {
        this.datepicker = datepicker;
        this._attachEvents();
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
        })
    }
}