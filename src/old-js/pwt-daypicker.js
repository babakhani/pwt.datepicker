var Class_Daypicker = {
    state: {
        view: {
            unixDate: null,
            year: null,
            month: null,
            day: null,
            hour: null,
            minute: null,
            second: null,
            miliSecond: null
        },
        selected: {
            // like view
        }
    },
    events: {
        select: function () {
        }
    },
    next: function () {

    },
    prev: function () {

    },
    update: function () {

    },
    init: function () {
        var self = this;
        var pd = new pDate();
        this.mGrid = new MonthGrid({
            container: self.container,
            month: pd.month(),
            year: pd.year(),
            //persianDigit : self.persianDigit
        });
        //this.mGrid.selectDate(self.state.unixDate);
        this.mGrid.attachEvent("selectDay", function (x) {
            self._selectDate("unix", x);
        });

    }
};
var Daypicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Daypicker, options, {
        container: container
    }]);
};
