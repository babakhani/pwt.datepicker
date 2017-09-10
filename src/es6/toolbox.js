/**
 * Do every things about toolbox, like attach events to toolbox elements
 */
class Toolbox {

    /**
     * @param {Datepicker} datepicker
     * @return {Toolbox}
     */
    constructor (model) {

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
    _attachEvents () {
        let that = this;
        $(document).on('click', '#' + that.model.view.id + ' .btn-today', function () {
            that.model.state.setSelectedDateTime('unix', new Date().valueOf());
            that.model.state.setViewDateTime('unix', new Date().valueOf());
            that.model.options.toolbox.onToday();
        });

        $(document).on('click', '#' + that.model.view.id + ' .btn-calendar', function () {
            if (that.model.options.calendar.indexOf('persian') == 0) {
                that.model.options.calendar = 'gregorian';
                that.model.options.locale = 'en';
            }
            else {
                that.model.options.calendar = 'persianAstro';
                that.model.options.locale = 'fa';
            }
            persianDate.toCalendar(that.model.options.calendar);
            persianDate.toLocale(that.model.options.locale);
            let unix = that.model.state.view.unixDate;
            that.model.state.setSelectedDateTime('unix', that.model.state.selected.unixDate);
            that.model.state.setViewDateTime('unix', that.model.state.view.unixDate);
            that.model.state.setSelectedDateTime('unix', that.model.state.selected.unixDate);
            that.model.view.reRender();
            return this.model;
        });

    }
}

module.exports = Toolbox;
