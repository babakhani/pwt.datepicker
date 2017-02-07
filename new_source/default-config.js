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
    'formatter': function (unixDate) {
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
        onToday: function (toolbox) {
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
    'checkDate': function (unix) {
        return true;
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc check month avalibility
     * @property month index
     * @type {function}
     */
    'checkMonth': function (month) {
        return true;
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc check year avalibility
     * @property year
     * @type {function}
     */
    'checkYear': function (year) {
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
        'titleFormatter': function (year, month) {
            var titleDate = new persianDate([year, month]);
            titleDate.formatPersian = this.datepicker.options.persianDigit;
            return titleDate.format(this.datepicker.options.dayPicker.titleFormat);
        },
        'onSelect': function (selectedDayUnix) {
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
        'titleFormatter': function (unix) {
            var titleDate = new persianDate(unix);
            titleDate.formatPersian = this.datepicker.options.persianDigit;
            return titleDate.format(this.datepicker.options.monthPicker.titleFormat);
        },
        'onSelect': function (monthIndex) {
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
        'titleFormatter': function (year) {
            let remaining = parseInt(year / 12, 10) * 12;
            let startYear = new pDate([remaining]);
            let endYear = new pDate([remaining + 11]);
            startYear.formatPersian = this.datepicker.options.persianDigit;
            endYear.formatPersian = this.datepicker.options.persianDigit;
            return startYear.format(this.datepicker.options.yearPicker.titleFormat) + "-" + endYear.format(this.datepicker.options.yearPicker.titleFormat);
        },
        'onSelect': function (year) {
            debug('yearPicker Event: onSelect : ' + year);
        }
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc A function that takes current datepicker unixDate. It is called When Day Select.
     * @event
     * @param unixDate
     */
    'onSelect': function (unixDate) {
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
    'onShow': function () {
        debug(this, 'dayPicker Event: onShow ');
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc A function that takes current datepicker instance. It is called just before the datepicker Hide.
     * @event
     * @param self
     */
    'onHide': function () {
        debug(this, 'dayPicker Event: onHide ');
    },

    'onToggle': function () {
        debug(this, 'dayPicker Event: onToggle ');
    },

    'onDestroy': function () {
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
    'inputDelay': 800,

};
