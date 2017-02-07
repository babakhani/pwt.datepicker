/*
  persian-datepicker - v0.5.0 
  Author: reza babakhani 
 http://babakhani.github.io/PersianWebToolkit/datepicker 
 */
( function () {'use strict';

var log = function log(input) {
    console.log(input);
};
var debug = function debug(elem, input) {
    if (window.persianDatepickerDebug) {
        console.log('Debug: ' + elem.constructor.name + ' : ' + input);
    }
};

var delay = function delay(callback, ms) {
    clearTimeout(window.datepickerTimer);
    window.datepickerTimer = setTimeout(callback, ms);
};

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

var DateUtil = {
    isSameDay: function isSameDay(dateA, dateB) {
        return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    },
    isSameMonth: function isSameMonth(dateA, dateB) {
        return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    },
    normalizeTime: function normalizeTime(key, value) {
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
    },
    validatePersianDateString: function validatePersianDateString(pasted) {
        var newDate = new Date(pasted),
            trueYear = null,
            trueMonth = null,
            trueDay = null,
            inputArray = pasted.split("/");

        if (inputArray.length === 3) {
            trueYear = inputArray[0].toString().length <= 4 && inputArray[0].toString().length >= 1;
            trueMonth = inputArray[1].toString().length <= 2 && inputArray[1].toString().length >= 1;
            trueDay = inputArray[2].toString().length <= 2 && inputArray[2].toString().length >= 1;
        }
        $.each(inputArray, function (index, key) {
            inputArray[index] = parseInt(key);
        });
        if (trueYear && trueMonth && trueDay && newDate !== "Invalid Date") {
            return inputArray;
        } else {
            return null;
        }
    }
};
'use strict';

var Datepicker = function Datepicker(inputElement, options) {
    this.initialUnix = null;
    this.inputElement = inputElement;
    this.options = new Options(options);
    this.input = new Input(this, inputElement);
    this.state = new State(this);
    this.view = new View(this);
    this.toolbox = new Toolbox(this);

    this.updateInput = function (unix) {
        this.input.update(unix);
    };
    this.selectDate = function (unix) {
        $(inputElement).val(new pDate(unix).format());
        return this;
    };

    this.state.setViewDateTime('unix', this.input.getOnInitState());

    if (this.options.initialValue) {
        this.state.setSelectedDateTime('unix', this.input.getOnInitState());
        this.state.setViewDateTime('unix', this.input.getOnInitState());
    }

    this.navigator = new Navigator(options, this);

    var that = this;
    return {
        'datepicker': this,
        'state': this.state,
        selectDate: this.selectDate,
        updateView: this.updateView,
        show: function show() {
            that.view.show();
            return that;
        },
        hide: function hide() {
            that.view.hide();
            return that;
        },
        toggle: function toggle() {
            that.view.toggle();
            return that;
        }
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
   * @version 0.6.0
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

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Under Implement ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Un  implemented ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
  'inputDelay': 800,

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
  'onHide': function onHide(self) {}

};
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
    function Input(datepicker, inputElement) {
        _classCallCheck(this, Input);

        this.datepicker = datepicker;
        this.elem = inputElement;
        this.initialUnix = null;
        return this;
    }

    _createClass(Input, [{
        key: 'attachInputElementEvents',
        value: function attachInputElementEvents() {
            var that = this;
            $(this.elem).focus(function () {
                that.datepicker.view.show();
            });
            $(this.elem).blur(function (e) {
                // TODO: must fix
                // if ($(e.target).parents('#' + that.datepicker.view.id).length < 0) {
                that.datepicker.view.hide();
                //}
            });
        }
    }, {
        key: 'getInputPosition',
        value: function getInputPosition() {
            return $(this.elem).position();
        }
    }, {
        key: 'updateAltField',
        value: function updateAltField(unix) {
            var value = this.datepicker.options.altFieldFormatter(unix);
            $(this.datepicker.options.altField).val(value);
        }
    }, {
        key: 'updateInputField',
        value: function updateInputField(unix) {
            var value = this.datepicker.options.formatter(unix);
            $(this.elem).val(value);
        }
    }, {
        key: 'update',
        value: function update(unix) {
            this.updateInputField(unix);
            this.updateAltField(unix);
        }
    }, {
        key: 'getOnInitState',
        value: function getOnInitState() {
            var garegurianDate = null;
            var $inputElem = $(this.elem);
            this.initialUnix = null;
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

var Navigator = function () {
    function Navigator(options, datepicker) {
        _classCallCheck(this, Navigator);

        this.datepicker = datepicker;
        this._attachEvents();
    }

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
    }, {
        key: 'timeUp',
        value: function timeUp(timekey) {
            var step = this.datepicker.options.timePicker[timekey].step;
            var currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) + step);
            this.datepicker.state.setViewDateTime(timekey, currentState);
            this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
        }
    }, {
        key: 'timeDown',
        value: function timeDown(timekey) {
            var step = this.datepicker.options.timePicker[timekey].step;
            var currentState = DateUtil.normalizeTime(timekey, parseInt(this.datepicker.state.view[timekey]) - step);
            this.datepicker.state.setViewDateTime(timekey, currentState);
            this.datepicker.state.setSelectedDateTime('unix', this.datepicker.state.selected.unixDate);
        }
    }, {
        key: '_attachEvents',
        value: function _attachEvents() {
            var that = this;

            this.liveAttach();

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
                    }
                    that.datepicker.state.setViewDateTime('month', month);
                    that.datepicker.options.monthPicker.onSelect(month);
                });
            }

            /**
             * @description check if yearPicker enabled attach Events
             */
            if (this.datepicker.options.monthPicker.enabled) {
                /**
                 * @description year click event
                 */
                $(document).on('click', '#' + that.datepicker.view.id + ' .datepicker-year-view .year-item', function () {
                    var year = $(this).data('year');
                    that.datepicker.state.switchViewModeTo('month');
                    if (!that.datepicker.options.onlySelectOnDate) {
                        that.datepicker.state.setSelectedDateTime('year', year);
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

var Options = function () {
    function Options(options) {
        _classCallCheck(this, Options);

        return this.compatibility($.extend(true, this, DefaultConfig, options));
    }

    _createClass(Options, [{
        key: 'compatibility',
        value: function compatibility(options) {
            if (options.onlyTimePicker) {
                options.dayPicker.enabled = false;
                options.monthPicker.enabled = false;
                options.yearPicker.enabled = false;
                options.timePicker.enabled = true;
            }

            if (options.timePicker.hour.step == null) {
                options.timePicker.hour.step = options.timePicker.step;
            }
            if (options.timePicker.minute.step == null) {
                options.timePicker.minute.step = options.timePicker.step;
            }
            if (options.timePicker.second.step == null) {
                options.timePicker.second.step = options.timePicker.step;
            }

            if (options.dayPicker.enabled == false) {
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
    function State(datepicker) {
        _classCallCheck(this, State);

        this.datepicker = datepicker;
        this.filetredDate = this.datepicker.options.minDate || this.datepicker.options.maxDate;
        this.viewModeList = this.datepicker.options._viewModeList;
        this.viewMode = this.viewModeList.indexOf(datepicker.options.viewMode) > 0 ? datepicker.options.viewMode : this.viewModeList[0]; // defaul 'day'
        this.viewModeIndex = this.viewModeList.indexOf(datepicker.options.viewMode) > 0 ? this.viewModeList.indexOf(datepicker.options.viewMode) : 0; // defaul 'day'
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
            dateObject: null,
            meridian: 'AM'
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
        this.setFilterDate(this.datepicker.options.minDate, this.datepicker.options.maxDate);
        return this;
    }

    _createClass(State, [{
        key: 'setFilterDate',
        value: function setFilterDate(minDate, maxDate) {
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
                    this.selected.month = value;
                    that._updateSelectedUnix();
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
    }, {
        key: '_updateSelectedUnix',
        value: function _updateSelectedUnix() {
            this.selected.dateObject = new persianDate([this.selected.year, this.selected.month, this.selected.date, this.view.hour, this.view.minute, this.view.second]);
            this.selected.unixDate = this.selected.dateObject.valueOf();
            this.datepicker.updateInput(this.selected.unixDate);
            this.datepicker.options.onSelect(this.selected.unixDate);
            return this;
        }
    }, {
        key: '_syncViewModes',
        value: function _syncViewModes(pd) {
            this.view.year = pd.year();
            this.view.month = pd.month();
            this.view.date = pd.date();
        }
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
    }, {
        key: 'switchViewMode',
        value: function switchViewMode() {
            this.viewModeIndex = this.viewModeIndex + 1 >= this.viewModeList.length ? 0 : this.viewModeIndex + 1;
            this.viewMode = this.viewModeList[this.viewModeIndex] ? this.viewModeList[this.viewModeIndex] : this.viewModeList[0];
            this._setViewDateTimeUnix();
            return this;
        }
    }, {
        key: 'switchViewModeTo',
        value: function switchViewModeTo(viewMode) {
            if (this.viewModeList.indexOf(viewMode) >= 0) {
                this.viewMode = viewMode;
                this.viewModeIndex = this.viewModeList.indexOf(viewMode);
            }
        }
    }, {
        key: '_setViewDateTimeUnix',
        value: function _setViewDateTimeUnix() {
            this.view.dateObject = new persianDate([this.view.year, this.view.month, this.view.date, this.view.hour, this.view.minute, this.view.second]);
            this._syncViewModes(this.view.dateObject);
            this.view.unixDate = this.view.dateObject.valueOf();
            this.datepicker.view.render(this.view);
            return this;
        }
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
                    this.view.month = value;
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

var Template = "\n<div id=\"plotId\" class=\"datepicker-plot-area datepicker-plot-area-inline-view\">\n    {{#navigator.enabled}}\n        <div class=\"navigator\">\n            <div class=\"datepicker-header\">\n                <div class=\"btn btn-next\">{{navigator.text.btnNextText}}</div>\n                <div class=\"btn btn-switch\">{{ navigator.switch.text }}</div>\n                <div class=\"btn btn-prev\">{{navigator.text.btnPrevText}}</div>\n            </div>\n        </div>\n    {{/navigator.enabled}}    \n    <div class=\"datepicker-grid-view\" >\n    {{#days.enabled}}\n        {{#days.viewMode}}\n        <div class=\"datepicker-day-view\" >    \n            <div class=\"month-grid-box\">\n                <div class=\"header\">\n                    <div class=\"title\"></div>\n                    <div class=\"header-row\">\n                        <div class=\"header-row-cell\">\u0634</div>\n                        <div class=\"header-row-cell\">\u06CC</div>\n                        <div class=\"header-row-cell\">\u062F</div>\n                        <div class=\"header-row-cell\">\u0633</div>\n                        <div class=\"header-row-cell\">\u0686</div>\n                        <div class=\"header-row-cell\">\u067E</div>\n                        <div class=\"header-row-cell\">\u062C</div>\n                    </div>\n                </div>    \n                <table cellspacing=\"0\" class=\"table-days\">\n                    <tbody>\n                        {{#days.list}}\n                           \n                            <tr>\n                                {{#.}}\n                                    \n                                    {{#enabled}}\n                                        <td data-unix=\"{{dataUnix}}\" ><span  class=\"{{#otherMonth}}other-month{{/otherMonth}} {{#selected}}selected{{/selected}}\">{{title}}</span></td>\n                                    {{/enabled}}\n                                    {{^enabled}}\n                                        <td data-unix=\"{{dataUnix}}\" class=\"disabled\"><span class=\"{{#otherMonth}}other-month{{/otherMonth}}\">{{title}}</span></td>\n                                    {{/enabled}}\n                                    \n                                {{/.}}\n                            </tr>\n                        {{/days.list}}\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        {{/days.viewMode}}\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n        {{#month.viewMode}}\n            <div class=\"datepicker-month-view\">\n                {{#month.list}}\n                    {{#enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                    {{^enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item month-item-disable {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                {{/month.list}}\n            </div>\n        {{/month.viewMode}}\n    {{/month.enabled}}\n    \n    {{#year.enabled }}\n        {{#year.viewMode }}\n            <div class=\"datepicker-year-view\" >\n                {{#year.list}}\n                    {{#enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}\n                    {{^enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item year-item-disable {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}                    \n                {{/year.list}}\n            </div>\n        {{/year.viewMode }}\n    {{/year.enabled }}\n    \n    </div>\n    {{#time}}\n    {{#enabled}}\n    <div class=\"datepicker-time-view\">\n        {{#hour.enabled}}\n            <div class=\"hour time-segment\" data-time-key=\"hour\">\n                <div class=\"up-btn\" data-time-key=\"hour\">\u25B2</div>\n                <input value=\"{{hour.title}}\" type=\"text\" placeholder=\"hour\" class=\"hour-input\">\n                <div class=\"down-btn\" data-time-key=\"hour\">\u25BC</div>                    \n            </div>       \n            <div class=\"divider\">:</div>\n        {{/hour.enabled}}\n        {{#minute.enabled}}\n            <div class=\"minute time-segment\" data-time-key=\"minute\" >\n                <div class=\"up-btn\" data-time-key=\"minute\">\u25B2</div>\n                <input value=\"{{minute.title}}\" type=\"text\" placeholder=\"minute\" class=\"minute-input\">\n                <div class=\"down-btn\" data-time-key=\"minute\">\u25BC</div>\n            </div>        \n            <div class=\"divider second-divider\">:</div>\n        {{/minute.enabled}}\n        {{#second.enabled}}\n            <div class=\"second time-segment\" data-time-key=\"second\"  >\n                <div class=\"up-btn\" data-time-key=\"second\" >\u25B2</div>\n                <input value=\"{{second.title}}\"  type=\"text\" placeholder=\"second\" class=\"second-input\">\n                <div class=\"down-btn\" data-time-key=\"second\" >\u25BC</div>\n            </div>\n            <div class=\"divider meridian-divider\"></div>\n            <div class=\"divider meridian-divider\"></div>\n        {{/second.enabled}}\n        {{#meridian.enabled}}\n            <div class=\"meridian time-segment\" data-time-key=\"meridian\" >\n                <div class=\"up-btn\" data-time-key=\"meridian\">\u25B2</div>\n                <input value=\"{{meridian.title}}\" type=\"text\" class=\"meridian-input\">\n                <div class=\"down-btn\" data-time-key=\"meridian\">\u25BC</div>\n            </div>\n        {{/meridian.enabled}}\n    </div>\n    {{/enabled}}\n    {{/time}}\n    \n    {{#toolbox}}\n    {{#enabled}}\n    <div class=\"toolbox \">\n        <div class=\"btn-today\">{{text.btnToday}}</div>\n    </div>\n    {{/enabled}}\n    {{/toolbox}}\n</div>\n";
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toolbox = function () {
    function Toolbox(datepicker) {
        _classCallCheck(this, Toolbox);

        this.datepicker = datepicker;
        this.attachEvents();
        return this;
    }

    _createClass(Toolbox, [{
        key: 'attachEvents',
        value: function attachEvents() {
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

var View = function () {
    function View(datepicker) {
        _classCallCheck(this, View);

        this.yearsViewCount = 12;
        this.datepicker = datepicker;
        this.rendered = null;
        var randomId = parseInt(Math.random(100) * 1000);
        this.id = 'persianDateInstance-' + randomId;
        var that = this;
        if (this.datepicker.inputElement.nodeName === 'INPUT') {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
            this.$container.hide();
            this.datepicker.input.attachInputElementEvents();
            this.setPickerBoxPosition();
        } else {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container-inline"></div>').appendTo(that.datepicker.inputElement);
        }
        return this;
    }

    _createClass(View, [{
        key: 'setPickerBoxPosition',
        value: function setPickerBoxPosition() {}
    }, {
        key: 'show',
        value: function show() {
            this.$container.show();
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.$container.hide();
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.$container.toggle();
        }
    }, {
        key: 'getNavSwitchText',
        value: function getNavSwitchText(data) {
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
    }, {
        key: 'checkYearAccess',
        value: function checkYearAccess(y) {
            var output = true;
            if (this.datepicker.state.filetredDate) {
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
    }, {
        key: 'getMonthViewModel',
        value: function getMonthViewModel() {
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
    }, {
        key: 'checkDayAccess',
        value: function checkDayAccess(thisUnix) {
            var self = this,
                output = true;
            self.minDate = this.datepicker.options.minDate;
            self.maxDate = this.datepicker.options.maxDate;

            if (self.datepicker.state.filetredDate) {
                if (self.minDate && self.maxDate) {
                    self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                    self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                    if (!(thisUnix >= self.minDate && thisUnix <= self.maxDate)) {
                        return false;
                    }
                } else if (self.minDate) {
                    self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                    if (thisUnix <= self.minDate) {
                        return false;
                    }
                } else if (self.maxDate) {
                    self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                    if (thisUnix <= self.maxDate) {
                        return false;
                    }
                }
            }
            if (output) {
                return self.datepicker.options.checkDate(thisUnix);
            }
        }
    }, {
        key: 'getDayViewModel',
        value: function getDayViewModel() {
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

                            if (rowIndex == 0 && dayIndex < firstWeekDayOfMonth) {
                                var pdate = new pDate(this.datepicker.state.view.dateObject.startOf('month').valueOf());
                                var calcedDate = pdate.subtract('days', firstWeekDayOfMonth - dayIndex);
                                var otherMonth = true;
                            } else if (rowIndex == 0 && dayIndex >= firstWeekDayOfMonth || rowIndex <= 5 && daysListindex < daysCount) {
                                daysListindex += 1;
                                var calcedDate = new pDate([this.datepicker.state.view.year, this.datepicker.state.view.month, daysListindex]);
                                var otherMonth = false;
                            } else {
                                nextMonthListIndex += 1;
                                var pdate = new pDate(this.datepicker.state.view.dateObject.endOf('month').valueOf());
                                var calcedDate = pdate.add('days', nextMonthListIndex);
                                var otherMonth = true;
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
    }, {
        key: 'getTimeViewModel',
        value: function getTimeViewModel() {
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
    }, {
        key: 'getViewModel',
        value: function getViewModel(data) {
            return {
                plotId: '',
                navigator: {
                    enabled: this.datepicker.options.navigator.enabled,
                    switch: {
                        enabled: true,
                        text: this.getNavSwitchText(data)
                    },
                    text: this.datepicker.options.navigator.text
                },
                selected: this.datepicker.state.selected,
                time: this.getTimeViewModel(data),
                days: this.getDayViewModel(data),
                month: this.getMonthViewModel(data),
                year: this.getYearViewModel(data),
                toolbox: this.datepicker.options.toolbox
            };
        }
    }, {
        key: 'render',
        value: function render(data) {
            debug(this, 'render');
            Mustache.parse(Template);
            this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
            this.$container.empty().append(this.rendered);
            this.afterRnder();
        }
    }, {
        key: 'afterRnder',
        value: function afterRnder() {
            if (this.datepicker.navigator) {
                this.datepicker.navigator.liveAttach();
            }
        }
    }]);

    return View;
}();

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (typeof define === 'function' && define.amd) {
    define(['exports'], factory); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));

(function(window, document){
'use strict';

/**
 * Hamster
 * use this to create instances
 * @returns {Hamster.Instance}
 * @constructor
 */
var Hamster = function(element) {
  return new Hamster.Instance(element);
};

// default event name
Hamster.SUPPORT = 'wheel';

// default DOM methods
Hamster.ADD_EVENT = 'addEventListener';
Hamster.REMOVE_EVENT = 'removeEventListener';
Hamster.PREFIX = '';

// until browser inconsistencies have been fixed...
Hamster.READY = false;

Hamster.Instance = function(element){
  if (!Hamster.READY) {
    // fix browser inconsistencies
    Hamster.normalise.browser();

    // Hamster is ready...!
    Hamster.READY = true;
  }

  this.element = element;

  // store attached event handlers
  this.handlers = [];

  // return instance
  return this;
};

/**
 * create new hamster instance
 * all methods should return the instance itself, so it is chainable.
 * @param   {HTMLElement}       element
 * @returns {Hamster.Instance}
 * @constructor
 */
Hamster.Instance.prototype = {
  /**
   * bind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  wheel: function onEvent(handler, useCapture){
    Hamster.event.add(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.add(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  },

  /**
   * unbind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  unwheel: function offEvent(handler, useCapture){
    // if no handler argument,
    // unbind the last bound handler (if exists)
    if (handler === undefined && (handler = this.handlers.slice(-1)[0])) {
      handler = handler.original;
    }

    Hamster.event.remove(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.remove(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  }
};

Hamster.event = {
  /**
   * cross-browser 'addWheelListener'
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  add: function add(hamster, eventName, handler, useCapture){
    // store the original handler
    var originalHandler = handler;

    // redefine the handler
    handler = function(originalEvent){

      if (!originalEvent) {
        originalEvent = window.event;
      }

      // create a normalised event object,
      // and normalise "deltas" of the mouse wheel
      var event = Hamster.normalise.event(originalEvent),
          delta = Hamster.normalise.delta(originalEvent);

      // fire the original handler with normalised arguments
      return originalHandler(event, delta[0], delta[1], delta[2]);

    };

    // cross-browser addEventListener
    hamster.element[Hamster.ADD_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // store original and normalised handlers on the instance
    hamster.handlers.push({
      original: originalHandler,
      normalised: handler
    });
  },

  /**
   * removeWheelListener
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  remove: function remove(hamster, eventName, handler, useCapture){
    // find the normalised handler on the instance
    var originalHandler = handler,
        lookup = {},
        handlers;
    for (var i = 0, len = hamster.handlers.length; i < len; ++i) {
      lookup[hamster.handlers[i].original] = hamster.handlers[i];
    }
    handlers = lookup[originalHandler];
    handler = handlers.normalised;

    // cross-browser removeEventListener
    hamster.element[Hamster.REMOVE_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // remove original and normalised handlers from the instance
    for (var h in hamster.handlers) {
      if (hamster.handlers[h] == handlers) {
        hamster.handlers.splice(h, 1);
        break;
      }
    }
  }
};

/**
 * these hold the lowest deltas,
 * used to normalise the delta values
 * @type {Number}
 */
var lowestDelta,
    lowestDeltaXY;

Hamster.normalise = {
  /**
   * fix browser inconsistencies
   */
  browser: function normaliseBrowser(){
    // detect deprecated wheel events
    if (!('onwheel' in document || document.documentMode >= 9)) {
      Hamster.SUPPORT = document.onmousewheel !== undefined ?
                        'mousewheel' : // webkit and IE < 9 support at least "mousewheel"
                        'DOMMouseScroll'; // assume remaining browsers are older Firefox
    }

    // detect deprecated event model
    if (!window.addEventListener) {
      // assume IE < 9
      Hamster.ADD_EVENT = 'attachEvent';
      Hamster.REMOVE_EVENT = 'detachEvent';
      Hamster.PREFIX = 'on';
    }

  },

  /**
   * create a normalised event object
   * @param   {Function}    originalEvent
   * @returns {Object}      event
   */
   event: function normaliseEvent(originalEvent){
    var event = {
          // keep a reference to the original event object
          originalEvent: originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: 'wheel',
          deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          delatZ: 0,
          preventDefault: function(){
            if (originalEvent.preventDefault) {
              originalEvent.preventDefault();
            } else {
              originalEvent.returnValue = false;
            }
          },
          stopPropagation: function(){
            if (originalEvent.stopPropagation) {
              originalEvent.stopPropagation();
            } else {
              originalEvent.cancelBubble = false;
            }
          }
        };

    // calculate deltaY (and deltaX) according to the event

    // 'mousewheel'
    if (originalEvent.wheelDelta) {
      event.deltaY = - 1/40 * originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaX) {
      event.deltaX = - 1/40 * originalEvent.wheelDeltaX;
    }

    // 'DomMouseScroll'
    if (originalEvent.detail) {
      event.deltaY = originalEvent.detail;
    }

    return event;
  },

  /**
   * normalise 'deltas' of the mouse wheel
   * @param   {Function}    originalEvent
   * @returns {Array}       deltas
   */
  delta: function normaliseDelta(originalEvent){
    var delta = 0,
      deltaX = 0,
      deltaY = 0,
      absDelta = 0,
      absDeltaXY = 0,
      fn;

    // normalise deltas according to the event

    // 'wheel' event
    if (originalEvent.deltaY) {
      deltaY = originalEvent.deltaY * -1;
      delta  = deltaY;
    }
    if (originalEvent.deltaX) {
      deltaX = originalEvent.deltaX;
      delta  = deltaX * -1;
    }

    // 'mousewheel' event
    if (originalEvent.wheelDelta) {
      delta = originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaY) {
      deltaY = originalEvent.wheelDeltaY;
    }
    if (originalEvent.wheelDeltaX) {
      deltaX = originalEvent.wheelDeltaX * -1;
    }

    // 'DomMouseScroll' event
    if (originalEvent.detail) {
      delta = originalEvent.detail * -1;
    }

    // Don't return NaN
    if (delta === 0) {
      return [0, 0, 0];
    }

    // look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
    }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
      lowestDeltaXY = absDeltaXY;
    }

    // convert deltas to whole numbers
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    return [delta, deltaX, deltaY];
  }
};

if (typeof window.define === 'function' && window.define.amd) {
  // AMD
  window.define('hamster', [], function(){
    return Hamster;
  });
} else if (typeof exports === 'object') {
  // CommonJS
  module.exports = Hamster;
} else {
  // Browser global
  window.Hamster = Hamster;
}

})(window, window.document);
}());