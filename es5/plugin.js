"use strict";

var log = function log(input) {
    console.log(input);
};
"use strict";

var ClassDateRange = {
    /**
     * @property monthRange
     */
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
    },

    /**
     * @property weekRange
     */
    weekRange: {
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
    },

    /**
     * @property persianDaysName
     */
    persianDaysName: ["اورمزد", "بهمن", "اوردیبهشت", "شهریور", "سپندارمذ", "خورداد", "امرداد", "دی به آذز", "آذز", "آبان", "خورشید", "ماه", "تیر", "گوش", "دی به مهر", "مهر", "سروش", "رشن", "فروردین", "بهرام", "رام", "باد", "دی به دین", "دین", "ارد", "اشتاد", "آسمان", "زامیاد", "مانتره سپند", "انارام", "زیادی"]
};
'use strict';

var Datepicker = function Datepicker(inputElement) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DefaultConfig;

    this.$container = inputElement;
    this.inputElement = inputElement;
    this.initialUnix = null;
    // TODO: extend with memeber config dosent handles
    this.options = new Options(DefaultConfig, this);
    this.state = new State(options, this);
    this.view = new View(options, this);

    this._defineOnInitState = function () {
        var garegurianDate = null;
        this.initialUnix = null;
        if ($(this.$container)[0].nodeName === 'INPUT') {
            garegurianDate = new Date(this.inputElement.getAttribute('value')).valueOf();
        } else {
            garegurianDate = new Date($(this.$container).data('date')).valueOf();
        }
        if (garegurianDate && garegurianDate != 'undefined') {
            this.initialUnix = garegurianDate;
        } else {
            this.initialUnix = new Date().valueOf();
        }
        return this;
    };
    this._updateStateOnInit = function () {
        this.state.updateView('unix', this.initialUnix);
    };
    this._defineOnInitState();
    this._updateStateOnInit();

    this.navigator = new Navigator(options, this);
    return {
        'datepicker': this,
        'state': this.state
    };
};
'use strict';

/**
 * Overwrite by option passed to plugin
 * {@link http://http://babakhani.github.io/PersianWebToolkit/doc/datepicker/0.3.5/}
 * @class ClassConfig
 * @memberOf ClassDatepicker
 * @type {{cssClass: string, daysTitleFormat: string, persianDigit: boolean, viewMode: string, position: string, autoClose: boolean, toolbox: boolean, format: boolean, observer: boolean, altField: boolean, altFormat: string, inputDelay: number, viewFormat: string, formatter: formatter, altFieldFormatter: altFieldFormatter, show: show, hide: hide, onShow: onShow, onHide: onHide, onSelect: onSelect, timePicker: {enabled: boolean}, dayPicker: {enabled: boolean}, monthPicker: {enabled: boolean}, yearPicker: {enabled: boolean}}}
 */
var DefaultConfig = {

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description if false datepicker initiate with empty value in input.
   * @type {boolean}
   * @default true
   */
  'initialValue': true,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description if true all digit convert to persian digit.
   * @type {boolean}
   * @default true
   */
  'persianDigit': true,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description Acceptable value : day,month,year
   * @property viewMode
   * @type {string}
   * @default day
   */
  'viewMode': 'day',

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description [x,y] , define a position of datepicker relative to input element.
   * @property position
   * @type {string|Array}
   * @default auto
   */
  'position': 'auto',

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description If true picker close When Select day
   * @property autoClose
   * @type {boolean}
   * @default false
   */
  'autoClose': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
   * @desc format
   * @type {boolean}
   * @default false
   */
  'format': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc observer
   * @type {boolean}
   * @default false
   */
  'observer': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc inputDelay
   * @type {number}
   * @default 800
   */
  'inputDelay': 800,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc format value of input
   * @param unixDate
   * @returns {*}
   */
  'formatter': function formatter(unixDate) {
    var self = this;
    var pdate = new persianDate(unixDate);
    pdate.formatPersian = false;
    return pdate.format(self.format);
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class'
   * @desc altField
   * @type {boolean}
   * @default false
   */
  'altField': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
   * @desc altField
   * @type {string}
   * @default unix
   */
  'altFormat': 'unix',

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc format value of 'altField' input
   * @param unixDate
   * @returns {*}
   */
  'altFieldFormatter': function altFieldFormatter(unixDate) {
    var self = this;
    var thisAltFormat = self.altFormat.toLowerCase();
    if (thisAltFormat === "gregorian" || thisAltFormat === "g") {
      return new Date(unixDate);
    }
    if (thisAltFormat === "unix" || thisAltFormat === "u") {
      return unixDate;
    } else {
      return new persianDate(unixDate).format(self.altFormat);
    }
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc Open the date picker.
   * @method
   * @returns {ClassConfig}
   */
  'show': function show() {
    this.view.fixPosition(this);
    this.element.main.show();
    this.onShow(this);
    this._viewed = true;
    return this;
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc Hide the date picker
   * @method
   * @returns {ClassConfig}
   */
  'hide': function hide() {
    if (this._viewed) {
      this.element.main.hide();
      this.onHide(this);
      this._viewed = false;
    }
    return this;
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc Removes the datepicker functionality completely.
   * @method
   * @param self
   */
  'destroy': function destroy() {
    this.inputElem.removeClass(self.cssClass);
    this.element.main.remove();
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc A function that takes current datepicker instance. It is called just before the datepicker is displayed.
   * @event
   * @param self
   */
  'onShow': function onShow(self) {},

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc A function that takes current datepicker instance. It is called just before the datepicker Hide.
   * @event
   * @param self
   */
  'onHide': function onHide(self) {},

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc A function that takes current datepicker unixDate. It is called When Day Select.
   * @event
   * @param unixDate
   */
  'onSelect': function onSelect(unixDate) {
    return this;
  },

  /**
   * @see ClassNavigator
   * @memberOf ClassDatepicker.ClassConfig
   * @desc navigator config object
   * @property navigator
   * @type {object}
   * @default true
   */
  'navigator': {
    /**
     * @desc Enable or Disable dayPicker
     */
    'enabled': true,

    /**
     * @desc navigator text config object
     */
    'text': {
      /**
       * @desc text of next btn
       */
      'btnNextText': "<",

      /**
       * @desc text of prev btn
       */
      'btnPrevText': ">"
    },

    /**
     * @desc Trigger When Next button clicked
     * @event
     * @param navigator
     */
    'onNext': function onNext(navigator) {
      //log("navigator next ");
    },

    /**
     * @desc Trigger When Prev button clicked
     * @event
     * @param navigator
     */
    'onPrev': function onPrev(navigator) {
      //log("navigator prev ");
    },

    /**
     * @desc Trigger When Switch view button clicked
     * @event
     * @param navigator
     */
    'onSwitch': function onSwitch(state) {
      // console.log("navigator switch ");
    }
  },

  /**
   * @see ClassToolbox
   * @memberOf ClassDatepicker.ClassConfig
   * @desc toolbox config object
   * @property toolbox
   * @type {object}
   * @default true
   * @deprecated 0.2.3
   */
  'toolbox': {
    'enabled': true,
    'text': {
      btnToday: "امروز"
    },
    onToday: function onToday(toolbox) {
      //log("toolbox today btn");
    }
  },

  /**
   * @see ClassTimePicker
   * @memberOf ClassDatepicker.ClassConfig
   * @desc timepicker config object
   * @property timePicker
   * @type {object}
   */
  'timePicker': {
    'enabled': false,
    'showSeconds': true,
    'showMeridian': true,

    'secondStep': 1,
    'minuteStep': 1,
    'hourStep': 1,

    'scrollEnabled': true,
    /**
     * @deprecated 0.3.5
     */
    'changeOnScroll': true
  },

  /**
   * @see ClassDayPicker
   * @memberOf ClassDatepicker.ClassConfig
   * @desc dayPicker config object
   * @property dayPicker
   * @type {object}
   */
  'dayPicker': {
    'enabled': true,
    'scrollEnabled': true,
    'titleFormat': 'YYYY MMMM',
    'titleFormatter': function titleFormatter(year, month) {
      if (this.datepicker.persianDigit === false) {
        window.formatPersian = false;
      }
      var titleStr = new persianDate([year, month]).format(this.titleFormat);
      window.formatPersian = true;
      return titleStr;
    },
    'onSelect': function onSelect(selectedDayUnix) {
      //log("daypicker month day :" + selectedDayUnix);
    }

  },

  /**
   * @see ClassMonthPicker
   * @memberOf ClassDatepicker.ClassConfig
   * @desc monthPicker config object
   * @property monthPicker
   * @type {object}
   */
  'monthPicker': {
    'enabled': true,
    'scrollEnabled': true,
    'titleFormat': 'YYYY',
    'titleFormatter': function titleFormatter(unix) {
      if (this.datepicker.persianDigit === false) {
        window.formatPersian = false;
      }
      var titleStr = new persianDate(unix).format(this.titleFormat);
      window.formatPersian = true;
      return titleStr;
    },
    'onSelect': function onSelect(monthIndex) {
      //log("daypicker select day :" + monthIndex);
    }
  },

  /**
   * @see ClassYearPicker
   * @memberOf ClassDatepicker.ClassConfig
   * @desc yearPicker config object
   * @property yearPicker
   * @type {object}
   */
  'yearPicker': {
    'enabled': true,
    'scrollEnabled': true,
    'titleFormat': 'YYYY',
    'titleFormatter': function titleFormatter(year) {
      var remaining = parseInt(year / 12, 10) * 12;
      return remaining + "-" + (remaining + 11);
    },
    'onSelect': function onSelect(monthIndex) {
      //log("daypicker select Year :" + monthIndex);
    }
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc if true all pickers hide and just shpw timepicker
   * @property justSelectOnDate
   * @type {boolean}
   */
  'onlyTimePicker': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc if true date select just by click on day in month grid
   * @property justSelectOnDate
   * @type {boolean}
   */
  'justSelectOnDate': true,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc set min date on datepicker
   * @property minDate
   * @type {boolean}
   */
  'minDate': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc set max date on datepicker
   * @property maxDate
   * @type {boolean}
   */
  'maxDate': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc check date avalibility
   * @property unix
   * @type {function}
   */
  'checkDate': function checkDate(unix) {
    return true;
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc check month avalibility
   * @property month index
   * @type {function}
   */
  'checkMonth': function checkMonth(month) {
    return true;
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc check year avalibility
   * @property year
   * @type {function}
   */
  'checkYear': function checkYear(year) {
    return true;
  }
};
"use strict";
'use strict';

var checkMonthAccess = function checkMonthAccess(month) {
    log('checkYearAccess');

    // var self = this,
    //     output = true,
    //     y = null;
    // if (this.datepicker.state._filetredDate) {
    //     y = this.datepicker.state.view.year;
    //     var startMonth = this.datepicker.state.filterDate.start.month,
    //         endMonth = this.datepicker.state.filterDate.end.month,
    //         startYear = this.datepicker.state.filterDate.start.year,
    //         endYear = this.datepicker.state.filterDate.end.year;
    //     if (
    //         (startYear == endYear && endYear == y && month >= startMonth && month <= endMonth)
    //         |
    //         (y != endYear && y == startYear && month >= startMonth)
    //         |
    //         (y != startYear && y == endYear && month <= endMonth)
    //         |
    //         (y > startYear && y < endYear)
    //     ) {
    //         output = true;
    //     }
    //     else {
    //         return false;
    //     }
    // }
    // if (output) {
    //     return self.datepicker.checkMonth(month, y);
    // }
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Navigator = function () {
    function Navigator(options, datepicker) {
        _classCallCheck(this, Navigator);

        this.datepicker = datepicker;
        this._attachEvents();
    }

    _createClass(Navigator, [{
        key: '_attachEvents',
        value: function _attachEvents() {
            var that = this;
            $(this.datepicker.view.rendered).find('.btn').click(function () {
                if ($(this).is('.btn-next')) {
                    that.datepicker.state.next();
                } else if ($(this).is('.btn-switch')) {
                    that.datepicker.state.switchViewMode();
                } else if ($(this).is('.btn-prev')) {
                    that.datepicker.state.prev();
                }
            });
        }
    }]);

    return Navigator;
}();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Options = function Options(DefaultConfig) {
    _classCallCheck(this, Options);

    return DefaultConfig;
};
"use strict";

/**
 * Persian-Datepicker
 * @author Reza Babakhani
 */

/**
 * @author babakhani.reza@gmail.com
 * @description jquery plugin initializer
 */
(function ($) {
    $.fn.persianDatepicker = $.fn.pDatepicker = function (options) {
        var args = Array.prototype.slice.call(arguments),
            output = null,
            self = this;
        if (!this) {
            $.error("Invalid selector");
        }
        $(this).each(function () {
            // encapsulation Args
            var emptyArr = [],
                tempArg = args.concat(emptyArr),
                dp = $(this).data("datepicker"),
                funcName = null;
            if (dp && typeof tempArg[0] === "string") {
                funcName = tempArg[0];
                output = dp[funcName](tempArg[0]);
            } else {
                self.pDatePicker = new Datepicker(this, options);
            }
        });
        $(this).data('datepicker', self.pDatePicker);
        return this;
    };
})(jQuery);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = function () {
    function State(options, datepicker) {
        _classCallCheck(this, State);

        this.datepicker = datepicker;
        this._filetredDate = false;
        this.viewmode = datepicker.options.viewMode; // defaul 'day'
        this.filterDate = {
            start: {
                year: 0,
                month: 0,
                date: 0,
                hour: 0,
                minute: 0,
                second: 0,
                unixDate: 0
            },
            end: {
                year: 0,
                month: 0,
                date: 0,
                hour: 0,
                minute: 0,
                second: 0,
                unixDate: 0
            }
        };
        this.view = {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null
        };
        this.selected = {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null
        };
        return this;
    }

    _createClass(State, [{
        key: '_changeViewMode',
        value: function _changeViewMode(viewmodeStr) {
            log('_changeViewMode : ' + viewmodeStr);
            this.viewmode = viewmodeStr;
        }
    }, {
        key: '_updateViewUnix',
        value: function _updateViewUnix() {
            this.view.dateObj = new persianDate([this.view.year, this.view.month, this.view.date, this.view.hour, this.view.minute, this.view.second]);
            this.view.unixDate = this.view.dateObj.valueOf();
            this.datepicker.view.render(this.view);
            return this;
        }
    }, {
        key: 'next',
        value: function next() {
            log('state next');
        }
    }, {
        key: 'prev',
        value: function prev() {
            log('state prev');
        }
    }, {
        key: 'switchViewMode',
        value: function switchViewMode() {
            log('state switchViewMode');
        }
    }, {
        key: 'updateView',
        value: function updateView(key, value) {
            var self = this;
            switch (key) {
                case 'unix':
                    var pd = new persianDate(value);
                    self.view.year = pd.year();
                    self.view.month = pd.month();
                    self.view.date = pd.date();
                    break;
                case 'year':
                    this.view.year = value;
                    break;
                case 'month':
                    this.view.month = value;
                    break;
                case 'date':
                    this.view.month = value;
                    break;
            }
            this._updateViewUnix();
            return this;
        }
    }]);

    return State;
}();
"use strict";

var Template = "\n<div id=\"plotId\" class=\"datepicker-plot-area datepicker-plot-area-inline-view\">\n\n    \n    {{#navigator.enabled}}\n    <div class=\"navigator\">\n        <div class=\"datepicker-header\">\n            <div class=\"btn btn-next\">&lt;</div>\n            <div class=\"btn btn-switch\">{{ switch.date }}</div>\n            <div class=\"btn btn-prev\">&gt;</div>\n        </div>\n    </div>\n    {{/navigator.enabled}}\n    \n    {{#days.enabled}}\n    <div class=\"datepicker-day-view\" >    \n        <div class=\"month-grid-box\">\n            <div class=\"header\">\n                <div class=\"title\"></div>\n                <div class=\"header-row\">\n                    <div class=\"header-row-cell\">\u0634</div>\n                    <div class=\"header-row-cell\">\u06CC</div>\n                    <div class=\"header-row-cell\">\u062F</div>\n                    <div class=\"header-row-cell\">\u0633</div>\n                    <div class=\"header-row-cell\">\u0686</div>\n                    <div class=\"header-row-cell\">\u067E</div>\n                    <div class=\"header-row-cell\">\u062C</div>\n                </div>\n            </div>    \n            <table cellspacing=\"0\" class=\"table-days\">\n                <tbody>\n                    <tr>\n                        <td class=\"\"><span unixdate=\"1468611000000\" class=\"other-month\">\u06F2\u06F6</span></td>\n                        <td class=\"\"><span unixdate=\"1468697400000\" class=\"other-month\">\u06F2\u06F7</span></td>\n                        <td class=\"\"><span unixdate=\"1468783800000\" class=\"other-month\">\u06F2\u06F8</span></td>\n                        <td class=\"\"><span unixdate=\"1468870200000\" class=\"other-month\">\u06F2\u06F9</span></td>\n                        <td class=\"\"><span unixdate=\"1468956600000\" class=\"other-month\">\u06F3\u06F0</span></td>\n                        <td class=\"\"><span unixdate=\"1469043000000\" class=\"other-month\">\u06F3\u06F1</span></td>\n                        <td class=\"\"><span unixdate=\"1469129400000\">\u06F1</span></td>\n                    </tr>\n                    <tr>\n                        <td class=\"\"><span unixdate=\"1469215800000\">\u06F2</span></td>\n                        <td class=\"\"><span unixdate=\"1469302200000\">\u06F3</span></td>\n                        <td class=\"\"><span unixdate=\"1469388600000\">\u06F4</span></td>\n                        <td class=\"\"><span unixdate=\"1469475000000\">\u06F5</span></td>\n                        <td class=\"\"><span unixdate=\"1469561400000\">\u06F6</span></td>\n                        <td class=\"\"><span unixdate=\"1469647800000\">\u06F7</span></td>\n                        <td class=\"\"><span unixdate=\"1469734200000\">\u06F8</span></td>\n                    </tr>\n                    <tr>\n                        <td class=\"\"><span unixdate=\"1469820600000\">\u06F9</span></td>\n                        <td class=\"\"><span unixdate=\"1469907000000\">\u06F1\u06F0</span></td>\n                        <td class=\"\"><span unixdate=\"1469993400000\">\u06F1\u06F1</span></td>\n                        <td class=\"\"><span unixdate=\"1470079800000\">\u06F1\u06F2</span></td>\n                        <td class=\"\"><span unixdate=\"1470166200000\">\u06F1\u06F3</span></td>\n                        <td class=\"\"><span unixdate=\"1470252600000\">\u06F1\u06F4</span></td>\n                        <td class=\"\"><span unixdate=\"1470339000000\">\u06F1\u06F5</span></td>\n                    </tr>\n                    <tr>\n                        <td class=\"\"><span unixdate=\"1470425400000\">\u06F1\u06F6</span></td>\n                        <td class=\"\"><span unixdate=\"1470511800000\">\u06F1\u06F7</span></td>\n                        <td class=\"\"><span unixdate=\"1470598200000\">\u06F1\u06F8</span></td>\n                        <td class=\"\"><span unixdate=\"1470684600000\">\u06F1\u06F9</span></td>\n                        <td class=\"\"><span unixdate=\"1470771000000\">\u06F2\u06F0</span></td>\n                        <td class=\"\"><span unixdate=\"1470857400000\">\u06F2\u06F1</span></td>\n                        <td class=\"\"><span unixdate=\"1470943800000\">\u06F2\u06F2</span></td>\n                    </tr>\n                    <tr>\n                        <td class=\"\"><span unixdate=\"1471030200000\">\u06F2\u06F3</span></td>\n                        <td class=\"\"><span unixdate=\"1471116600000\">\u06F2\u06F4</span></td>\n                        <td class=\"\"><span unixdate=\"1471203000000\">\u06F2\u06F5</span></td>\n                        <td class=\"\"><span unixdate=\"1471289400000\">\u06F2\u06F6</span></td>\n                        <td class=\"\"><span unixdate=\"1471375800000\">\u06F2\u06F7</span></td>\n                        <td class=\"\"><span unixdate=\"1471462200000\">\u06F2\u06F8</span></td>\n                        <td class=\"\"><span unixdate=\"1471548600000\">\u06F2\u06F9</span></td>\n                    </tr>\n                    <tr>\n                        <td class=\"\"><span unixdate=\"1471635000000\">\u06F3\u06F0</span></td>\n                        <td class=\"\"><span unixdate=\"1471721400000\">\u06F3\u06F1</span></td>\n                        <td class=\"\"><span unixdate=\"1471807800000\" class=\"other-month\">\u06F1</span></td>\n                        <td class=\"\"><span unixdate=\"1471894200000\" class=\"other-month\">\u06F2</span></td>\n                        <td class=\"\"><span unixdate=\"1471980600000\" class=\"other-month\">\u06F3</span></td>\n                        <td class=\"\"><span unixdate=\"1472067000000\" class=\"other-month\">\u06F4</span></td>\n                        <td class=\"\"><span unixdate=\"1472153400000\" class=\"other-month\">\u06F5</span></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n    <div class=\"datepicker-month-view\">\n        {{#month.list}}\n            <div class=\"month1 month-item \">{{title}}</div>            \n        {{/month.list}}\n    </div>\n    {{/month.enabled}}\n    \n    {{#year.enabled}}\n        <div class=\"datepicker-year-view\" >\n            {{#year.list}}\n                {{#enabled}}\n                    <div class=\"year-item \">{{title}}</div>\n                {{/enabled}}\n                {{^enabled}}\n                    <div class=\"year-item year-item-disable\">{{title}}</div>\n                {{/enabled}}\n                \n            {{/year.list}}\n        </div>\n    {{/year.enabled}}\n    <div class=\"datepicker-time-view\"></div>\n    <div class=\"toolbox \">\n        <div class=\"btn-today\">\u0627\u0645\u0631\u0648\u0632</div>\n    </div>\n</div>\n";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var View = function () {
    function View(options, datepicker) {
        _classCallCheck(this, View);

        this.yearsViewCount = 12;
        this.datepicker = datepicker;
        this.rendered = null;
        return this;
    }

    _createClass(View, [{
        key: 'checkYearAccess',
        value: function checkYearAccess(y) {
            var output = true;
            if (this.datepicker.state._filetredDate) {
                var startYear = this.datepicker.state.filterDate.start.year;
                var endYear = this.datepicker.state.filterDate.end.year;
                if (startYear <= y & y <= endYear) {
                    output = true;
                } else {
                    return false;
                }
            }
            if (output) {
                return this.datepicker.options.checkYear(y);
            }
        }
    }, {
        key: 'getYearViewModel',
        value: function getYearViewModel(viewState) {
            var _this = this;

            /**
             * @description Generate years list based on viewState year
             * @return ['1380',n+12,'1392']
             */
            var list = [].concat(_toConsumableArray(Array(this.yearsViewCount).keys())).map(function (value) {
                return value + parseInt(viewState.year / _this.yearsViewCount) * _this.yearsViewCount;
            });
            /*
             * @description Generate years object based on list
             */
            var yearsModel = [];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    yearsModel.push({
                        title: i,
                        enabled: this.checkYearAccess(i)
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return {
                enabled: true,
                list: yearsModel
            };
        }

        /* TODO: move this method to filter class */

    }, {
        key: 'getMonthViewModel',
        value: function getMonthViewModel(data) {
            return {
                enabled: false,
                list: [{
                    title: ClassDateRange.monthRange['1'].name.fa
                }, {
                    title: ClassDateRange.monthRange['2'].name.fa
                }]
            };
        }
    }, {
        key: 'getViewModel',
        value: function getViewModel(data) {
            return {
                plotId: '',
                switch: {
                    enabled: true,
                    date: data.dateObj.format()
                },
                navigator: {
                    enabled: true
                },
                days: {
                    enabled: false

                },
                month: this.getMonthViewModel(data),
                year: this.getYearViewModel(data)
            };
        }
    }, {
        key: 'render',
        value: function render(data) {
            Mustache.parse(Template);
            this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
            $('body').append(this.rendered);
        }
    }]);

    return View;
}();
