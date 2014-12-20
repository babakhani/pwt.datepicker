'use strict';
/**
 * @class ViewsMonthGrid
 * @type {{cssClass: {main: string, header: string, headerTitle: string, headerRow: string, headerRowCell: string, daysTable: string, currentMonth: string, today: string, selected: string}, views: {default: {render: render, renderDays: renderDays}}}}
 */
var ViewsMonthGrid = {
    /**
     * cssClass
     */
    cssClass: {
        main: "month-grid-box",
        header: "header",
        headerTitle: "title",
        headerRow: "header-row",
        headerRowCell: "header-row-cell",
        daysTable: "table-days",
        currentMonth: "current-month",
        today: "today",
        selected: 'selected',
        disbaled: 'disabled'
    },


    /**
     *  views
     */
    views: {
        "default": {
            /**
             *
             * @param self
             */
            render: function (self) {
                self.viewData = {
                    css: self.cssClass
                };
                self.element = $.tmplMustache(TEMPLATE.monthGrid, self.viewData).appendTo(self.container);
                self.header = self.createElementByClass(self.cssClass.header);
                self.headerRow = self.createElementByClass(self.cssClass.headerRow);
                var weekDay;
                for (weekDay in self.weekRange) {
                    $("<div/>").text(self.weekRange[weekDay].abbr.fa).addClass(self.cssClass.headerRowCell).appendTo(self.headerRow)[0];
                }
                ;
                self.daysBox = self.createElementByClass(self.cssClass.daysTable);
                this.renderDays(self);
            },
            /**
             *
             * @param self
             */
            renderDays: function (self) {
                self._updateState();
                self.daysList = [];
                var addSpan = function (day, month, year, cssClass) {
                    var dayPartUnixTime = new persianDate([year, month, day]).valueOf();
                    var span = $("<span/>")
                        .text(self._formatDigit(day))
                        .attr("unixDate", dayPartUnixTime)
                        .data({ day: day, month: month, year: year, unixDate: dayPartUnixTime})
                        .addClass(cssClass)
                        .appendTo($(this))[0];
                    self.daysList.push(span);
                }
                var t = new persianDate();
                self.daysCount = t.daysInMonth(self.state.year, self.state.month);
                self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
                var currentMonthIndex = 1;
                var nextMonthIndex = 1;
                $(self.daysBox).find("td").each(function (index) {
                    $(this).empty();
                    if (self.firstWeekDayOfMonth > 1 && index + 1 < self.firstWeekDayOfMonth) {
                        if (self.state.month === 1) {
                            var prevMonth = 12;
                            var prevYear = parseInt(self.state.year) - 1;
                        } else {
                            var prevMonth = parseInt(self.state.month) - 1;
                            var prevYear = parseInt(self.state.year);
                        }
                        var prevMonthDaysCount = t.daysInMonth(prevYear, prevMonth);
                        var day = parseInt((prevMonthDaysCount - self.firstWeekDayOfMonth) + (index + 2));
                        addSpan.apply(this, [day, prevMonth, prevYear, "other-month"])
                    } else if (index + 2 === (currentMonthIndex + self.firstWeekDayOfMonth) && currentMonthIndex <= self.daysCount) {
                        var day = currentMonthIndex;
                        addSpan.apply(this, [day, parseInt(self.state.month), parseInt(self.state.year)])
                        currentMonthIndex++;
                    } else {

                        if (self.state.month === 12) {
                            var nextMonth = 1;
                            var nextYear = parseInt(self.state.year) + 1;
                        } else {
                            var nextMonth = parseInt(self.state.month) + 1;
                            var nextYear = self.state.year;
                        }
                        var day = nextMonthIndex;
                        addSpan.apply(this, [day, nextMonth, nextYear, "other-month"]);
                        nextMonthIndex += 1;
                    }
                    var thisUnix = $(this).children("span").data("unixDate");
                    if (thisUnix >= self.minDate && thisUnix <= self.maxDate) {
                        $(this).removeClass(self.cssClass.disbaled);
                        $(this).children("span").removeClass('other-month');
                    } else {
                        $(this).addClass(self.cssClass.disbaled);

                    }
                });
                $(self.daysBox).find("td").not('.disabled').children("span").click(function () {
                    var $thisUnixDate = $(this).data("unixDate");
                    self.raiseEvent("selectDay", [$thisUnixDate]);
                    return false;
                });
                $(self.daysBox).find('td.disabled').children("span").click(function () {
                    return false;
                });
                self.raiseEvent("reRender");
            }
        }
    }
};