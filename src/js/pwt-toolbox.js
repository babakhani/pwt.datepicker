var Class_Toolbox = {
    cssClass: {
        btnToday: "btn-today"
    },
    init: function () {
        var self = this;
        var todayUnix = new Date().valueOf();
        $("<div>امروز</div>").addClass(self.cssClass.btnToday).click(function () {
            self._updateState("unix", todayUnix, true);
            self.view.updateAllViews(self);
            return false;
        }).appendTo(this.$container);
        return this;
    }
};
var Toolbox = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Toolbox, options, {
        $container: container
    }]);
};
