/**
 * This is default config class
 */
const Config = {

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
    'formatter': function (unixDate) {
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
    'altFieldFormatter': function (unixDate) {
        var self = this;
        var thisAltFormat = self.altFormat.toLowerCase();
        if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
            return new Date(unixDate);
        }
        if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
            return unixDate;
        }
        else {
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
        'onNext': function (navigator) {
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
        'onPrev': function (navigator) {
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
        'onSwitch': function (state) {
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
        onToday: function (toolbox) {
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
    'checkDate': function (unix) {
        return true;
    },


    /**
     * @description check month avalibility
     * @type {function}
     */
    'checkMonth': function (month) {
        return true;
    },


    /**
     * @description check year avalibility
     * @type {function}
     */
    'checkYear': function (year) {
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
        'titleFormatter': function (year, month) {
            var titleDate = new persianDate([year, month]);
            titleDate.formatPersian = this.model.options.persianDigit;
            return titleDate.format(this.model.options.dayPicker.titleFormat);
        },

        /**
         * @event
         * @param selectedDayUnix
         */
        'onSelect': function (selectedDayUnix) {
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
        'titleFormatter': function (unix) {
            var titleDate = new persianDate(unix);
            titleDate.formatPersian = this.model.options.persianDigit;
            return titleDate.format(this.model.options.monthPicker.titleFormat);
        },

        /**
         * @event
         * @param monthIndex
         */
        'onSelect': function (monthIndex) {
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
        'titleFormatter': function (year) {
            let remaining = parseInt(year / 12, 10) * 12;
            let startYear = new pDate([remaining]);
            let endYear = new pDate([remaining + 11]);
            startYear.formatPersian = this.model.options.persianDigit;
            endYear.formatPersian = this.model.options.persianDigit;
            return startYear.format(this.model.options.yearPicker.titleFormat) + '-' + endYear.format(this.model.options.yearPicker.titleFormat);
        },

        /**
         * @event
         * @param year
         */
        'onSelect': function (year) {
            debug('yearPicker Event: onSelect : ' + year);
        }
    },


    /**
     * @description A function that takes current datepicker unixDate. It is called When Day Select.
     * @event
     * @param unixDate
     */
    'onSelect': function (unixDate) {
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
    'onShow': function () {
        debug(this, 'dayPicker Event: onShow ');
    },


    /**
     * @description A function that takes current datepicker instance. It is called just before the datepicker Hide.
     * @event
     * @param self
     */
    'onHide': function () {
        debug(this, 'dayPicker Event: onHide ');
    },

    /**
     *
     */
    'onToggle': function () {
        debug(this, 'dayPicker Event: onToggle ');
    },

    /**
     *
     */
    'onDestroy': function () {
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
    'inputDelay': 800,
};
