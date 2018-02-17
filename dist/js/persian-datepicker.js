/*
** persian-datepicker - v1.1.3
** Reza Babakhani <babakhani.reza@gmail.com>
** http://babakhani.github.io/PersianWebToolkit/docs/datepicker
** Under WTFPL license
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["persianDatepicker"] = factory();
	else
		root["persianDatepicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Helper = {

    // leading edge, instead of the trailing.
    debounce: function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },


    /**
     * @desc normal log
     * @param input
     * @example log('whoooooha')
     */
    log: function log(input) {
        /*eslint-disable no-console */
        console.log(input);
        /*eslint-enable no-console */
    },


    /* eslint-disable no-useless-escape */
    isMobile: function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }(),
    /* eslint-enable no-useless-escape */

    /**
     * @desc show debug messages if window.persianDatepickerDebug set as true
     * @param elem
     * @param input
     * @example window.persianDatepickerDebug = true;
     * debug('element','message');
     */
    debug: function debug(elem, input) {
        /*eslint-disable no-console */
        if (window.persianDatepickerDebug) {
            if (elem.constructor.name) {
                console.log('Debug: ' + elem.constructor.name + ' : ' + input);
            } else {
                console.log('Debug: ' + input);
            }
        }
        /*eslint-enable no-console */
    },
    delay: function delay(callback, ms) {
        clearTimeout(window.datepickerTimer);
        window.datepickerTimer = setTimeout(callback, ms);
    }
};

module.exports = Helper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @type {string}
 */
var Template = "\n<div id=\"plotId\" class=\"datepicker-plot-area {{cssClass}}\">\n    {{#navigator.enabled}}\n        <div data-navigator class=\"datepicker-navigator\">\n            <div class=\"pwt-btn pwt-btn-next\">{{navigator.text.btnNextText}}</div>\n            <div class=\"pwt-btn pwt-btn-switch\">{{navigator.switch.text}}</div>\n            <div class=\"pwt-btn pwt-btn-prev\">{{navigator.text.btnPrevText}}</div>\n        </div>\n    {{/navigator.enabled}}\n    <div class=\"datepicker-grid-view\" >\n    {{#days.enabled}}\n        {{#days.viewMode}}\n        <div class=\"datepicker-day-view\" >    \n            <div class=\"month-grid-box\">\n                <div class=\"header\">\n                    <div class=\"title\"></div>\n                    <div class=\"header-row\">\n                        {{#weekdays.list}}\n                            <div class=\"header-row-cell\">{{.}}</div>\n                        {{/weekdays.list}}\n                    </div>\n                </div>    \n                <table cellspacing=\"0\" class=\"table-days\">\n                    <tbody>\n                        {{#days.list}}\n                           \n                            <tr>\n                                {{#.}}\n                                    {{#enabled}}\n                                        <td data-date=\"{{dataDate}}\" data-unix=\"{{dataUnix}}\" >\n                                            <span  class=\"{{#otherMonth}}other-month{{/otherMonth}}\">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class=\"alter-calendar-day\">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    {{^enabled}}\n                                        <td data-date=\"{{dataDate}}\" data-unix=\"{{dataUnix}}\" class=\"disabled\">\n                                            <span class=\"{{#otherMonth}}other-month{{/otherMonth}}\">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class=\"alter-calendar-day\">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    \n                                {{/.}}\n                            </tr>\n                        {{/days.list}}\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        {{/days.viewMode}}\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n        {{#month.viewMode}}\n            <div class=\"datepicker-month-view\">\n                {{#month.list}}\n                    {{#enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                    {{^enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item month-item-disable {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                {{/month.list}}\n            </div>\n        {{/month.viewMode}}\n    {{/month.enabled}}\n    \n    {{#year.enabled }}\n        {{#year.viewMode }}\n            <div class=\"datepicker-year-view\" >\n                {{#year.list}}\n                    {{#enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}\n                    {{^enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item year-item-disable {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}                    \n                {{/year.list}}\n            </div>\n        {{/year.viewMode }}\n    {{/year.enabled }}\n    \n    </div>\n    {{#time}}\n    {{#enabled}}\n    <div class=\"datepicker-time-view\">\n        {{#hour.enabled}}\n            <div class=\"hour time-segment\" data-time-key=\"hour\">\n                <div class=\"up-btn\" data-time-key=\"hour\">\u25B2</div>\n                <input value=\"{{hour.title}}\" type=\"text\" placeholder=\"hour\" class=\"hour-input\">\n                <div class=\"down-btn\" data-time-key=\"hour\">\u25BC</div>                    \n            </div>       \n            <div class=\"divider\">\n                <span>:</span>\n            </div>\n        {{/hour.enabled}}\n        {{#minute.enabled}}\n            <div class=\"minute time-segment\" data-time-key=\"minute\" >\n                <div class=\"up-btn\" data-time-key=\"minute\">\u25B2</div>\n                <input disabled value=\"{{minute.title}}\" type=\"text\" placeholder=\"minute\" class=\"minute-input\">\n                <div class=\"down-btn\" data-time-key=\"minute\">\u25BC</div>\n            </div>        \n            <div class=\"divider second-divider\">\n                <span>:</span>\n            </div>\n        {{/minute.enabled}}\n        {{#second.enabled}}\n            <div class=\"second time-segment\" data-time-key=\"second\"  >\n                <div class=\"up-btn\" data-time-key=\"second\" >\u25B2</div>\n                <input disabled value=\"{{second.title}}\"  type=\"text\" placeholder=\"second\" class=\"second-input\">\n                <div class=\"down-btn\" data-time-key=\"second\" >\u25BC</div>\n            </div>\n            <div class=\"divider meridian-divider\"></div>\n            <div class=\"divider meridian-divider\"></div>\n        {{/second.enabled}}\n        {{#meridian.enabled}}\n            <div class=\"meridian time-segment\" data-time-key=\"meridian\" >\n                <div class=\"up-btn\" data-time-key=\"meridian\">\u25B2</div>\n                <input disabled value=\"{{meridian.title}}\" type=\"text\" class=\"meridian-input\">\n                <div class=\"down-btn\" data-time-key=\"meridian\">\u25BC</div>\n            </div>\n        {{/meridian.enabled}}\n    </div>\n    {{/enabled}}\n    {{/time}}\n    \n    {{#toolbox}}\n    {{#enabled}}\n    <div class=\"toolbox\">\n        {{#toolbox.submitButton.enabled}}\n            <div class=\"pwt-btn-submit\">{{submitButtonText}}</div>\n        {{/toolbox.submitButton.enabled}}        \n        {{#toolbox.todayButton.enabled}}\n            <div class=\"pwt-btn-today\">{{todayButtonText}}</div>\n        {{/toolbox.todayButton.enabled}}        \n        {{#toolbox.calendarSwitch.enabled}}\n            <div class=\"pwt-btn-calendar\">{{calendarSwitchText}}</div>\n        {{/toolbox.calendarSwitch.enabled}}\n    </div>\n    {{/enabled}}\n    {{^enabled}}\n        {{#onlyTimePicker}}\n        <div class=\"toolbox\">\n            <div class=\"pwt-btn-submit\">{{submitButtonText}}</div>\n        </div>\n        {{/onlyTimePicker}}\n    {{/enabled}}\n    {{/toolbox}}\n</div>\n";

module.exports = Template;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = __webpack_require__(11);
var Toolbox = __webpack_require__(12);
var View = __webpack_require__(13);
var Input = __webpack_require__(6);
var API = __webpack_require__(3);
var Navigator = __webpack_require__(7);
var Options = __webpack_require__(8);
var PersianDateWrapper = __webpack_require__(10);

/**
 * Main datepicker object, manage every things
 */

var Model = function () {

  /**
   * @param inputElement
   * @param options
   * @private
   */
  function Model(inputElement, options) {
    _classCallCheck(this, Model);

    return this.components(inputElement, options);
  }

  _createClass(Model, [{
    key: 'components',
    value: function components(inputElement, options) {
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
      this.options = new Options(options, this);

      /**
       *
       * @type {PersianDateWrapper}
       */
      this.PersianDate = new PersianDateWrapper(this);

      /**
       * @desc set and get selected and view and other state
       * @type {State}
       */
      this.state = new State(this);

      this.api = new API(this);

      /**
       * @desc handle works about input and alt field input element
       * @type {Input}
       */
      this.input = new Input(this, inputElement);

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
      this.state.setSelectedDateTime('unix', this.input.getOnInitState());
      this.view.render();

      /**
       * @desc handle navigation and dateoicker element events
       * @type {Navigator}
       */
      this.navigator = new Navigator(this);

      return this.api;
    }
  }]);

  return Model;
}();

module.exports = Model;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This is the API documentation for persian-datepicker
 */
var API = function () {
    function API(model) {
        _classCallCheck(this, API);

        this.model = model;
    }

    /**
     * @description get current option object
     * @example var pd = $('.selector').persianDatepicker();
     * console.log(pd.options);
     */


    _createClass(API, [{
        key: 'show',


        /**
         * @description make datepicker visible
         * @example var pd = $('.selector').persianDatepicker();
         * pd.show();
         */
        value: function show() {
            this.model.view.show();
            this.model.options.onShow(this.model);
            return this.model;
        }

        /**
         * @description return datepicker current state
         * @since 1.0.0
         * @example var pd = $('.selector').persianDatepicker();
         * var state = pd.getState();
         *
         * console.log(state.selected);
         * console.log(state.view);
         * */

    }, {
        key: 'getState',
        value: function getState() {
            return this.model.state;
        }

        /**
         * @description make datepicker invisible
         * @example var pd = $('.selector').persianDatepicker();
         * pd.show();
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.model.view.hide();
            this.model.options.onHide(this.model);
            return this.model;
        }

        /**
         * @description toggle datepicker visibility state
         * @example var pd = $('.selector').persianDatepicker();
         * pd.toggle();
         */

    }, {
        key: 'toggle',
        value: function toggle() {
            this.model.view.toggle();
            this.model.options.onToggle(this.model);
            return this.model;
        }

        /**
         * @description destroy every thing clean dom and
         * @example var pd = $('.selector').persianDatepicker();
         * pd.destroy();
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.model) {
                this.model.view.destroy();
                this.model.options.onDestroy(this.model);
                delete this.model;
            }
        }

        /**
         * @description set selected date of datepicker accept unix timestamp
         * @param unix
         * @example var pd = $('.selector').persianDatepicker();
         * pd.setDate(1382276091100)
         */

    }, {
        key: 'setDate',
        value: function setDate(unix) {
            this.model.state.setSelectedDateTime('unix', unix);
            this.model.state.setViewDateTime('unix', unix);
            this.model.state.setSelectedDateTime('unix', unix);
            this.model.view.render(this.view);
            this.model.options.onSet(unix);
            return this.model;
        }
    }, {
        key: 'options',
        get: function get() {
            return this.model.options;
        }

        /**
         * @description set options live
         * @example var pd = $('.selector').persianDatepicker();
         * pd.options;
         * //return current options
         * pd.options = {};
         * // set options and render datepicker with new options
         */
        ,
        set: function set(inputOptions) {
            var opt = $.extend(true, this.model.options, inputOptions);
            this.model.view.destroy();
            this.model.components(this.model.inputElement, opt);
        }
    }]);

    return API;
}();

module.exports = API;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Helper = __webpack_require__(0);

/**
 * @description persian-datepicker configuration document
 */
var Config = {

  /**
   * @description set default calendar mode of datepicker, available options: 'persian', 'gregorian'
   * @default 'persian'
   * @type string
   * @since 1.0.0
   */
  'calendarType': 'persian',

  /**
   * @description calendar type and localization configuration
   * @type object
   * @since 1.0.0
   * @example
   * {
   *     'persian': {
   *         'locale': 'fa',
   *         'showHint': false,
   *         'leapYearMode': 'algorithmic' // "astronomical"
   *     },
   *
   *     'gregorian': {
   *         'locale': 'en',
   *         'showHint': false
   *     }
   * }
   *
   *
   *
   */
  'calendar': {

    /**
     * @description Persian calendar configuration
     * @type object
     * @since 1.0.0
     */
    'persian': {

      /**
       * @description set locale of Persian calendar available options: 'fa', 'en'
       * @default 'fa'
       * @type string
       * @since 1.0.0
       */
      'locale': 'fa',

      /**
       * @description if set true, small date hint of this calendar will be shown on another calendar
       * @type boolean
       * @default false
       * @since 1.0.0
       */
      'showHint': false,

      /**
       * @description Persian calendar leap year calculation mode, available options: 'algorithmic', 'astronomical'
       * @type string
       * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/leapyear
       * @default 'algorithmic'
       * @since 1.0.0
       */
      'leapYearMode': 'algorithmic' // "astronomical"
    },

    /**
     * @description Gregorian calendar configuration
     * @type object
     * @since 1.0.0
     */
    'gregorian': {

      /**
       * @description set locale of Gregorian calendar available options: 'fa', 'en'
       * @default 'en'
       * @type string
       * @since 1.0.0
       */
      'locale': 'en',

      /**
       * @description if set true, small date hint of this calendar will be shown on another calendar
       * @type boolean
       * @default false
       * @since 1.0.0
       */
      'showHint': false
    }
  },

  /**
   * @description if set true make enable responsive view on mobile devices
   * @type boolean
   * @since 1.0.0
   * @default true
   */
  'responsive': true,

  /**
   * @description if true datepicker render inline
   * @type boolean
   * @default false
   */
  'inline': false,

  /**
   * @description If set true datepicker init with input value date, use data-date property when you want set inline datepicker initial value
   * @type boolean
   * @default true
   */
  'initialValue': true,

  /**
   * @description Initial value calendar type, accept: 'persian', 'gregorian'
   * @type boolean
   * @default true
   */
  'initialValueType': 'gregorian',

  /**
   * @description from v1.0.0 this options is deprecated, use calendar.persian.locale instead
   * @deprecated
   * @type boolean
   * @default true
   */
  'persianDigit': true,

  /**
   * @description default view mode, Acceptable value : day,month,year
   * @type {string}
   * @default 'day'
   */
  'viewMode': 'day',

  /**
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
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
    var self = this,
        pdate = this.model.PersianDate.date(unixDate);
    return pdate.format(self.format);
  },

  /**
   * @description An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class'
   * @type {boolean}
   * @default false
   * @example
   * altField: '#inputAltFirld'
   *
   * altField: '.input-alt-field'
   */
  'altField': false,

  /**
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
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
    var self = this,
        thisAltFormat = self.altFormat.toLowerCase(),
        pd = void 0;
    if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
      return new Date(unixDate);
    }
    if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
      return unixDate;
    } else {
      pd = this.model.PersianDate.date(unixDate);
      return pd.format(self.altFormat);
    }
  },

  /**
   * @description Set min date on datepicker, prevent user select date before given unix time
   * @property minDate
   * @type Date
   * @default null
   */
  'minDate': null,

  /**
   * @description Set max date on datepicker, prevent user select date after given unix time
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
     * @description make navigator enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description navigate by scroll configuration
     * @type object
     * @description scroll navigation options
     */
    'scroll': {

      /**
       * @description if you want make disable scroll navigation set this option false
       * @type boolean
       * @default true
       */
      'enabled': true
    },

    /**
     * @description navigator text config object
     */
    'text': {
      /**
       * @description text of next button
       * @default '<'
       */
      'btnNextText': '<',

      /**
       * @description text of prev button
       * @default: '>'
       */
      'btnPrevText': '>'
    },

    /**
     * @description Called when navigator goes to next state
     * @event
     * @example function (navigator) {
     *      //log('navigator next ');
     *  }
     */
    'onNext': function onNext(datepickerObject) {
      Helper.debug(datepickerObject, 'Event: onNext');
    },

    /**
     * @description Called when navigator goes to previews state
     * @event
     * @example function (navigator) {
     *      //log('navigator prev ');
     *  }
     */
    'onPrev': function onPrev(datepickerObject) {
      Helper.debug(datepickerObject, 'Event: onPrev');
    },

    /**
     * @description Called when navigator switch
     * @event
     * @example function (datepickerObject) {
            // console.log('navigator switch ');
     *  }
     */
    'onSwitch': function onSwitch(datepickerObject) {
      Helper.debug(datepickerObject, 'dayPicker Event: onSwitch');
    }
  },

  /**
   * @description toolbox config object
   * @type {object}
   * @default true
   */
  'toolbox': {

    /**
     * @description boolean option that make toolbar enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description toolbox button text configuration
     * @type object
     * @deprecated from 1.0.0
     */
    'text': {

      /**
       * @description text of today button, deprecated from 1.0.0
       * @type string
       * @default 'امروز'
       * @deprecated from 1.0.0
       */
      btnToday: 'امروز'

    },

    /**
     * @description submit button configuration (only shown on mobile)
     * @since 1.0.0
     */
    submitButton: {

      /**
       * @description make submit button enable or disable
       * @type boolean
       * @default false
       * @since 1.0.0
       */
      enabled: Helper.isMobile,

      /**
       * @description submit button text
       * @since 1.0.0
       * @type object
       */
      text: {

        /**
         * @description show when current calendar is Persian
         * @since 1.0.0
         * @type object
         * @default تایید
         */
        fa: 'تایید',

        /**
         * @description show when current calendar is Gregorian
         * @since 1.0.0
         * @type object
         * @default submit
         */
        en: 'submit'
      },

      /**
       * @description Called when submit button clicked
       * @since 1.0.0
       * @type function
       * @event
       */
      onSubmit: function onSubmit(datepickerObject) {
        Helper.debug(datepickerObject, 'dayPicker Event: onSubmit');
      }
    },

    /**
     * @description toolbox today button configuration
     * @since 1.0.0
     */
    todayButton: {

      /**
       * @description make toolbox today button enable or disable
       * @type boolean
       * @since 1.0.0
       */
      enabled: true,

      /**
       * @description today button text
       * @since 1.0.0
       * @type object
       */
      text: {

        /**
         * @description show when current calendar is Persian
         * @since 1.0.0
         * @type object
         * @default امروز
         */
        fa: 'امروز',

        /**
         * @description show when current calendar is Gregorian
         * @since 1.0.0
         * @type object
         * @default today
         */
        en: 'today'
      },

      /**
       * @description Called when today button clicked
       * @since 1.0.0
       * @type function
       * @event
       */
      onToday: function onToday(datepickerObject) {
        Helper.debug(datepickerObject, 'dayPicker Event: onToday');
      }
    },

    /**
     * @description toolbox calendar switch configuration
     * @type object
     * @since 1.0.0
     */
    calendarSwitch: {

      /**
       * @description make calendar switch enable or disable
       * @type boolean
       * @since 1.0.0
       * @default true
       */
      enabled: true,

      /**
       * @description calendar switch text format string
       * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
       * @type string
       * @since 1.0.0
       * @default MMMM
       */
      format: 'MMMM',

      /**
       * @description Called when calendar switch clicked
       * @since 1.0.0
       * @type function
       * @event
       */
      onSwitch: function onSwitch(datepickerObject) {
        Helper.debug(datepickerObject, 'dayPicker Event: onSwitch');
      }
    },

    /**
     * @event
     * @param toolbox
     * @example function (toolbox) {
     *      //log('toolbox today btn');
     *  }
     *  @deprecated 1.0.0
     */
    onToday: function onToday(datepickerObject) {
      Helper.debug(datepickerObject, 'dayPicker Event: onToday');
    }
  },

  /**
   * @description if true all pickers hide and just show timepicker
   * @default false
   * @type boolean
   */
  'onlyTimePicker': false,

  /**
   * @description  if true date select just by click on day in month grid, and when user select month or year selected date doesnt change
   * @property justSelectOnDate
   * @type boolean
   * @default: true
   */
  'onlySelectOnDate': true,

  /**
   * @description Validate date access before render
   * @type function
   */
  'checkDate': function checkDate() {
    return true;
  },

  /**
   * @description Validate month access before render
   * @type {function}
   */
  'checkMonth': function checkMonth() {
    return true;
  },

  /**
   * @description Validate year access before render
   * @type {function}
   */
  'checkYear': function checkYear() {
    return true;
  },

  /**
   * @description timePicker configuration
   * @type {object}
   */
  'timePicker': {

    /**
     * @description make timePicker enable or disable
     * @type boolean
     */
    'enabled': false,

    /**
     * @description The amount that increases or decreases by pressing the button
     * @type number
     */
    'step': 1,

    /**
     * @description hour selector configuration
     * @type object
     */
    'hour': {

      /**
       * @description make hour selector enable or disable
       * @type boolean
       */
      'enabled': true,

      /**
       * @description The amount that increases or decreases hour, by pressing the button. overwrite by timepicker.step
       * @type boolean
       */
      'step': null
    },

    /**
     * @description minute selector configuration
     * @type object
     */
    'minute': {

      /**
       * @description make minute selector enable or disable
       * @type boolean
       */
      'enabled': true,

      /**
       * @description The amount that increases or decreases minute, by pressing the button. overwrite by timepicker.step
       * @description overwrite by parent step
       * @type boolean
       */
      'step': null
    },

    /**
     * @description second selector configuration
     * @type object
     */
    'second': {

      /**
       * @description make second selector enable or disable
       * @type boolean
       */
      'enabled': true,

      /**
       * @description The amount that increases or decreases second, by pressing the button. overwrite by timepicker.step
       * @type boolean
       */
      'step': null
    },

    /**
     * @description meridian selector configuration
     * @type object
     */
    'meridian': {

      /**
       * @description if you set this as false, datepicker timepicker system moved to 24-hour system
       * @type boolean
       */
      'enabled': false
    }
  },

  /**
   * @description dayPicker configuration
   * @type {object}
   */
  'dayPicker': {

    /**
     * @description make daypicker enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description daypicker title format string
     * @type string
     * @default 'YYYY MMMM'
     * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
     */
    'titleFormat': 'YYYY MMMM',

    /**
     * @description daypicker title formatter function
     * @param year
     * @param month
     * @return {*}
     */
    'titleFormatter': function titleFormatter(year, month) {
      var titleDate = this.model.PersianDate.date([year, month]);
      return titleDate.format(this.model.options.dayPicker.titleFormat);
    },

    /**
     * @description fired when user select date
     * @event
     * @param selectedDayUnix
     */
    'onSelect': function onSelect(selectedDayUnix) {
      Helper.debug(this, 'dayPicker Event: onSelect : ' + selectedDayUnix);
    }

  },

  /**
   * @description monthPicker configuration
   * @type {object}
   */
  'monthPicker': {

    /**
     * @description make monthPicker enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description monthPicker title format string
     * @type string
     * @default 'YYYY'
     */
    'titleFormat': 'YYYY',

    /**
     * @description monthPicker title formatter function
     * @param unix
     * @return {*}
     */
    'titleFormatter': function titleFormatter(unix) {
      var titleDate = this.model.PersianDate.date(unix);
      return titleDate.format(this.model.options.monthPicker.titleFormat);
    },

    /**
     * @description fired when user select month
     * @event
     * @param monthIndex
     */
    'onSelect': function onSelect(monthIndex) {
      Helper.debug(this, 'monthPicker Event: onSelect : ' + monthIndex);
    }
  },

  /**
   * @description yearPicker configuration
   * @type {object}
   */
  'yearPicker': {

    /**
     * @description make yearPicker enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description yearPicker title format string
     * @type string
     * @default 'YYYY'
     */
    'titleFormat': 'YYYY',

    /**
     * @description yearPicker title formatter function
     * @param year
     * @return {string}
     */
    'titleFormatter': function titleFormatter(year) {
      var remaining = parseInt(year / 12, 10) * 12;
      var startYear = this.model.PersianDate.date([remaining]);
      var endYear = this.model.PersianDate.date([remaining + 11]);
      return startYear.format(this.model.options.yearPicker.titleFormat) + '-' + endYear.format(this.model.options.yearPicker.titleFormat);
    },

    /**
     * @description fired when user select year
     * @event
     * @param year
     */
    'onSelect': function onSelect(year) {
      Helper.debug(this, 'yearPicker Event: onSelect : ' + year);
    }
  },

  /**
   * @description Called when date Select by user.
   * @event
   * @param unixDate
   */
  'onSelect': function onSelect(unixDate) {
    Helper.debug(this, 'datepicker Event: onSelect : ' + unixDate);
  },

  /**
   * @description Called when date Select by api.
   * @event
   * @param unixDate
   */
  'onSet': function onSet(unixDate) {
    Helper.debug(this, 'datepicker Event: onSet : ' + unixDate);
  },

  /**
   * @description position of datepicker relative to input element
   * @type string | array
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
  'onShow': function onShow(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onShow ');
  },

  /**
   * @description A function that takes current datepicker instance. It is called just before the datepicker Hide.
   * @event
   */
  'onHide': function onHide(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onHide ');
  },

  /**
   * @description on toggle datepicker event
   * @event
   */
  'onToggle': function onToggle(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onToggle ');
  },

  /**
   * @description on destroy datepicker event
   * @event
   */
  'onDestroy': function onDestroy(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onDestroy ');
  },

  /**
   * @description If true datepicker close When select a date
   * @type {boolean}
   * @default false
   */
  'autoClose': false,

  /**
   * @description by default datepicker have a template string, and you can overwrite it simply by replace string in config.
   * @type string
   * @example
   * <div id="plotId" class="datepicker-plot-area datepicker-plot-area-inline-view">
   {{#navigator.enabled}}
   <div class="navigator">
   <div class="datepicker-header">
   <div class="btn btn-next">{{navigator.text.btnNextText}}</div>
   <div class="btn btn-switch">{{ navigator.switch.text }}</div>
   <div class="btn btn-prev">{{navigator.text.btnPrevText}}</div>
   </div>
   </div>
   {{/navigator.enabled}}
   <div class="datepicker-grid-view" >
   {{#days.enabled}}
   {{#days.viewMode}}
   <div class="datepicker-day-view" >
   <div class="month-grid-box">
   <div class="header">
   <div class="title"></div>
   <div class="header-row">
   <div class="header-row-cell">ش</div>
   <div class="header-row-cell">ی</div>
   <div class="header-row-cell">د</div>
   <div class="header-row-cell">س</div>
   <div class="header-row-cell">چ</div>
   <div class="header-row-cell">پ</div>
   <div class="header-row-cell">ج</div>
   </div>
   </div>
   <table cellspacing="0" class="table-days">
   <tbody>
   {{#days.list}}
    <tr>
   {{#.}}
    {{#enabled}}
   <td data-unix="{{dataUnix}}" ><span  class="{{#otherMonth}}other-month{{/otherMonth}} {{#selected}}selected{{/selected}}">{{title}}</span></td>
   {{/enabled}}
   {{^enabled}}
   <td data-unix="{{dataUnix}}" class="disabled"><span class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span></td>
   {{/enabled}}
    {{/.}}
   </tr>
   {{/days.list}}
   </tbody>
   </table>
   </div>
   </div>
   {{/days.viewMode}}
   {{/days.enabled}}
    {{#month.enabled}}
   {{#month.viewMode}}
   <div class="datepicker-month-view">
   {{#month.list}}
   {{#enabled}}
   <div data-month="{{dataMonth}}" class="month-item {{#selected}}selected{{/selected}}">{{title}}</small></div>
   {{/enabled}}
   {{^enabled}}
   <div data-month="{{dataMonth}}" class="month-item month-item-disable {{#selected}}selected{{/selected}}">{{title}}</small></div>
   {{/enabled}}
   {{/month.list}}
   </div>
   {{/month.viewMode}}
   {{/month.enabled}}
    {{#year.enabled }}
   {{#year.viewMode }}
   <div class="datepicker-year-view" >
   {{#year.list}}
   {{#enabled}}
   <div data-year="{{dataYear}}" class="year-item {{#selected}}selected{{/selected}}">{{title}}</div>
   {{/enabled}}
   {{^enabled}}
   <div data-year="{{dataYear}}" class="year-item year-item-disable {{#selected}}selected{{/selected}}">{{title}}</div>
   {{/enabled}}
   {{/year.list}}
   </div>
   {{/year.viewMode }}
   {{/year.enabled }}
    </div>
   {{#time}}
   {{#enabled}}
   <div class="datepicker-time-view">
   {{#hour.enabled}}
   <div class="hour time-segment" data-time-key="hour">
   <div class="up-btn" data-time-key="hour">▲</div>
   <input value="{{hour.title}}" type="text" placeholder="hour" class="hour-input">
   <div class="down-btn" data-time-key="hour">▼</div>
   </div>
   <div class="divider">:</div>
   {{/hour.enabled}}
   {{#minute.enabled}}
   <div class="minute time-segment" data-time-key="minute" >
   <div class="up-btn" data-time-key="minute">▲</div>
   <input value="{{minute.title}}" type="text" placeholder="minute" class="minute-input">
   <div class="down-btn" data-time-key="minute">▼</div>
   </div>
   <div class="divider second-divider">:</div>
   {{/minute.enabled}}
   {{#second.enabled}}
   <div class="second time-segment" data-time-key="second"  >
   <div class="up-btn" data-time-key="second" >▲</div>
   <input value="{{second.title}}"  type="text" placeholder="second" class="second-input">
   <div class="down-btn" data-time-key="second" >▼</div>
   </div>
   <div class="divider meridian-divider"></div>
   <div class="divider meridian-divider"></div>
   {{/second.enabled}}
   {{#meridian.enabled}}
   <div class="meridian time-segment" data-time-key="meridian" >
   <div class="up-btn" data-time-key="meridian">▲</div>
   <input value="{{meridian.title}}" type="text" class="meridian-input">
   <div class="down-btn" data-time-key="meridian">▼</div>
   </div>
   {{/meridian.enabled}}
   </div>
   {{/enabled}}
   {{/time}}
    {{#toolbox}}
   {{#enabled}}
   <div class="toolbox ">
   <div class="btn-today">{{text.btnToday}}</div>
   </div>
   {{/enabled}}
   {{/toolbox}}
   </div>
   */
  'template': null,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Under Implement ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * @description if true datepicker update self by user inputted date string, accept 'yyyy/mm/dd'
   * @example '1396/10/2', ''
   * @type {boolean}
   * @default false
   */
  'observer': false,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Un  implemented ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /**
   * @description waite time for last user key-down event, accept millisecond
   * @type {number}
   * @default 800
   */
  'inputDelay': 800
};

module.exports = Config;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Model = __webpack_require__(2);

/**
 * @author babakhani.reza@gmail.com
 * @description jquery plugin initializer
 */
(function ($) {
    /*eslint-disable no-unused-vars */
    $.fn.persianDatepicker = $.fn.pDatepicker = function (options) {
        var args = Array.prototype.slice.call(arguments),
            output = null,
            self = this;
        if (!this) {
            $.error('Invalid selector');
        }
        $(this).each(function () {
            // encapsulation Args
            var emptyArr = [],
                tempArg = args.concat(emptyArr),
                dp = $(this).data('datepicker'),
                funcName = null;
            if (dp && typeof tempArg[0] === 'string') {
                funcName = tempArg[0];
                output = dp[funcName](tempArg[0]);
            } else {
                self.pDatePicker = new Model(this, options);
            }
        });
        $(this).data('datepicker', self.pDatePicker);
        return self.pDatePicker;
    };
    /*eslint-enable no-unused-vars */
})(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = __webpack_require__(0);
var PersianDateParser = __webpack_require__(9);
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
         * @type {boolean}
         * @private
         */
        this._firstUpdate = true;

        /**
         * @type {Element}
         */
        this.elem = inputElement;

        if (this.model.options.observer) {
            this.observe();
        }

        this.addInitialClass();

        /**
         * @type {Number}
         */
        this.initialUnix = null;

        if (this.model.options.inline == false) {
            this._attachInputElementEvents();
        }

        return this;
    }

    _createClass(Input, [{
        key: 'addInitialClass',
        value: function addInitialClass() {
            $(this.elem).addClass('pwt-datepicker-input-element');
        }
    }, {
        key: 'parseInput',
        value: function parseInput(inputString) {
            var parse = new PersianDateParser(),
                that = this;
            if (parse.parse(inputString) !== undefined) {
                var pd = this.model.PersianDate.date(parse.parse(inputString)).valueOf();
                that.model.state.setSelectedDateTime('unix', pd);
                that.model.state.setViewDateTime('unix', pd);
                that.model.view.render();
            }
        }
    }, {
        key: 'observe',
        value: function observe() {
            var that = this;
            /////////////////   Manipulate by Copy And paste
            $(that.elem).bind('paste', function (e) {
                Helper.delay(function () {
                    that.parseInput(e.target.value);
                }, 60);
            });
            var typingTimer = void 0,
                doneTypingInterval = that.model.options.inputDelay,
                ctrlDown = false,
                ctrlKey = [17, 91],
                vKey = 86;

            $(document).keydown(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0) ctrlDown = true;
            }).keyup(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0) ctrlDown = false;
            });

            $(that.elem).bind('keyup', function (e) {
                var $self = $(this);
                var trueKey = false;
                if (e.keyCode === 8 || e.keyCode < 105 && e.keyCode > 96 || e.keyCode < 58 && e.keyCode > 47 || ctrlDown && (e.keyCode == vKey || $.inArray(e.keyCode, ctrlKey) > 0)) {
                    trueKey = true;
                }
                if (trueKey) {
                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(function () {
                        doneTyping($self);
                    }, doneTypingInterval);
                }
            });

            $(that.elem).on('keydown', function () {
                clearTimeout(typingTimer);
            });
            function doneTyping($self) {
                that.parseInput($self.val());
            }

            /////////////////   Manipulate by alt changes
            // TODO
            // self.model.options.altField.bind("change", function () {
            //     //if (!self._flagSelfManipulate) {
            //         let newDate = new Date($(this).val());
            //         if (newDate !== "Invalid Date") {
            //             let newPersainDate = this.model.PersianDate.date(newDate);
            //             self.selectDate(newPersainDate.valueOf());
            //         }
            //   //  }
            // });
        }

        /**
         * @private
         * @desc attach events to input field
         */

    }, {
        key: '_attachInputElementEvents',
        value: function _attachInputElementEvents() {
            var that = this;
            var closePickerHandler = function closePickerHandler(e) {
                if (!$(e.target).is(that.elem) && !$(e.target).is(that.model.view.$container) && $(e.target).closest('#' + that.model.view.$container.attr('id')).length == 0 && !$(e.target).is($(that.elem).children())) {
                    that.model.api.hide();
                    $('body').unbind('click', closePickerHandler);
                }
            };

            $(this.elem).on('focus click', Helper.debounce(function (evt) {
                that.model.api.show();
                if (that.model.state.ui.isInline === false) {
                    $('body').unbind('click', closePickerHandler).bind('click', closePickerHandler);
                }
                if (Helper.isMobile) {
                    $(this).blur();
                }
                evt.stopPropagation();
                return false;
            }, 200));
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
            if ($(this.elem).val() != value) {
                $(this.elem).val(value);
            }
        }

        /**
         * @param unix
         */

    }, {
        key: 'update',
        value: function update(unix) {
            if (this.model.options.initialValue == false && this._firstUpdate) {
                this._firstUpdate = false;
            } else {
                this._updateInputField(unix);
                this._updateAltField(unix);
            }
        }

        /**
         * @desc return initial value
         * @return {Number} - unix
         */

    }, {
        key: 'getOnInitState',
        value: function getOnInitState() {
            var persianDatePickerTimeRegex = '^([0-1][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$';
            var garegurianDate = null,
                $inputElem = $(this.elem),
                inputValue = void 0;

            // Define input value by check inline mode and input mode

            if ($inputElem[0].nodeName === 'INPUT') {
                inputValue = $inputElem[0].getAttribute('value');
            } else {
                inputValue = $inputElem.data('date');
            }

            // Check time string by regex
            if (inputValue && inputValue.match(persianDatePickerTimeRegex)) {
                var timeArray = inputValue.split(':'),
                    tempDate = new Date();
                tempDate.setHours(timeArray[0]);
                tempDate.setMinutes(timeArray[1]);
                if (timeArray[2]) {
                    tempDate.setSeconds(timeArray[2]);
                } else {
                    tempDate.setSeconds(0);
                }
                this.initialUnix = tempDate.valueOf();
            } else {
                if (this.model.options.initialValueType === 'persian' && inputValue) {
                    var parse = new PersianDateParser();
                    var pd = new persianDate(parse.parse(inputValue)).valueOf();
                    garegurianDate = new Date(pd).valueOf();
                } else if (inputValue) {
                    garegurianDate = new Date(inputValue).valueOf();
                }

                if (garegurianDate && garegurianDate != 'undefined') {
                    this.initialUnix = garegurianDate;
                } else {
                    this.initialUnix = new Date().valueOf();
                }
            }
            return this.initialUnix;
        }
    }]);

    return Input;
}();

module.exports = Input;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamster = __webpack_require__(14);

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
            // Check options
            if (this.model.options.navigator.scroll.enabled) {
                var that = this;
                var gridPlot = $('#' + that.model.view.id + ' .datepicker-grid-view')[0];
                Hamster(gridPlot).wheel(function (event, delta) {
                    if (delta > 0) {
                        that.model.state.navigate('next');
                    } else {
                        that.model.state.navigate('prev');
                    }
                    that.model.view.render();
                    event.preventDefault();
                });

                if (this.model.options.timePicker.enabled) {
                    $('#' + that.model.view.id + ' .time-segment').each(function () {
                        Hamster(this).wheel(function (event, delta) {
                            var $target = $(event.target);
                            var key = $target.data('time-key') ? $target.data('time-key') : $target.parents('[data-time-key]').data('time-key');
                            if (key) {
                                if (delta > 0) {
                                    that.timeUp(key);
                                } else {
                                    that.timeDown(key);
                                }
                            }
                            that.model.view.render();
                            event.preventDefault();
                        });
                    });
                }
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
            if (this.model.options.timePicker[timekey] == undefined) {
                return;
            }
            var step = void 0,
                t = void 0,
                that = this;
            if (timekey == 'meridian') {
                step = 12;
                if (this.model.state.view.meridian == 'PM') {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
                } else {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
                }
                this.model.state.meridianToggle();
            } else {
                step = this.model.options.timePicker[timekey].step;
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).add(timekey, step).valueOf();
            }
            this.model.state.setViewDateTime('unix', t);
            this.model.state.setSelectedDateTime('unix', t);
            this.model.view.renderTimePartial();
            clearTimeout(this.scrollDelayTimeDown);
            this.scrollDelayTimeUp = setTimeout(function () {
                that.model.view.markSelectedDay();
            }, 300);
        }

        /**
         * @desc set time down depend to timekey
         * @param {String} timekey - accept hour, minute,second
         * @public
         */

    }, {
        key: 'timeDown',
        value: function timeDown(timekey) {
            if (this.model.options.timePicker[timekey] == undefined) {
                return;
            }
            var step = void 0,
                t = void 0,
                that = this;
            if (timekey == 'meridian') {
                step = 12;
                if (this.model.state.view.meridian == 'AM') {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
                } else {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
                }
                this.model.state.meridianToggle();
            } else {
                step = this.model.options.timePicker[timekey].step;
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract(timekey, step).valueOf();
            }
            this.model.state.setViewDateTime('unix', t);
            this.model.state.setSelectedDateTime('unix', t);
            this.model.view.renderTimePartial();
            clearTimeout(this.scrollDelayTimeDown);
            this.scrollDelayTimeDown = setTimeout(function () {
                that.model.view.markSelectedDay();
            }, 300);
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
                $(document).on('click', '#' + that.model.view.id + ' .pwt-btn', function () {
                    if ($(this).is('.pwt-btn-next')) {
                        that.model.state.navigate('next');
                        that.model.view.render();
                        that.model.options.navigator.onNext(that.model);
                    } else if ($(this).is('.pwt-btn-switch')) {
                        that.model.state.switchViewMode();
                        that.model.view.render();
                        that.model.options.navigator.onSwitch(that.model);
                    } else if ($(this).is('.pwt-btn-prev')) {
                        that.model.state.navigate('prev');
                        that.model.view.render();
                        that.model.options.navigator.onPrev(that.model);
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
                    that.model.options.onSelect(that.model.state.selected.unix);
                });

                /**
                 * @description time down btn click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .down-btn', function () {
                    var timekey = $(this).data('time-key');
                    that.timeDown(timekey);
                    that.model.options.onSelect(that.model.state.selected.unix);
                });
            }

            /**
             * @description check if dayPicker enabled attach Events
             */
            if (this.model.options.dayPicker.enabled) {

                /**
                 * @description days click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-day-view td:not(.disabled)', function () {
                    var thisUnix = $(this).data('unix'),
                        mustRender = void 0;
                    that.model.state.setSelectedDateTime('unix', thisUnix);
                    if (that.model.state.selected.month !== that.model.state.view.month) {
                        mustRender = true;
                    } else {
                        mustRender = false;
                    }
                    that.model.state.setViewDateTime('unix', that.model.state.selected.unixDate);
                    if (that.model.options.autoClose) {
                        that.model.view.hide();
                        that.model.options.onHide(that);
                    }
                    if (mustRender) {
                        that.model.view.render();
                    } else {
                        that.model.view.markSelectedDay();
                    }
                    that.model.options.dayPicker.onSelect(thisUnix);
                    that.model.options.onSelect(thisUnix);
                });
            }

            /**
             * @description check if monthPicker enabled attach Events
             */
            if (this.model.options.monthPicker.enabled) {

                /**
                 * @description month click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-month-view .month-item:not(.month-item-disable)', function () {
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
                    that.model.view.render();
                    that.model.options.monthPicker.onSelect(month);
                    that.model.options.onSelect(that.model.state.selected.unix);
                });
            }

            /**
             * @description check if yearPicker enabled attach Events
             */
            if (this.model.options.yearPicker.enabled) {

                /**
                 * @description year click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-year-view .year-item:not(.year-item-disable)', function () {
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
                    that.model.view.render();
                    that.model.options.yearPicker.onSelect(year);
                    that.model.options.onSelect(that.model.state.selected.unix);
                });
            }
        }
    }]);

    return Navigator;
}();

module.exports = Navigator;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = __webpack_require__(4);
var Template = __webpack_require__(1);
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
    function Options(options, model) {
        _classCallCheck(this, Options);

        this.model = model;
        return this._compatibility($.extend(true, this, Config, options));
    }

    /**
     * @private
     * @param options
     */


    _createClass(Options, [{
        key: '_compatibility',
        value: function _compatibility(options) {

            if (options.inline) {
                options.toolbox.submitButton.enabled = false;
            }

            if (!options.template) {
                options.template = Template;
            }
            persianDate.toCalendar(options.calendarType);
            persianDate.toLocale(options.calendar[options.calendarType].locale);
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

module.exports = Options;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersianDateParser = function () {
    function PersianDateParser() {
        _classCallCheck(this, PersianDateParser);

        this.pattern = {
            jalali: /^[1-4]\d{3}(\/|-|\.)((0?[1-6](\/|-|\.)((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))(\/|-|\.)(30|([1-2][0-9])|(0?[1-9]))))$/g
        };
    }

    _createClass(PersianDateParser, [{
        key: 'parse',
        value: function parse(inputString) {
            var that = this,
                persianDateArray = void 0,
                jalaliPat = new RegExp(that.pattern.jalali);

            String.prototype.toEnglishDigits = function () {
                var charCodeZero = '۰'.charCodeAt(0);
                return this.replace(/[۰-۹]/g, function (w) {
                    return w.charCodeAt(0) - charCodeZero;
                });
            };

            inputString = inputString.toEnglishDigits();

            if (jalaliPat.test(inputString)) {
                /* eslint-disable no-useless-escape */
                persianDateArray = inputString.split(/\/|-|\,|\./).map(Number);
                /* eslint-enable no-useless-escape */
                return persianDateArray;
            } else {
                return undefined;
            }
        }
    }]);

    return PersianDateParser;
}();

module.exports = PersianDateParser;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersianDateWrapper = function () {
    function PersianDateWrapper(model) {
        _classCallCheck(this, PersianDateWrapper);

        this.model = model;
        this.model.options.calendar_ = this.model.options.calendarType;
        this.model.options.locale_ = this.model.options.calendar[this.model.options.calendarType].locale;
        return this;
    }

    _createClass(PersianDateWrapper, [{
        key: "date",
        value: function date(input) {
            if (window.inspdCount || window.inspdCount === 0) {
                window.inspdCount++;
            } else {
                window.inspdCount = 0;
            }
            var that = this;
            var output = void 0,
                cp = void 0;
            cp = persianDate.toCalendar(that.model.options.calendar_);
            if (this.model.options.calendar[this.model.options.calendarType].leapYearMode) {
                cp.toLeapYearMode(this.model.options.calendar[this.model.options.calendarType].leapYearMode);
            }
            output = new cp(input);
            return output.toLocale(that.model.options.locale_);
        }
    }]);

    return PersianDateWrapper;
}();

module.exports = PersianDateWrapper;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
            hour12: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null
        };

        this.ui = {
            isOpen: false,
            isInline: this.model.options.inline
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
                minDate = -2000000000000000;
            }
            if (!maxDate) {
                maxDate = 2000000000000000;
            }
            var pd = self.model.PersianDate.date(minDate);
            self.filterDate.start.unixDate = minDate;
            self.filterDate.start.hour = pd.hour();
            self.filterDate.start.minute = pd.minute();
            self.filterDate.start.second = pd.second();
            self.filterDate.start.month = pd.month();
            self.filterDate.start.date = pd.date();
            self.filterDate.start.year = pd.year();

            var pdEnd = self.model.PersianDate.date(maxDate);
            self.filterDate.end.unixDate = maxDate;
            self.filterDate.end.hour = pdEnd.hour();
            self.filterDate.end.minute = pdEnd.minute();
            self.filterDate.end.second = pdEnd.second();
            self.filterDate.end.month = pdEnd.month();
            self.filterDate.end.date = pdEnd.date();
            self.filterDate.end.year = pdEnd.year();
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
                    var newYear = this.view.year + 1;
                    if (newYear === 0) {
                        newYear = 1;
                    }
                    this.setViewDateTime('year', newYear);
                }
                if (this.viewMode == 'day') {
                    var _newYear = this.view.year + 1;
                    if (_newYear === 0) {
                        _newYear = 1;
                    }
                    if (this.view.month + 1 == 13) {
                        this.setViewDateTime('year', _newYear);
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
                    var _newYear2 = this.view.year - 1;
                    if (_newYear2 === 0) {
                        _newYear2 = -1;
                    }
                    this.setViewDateTime('year', _newYear2);
                }
                if (this.viewMode == 'day') {
                    if (this.view.month - 1 <= 0) {
                        var _newYear3 = this.view.year - 1;
                        if (_newYear3 === 0) {
                            _newYear3 = -1;
                        }
                        this.setViewDateTime('year', _newYear3);
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
                    var pd = this.model.PersianDate.date(value);
                    that.selected.year = pd.year();
                    that.selected.month = pd.month();
                    that.selected.date = pd.date();
                    that.selected.hour = pd.hour();
                    that.selected.hour12 = pd.format('hh');
                    that.selected.minute = pd.minute();
                    that.selected.second = pd.second();
                    break;
                case 'year':
                    this.selected.year = value;
                    break;
                case 'month':
                    this.selected.month = value;
                    break;
                case 'date':
                    this.selected.date = value;
                    break;
                case 'hour':
                    this.selected.hour = value;
                    break;
                case 'minute':
                    this.selected.minute = value;
                    break;
                case 'second':
                    this.selected.second = value;
                    break;
            }
            that._updateSelectedUnix();
            return this;
        }

        /**
         * @return {State}
         * @private
         */

    }, {
        key: '_updateSelectedUnix',
        value: function _updateSelectedUnix() {
            this.selected.dateObject = this.model.PersianDate.date([this.selected.year, this.selected.month, this.selected.date, this.view.hour, this.view.minute, this.view.second]);
            this.selected.unixDate = this.selected.dateObject.valueOf();
            this.model.updateInput(this.selected.unixDate);
            return this;
        }

        /**
         *
         * @return {State}
         * @private
         */

    }, {
        key: '_setViewDateTimeUnix',
        value: function _setViewDateTimeUnix() {
            this.view.dateObject = this.model.PersianDate.date([this.view.year, this.view.month, this.view.date, this.view.hour, this.view.minute, this.view.second]);
            this.view.year = this.view.dateObject.year();
            this.view.month = this.view.dateObject.month();
            this.view.date = this.view.dateObject.date();
            this.view.hour = this.view.dateObject.hour();
            this.view.hour12 = this.view.dateObject.format('hh');
            this.view.minute = this.view.dateObject.minute();
            this.view.second = this.view.dateObject.second();
            this.view.unixDate = this.view.dateObject.valueOf();
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
                    var pd = this.model.PersianDate.date(value);
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

        /**
         * desc change meridian state
         */

    }, {
        key: 'meridianToggle',
        value: function meridianToggle() {
            var self = this;
            if (self.view.meridian === 'AM') {
                self.view.meridian = 'PM';
            } else if (self.view.meridian === 'PM') {
                self.view.meridian = 'AM';
            }
        }
    }]);

    return State;
}();

module.exports = State;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

    _createClass(Toolbox, [{
        key: '_toggleCalendartype',
        value: function _toggleCalendartype() {
            var that = this;
            if (that.model.options.calendar_ == 'persian') {
                that.model.options.calendar_ = 'gregorian';
                that.model.options.locale_ = this.model.options.calendar.gregorian.locale;
            } else {
                that.model.options.calendar_ = 'persian';
                that.model.options.locale_ = this.model.options.calendar.persian.locale;
            }
        }

        /**
         * attach all events about toolbox
         */

    }, {
        key: '_attachEvents',
        value: function _attachEvents() {
            var that = this;
            $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-today', function () {
                that.model.state.setSelectedDateTime('unix', new Date().valueOf());
                that.model.state.setViewDateTime('unix', new Date().valueOf());
                that.model.view.reRender();
                /**
                 * @deprecated
                 * @todo remove this
                 */
                that.model.options.toolbox.onToday(that.model);
                that.model.options.toolbox.todayButton.onToday(that.model);
            });

            $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-calendar', function () {
                that._toggleCalendartype();
                that.model.state.setSelectedDateTime('unix', that.model.state.selected.unixDate);
                that.model.state.setViewDateTime('unix', that.model.state.view.unixDate);
                that.model.view.render();
                that.model.options.toolbox.calendarSwitch.onSwitch(that.model);
            });

            $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-submit', function () {
                that.model.view.hide();
                that.model.options.toolbox.submitButton.onSubmit(that.model);
                that.model.options.onHide(this);
            });
        }
    }]);

    return Toolbox;
}();

module.exports = Toolbox;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = __webpack_require__(1);
var Helper = __webpack_require__(0);
var Mustache = __webpack_require__(15);

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

        if (this.model.state.ui.isInline) {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container-inline"></div>').appendTo(that.model.inputElement);
        } else {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
            this.hide();
            this.setPickerBoxPosition();
            this.addCompatibilityClass();
        }
        return this;
    }

    /**
     * @desc add css class to handle compatibility ui things
     */


    _createClass(View, [{
        key: 'addCompatibilityClass',
        value: function addCompatibilityClass() {
            if (Helper.isMobile && this.model.options.responsive) {
                this.$container.addClass('pwt-mobile-view');
            }
        }

        /**
         * @desc remove datepicker container element from dom
         */

    }, {
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
            var inputPosition = this.model.input.getInputPosition(),
                inputSize = this.model.input.getInputSize();

            if (Helper.isMobile && this.model.options.responsive) {
                return false;
            }

            if (this.model.options.position === 'auto') {
                this.$container.css({
                    right: ($(window).width() - inputPosition.left-inputSize.width+200) + 'px',
                    top: inputSize.height + inputPosition.top + 'px'
                });
            } else {
                this.$container.css({
                    right: ($(window).width()-this.model.options.position[1]-inputPosition.left+200) + 'px',
                    top: this.model.options.position[0] + inputPosition.top + 'px'
                });
            }
        }

        /**
         * @desc show datepicker container element
         */

    }, {
        key: 'show',
        value: function show() {
            this.$container.removeClass('pwt-hide');
            this.setPickerBoxPosition();
        }

        /**
         * @desc hide datepicker container element
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.$container.addClass('pwt-hide');
        }

        /**
         * @desc toggle datepicker container element
         */

    }, {
        key: 'toggle',
        value: function toggle() {
            this.$container.toggleClass('pwt-hide');
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
                var startYear = this.model.state.filterDate.start.year,
                    endYear = this.model.state.filterDate.end.year;
                if (startYear && year < startYear) {
                    return false;
                } else if (endYear && year > endYear) {
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

            var isEnabled = this.model.options.yearPicker.enabled;
            // Make performance better
            if (!isEnabled) {
                return {
                    enabled: false
                };
            }
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
            var yearsModel = [],
                yearStr = this.model.PersianDate.date();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    yearStr.year([i]);
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
                enabled: isEnabled,
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
            month = month + 1;
            var output = true,
                y = this.model.state.view.year;
            if (this.model.state.filetredDate) {
                var startMonth = this.model.state.filterDate.start.month,
                    endMonth = this.model.state.filterDate.end.month,
                    startYear = this.model.state.filterDate.start.year,
                    endYear = this.model.state.filterDate.end.year;
                if (startMonth && endMonth && (y == endYear && month > endMonth || y > endYear) || y == startYear && month < startMonth || y < startYear) {
                    return false;
                } else if (endMonth && (y == endYear && month > endMonth || y > endYear)) {
                    return false;
                } else if (startMonth && (y == startYear && month < startMonth || y < startYear)) {
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
            var isEnaled = this.model.options.monthPicker.enabled;
            // Make performance better
            if (!isEnaled) {
                return {
                    enabled: false
                };
            }

            var monthModel = [],
                that = this;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = that.model.PersianDate.date().rangeName().months.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        index = _step2$value[0],
                        month = _step2$value[1];

                    monthModel.push({
                        title: month,
                        enabled: this.checkMonthAccess(index),
                        year: this.model.state.view.year,
                        dataMonth: index + 1,
                        selected: this.model.state.selected.year == this.model.state.view.year && this.model.state.selected.month == index + 1
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
                enabled: isEnaled,
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
                    self.minDate = self.model.PersianDate.date(self.minDate).startOf('day').valueOf();
                    self.maxDate = self.model.PersianDate.date(self.maxDate).endOf('day').valueOf();
                    if (!(unixtimespan >= self.minDate && unixtimespan <= self.maxDate)) {
                        return false;
                    }
                } else if (self.minDate) {
                    self.minDate = self.model.PersianDate.date(self.minDate).startOf('day').valueOf();
                    if (unixtimespan <= self.minDate) {
                        return false;
                    }
                } else if (self.maxDate) {
                    self.maxDate = self.model.PersianDate.date(self.maxDate).endOf('day').valueOf();
                    if (unixtimespan >= self.maxDate) {
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

            var isEnabled = this.model.options.dayPicker.enabled;
            // Make performance better
            if (!isEnabled) {
                return {
                    enabled: false
                };
            }

            //log('if you see this many time your code has performance issue');
            var viewMonth = this.model.state.view.month,
                viewYear = this.model.state.view.year;
            var pdateInstance = this.model.PersianDate.date(),
                daysCount = pdateInstance.daysInMonth(viewYear, viewMonth),
                firstWeekDayOfMonth = pdateInstance.getFirstWeekDayOfMonth(viewYear, viewMonth) - 1,
                outputList = [],
                daysListindex = 0,
                nextMonthListIndex = 0,
                daysMatrix = [['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null']];

            var anotherCalendar = this._getAnotherCalendar();
            var pdate = this.model.PersianDate.date();
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
                            var _step4$value = _slicedToArray(_step4.value, 1),
                                dayIndex = _step4$value[0];

                            var calcedDate = void 0,
                                otherMonth = void 0;
                            if (rowIndex === 0 && dayIndex < firstWeekDayOfMonth) {
                                calcedDate = pdate.unix(this.model.state.view.dateObject.startOf('month').valueOf() / 1000).subtract('days', firstWeekDayOfMonth - dayIndex);
                                otherMonth = true;
                            } else if (rowIndex === 0 && dayIndex >= firstWeekDayOfMonth || rowIndex <= 5 && daysListindex < daysCount) {
                                daysListindex += 1;
                                calcedDate = pdate.year(this.model.state.view.year).month(this.model.state.view.month).date(daysListindex);
                                otherMonth = false;
                            } else {
                                nextMonthListIndex += 1;
                                calcedDate = pdate.unix(this.model.state.view.dateObject.endOf('month').valueOf() / 1000).add('days', nextMonthListIndex);
                                otherMonth = true;
                            }
                            outputList[rowIndex].push({
                                title: calcedDate.format('D'),
                                alterCalTitle: new persianDate(calcedDate.valueOf()).toCalendar(anotherCalendar[0]).toLocale(anotherCalendar[1]).format('D'),
                                dataDate: [calcedDate.year(), calcedDate.month(), calcedDate.date()].join(','),
                                dataUnix: calcedDate.valueOf(),
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
                enabled: isEnabled,
                viewMode: this.model.state.viewMode == 'day',
                list: outputList
            };
        }
    }, {
        key: 'markSelectedDay',
        value: function markSelectedDay() {
            var selected = this.model.state.selected;
            this.$container.find('.table-days td').each(function () {
                if ($(this).data('date') == [selected.year, selected.month, selected.date].join(',')) {
                    $(this).addClass('selected');
                } else {
                    $(this).removeClass('selected');
                }
            });
        }
    }, {
        key: 'markToday',
        value: function markToday() {
            var today = new persianDate();
            this.$container.find('.table-days td').each(function () {
                if ($(this).data('date') == [today.year(), today.month(), today.date()].join(',')) {
                    $(this).addClass('today');
                } else {
                    $(this).removeClass('today');
                }
            });
        }

        /**
         * @private
         * @return {{enabled: boolean, hour: {title, enabled: boolean}, minute: {title, enabled: boolean}, second: {title, enabled: boolean}, meridian: {title: (meridian|{title, enabled}|ClassDatepicker.ClassConfig.timePicker.meridian|{enabled}|string|string), enabled: boolean}}}
         */

    }, {
        key: '_getTimeViewModel',
        value: function _getTimeViewModel() {

            var isEnabled = this.model.options.timePicker.enabled;
            // Make performance better
            if (!isEnabled) {
                return {
                    enabled: false
                };
            }

            var hourTitle = void 0;
            if (this.model.options.timePicker.meridian.enabled) {
                hourTitle = this.model.state.view.dateObject.format('hh');
            } else {
                hourTitle = this.model.state.view.dateObject.format('HH');
            }

            return {
                enabled: isEnabled,
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
                meridian: {
                    title: this.model.state.view.dateObject.format('a'),
                    enabled: this.model.options.timePicker.meridian.enabled
                }
            };
        }

        /**
         *
         * @return {{enabled: boolean, list: (*|Array)}}
         * @private
         */

    }, {
        key: '_getWeekViewModel',
        value: function _getWeekViewModel() {
            return {
                enabled: true,
                list: this.model.PersianDate.date().rangeName().weekdaysMin
            };
        }

        /**
         *
         * @return {string}
         */

    }, {
        key: 'getCssClass',
        value: function getCssClass() {
            return [this.model.state.ui.isInline ? 'datepicker-plot-area-inline-view' : '', !this.model.options.timePicker.meridian.enabled ? 'datepicker-state-no-meridian' : '', this.model.options.onlyTimePicker ? 'datepicker-state-only-time' : '', !this.model.options.timePicker.second.enabled ? 'datepicker-state-no-second' : '', this.model.options.calendar_ == 'gregorian' ? 'datepicker-gregorian' : 'datepicker-persian'].join(' ');
        }

        /**
         * @param data
         * @return {*}
         */

    }, {
        key: 'getViewModel',
        value: function getViewModel(data) {
            var anotherCalendar = this._getAnotherCalendar();
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
                weekdays: this._getWeekViewModel(data),
                month: this._getMonthViewModel(data),
                year: this._getYearViewModel(data),
                toolbox: this.model.options.toolbox,
                cssClass: this.getCssClass(),
                onlyTimePicker: this.model.options.onlyTimePicker,
                altCalendarShowHint: this.model.options.calendar[anotherCalendar[0]].showHint,
                calendarSwitchText: this.model.state.view.dateObject.toCalendar(anotherCalendar[0]).toLocale(anotherCalendar[1]).format(this.model.options.toolbox.calendarSwitch.format),
                todayButtonText: this._getButtonText().todayButtontext,
                submitButtonText: this._getButtonText().submitButtonText
            };
        }
    }, {
        key: '_getButtonText',
        value: function _getButtonText() {
            var output = {};
            if (this.model.options.locale_ == 'fa') {
                output.todayButtontext = this.model.options.toolbox.todayButton.text.fa;
                output.submitButtonText = this.model.options.toolbox.submitButton.text.fa;
            } else if (this.model.options.locale_ == 'en') {
                output.todayButtontext = this.model.options.toolbox.todayButton.text.en;
                output.submitButtonText = this.model.options.toolbox.submitButton.text.en;
            }
            return output;
        }
    }, {
        key: '_getAnotherCalendar',
        value: function _getAnotherCalendar() {
            var that = this,
                cal = void 0,
                loc = void 0;
            if (that.model.options.calendar_ == 'persian') {
                cal = 'gregorian';
                loc = that.model.options.calendar.gregorian.locale;
            } else {
                cal = 'persian';
                loc = that.model.options.calendar.persian.locale;
            }
            return [cal, loc];
        }

        /**
         * @desc render times area, prevent performance issue with scroll and time section
         */

    }, {
        key: 'renderTimePartial',
        value: function renderTimePartial() {
            var timeViewModel = this._getTimeViewModel(this.model.state.view);
            this.$container.find('[data-time-key="hour"] input').val(timeViewModel.hour.title);
            this.$container.find('[data-time-key="minute"] input').val(timeViewModel.minute.title);
            this.$container.find('[data-time-key="second"] input').val(timeViewModel.second.title);
            this.$container.find('[data-time-key="meridian"] input').val(timeViewModel.meridian.title);
        }

        /**
         * @render datepicker view element
         * @param data
         */

    }, {
        key: 'render',
        value: function render(data) {
            if (!data) {
                data = this.model.state.view;
            }
            Helper.debug(this, 'render');
            Mustache.parse(Template);
            this.rendered = $(Mustache.render(this.model.options.template, this.getViewModel(data)));
            this.$container.empty().append(this.rendered);
            this.markSelectedDay();
            this.markToday();
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

module.exports = View;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Hamster.js v1.1.2
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

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
} else if (true) {
  // CommonJS
  module.exports = Hamster;
} else {
  // Browser global
  window.Hamster = Hamster;
}

})(window, window.document);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
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


/***/ })
/******/ ]);
});
