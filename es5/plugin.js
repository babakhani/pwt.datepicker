'use strict';

/**
 *
 * @type {{initialValue: boolean, persianDigit: boolean, viewMode: string, format: boolean, formatter: ClassDatepicker.ClassConfig.formatter, altField: boolean, altFormat: string, altFieldFormatter: ClassDatepicker.ClassConfig.altFieldFormatter, minDate: null, maxDate: null, navigator: {enabled: boolean, text: {btnNextText: string, btnPrevText: string}, onNext: ClassDatepicker.ClassConfig.navigator.onNext, onPrev: ClassDatepicker.ClassConfig.navigator.onPrev, onSwitch: ClassDatepicker.ClassConfig.navigator.onSwitch}, toolbox: {enabled: boolean, text: {btnToday: string}, onToday: ClassDatepicker.ClassConfig.toolbox.onToday}, onlyTimePicker: boolean, onlySelectOnDate: boolean, checkDate: ClassDatepicker.ClassConfig.checkDate, checkMonth: ClassDatepicker.ClassConfig.checkMonth, checkYear: ClassDatepicker.ClassConfig.checkYear, timePicker: {enabled: boolean, step: number, hour: {enabled: boolean, step: null}, minute: {enabled: boolean, step: null}, second: {enabled: boolean, step: null}, meridian: {enabled: boolean}}, dayPicker: {enabled: boolean, titleFormat: string, titleFormatter: ClassDatepicker.ClassConfig.dayPicker.titleFormatter, onSelect: ClassDatepicker.ClassConfig.dayPicker.onSelect}, monthPicker: {enabled: boolean, titleFormat: string, titleFormatter: ClassDatepicker.ClassConfig.monthPicker.titleFormatter, onSelect: ClassDatepicker.ClassConfig.monthPicker.onSelect}, yearPicker: {enabled: boolean, titleFormat: string, titleFormatter: ClassDatepicker.ClassConfig.yearPicker.titleFormatter, onSelect: ClassDatepicker.ClassConfig.yearPicker.onSelect}, onSelect: ClassDatepicker.ClassConfig.onSelect, position: string, onShow: ClassDatepicker.ClassConfig.onShow, onHide: ClassDatepicker.ClassConfig.onHide, onToggle: Config.onToggle, onDestroy: Config.onDestroy, autoClose: boolean, observer: boolean, inputDelay: number}}
 * @member initialValue
 * @todo doc must fix
 */
var Config = {

  /**
   * @type Boolean
   */
  'initialValue': true,

  /**
   * @type Boolean
   */
  'persianDigit': true,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description Acceptable value : day,month,year
   * @property viewMode
   * @type {string}
   * @default day
   * @version 0.6.0
   */
  'viewMode': 'day',

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
   * @desc format
   * @type {boolean}
   * @default false
   * @version 0.6.0
   */
  'format': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc format value of input
   * @param unixDate
   * @returns {*}
   */
  'formatter': function formatter(unixDate) {
    var self = this;
    var pdate = new persianDate(unixDate);
    pdate.formatPersian = this.persianDigit;
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
   * @version 0.6.0
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
      var pd = new persianDate(unixDate);
      pd.formatPersian = this.persianDigit;
      return pd.format(self.altFormat);
    }
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc set min date on datepicker
   * @property minDate
   * @type {boolean}
   */
  'minDate': null,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc set max date on datepicker
   * @property maxDate
   * @type {boolean}
   */
  'maxDate': null,

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
  'onlySelectOnDate': true,

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
  },

  /**
   * @see ClassTimePicker
   * @memberOf ClassDatepicker.ClassConfig
   * @desc timepicker config object
   * @property timePicker
   * @type {object}
   */
  'timePicker': {
    'enabled': true,
    'step': 1,
    'hour': {
      'enabled': true,
      'step': null // overwrite by parent step
    },
    'minute': {
      'enabled': true,
      'step': null // overwrite by parent step
    },
    'second': {
      'enabled': true,
      'step': null // overwrite by parent step
    },
    'meridian': {
      'enabled': true
    }
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
    'titleFormat': 'YYYY MMMM',
    'titleFormatter': function titleFormatter(year, month) {
      var titleDate = new persianDate([year, month]);
      titleDate.formatPersian = this.datepicker.options.persianDigit;
      return titleDate.format(this.datepicker.options.dayPicker.titleFormat);
    },
    'onSelect': function onSelect(selectedDayUnix) {
      debug('dayPicker Event: onSelect : ' + selectedDayUnix);
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
    'titleFormat': 'YYYY',
    'titleFormatter': function titleFormatter(unix) {
      var titleDate = new persianDate(unix);
      titleDate.formatPersian = this.datepicker.options.persianDigit;
      return titleDate.format(this.datepicker.options.monthPicker.titleFormat);
    },
    'onSelect': function onSelect(monthIndex) {
      debug('monthPicker Event: onSelect : ' + monthIndex);
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
    'titleFormat': 'YYYY',
    'titleFormatter': function titleFormatter(year) {
      var remaining = parseInt(year / 12, 10) * 12;
      var startYear = new pDate([remaining]);
      var endYear = new pDate([remaining + 11]);
      startYear.formatPersian = this.datepicker.options.persianDigit;
      endYear.formatPersian = this.datepicker.options.persianDigit;
      return startYear.format(this.datepicker.options.yearPicker.titleFormat) + "-" + endYear.format(this.datepicker.options.yearPicker.titleFormat);
    },
    'onSelect': function onSelect(year) {
      debug('yearPicker Event: onSelect : ' + year);
    }
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc A function that takes current datepicker unixDate. It is called When Day Select.
   * @event
   * @param unixDate
   */
  'onSelect': function onSelect(unixDate) {
    debug(this, 'datepicker Event: onSelect : ' + unixDate);
  },

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
   * @desc A function that takes current datepicker instance. It is called just before the datepicker is displayed.
   * @event
   * @param self
   */
  'onShow': function onShow() {
    debug(this, 'dayPicker Event: onShow ');
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc A function that takes current datepicker instance. It is called just before the datepicker Hide.
   * @event
   * @param self
   */
  'onHide': function onHide() {
    debug(this, 'dayPicker Event: onHide ');
  },

  /**
   *
   */
  'onToggle': function onToggle() {
    debug(this, 'dayPicker Event: onToggle ');
  },

  /**
   *
   */
  'onDestroy': function onDestroy() {
    debug(this, 'dayPicker Event: onDestroy ');
  },

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @description If true picker close When Select day
   * @property autoClose
   * @type {boolean}
   * @default false
   */
  'autoClose': false,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Under Implement ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Un  implemented ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc observer
   * @type {boolean}
   * @default false
   * @deprecated
   */
  'observer': false,

  /**
   * @memberOf ClassDatepicker.ClassConfig
   * @desc inputDelay
   * @type {number}
   * @default 800
   */
  'inputDelay': 800
};
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *
 */
var ConfigClass = function ConfigClass() {
    _classCallCheck(this, ConfigClass);

    return {
        /**
         * @memberOf ConfigClass
         */
        'initialValue': true,
        'persianDigit': true
    };
}

// /**
//  * Desc format <input/> elemnt value
//  * @param unixDate
//  * @return {*}
//  */
// formatter(unixDate) {
//     var self = this;
//     var pdate = new persianDate(unixDate);
//     pdate.formatPersian = this.persianDigit;
//     return pdate.format(self.format);
// }
//
// altFieldFormatter(unixDate) {
//     var self = this;
//     var thisAltFormat = self.altFormat.toLowerCase();
//     if (thisAltFormat === "gregorian" || thisAltFormat === "g") {
//         return new Date(unixDate);
//     }
//     if (thisAltFormat === "unix" || thisAltFormat === "u") {
//         return unixDate;
//     }
//     else {
//         var pd = new persianDate(unixDate);
//         pd.formatPersian = this.persianDigit;
//         return pd.format(self.altFormat);
//     }
// }
//
//
// checkDate(unix) {
//     return true;
// }
//
// checkMonth(month) {
//     return true;
// }
//
// checkYear(year) {
//     return true;
// }
//
// onSelect(unixDate) {
//     debug(this, 'datepicker Event: onSelect : ' + unixDate);
// }
//
// onShow() {
//     debug(this, 'dayPicker Event: onShow ');
// }
//
// onHide() {
//     debug(this, 'dayPicker Event: onHide ');
// }
//
// onToggle() {
//     debug(this, 'dayPicker Event: onToggle ');
// }
//
// onDestroy() {
//     debug(this, 'dayPicker Event: onDestroy ');
// }
//
// constructor() {
//     this.initialValue = true;
//     this.persianDigit = true;
//     this.viewMode = 'day';
//     this.format = false;
//     this.altField = false;
//     this.altFormat = 'unix';
//     this.minDate = null;
//     this.maxDate = null;
//
//     this.onlyTimePicker = false;
//     this.onlySelectOnDate = true;
//
//
//     this.autoClose = false;
//
//     this.position = 'auto';
//
//     this.navigator = {
//         'enabled': true,
//         'text': {
//             'btnNextText': "<",
//             'btnPrevText': ">"
//         },
//         'onNext': function (navigator) {
//             //log("navigator next ");
//         },
//         'onPrev': function (navigator) {
//         },
//         'onSwitch': function (state) {
//             // console.log("navigator switch ");
//         }
//     };
//     this.toolbox = {
//         'enabled': true,
//         'text': {
//             btnToday: "امروز"
//         },
//         onToday: function (toolbox) {
//             //log("toolbox today btn");
//         }
//     };
//
//     this.timePicker = {
//         'enabled': true,
//         'step': 1,
//         'hour': {
//             'enabled': true,
//             'step': null // overwrite by parent step
//         },
//         'minute': {
//             'enabled': true,
//             'step': null // overwrite by parent step
//         },
//         'second': {
//             'enabled': true,
//             'step': null // overwrite by parent step
//         },
//         'meridian': {
//             'enabled': true
//         }
//     };
//
//
//     this.dayPicker = {
//         'enabled': true,
//         'titleFormat': 'YYYY MMMM',
//         'titleFormatter': function (year, month) {
//             var titleDate = new persianDate([year, month]);
//             titleDate.formatPersian = this.datepicker.options.persianDigit;
//             return titleDate.format(this.datepicker.options.dayPicker.titleFormat);
//         },
//         'onSelect': function (selectedDayUnix) {
//             debug('dayPicker Event: onSelect : ' + selectedDayUnix);
//         }
//
//     };
//
//     this.monthPicker = {
//         'enabled': true,
//         'titleFormat': 'YYYY',
//         'titleFormatter': function (unix) {
//             var titleDate = new persianDate(unix);
//             titleDate.formatPersian = this.datepicker.options.persianDigit;
//             return titleDate.format(this.datepicker.options.monthPicker.titleFormat);
//         },
//         'onSelect': function (monthIndex) {
//             debug('monthPicker Event: onSelect : ' + monthIndex);
//         }
//     };
//
//
//     this.yearPicker = {
//         'enabled': true,
//         'titleFormat': 'YYYY',
//         'titleFormatter': function (year) {
//             let remaining = parseInt(year / 12, 10) * 12;
//             let startYear = new pDate([remaining]);
//             let endYear = new pDate([remaining + 11]);
//             startYear.formatPersian = this.datepicker.options.persianDigit;
//             endYear.formatPersian = this.datepicker.options.persianDigit;
//             return startYear.format(this.datepicker.options.yearPicker.titleFormat) + "-" + endYear.format(this.datepicker.options.yearPicker.titleFormat);
//         },
//         'onSelect': function (year) {
//             debug('yearPicker Event: onSelect : ' + year);
//         }
//     }
//
//     return this;
//
// }
;
'use strict';

/**
 * @desc normal log
 * @param input
 */
var log = function log(input) {
    console.log(input);
};

/**
 * @desc show debug messages if window.persianDatepickerDebug set as true
 * @param elem
 * @param input
 */
var debug = function debug(elem, input) {
    if (window.persianDatepickerDebug) {
        if (elem.constructor.name) {
            console.log('Debug: ' + elem.constructor.name + ' : ' + input);
        } else {
            console.log('Debug: ' + input);
        }
    }
};

/**
 * @type {{monthRange: [*], weekRange: {0: {name: {fa: string}, abbr: {fa: string}}, 1: {name: {fa: string}, abbr: {fa: string}}, 2: {name: {fa: string}, abbr: {fa: string}}, 3: {name: {fa: string}, abbr: {fa: string}}, 4: {name: {fa: string}, abbr: {fa: string}}, 5: {name: {fa: string}, abbr: {fa: string}}, 6: {name: {fa: string}, abbr: {fa: string}}}, persianDaysName: [*]}}
 */
var ClassDateRange = {
    /**
     * @property monthRange
     */
    monthRange: [{
        index: 1,
        name: {
            fa: "فروردین"
        },
        abbr: {
            fa: "فرو"
        }
    }, {
        index: 2,
        name: {
            fa: "اردیبهشت"
        },
        abbr: {
            fa: "ارد"
        }
    }, {
        index: 3,
        name: {
            fa: "خرداد"
        },
        abbr: {
            fa: "خرد"
        }
    }, {
        index: 4,
        name: {
            fa: "تیر"
        },
        abbr: {
            fa: "تیر"
        }
    }, {
        index: 5,
        name: {
            fa: "مرداد"
        },
        abbr: {
            fa: "مرد"
        }
    }, {
        index: 6,
        name: {
            fa: "شهریور"
        },
        abbr: {
            fa: "شهر"
        }
    }, {
        index: 7,
        name: {
            fa: "مهر"
        },
        abbr: {
            fa: "مهر"
        }
    }, {
        index: 8,
        name: {
            fa: "آبان"
        },
        abbr: {
            fa: "آبا"
        }

    }, {
        index: 9,
        name: {
            fa: "آذر"
        },
        abbr: {
            fa: "آذر"
        }
    }, {
        index: 10,
        name: {
            fa: "دی"
        },
        abbr: {
            fa: "دی"
        }
    }, {
        index: 11,
        name: {
            fa: "بهمن"
        },
        abbr: {
            fa: "بهم"
        }
    }, {
        index: 12,
        name: {
            fa: "اسفند"
        },
        abbr: {
            fa: "اسف"
        }
    }],

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
        }, 5: {
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Date helper
 */
var DateUtil = function () {
    function DateUtil() {
        _classCallCheck(this, DateUtil);
    }

    _createClass(DateUtil, [{
        key: 'isSameDay',


        /**
         * check if a date is same as b
         * @param dateA
         * @param dateB
         * @return {*|boolean}
         */
        value: function isSameDay(dateA, dateB) {
            return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }

        /**
         * @desc check if a month is same as b
         * @param {Date} dateA
         * @param {Date} dateB
         * @return {*|boolean}
         */

    }, {
        key: 'isSameMonth',
        value: function isSameMonth(dateA, dateB) {
            return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }

        /**
         * @desc normalize time, like check second if bigger than 60
         * @param {String} key
         * @param {Number} value
         * @return {Number}
         */

    }, {
        key: 'normalizeTime',
        value: function normalizeTime(key, value) {
            var output = value;
            if (key == 'hour') {
                if (value < 0) {
                    output = 23;
                } else if (value > 23) {
                    output = 0;
                }
            } else if (key == 'minute' || key == 'second') {
                if (value < 0) {
                    output = 59;
                } else if (value > 59) {
                    output = 0;
                }
            }
            return output;
        }
    }]);

    return DateUtil;
}();
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Datepicker
 */
var Datepicker =

/**
 * @param {Object} inputElement - Datepicker element
 * @param {Object} options - Options passed by init method
 * @return {{datepicker: Datepicker, state: State, selectDate: *, updateView: (*|updateView), show: show, hide: hide, toggle: toggle, destroy: destroy}}
 */
function Datepicker(inputElement, options) {
  _classCallCheck(this, Datepicker);

  /**
   * @type {DateUtil} DateUtil - date helper class
   */

  /**
   * @type {unix} [initialUnix=null]
   */
  this.initialUnix = null;

  /**
   * @type {Object} [inputElement=inputElement]
   */
  this.inputElement = inputElement;

  /**
   * @type {Options} handle works about config
   */
  this.options = new Options(options);

  /**
   * @type {Input} handle works about input and alt field input element
   */
  this.input = new Input(this, inputElement);

  /**
   *
   * @type {State} set and get selected and view and other state
   */
  this.state = new State(this);

  /**
   *
   * @type {View} render datepicker view base on State
   */
  this.view = new View(this);

  /**
   *
   * @type {Toolbox} handle works about toolbox
   */
  this.toolbox = new Toolbox(this);

  /**
   *
   * @param unix
   */
  this.updateInput = function (unix) {
    this.input.update(unix);
  };

  this.state.setViewDateTime('unix', this.input.getOnInitState());
  if (this.options.initialValue) {
    this.state.setSelectedDateTime('unix', this.input.getOnInitState());
    this.state.setViewDateTime('unix', this.input.getOnInitState());
  }

  /**
   *
   * @type {Navigator} handle navigation and dateoicker element events
   */
  this.navigator = new Navigator(this);

  var that = this;
  return {
    'datepicker': this,
    'state': this.state,
    selectDate: this.selectDate,
    updateView: this.updateView,
    show: function show() {
      that.view.show();
      that.options.onShow(that);
      return that;
    },
    hide: function hide() {
      that.view.hide();
      that.options.onHide(that);
      return that;
    },
    toggle: function toggle() {
      that.view.toggle();
      that.options.onToggle(that);
      return that;
    },
    destroy: function destroy() {
      that.view.destroy();
      that.options.onDestroy(that);
      return that;
    }
  };
};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Do every thing about <input/> element like get default value, set new value, set alt field input and etc.
 */
var Input = function () {

    /**
     * @param {Datepicker} datepicker
     * @param {Element} inputElement
     * @return {Input}
     */
    function Input(datepicker, inputElement) {
        _classCallCheck(this, Input);

        /**
         * @type {Datepicker} datepicker
         */
        this.datepicker = datepicker;

        /**
         * @type {Element} input element
         */
        this.elem = inputElement;

        /**
         * @type {Number} initialUnix
         */
        this.initialUnix = null;
        this._attachInputElementEvents();
        return this;
    }

    /**
     * @private
     * @desc attach events to input field
     */


    _createClass(Input, [{
        key: '_attachInputElementEvents',
        value: function _attachInputElementEvents() {
            var that = this;
            $(this.elem).focus(function () {
                that.datepicker.view.show();
            });
            $(this.elem).blur(function (e) {
                // TODO: must fix
                // if ($(e.target).parents('#' + that.datepicker.view.id).length < 0) {
                // that.datepicker.view.hide();
                //}
            });
        }

        /**
         * @desc get <input/> element position
         * @return {{top: Number, left: Number}}
         * @todo remove jquery
         */

    }, {
        key: 'getInputPosition',
        value: function getInputPosition() {
            return $(this.elem).position();
        }

        /**
         * @desc get <input/> element size
         * @return {{width: Number, height: Number}}
         * @todo remove jquery
         */

    }, {
        key: 'getInputSize',
        value: function getInputSize() {
            return {
                width: $(this.elem).outerWidth(),
                height: $(this.elem).outerHeight()
            };
        }

        /**
         * @desc update <input/> element value
         * @param {Number} unix
         * @todo remove jquery
         * @private
         */

    }, {
        key: '_updateAltField',
        value: function _updateAltField(unix) {
            var value = this.datepicker.options.altFieldFormatter(unix);
            $(this.datepicker.options.altField).val(value);
        }

        /**
         * @desc update <input/> element value
         * @param {Number} unix
         * @todo remove jquery
         * @private
         */

    }, {
        key: '_updateInputField',
        value: function _updateInputField(unix) {
            var value = this.datepicker.options.formatter(unix);
            $(this.elem).val(value);
        }

        /**
         * @desc
         * @param unix
         */

    }, {
        key: 'update',
        value: function update(unix) {
            this._updateInputField(unix);
            this._updateAltField(unix);
        }

        /**
         * @desc return initial value
         * @return {Number} - unix
         */

    }, {
        key: 'getOnInitState',
        value: function getOnInitState() {
            var garegurianDate = null;
            var $inputElem = $(this.elem);
            if ($inputElem[0].nodeName === 'INPUT') {
                garegurianDate = new Date($inputElem[0].getAttribute('value')).valueOf();
            } else {
                garegurianDate = new Date($inputElem.data('date')).valueOf();
            }
            if (garegurianDate && garegurianDate != 'undefined') {
                this.initialUnix = garegurianDate;
            } else {
                this.initialUnix = new Date().valueOf();
            }
            return this.initialUnix;
        }
    }]);

    return Input;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This navigator class do every thing about navigate and select date
 * @public
 */
var Navigator = function () {

    /**
     * @param {object} datepicker
     * @return {Navigator}
     */
    function Navigator(datepicker) {
        _classCallCheck(this, Navigator);

        /**
         * @type {Datepicker}
         */
        this.datepicker = datepicker;
        this.liveAttach();
        this._attachEvents();
        return this;
    }

    /**
     * @desc attach events that needed attach after every render
     * @public
     * @todo attach as a live way
     */


    _createClass(Navigator, [{
        key: 'liveAttach',
        value: function liveAttach() {
            var that = this;
            var gridPlot = $('#' + that.datepicker.view.id + ' .datepicker-grid-view')[0];
            Hamster(gridPlot).wheel(function (event, delta, deltaX, deltaY) {
                if (delta > 0) {
                    that.datepicker.state.navigate('next');
                } else {
                    that.datepicker.state.navigate('prev');
                }
                event.preventDefault();
            });

            if (this.datepicker.options.timePicker.enabled) {
                var timePlot = $('#' + that.datepicker.view.id + ' .datepicker-time-view')[0];
                Hamster(timePlot).wheel(function (event, delta, deltaX, deltaY) {
                    var $target = $(event.target);
                    var key = $target.data('time-key') ? $target.data('time-key') : $target.parents('[data-time-key]').data('time-key');
                    if (delta > 0) {
                        that.timeUp(key);
                    } else {
                        that.timeDown(key);
                    }
                    event.preventDefault();
                });
            }
        }

        /**
         * @desc set time up depend to timekey
         * @param {String} timekey - accept hour, minute,second
         * @public
         */

    }, {
        key: 'timeUp',
        value: function timeUp(timekey) {
            var step = this.datepicker.options.timePicker[timekey].step;
            var currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) + step);
            this.datepicker.state.setViewDateTime(timekey, currentState);
            this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
        }

        /**
         * @desc set time down depend to timekey
         * @param {String} timekey - accept hour, minute,second
         * @public
         */

    }, {
        key: 'timeDown',
        value: function timeDown(timekey) {
            var step = this.datepicker.options.timePicker[timekey].step;
            var currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) - step);
            this.datepicker.state.setViewDateTime(timekey, currentState);
            this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
        }

        /**
         * @desc attach dom events
         * @todo remove jquery
         * @private
         */

    }, {
        key: '_attachEvents',
        value: function _attachEvents() {
            var that = this;

            if (this.datepicker.options.navigator.enabled) {
                /**
                 * @description navigator click event
                 */
                $(document).on('click', '#' + that.datepicker.view.id + ' .btn', function () {
                    if ($(this).is('.btn-next')) {
                        that.datepicker.state.navigate('next');
                        that.datepicker.options.navigator.onNext(that);
                    } else if ($(this).is('.btn-switch')) {
                        that.datepicker.state.switchViewMode();
                        that.datepicker.options.navigator.onSwitch(that);
                    } else if ($(this).is('.btn-prev')) {
                        that.datepicker.state.navigate('prev');
                        that.datepicker.options.navigator.onPrev(that);
                    }
                });
            }

            /**
             * @description check if timePicker enabled attach Events
             */
            if (this.datepicker.options.timePicker.enabled) {

                /**
                 * @description time up btn click event
                 */
                $(document).on('click', '#' + that.datepicker.view.id + ' .up-btn', function () {
                    var timekey = $(this).data('time-key');
                    that.timeUp(timekey);
                });

                /**
                 * @description time down btn click event
                 */
                $(document).on('click', '#' + that.datepicker.view.id + ' .down-btn', function () {
                    var timekey = $(this).data('time-key');
                    that.timeDown(timekey);
                });
            }

            /**
             * @description check if dayPicker enabled attach Events
             */
            if (this.datepicker.options.dayPicker.enabled) {

                /**
                 * @description days click event
                 */
                $(document).on('click', '#' + that.datepicker.view.id + ' .datepicker-day-view td', function () {
                    var thisUnix = $(this).data('unix');
                    that.datepicker.state.setSelectedDateTime('unix', thisUnix);
                    that.datepicker.state.setViewDateTime('unix', that.datepicker.state.selected.unixDate);
                    that.datepicker.options.dayPicker.onSelect(thisUnix);
                    if (that.datepicker.options.autoClose) {
                        that.datepicker.view.hide();
                        that.datepicker.options.onHide(that);
                    }
                });
            }

            /**
             * @description check if monthPicker enabled attach Events
             */
            if (this.datepicker.options.monthPicker.enabled) {

                /**
                 * @description month click event
                 */
                $(document).on('click', '#' + that.datepicker.view.id + ' .datepicker-month-view .month-item', function () {
                    var month = $(this).data('month');
                    that.datepicker.state.switchViewModeTo('day');
                    if (!that.datepicker.options.onlySelectOnDate) {
                        that.datepicker.state.setSelectedDateTime('month', month);
                        if (that.datepicker.options.autoClose) {
                            that.datepicker.view.hide();
                            that.datepicker.options.onHide(that);
                        }
                    }
                    that.datepicker.state.setViewDateTime('month', month);
                    that.datepicker.options.monthPicker.onSelect(month);
                });
            }

            /**
             * @description check if yearPicker enabled attach Events
             */
            if (this.datepicker.options.yearPicker.enabled) {

                /**
                 * @description year click event
                 */
                $(document).on('click', '#' + that.datepicker.view.id + ' .datepicker-year-view .year-item', function () {
                    var year = $(this).data('year');
                    that.datepicker.state.switchViewModeTo('month');
                    if (!that.datepicker.options.onlySelectOnDate) {
                        that.datepicker.state.setSelectedDateTime('year', year);
                        if (that.datepicker.options.autoClose) {
                            that.datepicker.view.hide();
                            that.datepicker.options.onHide(that);
                        }
                    }
                    that.datepicker.state.setViewDateTime('year', year);
                    that.datepicker.options.yearPicker.onSelect(year);
                });
            }
        }
    }]);

    return Navigator;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Extend default config from user interred and do compatibility works
 * @public
 */
var Options = function () {

    /**
     * @param {object} options config passed when initialize
     * @return {object}
     * @todo remove jquery
     */
    function Options(options) {
        _classCallCheck(this, Options);

        return this._compatibility($.extend(true, this, Config, options));
    }

    /**
     * @private
     * @param options
     */


    _createClass(Options, [{
        key: '_compatibility',
        value: function _compatibility(options) {
            if (options.onlyTimePicker) {
                options.dayPicker.enabled = false;
                options.monthPicker.enabled = false;
                options.yearPicker.enabled = false;
                options.timePicker.enabled = true;
            }

            if (options.timePicker.hour.step === null) {
                options.timePicker.hour.step = options.timePicker.step;
            }
            if (options.timePicker.minute.step === null) {
                options.timePicker.minute.step = options.timePicker.step;
            }
            if (options.timePicker.second.step === null) {
                options.timePicker.second.step = options.timePicker.step;
            }

            if (options.dayPicker.enabled === false) {
                options.onlySelectOnDate = false;
            }

            options._viewModeList = [];
            if (options.dayPicker.enabled) {
                options._viewModeList.push('day');
            }
            if (options.monthPicker.enabled) {
                options._viewModeList.push('month');
            }
            if (options.yearPicker.enabled) {
                options._viewModeList.push('year');
            }
        }
    }]);

    return Options;
}();
"use strict";

/**
 * Persian-Datepicker
 * @author Reza Babakhani
 */

/**
 * @author babakhani.reza@gmail.com
 * @description jquery plugin initializer
 */

var DateUtil = new DateUtil();

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

/**
 * All state set in his object and get from this
 * also this object notify other object to update self or update view or etc.
 */
var State = function () {

    /**
     * @param {Datepicker} datepicker
     * @return {State}
     */
    function State(datepicker) {
        _classCallCheck(this, State);

        /**
         * @type {object}
         */
        this.datepicker = datepicker;

        /**
         * @type {Boolean}
         */
        this.filetredDate = this.datepicker.options.minDate || this.datepicker.options.maxDate;

        /**
         * @desc get generated view mode list from options object
         * @type {Array}
         */
        this.viewModeList = this.datepicker.options._viewModeList;

        /**
         * @desc view mode string day, month, year
         * @type {String}
         * @default day
         * @todo add time to view modes
         */
        this.viewMode = this.viewModeList.indexOf(datepicker.options.viewMode) > 0 ? datepicker.options.viewMode : this.viewModeList[0];

        /**
         * @desc view mode string index in view mode list
         * @type {number}
         */
        this.viewModeIndex = this.viewModeList.indexOf(datepicker.options.viewMode) > 0 ? this.viewModeList.indexOf(datepicker.options.viewMode) : 0; // defaul 'day'


        /**
         * @desc contain filtered date objects
         * @type {{start: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, end: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}}}
         */
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

        /**
         * @desc contain view date object
         * @type {{year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number, dateObject: null, meridian: string}}
         */
        this.view = {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null,
            meridian: 'AM'
        };

        /**
         * @desc contain selected date object
         * @type {{year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number, dateObject: null}}
         */
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

        this._setFilterDate(this.datepicker.options.minDate, this.datepicker.options.maxDate);
        return this;
    }

    /**
     * @private
     * @param minDate
     * @param maxDate
     */


    _createClass(State, [{
        key: '_setFilterDate',
        value: function _setFilterDate(minDate, maxDate) {
            var self = this;
            if (!minDate) {
                minDate = -999999999999999999;
            }
            if (!maxDate) {
                maxDate = 999999999999999999;
            }
            var pd = new persianDate(minDate);
            self.filterDate.start.unixDate = minDate;
            self.filterDate.start.hour = pd.hour();
            self.filterDate.start.minute = pd.minute();
            self.filterDate.start.second = pd.second();
            self.filterDate.start.month = pd.month();
            self.filterDate.start.date = pd.date();
            self.filterDate.start.year = pd.year();
            var pdEnd = new persianDate(maxDate);
            self.filterDate.end.unixDate = maxDate;
            self.filterDate.end.hour = pdEnd.hour();
            self.filterDate.end.minute = pdEnd.minute();
            self.filterDate.end.second = pdEnd.second();
            self.filterDate.end.month = pdEnd.month();
            self.filterDate.end.date = pdEnd.date();
            self.filterDate.end.year = pdEnd.year();
        }

        /**
         * @desc called on date select
         * @param {String} key - accept date, month, year, hour, minute, second
         * @param {Number} value
         * @public
         * @return {State}
         */

    }, {
        key: 'setSelectedDateTime',
        value: function setSelectedDateTime(key, value) {
            var that = this;
            switch (key) {
                case 'unix':
                    that.selected.unixDate = value;
                    var pd = new persianDate(value);
                    that.selected.year = pd.year();
                    that.selected.month = pd.month();
                    that.selected.date = pd.date();
                    that.selected.hour = that.view.hour;
                    that.selected.minute = that.view.minute;
                    that.selected.second = that.view.second;
                    that._updateSelectedUnix();
                    break;
                case 'year':
                    this.selected.year = value;
                    that._updateSelectedUnix();
                    break;
                case 'month':
                    this.selected.month = value;
                    that._updateSelectedUnix();
                    break;
                case 'date':
                    this.selected.date = value;
                    that._updateSelectedUnix();
                    break;
                case 'hour':
                    this.selected.hour = value;
                    that._updateSelectedUnix();
                    break;
                case 'minute':
                    this.selected.minute = value;
                    that._updateSelectedUnix();
                    break;
                case 'second':
                    this.selected.second = value;
                    that._updateSelectedUnix();
                    break;
            }
            return this;
        }

        /**
         * @return {State}
         * @private
         */

    }, {
        key: '_updateSelectedUnix',
        value: function _updateSelectedUnix() {
            this.selected.dateObject = new persianDate([this.selected.year, this.selected.month, this.selected.date, this.view.hour, this.view.minute, this.view.second]);
            this.selected.unixDate = this.selected.dateObject.valueOf();
            this.datepicker.updateInput(this.selected.unixDate);
            this.datepicker.options.onSelect(this.selected.unixDate);
            return this;
        }

        /**
         * @param pd
         * @private
         */

    }, {
        key: '_syncViewModes',
        value: function _syncViewModes(pd) {
            this.view.year = pd.year();
            this.view.month = pd.month();
            this.view.date = pd.date();
        }

        /**
         * @desc change view state
         * @param {String} nav - accept next, prev
         */

    }, {
        key: 'navigate',
        value: function navigate(nav) {
            if (nav == 'next') {
                if (this.viewMode == 'year') {
                    this.setViewDateTime('year', this.view.year + 12);
                }
                if (this.viewMode == 'month') {
                    this.setViewDateTime('year', this.view.year + 1);
                }
                if (this.viewMode == 'day') {
                    if (this.view.month + 1 == 13) {
                        this.setViewDateTime('year', this.view.year + 1);
                        this.setViewDateTime('month', 1);
                    } else {
                        this.setViewDateTime('month', this.view.month + 1);
                    }
                }
            } else {
                if (this.viewMode == 'year') {
                    this.setViewDateTime('year', this.view.year - 12);
                }
                if (this.viewMode == 'month') {
                    this.setViewDateTime('year', this.view.year - 1);
                }
                if (this.viewMode == 'day') {
                    if (this.view.month - 1 <= 0) {
                        this.setViewDateTime('year', this.view.year - 1);
                        this.setViewDateTime('month', 12);
                    } else {
                        this.setViewDateTime('month', this.view.month - 1);
                    }
                }
            }
        }

        /**
         * @public
         * @desc every time called view state changed to next in queue
         * @return {State}
         */

    }, {
        key: 'switchViewMode',
        value: function switchViewMode() {
            this.viewModeIndex = this.viewModeIndex + 1 >= this.viewModeList.length ? 0 : this.viewModeIndex + 1;
            this.viewMode = this.viewModeList[this.viewModeIndex] ? this.viewModeList[this.viewModeIndex] : this.viewModeList[0];
            this._setViewDateTimeUnix();
            return this;
        }

        /**
         * @desc switch to specified view mode
         * @param {String} viewMode - accept date, month, year
         */

    }, {
        key: 'switchViewModeTo',
        value: function switchViewModeTo(viewMode) {
            if (this.viewModeList.indexOf(viewMode) >= 0) {
                this.viewMode = viewMode;
                this.viewModeIndex = this.viewModeList.indexOf(viewMode);
            }
        }

        /**
         *
         * @return {State}
         * @private
         */

    }, {
        key: '_setViewDateTimeUnix',
        value: function _setViewDateTimeUnix() {
            this.view.dateObject = new persianDate([this.view.year, this.view.month, this.view.date, this.view.hour, this.view.minute, this.view.second]);
            this._syncViewModes(this.view.dateObject);
            this.view.unixDate = this.view.dateObject.valueOf();
            this.datepicker.view.render(this.view);
            return this;
        }

        /**
         *
         * @param {String} key -  accept date, month, year, hour, minute, second
         * @param {Number} value
         * @return {State}
         */

    }, {
        key: 'setViewDateTime',
        value: function setViewDateTime(key, value) {
            var self = this;
            switch (key) {
                case 'unix':
                    var pd = new persianDate(value);
                    self.view.year = pd.year();
                    self.view.month = pd.month();
                    self.view.date = pd.date();
                    self.view.hour = pd.hour();
                    self.view.minute = pd.minute();
                    self.view.second = pd.second();
                    break;
                case 'year':
                    this.view.year = value;
                    break;
                case 'month':
                    this.view.month = value;
                    break;
                case 'date':
                    this.view.date = value;
                    break;
                case 'hour':
                    this.view.hour = value;
                    break;
                case 'minute':
                    this.view.minute = value;
                    break;
                case 'second':
                    this.view.second = value;
                    break;
            }
            this._setViewDateTimeUnix();
            return this;
        }
    }]);

    return State;
}();
"use strict";

/**
 * @type {string}
 */
var Template = "\n<div id=\"plotId\" class=\"datepicker-plot-area datepicker-plot-area-inline-view\">\n    {{#navigator.enabled}}\n        <div class=\"navigator\">\n            <div class=\"datepicker-header\">\n                <div class=\"btn btn-next\">{{navigator.text.btnNextText}}</div>\n                <div class=\"btn btn-switch\">{{ navigator.switch.text }}</div>\n                <div class=\"btn btn-prev\">{{navigator.text.btnPrevText}}</div>\n            </div>\n        </div>\n    {{/navigator.enabled}}    \n    <div class=\"datepicker-grid-view\" >\n    {{#days.enabled}}\n        {{#days.viewMode}}\n        <div class=\"datepicker-day-view\" >    \n            <div class=\"month-grid-box\">\n                <div class=\"header\">\n                    <div class=\"title\"></div>\n                    <div class=\"header-row\">\n                        <div class=\"header-row-cell\">\u0634</div>\n                        <div class=\"header-row-cell\">\u06CC</div>\n                        <div class=\"header-row-cell\">\u062F</div>\n                        <div class=\"header-row-cell\">\u0633</div>\n                        <div class=\"header-row-cell\">\u0686</div>\n                        <div class=\"header-row-cell\">\u067E</div>\n                        <div class=\"header-row-cell\">\u062C</div>\n                    </div>\n                </div>    \n                <table cellspacing=\"0\" class=\"table-days\">\n                    <tbody>\n                        {{#days.list}}\n                           \n                            <tr>\n                                {{#.}}\n                                    \n                                    {{#enabled}}\n                                        <td data-unix=\"{{dataUnix}}\" ><span  class=\"{{#otherMonth}}other-month{{/otherMonth}} {{#selected}}selected{{/selected}}\">{{title}}</span></td>\n                                    {{/enabled}}\n                                    {{^enabled}}\n                                        <td data-unix=\"{{dataUnix}}\" class=\"disabled\"><span class=\"{{#otherMonth}}other-month{{/otherMonth}}\">{{title}}</span></td>\n                                    {{/enabled}}\n                                    \n                                {{/.}}\n                            </tr>\n                        {{/days.list}}\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        {{/days.viewMode}}\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n        {{#month.viewMode}}\n            <div class=\"datepicker-month-view\">\n                {{#month.list}}\n                    {{#enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                    {{^enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item month-item-disable {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                {{/month.list}}\n            </div>\n        {{/month.viewMode}}\n    {{/month.enabled}}\n    \n    {{#year.enabled }}\n        {{#year.viewMode }}\n            <div class=\"datepicker-year-view\" >\n                {{#year.list}}\n                    {{#enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}\n                    {{^enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item year-item-disable {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}                    \n                {{/year.list}}\n            </div>\n        {{/year.viewMode }}\n    {{/year.enabled }}\n    \n    </div>\n    {{#time}}\n    {{#enabled}}\n    <div class=\"datepicker-time-view\">\n        {{#hour.enabled}}\n            <div class=\"hour time-segment\" data-time-key=\"hour\">\n                <div class=\"up-btn\" data-time-key=\"hour\">\u25B2</div>\n                <input value=\"{{hour.title}}\" type=\"text\" placeholder=\"hour\" class=\"hour-input\">\n                <div class=\"down-btn\" data-time-key=\"hour\">\u25BC</div>                    \n            </div>       \n            <div class=\"divider\">:</div>\n        {{/hour.enabled}}\n        {{#minute.enabled}}\n            <div class=\"minute time-segment\" data-time-key=\"minute\" >\n                <div class=\"up-btn\" data-time-key=\"minute\">\u25B2</div>\n                <input value=\"{{minute.title}}\" type=\"text\" placeholder=\"minute\" class=\"minute-input\">\n                <div class=\"down-btn\" data-time-key=\"minute\">\u25BC</div>\n            </div>        \n            <div class=\"divider second-divider\">:</div>\n        {{/minute.enabled}}\n        {{#second.enabled}}\n            <div class=\"second time-segment\" data-time-key=\"second\"  >\n                <div class=\"up-btn\" data-time-key=\"second\" >\u25B2</div>\n                <input value=\"{{second.title}}\"  type=\"text\" placeholder=\"second\" class=\"second-input\">\n                <div class=\"down-btn\" data-time-key=\"second\" >\u25BC</div>\n            </div>\n            <div class=\"divider meridian-divider\"></div>\n            <div class=\"divider meridian-divider\"></div>\n        {{/second.enabled}}\n        {{#meridian.enabled}}\n            <div class=\"meridian time-segment\" data-time-key=\"meridian\" >\n                <div class=\"up-btn\" data-time-key=\"meridian\">\u25B2</div>\n                <input value=\"{{meridian.title}}\" type=\"text\" class=\"meridian-input\">\n                <div class=\"down-btn\" data-time-key=\"meridian\">\u25BC</div>\n            </div>\n        {{/meridian.enabled}}\n    </div>\n    {{/enabled}}\n    {{/time}}\n    \n    {{#toolbox}}\n    {{#enabled}}\n    <div class=\"toolbox \">\n        <div class=\"btn-today\">{{text.btnToday}}</div>\n    </div>\n    {{/enabled}}\n    {{/toolbox}}\n</div>\n";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Do every things about toolbox, like attach events to toolbox elements
 */
var Toolbox = function () {

  /**
   * @param {Datepicker} datepicker
   * @return {Toolbox}
   */
  function Toolbox(datepicker) {
    _classCallCheck(this, Toolbox);

    /**
     * @type {Datepicker}
     */
    this.datepicker = datepicker;
    this._attachEvents();
    return this;
  }

  /**
   * @private
   */


  _createClass(Toolbox, [{
    key: '_attachEvents',
    value: function _attachEvents() {
      var that = this;
      $(document).on('click', '.btn-today', function () {
        that.datepicker.state.setSelectedDateTime('unix', new Date().valueOf());
        that.datepicker.state.setViewDateTime('unix', new Date().valueOf());
        that.datepicker.options.toolbox.onToday();
      });
    }
  }]);

  return Toolbox;
}();
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * As its name suggests, all rendering works do in this object
 */
var View = function () {

    /**
     *
     * @param {Datepicker} datepicker
     * @return {View}
     */
    function View(datepicker) {
        _classCallCheck(this, View);

        /**
         * @type {number}
         */
        this.yearsViewCount = 12;

        /**
         *
         * @type {Datepicker}
         */
        this.datepicker = datepicker;

        /**
         *
         * @type {null}
         */
        this.rendered = null;

        /**
         *
         * @type {null}
         */
        this.$container = null;

        /**
         *
         * @type {string}
         */
        this.id = 'persianDateInstance-' + parseInt(Math.random(100) * 1000);
        var that = this;
        if (this.datepicker.inputElement.nodeName === 'INPUT') {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
            this.$container.hide();
            this.setPickerBoxPosition();
        } else {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container-inline"></div>').appendTo(that.datepicker.inputElement);
        }
        return this;
    }

    /**
     * @desc remove datepicker container element from dom
     */


    _createClass(View, [{
        key: 'destroy',
        value: function destroy() {
            this.$container.remove();
        }

        /**
         * @desc set datepicker container element based on <input/> element position
         */

    }, {
        key: 'setPickerBoxPosition',
        value: function setPickerBoxPosition() {
            var inputPosition = this.datepicker.input.getInputPosition();
            var inputSize = this.datepicker.input.getInputSize();
            if (this.datepicker.options.position === "auto") {
                this.$container.css({
                    left: inputPosition.left + 'px',
                    top: inputSize.height + inputPosition.top + 'px'
                });
            } else {
                this.$container.css({
                    top: this.datepicker.options.position[0] + inputPosition.left + 'px',
                    left: this.datepicker.options.position[1] + inputPosition.top + 'px'
                });
            }
        }

        /**
         * @desc show datepicker container element
         */

    }, {
        key: 'show',
        value: function show() {
            this.$container.show();
        }

        /**
         * @desc hide datepicker container element
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.$container.hide();
        }

        /**
         * @desc toggle datepicker container element
         */

    }, {
        key: 'toggle',
        value: function toggle() {
            this.$container.toggle();
        }

        /**
         * @desc return navigator switch text
         * @param {String} data -  accept day, month, year
         * @private
         * @return {String}
         */

    }, {
        key: '_getNavSwitchText',
        value: function _getNavSwitchText(data) {
            var output = void 0;
            if (this.datepicker.state.viewMode == 'day') {
                output = this.datepicker.options.dayPicker.titleFormatter.call(this, data.year, data.month);
            } else if (this.datepicker.state.viewMode == 'month') {
                output = this.datepicker.options.monthPicker.titleFormatter.call(this, data.dateObject.valueOf());
            } else if (this.datepicker.state.viewMode == 'year') {
                output = this.datepicker.options.yearPicker.titleFormatter.call(this, data.year);
            }
            return output;
        }

        /**
         * @desc check year is accessible
         * @param {Number} year - year number
         * @return {Boolean}
         */

    }, {
        key: 'checkYearAccess',
        value: function checkYearAccess(year) {
            var output = true;
            if (this.datepicker.state.filetredDate) {
                var startYear = this.datepicker.state.filterDate.start.year;
                var endYear = this.datepicker.state.filterDate.end.year;
                if (startYear <= year & year <= endYear) {
                    output = true;
                } else {
                    return false;
                }
            }
            if (output) {
                return this.datepicker.options.checkYear(year);
            }
        }

        /**
         * @private
         * @param viewState
         * @return {{enabled: boolean, viewMode: boolean, list: Array}}
         */

    }, {
        key: '_getYearViewModel',
        value: function _getYearViewModel(viewState) {
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

                    var yearStr = new pDate([i]);
                    yearStr.formatPersian = this.datepicker.options.persianDigit;
                    yearsModel.push({
                        title: yearStr.format('YYYY'),
                        enabled: this.checkYearAccess(i),
                        dataYear: i,
                        selected: this.datepicker.state.selected.year == i
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
                enabled: this.datepicker.options.yearPicker.enabled,
                viewMode: this.datepicker.state.viewMode == 'year',
                list: yearsModel
            };
        }

        /**
         * @desc check month is accessible
         * @param {Number} month - month number
         * @return {Boolean}
         */

    }, {
        key: 'checkMonthAccess',
        value: function checkMonthAccess(month) {
            var output = true,
                y = this.datepicker.state.view.year;
            if (this.datepicker.state.filetredDate) {
                var startMonth = this.datepicker.state.filterDate.start.month,
                    endMonth = this.datepicker.state.filterDate.end.month,
                    startYear = this.datepicker.state.filterDate.start.year,
                    endYear = this.datepicker.state.filterDate.end.year;
                if ((startYear == endYear && endYear == y && month >= startMonth && month <= endMonth) | (y != endYear && y == startYear && month >= startMonth) | (y != startYear && y == endYear && month <= endMonth) | (y > startYear && y < endYear)) {
                    output = true;
                } else {
                    return false;
                }
            }
            if (output) {
                return this.datepicker.options.checkMonth(month, y);
            }
        }

        /**
         * @private
         * @return {{enabled: boolean, viewMode: boolean, list: Array}}
         */

    }, {
        key: '_getMonthViewModel',
        value: function _getMonthViewModel() {
            var monthModel = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = ClassDateRange.monthRange[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var month = _step2.value;

                    monthModel.push({
                        title: month.name.fa,
                        enabled: this.checkMonthAccess(month.index),
                        year: this.datepicker.state.view.year,
                        dataMonth: month.index,
                        selected: DateUtil.isSameMonth(this.datepicker.state.selected.dateObject, new pDate([this.datepicker.state.view.year, month.index]))
                    });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return {
                enabled: this.datepicker.options.monthPicker.enabled,
                viewMode: this.datepicker.state.viewMode == 'month',
                list: monthModel
            };
        }

        /**
         * @desc check day is accessible
         * @param {Number} thisUnix - month number
         * @return {Boolean}
         */

    }, {
        key: 'checkDayAccess',
        value: function checkDayAccess(unixtimespan) {
            var self = this,
                output = true;
            self.minDate = this.datepicker.options.minDate;
            self.maxDate = this.datepicker.options.maxDate;

            if (self.datepicker.state.filetredDate) {
                if (self.minDate && self.maxDate) {
                    self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                    self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                    if (!(unixtimespan >= self.minDate && unixtimespan <= self.maxDate)) {
                        return false;
                    }
                } else if (self.minDate) {
                    self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                    if (unixtimespan <= self.minDate) {
                        return false;
                    }
                } else if (self.maxDate) {
                    self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                    if (unixtimespan <= self.maxDate) {
                        return false;
                    }
                }
            }
            if (output) {
                return self.datepicker.options.checkDate(unixtimespan);
            }
        }

        /**
         * @private
         * @return {object}
         */

    }, {
        key: '_getDayViewModel',
        value: function _getDayViewModel() {
            if (this.datepicker.state.viewMode != 'day') {
                return [];
            }
            // log('if you see this many time your code has performance issue')
            var viewMonth = this.datepicker.state.view.month;
            var viewYear = this.datepicker.state.view.year;
            var pdateInstance = new persianDate();
            var daysCount = pdateInstance.daysInMonth(viewYear, viewMonth);
            var firstWeekDayOfMonth = pdateInstance.getFirstWeekDayOfMonth(viewYear, viewMonth) - 1;
            var outputList = [];
            var daysListindex = 0;
            var nextMonthListIndex = 0;
            var daysMatrix = [['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null']];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = daysMatrix.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _step3$value = _slicedToArray(_step3.value, 2),
                        rowIndex = _step3$value[0],
                        daysRow = _step3$value[1];

                    outputList[rowIndex] = [];
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = daysRow.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _step4$value = _slicedToArray(_step4.value, 2),
                                dayIndex = _step4$value[0],
                                day = _step4$value[1];

                            var calcedDate = void 0,
                                otherMonth = void 0,
                                pdate = void 0;
                            if (rowIndex === 0 && dayIndex < firstWeekDayOfMonth) {
                                pdate = new pDate(this.datepicker.state.view.dateObject.startOf('month').valueOf());
                                calcedDate = pdate.subtract('days', firstWeekDayOfMonth - dayIndex);
                                otherMonth = true;
                            } else if (rowIndex === 0 && dayIndex >= firstWeekDayOfMonth || rowIndex <= 5 && daysListindex < daysCount) {
                                daysListindex += 1;
                                calcedDate = new pDate([this.datepicker.state.view.year, this.datepicker.state.view.month, daysListindex]);
                                otherMonth = false;
                            } else {
                                nextMonthListIndex += 1;
                                pdate = new pDate(this.datepicker.state.view.dateObject.endOf('month').valueOf());
                                calcedDate = pdate.add('days', nextMonthListIndex);
                                otherMonth = true;
                            }
                            calcedDate.formatPersian = this.datepicker.options.persianDigit;
                            outputList[rowIndex].push({
                                title: calcedDate.format('DD'),
                                dataUnix: calcedDate.valueOf(),
                                selected: DateUtil.isSameDay(calcedDate, this.datepicker.state.selected.dateObject),
                                otherMonth: otherMonth,
                                // TODO: make configurable
                                enabled: this.checkDayAccess(calcedDate.valueOf())
                            });
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return {
                enabled: this.datepicker.options.dayPicker.enabled && this.datepicker.state.viewMode == 'day',
                viewMode: this.datepicker.state.viewMode == 'day',
                list: outputList
            };
        }

        /**
         * @private
         * @return {{enabled: boolean, hour: {title, enabled: boolean}, minute: {title, enabled: boolean}, second: {title, enabled: boolean}, meridian: {title: (meridian|{title, enabled}|ClassDatepicker.ClassConfig.timePicker.meridian|{enabled}|string|string), enabled: boolean}}}
         */

    }, {
        key: '_getTimeViewModel',
        value: function _getTimeViewModel() {
            this.datepicker.state.view.dateObject.formatPersian = this.datepicker.options.persianDigit;
            return {
                enabled: this.datepicker.options.timePicker.enabled,
                hour: {
                    title: this.datepicker.state.view.dateObject.format('HH'),
                    enabled: this.datepicker.options.timePicker.hour.enabled

                },
                minute: {
                    title: this.datepicker.state.view.dateObject.format('mm'),
                    enabled: this.datepicker.options.timePicker.minute.enabled
                },
                second: {
                    title: this.datepicker.state.view.dateObject.format('ss'),
                    enabled: this.datepicker.options.timePicker.second.enabled
                },
                meridian: {
                    title: this.datepicker.state.view.dateObject.meridian,
                    enabled: this.datepicker.options.timePicker.meridian.enabled
                }
            };
        }

        /**
         * @param data
         * @return {*}
         */

    }, {
        key: 'getViewModel',
        value: function getViewModel(data) {
            return {
                plotId: '',
                navigator: {
                    enabled: this.datepicker.options.navigator.enabled,
                    switch: {
                        enabled: true,
                        text: this._getNavSwitchText(data)
                    },
                    text: this.datepicker.options.navigator.text
                },
                selected: this.datepicker.state.selected,
                time: this._getTimeViewModel(data),
                days: this._getDayViewModel(data),
                month: this._getMonthViewModel(data),
                year: this._getYearViewModel(data),
                toolbox: this.datepicker.options.toolbox
            };
        }

        /**
         * @render datepicker view element
         * @param data
         */

    }, {
        key: 'render',
        value: function render(data) {
            debug(this, 'render');
            Mustache.parse(Template);
            this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
            this.$container.empty().append(this.rendered);
            this.afterRender();
        }

        /**
         * @desc do after render work like attache events
         */

    }, {
        key: 'afterRender',
        value: function afterRender() {
            if (this.datepicker.navigator) {
                this.datepicker.navigator.liveAttach();
            }
        }
    }]);

    return View;
}();
