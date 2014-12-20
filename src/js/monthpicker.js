'use strict';
/**
 * @class ClassMonthPicker
 * @type {{cssClass: {selectedMonth: string, monthItem: string}, monthRange: (ClassDateRange.monthRange|*), _updateNavigator: _updateNavigator, hide: hide, show: show, selectMonth: selectMonth, defineSelectedMonth: defineSelectedMonth, next: next, prev: prev, updateView: updateView, _render: _render, init: init}}
 */
var ClassMonthPicker = {
    /**
     * cssClass
     */
    cssClass: {
        selectedMonth: "selected",
        monthItem: "month-item",
        disbaleItem: "month-item-disable"
    },

    /**
     * monthRange
     */
    monthRange: ClassDateRange.monthRange,


    /**
     *
     * @private
     */
    _updateNavigator: function () {
        var self = this;
        self.datepicker.updateNavigator(this.titleFormatter(self.datepicker.state.view.unixDate));
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    show: function () {
        this.container.show();
        this._updateNavigator();
        this._render();
        return this;
    },


    /**
     * selectMonth
     */
    selectMonth: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    defineSelectedMonth: function () {
        var self = this;
        self.container.children('.' + self.cssClass.monthItem).removeClass(self.cssClass.selectedMonth);
        if (self.datepicker.state.view.year === self.datepicker.state.selected.year) {
            self.container.children(".month" + self.datepicker.state.selected.month).addClass(self.cssClass.selectedMonth);
        }
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    next: function () {
        var self = this;
        self.datepicker.state.setView('year', self.datepicker.state.view.year + 1);
        self.updateView();
        self._render();

        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    prev: function () {
        var self = this;
        self.datepicker.state.setView('year', self.datepicker.state.view.year - 1);
        self.updateView();
        self._render();
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    updateView: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
        return this;
    },

    _checkMonthAccess: function (month) {
        if (this.datepicker.state._filetredDate) {
            var startYear = this.datepicker.state.filterDate.start.year;
            var endYear = this.datepicker.state.filterDate.end.year;
            var y = this.datepicker.state.view.year;
            var startMonth = this.datepicker.state.filterDate.start.month;
            var endMonth = this.datepicker.state.filterDate.end.month;
            if (startYear <= y & y <= endYear) {
                if (y === startYear && month >= startMonth) {
                    return true;
                }
                if (y === endYear && month <= endMonth) {
                    return true;
                }
                if (startYear < y & y < endYear) {
                    return true;
                }
            }
            return false;
        }
    },

    /**
     *
     * @returns {Class_MonthPicker}
     * @private
     */
    _render: function () {
        var self = this, m;
        self.container.empty();
        for (m in this.monthRange) {
            var monthItem = $("<div/>").data({
                monthIndex: m
            }).addClass("month" + m)
                .addClass(self.cssClass.monthItem)
                .text(self.monthRange[m].name.fa)
                .appendTo(self.container)

            if (self._checkMonthAccess(m)) {
                monthItem.click(function () {
                    self.onSelect($(this).data().monthIndex);
                    self.datepicker.selectMonth($(this).data().monthIndex);
                    return false;
                });

            } else {
                monthItem.addClass(self.cssClass.disbaleItem);
                monthItem.click(function () {
                    return false;
                });
            }
        }
        ;
        this.defineSelectedMonth();
        return this;
    },

    /**
     * init
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
 * @constructs ClassMonthPicker
 */
var MonthPicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassMonthPicker, options, {
        container: container
    }]);
};
