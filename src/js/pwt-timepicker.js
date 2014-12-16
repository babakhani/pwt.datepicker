var Class_Timepicker = {
    cssClss: {
        timepicker: "viewModel"
    },
    next: function () {
        var self = this;

        return this;
    },
    prev: function () {
        var self = this;

        self._updateView();
        return this;
    },
    updateView: function () {
        this._updateView();
    },
    _updateView: function () {
        var self = this;
        return this;
    },
    selectDay: function () {
        var self = this;
        return this;
    },
    hide: function () {
        return this;
    },
    show: function () {
        var self = this;
        return this;
    },
    _render: function () {
        var self = this;
        var viewModel = {
            css: self.cssClass
        };
        $.tmplMustache(TEMPLATE.timepicker,viewModel).appendTo(this.container);
        return this;
    },
    init: function () {
        var self = this;
        this._render();
        return this;
    }
};
var TimePicker = function (options, container) {
    return inherit(this, [Class_Sprite, Class_Timepicker, options, {
        container: container
    }]);
};
