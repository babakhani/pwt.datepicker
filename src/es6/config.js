let Helper = require('./helper');

/**
 * @description persian-datepicker configuration document
 */
const Config = {


    /**
     * @description set default calendar mode of datepicker, available options: 'persian', 'gregorian'
     * @default 'persian'
     * @type string
     * @since 0.6.0
     */
    'calendarType': 'persian',


    /**
     * @description calendar type and localization configuration
     * @type object
     * @since 0.6.0
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
         * @since 0.6.0
         */
        'persian': {

            /**
             * @description set locale of Persian calendar available options: 'fa', 'en'
             * @default 'fa'
             * @type string
             * @since 0.6.0
             */
            'locale': 'fa',

            /**
             * @description if set true, small date hint of this calendar will be shown on another calendar
             * @type boolean
             * @default false
             * @since 0.6.0
             */
            'showHint': false,

            /**
             * @description Persian calendar leap year calculation mode, available options: 'algorithmic', 'astronomical'
             * @type string
             * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/leapyear
             * @default 'algorithmic'
             * @since 0.6.0
             */
            'leapYearMode': 'algorithmic' // "astronomical"
        },


        /**
         * @description Gregorian calendar configuration
         * @type object
         * @since 0.6.0
         */
        'gregorian': {

            /**
             * @description set locale of Gregorian calendar available options: 'fa', 'en'
             * @default 'en'
             * @type string
             * @since 0.6.0
             */
            'locale': 'en',

            /**
             * @description if set true, small date hint of this calendar will be shown on another calendar
             * @type boolean
             * @default false
             * @since 0.6.0
             */
            'showHint': false
        }
    },


    /**
     * @description if set true make enable responsive view on mobile devices
     * @type boolean
     * @since 0.6.0
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
     * @description If set true datepicker init with input value date
     * @type boolean
     * @default true
     */
    'initialValueType': 'gregorian',


    /**
     * @deprecated from v0.6.0 this options is deprecated, use calendar.persian.locale instead
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
    'formatter': function (unixDate) {
        let self = this,
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
    'altFieldFormatter': function (unixDate) {
        let self = this,
            thisAltFormat = self.altFormat.toLowerCase(),
            pd;
        if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
            return new Date(unixDate);
        }
        if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
            return unixDate;
        }
        else {
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
        'onNext': function () {
            //log('navigator next ');
        },


        /**
         * @description Called when navigator goes to previews state
         * @event
         * @example function (navigator) {
         *      //log('navigator prev ');
         *  }
         */
        'onPrev': function () {
            //log('navigator prev ');
        },


        /**
         * @description Called when navigator switch
         * @event
         * @example function (state) {
                // console.log('navigator switch ');
         *  }
         */
        'onSwitch': function () {
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
         * @description boolean option that make toolbar enable or disable
         * @type boolean
         * @default true
         */
        'enabled': true,

        /**
         * @description toolbox button text coniguration
         * @type object
         */
        'text': {

            /**
             * @description text of today button, deprecated from 0.6.0
             * @type string
             * @default 'امروز'
             * @deprecated from 0.6.0
             */
            btnToday: 'امروز',

        },


        /**
         * @description submit button configuration (only shown on mobile)
         * @since 0.6.0
         */
        submitButton: {

            /**
             * @description make submit button enable or disable
             * @type boolean
             * @default false
             * @since 0.6.0
             */
            enabled: false,


            /**
             * @description submit button text
             * @since 0.6.0
             * @type object
             */
            text: {

                /**
                 * @description show when current calendar is Persian
                 * @since 0.6.0
                 * @type object
                 * @default تایید
                 */
                fa: 'تایید',


                /**
                 * @description show when current calendar is Gregorian
                 * @since 0.6.0
                 * @type object
                 * @default submit
                 */
                en: 'submit'
            }
        },


        /**
         * @description toolbox today button configuration
         * @since 0.6.0
         */
        todayButton: {

            /**
             * @description make toolbox today button enable or disable
             * @type boolean
             * @since 0.6.0
             */
            enabled: true,


            /**
             * @description today button text
             * @since 0.6.0
             * @type object
             */
            text: {

                /**
                 * @description show when current calendar is Persian
                 * @since 0.6.0
                 * @type object
                 * @default امروز
                 */
                fa: 'امروز',

                /**
                 * @description show when current calendar is Gregorian
                 * @since 0.6.0
                 * @type object
                 * @default today
                 */
                en: 'today'
            }
        },


        /**
         * @description toolbox calendar switch configuration
         * @type object
         * @since 0.6.0
         */
        calendarSwitch: {

            /**
             * @description make calendar switch enable or disable
             * @type boolean
             * @since 0.6.0
             * @default true
             */
            enabled: true,


            /**
             * @description calendar switch text format string
             * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
             * @type string
             * @since 0.6.0
             * @default MMMM
             */
            format: 'MMMM'

        },

        /**
         * @event
         * @param toolbox
         * @example function (toolbox) {
         *      //log('toolbox today btn');
         *  }
         */
        onToday: function () {
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
    'checkDate': function () {
        return true;
    },


    /**
     * @description Validate month access before render
     * @type {function}
     */
    'checkMonth': function () {
        return true;
    },


    /**
     * @description Validate year access before render
     * @type {function}
     */
    'checkYear': function () {
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
        'titleFormatter': function (year, month) {
            let titleDate = this.model.PersianDate.date([year, month]);
            return titleDate.format(this.model.options.dayPicker.titleFormat);
        },

        /**
         * @description fired when user select date
         * @event
         * @param selectedDayUnix
         */
        'onSelect': function (selectedDayUnix) {
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
        'titleFormatter': function (unix) {
            let titleDate = this.model.PersianDate.date(unix);
            return titleDate.format(this.model.options.monthPicker.titleFormat);
        },

        /**
         * @description fired when user select month
         * @event
         * @param monthIndex
         */
        'onSelect': function (monthIndex) {
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
        'titleFormatter': function (year) {
            let remaining = parseInt(year / 12, 10) * 12;
            let startYear = this.model.PersianDate.date([remaining]);
            let endYear = this.model.PersianDate.date([remaining + 11]);
            return startYear.format(this.model.options.yearPicker.titleFormat) + '-' + endYear.format(this.model.options.yearPicker.titleFormat);
        },

        /**
         * @description fired when user select year
         * @event
         * @param year
         */
        'onSelect': function (year) {
            Helper.debug(this, 'yearPicker Event: onSelect : ' + year);
        }
    },


    /**
     * @description A function that takes current datepicker unixDate. called When date Select.
     * @event
     * @param unixDate
     */
    'onSelect': function (unixDate) {
        Helper.debug(this, 'datepicker Event: onSelect : ' + unixDate);
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
    'onShow': function () {
        Helper.debug(this, 'dayPicker Event: onShow ');
    },


    /**
     * @description A function that takes current datepicker instance. It is called just before the datepicker Hide.
     * @event
     */
    'onHide': function () {
        Helper.debug(this, 'dayPicker Event: onHide ');
    },


    /**
     * @description on toggle datepicker event
     * @event
     */
    'onToggle': function () {
        Helper.debug(this, 'dayPicker Event: onToggle ');
    },


    /**
     * @description on destroy datepicker event
     * @event
     */
    'onDestroy': function () {
        Helper.debug(this, 'dayPicker Event: onDestroy ');
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
