/**
 * @class ClassMonthPicker
  * @type {{cssClass: {selectedMonth: string, monthItem: string}, monthRange: (Class_DateRange.monthRange|*), _updateNavigator: _updateNavigator, hide: hide, show: show, selectMonth: selectMonth, defineSelectedMonth: defineSelectedMonth, next: next, prev: prev, updateView: updateView, _render: _render, init: init}}
 */
var ClassMonthPicker = {
    /**
     * cssClass
     */
    cssClass: {
        selectedMonth: "selected",
        monthItem: "month-item"
    },


    /**
     * monthRange
     */
    monthRange: Class_DateRange.monthRange,


    /**
     *
     * @private
     */
    _updateNavigator: function () {
        var self = this;
        var pdateStr = self.datepicker._formatDigit(self.datepicker.state.view.year);
        self.datepicker.navigator.updateSwitchBtn(pdateStr);
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
        this.defineSelectedMonth();
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
        if (self.datepicker.state.view.year == self.datepicker.state.selected.year) {
            self.container.children(".month" + self.datepicker.state.selected.month).addClass(self.cssClass.selectedMonth)
        }
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    next: function () {
        var self = this;
        self.datepicker.state.view.year++;
        self.updateView();
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    prev: function () {
        var self = this;
        self.datepicker.state.view.year--;
        self.updateView();
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    updateView: function () {
        var self = this;
        this.defineSelectedMonth();
        this._updateNavigator();
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     * @private
     */
    _render: function () {
        var self = this;
        for (m in this.monthRange) {
            $("<div/>").data({
                monthIndex: m
            }).addClass("month" + m).addClass(self.cssClass.monthItem).text(self.monthRange[m].name.fa).appendTo(self.container)
                .click(function () {
                    self.datepicker.selectMonth($(this).data().monthIndex);
                    return false;
                });
        }
        ;
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
 * @constructor
 */
var MonthPicker = function (options, container) {
    return inherit(this, [Class_Sprite, ClassMonthPicker, options, {
        container: container
    }]);
};
