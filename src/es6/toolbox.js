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

    _toggleCalendartype () {
        let that = this;
        if (that.model.options.calendar_ == 'persian') {
            that.model.options.calendar_ = 'gregorian';
        }
        else {
            that.model.options.calendar_ = 'persian';
        }

        if (that.model.options.locale_ == 'fa') {
            that.model.options.locale_ = 'en';
        }
        else if(that.model.options.locale_ == 'en'){
            that.model.options.locale_ = 'fa';
        }
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
