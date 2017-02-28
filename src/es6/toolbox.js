/**
 * Do every things about toolbox, like attach events to toolbox elements
 */
class Toolbox {

    /**
     * @param {Datepicker} datepicker
     * @return {Toolbox}
     */
    constructor(model) {

        /**
         * @type {Datepicker}
         */
        this.model = model;
        this._attachEvents();
        return this;
    }

    /**
     * attach all events about toolbox
     */
    _attachEvents() {
        let that = this;
        $(document).on('click', '.btn-today', function () {
            that.model.state.setSelectedDateTime('unix', new Date().valueOf());
            that.model.state.setViewDateTime('unix', new Date().valueOf());
            that.model.options.toolbox.onToday();
        });
    }

}