'use strict';
/**
 *
 * @type {{cssClass: {selectedYear: string, yearItem: string}, events: {select: select}, _updateNavigator: _updateNavigator, hide: hide, show: show, next: next, prev: prev, selectYear: selectYear, updateView: updateView, _render: _render, init: init}}
 */
var Class_YearPicker = {
    /**
     * cssClass
     */
    cssClass: {
        selectedYear: "selected",
        yearItem: "year-item"
    },


    /**
     * events
     */
    events: {
        select: function () {
        }
    },


    /**
     *
     * @private
     */
    _updateNavigator: function () {
        var self = this;
        var pd = new persianDate([self.datepicker.state.view.year, self.datepicker.state.view.month]);
        var year = pd.year();
        var remaining = parseInt(year / 12) * 12;
        self.datepicker.navigator.updateSwitchBtn(self.datepicker._formatDigit(remaining) + "-" + self.datepicker._formatDigit(remaining + 11));
    },

    /**
     *
     * @returns {Class_YearPicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     *
     * @returns {Class_YearPicker}
     */
    show: function () {
        this.container.show();
        this.updateView();
        return this;
    },


    /**
     *
     * @returns {Class_YearPicker}
     */
    next: function () {
        var self = this;
        self.datepicker.state.view.year += 12;
        self._render().updateView();
        return this;
    },


    /**
     *
     * @returns {Class_YearPicker}
     */
    prev: function () {
        var self = this;
        self.datepicker.state.view.year -= 12;
        self._render().updateView();
        return this;
    },


    selectYear: function () {
        this.updateView();
    },


    /**
     *
     * @returns {Class_YearPicker}
     */
    updateView: function () {
        var self = this;
        self._render();
        self.container.children("." + self.cssClass.yearItem).each(function () {
            $(this).removeClass(self.cssClass.selectedYear)
            if ($(this).data().year == self.datepicker.state.selected.year) {
                $(this).addClass(self.cssClass.selectedYear)
            }
        });
        self._updateNavigator();
        return this;
    },


    /**
     *
     * @returns {Class_YearPicker}
     * @private
     */
    _render: function () {
        var self = this;
        var pd = new persianDate(self.datepicker.state.selected.unixDate)
            , year = self.datepicker.state.view.year
            , remaining = parseInt(year / 12) * 12;
        self.container.children("." + self.cssClass.yearItem).remove();
        var i;
        for (i in range(12)) {
            var yearItem = $("<div/>").addClass(self.cssClass.yearItem).data({
                year: (remaining + parseInt(i))
            }).text(self.datepicker._formatDigit(remaining + parseInt(i)))
                .appendTo(self.container)
            if (year == remaining + parseInt(i)) {
                yearItem.addClass(self.cssClass.selectedYear)
            }
        }
        self.container.children("." + self.cssClass.yearItem).click(function () {
            var y = $(this).data().year;
            self.datepicker.selectYear(y);
            return false;
        });
        return this;
    },


    init: function () {
        this._render();
    }
};


/**
 *
 * @param options
 * @param container
 * @returns {*}
 * @constructor
 */
var YearPicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_YearPicker, options, {
        container: container
    }]);
};
