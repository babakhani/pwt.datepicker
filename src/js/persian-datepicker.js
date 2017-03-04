'use strict';

/**
 * This is default config class
 */
var Config = {

  /**
   * @type Boolean
   * @default true
   */
  'initialValue': true,

  /**
   * @type Boolean
   * @default true
   */
  'persianDigit': true,

  /**
   * @description Acceptable value : day,month,year
   * @type {string}
   * @default 'day'
   */
  'viewMode': 'day',

  /**
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
   * @type {boolean}
   * @default 'LLLL'
   */
  'format': 'LLLL',

  /**
   * @description format value of input
   * @param unixDate
   * @default function
   * @example function (unixDate) {
   *      var self = this;
   *      var pdate = new persianDate(unixDate);
   *      pdate.formatPersian = this.persianDigit;
   *      return pdate.format(self.format);
   *  }
   */
  'formatter': function formatter(unixDate) {
    var self = this;
    var pdate = new persianDate(unixDate);
    pdate.formatPersian = this.persianDigit;
    return pdate.format(self.format);
  },

  /**
   * @description An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class'
   * @type {boolean}
   * @default false
   */
  'altField': false,

  /**
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
   * @type {string}
   * @default 'unix'
   */
  'altFormat': 'unix',

  /**
   * @description format value of 'altField' input
   * @param unixDate
   * @default function
   * @example function (unixDate) {
   *      var self = this;
   *      var thisAltFormat = self.altFormat.toLowerCase();
   *      if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
   *          return new Date(unixDate);
   *      }
   *      if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
   *          return unixDate;
   *      }
   *      else {
   *          var pd = new persianDate(unixDate);
   *          pd.formatPersian = this.persianDigit;
   *          return pd.format(self.altFormat);
   *      }
   *  }
   */
  'altFieldFormatter': function altFieldFormatter(unixDate) {
    var self = this;
    var thisAltFormat = self.altFormat.toLowerCase();
    if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
      return new Date(unixDate);
    }
    if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
      return unixDate;
    } else {
      var pd = new persianDate(unixDate);
      pd.formatPersian = this.persianDigit;
      return pd.format(self.altFormat);
    }
  },

  /**
   * @description set min date on datepicker
   * @property minDate
   * @type Date
   * @default null
   */
  'minDate': null,

  /**
   * @description set max date on datepicker
   * @property maxDate
   * @type Date
   * @default null
   */
  'maxDate': null,

  /**
   * @description navigator config object
   * @type {object}
   * @default true
   */
  'navigator': {
    /**
     * @description Enable or Disable dayPicker
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description navigator text config object
     */
    'text': {
      /**
       * @description text of next btn
       * @default '<'
       */
      'btnNextText': '<',

      /**
       * @description text of prev btn
       * @default: '>'
       */
      'btnPrevText': '>'
    },

    /**
     * @description Trigger When Next button clicked
     * @event
     * @param navigator
     * @example function (navigator) {
     *      //log('navigator next ');
     *  }
     */
    'onNext': function onNext(navigator) {
      //log('navigator next ');
    },

    /**
     * @description Trigger When Prev button clicked
     * @event
     * @param navigator
     * @example function (navigator) {
     *      //log('navigator prev ');
     *  }
     */
    'onPrev': function onPrev(navigator) {
      //log('navigator prev ');
    },

    /**
     * @description Trigger When Switch view button clicked
     * @event
     * @param navigator
     * @example function (state) {
            // console.log('navigator switch ');
     *  }
     */
    'onSwitch': function onSwitch(state) {
      // console.log('navigator switch ');
    }
  },

  /**
   * @description toolbox config object
   * @type {object}
   * @default true
   */
  'toolbox': {

    /**
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @type object
     */
    'text': {

      /**
       * @type string
       * @default 'امروز'
       */
      btnToday: 'امروز'
    },

    /**
     * @event
     * @param toolbox
     * @example function (toolbox) {
     *      //log('toolbox today btn');
     *  }
     */
    onToday: function onToday(toolbox) {
      //log('toolbox today btn');
    }
  },

  /**
   * @description if true all pickers hide and just show timepicker
   * @default false
   * @type boolean
   */
  'onlyTimePicker': false,

  /**
   * @description if true date select just by click on day in month grid
   * @property justSelectOnDate
   * @type boolean
   * @default: true
   */
  'onlySelectOnDate': true,

  /**
   * @description check date avalibility
   * @type function
   */
  'checkDate': function checkDate(unix) {
    return true;
  },

  /**
   * @description check month avalibility
   * @type {function}
   */
  'checkMonth': function checkMonth(month) {
    return true;
  },

  /**
   * @description check year avalibility
   * @type {function}
   */
  'checkYear': function checkYear(year) {
    return true;
  },

  /**
   * @description timepicker config object
   * @type {object}
   */
  'timePicker': {

    /**
     * @type boolean
     */
    'enabled': false,

    /**
     * @type number
     */
    'step': 1,

    /**
     * @type object
     */
    'hour': {

      /**
       * @type boolean
       */
      'enabled': true,

      /**
       * @description overwrite by parent step
       * @type boolean
       */
      'step': null
    },

    /**
     * @type object
     */
    'minute': {

      /**
       * @type boolean
       */
      'enabled': true,

      /**
       * @description overwrite by parent step
       * @type boolean
       */
      'step': null
    },

    /**
     * @type object
     */
    'second': {

      /**
       * @type boolean
       */
      'enabled': true,

      /**
       * @description overwrite by parent step
       * @type boolean
       */
      'step': null
    },

    /**
     * @type object
     */
    'meridiem': {

      /**
       * @type boolean
       * @description if you set this as false, datepicker clock system moved to 24-hour system
       */
      'enabled': false
    }
  },

  /**
   * @description dayPicker config object
   * @type {object}
   */
  'dayPicker': {

    /**
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @type string
     * @default 'YYYY MMMM'
     */
    'titleFormat': 'YYYY MMMM',

    /**
     * @param year
     * @param month
     * @return {*}
     */
    'titleFormatter': function titleFormatter(year, month) {
      var titleDate = new persianDate([year, month]);
      titleDate.formatPersian = this.model.options.persianDigit;
      return titleDate.format(this.model.options.dayPicker.titleFormat);
    },

    /**
     * @event
     * @param selectedDayUnix
     */
    'onSelect': function onSelect(selectedDayUnix) {
      debug('dayPicker Event: onSelect : ' + selectedDayUnix);
    }

  },

  /**
   * @description monthPicker config object
   * @type {object}
   */
  'monthPicker': {

    /**
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @type string
     * @default 'YYYY'
     */
    'titleFormat': 'YYYY',

    /**
     * @param unix
     * @return {*}
     */
    'titleFormatter': function titleFormatter(unix) {
      var titleDate = new persianDate(unix);
      titleDate.formatPersian = this.model.options.persianDigit;
      return titleDate.format(this.model.options.monthPicker.titleFormat);
    },

    /**
     * @event
     * @param monthIndex
     */
    'onSelect': function onSelect(monthIndex) {
      debug('monthPicker Event: onSelect : ' + monthIndex);
    }
  },

  /**
   * @description yearPicker config object
   * @type {object}
   */
  'yearPicker': {

    /**
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @type string
     * @default 'YYYY'
     */
    'titleFormat': 'YYYY',

    /**
     *
     * @param year
     * @return {string}
     */
    'titleFormatter': function titleFormatter(year) {
      var remaining = parseInt(year / 12, 10) * 12;
      var startYear = new pDate([remaining]);
      var endYear = new pDate([remaining + 11]);
      startYear.formatPersian = this.model.options.persianDigit;
      endYear.formatPersian = this.model.options.persianDigit;
      return startYear.format(this.model.options.yearPicker.titleFormat) + '-' + endYear.format(this.model.options.yearPicker.titleFormat);
    },

    /**
     * @event
     * @param year
     */
    'onSelect': function onSelect(year) {
      debug('yearPicker Event: onSelect : ' + year);
    }
  },

  /**
   * @description A function that takes current datepicker unixDate. It is called When Day Select.
   * @event
   * @param unixDate
   */
  'onSelect': function onSelect(unixDate) {
    debug(this, 'datepicker Event: onSelect : ' + unixDate);
  },

  /**
   * @description position of datepicker relative to input element
   * @type mix
   * @default 'auto'
   * @example
   *  'position': 'auto'
   *'position': [10,10]
   */
  'position': 'auto',

  /**
   * @description A function that takes current datepicker instance. It is called just before the datepicker is displayed.
   * @event
   */
  'onShow': function onShow() {
    debug(this, 'dayPicker Event: onShow ');
  },

  /**
   * @description A function that takes current datepicker instance. It is called just before the datepicker Hide.
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
   * @description If true picker close When Select day
   * @type {boolean}
   * @default false
   */
  'autoClose': false,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Under Implement ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * @description observer
   * @type {boolean}
   * @default false
   * @deprecated
   */
  'observer': false,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Un  implemented ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /**
   * @description inputDelay
   * @type {number}
   * @default 800
   */
  'inputDelay': 800
};
'use strict';

/**
 * @desc normal log
 * @param input
 * @example log('whoooooha')
 */
var log = function log(input) {
    console.log(input);
};

/**
 *
 * @param latinDigit
 * @returns {string} Persian equivalent unicode character of the given latin digits.
 */
String.prototype.toPersianDigit = function (latinDigit) {
    return this.replace(/\d+/g, function (digit) {
        var enDigitArr = [],
            peDigitArr = [],
            i,
            j;
        for (i = 0; i < digit.length; i += 1) {
            enDigitArr.push(digit.charCodeAt(i));
        }
        for (j = 0; j < enDigitArr.length; j += 1) {
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + (!!latinDigit && latinDigit === true ? 1584 : 1728)));
        }
        return peDigitArr.join('');
    });
};

/**
 * @desc show debug messages if window.persianDatepickerDebug set as true
 * @param elem
 * @param input
 * @example window.persianDatepickerDebug = true;
 * debug('element','message');
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Date helper, some useful date method stored here
 * @class
 */
var DateUtil = function () {
    function DateUtil() {
        _classCallCheck(this, DateUtil);
    }

    _createClass(DateUtil, [{
        key: "convertAMtoPM",


        /**
         * @param hour
         * @param meridiem
         * @return {*}
         */
        value: function convertAMtoPM(hour) {
            var output = hour;
            if (hour + 12 > 24) {
                output = hour - 12;
            }
            if (hour - 12 < 0) {
                output = hour + 12;
            }
            if (hour - 12 == 0) {
                output = 0;
            }
            return output;
        }

        /**
         * @property convert24hTo12
         * @param hour
         */

    }, {
        key: "convert24hTo12",
        value: function convert24hTo12(hour, meridiem) {
            var output = hour;
            if (hour > 12) {
                output = hour - 12;
            }
            if (hour === 0) {
                output = 0;
            }
            return output;
        }

        /**
         * @property convert12hTo24
         * @param hour
         * @returns {*}
         */

    }, {
        key: "convert12hTo24",
        value: function convert12hTo24(hour, meridiem) {
            var output = hour;
            if (meridiem === "PM" && hour > 12) {
                output = hour - 12;
            }
            if (meridiem === "AM" && hour < 12 && hour > 0) {
                output = hour + 12;
            }
            if (meridiem === "AM" && hour == 0) {
                output = 12;
            }
            if (meridiem === "PM" && hour == 0) {
                output = 0;
            }
            return output;
        }

        /**
         * check if a date is same as b
         * @param dateA
         * @param dateB
         * @return {boolean}
         * @static
         */

    }, {
        key: "isSameDay",
        value: function isSameDay(dateA, dateB) {
            return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }

        /**
         * @desc check if a month is same as b
         * @param {Date} dateA
         * @param {Date} dateB
         * @return {boolean}
         * @static
         */

    }, {
        key: "isSameMonth",
        value: function isSameMonth(dateA, dateB) {
            return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }

        /**
         * @desc normalize time, like check second if bigger than 60
         * @param {string} key
         * @param {number} value
         * @return {number}
         * @static
         */

    }, {
        key: "normalizeTime",
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Do every thing about input element like get default value, set new value, set alt field input and etc.
 */
var Input = function () {

    /**
     * @param {Model} model
     * @param {Element}
     * @return {Input}
     */
    function Input(model, inputElement) {
        _classCallCheck(this, Input);

        /**
         * @type {Object}
         */
        this.model = model;

        /**
         * @type {Element}
         */
        this.elem = inputElement;

        // if (this.model.options.observer) {
        this.observe();
        // }

        /**
         * @type {Number}
         */
        this.initialUnix = null;
        this._attachInputElementEvents();
        return this;
    }

    _createClass(Input, [{
        key: 'observe',
        value: function observe() {
            var that = this;
            var watch = function watch() {
                var elem = $(this);
                // Save current value of element
                elem.data('oldVal', elem.val());
                // Look for changes in the value
                elem.bind("propertychange change click keyup input paste", function (event) {
                    // If value has changed...
                    if (elem.data('oldVal') != elem.val()) {
                        // Updated stored value
                        elem.data('oldVal', elem.val());
                        // that.model.state.setViewDateTime('unix', elem.val());
                        // that.model.state.setSelectedDateTime('unix', elem.val());
                    }
                });
            };
            $(this.elem).each(watch);
            $(this.model.options.altField).each(watch);
        }

        /**
         * @private
         * @desc attach events to input field
         */

    }, {
        key: '_attachInputElementEvents',
        value: function _attachInputElementEvents() {
            var that = this;
            $(this.elem).focus(function () {
                that.model.view.show();
            });
            $(this.elem).blur(function (e) {
                // TODO: must fix
                // if ($(e.target).parents('#' + that.datepicker.view.id).length < 0) {
                // that.model.view.hide();
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
            return $(this.elem).offset();
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
            var value = this.model.options.altFieldFormatter(unix);
            $(this.model.options.altField).val(value);
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
            var value = this.model.options.formatter(unix);
            $(this.elem).val(value);
        }

        /**
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Main datepicker object, manage every things
 */
var Model =

/**
 * @param inputElement
 * @param options
 */
function Model(inputElement, options) {
  _classCallCheck(this, Model);

  /**
   * @desc DateUtil - date helper class
   * @type {DateUtil}
   */

  /**
   * @desc [initialUnix=null]
   * @type {unix}
   */
  this.initialUnix = null;

  /**
   * @desc inputElement=inputElement
   * @type {Object}
   */
  this.inputElement = inputElement;

  /**
   * @desc handle works about config
   * @type {Options}
   */
  this.options = new Options(options);

  /**
   * @desc handle works about input and alt field input element
   * @type {Input}
   */
  this.input = new Input(this, inputElement);

  /**
   * @desc set and get selected and view and other state
   * @type {State}
   */
  this.state = new State(this);

  /**
   * @desc render datepicker view base on State
   * @type {View}
   */
  this.view = new View(this);

  /**
   * @desc handle works about toolbox
   * @type {Toolbox}
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
  }

  /**
   * @desc handle navigation and dateoicker element events
   * @type {Navigator}
   */
  this.navigator = new Navigator(this);

  var that = this;
  return {
    'datepicker': this,
    'state': this.state,
    get options() {
      return that.options;
    },
    set options(inputOptions) {
      that.options = new Options(inputOptions);
      that.view.reRender();
    },
    selectDate: this.selectDate,
    updateView: this.view.updateView,
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
 * This navigator class do every thing about navigate and select date
 * @public
 */
var Navigator = function () {

    /**
     * @param {object} datepicker
     * @return {Navigator}
     */
    function Navigator(model) {
        _classCallCheck(this, Navigator);

        /**
         * @type {Datepicker}
         */
        this.model = model;
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
            var gridPlot = $('#' + that.model.view.id + ' .datepicker-grid-view')[0];
            Hamster(gridPlot).wheel(function (event, delta, deltaX, deltaY) {
                if (delta > 0) {
                    that.model.state.navigate('next');
                } else {
                    that.model.state.navigate('prev');
                }
                event.preventDefault();
            });

            if (this.model.options.timePicker.enabled) {
                var timePlot = $('#' + that.model.view.id + ' .datepicker-time-view')[0];
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
            var step = this.model.options.timePicker[timekey].step;
            var currentState = DateUtil.normalizeTime(timekey, parseInt(this.model.state.view[timekey]) + step);
            this.model.state.setViewDateTime(timekey, currentState);
            this.model.state.setSelectedDateTime('unix', this.model.state.selected.unixDate);
        }

        /**
         * @desc set time down depend to timekey
         * @param {String} timekey - accept hour, minute,second
         * @public
         */

    }, {
        key: 'timeDown',
        value: function timeDown(timekey) {
            var step = this.model.options.timePicker[timekey].step;
            var currentState = DateUtil.normalizeTime(timekey, parseInt(this.model.state.view[timekey]) - step);
            this.model.state.setViewDateTime(timekey, currentState);
            this.model.state.setSelectedDateTime('unix', this.model.state.selected.unixDate);
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

            if (this.model.options.navigator.enabled) {
                /**
                 * @description navigator click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .btn', function () {
                    if ($(this).is('.btn-next')) {
                        that.model.state.navigate('next');
                        that.model.options.navigator.onNext(that);
                    } else if ($(this).is('.btn-switch')) {
                        that.model.state.switchViewMode();
                        that.model.options.navigator.onSwitch(that);
                    } else if ($(this).is('.btn-prev')) {
                        that.model.state.navigate('prev');
                        that.model.options.navigator.onPrev(that);
                    }
                });
            }

            /**
             * @description check if timePicker enabled attach Events
             */
            if (this.model.options.timePicker.enabled) {

                /**
                 * @description time up btn click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .up-btn', function () {
                    var timekey = $(this).data('time-key');
                    that.timeUp(timekey);
                });

                /**
                 * @description time down btn click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .down-btn', function () {
                    var timekey = $(this).data('time-key');
                    that.timeDown(timekey);
                });
            }

            /**
             * @description check if dayPicker enabled attach Events
             */
            if (this.model.options.dayPicker.enabled) {

                /**
                 * @description days click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-day-view td', function () {
                    var thisUnix = $(this).data('unix');
                    that.model.state.setSelectedDateTime('unix', thisUnix);
                    that.model.state.setViewDateTime('unix', that.model.state.selected.unixDate);
                    that.model.options.dayPicker.onSelect(thisUnix);
                    if (that.model.options.autoClose) {
                        that.model.view.hide();
                        that.model.options.onHide(that);
                    }
                });
            }

            /**
             * @description check if monthPicker enabled attach Events
             */
            if (this.model.options.monthPicker.enabled) {

                /**
                 * @description month click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-month-view .month-item', function () {
                    var month = $(this).data('month');
                    that.model.state.switchViewModeTo('day');
                    if (!that.model.options.onlySelectOnDate) {
                        that.model.state.setSelectedDateTime('month', month);
                        if (that.model.options.autoClose) {
                            that.model.view.hide();
                            that.model.options.onHide(that);
                        }
                    }
                    that.model.state.setViewDateTime('month', month);
                    that.model.options.monthPicker.onSelect(month);
                });
            }

            /**
             * @description check if yearPicker enabled attach Events
             */
            if (this.model.options.yearPicker.enabled) {

                /**
                 * @description year click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-year-view .year-item', function () {
                    var year = $(this).data('year');
                    that.model.state.switchViewModeTo('month');
                    if (!that.model.options.onlySelectOnDate) {
                        that.model.state.setSelectedDateTime('year', year);
                        if (that.model.options.autoClose) {
                            that.model.view.hide();
                            that.model.options.onHide(that);
                        }
                    }
                    that.model.state.setViewDateTime('year', year);
                    that.model.options.yearPicker.onSelect(year);
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
                options.navigator.enabled = false;
                options.toolbox.enabled = false;
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

/*
 * Persian-Datepicker
 * @author Reza Babakhani
 */

var DateUtil = new DateUtil();
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
                self.pDatePicker = new Model(this, options);
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
     * @param {model} model
     * @return {State}
     */
    function State(model) {
        _classCallCheck(this, State);

        /**
         * @type {object}
         */
        this.model = model;

        /**
         * @type {Boolean}
         */
        this.filetredDate = this.model.options.minDate || this.model.options.maxDate;

        /**
         * @desc get generated view mode list from options object
         * @type {Array}
         */
        this.viewModeList = this.model.options._viewModeList;

        /**
         * @desc view mode string day, month, year
         * @type {String}
         * @default day
         * @todo add time to view modes
         */
        this.viewMode = this.viewModeList.indexOf(model.options.viewMode) > 0 ? model.options.viewMode : this.viewModeList[0];

        /**
         * @desc view mode string index in view mode list
         * @type {number}
         */
        this.viewModeIndex = this.viewModeList.indexOf(model.options.viewMode) > 0 ? this.viewModeList.indexOf(model.options.viewMode) : 0; // defaul 'day'


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
            meridiem: 'AM'
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

        this._setFilterDate(this.model.options.minDate, this.model.options.maxDate);
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
            this.model.updateInput(this.selected.unixDate);
            this.model.options.onSelect(this.selected.unixDate);
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
            this.model.view.render(this.view);
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
                    if (self.model.options.timePicker.meridiem.enabled) {
                        this.view.hour = DateUtil.convert12hTo24(value, self.view.meridiem);
                    } else {
                        this.view.hour = value;
                    }
                    break;
                case 'minute':
                    this.view.minute = value;
                    break;
                case 'second':
                    this.view.second = value;
                    break;
                case 'meridiem':
                    self.meridiemToggle();
                    self.setViewDateTime('hour', DateUtil.convertAMtoPM(self.view.hour, self.view.meridiem));
                    return false;
                    break;
            }
            this._setViewDateTimeUnix();
            return this;
        }
    }, {
        key: 'meridiemToggle',
        value: function meridiemToggle() {
            var self = this;
            if (self.view.meridiem === 'AM') {
                self.view.meridiem = 'PM';
            } else if (self.view.meridiem === 'PM') {
                self.view.meridiem = 'AM';
            }
        }
    }]);

    return State;
}();
"use strict";

/**
 * @type {string}
 */
var Template = "\n<div id=\"plotId\" class=\"datepicker-plot-area datepicker-plot-area-inline-view\">\n    {{#navigator.enabled}}\n        <div class=\"navigator\">\n            <div class=\"datepicker-header\">\n                <div class=\"btn btn-next\">{{navigator.text.btnNextText}}</div>\n                <div class=\"btn btn-switch\">{{ navigator.switch.text }}</div>\n                <div class=\"btn btn-prev\">{{navigator.text.btnPrevText}}</div>\n            </div>\n        </div>\n    {{/navigator.enabled}}    \n    <div class=\"datepicker-grid-view\" >\n    {{#days.enabled}}\n        {{#days.viewMode}}\n        <div class=\"datepicker-day-view\" >    \n            <div class=\"month-grid-box\">\n                <div class=\"header\">\n                    <div class=\"title\"></div>\n                    <div class=\"header-row\">\n                        <div class=\"header-row-cell\">\u0634</div>\n                        <div class=\"header-row-cell\">\u06CC</div>\n                        <div class=\"header-row-cell\">\u062F</div>\n                        <div class=\"header-row-cell\">\u0633</div>\n                        <div class=\"header-row-cell\">\u0686</div>\n                        <div class=\"header-row-cell\">\u067E</div>\n                        <div class=\"header-row-cell\">\u062C</div>\n                    </div>\n                </div>    \n                <table cellspacing=\"0\" class=\"table-days\">\n                    <tbody>\n                        {{#days.list}}\n                           \n                            <tr>\n                                {{#.}}\n                                    \n                                    {{#enabled}}\n                                        <td data-unix=\"{{dataUnix}}\" ><span  class=\"{{#otherMonth}}other-month{{/otherMonth}} {{#selected}}selected{{/selected}}\">{{title}}</span></td>\n                                    {{/enabled}}\n                                    {{^enabled}}\n                                        <td data-unix=\"{{dataUnix}}\" class=\"disabled\"><span class=\"{{#otherMonth}}other-month{{/otherMonth}}\">{{title}}</span></td>\n                                    {{/enabled}}\n                                    \n                                {{/.}}\n                            </tr>\n                        {{/days.list}}\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        {{/days.viewMode}}\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n        {{#month.viewMode}}\n            <div class=\"datepicker-month-view\">\n                {{#month.list}}\n                    {{#enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                    {{^enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item month-item-disable {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                {{/month.list}}\n            </div>\n        {{/month.viewMode}}\n    {{/month.enabled}}\n    \n    {{#year.enabled }}\n        {{#year.viewMode }}\n            <div class=\"datepicker-year-view\" >\n                {{#year.list}}\n                    {{#enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}\n                    {{^enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item year-item-disable {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}                    \n                {{/year.list}}\n            </div>\n        {{/year.viewMode }}\n    {{/year.enabled }}\n    \n    </div>\n    {{#time}}\n    {{#enabled}}\n    <div class=\"datepicker-time-view\">\n        {{#hour.enabled}}\n            <div class=\"hour time-segment\" data-time-key=\"hour\">\n                <div class=\"up-btn\" data-time-key=\"hour\">\u25B2</div>\n                <input value=\"{{hour.title}}\" type=\"text\" placeholder=\"hour\" class=\"hour-input\">\n                <div class=\"down-btn\" data-time-key=\"hour\">\u25BC</div>                    \n            </div>       \n            <div class=\"divider\">:</div>\n        {{/hour.enabled}}\n        {{#minute.enabled}}\n            <div class=\"minute time-segment\" data-time-key=\"minute\" >\n                <div class=\"up-btn\" data-time-key=\"minute\">\u25B2</div>\n                <input value=\"{{minute.title}}\" type=\"text\" placeholder=\"minute\" class=\"minute-input\">\n                <div class=\"down-btn\" data-time-key=\"minute\">\u25BC</div>\n            </div>        \n            <div class=\"divider second-divider\">:</div>\n        {{/minute.enabled}}\n        {{#second.enabled}}\n            <div class=\"second time-segment\" data-time-key=\"second\"  >\n                <div class=\"up-btn\" data-time-key=\"second\" >\u25B2</div>\n                <input value=\"{{second.title}}\"  type=\"text\" placeholder=\"second\" class=\"second-input\">\n                <div class=\"down-btn\" data-time-key=\"second\" >\u25BC</div>\n            </div>\n            <div class=\"divider meridian-divider\"></div>\n            <div class=\"divider meridian-divider\"></div>\n        {{/second.enabled}}\n        {{#meridiem.enabled}}\n            <div class=\"meridiem time-segment\" data-time-key=\"meridian\" >\n                <div class=\"up-btn\" data-time-key=\"meridiem\">\u25B2</div>\n                <input value=\"{{meridiem.title}}\" type=\"text\" class=\"meridiem-input\">\n                <div class=\"down-btn\" data-time-key=\"meridiem\">\u25BC</div>\n            </div>\n        {{/meridiem.enabled}}\n    </div>\n    {{/enabled}}\n    {{/time}}\n    \n    {{#toolbox}}\n    {{#enabled}}\n    <div class=\"toolbox \">\n        <div class=\"btn-today\">{{text.btnToday}}</div>\n    </div>\n    {{/enabled}}\n    {{/toolbox}}\n</div>\n";
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
  function Toolbox(model) {
    _classCallCheck(this, Toolbox);

    /**
     * @type {Datepicker}
     */
    this.model = model;
    this._attachEvents();
    return this;
  }

  /**
   * attach all events about toolbox
   */


  _createClass(Toolbox, [{
    key: '_attachEvents',
    value: function _attachEvents() {
      var that = this;
      $(document).on('click', '.btn-today', function () {
        that.model.state.setSelectedDateTime('unix', new Date().valueOf());
        that.model.state.setViewDateTime('unix', new Date().valueOf());
        that.model.options.toolbox.onToday();
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
     * @param {Datepicker} model
     * @return {View}
     */
    function View(model) {
        _classCallCheck(this, View);

        /**
         * @type {number}
         */
        this.yearsViewCount = 12;

        /**
         *
         * @type {Datepicker}
         */
        this.model = model;

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
        if (this.model.inputElement.nodeName === 'INPUT') {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
            this.$container.hide();
            this.setPickerBoxPosition();
        } else {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container-inline"></div>').appendTo(that.model.inputElement);
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
            var inputPosition = this.model.input.getInputPosition();
            var inputSize = this.model.input.getInputSize();
            if (this.model.options.position === "auto") {
                this.$container.css({
                    left: inputPosition.left + 'px',
                    top: inputSize.height + inputPosition.top + 'px'
                });
            } else {
                this.$container.css({
                    top: this.model.options.position[0] + inputPosition.left + 'px',
                    left: this.model.options.position[1] + inputPosition.top + 'px'
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
            this.setPickerBoxPosition();
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
            if (this.model.state.viewMode == 'day') {
                output = this.model.options.dayPicker.titleFormatter.call(this, data.year, data.month);
            } else if (this.model.state.viewMode == 'month') {
                output = this.model.options.monthPicker.titleFormatter.call(this, data.dateObject.valueOf());
            } else if (this.model.state.viewMode == 'year') {
                output = this.model.options.yearPicker.titleFormatter.call(this, data.year);
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
            if (this.model.state.filetredDate) {
                var startYear = this.model.state.filterDate.start.year;
                var endYear = this.model.state.filterDate.end.year;
                if (startYear <= year & year <= endYear) {
                    output = true;
                } else {
                    return false;
                }
            }
            if (output) {
                return this.model.options.checkYear(year);
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
                    yearStr.formatPersian = this.model.options.persianDigit;
                    yearsModel.push({
                        title: yearStr.format('YYYY'),
                        enabled: this.checkYearAccess(i),
                        dataYear: i,
                        selected: this.model.state.selected.year == i
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
                enabled: this.model.options.yearPicker.enabled,
                viewMode: this.model.state.viewMode == 'year',
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
                y = this.model.state.view.year;
            if (this.model.state.filetredDate) {
                var startMonth = this.model.state.filterDate.start.month,
                    endMonth = this.model.state.filterDate.end.month,
                    startYear = this.model.state.filterDate.start.year,
                    endYear = this.model.state.filterDate.end.year;
                if ((startYear == endYear && endYear == y && month >= startMonth && month <= endMonth) | (y != endYear && y == startYear && month >= startMonth) | (y != startYear && y == endYear && month <= endMonth) | (y > startYear && y < endYear)) {
                    output = true;
                } else {
                    return false;
                }
            }
            if (output) {
                return this.model.options.checkMonth(month, y);
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
                        year: this.model.state.view.year,
                        dataMonth: month.index,
                        selected: DateUtil.isSameMonth(this.model.state.selected.dateObject, new pDate([this.model.state.view.year, month.index]))
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
                enabled: this.model.options.monthPicker.enabled,
                viewMode: this.model.state.viewMode == 'month',
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
            self.minDate = this.model.options.minDate;
            self.maxDate = this.model.options.maxDate;

            if (self.model.state.filetredDate) {
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
                return self.model.options.checkDate(unixtimespan);
            }
        }

        /**
         * @private
         * @return {object}
         */

    }, {
        key: '_getDayViewModel',
        value: function _getDayViewModel() {
            if (this.model.state.viewMode != 'day') {
                return [];
            }
            //log('if you see this many time your code has performance issue');
            var viewMonth = this.model.state.view.month;
            var viewYear = this.model.state.view.year;
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
                                pdate = new pDate(this.model.state.view.dateObject.startOf('month').valueOf());
                                calcedDate = pdate.subtract('days', firstWeekDayOfMonth - dayIndex);
                                otherMonth = true;
                            } else if (rowIndex === 0 && dayIndex >= firstWeekDayOfMonth || rowIndex <= 5 && daysListindex < daysCount) {
                                daysListindex += 1;
                                calcedDate = new pDate([this.model.state.view.year, this.model.state.view.month, daysListindex]);
                                otherMonth = false;
                            } else {
                                nextMonthListIndex += 1;
                                pdate = new pDate(this.model.state.view.dateObject.endOf('month').valueOf());
                                calcedDate = pdate.add('days', nextMonthListIndex);
                                otherMonth = true;
                            }
                            calcedDate.formatPersian = this.model.options.persianDigit;
                            outputList[rowIndex].push({
                                title: calcedDate.format('DD'),
                                dataUnix: calcedDate.valueOf(),
                                selected: DateUtil.isSameDay(calcedDate, this.model.state.selected.dateObject),
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
                enabled: this.model.options.dayPicker.enabled && this.model.state.viewMode == 'day',
                viewMode: this.model.state.viewMode == 'day',
                list: outputList
            };
        }

        /**
         * @private
         * @return {{enabled: boolean, hour: {title, enabled: boolean}, minute: {title, enabled: boolean}, second: {title, enabled: boolean}, meridiem: {title: (meridiem|{title, enabled}|ClassDatepicker.ClassConfig.timePicker.meridiem|{enabled}|string|string), enabled: boolean}}}
         */

    }, {
        key: '_getTimeViewModel',
        value: function _getTimeViewModel() {
            var hourTitle = void 0;
            this.model.state.view.dateObject.formatPersian = this.model.options.persianDigit;

            if (this.model.options.timePicker.meridiem.enabled) {
                hourTitle = (DateUtil.convert24hTo12(this.model.state.view.hour) + '').toPersianDigit();
            } else {
                hourTitle = (this.model.state.view.hour + '').toPersianDigit();
            }

            return {
                enabled: this.model.options.timePicker.enabled,
                hour: {
                    title: hourTitle,
                    enabled: this.model.options.timePicker.hour.enabled
                },
                minute: {
                    title: this.model.state.view.dateObject.format('mm'),
                    enabled: this.model.options.timePicker.minute.enabled
                },
                second: {
                    title: this.model.state.view.dateObject.format('ss'),
                    enabled: this.model.options.timePicker.second.enabled
                },
                meridiem: {
                    title: this.model.state.view.dateObject.format('a'),
                    enabled: this.model.options.timePicker.meridiem.enabled
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
                    enabled: this.model.options.navigator.enabled,
                    switch: {
                        enabled: true,
                        text: this._getNavSwitchText(data)
                    },
                    text: this.model.options.navigator.text
                },
                selected: this.model.state.selected,
                time: this._getTimeViewModel(data),
                days: this._getDayViewModel(data),
                month: this._getMonthViewModel(data),
                year: this._getYearViewModel(data),
                toolbox: this.model.options.toolbox
            };
        }

        /**
         * @render datepicker view element
         * @param data
         */

    }, {
        key: 'render',
        value: function render(data) {
            // log('Render')
            debug(this, 'render');
            Mustache.parse(Template);
            this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
            this.$container.empty().append(this.rendered);
            this.afterRender();
        }
    }, {
        key: 'reRender',
        value: function reRender() {
            var data = this.model.state.view;
            this.render(data);
        }

        /**
         * @desc do after render work like attache events
         */

    }, {
        key: 'afterRender',
        value: function afterRender() {
            if (this.model.navigator) {
                this.model.navigator.liveAttach();
            }
        }
    }]);

    return View;
}();
