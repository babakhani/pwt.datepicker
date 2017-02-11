/**
 * @desc normal log
 * @param input
 */
const log = function (input) {
    console.log(input);
};

/**
 * @desc show debug messages if window.persianDatepickerDebug set as true
 * @param elem
 * @param input
 */
const debug = function (elem, input) {
    if (window.persianDatepickerDebug) {
        if (elem.constructor.name) {
            console.log('Debug: ' + elem.constructor.name + ' : ' + input);
        } else {
            console.log('Debug: ' + input);
        }

    }
};

/**
 * @type {{monthRange: [*], weekRange: {0: {name: {fa: string}, abbr: {fa: string}}, 1: {name: {fa: string}, abbr: {fa: string}}, 2: {name: {fa: string}, abbr: {fa: string}}, 3: {name: {fa: string}, abbr: {fa: string}}, 4: {name: {fa: string}, abbr: {fa: string}}, 5: {name: {fa: string}, abbr: {fa: string}}, 6: {name: {fa: string}, abbr: {fa: string}}}, persianDaysName: [*]}}
 */
const ClassDateRange = {
    /**
     * @property monthRange
     */
    monthRange: [
        {
            index: 1,
            name: {
                fa: "فروردین"
            },
            abbr: {
                fa: "فرو"
            }
        },
        {
            index: 2,
            name: {
                fa: "اردیبهشت"
            },
            abbr: {
                fa: "ارد"
            }
        },
        {
            index: 3,
            name: {
                fa: "خرداد"
            },
            abbr: {
                fa: "خرد"
            }
        },
        {
            index: 4,
            name: {
                fa: "تیر"
            },
            abbr: {
                fa: "تیر"
            }
        },
        {
            index: 5,
            name: {
                fa: "مرداد"
            },
            abbr: {
                fa: "مرد"
            }
        },
        {
            index: 6,
            name: {
                fa: "شهریور"
            },
            abbr: {
                fa: "شهر"
            }
        },
        {
            index: 7,
            name: {
                fa: "مهر"
            },
            abbr: {
                fa: "مهر"
            }
        },
        {
            index: 8,
            name: {
                fa: "آبان"
            },
            abbr: {
                fa: "آبا"
            }

        },
        {
            index: 9,
            name: {
                fa: "آذر"
            },
            abbr: {
                fa: "آذر"
            }
        },
        {
            index: 10,
            name: {
                fa: "دی"
            },
            abbr: {
                fa: "دی"
            }
        },
        {
            index: 11,
            name: {
                fa: "بهمن"
            },
            abbr: {
                fa: "بهم"
            }
        },
        {
            index: 12,
            name: {
                fa: "اسفند"
            },
            abbr: {
                fa: "اسف"
            }
        }
    ],


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
        }, 5: {
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
