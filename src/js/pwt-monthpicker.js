var Class_MonthPicker = {
    events: {
        select: function () {
        }
    },
    updateNavigatorSwitchBtn: function () {
    },
    next: function () {

    },
    prev: function () {

    },
    updateView: function () {
    },
    init: function () {

    }
};
var MonthPicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_MonthPicker, options, {
        container: container
    }]);
};
