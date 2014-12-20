/* persian-datepicker - v0.3.0 */( function () {(function ($) {
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
                output = dp[funcName](tempArg);
            } else {
                this.pDatePicker = new Datepicker(this, options);
            }
        });
        return output;
    };
})(jQuery);
'use strict';

/**
 * @class
 * @type {{cssClass: string, daysTitleFormat: string, persianDigit: boolean, viewMode: string, position: string, autoClose: boolean, toolbox: boolean, format: boolean, observer: boolean, altField: boolean, altFormat: string, inputDelay: number, viewFormat: string, formatter: formatter, altFieldFormatter: altFieldFormatter, show: show, hide: hide, onShow: onShow, onHide: onHide, onSelect: onSelect, timePicker: {enabled: boolean}, dayPicker: {enabled: boolean}, monthPicker: {enabled: boolean}, yearPicker: {enabled: boolean}}}
 */
var ClassConfig = {
    /**
     * @property cssClass
     * @type {string}
     * @default datepicker-container
     */
    cssClass: 'datepicker-container',


    /**
     * @property daysTitleFormat
     * @type {string}
     * @default YYYY MMMM
     * @deprecated 0.2.4
     */
    daysTitleFormat: 'YYYY MMMM',

    /**
     * @property persianDigit
     * @type {boolean}
     * @default true
     */
    persianDigit: true,


    /**
     * @property viewMode
     * @type {string}
     * @default day
     */
    viewMode: false,


    /**
     * @property position
     * @type {string|Array}
     * @default auto
     */
    position: "auto",


    /**
     * @property autoClose
     * @type {boolean}
     * @default false
     */
    autoClose: false,


    /**
     * @format format
     * @type {boolean}
     * @default false
     */
    format: false,


    /**
     * @format observer
     * @type {boolean}
     * @default false
     */
    observer: false,


    /**
     * @format altField
     * @type {boolean}
     * @default false
     */
    altField: false,


    /**
     * @format inputDelay
     * @type {number}
     * @default 800
     */
    inputDelay: 800,


    /**
     * @format viewFormat
     * @type {string}
     * @default YYYY/MM/DD
     */
    viewFormat: "YYYY/MM/DD",


    /**
     * @method
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
     * @format altField
     * @type {string}
     * @default unix
     */
    altFormat: 'unix',


    /**
     * @method
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
     * @method
     * @param self
     */
    destroy: function () {
        this.elmenet.main.remove();
    },


    /**
     * @event
     * @param self
     */
    onShow: function (self) {
    },


    /**
     * @event
     * @param self
     */
    onHide: function (self) {
    },


    /**
     * @event
     * @param unixDate
     */
    onSelect: function (unixDate) {
        return this;
    },

    /**
     * @property navigator
     * @type {boolean}
     * @default true
     */
    navigator: {
        enabled: true,
        text: {
            btnNextText: "<",
            btnPrevText: ">"
        },
        onNext: function (navigator) {
            //log("navigator next ");
        },
        onPrev: function (navigator) {
            //log("navigator prev ");
        },
        onSwitch: function (state) {
            // console.log("navigator switch ");
        }
    },

    /**
     * @property toolbox
     * @type {boolean}
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
     * @property timePicker
     * @type {object}
     */
    timePicker: {
        enabled: false,
        showSeconds: true,
        showMeridian: true,
        changeOnScroll: true
    },

    /**
     * @property dayPicker
     * @type {object}
     */
    dayPicker: {
        enabled: true,
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
     * @property monthPicker
     * @type {object}
     */
    monthPicker: {
        enabled: true,
        titleFormat: 'YYYY',
        titleFormatter: function (unix) {
            if (this.datepicker.persianDigit == false) {
                window.formatPersian = false;
            }
            var titleStr = new persianDate(unix).format(this.titleFormat);
            window.formatPersian = true;
            return titleStr

        },
        onSelect: function (monthIndex) {
            //log("daypicker select day :" + monthIndex);
        }
    },


    /**
     * @property yearPicker
     * @type {object}
     */
    yearPicker: {
        enabled: true,
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
     * if true all pickers hide and just shpw timepicker
     * @property justSelectOnDate
     */
    onlyTimePicker: false,


    /**
     * if true date select just by click on day in month grid
     * @property justSelectOnDate
     */
    justSelectOnDate: true,


    /**
     * set min date on datepicker
     * @property minDate
     */
    minDate: false,


    /**
     * set max date on datepicker
     * @property maxDate
     */
    maxDate: false

//    minDate: 1419242667029,
//    maxDate: false

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
     * datepicker
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
     * navigator
     */
    navigator: "<div class='{{css.datpickerHeader}}' >" + //
        "<div class='{{css.btnNext}}' >{{btnNextText}}</div>" + //
        "<div class='{{css.btnSwitch}}' >{{btnSwitchText}}</div>" + //
        "<div class='{{css.btnPrev}}' >{{btnPrevText}}</div>" + //
        "</div>",


    /**
     * timepicker
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
        "<div class='divider' >:</div>" + //
        "<div class='second time-segment' data-time-key='second' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='second' class='second-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>" + //
        "<div class='divider' ></div>" + //
        "<div class='divider' ></div>" + //
        "<div class='meridian time-segment' data-time-key='meridian' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='meridian&' class='meridian-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>",

    /**
     * Month Grid
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
 * @abstract
 * @type {{init: init, publishInDic: publishInDic, callOfDict: callOfDict, isSameDay: isSameDay, isValidGreguranDate: isValidGreguranDate, validatePersianDateString: validatePersianDateString, fullHeight: fullHeight, attachEvent: attachEvent, dettachEvent: dettachEvent, clearEvent: clearEvent, raiseEvent: raiseEvent, events: {init: null}}}
 */
var ClassBase = {
    /**
     *  Call init method
     * init;
     * @private
     */
    init: function () {
        this.isInstance = true;
        this.raiseEvent('init');
    },


    /**
     *
     * @param objectList
     * @param methodName
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
     * @param objectList
     * @param key
     * @param methodName
     */
    callOfDict: function (objectList, key, methodName) {
    },


    /**
     *
     * @param unix1
     * @param unix2
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
     *
     * @param inputDate
     * @returns {*|boolean}
     */
    isValidGreguranDate: function (inputDate) {
        return inputDate && new Date(inputDate) != "Invalid Date" && new Date(inputDate) != "undefined";
    },


    /**
     *
     * @param pasted
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
     * @param element
     * @returns {*}
     */
    fullHeight: function (element) {
        return $(element).height() + parseInt($(element).css("padding-top")) + parseInt($(element).css("padding-bottom")) + parseInt($(element).css("borderTopWidth")) + parseInt($(element).css("borderBottomWidth"));
    },


    /**
     *
     * @param eventName
     * @param func
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
     * @param eventName
     * @param func
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
     *
     * @param eventName
     * @returns {Class_Base}
     */
    clearEvent: function (eventName) {
        this.events[eventName] = null;
        return this;
    },


    /**
     *
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
    },

    /**
     * evenets
     */
    events: {
        init: null // e
    }
};


/**
 * @abstract
 * @type {{defaultView: string, events: {init: init, render: null}, views: {default: {render: render}}, element: {main: null}, createElementByClass: createElementByClass, render: render, tmpl: {}}}
 */
var ClassSprite = {
    defaultView: "default",
    events: {
        init: function () {
            this.render();
        },


        /**
         * render
         */
        render: null
    },


    /**
     * Views
     */
    views: {
        'default': {
            render: function () {
            }
        }
    },


    /**
     * element
     */
    element: {
        main: null// Root Element Of Sprite
    },


    /**
     *
     * @param className
     * @returns {*}
     */
    createElementByClass: function (className) {
        return this.element.find('.' + className);
    },


    /**
     *
     * @param viewName
     * @returns {*}
     */
    render: function (viewName) {
        if (!viewName) {
            viewName = 'default';
        }
        this.raiseEvent('render');
        this.view = this.views[viewName];
        return this.view.render(this);
    },
    tmpl: {}
};


var ClassCompat = {
    /**
     *
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
     * state
     */
    state: {
        year: null,
        month: null,
        date: null,
        firstWeekDayOfMonth: null,
        daysCount: null
    },


    /**
     * perisnaDigit
     */
    persianDigit: true,


    /**
     *
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
     * evenets
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
     *
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
     *
     * @returns {Class_MonthGrid}
     * @private
     */
    // TODO : must remove
    _updateState: function () {
        var self = this;
        var t = new persianDate();
        self.daysCount = t.daysInMonth(self.state.year, self.state.month);
        self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
        return this;
    },


    /**
     *
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
     *
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
     *
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
     *
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
     * goTOPrevMonth
     */
    goToPrevMonth: function () {
    },


    /**
     *
     * @param year
     */
    goToYear: function (year) {
        this.updateAs(year, this.state.month);
    },


    /**
     * applyStory
     */
    applyStory: function () {
        //this.view.applyStory(this);
    }
};


/**
 *
 * @param options
 * @returns {MonthGrid}
 * @constructs ClassMonthGrid
 */
MonthGrid = function (options) {
    // Change !!
    //this.pcal = options.parent.pcal;
    inherit(this, [ClassSprite, ViewsMonthGrid, ClassDateRange, ClassMonthGrid, options]);
    return this;
}

'use strict';
/**
 * @class ViewsMonthGrid
 * @type {{cssClass: {main: string, header: string, headerTitle: string, headerRow: string, headerRowCell: string, daysTable: string, currentMonth: string, today: string, selected: string}, views: {default: {render: render, renderDays: renderDays}}}}
 */
var ViewsMonthGrid = {
    /**
     * cssClass
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
     *  views
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
                    if (self.minDate && self.maxDate) {
                        if (thisUnix >= self.minDate && thisUnix <= self.maxDate) {
                            $(this).removeClass(self.cssClass.disbaled);
                        } else {
                            $(this).addClass(self.cssClass.disbaled);
                        }
                    } else if (self.minDate) {
                        if (thisUnix >= self.minDate) {
                            $(this).removeClass(self.cssClass.disbaled);
                        }
                    } else if (self.maxDate) {
                        if (thisUnix <= self.maxDate) {
                            $(this).removeClass(self.cssClass.disbaled);
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
 * @class ViewsDatePicker
 * @type {{cssClass: {datePickerPlotArea: string, yearView: string, monthView: string, dayView: string, timeView: string, navigator: string, toolbox: string}, container: {}, views: {default: {render: render, fixPosition: fixPosition}}}}
 */
var ViewsDatePicker = {


    /**
     * cssClass
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
     * conatiner
     */
    container: {},


    /**
     * views
     */
    views: {
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
                self._syncWithImportData(self.state.unixDate);
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
'use strict';
/**
 * @class ClassDatepicker
 * @type {{_pickers: {}, _getNextState: _getNextState, _checkNextStateAvalibility: _checkNextStateAvalibility, changeView: changeView, _flagSelfManipulate: boolean, selectTime: selectTime, selectDate: selectDate, selectMonth: selectMonth, selectYear: selectYear, _formatDigit: _formatDigit, destroy: destroy, _syncWithImportData: _syncWithImportData, _attachEvents: _attachEvents, _updateInputElement: _updateInputElement, _defineOnInitState: _defineOnInitState, events: {}, _viewed: boolean, init: init}}
 */
var ClassDatepicker = {
    /**
     *
     * @private
     */
    _pickers: {},


    /**
     * @private
     */
    events: {},


    /**
     * @private
     */
    _viewed: false,


    /**
     * @private
     */
    _inlineView: false,


    /**
     *
     * @param action
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
     *
     * @param state
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
     *
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
     * @private
     */
    _flagSelfManipulate: true,


    /**
     *
     * @param key
     * @param val
     */
    selectTime: function (key, val) {
        this.state.setTime(key, val);
        this._updateInputElement();
        this.onSelect(key, this);
    },


    /**
     *
     * @param key
     * @param unixDate
     * @returns {ClassDatepicker}
     */
    selectDate: function (key, unixDate) {
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
     *
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
     *
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
     *
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
     *
     * @returns {ClassDatepicker}
     */
    destroy: function () {
        this.inputElem.removeClass(self.cssClass);
        this.element.main.remove();
        return this;
    },


    /**
     *
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
                        self.selectDate('unix', newPersainDate.valueOf());
                    }, self.inputDelay)
                }
            }
        }
        return this;
    },


    /**
     *
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
                        self.selectDate('unix', newPersainDate.valueOf());
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
     *
     * @returns {ClassDatepicker}
     * @private
     */
    _updateInputElement: function () {
        var self = this;
        self._flagSelfManipulate = true;
        // Update Alt Field
        self.altField.val(self.altFieldFormatter(self.state.selected.unixDate));
        // Update Display Field
        self.inputElem.val(self.formatter(self.state.selected.unixDate));
        self._flagSelfManipulate = false;
        return self;
    },


    /**
     *
     * @returns {ClassDatepicker}
     * @private
     */
    _defineOnInitState: function () {
        if ($(this.$container)[0].nodeName == 'INPUT') {
            if (this.isValidGreguranDate(this.inputElem.val())) {
                this.state.unixDate = new Date(this.inputElem.val()).valueOf();
            }
            else {
                this.state.unixDate = new Date().valueOf();
            }
            this.$container = $('body');
        }
        else {
            this._inlineView = true;
        }
        this.altField = $(this.altField);
        this.state.setSelected('unix', this.state.unixDate);
        this.state.setTime('unix', this.state.unixDate);
        this.state.setView('unix', this.state.unixDate);
        return this;
    },


    /**
     *
     * @returns {ClassDatepicker}
     */
    init: function () {
        var self = this;
        this.state = new State({datepicker: self});
        this.compatConfig();
        this._defineOnInitState();
        this._updateInputElement();
        this.view = this.views['default'];
        this.view.render(this);


        this.inputElem.data("datepicker", this);
        this.inputElem.addClass(self.cssClass);
        this._attachEvents();
        return this;
    }
};

/**
 *
 * @param mainElem
 * @param options
 * @returns {*}
 * @constructs ClassDatepicker
 */
var Datepicker = function (mainElem, options) {
    return inherit(this, [ClassSprite, ClassCompat, ClassDatepicker, ClassConfig, ViewsDatePicker, options, {
        $container: mainElem,
        inputElem: $(mainElem)
    }]);
};


'use strict';
/**
 * @class
 * @type {{cssClass: {datpickerHeader: string, btnNext: string, btnSwitch: string, btnPrev: string}, relation: string, switchRelation: switchRelation, updateSwitchBtn: updateSwitchBtn, _next: _next, _prev: _prev, _switch: _switch, _render: _render, _attachEvents: _attachEvents, init: init}}
 */
var ClassNavigator = {
    enabled: true,

    /**
     * text
     */
    text: {
        btnNextText: "<",
        btnPrevText: ">"
    },

    /**
     * cssClass
     */
    cssClass: {
        datpickerHeader: "datepicker-header",
        btnNext: "btn-next",
        btnSwitch: "btn-switch",
        btnPrev: "btn-prev"
    },


    /**
     * relation
     */
    relation: "day",


    /**
     *
     * @param string
     * @returns {ClassNavigator}
     */
    switchRelation: function (string) {
        this.relation = string;
        this.onSwitch(string);
        return this;
    },


    /**
     *
     * @param val
     * @returns {ClassNavigator}
     */
    updateSwitchBtn: function (val) {
        $(this.element).children('.' + this.cssClass.btnSwitch).text(val);
        return this;
    },


    /**
     *
     * @returns {ClassNavigator}
     * @private
     */
    _next: function () {
        this.datepicker[this.relation + 'Picker'].next();
        this.onNext(this);
        return this;
    },


    /**
     *
     * @returns {ClassNavigator}
     * @private
     */
    _prev: function () {
        this.datepicker[this.relation + 'Picker'].prev();
        this.onPrev(this);
        return this;
    },

    /**
     *
     * @returns {ClassNavigator}
     * @private
     */
    _switch: function () {
        this.datepicker.changeView(this.relation, 'prev');
        return this;
    },


    /**
     *
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
     *
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
     *
     * @returns {ClassNavigator}
     */
    init: function () {
        var self = this;
        self._render();
        self._attachEvents();
        return this;
    }
};


/**
 *
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassNavigator
 */
var Navigator = function (options, container) {
    return inherit(this, [ClassSprite, ClassNavigator, options, {
        $container: container
    }]);
};

'use strict';
/**
 * @class ClassDaypicker
 * @type {{next: next, prev: prev, updateView: updateView, _updateView: _updateView, selectDay: selectDay, _updateNavigator: _updateNavigator, hide: hide, show: show, _updateSelectedDay: _updateSelectedDay, _render: _render, init: init}}
 */
var ClassDaypicker = {
    /**
     * Go to next Month-day view
     * @public
     * @returns {ClassDaypicker}
     */
    next: function () {
        var self = this;
        if (self.datepicker.state.view.month === 12) {
            self.datepicker.state.view.month = 1;
            self.datepicker.state.view.year += 1;
        } else {
            self.datepicker.state.view.month += 1;
        }
        self._updateView();
        return this;
    },


    /**
     * Go to previews Month-day view
     * @public
     * @returns {ClassDaypicker}
     */
    prev: function () {
        var self = this;
        if (self.datepicker.state.view.month === 1) {
            self.datepicker.state.view.month = 12;
            self.datepicker.state.view.year -= 1;
        } else {
            self.datepicker.state.view.month -= 1;
        }
        self._updateView();
        return this;
    },


    /**
     * Update view
     * @public
     * @returns {ClassDaypicker}
     */
    updateView: function () {
        this._updateView();
        return this;
    },


    /**
     *
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
     *
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
     * @public
     * @returns {ClassDaypicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     * @public
     * @returns {ClassDaypicker}
     */
    show: function () {
        this.container.show();
        this._updateView();
        return this;
    },


    /**
     *
     * @param unix
     * @returns {ClassDaypicker}
     * @private
     */
    _updateSelectedDay: function (unix) {
        this.mGrid.markSelectedDate(unix);
        return this;
    },


    /**
     *
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
            maxDate: self.datepicker.state.filterDate.end.unixDate

        });
        this.mGrid.attachEvent("selectDay", function (x) {
            self.datepicker.selectDate('unix', x);
            self.onSelect(x);
            self.mGrid.selectDate(self.datepicker.state.selected.unixDate);
        });
        this._updateSelectedDay(self.datepicker.state.selected.unixDate);
    },


    /**
     * @private
     * @returns {Class_Daypicker}
     */
    init: function () {
        var self = this;
        this._render();
        this._updateNavigator(self.datepicker.state.selected.year, self.datepicker.state.selected.month);
        return this;
    }
};


/**
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassDaypicker
 */
var Daypicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassDaypicker, options, {
        container: container
    }]);
};

'use strict';
/**
 * @class ClassMonthPicker
 * @type {{cssClass: {selectedMonth: string, monthItem: string}, monthRange: (ClassDateRange.monthRange|*), _updateNavigator: _updateNavigator, hide: hide, show: show, selectMonth: selectMonth, defineSelectedMonth: defineSelectedMonth, next: next, prev: prev, updateView: updateView, _render: _render, init: init}}
 */
var ClassMonthPicker = {
    /**
     * cssClass
     */
    cssClass: {
        selectedMonth: "selected",
        monthItem: "month-item",
        disbaleItem: "month-item-disable"
    },

    /**
     * monthRange
     */
    monthRange: ClassDateRange.monthRange,


    /**
     *
     * @private
     */
    _updateNavigator: function () {
        var self = this;
        self.datepicker.updateNavigator(this.titleFormatter(self.datepicker.state.view.unixDate));
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    hide: function () {
        this.container.hide();
        return this;
    },


    /**
     *
     * @returns {Class_MonthPicker}
     */
    show: function () {
        this.container.show();
        this._updateNavigator();
        this._render();
        return this;
    },


    /**
     * selectMonth
     */
    selectMonth: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
    },


    /**
     *
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
     *
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
     *
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
     *
     * @returns {Class_MonthPicker}
     */
    updateView: function () {
        this.defineSelectedMonth();
        this._updateNavigator();
        return this;
    },


    /**
     *
     * @param month
     * @returns {boolean}
     * @private
     */
    _checkMonthAccess: function (month) {
        if (this.datepicker.state._filetredDate) {
            var startYear = this.datepicker.state.filterDate.start.year;
            var endYear = this.datepicker.state.filterDate.end.year;
            var y = this.datepicker.state.view.year;
            var startMonth = this.datepicker.state.filterDate.start.month;
            var endMonth = this.datepicker.state.filterDate.end.month;
            if (startYear <= y & y <= endYear) {
                if (y === startYear && month >= startMonth && month <= endMonth) {
                    return true;
                }
                if (y === endYear && month <= endMonth && month >= startMonth) {
                    return true;
                }
                if (startYear < y & y < endYear) {
                    return true;
                }
            }else{
                return false;
            }
        }else{
            return true;
        }
    },

    /**
     *
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
                    self.datepicker.selectMonth($(this).data().monthIndex);
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
     * init
     */
    init: function () {
        this._render();
    }
};


/**
 *
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassMonthPicker
 */
var MonthPicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassMonthPicker, options, {
        container: container
    }]);
};

'use strict';
/**
 * @class ClassYearPicker
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
        } else {
            return true;
        }

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
                    self.datepicker.selectYear(y);
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
    }
};


/**
 *
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassYearPicker
 */
var YearPicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassYearPicker, options, {
        container: container
    }]);
};

'use strict';
/**
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
        self.datepicker.selectDate('unix', todayUnix);
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


/**
 *
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassToolbox
 */
var Toolbox = function (options, container) {
    return inherit(this, [ClassSprite, ClassToolbox, options, {
        $container: container
    }]);
};

'use strict';
/**
 * @class ClassTimepicker
 * @type {{showSeconds: boolean, showMeridian: boolean, minuteStep: number, cssClss: {timepicker: string}, show: show, hide: hide, _render: _render, _currentMeridian: null, convert24hTo12: convert24hTo12, convert12hTo24: convert12hTo24, _updateTime: _updateTime, _updateMeridian: _updateMeridian, _toggleMeridian: _toggleMeridian, _movehour: _movehour, _moveminute: _moveminute, _movesecond: _movesecond, _movemeridian: _movemeridian, _updateState: _updateState, _attachEvent: _attachEvent, _bootstrap: _bootstrap, init: init}}
 */
var ClassTimepicker = {
    /**
     * secondStep
     */
    secondStep: 1,


    /**
     * minuteStep
     */
    minuteStep: 1,

    /**
     * hourStep
     */
    hourStep: 1,

    /**
     * cssClass
     */
    cssClss: {
        timepicker: "viewModel"
    },


    /**
     *
     * @returns {Class_Timepicker}
     */
    show: function () {
        'use strict';
        this.container.show();
        return this;
    },


    /**
     *
     * @returns {Class_Timepicker}
     */
    hide: function () {
        'use strict';
        this.container.hide();
        return this;
    },


    /**
     *
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
     * _currentMeridian
     */
    _currentMeridian: null,


    /**
     *
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
     *
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
     *
     * @param state
     * @returns {Class_Timepicker}
     * @private
     */
    _updateTime: function (state) {
        var timeStateObject = state.selected;
        var hourArray = this.convert24hTo12(timeStateObject['hour']);
        this.hourInput.val(hourArray[0]);
        this.minuteInput.val(timeStateObject['minute']);
        this.secondInput.val(timeStateObject['second']);
        this.meridianInput.val(timeStateObject.dateObj.format('a'))
        this._currentMeridian = hourArray[1];
        this.meridianInput.attr({'data-meridian-mode': this._currentMeridian});
        return this;
    },


    /**
     *
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
        if (this.changeOnScroll) {
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
        }
        if (this.showSeconds === false) {
            $('.second', this.container).hide();
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
     * @returns {Class_Timepicker}
     */
    init: function () {
        this._render()._bootstrap()._attachEvent();
        return this;
    }
};


/**
 *
 * @param options
 * @param container
 * @returns {*}
 * @constructs ClassTimepicker
 */
var TimePicker = function (options, container) {
    return inherit(this, [ClassSprite, ClassTimepicker, options, {
        container: container
    }]);
};

'use strict';
/**
 * @class
 * @type {{view: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, selected: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, _updateSelectedUnix: _updateSelectedUnix, setTime: setTime, setSelected: setSelected, syncViewWithelected: syncViewWithelected, setView: setView}}
 */
var ClassDatepickerState = {

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
     * view
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
     * selected
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

    setFilterDate: function (key, startVal, endVal) {
        var self = this;
         if(!startVal){
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

        if(!endVal){
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
     *
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
     *
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


    /**
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
     *
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


/**
 * @param options
 * @returns {*}
 * @constructs ClassDatepickerState
 */
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