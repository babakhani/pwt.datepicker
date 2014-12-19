/**
 *
 * @class Class_Daypicker
 * @type {{next: next, prev: prev, updateView: updateView, _updateView: _updateView, selectDay: selectDay, _updateNavigator: _updateNavigator, hide: hide, show: show, _updateSelectedDay: _updateSelectedDay, _render: _render, init: init}}
 */
var Class_Daypicker = {
    /**
     * Go to next Month-day view
     * @public
     * @returns {Class_Daypicker}
     */
    next: function () {
        var self = this;
        if (self.datepicker.state.view.month === 12) {
            self.datepicker.state.view.month = 1;
            self.datepicker.state.view.year++;
        } else {
            self.datepicker.state.view.month++;
        }
        self._updateView();
        return this;
    },


    /**
     * Go to previews Month-day view
     * @public
     * @returns {Class_Daypicker}
     */
    prev: function () {
        var self = this;
        if (self.datepicker.state.view.month == 1) {
            self.datepicker.state.view.month = 12;
            self.datepicker.state.view.year--;
        } else {
            self.datepicker.state.view.month--;
        }
        self._updateView();
        return this;
    },


    /**
     * Update view
     * @public
     * @returns {Class_Daypicker}
     */
    updateView: function () {
        this._updateView();
        return this;
    },


    /**
     *
     * @returns {Class_Daypicker}
     * @private
     */
    _updateView: function () {
        var self = this;
        self.mGrid.updateAs(self.datepicker.state.view.year, self.datepicker.state.view.month);
        self._updateNavigator(self.datepicker.state.view.year, self.datepicker.state.view.month);
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
        return this;
    },


    /**
     * @public
     * @returns {Class_Daypicker}
     */
    selectDay: function () {
        var self = this;
        self.mGrid.updateAs(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        self._updateNavigator(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
        this._updateView();
        return this;
    },


    /**
     *
     * @param year
     * @param month
     * @private
     */
    _updateNavigator: function (year, month) {
        var self = this;
        var pdateStr = new persianDate([year, month]).format(self.datepicker.daysTitleFormat);
        self.datepicker.navigator.updateSwitchBtn(self.datepicker._formatDigit(pdateStr));
    },


    /**
     * @public
     * @returns {Class_Daypicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @public
     * @returns {Class_Daypicker}
     */
    show: function () {
        var self = this;
        this.container.show();
        this._updateView();
        return this;
    },


    /**
     *
     * @param unix
     * @returns {Daypicker}
     * @private
     */
    _updateSelectedDay: function (unix) {
        var self = this;
        this.mGrid.markSelectedDate(unix);
        return this;
    },


    /**
     *
     * @private
     */
    _render: function () {
        var self = this;
        var pd = new pDate();
        this.mGrid = new MonthGrid({
            container: self.container,
            month: self.datepicker.state.selected.month,
            year: self.datepicker.state.selected.year
        });
        this.mGrid.attachEvent("selectDay", function (x) {
            self.datepicker.selectDate('unix', x);
            self.mGrid.selectDate(self.datepicker.state.selected.unixDate);
        });
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
    },


    /**
     * @private
     * @returns {Class_Daypicker}
     */
    init: function () {
        var self = this;
        this._render();
        this._updateNavigator(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        return this;
    }
};


/**
 *
 * @param options
 * @param container
 * @returns {*}
 */
var Daypicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Daypicker, options, {
        container: container
    }]);
};
