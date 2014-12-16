var Views_pDatePicker = {
    cssClass: {
        datePickerPlotArea: "datepicker-plot-area",
        yearView: "datepicker-year-view",
        monthView: "datepicker-month-view",
        dayView: "datepicker-day-view",
        navigator: "navigator",
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
                self.element.main = $.tmplMustache(TEMPLATE.datepciker, self.view_data).hide().appendTo($("body"));
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
                self.container.monthView = $(self.element.main).children('.' + self.cssClass.monthView);
                self.container.yearView = $(self.element.main).children('.' + self.cssClass.yearView);
                self.container.toolbox = $(self.element.main).children('.' + self.cssClass.toolbox);
                self.container.navigator = $(self.element.main).children('.' + self.cssClass.navigator);
                // Append Navigator
                ///////////////////////////////////////////////
                self.navigator = new Navigator({datepicker: self}, self.container.navigator);
                // Append Toolbox
                ///////////////////////////////////////////////
                if (self.toolbox) {
                    self.toolbox = new Toolbox({datepicker: self}, self.container.toolbox);
                } else {
                    self.container.toolbox.remove();
                }
                // Day Picker
                ///////////////////////////////////////////////
                self.dayPicker = new Daypicker({datepicker: self}, self.container.dayView);
                self.monthPicker = new MonthPicker({datepicker: self}, self.container.monthView);
                self.yearPicker = new YearPicker({datepicker: self}, self.container.yearView);
                self.changeView(self.viewMode);
                //self.yearPickerView = new self.view.YearPicker(self);
                self._syncWithImportData(self.state.unixDate);
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
            }
        }
    }
};