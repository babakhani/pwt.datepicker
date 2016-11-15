'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ClassMonthPicker
 * @type {{cssClass: {selectedMonth: string, monthItem: string}, monthRange: (ClassDateRange.monthRange|*), _updateNavigator: _updateNavigator, hide: hide, show: show, selectMonth: selectMonth, defineSelectedMonth: defineSelectedMonth, next: next, prev: prev, updateView: updateView, _render: _render, init: init}}
 */
var ClassMonthPicker = {
    /**
     * @desc cssClass
     */
    cssClass: {
        selectedMonth: "selected",
        monthItem: "month-item",
        disbaleItem: "month-item-disable"
    },

    /**
     * @desc monthRange
     */
    monthRange: ClassDateRange.monthRange,


    /**
     * @desc _updateNavigator
     * @private
     */
    _updateNavigator: function () {
        var self = this;
        self.datepicker.updateNavigator(this.titleFormatter(self.datepicker.state.view.unixDate));
        return this;
    },


    /**
     * @desc hide
     * @returns {Class_MonthPicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @desc show
     * @returns {Class_MonthPicker}
     */
    show: function () {
        this.container.show();
        this._updateNavigator();
        this._render();
        return this;
    },


    /**
     * @desc selectMonth
     */
    selectMonth: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
    },


    /**
     * @desc defineSelectedMonth
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
     * @desc next
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
     * @desc prev
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
     * @desc updateView
     * @returns {Class_MonthPicker}
     */
    updateView: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
        return this;
    },


    /**
     * @desc _checkMonthAccess
     * @param month
     * @returns {boolean}
     * @private
     */
    _checkMonthAccess: function (month) {
        var self = this,
            output = true;
        if (this.datepicker.state._filetredDate) {
            var y = this.datepicker.state.view.year,
                startMonth = this.datepicker.state.filterDate.start.month,
                endMonth = this.datepicker.state.filterDate.end.month,
                startYear = this.datepicker.state.filterDate.start.year,
                endYear = this.datepicker.state.filterDate.end.year;
            if (
                (startYear == endYear && endYear == y && month >= startMonth && month <= endMonth)
                |
                (y != endYear && y == startYear && month >= startMonth)
                |
                (y != startYear && y == endYear && month <= endMonth)
                |
                (y > startYear && y < endYear)
            ) {
                output = true;
            }
            else {
                return false;
            }
        }
        if (output) {
            return self.datepicker.checkMonth(month, y);
        }
    },


    /**
     * @desc _attachEvents
     * @returns {ClassMonthPicker}
     * @private
     */
    _attachEvents: function () {
        var self = this;
        if (this.scrollEnabled) {
            $(this.container).mousewheel(function (event) {

                if (event.deltaY > 0) {
                    self.next();
                } else {
                    self.prev();
                }
            });
            $(this.container).bind('mousewheel DOMMouseScroll', function (e) {
                var scrollTo = null;

                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }
                if (scrollTo) {
                    e.preventDefault();
                    $(this).scrollTop(scrollTo + $(this).scrollTop());
                }
            });
        }
        return this;
    },

    /**
     * @desc _render
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
                .appendTo(self.container);

            if (self._checkMonthAccess(m)) {
                monthItem.click(function () {
                    self.onSelect($(this).data().monthIndex);
                    self.datepicker.selectMonth(parseInt($(this).data().monthIndex));
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
     * @desc init
     * @returns {ClassMonthPicker}
     */
    init: function () {
        this._render();
        this._attachEvents();
        return this;
    }
};

var MonthPicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassMonthPicker, options, {
        container: container
    }]);
};
