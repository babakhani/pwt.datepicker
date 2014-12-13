var Views_pDatePicker = {
    cssClass: {
        datePickerPlotArea: "datepicker-plot-area",
        dayView: "datepicker-day-view",
        monthView: "datepicker-month-view",
        yearView: "datepicker-year-view",
        navigator: "navigator",
        monthItem: "month-item",
        selectedMonth: "selected",
        yearItem: "year-item",
        selectedYear: "selected",
        toolbox: "toolbox "
    },
    container: {},
    views: {
        "default": {
            render: function (self) {
                self.view_data = {
                    css: self.cssClass
                };
                self.element = {};
                self.element.main = $.tmplMustache(TEMPLATE.datepciker, self.view_data).appendTo($("body"));
                self.view.fixPosition(self);
                // SHow Hide Picker
                ///////////////////////////////////////////////
                self.inputElem.focus(function () {
                    self.show();
                });
                self.inputElem.click(function (e) {
                    e.stopPropagation();
                    return false;
                });
                self.inputElem.blur(function () {
                    if (!$.browser.msie) {
                        self.hide();
                    }
                });
                $(document).click(function () {
                    self.inputElem.blur();
                    self.hide();
                });
                $(self.element.main).mousedown(function (e) {
                    e.stopPropagation();
                    return false;
                });
                // Define Containers
                self.container.dayView = $(self.element.main).children('.' + self.cssClass.dayView);
                self.container.monthView = $(self.element.main).children('.' + self.cssClass.monthView).hide();
                self.container.yearView = $(self.element.main).children('.' + self.cssClass.yearView).hide();
                self.container.toolbox = $(self.element.main).children('.' + self.cssClass.toolbox);
                self.container.navigator = $(self.element.main).children('.' + self.cssClass.navigator);
                // Append Navigator
                ///////////////////////////////////////////////
                self.navigator = new Navigator({datepicker: self}, self.container.navigator);
                // Append Toolbox
                ///////////////////////////////////////////////
                if (self.toolbox) {
                    self.toolbox = new Toolbox({}, self.container.toolbox);
                } else {
                    self.container.toolbox.remove();
                }
                // Day Picker
                ///////////////////////////////////////////////
                self.dayPicker = new Daypicker({datepicker: self}, self.container.dayView);
                self.monthPicker = new MonthPicker({datepicker: self}, self.container.monthView);
                self.view.changeView(self, self.viewMode);
                //self.yearPickerView = new self.view.YearPicker(self);
                self._syncWithImportData(self.state.unixDate);
                return this;
            },
            changeView: function (self, viewName) {
                var pd = new persianDate(self.state.unixDate);
                self.navigator.switchRelation(viewName);
                switch (viewName) {
                    case ('month'):
                        self.container.yearView.hide();
                        self.container.dayView.hide();
                        self.container.monthView.show();
                        break;
                    case ('year'):
                        self.container.dayView.hide();
                        self.container.monthView.hide();
                        self.container.yearView.show();
                        break;
                    case ('day'):
                        self.container.yearView.hide();
                        self.container.monthView.hide();
                        self.container.dayView.show();
                        break;
                }
                //self.dayPickerView.updateView();
                return this;
            },
            // ---------------------------------------------------------------------------  Month View
            MonthPicker: function (self) {
                var pd = new persianDate(self.state.unixDate),
                    monthRaneg = Class_DateRange.monthRange
                self.view_data = {
                    css: self.cssClass,
                    btnNextText: "<",
                    btnSwitchText: pd.format("YYYY"),
                    btnPrevText: ">"
                };
                self.element.monthBox = $.tmplMustache(self.tmpl.header, self.view_data).appendTo(self.container.monthView);
                self.element.monthBox.children("." + self.cssClass.btnSwitch).click(function () {
                    self.view.changeView(self, "year")
                    return false;
                });
                for (m in monthRaneg) {
                    $("<div/>").data({
                        monthIndex: m
                    }).addClass("month" + m).addClass(self.cssClass.monthItem).text(monthRaneg[m].name.fa).appendTo(self.container.monthView).click(function () {
                        self.state.viewMonth = $(this).data().monthIndex;
                        self._updateState("month", $(this).data().monthIndex);
                        self.view.changeView(self, "day");
                        return false;
                    });
                }
                ;
                self.element.monthBox.children("." + self.cssClass.btnNext).click(function () {
                    self.state.viewYear++;
                    self.monthPickerView.updateView();
                    return false;
                });
                self.element.monthBox.children("." + self.cssClass.btnPrev).click(function () {
                    self.state.viewYear--;
                    self.monthPickerView.updateView();
                    return false;
                });
                this.defineSelectedMonth = function () {
                    self.container.monthView.children('.' + self.cssClass.monthItem).removeClass(self.cssClass.selectedMonth);
                    if (self.state.viewYear == self.state.selectedYear) {
                        self.container.monthView.children(".month" + self.state.selectedMonth).addClass(self.cssClass.selectedMonth)
                    }
                    return this;
                };
                this.defineSelectedMonth();
                this.updateView = function () {
                    this.defineSelectedMonth();
                    self.element.monthBox.children("." + self.cssClass.btnSwitch).text(self._formatDigit(self.state.viewYear))
                }
                return this;
            },
            // ---------------------------------------------------------------------------  Year View
            YearPicker: function (self) {
                var pd = new persianDate(self.state.unixDate);
                var year = pd.year();
                var remaining = parseInt(year / 12) * 12;
                self.view_data = {
                    css: self.cssClass,
                    btnNextText: "<",
                    btnSwitchText: self._formatDigit(remaining) + "-" + self._formatDigit(remaining + 11),
                    btnPrevText: ">"
                };
                self.element.yearHeaderBox = $.tmplMustache(self.tmpl.header, self.view_data).appendTo(self.container.yearView);
                this.applyYearList = function () {
                    var pd = new persianDate(self.state.unixDate)
                        , year = self.state.viewYear
                        , remaining = parseInt(year / 12) * 12;

                    self.container.yearView.children("." + self.cssClass.yearItem).remove();
                    // Apply Year
                    for (i in range(12)) {
                        var yearItem = $("<div/>").addClass(self.cssClass.yearItem).data({
                            year: (remaining + parseInt(i))
                        }).text(self._formatDigit(remaining + parseInt(i)))
                            .appendTo(self.container.yearView)
                        if (year == remaining + parseInt(i)) {
                            yearItem.addClass(self.cssClass.selectedYear)
                        }
                    }
                    self.container.yearView.children("." + self.cssClass.yearItem).click(function () {
                        var y = $(this).data().year;
                        self.state.viewYear = y;
                        self._updateState("year", y);
                        self.view.changeView(self, "month");
                        return false;
                    });
                    return this;
                };
                this.applyYearList();

                self.element.yearHeaderBox.children("." + self.cssClass.btnSwitch).click(function () {
                    return false;
                });
                self.element.yearHeaderBox.children("." + self.cssClass.btnNext).click(function () {
                    self.state.viewYear += 12;
                    self.yearPickerView.applyYearList().updateView();
                    return false;
                });
                self.element.yearHeaderBox.children("." + self.cssClass.btnPrev).click(function () {
                    self.state.viewYear -= 12;
                    self.yearPickerView.applyYearList().updateView();
                    return false;
                });
                this.updateView = function () {
                    self.yearPickerView.applyYearList();
                    self.container.yearView.children("." + self.cssClass.yearItem).each(function () {
                        $(this).removeClass(self.cssClass.selectedYear)
                        if ($(this).data().year == self.state.selectedYear) {
                            $(this).addClass(self.cssClass.selectedYear)
                        }
                    });
                    var pd = new persianDate([self.state.viewYear, self.state.viewMonth]);
                    var year = pd.year();
                    var remaining = parseInt(year / 12) * 12;
                    self.element.yearHeaderBox.children("." + self.cssClass.btnSwitch).text(self._formatDigit(remaining) + "-" + self._formatDigit(remaining + 11));
                    return this;
                }
                return this;
            },
            fixPosition: function (self) {
                var inputX = self.inputElem.offset().top;
                var inputY = self.inputElem.offset().left;
                if (self.position == "auto") {
                    var inputHeight = self.fullHeight(self.inputElem);
                    self.element.main.css({
                        top: (inputX + inputHeight) + 'px',
                        left: inputY + 'px'
                    });
                } else {
                    self.element.main.css({
                        top: (inputX + self.position[0]) + 'px',
                        left: (inputY + self.position[1]) + 'px'
                    });
                }
                return this;
            },
            updateAllViews: function (self) {
                self.dayPickerView.updateView();
                self.monthPickerView.updateView();
                self.yearPickerView.updateView();
                return self;
            }
        }
    }
};