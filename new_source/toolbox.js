/**
 * Do every things about toolbox, like attach events to toolbox elements
 */
class Toolbox {

    /**
     * @param {Datepicker} datepicker
     * @return {Toolbox}
     */
    constructor(datepicker) {

        /**
         * @type {Datepicker}
         */
        this.datepicker = datepicker;
        this._attachEvents();
        return this;
    }

    /**
     * @private
     */
    _attachEvents() {
        let that = this;
        $(document).on('click', '.btn-today', function () {
            that.datepicker.state.setSelectedDateTime('unix', new Date().valueOf());
            that.datepicker.state.setViewDateTime('unix', new Date().valueOf());
            that.datepicker.options.toolbox.onToday();
        });
    }

}