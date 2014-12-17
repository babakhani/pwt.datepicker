var Class_Base = {
    init: function () {
        this.isInstance = true;
        this.raiseEvent('init');
    },
    isSameDay: function (unix1, unix2) {

//        log(pDate(unix1).format("YYYY-MM-DD")+" == "+pDate(unix2).format("YYYY-MM-DD"))
        var d1 = new pDate(unix1);
        var d2 = new pDate(unix2);
//        log(d1.year())
//        log(d1.month())
//        log(d1.date())
//        log(d2.year())
//        log(d2.month())
//        log(d2.date())
//        log(d1 && d2 &&
//            d1.year() == d2.year() &&
//            d1.month() == d2.month() &&
//            d1.date() == d2.date())
        return d1 && d2 &&
            d1.year() == d2.year() &&
            d1.month() == d2.month() &&
            d1.date() == d2.date();
    },
    isValidGreguranDate: function (inputDate) {
        return inputDate && new Date(inputDate) != "Invalid Date" && new Date(inputDate) != "undefined";
    },
    validatePersianDateString: function (pasted) {
        var newDate = new Date(pasted);
        var inputArray = pasted.split("/");
        if (inputArray.length == 3) {
            var trueYear = inputArray[0].toString().length <= 4 && inputArray[0].toString().length >= 1;
            var trueMonth = inputArray[1].toString().length <= 2 && inputArray[1].toString().length >= 1;
            var trueDay = inputArray[2].toString().length <= 2 && inputArray[2].toString().length >= 1;
        }
        $.each(inputArray, function (index, key) {
            inputArray[index] = parseInt(key);
        });
        if (trueYear && trueMonth && trueDay && newDate != "Invalid Date") {
            return inputArray;
        } else {
            return null;
        }
    },
    fullHeight: function (element) {
        return $(element).height() + parseInt($(element).css("padding-top")) + parseInt($(element).css("padding-bottom")) + parseInt($(element).css("borderTopWidth")) + parseInt($(element).css("borderBottomWidth"));
    },
    // Event Management
    attachEvent: function (eventName, func) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        for (f in this.events[eventName]) {
            if (this.events[eventName][f].toString() == func.toString()) {
                $.error("The function {0} was already added to event's chain.".format(func.toString));
            }
        }
        this.events[eventName].push(func)
        return this;
    },
    dettachEvent: function (eventName, func) {
        if (!this.events[eventName]) {
            $.error("The event's chain is empty.");
        }
        for (f in this.events[eventName]) {
            if (this.events[eventName][f].toString() == func.toString()) {
                delete this.events[eventName][f];
            }
        }
        return this;
    },
    clearEvent: function (eventName) {
        this.events[eventName] = null;
        return this;
    },
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
        } else if (typeof currentObject == 'function') {
            currentObject.apply(this, args);
        } else {
            for (e in currentObject) {
                currentObject[e].apply(this, args);
            }
        }
        return this;
    },
    events: {
        init: null // e
    }
};
var Class_Sprite = {
    defaultView: "default",
    // Views Interfcae
    events: {
        init: function () {
            this.render();
        },
        render: null
    },
    views: {
        'default': {
            render: function () {
            }
        }
    },
    element: {
        main: null// Root Element Of Sprite
    },
    createElementByClass: function (className) {
        return this.element.find('.' + className);
    },
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
var Class_DateRange = {
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
    persianDaysName: ["اورمزد", "بهمن", "اوردیبهشت", "شهریور", "سپندارمذ", "خورداد", "امرداد", "دی به آذز", "آذز", "آبان", "خورشید", "ماه", "تیر", "گوش", "دی به مهر", "مهر", "سروش", "رشن", "فروردین", "بهرام", "رام", "باد", "دی به دین", "دین", "ارد", "اشتاد", "آسمان", "زامیاد", "مانتره سپند", "انارام", "زیادی"]
}


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

// Don't clobber any existing jQuery.browser in case it's different
if (!jQuery.browser) {
    matched = jQuery.uaMatch(window.navigator.userAgent);
    browser = {};

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