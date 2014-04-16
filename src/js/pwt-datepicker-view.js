var Views_pDatePicker = {
              cssClass: {
                  datePickerPlotArea: "datepicker-plot-area",
                  dayView: "datepicker-day-view",
                  monthView: "datepicker-month-view",
                  yearView: "datepicker-year-view",
                  datpickerHeader: "datepicker-header",
                  btnNext: "btn-next",
                  btnSwitch: "btn-switch",
                  btnPrev: "btn-prev",
                  monthItem: "month-item",
                  selectedMonth: "selected",
                  yearItem: "year-item",
                  selectedYear: "selected",
                  toolbox: "toolbox ",
                  btnToday: "btn-today"
              },
              container: {},
              views: {
                  "default": {
                      render: function (self) {
                          self.element = {};
                          self.view_data = {
                              css: self.cssClass
                          };
                          self.tmpl.header = "<div class='{{css.datpickerHeader}}' >" + //
                          "<div class='{{css.btnNext}}' >{{btnNextText}}</div>" + //
                          "<div class='{{css.btnSwitch}}' >{{btnSwitchText}}</div>" + //
                          "<div class='{{css.btnPrev}}' >{{btnPrevText}}</div>" + //
                          "</div>";
                          self.tmpl.main = "<div class='{{css.datePickerPlotArea}}' >" + //
                           " <div class='{{css.dayView}}' ></div>" + //
                           "<div class='{{css.monthView}}' ></div>" + //
                           "<div class='{{css.yearView}}' ></div>" + //
                           "<div class='{{css.toolbox}}' ></div>" + //
                           "</div>";
                          self.element.main = $.tmplMustache(self.tmpl.main, self.view_data).hide().appendTo($("body"));
                          // Define Elements
                          self.container.dayView = $(self.element.main).children('.' + self.cssClass.dayView);
                          self.container.monthView = $(self.element.main).children('.' + self.cssClass.monthView).hide();
                          self.container.yearView = $(self.element.main).children('.' + self.cssClass.yearView).hide();
                          self.container.toolbox = $(self.element.main).children('.' + self.cssClass.toolbox);
                          self.view.fixPosition(self);

                          // Append Satff
                          self.dayPickerView = new self.view.DayPicker(self);
                          self.monthPickerView = new self.view.MonthPicker(self);
                          self.yearPickerView = new self.view.YearPicker(self);

                          if (self.toolbox) {
                              self.toolbox = new self.view.Toolbox(self);
                          } else {
                              self.container.toolbox.remove();
                          }
                          // SHow Hide Picker ------------------------
                          self.inputElem.focus(function () {
                              self.show();
                          });
                          self.inputElem.click(function (e) {
                              e.stopPropagation();
                              return false;
                          });
                          self.inputElem.blur(function () {
                             if ( !$.browser.msie ) {
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
                          // ----------------------------------------
                          self.view.changeView(self, self.viewMode);
                          
                           self._syncWithImportData(self.state.unixDate);
                          
                          return this;
                      },
                      fixPosition: function (self) {
                          var inputX = self.inputElem.offset().top;
                          var inputY = self.inputElem.offset().left;
                          if (self.position == "auto") {
                              var inputHeight   = self.fullHeight(self.inputElem);
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
                      },
                      // --------------------------------------------------------------------------- Toolbox
                      Toolbox: function (self) {
                          this.container = self.container.toolbox;
                          var todayUnix = new Date().valueOf();
                          $("<div>امروز</div>").addClass(self.cssClass.btnToday).click(function () {
                              self._updateState("unix", todayUnix, true);
                              self.view.updateAllViews(self);
                              return false;
                          }).appendTo(this.container);
                      },
                      // --------------------------------------------------------------------------- Day View
                      DayPicker: function (self) {
                          var pd = new persianDate(self.state.unixDate);
                          this.container = self.container.dayView;
                          self.view_data = {
                              css: self.cssClass,
                              btnNextText: "<",
                              btnSwitchText: self._formatDigit(pd.format(self.daysTitleFormat)),
                              btnPrevText: ">"
                          };
                          self.element.dayBox = $.tmplMustache(self.tmpl.header, self.view_data).appendTo(this.container);
                          self.element.dayBox.children("." + self.cssClass.btnSwitch).click(function () {
                              self.view.changeView(self, "month");

                              return false;
                          });
                          self.element.dayBox.children("." + self.cssClass.btnNext).click(function () {
                              if (self.state.viewMonth == 12) {
                                  self.state.viewMonth = 1;
                                  self.state.viewYear++;
                              } else {
                                  self.state.viewMonth++;
                              }
                              self.dayPickerView.updateView();
                              return false;
                          });
                          self.element.dayBox.children("." + self.cssClass.btnPrev).click(function () {
                              if (self.state.viewMonth == 1) {
                                  self.state.viewMonth = 12;
                                  self.state.viewYear--;
                              } else {
                                  self.state.viewMonth--;
                              }
                              self.dayPickerView.updateView();
                              return false;
                          });
                          this.mGrid = new MonthGrid({
                              container: self.container.dayView,
                              month: pd.month(),
                              year: pd.year(),
                              persianDigit: self.persianDigit
                          }).selectDate(self.state.unixDate).attachEvent("selectDay", function (x) {
                              self._selectDate("unix", x);
                          });
                          this.updateView = function () {
                              self.dayPickerView.mGrid.updateAs(self.state.viewYear, self.state.viewMonth);
                              self.dayPickerView.mGrid.markSelectedDate(self.state.unixDate)
                              var pdateStr = new persianDate([self.state.viewYear, self.state.viewMonth]).format(self.daysTitleFormat);
                              self.element.dayBox.children("." + self.cssClass.btnSwitch).text(self._formatDigit(pdateStr))
                          };
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
                          };
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
                      changeView: function (self, viewName) {
                          switch (viewName) {
                              case ('month'):
                                  self.container.yearView.hide();
                                  self.container.dayView.hide();
                                  self.monthPickerView.updateView();
                                  self.container.monthView.show();
                                  break;
                              case ('year'):
                                  self.container.dayView.hide();
                                  self.container.monthView.hide();
                                  self.yearPickerView.updateView()
                                  self.container.yearView.show();
                                  break;
                              case ('day'):
                                  self.container.yearView.hide();
                                  self.container.monthView.hide();
                                  self.dayPickerView.updateView();
                                  self.container.dayView.show();
                                  break;
                          }
                          return this;
                      }
                  }
              }
          };