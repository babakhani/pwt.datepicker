'use strict';
/**
 * @desc usen in {@link ClassDatepicker}
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
