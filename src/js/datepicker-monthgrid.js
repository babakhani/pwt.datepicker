/**
 *
 * @type {{state: {year: null, month: null, date: null, firstWeekDayOfMonth: null, daysCount: null}, persianDigit: boolean, _formatDigit: _formatDigit, events: {init: init, render: render, reRender: reRender, selectDay: selectDay}, _markToday: _markToday, _updateState: _updateState, selectDate: selectDate, markSelectedDate: markSelectedDate, updateAs: updateAs, goToNextMonth: goToNextMonth, goToPrevMonth: goToPrevMonth, goToYear: goToYear, applyStory: applyStory}}
 */
var Class_MonthGrid = {
    /**
     * state
     */
    state: {
        year: null,
        month: null,
        date: null,
        firstWeekDayOfMonth: null,
        daysCount: null
    },


    /**
     * perisnaDigit
     */
    persianDigit: true,


    /**
     *
     * @param digit
     * @returns {*}
     * @private
     */
    _formatDigit: function (digit) {
        if (this.persianDigit) {
            return digit.toString().toPersianDigit();
        }
        else {
            return digit;
        }
    },


    /**
     * evenets
     */
    events: {
        init: function () {
        },
        render: function () {
            this.state.month = this.month;
            this.state.year = this.year;
        },
        reRender: function () {
            this._markToday();
        },
        selectDay: function (x) {
        }
    },


    /**
     *
     * @returns {Class_MonthGrid}
     * @private
     */
    _markToday: function () {
        var self = this;
        var todate = new persianDate();
        $(self.element).removeClass(self.cssClass.today);
        $.each(self.daysList, function (index, value) {
            var htmlItemDay = $(this).data().day;
            var htmlItemMonth = $(this).data().month;
            var htmlItemYear = $(this).data().year;
            if (htmlItemDay == todate.date() && htmlItemMonth == todate.month() && htmlItemYear == todate.year()) {
                $(this).addClass(self.cssClass.today);
                $(self.element).addClass(self.cssClass.today);
            }
        });
        return this;
    },


    /**
     *
     * @returns {Class_MonthGrid}
     * @private
     */
    // TODO : must remove
    _updateState: function () {
        var self = this;
        var t = new persianDate();
        self.daysCount = t.daysInMonth(self.state.year, self.state.month);
        self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
        return this;
    },


    /**
     *
     * @param unixDate
     * @returns {Class_MonthGrid}
     */
    selectDate: function (unixDate) {
        var self = this, reRenderFlag;
        var sDate = new persianDate(unixDate);
        if (self.state.year == sDate.year() && self.state.month == sDate.month()) {
            reRenderFlag = false;
        } else {
            reRenderFlag = true;
        }
        self.state.year = sDate.year();
        self.state.month = sDate.month();
        self.state.date = sDate.date();
        if (reRenderFlag) {
            self.view.renderDays(self);
        }
        self.markSelectedDate(unixDate);
        return this;
    },


    /**
     *
     * @param unixDate
     */
    markSelectedDate: function (unixDate) {
        var self = this;
        $.each(self.daysList, function (index, value) {
            var viewItemUnix = parseInt($(value).attr("unixDate"));
            if (self.isSameDay(viewItemUnix, unixDate)) {
                $(this).addClass(self.cssClass.selected);
            } else {
                $(this).removeClass(self.cssClass.selected);
            }
        });
    },


    /**
     *
     * @param year
     * @param month
     * @returns {Class_MonthGrid}
     */
    updateAs: function (year, month) {
        var self = this;
        self.state.year = year;
        self.state.month = month;
        self.view.renderDays(self);
        return this;
    },


    /**
     *
     * @returns {boolean}
     */
    goToNextMonth: function () {
        var self = this;
        if (self.state.month == 12) {
            self.state.month = 1;
            self.state.viewYear++;
        } else {
            self.state.month++;
        }
        self.updateAs(self.state.year, self.state.month)
        return false;
    },


    /**
     * goTOPrevMonth
     */
    goToPrevMonth: function () {
    },


    /**
     *
     * @param year
     */
    goToYear: function (year) {
        this.updateAs(year, this.state.month);
    },


    /**
     * applyStory
     */
    applyStory: function () {
        //this.view.applyStory(this);
    }
};


/**
 *
 * @param options
 * @returns {MonthGrid}
 * @constructor
 */
MonthGrid = function (options) {
    // Change !!
    //this.pcal = options.parent.pcal;
    inherit(this, [Class_Sprite, Views_MonthGrid, Class_DateRange, Class_MonthGrid, options]);
    var self = this;
    return this;
}
