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
