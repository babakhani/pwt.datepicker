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
        this._updateSelfCalendarType();
        return this;
    }

    _updateSelfCalendarType () {
        if (this.model.options.calendar.indexOf('persian') == 0) {
            $('#' + this.model.view.id + ' .btn-calendar').text('میلادی');
        }
        else {
            $('#' + this.model.view.id + ' .btn-calendar').text('Persian');
        }
    }

    _toggleCalendartype () {
        let that = this;
        if (that.model.options.calendar.indexOf('persian') == 0) {
            that.model.options.calendar = 'gregorian';
            that.model.options.locale = 'en';
        }
        else {
            that.model.options.calendar = 'persianAstro';
            that.model.options.locale = 'fa';
        }
        this._updateSelfCalendarType();
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
            that.model.view.reRender();
        });

        $(document).on('click', '#' + that.model.view.id + ' .btn-calendar', function () {
            that._toggleCalendartype();
            let unix = that.model.state.view.unixDate;
            that.model.state.setSelectedDateTime('unix', that.model.state.selected.unixDate);
            that.model.state.setViewDateTime('unix', that.model.state.view.unixDate);
            that.model.view.render();
            return this.model;
        });

    }
}

module.exports = Toolbox;
