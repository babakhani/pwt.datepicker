/**
 *
 * @type {{cssClass: {btnToday: string}, _goToday: _goToday, _render: _render, init: init}}
 */
var Class_Toolbox = {
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
 * @constructor
 */
var Toolbox = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Toolbox, options, {
        $container: container
    }]);
};
