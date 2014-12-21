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

