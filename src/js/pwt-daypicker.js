var Class_Daypicker = {
    events: {
        select: function () {
        }
    },
    updateNavigatorSwitchBtn: function () {
    },
    next: function () {
        var self = this;
        if (self.datepicker.state.viewMonth == 12) {
            self.datepicker.state.viewMonth = 1;
            self.datepicker.state.viewYear++;
        } else {
            self.datepicker.state.viewMonth++;
        }
        self.updateView();
        return this;
    },
    prev: function () {
        var self = this;
        if (self.datepicker.state.viewMonth == 1) {
            self.datepicker.state.viewMonth = 12;
            self.datepicker.state.viewYear--;
        } else {
            self.datepicker.state.viewMonth--;
        }
        self.updateView();
        return this;
    },
    updateView: function () {
        var self = this;
        self.mGrid.updateAs(self.datepicker.state.viewYear, self.datepicker.state.viewMonth);
        self.mGrid.markSelectedDate(self.datepicker.state.unixDate);
        this._updateNavigator(self.datepicker.state.viewYear, self.datepicker.state.viewMonth);
        return this;
    },
    _updateNavigator: function (year, month) {
        var self = this;
        var pdateStr = new persianDate([year, month]).format(self.datepicker.daysTitleFormat);
        self.datepicker.navigator.updateSwitchBtn(self.datepicker._formatDigit(pdateStr));
    },
    hide:function(){
        this.container.hide();
        return this;
    },
    show:function(){
        this.container.show();
        this._updateNavigator(self.datepicker.state.year, self.datepicker.state.month);
        return this;
    },
    _render: function () {
        var self = this;
        var pd = new pDate();
        this.mGrid = new MonthGrid({
            container: self.container,
            month: pd.month(),
            year: pd.year(),
            //persianDigit : self.persianDigit
        });
        this.mGrid.selectDate(self.datepicker.state.unixDate);
        this.mGrid.attachEvent("selectDay", function (x) {
            self.datepicker._selectDate("unix", x);
            self.mGrid.selectDate(self.datepicker.state.unixDate);
        });
    },
    init: function () {
        var self = this;
        this._render();
        this._updateNavigator(self.datepicker.state.year, self.datepicker.state.month);
        return this;
    }
};
var Daypicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Daypicker, options, {
        container: container
    }]);
};
