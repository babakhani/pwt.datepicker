/**
 *
 * @type {{cssClass: {datpickerHeader: string, btnNext: string, btnSwitch: string, btnPrev: string}, relation: string, switchRelation: switchRelation, updateSwitchBtn: updateSwitchBtn, _next: _next, _prev: _prev, _switch: _switch, _render: _render, _attachEvents: _attachEvents, init: init}}
 */
var Class_Navigator = {
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
     * @returns {Class_Navigator}
     */
    switchRelation: function (string) {
        this.relation = string;
        return this;
    },


    /**
     *
     * @param val
     * @returns {Class_Navigator}
     */
    updateSwitchBtn: function (val) {
        $(this.element).children('.' + this.cssClass.btnSwitch).text(val);
        return this;
    },


    /**
     *
     * @returns {Class_Navigator}
     * @private
     */
    _next: function () {
        this.datepicker[this.relation + 'Picker'].next();
        return this;
    },


    /**
     *
     * @returns {Class_Navigator}
     * @private
     */
    _prev: function () {
        this.datepicker[this.relation + 'Picker'].prev();
        return this;
    },


    /**
     *
     * @returns {Class_Navigator}
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
        self.view_data = {
            css: self.cssClass,
            btnNextText: "<",
            btnPrevText: ">"
        };
        self.element = $.tmplMustache(TEMPLATE.navigator, self.view_data).appendTo(self.$container);
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
     * @returns {Class_Navigator}
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
 * @constructor
 */
var Navigator = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Navigator, options, {
        $container: container
    }]);
};
