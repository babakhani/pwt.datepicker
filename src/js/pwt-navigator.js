var Class_Navigator = {
    cssClass: {
        datpickerHeader: "datepicker-header",
        btnNext: "btn-next",
        btnSwitch: "btn-switch",
        btnPrev: "btn-prev"
    },
    relation: "day",
    switchRelation: function (string) {
        this.relation = string;
        return this;
    },
    updateSwitchBtn: function (val) {
        var self = this;
        $(this.element).children('.' + this.cssClass.btnSwitch).text(val);
        return this;
    },
    _next: function () {
        this.datepicker[this.relation+'Picker'].next();
        return this;
    },
    _prev: function () {
        this.datepicker[this.relation+'Picker'].prev();
        return this;
    },
    _switch: function () {
        console.log("navigator _switch");
    },
    _render: function () {
        var self = this;
        self.view_data = {
            css: self.cssClass,
            btnNextText: "<",
            btnPrevText: ">"
        };
        self.element = $.tmplMustache(TEMPLATE.navigator, self.view_data).appendTo(self.$container);
    },
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
    init: function () {
        var self = this;
        self._render();
        self._attachEvents();
        return this;
    }
};
var Navigator = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Navigator, options, {
        $container: container
    }]);
};
