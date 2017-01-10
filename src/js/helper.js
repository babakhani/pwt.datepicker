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
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!a && a === true) ? 1584 : 1728)));
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
            peDigitArr.push(String.fromCharCode(enDigitArr[j] - ((!!a && a === true) ? 1584 : 1728)));
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
    };
    var args = [true, self, copyObject(ClassBase)];
    var events = [];
    for (var index in baseClasses) {
        var cls = copyObject(baseClasses[index]);
        if (!cls) {
            continue;
        }
        if (cls.events && Object.keys(cls.events).length > 0) {
            events.push(cls.events);
        }
        cls.events = {};
        args.push(cls);
    }
    $.extend.apply(self, args);
    for (var eventIndex in events) {
        var eventsObject = events[eventIndex];
        var eventKeys = Object.keys(eventsObject);
        for (var keyIndex in eventKeys) {
            var key = eventKeys[keyIndex];
            var val = eventsObject[key];
            if (key && val) {
                self.attachEvent(key, val);
            }
        }
    }
    self.init();
    return self;
};


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
        browser: match[1] || "",
        version: match[2] || "0"
    };
};


// cDon't clobber any existing jQuery.browser in case it's different
if (!jQuery.browser) {
    var matched = jQuery.uaMatch(window.navigator.userAgent);
    var browser = {};

    if (matched.browser) {
        browser[matched.browser] = true;
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