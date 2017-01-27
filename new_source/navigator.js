class Navigator {
    constructor(options, datepicker) {
        this.datepicker = datepicker;
        this._attachEvents();
    }

    _attachEvents() {
        var that = this;
        $(this.datepicker.view.rendered).find('.btn').click(function () {
            if ($(this).is('.btn-next')) {
                that.datepicker.state.next();
            }
            else if ($(this).is('.btn-switch')) {
                that.datepicker.state.switchViewMode();
            }
            else if ($(this).is('.btn-prev')) {
                that.datepicker.state.prev();
            }
        })
    }
}