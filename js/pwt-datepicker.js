/*
// Jquery Persian Datepicker
// Copyright 2011, Software Freedom Conservancy, Inc.
// Dual licensed under the MIT or GPL Version 2 licenses.
// babakhani reza@gmail.com
// babakhani.github.io/PersianWebToolkit
// Beta Version 0.2.2
// Dependency :  Jquery.js , pwt-date.js
 Chnage Log:
      0.2.2
          Fix Ie8 
      0.2.1
            Fix manual entry
       0.2.0
            Add jquery manifest some version
       0.0.6
            Add manual entry
            rename $.tmpl 
 
      0.0.5
            Fix Datepicker position on window.resize
            Add manual text change 
 
      0.0.4
            Implement Jquery plugin manifest
            Add Observer Option
            Add : format,formatter, altField,altFormat,altFieldFormatter 
                        show(),hide(),destroy()
            deprecate: viewFormat ,mask,maskFormatter,viewFormatter
     0.0.3 remove jquery tmpl
*/
(function ($) {
          
Object.keys = Object.keys || (function() {
          var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = ! {
                    toString : null
          }.propertyIsEnumerable("toString"), DontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'], DontEnumsLength = DontEnums.length;

          return function(o) {
                    if ( typeof o != "object" && typeof o != "function" || o === null)
                              throw new TypeError("Object.keys called on a non-object");

                    var result = [];
                    for (var name in o) {
                              if (hasOwnProperty.call(o, name))
                                        result.push(name);
                    }

                    if (hasDontEnumBug) {
                              for (var i = 0; i < DontEnumsLength; i++) {
                                        if (hasOwnProperty.call(o, DontEnums[i]))
                                                  result.push(DontEnums[i]);
                              }
                    }

                    return result;
          };
})();


    $.event.special.textchange = {
        setup: function (data, namespaces) {
            $.event.special.textchange.saveLastValue(this);
            $(this).bind('keyup.textchange', $.event.special.textchange.handler);
            $(this).bind('cut.textchange paste.textchange input.textchange', $.event.special.textchange.delayedHandler);
        },
        teardown: function (namespaces) {
            $(this).unbind('.textchange');
        },
        handler: function (event) {
            $.event.special.textchange.triggerIfChanged($(this));
        },
        delayedHandler: function (event) {
            var element = $(this);
            setTimeout(function () {
                $.event.special.textchange.triggerIfChanged(element);
            }, 25);
        },
        triggerIfChanged: function (element) {
            var current = element[0].contentEditable === 'true' ? element.html() : element.val();
            if (current !== element.data('lastValue')) {
                element.trigger('textchange', element.data('lastValue'));

                // element.data('lastValue', current);
            }
        },
        saveLastValue: function (element) {
            $(element).data('lastValue', element.contentEditable === 'true' ? $(element).html() : $(element).val());
        }
    };
    $.event.special.hastext = {

        setup: function (data, namespaces) {
            $(this).bind('textchange', $.event.special.hastext.handler);
        },

        teardown: function (namespaces) {
            $(this).unbind('textchange', $.event.special.hastext.handler);
        },

        handler: function (event, lastValue) {
            if ((lastValue === '') && lastValue !== $(this).val()) {
                $(this).trigger('hastext');
            }
        }
    };

    $.event.special.notext = {

        setup: function (data, namespaces) {
            $(this).bind('textchange', $.event.special.notext.handler);
        },

        teardown: function (namespaces) {
            $(this).unbind('textchange', $.event.special.notext.handler);
        },

        handler: function (event, lastValue) {
            if ($(this).val() === '' && $(this).val() !== lastValue) {
                $(this).trigger('notext');
            }
        }
    };
    // Enhance val() so that this plugin is aware of programmatic changes to
    // text using val().
    var origValFn = $.fn.val;
    $.fn.val = function () {
        var returnValue = origValFn.apply(this, arguments);
        if (arguments.length) {
            this.each(function () {
                $.event.special.textchange.triggerIfChanged($(this));
            });
        }
        return returnValue;
    };
})(jQuery);

(function () {
    $.tmplMustache = function (input, dict) {
        // Micro Mustache Template engine
        String.prototype.format = function string_format(arrayInput) {
            function replacer(key) {
                var keyArr = key.slice(2, -2).split("."), firstKey = keyArr[0], SecondKey = keyArr[1];
                if (arrayInput[firstKey] instanceof Object) {
                    return arrayInput[firstKey][SecondKey];
                }
                else {
                    return arrayInput[firstKey];
                }
            }
            return this.replace(/{{\s*[\w\.]+\s*}}/g, replacer);
        };
        return $(input.format(dict));
    };
    String.prototype.toPersianDigit = function (a) {
        return this.replace(/\d+/g, function (digit) {
            var enDigitArr = [], peDigitArr = [];
            for (var i = 0; i < digit.length; i++) {
                enDigitArr.push(digit.charCodeAt(i));
            }
            for (var j = 0; j < enDigitArr.length; j++) {
                peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!a && a == true) ? 1584 : 1728)));
            }
            return peDigitArr.join('');
        });
    };

    String.prototype.toEngilshDigit = function (a) {
        return this.replace(/\d+/g, function (digit) {
            var enDigitArr = [], peDigitArr = [];
            for (var i = 0; i < digit.length; i++) {
                enDigitArr.push(digit.charCodeAt(i));
            }
            for (var j = 0; j < enDigitArr.length; j++) {
                peDigitArr.push(String.fromCharCode(enDigitArr[j] - ((!!a && a == true) ? 1584 : 1728)));
            }
            return enDigitArr.join('');
        });
    };


    var log = function (input) {
        //console.log(input);
    }, range = function (e) {
        r = [];
        var i = 0;
        while (i <= e - 1) {
            r.push(i);
            i++;
        }
        return r;
    }, inherit = function (self, baseClasses) {
        copyObject = function (o) {
            return $.extend(true, {}, o);
        }
        var args = [true, self, copyObject(Class_Base)];
        var events = [];
        for (index in baseClasses) {
            var cls = copyObject(baseClasses[index]);
            if (!cls) {
                continue;
            }
            if (cls['events'] && Object.keys(cls['events']).length > 0) {
                events.push(cls['events']);
            }
            cls.events = {};
            args.push(cls);
        }
        $.extend.apply(self, args);
        for (index in events) {
            var eventsObject = events[index];
            var eventKeys = Object.keys(eventsObject)
            for (keyIndex in eventKeys) {
                var key = eventKeys[keyIndex]
                var val = eventsObject[key];
                if (key && val) {
                    self.attachEvent(key, val);
                }
            }
        }
        self.init();
        return self;
    }, Class_Base = {
        init: function () {
            this.isInstance = true;
            this.raiseEvent('init');
        },
        fullHeight: function (element) {
            return $(element).height()
            + parseInt($(element).css("padding-top"))
            + parseInt($(element).css("padding-bottom"))
            + parseInt($(element).css("border-top"))
            + parseInt($(element).css("border-bottom"))
        },
        // Event Management
        attachEvent: function (eventName, func) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            for (f in this.events[eventName]) {
                if (this.events[eventName][f].toString() == func.toString()) {
                    $.error("The function {0} was already added to event's chain.".format(func.toString));
                }
            }
            this.events[eventName].push(func)
            return this;
        },
        dettachEvent: function (eventName, func) {
            if (!this.events[eventName]) {
                $.error("The event's chain is empty.");
            }
            for (f in this.events[eventName]) {
                if (this.events[eventName][f].toString() == func.toString()) {
                    delete this.events[eventName][f];
                }
            }
            return this;
        },
        clearEvent: function (eventName) {
            this.events[eventName] = null;
            return this;
        },
        raiseEvent: function (eventName, args) {
            if (!eventName || !this.events) {
                return;
            }
            if(args){
            }else{
                  args = [];
            }
            var currentObject = this.events[eventName];
            if (!currentObject) {
                return;
            } else if (typeof currentObject == 'function') {
                      currentObject.apply(this, args);
            } else {
                for (e in currentObject) {
                          currentObject[e].apply(this, args);
                }
            }
            return this;
        },
        events: {
            init: null // e
        }
    }, Class_Sprite = {
        defaultView: "default",
        // Views Interfcae
        events: {
            init: function () {
                this.render();
            },
            render: null
        },
        views: {
            'default': {
                render: function () {
                }
            }
        },
        element: {
            main: null// Root Element Of Sprite
        },
        createElementByClass: function (className) {
            return this.element.find('.' + className);
        },
        createStaffElement: function () {
            var mainElement = this.element.main
            for (c in this.cssClass) {
                if (c != 'main') {
                    var staffElement = mainElement.find('.' + this.cssClass[c]);
                    this.element[c] = staffElement;
                }
            };
            return this;
        },
        render: function (viewName) {
            if (!viewName) {
                viewName = 'default';
            }
            this.raiseEvent('render');
            this.view = this.views[viewName];
            return this.view.render(this);
        }, tmpl: {}
    }, Class_DateRange = {
        monthRange: {
            1: {
                name: {
                    fa: "فروردین"
                },
                abbr: {
                    fa: "فرو"
                }
            },
            2: {
                name: {
                    fa: "اردیبهشت"
                },
                abbr: {
                    fa: "ارد"
                }
            },
            3: {
                name: {
                    fa: "خرداد"
                },
                abbr: {
                    fa: "خرد"
                }
            },
            4: {
                name: {
                    fa: "تیر"
                },
                abbr: {
                    fa: "تیر"
                }
            },
            5: {
                name: {
                    fa: "مرداد"
                },
                abbr: {
                    fa: "مرد"
                }
            },
            6: {
                name: {
                    fa: "شهریور"
                },
                abbr: {
                    fa: "شهر"
                }
            },
            7: {
                name: {
                    fa: "مهر"
                },
                abbr: {
                    fa: "مهر"
                }
            },
            8: {
                name: {
                    fa: "آبان"
                },
                abbr: {
                    fa: "آبا"
                }

            },
            9: {
                name: {
                    fa: "آذر"
                },
                abbr: {
                    fa: "آذر"
                }
            },
            10: {
                name: {
                    fa: "دی"
                },
                abbr: {
                    fa: "دی"
                }
            },
            11: {
                name: {
                    fa: "بهمن"
                },
                abbr: {
                    fa: "بهم"
                }
            },
            12: {
                name: {
                    fa: "اسفند"
                },
                abbr: {
                    fa: "اسف"
                }
            }
        }, weekRange: {
            0: {
                name: {
                    fa: "شنبه"
                },
                abbr: {
                    fa: "ش"
                }
            },
            1: {
                name: {
                    fa: "یکشنبه"
                },
                abbr: {
                    fa: "ی"
                }
            },
            2: {
                name: {
                    fa: "دوشنبه"
                },
                abbr: {
                    fa: "د"
                }
            },
            3: {
                name: {
                    fa: "سه شنبه"
                },
                abbr: {
                    fa: "س"
                }
            },
            4: {
                name: {
                    fa: "چهار شنبه"
                },
                abbr: {
                    fa: "چ"
                }
            },
            5: {
                name: {
                    fa: "پنج شنبه"
                },
                abbr: {
                    fa: "پ"
                }
            },
            6: {
                name: {
                    fa: "جمعه"
                },
                abbr: {
                    fa: "ج"
                }
            }
        }, persianDaysName: ["اورمزد", "بهمن", "اوردیبهشت", "شهریور", "سپندارمذ", "خورداد", "امرداد", "دی به آذز", "آذز", "آبان", "خورشید", "ماه", "تیر", "گوش", "دی به مهر", "مهر", "سروش", "رشن", "فروردین", "بهرام", "رام", "باد", "دی به دین", "دین", "ارد", "اشتاد", "آسمان", "زامیاد", "مانتره سپند", "انارام", "زیادی"]
    },
          Views_MonthGrid = {
              cssClass: {
                  main: "month-grid-box",
                  header: "header",
                  headerTitle: "title",
                  headerRow: "header-row",
                  headerRowCell: "header-row-cell",
                  daysTable: "table-days",
                  currentMonth: "current-month",
                  today: "today",
                  selected: 'selected'
              },
              views: {
                  "default": {
                      render: function (self) {
                          self.view_data = {
                              css: self.cssClass
                          };
                          self.tmpl.main = "<div class='{{css.main}}' >\
                                                      <div class='{{css.header}}' > \
                                                            <div class='{{css.headerTitle}}' ></div>\
                                                            <div class='{{css.headerRow}}' ></div>\
                                                      </div>\
                                                      <table cellspacing='0' class='{{css.daysTable}}'  ><tbody><tr><td /><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr></tbody></table>\
                                                </div>";
                          self.element = $.tmplMustache(self.tmpl.main, self.view_data).appendTo(self.container);
                          self.header = self.createElementByClass(self.cssClass.header);
                          self.headerRow = self.createElementByClass(self.cssClass.headerRow);
                          for (weekDay in self.weekRange) {
                              $("<div/>").text(self.weekRange[weekDay].abbr.fa).addClass(self.cssClass.headerRowCell).appendTo(self.headerRow)[0];
                          };
                          self.daysBox = self.createElementByClass(self.cssClass.daysTable);
                          this.renderDays(self);
                      },
                      renderDays: function (self) {
                          self._updateState();
                          self.daysList = [];
                          var i = 1;
                          var addSpan = function (i) {
                              var dayPartPersianDate = new persianDate([self.state.year, self.state.month, i]);
                              var dayPartUnixTime = dayPartPersianDate.valueOf();
                              self.daysList.push($("<span/>").text(self._formatDigit(i)).data({ day: i, unixDate: dayPartUnixTime }).appendTo($(this))[0]);
                          }
                          $(self.daysBox).find("td").each(function (index) {
                              $(this).empty();
                              if (self.firstWeekDayOfMonth == 0) {
                                  addSpan.apply(this, [i]);
                                  i++;
                                  self.firstWeekDayOfMonth += 2;
                              } else if (index + 1 == self.firstWeekDayOfMonth && i <= self.daysCount) {
                                  addSpan.apply(this, [i]);
                                  i++;
                                  self.firstWeekDayOfMonth += 1;
                              }
                          });
                          // Select Day
                          $(self.daysBox).find("td").children("span").click(function () {
                              $thisUnixDate = $(this).data("unixDate");
                              self.raiseEvent("selectDay", [$thisUnixDate]);
                              return false;
                          });
                          self.raiseEvent("reRender");
                      },
                      applyStory: function (self) {
                          if (self.pcal.dataService) {
                              $(self.daysBox).find("td").children("span").each(function () {
                                  var unixDate = $(this).data("unixDate");
                                  var storyList = self.pcal.dataService.getDayStory(unixDate);
                                  var storyLength = storyList.length;
                                  switch (true) {
                                      case (storyLength == 0):
                                          $(this).removeClass("busy-day");
                                          $(this).removeClass("orange-day");
                                          $(this).removeClass("normal-day");
                                          break;
                                      case (storyLength >= 5):
                                          $(this).addClass("busy-day");
                                          break;
                                      case (storyLength >= 3):
                                          $(this).addClass("orange-day");
                                          break;
                                      case (storyLength >= 2):
                                          $(this).addClass("work-day");
                                          break;
                                      case (storyLength == 1):
                                          $(this).addClass("normal-day");
                                          break;
                                  }
                              });
                          }
                      }
                  }//------- End of Default view
              }
          }, Views_pDatePicker = {
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
                          return this;
                      },

                      fixPosition: function (self) {
                          var inputX = self.inputElem.offset().top;
                          var inputY = self.inputElem.offset().left;
                          if (self.position == "auto") {
                                // TODO: fuulheight has problem in ie8 and temporary fixed
                              var inputHeight = self.inputElem.height();
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
                              self.state.unixDate = todayUnix;
                              self._syncViewWidthSelected();
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
                              if (self.state.viewYear == self.state.selectedYear && self.state.viewMonth == self.state.selectedMonth) {
                                  self.dayPickerView.mGrid.selectDate(self.state.unixDate);
                              }
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
          }, Class_MonthGrid = {
              // List Of days Html object
              state: {
                  year: null,
                  month: null,
                  date: null,
                  firstWeekDayOfMonth: null,
                  daysCount: null
              },
              persianDigit: true,
              _formatDigit: function (digit) {
                  if (this.persianDigit)
                      return digit.toString().toPersianDigit();
                  else
                      return digit;
              },
              events: {
                  init: function () {
                  },
                  render: function () {
                      this.state.month = this.month;
                      this.state.year = this.year;
                  },
                  reRender: function () {
                      // this.view.applyStory(this);
                      this._markToday();
                  },
                  selectDay: function (x) {
                  }
              },
              _markToday: function () {
                  var self = this;
                  var todate = new persianDate();
                  $(self.element).removeClass(self.cssClass.today);
                  $.each(self.daysList, function (index, value) {
                      var htmlItemDay = $(this).data().day;
                      if (htmlItemDay == todate.date() && self.state.month == todate.month() && self.state.year == todate.year()) {
                          $(this).addClass(self.cssClass.today);
                          $(self.element).addClass(self.cssClass.today);
                      }
                  });
                  return this;
              },
              _updateState: function () {
                  var self = this;
                  var t = new persianDate();
                  self.daysCount = t.daysInMonth(self.state.year, self.state.month);
                  self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
                  return this;
              },
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
                  // Reset Class
                  $.each(self.daysList, function (index, value) {
                      var htmlItemDay = $(this).data().day;
                      //print("htmlItemDay : "+htmlItemDay)
                      if (htmlItemDay == self.state.date) {
                          $(this).addClass(self.cssClass.selected);
                      } else {
                          $(this).removeClass(self.cssClass.selected);
                      }
                  });
                  return this;
              },
              updateAs: function (year, month) {
                  var self = this;
                  self.state.year = year;
                  self.state.month = month;
                  self.view.renderDays(self);
                  return this;
              },
              goToYear: function (year) {
                  this.updateAs(year, this.state.month);
              },
              applyStory: function () {
                  //this.view.applyStory(this);
              }
          }, MonthGrid = function (options) {
              // Change !!
              //this.pcal = options.parent.pcal;
              inherit(this, [Class_Sprite, Views_MonthGrid, Class_DateRange, Class_MonthGrid, options]);
              var self = this;
              return this;
          }, Class_pDatepicker = {
              cssClass: 'datepicker-container',
              daysTitleFormat: "YYYY MMMM",
              persianDigit: true,
              // Released Do not Any Change
              viewMode: "day", /// day,month,year
              position: "auto", // [x,y]
              autoClose: false,
              toolbox: true,
              // 0.0.4      
              format: false,
              observer: false,
              altField: false,
              altFormat: "unix",

              // Deprecated In 0.0.4
              mask: false, //unix,Gregorian
              viewFormat: "YYYY / MM / DD",

              formatter: function (unixDate /* javascript date object*/) {
                  var self = this;
                  var pdate = new persianDate(unixDate);

                  pdate.formatPersian = false;
                  return pdate.format(self.viewFormat);

                  //return self._formatDigit(pdate.format(self.viewFormat));
              },
              altFieldFormatter: function (unixDate) {
                  var self = this;
                  if (self.altFormat.toLowerCase() == "gregorian" | self.altFormat.toLowerCase() == "g")
                      return new Date(self.state.unixDate);
                  if (self.altFormat.toLowerCase() == "unix" | self.altFormat.toLowerCase() == "u")
                      return self.state.unixDate;
                  else
                      return new persianDate(self.state.unixDate).format(self.altFormat);
              },
              // Deprecated In 0.0.4
              maskFormatter: function (unixDate /* javascript date object*/) {
                  var self = this;
                  if (self.mask.toLowerCase() == "gregorian")
                      return new Date(self.state.unixDate);
                  if (self.mask.toLowerCase() == "unix")
                      return self.state.unixDate;
                  else
                      //$.error("Persian Datepicker : Invalid Mask Config, Check Your Configuration Please. ");
                      return self.state.unixDate;
              },

              //--------------------------------------------------------
              state: {
                  unixDate: new persianDate().valueOf(),
                  selectedYear: 0,
                  selectedMonth: 0,
                  selectedDay: 0,
                  viewYear: 0,
                  viewMonth: 0,
                  viewDay: 0
              },
              events: {},
              _viewed: false,
              // ------------------------------------------------------------------------ Public Methud
              show: function () {
                  this.view.fixPosition(this);
                  this.element.main.show();
                  this.onShow(this);
                  this._viewed = true;
                  return this;
              },
              hide: function () {
                  if (this._viewed) {
                      this.element.main.hide();
                      this.onHide(this);
                      this._viewed = false;
                  }
                  return this;
              },
              init: function () {
                  var self = this;
                  this.inputElem.addClass(self.cssClass);
                  if (self.mask) { self._appendMaskInput(); };
                  if (self.observer) { self._observer(); }
                  // TODO:  Must Remove Before Release 0.1.0
                  if (self.format) { self.viewFormat = self.format };
                  if (self.viewFormatter) { self.formatter = self.viewFormatter };

                  $(window).resize(function () {
                      self.view.fixPosition(self);
                  });
                  return this
              },
              // Removes the datepicker functionality completely. 
              destroy: function () {
                  this.inputElem.removeClass(self.cssClass);
                  this.element.main.remove();
                  return this;
              },
              option: function (options) {
                  var key = options[0], val = options[1];
                  // is array
                  if (typeof options[0] === "object") {
                      for (o in key) {
                          this[o] = key[o];
                      }
                      return this;
                  }
                  else if (val && val !== "undefined" || val == false) {
                      this[key] = val;
                      return this;
                  } else {
                      return this[key];
                  }
              },
              onShow: function (self) { },
              onHide: function (self) { },
              onSelect: function (unixDate) {
              },
              updateStaff: function () {
                  this._syncViewWidthSelected()
                  this.dayPickerView.updateView()
                  this.monthPickerView.updateView()
                  this.yearPickerView.updateView()
                  return this;
              },
              _observer: function () {

                  var self = this;


                  var ctrlDown = false;
                  var ctrlKey = 17, vKey = 86, cKey = 67;

                  $(document).keydown(function (e) {
                      if (e.keyCode == ctrlKey)
                          ctrlDown = true;
                  }).keyup(function (e) {
                      if (e.keyCode == ctrlKey)
                          ctrlDown = false;
                  });
                  var delay = (function () {
                      var timer = 0;
                      return function (callback, ms) {
                          clearTimeout(timer);
                          timer = setTimeout(callback, ms);
                      };
                  })();

                  self.inputElem.bind("keyup", function (e) {
                      if (!self._flagSelfManipulate) {
                          var trueKey;
                          if (e.keyCode < 105 && e.keyCode > 96 || e.keyCode < 58 && e.keyCode > 47 || (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey))) {
                              trueKey = true;
                          }
                          var newDate = new Date(self.inputElem.val());
                          var inputText = self.inputElem.val();
                          var inputArray = self.inputElem.val().split("/");
                          if (inputArray.length == 3) {
                              var trueYear = inputArray[0].toString().length <= 4;
                              var trueMonth = inputArray[1].toString().length <= 2;
                              var trueDay = inputArray[2].toString().length <= 2;
                          }
                          $.each(inputArray, function (index, key) {
                              inputArray[index] = parseInt(key);
                          });
                          if (trueKey && trueYear && trueMonth && trueDay && newDate != "Invalid Date") {
                              delay(function () {
                                  var newPersainDate = new persianDate(inputArray);
                                  self._updateState("unix", newPersainDate.valueOf(), false);
                                  self.updateStaff();
                                  self._updateInputElement();
                              }, 800)
                          }
                          return true;
                      }
                  });

                  $(self.altField).bind("textchange", function () {
                      if (!self._flagSelfManipulate) {
                          var newDate = new Date($(this).val());
                          if (newDate != "Invalid Date") {
                              var newPersainDate = new persianDate(newDate);
                              self._updateState("unix", newPersainDate.valueOf(), true);
                              self.updateStaff();
                          }
                      }
                  });
                  return this;
              },
              _flagSelfManipulate: true,
              _selectDate: function (key, unixDate) {
                  var self = this;
                  self._updateState("unix", unixDate, true);
                  self.dayPickerView.updateView();
                  self.onSelect(unixDate, this)
                  if (self.autoClose) {
                      self.element.main.hide();
                  }
                  return this;
              },
              _formatDigit: function (digit) {
                  if (this.persianDigit)
                      return digit.toString().toPersianDigit();
                  else
                      return digit;
              },
              _appendMaskInput: function () {
                  var self = this;
                  var inputName = this.inputElem.attr("name");
                  this.inputElem.attr("name", "");
                  self.visualInput = this.inputElem.clone().attr({
                      "type": "hidden",
                      "name": inputName
                  }).removeAttr("class");
                  self.visualInput.attr("id", "");
                  this.inputElem.after(self.visualInput);
                  return this;
              },
              // Update Every Thing This Update All State
              _updateState: function (key, val, updateDisplayInput) {
                  var self = this;
                  if (key == "year") {
                      this.state.selectedYear = val;
                      this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
                  } else if (key == "unix") {
                      this.state.unixDate = val;
                      var pd = new persianDate(this.state.unixDate);
                      this.state.selectedYear = pd.year();
                      this.state.selectedMonth = pd.month();
                      this.state.selectedDay = pd.date();

                  } else if (key = "month") {
                      this.state.selectedMonth = val;
                      this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
                  }
                  if (updateDisplayInput == true) {
                      self._updateInputElement();
                  }
                  return this;
              },
              _updateInputElement: function () {
                  var self = this;
                  self._flagSelfManipulate = true;
                  // Update MAsk Field
                  if (self.mask) {
                      self.visualInput.val(self.maskFormatter(self.state.unixDate));
                  }
                  // Update Alt Field
                  if (self.altField && $(self.altField).length >= 1) {
                      $(self.altField).val(self.altFieldFormatter(self.state.unixDate));
                  }
                  // Update Display Field
                  this.inputElem.val(self.formatter(self.state.unixDate)).data({ "lastValue": "" });
                  // Update Display Field MetaData
                  var peDate = new pDate(self.state.unixDate);
                  peDate.formatPersian = false;
                  this.inputElem.attr("pDateEnChar", peDate.format("YYYY/MM/DD"));
                  self._flagSelfManipulate = false;
                  return this;
              },
              // one time run
              _defineCurrentState: function () {
                  if (this.inputElem.val() && new Date(this.inputElem.val()) != "Invalid Date" && new Date(this.inputElem.val()) != "undefined") {
                      this.state.unixDate = new Date(this.inputElem.val()).valueOf();
                  } else {
                      this.state.unixDate = new Date().valueOf();
                  }
                  var pd = new persianDate(this.state.unixDate);
                  this.state.selectedYear = this.state.viewYear = pd.year();
                  this.state.selectedMonth = this.state.viewMonth = pd.month();
                  this.state.selectedDay = this.state.viewDay = pd.date();
                  this._updateInputElement();
                  return this;
              },
              _syncViewWidthSelected: function () {
                  var pd = new persianDate(this.state.unixDate);
                  this.state.selectedYear = this.state.viewYear = pd.year();
                  this.state.selectedMonth = this.state.viewMonth = pd.month();
                  this.state.selectedDay = this.state.viewDay = pd.date();
                  return this;
              }
          }, Datepicker = function (mainElem, options) {
              // Prevent Duplicate 
              inherit(this, [Class_Sprite, Class_pDatepicker, Views_pDatePicker, options, {
                  inputElem: $(mainElem)
              }]);
              this._defineCurrentState();
              var viewName = 'default';
              this.view = this.views[viewName];
              this.raiseEvent('render');
              this.view.render(this);
              this.inputElem.data("datepicker", this);
              return this;
          };
    (function ($) {
        $.fn.persianDatepicker = $.fn.pDatepicker = function (options) {
            var args = Array.prototype.slice.call(arguments), output = this;
            if (!this) {
                $.error("Invalid selector");
            }
            $(this).each(function () {
                // encapsulation Args
                var emptyArr = new Array, tempArg = args.concat(emptyArr), dp = $(this).data("datepicker");
                if (dp && typeof tempArg[0] == "string") {
                    var funcName = tempArg[0], funcArgs = tempArg.splice(0, 1);
                    output = dp[funcName](tempArg);
                }
                else {
                    this.pDatePicker = new Datepicker(this, options);
                }
            });
            return output;
        };
    })(jQuery);


})();