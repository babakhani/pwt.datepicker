'use strict';
/**
 * @class ClassToolbox
 * @type {{cssClass: {btnToday: string}, _goToday: _goToday, _render: _render, init: init}}
 */
var ClassToolbox = {
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
        self.datepicker.selectDate('unix',todayUnix);
    },


    /**
     *
     * @returns {Class_Toolbox}
     * @private
     */
    _render: function () {
        var self = this;
        $("<div>امروز</div>").addClass(self.cssClass.btnToday).click(function () {
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
