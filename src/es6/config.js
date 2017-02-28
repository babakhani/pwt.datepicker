/**
 * This is default config class
 */
const Config = {

    /**
     * @type Boolean
     */
    'initialValue': true,


    /**
     * @type Boolean
     */
    'persianDigit': true,


    /**
     * @description Acceptable value : day,month,year
     * @type {string}
     * @default day
     */
    'viewMode': 'day',


    /**
     * @description the date format, combination of d, dd, m, mm, yy, yyy.
     * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
     * @type {boolean}
     * @default false
     */
    'format': 'LLLL',


    /**
     * @desc format value of input
     * @param unixDate
     * @returns {*}
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
     * @default unix
     */
    'altFormat': 'unix',


    /**
     * @desc format value of 'altField' input
     * @param unixDate
     * @returns {*}
     */
    'altFieldFormatter': function (unixDate) {
        var self = this;
        var thisAltFormat = self.altFormat.toLowerCase();
        if (thisAltFormat === "gregorian" || thisAltFormat === "g") {
            return new Date(unixDate);
        }
        if (thisAltFormat === "unix" || thisAltFormat === "u") {
            return unixDate;
        }
        else {
            var pd = new persianDate(unixDate);
            pd.formatPersian = this.persianDigit;
            return pd.format(self.altFormat);
        }
    },


    /**
     * @desc set min date on datepicker
     * @property minDate
     * @type {boolean}
     */
    'minDate': null,


    /**
     * @desc set max date on datepicker
     * @property maxDate
     * @type {boolean}
     */
    'maxDate': null,


    /**
     * @desc navigator config object
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
        'onNext': function (navigator) {
            //log("navigator next ");
        },


        /**
         * @desc Trigger When Prev button clicked
         * @event
         * @param navigator
         */
        'onPrev': function (navigator) {
            //log("navigator prev ");
        },


        /**
         * @desc Trigger When Switch view button clicked
         * @event
         * @param navigator
         */
        'onSwitch': function (state) {
            // console.log("navigator switch ");
        }
    },


    /**
     * @desc toolbox config object
     * @type {object}
     * @default true
     */
    'toolbox': {
        'enabled': true,
        'text': {
            btnToday: "امروز"
        },
        onToday: function (toolbox) {
            //log("toolbox today btn");
        }
    },


    /**
     * @desc if true all pickers hide and just shpw timepicker
     * @default false
     * @type {boolean}
     */
    'onlyTimePicker': false,


    /**
     * @desc if true date select just by click on day in month grid
     * @property justSelectOnDate
     * @type {boolean}
     */
    'onlySelectOnDate': true,


    /**
     * @desc check date avalibility
     * @type {function}
     */
    'checkDate': function (unix) {
        return true;
    },


    /**
     * @desc check month avalibility
     * @type {function}
     */
    'checkMonth': function (month) {
        return true;
    },


    /**
     * @desc check year avalibility
     * @type {function}
     */
    'checkYear': function (year) {
        return true;
    },


    /**
     * @desc timepicker config object
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
     * @desc dayPicker config object
     * @type {object}
     */
    'dayPicker': {
        'enabled': true,
        'titleFormat': 'YYYY MMMM',
        'titleFormatter': function (year, month) {
            var titleDate = new persianDate([year, month]);
            titleDate.formatPersian = this.model.options.persianDigit;
            return titleDate.format(this.model.options.dayPicker.titleFormat);
        },
        'onSelect': function (selectedDayUnix) {
            debug('dayPicker Event: onSelect : ' + selectedDayUnix);
        }

    },


    /**
     * @desc monthPicker config object
     * @type {object}
     */
    'monthPicker': {
        'enabled': true,
        'titleFormat': 'YYYY',
        'titleFormatter': function (unix) {
            var titleDate = new persianDate(unix);
            titleDate.formatPersian = this.model.options.persianDigit;
            return titleDate.format(this.model.options.monthPicker.titleFormat);
        },
        'onSelect': function (monthIndex) {
            debug('monthPicker Event: onSelect : ' + monthIndex);
        }
    },


    /**
     * @desc yearPicker config object
     * @type {object}
     */
    'yearPicker': {
        'enabled': true,
        'titleFormat': 'YYYY',
        'titleFormatter': function (year) {
            let remaining = parseInt(year / 12, 10) * 12;
            let startYear = new pDate([remaining]);
            let endYear = new pDate([remaining + 11]);
            startYear.formatPersian = this.model.options.persianDigit;
            endYear.formatPersian = this.model.options.persianDigit;
            return startYear.format(this.model.options.yearPicker.titleFormat) + "-" + endYear.format(this.model.options.yearPicker.titleFormat);
        },
        'onSelect': function (year) {
            debug('yearPicker Event: onSelect : ' + year);
        }
    },


    /**
     * @desc A function that takes current datepicker unixDate. It is called When Day Select.
     * @event
     * @param unixDate
     */
    'onSelect': function (unixDate) {
        debug(this, 'datepicker Event: onSelect : ' + unixDate);
    },

    /**
     *
     */
    'position': 'auto',


    /**
     * @desc A function that takes current datepicker instance. It is called just before the datepicker is displayed.
     * @event
     */
    'onShow': function () {
        debug(this, 'dayPicker Event: onShow ');
    },


    /**
     * @desc A function that takes current datepicker instance. It is called just before the datepicker Hide.
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


    /**
     * @desc observer
     * @type {boolean}
     * @default false
     * @deprecated
     */
    'observer': false,

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// Under Implement ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// Un  implemented ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    /**
     * @desc inputDelay
     * @type {number}
     * @default 800
     */
    'inputDelay': 800,
};
