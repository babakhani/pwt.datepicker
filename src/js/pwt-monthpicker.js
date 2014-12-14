var Class_MonthPicker = {
    cssClass: {
        selectedMonth: "selected",
        monthItem: "month-item"
    },
    monthRange: Class_DateRange.monthRange,
    events: {
        select: function () {
        }
    },
    _updateNavigator: function () {
        var self = this;
        var pdateStr = self.datepicker._formatDigit(self.datepicker.state.viewYear);
        self.datepicker.navigator.updateSwitchBtn(pdateStr);
    },
    hide: function () {
        this.container.hide();
        return this;
    },
    show: function () {
        this.container.show();
        this._updateNavigator();
        this.defineSelectedMonth();
        return this;
    },
    defineSelectedMonth: function () {
        var self = this;
        self.container.children('.' + self.cssClass.monthItem).removeClass(self.cssClass.selectedMonth);
        if (self.datepicker.state.viewYear == self.datepicker.state.selectedYear) {
            self.container.children(".month" + self.datepicker.state.selectedMonth).addClass(self.cssClass.selectedMonth)
        }
        return this;
    },
    next: function () {
        var self = this;
        self.datepicker.state.viewYear++;
        self.updateView();
        return this;
    },
    prev: function () {
        var self = this;
        self.datepicker.state.viewYear--;
        self.updateView();
        return this;
    },
    updateView: function () {
        var self = this;
        this.defineSelectedMonth();
        this._updateNavigator();
        return this;
    },
    _render: function () {
        var self = this;
        for (m in this.monthRange) {
            $("<div/>").data({
                monthIndex: m
            }).addClass("month" + m).addClass(self.cssClass.monthItem).text(self.monthRange[m].name.fa).appendTo(self.container)
                .click(function () {
                    self.datepicker.state.viewMonth = $(this).data().monthIndex;
                    self.datepicker.updateState("month", $(this).data().monthIndex, true);
                    self.datepicker.changeView('day');
                    return false;
                });
        }
        ;
        return this;
    },
    init: function () {
        this._render();
    }
};
var MonthPicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_MonthPicker, options, {
        container: container
    }]);
};
