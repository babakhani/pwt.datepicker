class Toolbox {
    constructor(datepicker) {
        this.datepicker = datepicker;
        this.attachEvents();
        return this;
    }

    attachEvents() {
        let that = this;
        $(document).on('click', '.btn-today', function () {
            that.datepicker.state.setSelectedDateTime('unix', new Date().valueOf());
            that.datepicker.state.setViewDateTime('unix', new Date().valueOf());
            that.datepicker.options.toolbox.onToday();
        });
    }

}