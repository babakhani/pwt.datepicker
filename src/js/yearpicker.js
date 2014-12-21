'use strict';
/**
 * @class ClassYearPicker
 * @type {{cssClass: {selectedYear: string, yearItem: string}, events: {select: select}, _updateNavigator: _updateNavigator, hide: hide, show: show, next: next, prev: prev, selectYear: selectYear, updateView: updateView, _render: _render, init: init}}
 */
var ClassYearPicker = {
    /**
     * cssClass
     */
    cssClass: {
        selectedYear: "selected",
        yearItem: "year-item",
        disbaleItem: "year-item-disable"
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
        var year = self.datepicker.state.view.year;
        self.datepicker.updateNavigator(self.titleFormatter(year));
        return this;
    },

    /**
     * @public
     * @returns {Class_YearPicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    show: function () {
        this.container.show();
        this.updateView();
        return this;
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    next: function () {
        var self = this;
        self.datepicker.state.view.year += 12;
        self._render().updateView();
        return this;
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    prev: function () {
        var self = this;
        self.datepicker.state.view.year -= 12;
        self._render().updateView();
        return this;
    },


    /**
     * @public
     */
    selectYear: function () {
        this.updateView();
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    updateView: function () {
        var self = this;
        self._render();
        self.container.children("." + self.cssClass.yearItem).each(function () {
            $(this).removeClass(self.cssClass.selectedYear);

            if ($(this).data().year === self.datepicker.state.selected.year) {
                $(this).addClass(self.cssClass.selectedYear);
            }
        });
        self._updateNavigator();
        return this;
    },


    /**
     *
     * @param y
     * @returns {boolean}
     * @private
     */
    _checkYearAccess: function (y) {
        if (this.datepicker.state._filetredDate) {
            var startYear = this.datepicker.state.filterDate.start.year;
            var endYear = this.datepicker.state.filterDate.end.year;
            if (startYear <= y & y <= endYear) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }

    },

    /**
     *
     * @returns {Class_YearPicker}
     * @private
     */
    _render: function () {
        var self = this;
        var yearItem
            , year = self.datepicker.state.view.year
            , remaining = parseInt(year / 12) * 12;
        self.container.children("." + self.cssClass.yearItem).remove();
        var i;
        for (i in range(12)) {
            yearItem = $("<div/>")
                .addClass(self.cssClass.yearItem)
                .data({year: (remaining + parseInt(i))})
                .text(self.datepicker._formatDigit(remaining + parseInt(i)))
                .appendTo(self.container);
            if (year === remaining + parseInt(i)) {
                yearItem.addClass(self.cssClass.selectedYear);
            }
            if (self._checkYearAccess(remaining + parseInt(i))) {
                yearItem.click(function () {
                    var y = $(this).data().year;
                    self.datepicker.selectYear(y);
                    self.onSelect(y);
                    return false;
                });
            } else {
                yearItem.addClass(self.cssClass.disbaleItem);
                yearItem.click(function () {
                    return false;
                });

            }
        }
        return this;
    },

    /**
     * @private
     */
    init: function () {
        this._render();
    }
};


/**
 *
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassYearPicker
 */
var YearPicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassYearPicker, options, {
        container: container
    }]);
};
