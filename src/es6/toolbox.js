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
            that.model.options.locale_ = this.model.options.calendar.gregorian.locale;
        }
        else {
            that.model.options.calendar_ = 'persian';
            that.model.options.locale_ = this.model.options.calendar.persian.locale;
        }
    }

    /**
     * attach all events about toolbox
     */
    _attachEvents () {
        let that = this;
        $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-today', function () {
            that.model.state.setSelectedDateTime('unix', new Date().valueOf());
            that.model.state.setViewDateTime('unix', new Date().valueOf());
            that.model.options.toolbox.onToday();
            that.model.view.reRender();
        });

        $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-calendar', function () {
            that._toggleCalendartype();
            that.model.state.setSelectedDateTime('unix', that.model.state.selected.unixDate);
            that.model.state.setViewDateTime('unix', that.model.state.view.unixDate);
            that.model.view.render();
            return that.model;
        });

        $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-exit', function () {
            that.model.view.hide();
            that.model.options.onHide(this);
        });
    }
}

module.exports = Toolbox;
