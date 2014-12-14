var Class_YearPicker = {
    cssClass: {
        selectedYear: "selected",
        yearItem: "year-item"
    },
    events: {
        select: function () {
        }
    },
    _updateNavigator: function () {
        var self = this;
        var pd = new persianDate([self.datepicker.state.viewYear, self.datepicker.state.viewMonth]);
        var year = pd.year();
        var remaining = parseInt(year / 12) * 12;
        self.datepicker.navigator.updateSwitchBtn(self.datepicker._formatDigit(remaining) + "-" + self.datepicker._formatDigit(remaining + 11));
    },
    hide: function () {
        this.container.hide();
        return this;
    },
    show: function () {
        this.container.show();
        this._updateNavigator();
        return this;
    },
    next: function () {
        var self = this;
        self.datepicker.state.viewYear += 12;
        self._render().updateView();
        return this;
    },
    prev: function () {
        var self = this;
        self.datepicker.state.viewYear -= 12;
        self._render().updateView();
        return this;
    },
    updateView: function () {
        var self = this;
        self._render();
        self.container.children("." + self.cssClass.yearItem).each(function () {
            $(this).removeClass(self.cssClass.selectedYear)
            if ($(this).data().year == self.datepicker.state.selectedYear) {
                $(this).addClass(self.cssClass.selectedYear)
            }
        });
        self._updateNavigator();
        return this;
    },
    _render: function () {
        var self = this;
        var pd = new persianDate(self.datepicker.state.unixDate)
            , year = self.datepicker.state.viewYear
            , remaining = parseInt(year / 12) * 12;
        self.container.children("." + self.cssClass.yearItem).remove();
        // Apply Year
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
            self.datepicker.state.viewYear = y;
            self.datepicker.updateState("year", y, true);
            self.datepicker.changeView("month");
            return false;
        });
        return this;
    },
    init: function () {
        this._render();
    }
};
var YearPicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_YearPicker, options, {
        container: container
    }]);
};
