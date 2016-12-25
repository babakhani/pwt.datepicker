/*
  persian-datepicker - v0.4.5 
  Author: reza babakhani 
 http://babakhani.github.io/PersianWebToolkit/datepicker 
 */
( function () {(function ($) {
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
                output = dp[funcName](tempArg[0]);
            } else {
                this.pDatePicker = new Datepicker(this, options);
            }
        });
        return output;
    };
})(jQuery);
var ClassConfig = {


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description disable days.
     * @type {number|Array}
     * @default []
     */
    disableDays: [],


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description if false datepicker initiate with empty value in input.
     * @type {boolean}
     * @default true
     */
    initialValue: true,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description if true all digit convert to persian digit.
     * @type {boolean}
     * @default true
     */
    persianDigit: true,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description Acceptable value : day,month,year
     * @property viewMode
     * @type {string}
     * @default day
     */
    viewMode: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description [x,y] , define a position of datepicker relative to input element.
     * @property position
     * @type {string|Array}
     * @default auto
     */
    position: "auto",


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description If true picker close When Select day
     * @property autoClose
     * @type {boolean}
     * @default false
     */
    autoClose: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description the date format, combination of d, dd, m, mm, yy, yyy.
     * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
     * @desc format
     * @type {boolean}
     * @default false
     */
    format: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc observer
     * @type {boolean}
     * @default false
     */
    observer: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc inputDelay
     * @type {number}
     * @default 800
     */
    inputDelay: 800,

    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc format value of input
     * @param unixDate
     * @returns {*}
     */
    formatter: function (unixDate) {
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
    altField: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @description the date format, combination of d, dd, m, mm, yy, yyy.
     * {@link http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/}
     * @desc altField
     * @type {string}
     * @default unix
     */
    altFormat: 'unix',


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc format value of 'altField' input
     * @param unixDate
     * @returns {*}
     */
    altFieldFormatter: function (unixDate) {
        var self = this;
        var thisAltFormat = self.altFormat.toLowerCase();
        if (thisAltFormat === "gregorian" | thisAltFormat === "g") {
            return new Date(unixDate);
        }
        if (thisAltFormat === "unix" | thisAltFormat === "u") {
            return unixDate;
        }
        else {
            return new persianDate(unixDate).format(self.altFormat);
        }
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc Open the date picker.
     * @method
     * @returns {ClassConfig}
     */
    show: function () {
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
    hide: function () {
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
    destroy: function () {
        this.inputElem.removeClass(self.cssClass);
        this.element.main.remove();
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc A function that takes current datepicker instance. It is called just before the datepicker is displayed.
     * @event
     * @param self
     */
    onShow: function (self) {
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc A function that takes current datepicker instance. It is called just before the datepicker Hide.
     * @event
     * @param self
     */
    onHide: function (self) {
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc A function that takes current datepicker unixDate. It is called When Day Select.
     * @event
     * @param unixDate
     */
    onSelect: function (unixDate) {
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
    navigator: {
        /**
         * @desc Enable or Disable dayPicker
         */
        enabled: true,


        /**
         * @desc navigator text config object
         */
        text: {
            /**
             * @desc text of next btn
             */
            btnNextText: "<",


            /**
             * @desc text of prev btn
             */
            btnPrevText: ">"
        },


        /**
         * @desc Trigger When Next button clicked
         * @event
         * @param navigator
         */
        onNext: function (navigator) {
            //log("navigator next ");
        },


        /**
         * @desc Trigger When Prev button clicked
         * @event
         * @param navigator
         */
        onPrev: function (navigator) {
            //log("navigator prev ");
        },


        /**
         * @desc Trigger When Switch view button clicked
         * @event
         * @param navigator
         */
        onSwitch: function (state) {
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
    toolbox: {
        enabled: true,
        text: {
            btnToday: "امروز"
        },
        onToday: function (toolbox) {
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
    timePicker: {
        enabled: false,
        showSeconds: true,
        showMeridian: true,

        secondStep: 1,
        minuteStep: 1,
        hourStep: 1,

        scrollEnabled: true,
        /**
         * @deprecated 0.3.5
         */
        changeOnScroll: true
    },

    /**
     * @see ClassDayPicker
     * @memberOf ClassDatepicker.ClassConfig
     * @desc dayPicker config object
     * @property dayPicker
     * @type {object}
     */
    dayPicker: {
        enabled: true,
        scrollEnabled: true,
        titleFormat: 'YYYY MMMM',
        titleFormatter: function (year, month) {
            if (this.datepicker.persianDigit == false) {
                window.formatPersian = false;
            }
            var titleStr = new persianDate([year, month]).format(this.titleFormat);
            window.formatPersian = true;
            return titleStr
        },
        onSelect: function (selectedDayUnix) {
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
    monthPicker: {
        enabled: true,
        scrollEnabled: true,
        titleFormat: 'YYYY',
        titleFormatter: function (unix) {
            if (this.datepicker.persianDigit == false) {
                window.formatPersian = false;
            }
            var titleStr = new persianDate(unix).format(this.titleFormat);
            window.formatPersian = true;
            return titleStr;

        },
        onSelect: function (monthIndex) {
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
    yearPicker: {
        enabled: true,
        scrollEnabled: true,
        titleFormat: 'YYYY',
        titleFormatter: function (year) {
            var remaining = parseInt(year / 12) * 12;
            return remaining + "-" + (remaining + 11);
        },
        onSelect: function (monthIndex) {
            //log("daypicker select Year :" + monthIndex);
        }
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc if true all pickers hide and just shpw timepicker
     * @property justSelectOnDate
     * @type {boolean}
     */
    onlyTimePicker: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc if true date select just by click on day in month grid
     * @property justSelectOnDate
     * @type {boolean}
     */
    justSelectOnDate: true,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc set min date on datepicker
     * @property minDate
     * @type {boolean}
     */
    minDate: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc set max date on datepicker
     * @property maxDate
     * @type {boolean}
     */
    maxDate: false,


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc check date avalibility
     * @property unix
     * @type {function}
     */
    checkDate: function (unix) {
        return true;
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc check month avalibility
     * @property month index
     * @type {function}
     */
    checkMonth: function (month) {
        return true;
    },


    /**
     * @memberOf ClassDatepicker.ClassConfig
     * @desc check year avalibility
     * @property year
     * @type {function}
     */
    checkYear: function (year) {
        return true;
    }


}
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

var TEMPLATE = {
    /**
     * @desc datepicker
     */
    datepciker: "<div class='{{css.datePickerPlotArea}}' >" + //
        "<div class='{{css.navigator}}' ></div>" +//
        " <div class='{{css.dayView}}' ></div>" + //
        "<div class='{{css.monthView}}' ></div>" + //
        "<div class='{{css.yearView}}' ></div>" + //
        "<div class='{{css.timeView}}' ></div>" + //
        "<div class='{{css.toolbox}}' ></div>" + //
        "</div>",


    /**
     * @desc navigator
     */
    navigator: "<div class='{{css.datpickerHeader}}' >" + //
        "<div class='{{css.btnNext}}' >{{btnNextText}}</div>" + //
        "<div class='{{css.btnSwitch}}' >{{btnSwitchText}}</div>" + //
        "<div class='{{css.btnPrev}}' >{{btnPrevText}}</div>" + //
        "</div>",


    /**
     * @desc timepicker
     */
    timepicker: "<div class='hour time-segment' data-time-key='hour' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='hour' class='hour-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>" + //
        "<div class='divider' >:</div>" + //
        "<div class='minute time-segment' data-time-key='minute' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='minute' class='minute-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>" + //
        "<div class='divider second-divider' >:</div>" + //
        "<div class='second time-segment' data-time-key='second' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='second' class='second-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>" + //
        "<div class='divider meridian-divider' ></div>" + //
        "<div class='divider meridian-divider' ></div>" + //
        "<div class='meridian time-segment' data-time-key='meridian' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='meridian&' class='meridian-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>",

    /**
     * @desc Month Grid
     */
    monthGrid: "<div class='{{css.main}}' >" + //
        "<div class='{{css.header}}' >" + //
        "<div class='{{css.headerTitle}}' ></div>" + //
        "<div class='{{css.headerRow}}' ></div>" + //
        "</div>" + //
        "<table cellspacing='0' class='{{css.daysTable}}'  ><tbody><tr><td /><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr></tbody></table>" + //
        "</div>"
}
'use strict';
/**
 * @class ClassBase
 * @abstract
 * @type {{init: init, publishInDic: publishInDic, callOfDict: callOfDict, isSameDay: isSameDay, isValidGreguranDate: isValidGreguranDate, validatePersianDateString: validatePersianDateString, fullHeight: fullHeight, attachEvent: attachEvent, dettachEvent: dettachEvent, clearEvent: clearEvent, raiseEvent: raiseEvent, events: {init: null}}}
 */
var ClassBase = {
    /**
     * @desc initilize {@link ClassBase}
     * @private
     */
    init: function () {
        this.isInstance = true;
        this.raiseEvent('init');
    },


    /**
     *
     * @param {Array} objectList
     * @param {string} methodName
     * @returns {*}
     */
    publishInDic: function (objectList, methodName) {
        $.each(objectList, function (key, item) {
            item[methodName]();
        });
        return objectList;
    },


    /**
     *
     * @param {Array} objectList
     * @param {string} key
     * @param {string} methodName
     */
    callOfDict: function (objectList, key, methodName) {
    },


    /**
     *
     * @param {Numer} unix1
     * @param {Numer} unix2
     * @returns {pDate|boolean}
     */
    isSameDay: function (unix1, unix2) {
        var d1 = new pDate(unix1);
        var d2 = new pDate(unix2);
        return d1 && d2 &&
            d1.year() === d2.year() &&
            d1.month() === d2.month() &&
            d1.date() === d2.date();
    },


    /**
     * @param {string} inputDate
     * @returns {*|boolean}
     */
    isValidGreguranDate: function (inputDate) {
        return inputDate &&
                new Date(inputDate) != "Invalid Date" &&
                new Date(inputDate) != "undefined";
    },


    /**
     *
     * @param {string} pasted
     * @returns {*}
     */
    validatePersianDateString: function (pasted) {
        var newDate = new Date(pasted);
        var inputArray = pasted.split("/");
        if (inputArray.length === 3) {
            var trueYear = inputArray[0].toString().length <= 4 && inputArray[0].toString().length >= 1;
            var trueMonth = inputArray[1].toString().length <= 2 && inputArray[1].toString().length >= 1;
            var trueDay = inputArray[2].toString().length <= 2 && inputArray[2].toString().length >= 1;
        }
        $.each(inputArray, function (index, key) {
            inputArray[index] = parseInt(key);
        });
        if (trueYear && trueMonth && trueDay && newDate !== "Invalid Date") {
            return inputArray;
        } else {
            return null;
        }
    },


    /**
     *
     * @param {object} element
     * @returns {*}
     */
    fullHeight: function (element) {
        return $(element).height() + parseInt($(element).css("padding-top")) + parseInt($(element).css("padding-bottom")) + parseInt($(element).css("borderTopWidth")) + parseInt($(element).css("borderBottomWidth"));
    },


    /**
     *
     * @param {string} eventName
     * @param {Function} func
     * @returns {Class_Base}
     */
    attachEvent: function (eventName, func) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        var f;
        for (f in this.events[eventName]) {
            if (this.events[eventName][f].toString() == func.toString()) {
                $.error("The function {0} was already added to event's chain.".format(func.toString));
            }
        }
        this.events[eventName].push(func)
        return this;
    },


    /**
     *
     * @param {string} eventName
     * @param {Function} func
     * @returns {Class_Base}
     */
    dettachEvent: function (eventName, func) {
        if (!this.events[eventName]) {
            $.error("The event's chain is empty.");
        }
        var f;
        for (f in this.events[eventName]) {
            if (this.events[eventName][f].toString() == func.toString()) {
                delete this.events[eventName][f];
            }
        }
        return this;
    },


    /**
     * @param {string} eventName
     * @returns {Class_Base}
     */
    clearEvent: function (eventName) {
        this.events[eventName] = null;
        return this;
    },


    /**
     * @param eventName
     * @param args
     * @returns {Class_Base}
     */
    raiseEvent: function (eventName, args) {
        if (!eventName || !this.events) {
            return;
        }
        if (args) {
        } else {
            args = [];
        }
        var currentObject = this.events[eventName];
        if (!currentObject) {
            return;
        } else if (typeof currentObject === 'function') {
            currentObject.apply(this, args);
        } else {
            var e;
            for (e in currentObject) {
                currentObject[e].apply(this, args);
            }
        }
        return this;
    }
};


/**
 * @class ClassSprite
 * @abstract
 * @type {{defaultView: string, events: {init: init, render: null}, views: {default: {render: render}}, element: {main: null}, createElementByClass: createElementByClass, render: render, tmpl: {}}}
 */
var ClassSprite = {
    /**
     * @desc defaultView
     */
    defaultView: "default",


    /**
     * @desc events
     */
    events: {
        init: function () {
            this.render();
        },
        render: null
    },


    /**
     * @desc views
     */
    views: {
        'default': {
            render: function () {
            }
        }
    },


    /**
     * @desc element
     */
    element: {
        main: null// Root Element Of Sprite
    },


    /**
     * @desc createElementByClass
     * @param {string} className string of class
     * @returns {*}
     */
    createElementByClass: function (className) {
        return this.element.find('.' + className);
    },


    /**
     * @desc render
     * @param {string} viewName
     * @returns {*}
     */
    render: function (viewName) {
        if (!viewName) {
            viewName = 'default';
        }
        this.raiseEvent('render');
        this.view = this.views[viewName];
        return this.view.render(this);
    }
};


var ClassCompat = {
    /**
     * @memberOf ClassDatepicker.ClassCompat
     * @returns {ClassDatepicker}
     */
    compatConfig: function () {
        if (this.viewMode === false) {
            if (this.yearPicker.enabled) {
                this.viewMode = 'year';
            }
            if (this.monthPicker.enabled) {
                this.viewMode = 'month';
            }
            if (this.dayPicker.enabled) {
                this.viewMode = 'day';
            } else {
                this.justSelectOnDate = false;
            }
        }
        if (this.minDate | this.maxDate) {
            this.state.setFilterDate('unix', this.minDate, this.maxDate);
            this.state._filetredDate = true;
        } else {
            this.state._filetredDate = false;
        }
        return this;
    }
};
'use strict';
/**
 * Extend javascript Object
 * @type {Function}
 */
Object.keys = Object.keys || (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty, hasDontEnumBug = !{
        toString: null
    }.propertyIsEnumerable("toString"), DontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'], DontEnumsLength = DontEnums.length;

    return function (o) {
        if (typeof o !== "object" && typeof o !== "function" || o === null)
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


/**
 * Extend javascript Event
 * @type {{setup: setup, teardown: teardown, handler: handler, delayedHandler: delayedHandler, triggerIfChanged: triggerIfChanged, saveLastValue: saveLastValue}}
 */
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


/**
 * Micro Mustcahe Template
 * @param input
 * @param dict
 * @returns {*|jQuery|HTMLElement}
 */
$.tmplMustache = function (input, dict) {
    // Micro Mustache Template engine
    String.prototype.format = function string_format(arrayInput) {
        function replacer(key) {
            var keyArr = key.slice(2, -2).split("."), firstKey = keyArr[0], SecondKey = keyArr[1];
            if (arrayInput[firstKey] instanceof Object) {
                return arrayInput[firstKey][SecondKey];
            } else {
                return arrayInput[firstKey];
            }
        }

        return this.replace(/{{\s*[\w\.]+\s*}}/g, replacer);
    };
    return $(input.format(dict));
};


/**
 * Extend String Proto with toPersianDigit & toEnglishDigit
 * @param a
 * @returns {string}
 */
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


/**
 *
 * @param a
 * @returns {string}
 */
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


/**
 * Helper Methuds
 * @param callback
 * @param ms
 */
var delay = function (callback, ms) {
    clearTimeout(window.datepickerTimer);
    window.datepickerTimer = setTimeout(callback, ms);
};


/**
 *
 * @param input
 */
var log = function (input) {
    console.log(input);
};


/**
 *
 * @param e
 * @returns {Array}
 */
var range = function (e) {
    var r = [];
    var i = 0;
    while (i <= e - 1) {
        r.push(i);
        i++;
    }
    return r;
};


/**
 *
 * @param self
 * @param baseClasses
 * @returns {*}
 */
var inherit = function (self, baseClasses) {
    var copyObject = function (o) {
        return $.extend(true, {}, o);
    }
    var args = [true, self, copyObject(ClassBase)];
    var events = [];
    for (var index in baseClasses) {
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
    for (var index in events) {
        var eventsObject = events[index];
        var eventKeys = Object.keys(eventsObject)
        for (var keyIndex in eventKeys) {
            var key = eventKeys[keyIndex]
            var val = eventsObject[key];
            if (key && val) {
                self.attachEvent(key, val);
            }
        }
    }
    self.init();
    return self;
}


/**
 *
 * @param ua
 * @returns {{browser: (*|string), version: (*|string)}}
 */
jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();

    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
        /(webkit)[ \/]([\w.]+)/.exec(ua) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
        [];

    return {
        browser: match[ 1 ] || "",
        version: match[ 2 ] || "0"
    };
};


// cDon't clobber any existing jQuery.browser in case it's different
if (!jQuery.browser) {
    var matched = jQuery.uaMatch(window.navigator.userAgent);
    var browser = {};

    if (matched.browser) {
        browser[ matched.browser ] = true;
        browser.version = matched.version;
    }

    // Chrome is Webkit, but Webkit is also Safari.
    if (browser.chrome) {
        browser.webkit = true;
    } else if (browser.webkit) {
        browser.safari = true;
    }

    jQuery.browser = browser;
}
var ClassMonthGrid = {
    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc state
     * @prop year
     * @prop month
     * @prop date
     * @prop firstWeekDayOfMonth
     * @prop daysCount
     */
    state: {
        year: null,
        month: null,
        date: null,
        firstWeekDayOfMonth: null,
        daysCount: null
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc perisnaDigit
     */
    persianDigit: true,


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc _formatDigit
     * @param digit
     * @returns {*}
     * @private
     */
    _formatDigit: function (digit) {
        if (this.persianDigit) {
            return digit.toString().toPersianDigit();
        }
        else {
            return digit;
        }
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc evenets
     * @prop init
     * @prop render
     * @prop reRender
     * @prop selectDay
     */
    events: {
        init: function () {
        },
        render: function () {
            this.state.month = this.month;
            this.state.year = this.year;
        },
        reRender: function () {
            this._markToday();
        },
        selectDay: function (x) {
        }
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc _markToday
     * @returns {Class_MonthGrid}
     * @private
     */
    _markToday: function () {
        var self = this;
        var todate = new persianDate();
        $(self.element).removeClass(self.cssClass.today);
        $.each(self.daysList, function (index, value) {
            var htmlItemDay = $(this).data().day;
            var htmlItemMonth = $(this).data().month;
            var htmlItemYear = $(this).data().year;
            if (htmlItemDay == todate.date() && htmlItemMonth == todate.month() && htmlItemYear == todate.year()) {
                $(this).addClass(self.cssClass.today);
                $(self.element).addClass(self.cssClass.today);
            }
        });
        return this;
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc _updateState
     * @returns {Class_MonthGrid}
     * @private
     * @todo : must remove
     */
    _updateState: function () {
        var self = this;
        var t = new persianDate();
        self.daysCount = t.daysInMonth(self.state.year, self.state.month);
        self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
        return this;
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc selectDate
     * @param unixDate
     * @returns {Class_MonthGrid}
     */
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
        self.markSelectedDate(unixDate);
        return this;
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc markSelectedDate
     * @param unixDate
     */
    markSelectedDate: function (unixDate) {
        var self = this;
        $.each(self.daysList, function (index, value) {
            var viewItemUnix = parseInt($(value).attr("unixDate"));
            if (self.isSameDay(viewItemUnix, unixDate)) {
                $(this).addClass(self.cssClass.selected);
            } else {
                $(this).removeClass(self.cssClass.selected);
            }
        });
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc updateAs
     * @param year
     * @param month
     * @returns {Class_MonthGrid}
     */
    updateAs: function (year, month) {
        var self = this;
        self.state.year = year;
        self.state.month = month;
        self.view.renderDays(self);
        return this;
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc goToNextMonth
     * @returns {boolean}
     */
    goToNextMonth: function () {
        var self = this;
        if (self.state.month === 12) {
            self.state.month = 1;
            self.state.viewYear += 1;
        } else {
            self.state.month += 1;
        }
        self.updateAs(self.state.year, self.state.month)
        return false;
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc goTOPrevMonth
     */
    goToPrevMonth: function () {
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc goToYear
     * @param year
     */
    goToYear: function (year) {
        this.updateAs(year, this.state.month);
    },


    /**
     * @memberOf ClassDayPicker.ClassMonthGrid
     * @desc applyStory
     */
    applyStory: function () {
        //this.view.applyStory(this);
    }
};
MonthGrid = function (options) {
    // Change !!
    //this.pcal = options.parent.pcal;
    inherit(this, [ClassSprite, ViewsMonthGrid, ClassDateRange, ClassMonthGrid, options]);
    return this;
}

'use strict';
/**
 * @desc Instantiate in {@link ClassMonthGrid}
 * @class ViewsMonthGrid
 * @memberOf ClassMonthGrid
 * @type {{cssClass: {main: string, header: string, headerTitle: string, headerRow: string, headerRowCell: string, daysTable: string, currentMonth: string, today: string, selected: string}, views: {default: {render: render, renderDays: renderDays}}}}
 */
var ViewsMonthGrid = {
    /**
     * @memberOf ClassMonthGrid.ViewsMonthGrid
     * @desc cssClass       {string}
     * @prop main           {string}
     * @prop header         {string}
     * @prop headerTitle    {string}
     * @prop headerRow      {string}
     * @prop headerRowCell  {string}
     * @prop daysTable      {string}
     * @prop currentMonth   {string}
     * @prop today          {string}
     * @prop selected       {string}
     * @prop disbaled       {string}
     */
    cssClass: {
        main: "month-grid-box",
        header: "header",
        headerTitle: "title",
        headerRow: "header-row",
        headerRowCell: "header-row-cell",
        daysTable: "table-days",
        currentMonth: "current-month",
        today: "today",
        selected: 'selected',
        disbaled: 'disabled'
    },


    /**
     * @memberOf ClassMonthGrid.ViewsMonthGrid
     * @desc views
     */
    views: {
        "default": {
            /**
             *
             * @param self
             */
            render: function (self) {
                self.viewData = {
                    css: self.cssClass
                };
                self.element = $.tmplMustache(TEMPLATE.monthGrid, self.viewData).appendTo(self.container);
                self.header = self.createElementByClass(self.cssClass.header);
                self.headerRow = self.createElementByClass(self.cssClass.headerRow);
                var weekDay;
                for (weekDay in self.weekRange) {
                    $("<div/>").text(self.weekRange[weekDay].abbr.fa).addClass(self.cssClass.headerRowCell).appendTo(self.headerRow)[0];
                }
                ;
                self.daysBox = self.createElementByClass(self.cssClass.daysTable);
                this.renderDays(self);
            },
            /**
             *
             * @param self
             */
            renderDays: function (self) {
                self._updateState();
                self.daysList = [];
                var addSpan = function (day, month, year, cssClass) {
                    var dayPartUnixTime = new persianDate([year, month, day]).valueOf();
                    var span = $("<span/>")
                        .text(self._formatDigit(day))
                        .attr("unixDate", dayPartUnixTime)
                        .data({ day: day, month: month, year: year, unixDate: dayPartUnixTime})
                        .addClass(cssClass)
                        .appendTo($(this))[0];
                    self.daysList.push(span);
                }
                var t = new persianDate();
                self.daysCount = t.daysInMonth(self.state.year, self.state.month);
                self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
                var currentMonthIndex = 1;
                var nextMonthIndex = 1;
                $(self.daysBox).find("td").each(function (index) {
                    $(this).empty();
                    if (self.firstWeekDayOfMonth > 1 && index + 1 < self.firstWeekDayOfMonth) {
                        if (self.state.month === 1) {
                            var prevMonth = 12;
                            var prevYear = parseInt(self.state.year) - 1;
                        } else {
                            var prevMonth = parseInt(self.state.month) - 1;
                            var prevYear = parseInt(self.state.year);
                        }
                        var prevMonthDaysCount = t.daysInMonth(prevYear, prevMonth);
                        var day = parseInt((prevMonthDaysCount - self.firstWeekDayOfMonth) + (index + 2));
                        addSpan.apply(this, [day, prevMonth, prevYear, "other-month"])
                    } else if (index + 2 === (currentMonthIndex + self.firstWeekDayOfMonth) && currentMonthIndex <= self.daysCount) {
                        var day = currentMonthIndex;
                        addSpan.apply(this, [day, parseInt(self.state.month), parseInt(self.state.year)])
                        currentMonthIndex++;
                    } else {

                        if (self.state.month === 12) {
                            var nextMonth = 1;
                            var nextYear = parseInt(self.state.year) + 1;
                        } else {
                            var nextMonth = parseInt(self.state.month) + 1;
                            var nextYear = self.state.year;
                        }
                        var day = nextMonthIndex;
                        addSpan.apply(this, [day, nextMonth, nextYear, "other-month"]);
                        nextMonthIndex += 1;
                    }
                    var thisUnix = $(this).children("span").data("unixDate");


                    if (self.datepicker.state._filetredDate) {
                        if (self.minDate && self.maxDate) {
                            if (thisUnix >= self.minDate && thisUnix <= self.maxDate) {
                                $(this).addClass(self.cssClass.disbaled);
                            } else {
                                $(this).removeClass(self.cssClass.disbaled);
                            }
                        } else if (self.minDate) {
                            if (thisUnix >= self.minDate) {
                                $(this).addClass(self.cssClass.disbaled);
                            }
                        } else if (self.maxDate) {
                            if (thisUnix <= self.maxDate) {
                                $(this).removeClass(self.cssClass.disbaled);
                            }
                        }
                    } else {
                        if (self.datepicker.checkDate(thisUnix)) {
                            $(this).removeClass(self.cssClass.disbaled);
                        } else {
                            $(this).addClass(self.cssClass.disbaled);
                        }
                        if (self.datepicker.disableDays.length) {
                            var d = new persianDate(thisUnix);
                            if ($.inArray(d.pDate.date, self.datepicker.disableDays) !== -1) {
                                $(this).addClass(self.cssClass.disbaled);
                            }
                        }
                    }


                });
                $(self.daysBox).find("td").not('.disabled').children("span").click(function () {
                    var $thisUnixDate = $(this).data("unixDate");
                    self.raiseEvent("selectDay", [$thisUnixDate]);
                    return false;
                });
                $(self.daysBox).find('td.disabled').children("span").click(function () {
                    return false;
                });
                self.raiseEvent("reRender");
            }
        }
    }
};
'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ViewsDatePicker
 * @memberOf ClassDatepicker
 * @type {{cssClass: {datePickerPlotArea: string, yearView: string, monthView: string, dayView: string, timeView: string, navigator: string, toolbox: string}, container: {}, views: {default: {render: render, fixPosition: fixPosition}}}}
 */
var ViewsDatePicker = {
    /**
     * @memberOf ClassDatepicker.ViewsDatePicker
     * @desc cssClass           {string}
     * @prop datePickerPlotArea {string}
     * @prop yearView           {string}
     * @prop monthView          {string}
     * @prop dayView            {string}
     * @prop timeView           {string}
     * @prop navigator          {string}
     * @prop toolbox            {string}
     */
    cssClass: {
        datePickerPlotArea: "datepicker-plot-area",
        yearView: "datepicker-year-view",
        monthView: "datepicker-month-view",
        dayView: "datepicker-day-view",
        timeView: "datepicker-time-view",
        navigator: "navigator",
        toolbox: "toolbox "
    },


    /**
     * @memberOf ClassDatepicker.ViewsDatePicker
     * @desc conatiner
     */
    container: {},


    /**
     * @memberOf ClassDatepicker.ViewsDatePicker
     * @desc views
     * @prop default {object}
     */
    views: {


        /**
         * @memberOf ClassDatepicker.ViewsDatePicker.views
         * @prop render {function}
         * @prop fixPosition {function}
         */
        "default": {
            /**
             *
             * @param self
             * @returns {ViewsDatePicker}
             */
            render: function (self) {
                var viewData = {
                    css: self.cssClass
                };

                self.element = {};
                /**
                 * @memberOf ViewsDatePicker
                 */
                self.element.main = $.tmplMustache(TEMPLATE.datepciker, viewData).appendTo(self.$container);

                if (!self._inlineView) {
                    self.element.main.hide();
                }
                else {
                    self.element.main.addClass('datepicker-plot-area-inline-view');
                    self.element.main.show();
                }

                self.view.fixPosition(self);

                self.container.navigator = $(self.element.main).children('.' + self.cssClass.navigator);
                self.container.dayView = $(self.element.main).children('.' + self.cssClass.dayView);
                self.container.monthView = $(self.element.main).children('.' + self.cssClass.monthView);
                self.container.yearView = $(self.element.main).children('.' + self.cssClass.yearView);
                self.container.timeView = $(self.element.main).children('.' + self.cssClass.timeView);
                self.container.toolbox = $(self.element.main).children('.' + self.cssClass.toolbox);

                if (self.navigator.enabled && self.onlyTimePicker == false) {
                    self.navigator = new Navigator($.extend(true, self.navigator, {datepicker: self}), self.container.navigator);
                } else {
                    self.container.navigator.remove();
                    self.navigator = false;
                }

                if (self.toolbox.enabled && self.onlyTimePicker === false) {
                    self.toolbox = new Toolbox($.extend(true, self.toolbox, {datepicker: self}), self.container.toolbox);
                } else {
                    self.container.toolbox.remove();
                    self.toolbox = false;
                }
                if (self.dayPicker.enabled && self.onlyTimePicker === false) {
                    self.dayPicker = new Daypicker($.extend(true, self.dayPicker, {datepicker: self}), self.container.dayView);
                    self._pickers.day = self.dayPicker;
                } else {
                    self.container.dayView.hide();
                    self.dayPicker = false;
                }
                if (self.monthPicker.enabled && self.onlyTimePicker === false) {
                    self.monthPicker = new MonthPicker($.extend(true, self.monthPicker, {datepicker: self}), self.container.monthView);
                    self._pickers.month = self.monthPicker;
                } else {
                    self.monthPicker = false;
                    self.container.monthView.hide();
                }
                if (self.yearPicker.enabled && self.onlyTimePicker === false) {
                    self.yearPicker = new YearPicker($.extend(true, self.yearPicker, {datepicker: self}), self.container.yearView);
                    self._pickers.year = self.yearPicker;
                }
                else {
                    self.yearPicker = false;
                    self.container.yearView.hide();
                }
                if (self.timePicker.enabled | self.onlyTimePicker === true) {
                    self.timePicker = new TimePicker($.extend(true, self.timePicker, {datepicker: self}), self.container.timeView);
                }
                else {
                    self.container.timeView.hide();
                }

                self.changeView(self.viewMode);
                if (self.initialValue) {
                    self._syncWithImportData(self.state.unixDate);
                }
                return this;
            },


            /**
             *
             * @param self
             * @returns {ViewsDatePicker}
             */
            fixPosition: function (self) {
                if (!self._inlineView) {
                    var inputX = self.inputElem.offset().top;
                    var inputY = self.inputElem.offset().left;
                    if (self.position === "auto") {
                        var inputHeight = self.fullHeight(self.inputElem);
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
                }
                return this;
            }
        }
    }
};
var ClassDatepicker = {
    /**
     *
     * @desc list of picker obejcts like dayPicker,monthPicker,yearPicker
     * @private
     */
    _pickers: {},


    /**
     * @desc save current visibility state of plugin
     * @private
     */
    _viewed: false,


    /**
     * @desc if plugin selector detect as a div or any element exsept inpout set as true
     * @private
     */
    _inlineView: false,


    /**
     * @desc define next state of {@link ClassDatepicker._pickers}
     * @param {string} action . Acceptable Value : 'day','month',year
     * @returns {*}
     * @private
     */
    _getNextState: function (action) {
        var currentState = this.currentView;
        var nextState = this.currentView;
        if (action === 'next') {
            if (currentState === 'month' && this.dayPicker) {
                nextState = 'day';
            }
            if (currentState === 'year') {
                if (this.monthPicker) {
                    nextState = 'month';
                } else {
                    if (this.dayPicker) {
                        nextState = 'day';
                    }
                }
            }
        }
        else if (action === 'prev') {
            if (currentState === 'month' && this.yearPicker) {
                nextState = 'year';
            }
            if (currentState === 'day') {
                if (this.monthPicker) {
                    nextState = 'month';
                } else {
                    if (this.yearPicker) {
                        nextState = 'year';
                    }
                }
            }
        }
        return this._checkNextStateAvalibility(nextState);
    },


    /**
     * @desc check next state is available in {@link ClassDatepicker._pickers}
     * @param {string} state Accepptable Value: 'day','month','year'
     * @returns {*}
     * @private
     */
    _checkNextStateAvalibility: function (state) {
        if (!this._pickers[state]) {
            this.element.main.hide();
            return false;
            $.error(state + "Picker Set as {enabled:false} and dos not exist!! Set viewMode to Enabled view Check Configuration");
        }
        return state;
    },


    /**
     * @desc update {@link ClassNavigator} object switch text
     * @param switchStr
     * @public
     * @returns {ClassDatepicker}
     */
    updateNavigator: function (switchStr) {
        if (this.navigator) {
            this.navigator.updateSwitchBtn(this._formatDigit(switchStr));
        }
        return this;
    },


    /**
     * @desc update {@link ClassNavigator} relaion state
     * @param switchStr
     * @public
     * @returns {ClassDatepicker}
     */
    switchNavigatorRelation: function (newState) {
        if (this.navigator) {
            this.navigator.switchRelation(newState);
        }
        return this;
    },


    /**
     * @desc change {@link _pickers} visibility
     * @param state
     * @param action
     * @returns {ClassDatepicker}
     */
    changeView: function (state, action) {
        var self = this;
        var newState;
        if (!action) {
            newState = this._checkNextStateAvalibility(state);
        } else {
            newState = this._getNextState(action);
        }
        if (newState) {
            self.publishInDic(self._pickers, 'hide');
            self._pickers[newState].show();
            self.switchNavigatorRelation(newState);
            self.currentView = newState;
        }
        return this;
    },


    /**
     * @desc used in {@link ClassDatepicker._attachEvents}
     * @private
     */
    _flagSelfManipulate: true,


    /**
     * @desc only called by {@link ClassTimepicker}
     * @param key
     * @param val
     * @event
     */
    selectTime: function (key, val) {
        this.state.setTime(key, val);
        this._updateInputElement();
        this.onSelect(key, this);
    },


    /**
     * @desc only called by {@link ClassDaypicker}
     * @param key
     * @param unixDate
     * @returns {ClassDatepicker}
     * @event
     */
    selectDate: function (unixDate) {
        var self = this;
        self.state.setSelected('unix', unixDate);
        this.state.syncViewWithelected();
        switch (self.currentView) {
            case ('month'):
                self.monthPicker.selectMonth();
                break;
            case ('year'):
                self.yearPicker.selectYear();
                break;
            case ('day'):
                self.dayPicker.selectDay();
                break;
        }
        self._updateInputElement();
        self.onSelect(unixDate, this);
        if (self.autoClose) {
            self.element.main.hide();
        }
        return this;
    },


    /**
     * @desc only called by {@link ClassDaypicker}
     * @param key
     * @param unixDate
     * @returns {ClassDatepicker}
     * @event
     */
    selectDateTime: function (unixDate) {
        var self = this;
        self.state.setSelectedDateTime('unix', unixDate);
        this.state.syncViewWithelected();
        switch (self.currentView) {
            case ('month'):
                self.monthPicker.selectMonth();
                break
            case ('year'):
                self.yearPicker.selectYear();
                break
            case ('day'):
                self.dayPicker.selectDay();
                break
        }
        self._updateInputElement();
        self.onSelect(unixDate, this);
        if (self.autoClose) {
            self.element.main.hide();
        }
        return this;
    },


    /**
     * @desc only called by {@link ClassMonthPicker}
     * @param monthNum
     * @returns {ClassDatepicker}
     */
    selectMonth: function (monthNum) {
        var self = this;
        if (this.justSelectOnDate) {
            self.state.setView('month', monthNum);
        } else {
            self.state.setSelected('month', monthNum);
            self.state.setSelected('year', self.state.view.year);
            self.state.syncViewWithelected();
        }
        self._updateInputElement();
        self.changeView(self.currentView, 'next');
        return this;
    },


    /**
     * @desc only called by {@link ClassYearPicker}
     * @param yearNum
     * @returns {ClassDatepicker}
     */
    selectYear: function (yearNum) {
        var self = this;
        if (this.justSelectOnDate) {
            self.state.setView('year', yearNum);
        } else {
            self.state.setSelected('year', yearNum);
            self.state.syncViewWithelected();
        }
        self._updateInputElement();
        self.changeView(self.currentView, 'next');
        return this;
    },


    /**
     * @desc check {@link ClassDatepicker.persianDigit} and if set true all digit convert to persian
     * @param digit
     * @returns {*}
     * @private
     */
    _formatDigit: function (digit) {
        if (this.persianDigit && digit) {
            return digit.toString().toPersianDigit();
        }
        else {
            return digit;
        }
    },


    /**
     * @desc use in {@link ClassDatepicker._attachEvents}
     * @param pasted
     * @returns {ClassDatepicker}
     * @private
     */
    _syncWithImportData: function (pasted) {
        if (pasted) {
            var self = this;
            if (jQuery.isNumeric(pasted)) {
                var newPersainDate = new persianDate(pasted);
                self.state.setSelected('unix', newPersainDate);
                self._updateInputElement();
            } else {
                var persianDateArray = self.validatePersianDateString(pasted);
                if (persianDateArray != null) {
                    delay(function () {

                        var newPersainDate = new persianDate(persianDateArray);
                        self.selectDate(newPersainDate.valueOf());
                    }, self.inputDelay)
                }
            }
        }
        return this;
    },


    /**
     * @desc  Attach all dom events to rendered element.
     * @returns {ClassDatepicker}
     * @private
     */
    _attachEvents: function () {
        var self = this;
        $(window).resize(function () {
            self.view.fixPosition(self);
        });
        if (self.observer) {
            /////////////////   Manipulate by Copy And paste
            self.inputElem.bind('paste', function (e) {
                delay(function () {
                    self._syncWithImportData(e.target.value);
                }, 60);
            });
            /////////////////   Manipulate by alt changes
            $(self.altField).bind("change", function () {
                if (!self._flagSelfManipulate) {
                    var newDate = new Date($(this).val());
                    if (newDate !== "Invalid Date") {
                        var newPersainDate = new persianDate(newDate);
                        self.selectDate(newPersainDate.valueOf());
                    }
                }
            });
            /////////////////   Manipulate by keyboard
            var ctrlDown = false;
            var ctrlKey = [17, 91], vKey = 86, cKey = 67;
            $(document).keydown(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0)
                    ctrlDown = true;
            }).keyup(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0)
                    ctrlDown = false;
            });
            self.inputElem.bind("keyup", function (e) {
                var $self = $(this);
                if (!self._flagSelfManipulate) {
                    var trueKey = false;
                    if (e.keyCode === 8 || e.keyCode < 105 && e.keyCode > 96 || e.keyCode < 58 && e.keyCode > 47 || (ctrlDown && (e.keyCode == vKey || $.inArray(e.keyCode, ctrlKey) > 0  ))) {
                        trueKey = true;
                    }
                    if (trueKey) {
                        self._syncWithImportData($self.val());
                    }
                }
            });
        }

        self.inputElem.focus(function () {
            self.show();
        });
        self.inputElem.click(function (e) {
            e.stopPropagation();
            return false;
        });
        self.inputElem.blur(function () {
            if (!$.browser.msie) {
                self.hide();
            }
        });
        $(document).not(".datepicker-plot-area,.datepicker-plot-area > *").click(function (e) {
            self.inputElem.blur();
            self.hide();

        });
        $(self.element.main).mousedown(function (e) {
            e.stopPropagation();
            return false;
        });
        return this;
    },


    /**
     * @desc update input and altField input elemet value
     * @returns {ClassDatepicker}
     * @private
     */
    _updateInputElement: function () {
        var self = this;
        self._flagSelfManipulate = true;
        // Update Alt Field
        self.altField.val(self.altFieldFormatter(self.state.selected.unixDate)).trigger('change');
        ;
        // Update Display Field
        self.inputElem.val(self.formatter(self.state.selected.unixDate)).trigger('change');
        ;
        self._flagSelfManipulate = false;
        return self;
    },


    /**
     * @desc bootstrap method of {@link ClassDatepicker}
     * @returns {ClassDatepicker}
     * @private
     */
    _defineOnInitState: function () {
        if ($(this.$container)[0].nodeName == 'INPUT') {
            var garegurianDate = new Date(this.inputElem.val()).valueOf();
            this.$container = $('body');
        }
        else {
            var garegurianDate = new Date($(this.$container).data('date')).valueOf();
            this._inlineView = true;
        }
        if (garegurianDate && garegurianDate != 'undefined') {
            this.state.unixDate = garegurianDate;
        }
        else {
            this.state.unixDate = new Date().valueOf();
        }
        this.altField = $(this.altField);
        this.state.setSelectedDateTime('unix', this.state.unixDate);
        this.state.setTime('unix', this.state.unixDate);
        this.state.setView('unix', this.state.unixDate);
        return this;
    },


    /**
     * @desc set time of timepicker
     */
    setTime: function () {
        if(this.timePicker.enabled){
            this.timePicker.setTime(this.state.selected.unixDate);
        }
        return this;
    },


    /**
     * @desc set date of datepicker
     */
    setDate: function (p) {
        var date = new persianDate(p);
        this.selectDateTime(date.valueOf())
        this.setTime();
        return this;
    },


    /**
     * @desc initilize {@link ClassDatepicker}
     * @returns {ClassDatepicker}
     */
    init: function () {
        var self = this;
        this.state = new State({datepicker: self});
        this.compatConfig();
        this._defineOnInitState();
        if (self.initialValue) {
            this._updateInputElement();
        }
        this.view = this.views['default'];
        this.view.render(this);
        this.inputElem.data("datepicker", this);
        this.inputElem.addClass(self.cssClass);
        this._attachEvents();
        return this;
    }
};

var Datepicker = function (mainElem, options) {
    return inherit(this, [ClassSprite, ClassCompat, ClassDatepicker, ViewsDatePicker, ClassConfig, options, {
        $container: mainElem,
        inputElem: $(mainElem)
    }]);
};


'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class
 * @type {{cssClass: {datpickerHeader: string, btnNext: string, btnSwitch: string, btnPrev: string}, relation: string, switchRelation: switchRelation, updateSwitchBtn: updateSwitchBtn, _next: _next, _prev: _prev, _switch: _switch, _render: _render, _attachEvents: _attachEvents, init: init}}
 */
var ClassNavigator = {
    /**
     * @desc enabled
     * @type {Function}
     */
    enabled: true,

    /**
     * @desc text
     */
    text: {
        btnNextText: "<",
        btnPrevText: ">"
    },

    /**
     * @desc cssClass
     */
    cssClass: {
        datpickerHeader: "datepicker-header",
        btnNext: "btn-next",
        btnSwitch: "btn-switch",
        btnPrev: "btn-prev"
    },


    /**
     * @desc Defnine wich picker related to navigator
     * @desc relation
     */
    relation: "day",


    /**
     * @desc switchRelation
     * @param string
     * @returns {ClassNavigator}
     */
    switchRelation: function (string) {
        this.relation = string;
        this.onSwitch(string);
        return this;
    },


    /**
     * @desc updateSwitchBtn
     * @param val
     * @returns {ClassNavigator}
     */
    updateSwitchBtn: function (val) {
        $(this.element).children('.' + this.cssClass.btnSwitch).text(val);
        return this;
    },


    /**
     * @desc _next
     * @returns {ClassNavigator}
     * @private
     */
    _next: function () {
        this.datepicker[this.relation + 'Picker'].next();
        this.onNext(this);
        return this;
    },


    /**
     * @desc _prev
     * @returns {ClassNavigator}
     * @private
     */
    _prev: function () {
        this.datepicker[this.relation + 'Picker'].prev();
        this.onPrev(this);
        return this;
    },

    /**
     * @desc _switch
     * @returns {ClassNavigator}
     * @private
     */
    _switch: function () {
        this.datepicker.changeView(this.relation, 'prev');
        return this;
    },


    /**
     * @desc _render
     * @private
     */
    _render: function () {
        var self = this;
        self.viewData = {
            css: self.cssClass,
            btnNextText: self.text.btnNextText,
            btnPrevText: self.text.btnPrevText
        };
        self.element = $.tmplMustache(TEMPLATE.navigator, self.viewData).appendTo(self.$container);
    },


    /**
     * @desc _attachEvents
     * @private
     */
    _attachEvents: function () {
        var self = this;
        self.element.children("." + self.cssClass.btnPrev).click(function () {
            self._prev();
            return false;
        });
        self.element.children("." + self.cssClass.btnNext).click(function () {
            self._next();
            return false;
        });
        self.element.children("." + self.cssClass.btnSwitch).click(function () {
            self._switch();
            return false;
        });
    },


    /**
     * @desc init
     * @returns {ClassNavigator}
     */
    init: function () {
        var self = this;
        self._render();
        self._attachEvents();
        return this;
    }
};
var Navigator = function (options, container) {
    return inherit(this, [ClassSprite, ClassNavigator, options, {
        $container: container
    }]);
};

'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ClassDayPicker
 * @type {{next: next, prev: prev, updateView: updateView, _updateView: _updateView, selectDay: selectDay, _updateNavigator: _updateNavigator, hide: hide, show: show, _updateSelectedDay: _updateSelectedDay, _render: _render, init: init}}
 */
var ClassDayPicker = {
    /**
     * @desc next
     * @desc Go to next Month-day view
     * @public
     * @returns {ClassDaypicker}
     */
    next: function () {
        var self = this;
        if (self.datepicker.state.view.month === 12) {
            self.datepicker.state.setView('month', 1);
            self.datepicker.state.setView('year', parseInt(self.datepicker.state.view.year) + 1);
        } else {
            self.datepicker.state.setView('month', parseInt(self.datepicker.state.view.month) + 1);
        }
        self._updateView();
        return this;
    },


    /**
     * @desc prev
     * @desc Go to previews Month-day view
     * @public
     * @returns {ClassDaypicker}
     */
    prev: function () {
        var self = this;
        if (self.datepicker.state.view.month === 1) {
            self.datepicker.state.setView('month', 12);
            self.datepicker.state.setView('year', parseInt(self.datepicker.state.view.year) - 1);
        } else {
            self.datepicker.state.setView('month', parseInt(self.datepicker.state.view.month) - 1);
        }
        self._updateView();
        return this;
    },


    /**
     * @desc updateView
     * @public
     * @returns {ClassDaypicker}
     */
    updateView: function () {
        this._updateView();
        return this;
    },


    /**
     * @desc _updateView
     * @returns {ClassDaypicker}
     * @private
     */
    _updateView: function () {
        var self = this;
        self.mGrid.updateAs(self.datepicker.state.view.year, self.datepicker.state.view.month);
        self._updateNavigator(self.datepicker.state.view.year, self.datepicker.state.view.month);
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
        return this;
    },


    /**
     * @desc selectDay
     * @public
     * @returns {ClassDaypicker}
     */
    selectDay: function () {
        var self = this;
        self.mGrid.updateAs(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        self._updateNavigator(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
        this._updateView();
        return this;
    },


    /**
     * @desc _updateNavigator
     * @param year
     * @param month
     * @private
     */
    _updateNavigator: function (year, month) {
        var self = this;
        var pdateStr = this.titleFormatter(year, month);

        self.datepicker.updateNavigator(pdateStr);
        return this;
    },


    /**
     * @desc hide
     * @public
     * @returns {ClassDaypicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @desc show
     * @public
     * @returns {ClassDaypicker}
     */
    show: function () {
        this.container.show();
        this._updateView();
        return this;
    },


    /**
     * @desc _updateSelectedDay
     * @param unix
     * @returns {ClassDaypicker}
     * @private
     */
    _updateSelectedDay: function (unix) {
        this.mGrid.markSelectedDate(unix);
        return this;
    },

    /**
     * @desc _attachEvents
     * @private
     */
    _attachEvents: function () {
        var self = this;
        if (this.scrollEnabled) {
            $(this.container).mousewheel(function (event) {

                if (event.deltaY > 0) {
                    self.next();
                } else {
                    self.prev();
                }

            });
            $(this.container).bind('mousewheel DOMMouseScroll', function (e) {
                var scrollTo = null;

                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }
                if (scrollTo) {
                    e.preventDefault();
                    $(this).scrollTop(scrollTo + $(this).scrollTop());
                }
            });
        }
        return this;
    },


    /**
     * @desc _render
     * @private
     */
    _render: function () {
        var self = this;
        this.mGrid = new MonthGrid({
            container: self.container,
            persianDigit: self.datepicker.persianDigit,
            month: self.datepicker.state.selected.month,
            year: self.datepicker.state.selected.year,
            minDate: self.datepicker.state.filterDate.start.unixDate,
            maxDate: self.datepicker.state.filterDate.end.unixDate,
            datepicker: self.datepicker
        });
        this.mGrid.attachEvent("selectDay", function (x) {
            self.datepicker.selectDate(x);
            self.onSelect(x);
            self.mGrid.selectDate(self.datepicker.state.selected.unixDate);
        });
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
    },


    /**
     * @desc init
     * @private
     * @returns {Class_Daypicker}
     */
    init: function () {
        var self = this;
        this._render()
        this._attachEvents();
        this._updateNavigator(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        return this;
    }
};
var Daypicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassDayPicker, options, {
        container: container
    }]);
};

'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ClassMonthPicker
 * @type {{cssClass: {selectedMonth: string, monthItem: string}, monthRange: (ClassDateRange.monthRange|*), _updateNavigator: _updateNavigator, hide: hide, show: show, selectMonth: selectMonth, defineSelectedMonth: defineSelectedMonth, next: next, prev: prev, updateView: updateView, _render: _render, init: init}}
 */
var ClassMonthPicker = {
    /**
     * @desc cssClass
     */
    cssClass: {
        selectedMonth: "selected",
        monthItem: "month-item",
        disbaleItem: "month-item-disable"
    },

    /**
     * @desc monthRange
     */
    monthRange: ClassDateRange.monthRange,


    /**
     * @desc _updateNavigator
     * @private
     */
    _updateNavigator: function () {
        var self = this;
        self.datepicker.updateNavigator(this.titleFormatter(self.datepicker.state.view.unixDate));
        return this;
    },


    /**
     * @desc hide
     * @returns {Class_MonthPicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @desc show
     * @returns {Class_MonthPicker}
     */
    show: function () {
        this.container.show();
        this._updateNavigator();
        this._render();
        return this;
    },


    /**
     * @desc selectMonth
     */
    selectMonth: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
    },


    /**
     * @desc defineSelectedMonth
     * @returns {Class_MonthPicker}
     */
    defineSelectedMonth: function () {
        var self = this;
        self.container.children('.' + self.cssClass.monthItem).removeClass(self.cssClass.selectedMonth);
        if (self.datepicker.state.view.year === self.datepicker.state.selected.year) {
            self.container.children(".month" + self.datepicker.state.selected.month).addClass(self.cssClass.selectedMonth);
        }
        return this;
    },


    /**
     * @desc next
     * @returns {Class_MonthPicker}
     */
    next: function () {
        var self = this;
        self.datepicker.state.setView('year', self.datepicker.state.view.year + 1);
        self.updateView();
        self._render();

        return this;
    },


    /**
     * @desc prev
     * @returns {Class_MonthPicker}
     */
    prev: function () {
        var self = this;
        self.datepicker.state.setView('year', self.datepicker.state.view.year - 1);
        self.updateView();
        self._render();
        return this;
    },


    /**
     * @desc updateView
     * @returns {Class_MonthPicker}
     */
    updateView: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
        return this;
    },


    /**
     * @desc _checkMonthAccess
     * @param month
     * @returns {boolean}
     * @private
     */
    _checkMonthAccess: function (month) {
        if (this.datepicker.state._filetredDate) {
            var y = this.datepicker.state.view.year;
            var monthUnix = new pDate([y, month]).unix() * 1000;
            if (monthUnix >= this.datepicker.state.filterDate.start.unixDate &&
                monthUnix <= this.datepicker.state.filterDate.end.unixDate
                ) {
                return true;
            } else {
                return false;
            }
        }
        else {
            return this.datepicker.checkMonth(month);
        }
    },


    /**
     * @desc _attachEvents
     * @returns {ClassMonthPicker}
     * @private
     */
    _attachEvents: function () {
        var self = this;
        if (this.scrollEnabled) {
            $(this.container).mousewheel(function (event) {

                if (event.deltaY > 0) {
                    self.next();
                } else {
                    self.prev();
                }
            });
            $(this.container).bind('mousewheel DOMMouseScroll', function (e) {
                var scrollTo = null;

                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }
                if (scrollTo) {
                    e.preventDefault();
                    $(this).scrollTop(scrollTo + $(this).scrollTop());
                }
            });
        }
        return this;
    },

    /**
     * @desc _render
     * @returns {Class_MonthPicker}
     * @private
     */
    _render: function () {
        var self = this, m;
        self.container.empty();
        for (m in this.monthRange) {
            var monthItem = $("<div/>").data({
                monthIndex: m
            }).addClass("month" + m)
                .addClass(self.cssClass.monthItem)
                .text(self.monthRange[m].name.fa)
                .appendTo(self.container);

            if (self._checkMonthAccess(m)) {
                monthItem.click(function () {
                    self.onSelect($(this).data().monthIndex);
                    self.datepicker.selectMonth(parseInt($(this).data().monthIndex));
                    return false;
                });
            } else {
                monthItem.addClass(self.cssClass.disbaleItem);
                monthItem.click(function () {
                    return false;
                });
            }
        }
        ;
        this.defineSelectedMonth();
        return this;
    },

    /**
     * @desc init
     * @returns {ClassMonthPicker}
     */
    init: function () {
        this._render();
        this._attachEvents();
        return this;
    }
};

var MonthPicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassMonthPicker, options, {
        container: container
    }]);
};

'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ClassYearPicker
 * @instance
 * @type {{cssClass: {selectedYear: string, yearItem: string}, events: {select: select}, _updateNavigator: _updateNavigator, hide: hide, show: show, next: next, prev: prev, selectYear: selectYear, updateView: updateView, _render: _render, init: init}}
 */
var ClassYearPicker = {
    /**
     * cssClass
     */
    cssClass: {
        selectedYear: "selected",
        yearItem: "year-item",
        disbaleItem: "year-item-disable"
    },


    /**
     * events
     */
    events: {
        select: function () {
        }
    },


    /**
     *
     * @private
     */
    _updateNavigator: function () {
        var self = this;
        var year = self.datepicker.state.view.year;
        self.datepicker.updateNavigator(self.titleFormatter(year));
        return this;
    },

    /**
     * @public
     * @returns {Class_YearPicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    show: function () {
        this.container.show();
        this.updateView();
        return this;
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    next: function () {
        var self = this;
        self.datepicker.state.view.year += 12;
        self._render().updateView();
        return this;
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    prev: function () {
        var self = this;
        self.datepicker.state.view.year -= 12;
        self._render().updateView();
        return this;
    },


    /**
     * @public
     */
    selectYear: function () {
        this.updateView();
    },


    /**
     * @public
     * @returns {Class_YearPicker}
     */
    updateView: function () {
        var self = this;
        self._render();
        self.container.children("." + self.cssClass.yearItem).each(function () {
            $(this).removeClass(self.cssClass.selectedYear);

            if ($(this).data().year === self.datepicker.state.selected.year) {
                $(this).addClass(self.cssClass.selectedYear);
            }
        });
        self._updateNavigator();
        return this;
    },


    /**
     *
     * @param y
     * @returns {boolean}
     * @private
     */
    _checkYearAccess: function (y) {
        if (this.datepicker.state._filetredDate) {
            var startYear = this.datepicker.state.filterDate.start.year;
            var endYear = this.datepicker.state.filterDate.end.year;
            if (startYear <= y & y <= endYear) {
                return true;
            } else {
                return false;
            }
        }else {
            return this.datepicker.checkYear(y);
        }
    },


    /**
     *
     * @returns {ClassMonthPicker}
     * @private
     */
    _attachEvents: function () {
        var self = this;
        if (this.scrollEnabled) {
            $(this.container).mousewheel(function (event) {

                if (event.deltaY > 0) {
                    self.next();
                } else {
                    self.prev();
                }

            });
            $(this.container).bind('mousewheel DOMMouseScroll', function (e) {
                var scrollTo = null;

                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }
                if (scrollTo) {
                    e.preventDefault();
                    $(this).scrollTop(scrollTo + $(this).scrollTop());
                }
            });
        }
        return this;
    },

    /**
     *
     * @returns {Class_YearPicker}
     * @private
     */
    _render: function () {
        var self = this;
        var yearItem
            , year = self.datepicker.state.view.year
            , remaining = parseInt(year / 12) * 12;
        self.container.children("." + self.cssClass.yearItem).remove();
        var i;
        for (i in range(12)) {
            yearItem = $("<div/>")
                .addClass(self.cssClass.yearItem)
                .data({year: (remaining + parseInt(i))})
                .text(self.datepicker._formatDigit(remaining + parseInt(i)))
                .appendTo(self.container);
            if (year === remaining + parseInt(i)) {
                yearItem.addClass(self.cssClass.selectedYear);
            }
            if (self._checkYearAccess(remaining + parseInt(i))) {
                yearItem.click(function () {
                    var y = $(this).data().year;
                    self.datepicker.selectYear(parseInt(y));
                    self.onSelect(y);
                    return false;
                });
            } else {
                yearItem.addClass(self.cssClass.disbaleItem);
                yearItem.click(function () {
                    return false;
                });

            }
        }
        return this;
    },

    /**
     * @private
     */
    init: function () {
        this._render();
        this._attachEvents();
        return this;
    }
};


var YearPicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassYearPicker, options, {
        container: container
    }]);
};

'use strict';
/**
 * @desc {@link ClassDatepicker}
 * @class ClassToolbox
 * @type {{cssClass: {btnToday: string}, _goToday: _goToday, _render: _render, init: init}}
 */
var ClassToolbox = {
    /**
     * Text
     */
    text: {
        btnToday: "امروز"
    },


    /**
     * enabled
     */
    enabled: true,

    /**
     * cssClass
     */
    cssClass: {
        btnToday: "btn-today"
    },


    /**
     *
     * @private
     */
    _goToday: function () {
        var self = this;
        var todayUnix = new Date().valueOf();
        self.datepicker.selectDate(todayUnix);
        this.onToday(this);
        return this;
    },


    /**
     *
     * @returns {Class_Toolbox}
     * @private
     */
    _render: function () {
        var self = this;
        this.todayBtn = $("<div></div>")
            .text(self.text.btnToday)
            .addClass(self.cssClass.btnToday).click(function () {
                self._goToday();
                return false;
            }).appendTo(this.$container);
        return this;
    },


    /**
     *
     * @returns {Class_Toolbox}
     */
    init: function () {
        return this._render();
    }
};


var Toolbox = function (options, container) {
    return inherit(this, [ClassSprite, ClassToolbox, options, {
        $container: container
    }]);
};

'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ClassTimePicker
 * @type {{showSeconds: boolean, showMeridian: boolean, minuteStep: number, cssClss: {timepicker: string}, show: show, hide: hide, _render: _render, _currentMeridian: null, convert24hTo12: convert24hTo12, convert12hTo24: convert12hTo24, _updateTime: _updateTime, _updateMeridian: _updateMeridian, _toggleMeridian: _toggleMeridian, _movehour: _movehour, _moveminute: _moveminute, _movesecond: _movesecond, _movemeridian: _movemeridian, _updateState: _updateState, _attachEvent: _attachEvent, _bootstrap: _bootstrap, init: init}}
 */
var ClassTimePicker = {
    /**
     * @property secondStep
     */
    secondStep: 1,


    /**
     * @property minuteStep
     */
    minuteStep: 1,

    /**
     * @property hourStep
     */
    hourStep: 1,

    /**
     * @property cssClass
     */
    cssClss: {
        timepicker: "viewModel"
    },


    /**
     * @property show
     * @returns {Class_Timepicker}
     */
    show: function () {
        'use strict';
        this.container.show();
        return this;
    },


    /**
     * @property hide
     * @returns {Class_Timepicker}
     */
    hide: function () {
        'use strict';
        this.container.hide();
        return this;
    },


    /**
     * @property _render
     * @returns {Class_Timepicker}
     * @private
     */
    _render: function () {
        var self = this;
        var viewModel = {
            css: self.cssClass
        };
        $.tmplMustache(TEMPLATE.timepicker, viewModel).appendTo(this.container);
        return this;
    },


    /**
     *  @property _currentMeridian
     */
    _currentMeridian: null,


    /**
     * @property convert24hTo12
     * @param hour
     */
    convert24hTo12: function (hour) {
        var output = hour, meridian = 'AM';
        if (hour >= 12) {
            output = hour - 12;
            meridian = "PM";
        }
        if (hour === 0) {
            output = 12;
        }
        return [output, meridian];
    },


    /**
     * @property convert12hTo24
     * @param hour
     * @returns {*}
     */
    convert12hTo24: function (hour) {
        var output = hour;
        if (this._currentMeridian === "PM" && hour < 12) {
            output = hour + 12;
        }
        if (this._currentMeridian === "AM" && hour === 12) {
            output = hour - 12;
        }
        return output;
    },


    /**
     * @property _updateTime
     * @param state
     * @returns {Class_Timepicker}
     * @private
     */
    _updateTime: function (state) {
        var timeStateObject = state.selected;
        var hourArray = this.convert24hTo12(timeStateObject['hour']);
        this.hourInput.val(timeStateObject['hour']);
        this.minuteInput.val(timeStateObject['minute']);
        this.secondInput.val(timeStateObject['second']);
        this.meridianInput.val(timeStateObject.dateObj.format('a'))
        this._currentMeridian = hourArray[1];
        this.meridianInput.attr({'data-meridian-mode': this._currentMeridian});
        return this;
    },


    /**
     * @property _updateMeridian
     * @param state
     * @returns {Class_Timepicker}
     * @private
     */
    _updateMeridian: function (state) {
        var timeStateObject = state.selected;
        this.meridianInput.val(timeStateObject.dateObj.format('a'))
        return this;
    },


    /**
     *
     * @returns {Class_Timepicker}
     * @private
     */
    _toggleMeridian: function () {
        if (this._currentMeridian === 'AM') {
            this._currentMeridian = 'PM';
            this.meridianInput.val('PM');
        } else if (this._currentMeridian === 'PM') {
            this._currentMeridian = 'AM';
            this.meridianInput.val('AM');
        }
        return this;
    },


    /**
     *
     * @param mode
     * @returns {Class_Timepicker}
     * @private
     */
    _movehour: function (mode) {
        var currentVal = parseInt(this.hourInput.val());
        if (this.showMeridian == true) {
            if (mode === 'up') {
                if (currentVal >= 12) {
                    currentVal = this.hourStep;
                } else {
                    currentVal += this.hourStep;
                }
            } else {
                if (currentVal <= 1) {
                    currentVal = 12;
                } else {
                    currentVal -= this.hourStep;
                }
            }
        } else {
            if (mode === 'up') {
                currentVal += this.hourStep;
            } else {
                currentVal -= this.hourStep;
            }
        }
        this.hourInput.val(currentVal);
        this._updateState('hour', this.convert12hTo24(currentVal));
        return this;
    },


    /**
     *
     * @param mode
     * @returns {Class_Timepicker}
     * @private
     */
    _moveminute: function (mode) {
        var currentVal = parseInt(this.minuteInput.val());
        if (mode === 'up') {
            if (currentVal === 59) {
                currentVal = 0;
            } else {
                currentVal += this.minuteStep;
            }
        } else {
            if (currentVal === 0) {
                currentVal = 59;
            } else {
                currentVal -= this.minuteStep;
            }
        }
        this.minuteInput.val(currentVal);
        this._updateState('minute', currentVal);
        return this;
    },


    /**
     *
     * @param mode
     * @returns {Class_Timepicker}
     * @private
     */
    _movesecond: function (mode) {
        var currentVal = parseInt(this.secondInput.val());
        if (mode === 'up') {
            if (currentVal === 59) {
                currentVal = 0;
            } else {
                currentVal += this.secondStep;
            }
        } else {
            if (currentVal === 0) {
                currentVal = 59;
            } else {
                currentVal -= this.secondStep;
            }
        }
        this.secondInput.val(currentVal);
        this._updateState('second', currentVal);
        return this;
    },


    /**
     *
     * @returns {Class_Timepicker}
     * @private
     */
    _movemeridian: function () {
        this._toggleMeridian();
        this._updateState('hour', this.convert12hTo24(parseInt(this.hourInput.val())));
        return this;
    },


    /**
     *
     * @param key
     * @param val
     * @returns {Class_Timepicker}
     * @private
     */
    _updateState: function (key, val) {
        this.datepicker.selectTime(key, val);
        this._updateMeridian(this.datepicker.state);
        return this;
    },


    /**
     *
     * @returns {Class_Timepicker}
     * @private
     */
    _attachEvent: function () {
        var self = this;
        $('.up-btn', this.container).click(function () {
            self['_move' + $(this).parent().attr('data-time-key')]('up');
            return false;
        });
        $('.down-btn', this.container).click(function () {
            self['_move' + $(this).parent().attr('data-time-key')]('down');
            return false;
        });
        if (this.scrollEnabled) {
            $('> div.time-segment', this.container).mousewheel(function (event) {
                var moveMode = 'down';
                if (event.deltaY > 0) {
                    moveMode = 'up';
                }
                self['_move' + $(this).attr('data-time-key')](moveMode);
            });
            $('> div.time-segment', this.container).bind('mousewheel DOMMouseScroll', function (e) {
                var scrollTo = null;

                if (e.type == 'mousewheel') {
                    scrollTo = (e.originalEvent.wheelDelta * -1);
                }
                else if (e.type == 'DOMMouseScroll') {
                    scrollTo = 40 * e.originalEvent.detail;
                }
                if (scrollTo) {
                    e.preventDefault();
                    $(this).scrollTop(scrollTo + $(this).scrollTop());
                }
            });
        }
        return this;
    },


    /**
     *
     * @returns {Class_Timepicker}
     * @private
     */
    _bootstrap: function () {
        if (this.showMeridian === false) {
            $('.meridian', this.container).hide();
            $('.meridian-divider', this.container).hide();
            $('.time-segment', this.container).css({
                width: '31%'
            });

        }
        if (this.showSeconds === false) {
            $('.second', this.container).hide();
            $('.second-divider', this.container).hide();
            $('.time-segment', this.container).css({
                width: '31%'
            });
        }
        if (this.showMeridian === false && this.showSeconds === false) {
            $('.time-segment', this.container).css({
                width: '47%'
            });
        }
        this.hourInput = $('.hour-input', this.container);
        this.minuteInput = $('.minute-input', this.container);
        this.secondInput = $('.second-input', this.container);
        this.meridianInput = $('.meridian-input', this.container);
        this._updateTime(this.datepicker.state);
        return this;
    },

    /**
     *
     * @param unix
     */
    setTime: function (unix) {
        var pd = new persianDate(unix);
        this._updateState('hour', pd.hour());
        this._updateState('minute', pd.minute());
        this._updateState('second', pd.second());
        this.minuteInput.val(pd.minute());
        this.secondInput.val(pd.second());
        this.hourInput.val(pd.hour());
    },


    /**
     *
     * @returns {Class_Timepicker}
     */
    init: function () {
        this._render()._bootstrap()._attachEvent();

        return this;
    }
};
var TimePicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassTimePicker, options, {
        container: container
    }]);
};

'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ClassDatepickerState
 * @type {{view: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, selected: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, _updateSelectedUnix: _updateSelectedUnix, setTime: setTime, setSelected: setSelected, syncViewWithelected: syncViewWithelected, setView: setView}}
 */
var ClassDatepickerState = {
    /**
     * @desc define start and end of available date
     */
    filterDate: {
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
            unixDate: 100
        }
    },

    /**
     * @desc view
     */
    view: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },


    /**
     * @desc selected
     */
    selected: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },


    /**
     * @desc setFilterDate
     * @param key
     * @param startVal
     * @param endVal
     */
    setFilterDate: function (key, startVal, endVal) {
        var self = this;
        if (!startVal) {
            startVal = -99999999999999;
        }
        var pd = new persianDate(startVal);
        self.filterDate.start.unixDate = startVal;
        self.filterDate.start.hour = pd.hour();
        self.filterDate.start.minute = pd.minute();
        self.filterDate.start.second = pd.second();
        self.filterDate.start.month = pd.month();
        self.filterDate.start.date = pd.date();
        self.filterDate.start.year = pd.year();

        if (!endVal) {
            endVal = 99999999999999
        }
        var pd = new persianDate(endVal);
        self.filterDate.end.unixDate = endVal;
        self.filterDate.end.hour = pd.hour();
        self.filterDate.end.minute = pd.minute();
        self.filterDate.end.second = pd.second();
        self.filterDate.end.month = pd.month();
        self.filterDate.end.date = pd.date();
        self.filterDate.end.year = pd.year();
    },


    /**
     * @desc _updateSelectedUnix
     * @returns {Class_DatepickerState}
     * @private
     */
    _updateSelectedUnix: function () {
        this.selected.dateObj = new persianDate([this.selected.year,
            this.selected.month,
            this.selected.date,
            this.selected.hour,
            this.selected.minute,
            this.selected.second
        ])
        this.selected.unixDate = this.selected.dateObj.valueOf();
        return this;
    },


    /**
     * @desc setTime
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setTime: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.hour = pd.hour();
                self.selected.minute = pd.minute();
                self.selected.second = pd.second();
                self._updateSelectedUnix();
                break;
            case 'hour':
                this.selected.hour = value;
                self._updateSelectedUnix();
                break;
            case 'minute':
                this.selected.minute = value;
                self._updateSelectedUnix();
                break;
            case 'second':
                this.selected.second = value;
                self._updateSelectedUnix();
                break;
        }
        return this;
    },


    /**
     * @desc setSelected
     * @public
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setSelected: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.year = pd.year();
                self.selected.month = pd.month();
                self.selected.date = pd.date();
                self._updateSelectedUnix();
                break;
            case 'year':
                this.selected.year = value;
                self._updateSelectedUnix();
                break;
            case 'month':
                this.selected.month = value
                self._updateSelectedUnix();
                break;
            case 'date':
                this.selected.month = value
                self._updateSelectedUnix();
                break;
        }
        return this;
    },


    setSelectedDateTime:function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.year = pd.year();
                self.selected.month = pd.month();
                self.selected.date = pd.date();
                self.selected.hour = pd.hour();
                self.selected.minute = pd.minute();
                self.selected.second = pd.second();
                self._updateSelectedUnix();
                break;
            case 'year':
                this.selected.year = value;
                self._updateSelectedUnix();
                break;
            case 'month':
                this.selected.month = value
                self._updateSelectedUnix();
                break;
            case 'date':
                this.selected.month = value
                self._updateSelectedUnix();
                break;
        }
        return this;
    },


    /**
     * @desc syncViewWithelected
     * @public
     * @returns {Class_DatepickerState}
     */
    syncViewWithelected: function () {
        this.view.year = this.selected.year;
        this.view.month = this.selected.month;
        this.view.date = this.selected.date;
        this.view.unixDate = this.selected.unixDate;
        return this;
    },


    /**
     * @desc _updateViewUnix
     * @returns {Class_DatepickerState}
     * @private
     */
    _updateViewUnix: function () {
        this.view.dateObj = new persianDate([
            this.view.year,
            this.view.month,
            this.view.date,
            this.view.hour,
            this.view.minute,
            this.view.second
        ])
        this.view.unixDate = this.view.dateObj.valueOf();
        return this;
    },

    /**
     * @desc setView
     * @public
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setView: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                var pd = new persianDate(value);
                self.view.year = pd.year();
                self.view.month = pd.month();
                self.view.date = pd.date();
                self.view.unixDate = value;
                break;
            case 'year':
                this.view.year = value;
                this._updateViewUnix();
                break;
            case 'month':
                this.view.month = value;
                this._updateViewUnix();
                break;
            case 'date':
                this.view.month = value;
                this._updateViewUnix();
                break;
        }
        return this;
    }
};


var State = function (options) {
    return inherit(this, [ClassDatepickerState, options]);
};


/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));}());