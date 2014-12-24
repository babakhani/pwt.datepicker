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


var Toolbox = function (options, container) {
    return inherit(this, [ClassSprite, ClassToolbox, options, {
        $container: container
    }]);
};
