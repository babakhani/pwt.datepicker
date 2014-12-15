/*
 // Jquery Persian Datepicker
 // Copyright 2011, Software Freedom Conservancy, Inc.
 // Dual licensed under the MIT or GPL Version 2 licenses.
 // babakhani.reza@gmail.com
 // babakhani.github.io/PersianWebToolkit
 // Beta Version 0.2.3
 // Dependency :  Jquery.js , persian-date.js
 */

var Class_pDatepicker = {
    _updateView: function () {
        this.dayPickerView.updateView();
        this.monthPickerView.updateView();
        this.yearPickerView.updateView();
    },
    updateAllViews: function () {
        var self = this;
        self.dayPicker.updateView();
        self.monthPicker.updateView();
        self.yearPicker.updateView();
        return self;
    },
    changeView: function (viewName) {
        var self = this;
        self.navigator.switchRelation(viewName);
        switch (viewName) {
            case ('month'):
                self.yearPicker.hide();
                self.monthPicker.show();
                self.dayPicker.hide();
                break;
            case ('year'):
                self.yearPicker.show();
                self.monthPicker.hide();
                self.dayPicker.hide();
                break;
            case ('day'):
                self.yearPicker.hide();
                self.monthPicker.hide();
                self.dayPicker.show();
                break;
        }
        return this;
    },
    _flagSelfManipulate: true,
    selectDate: function (key, unixDate) {
        var self = this;
        self.state.setSelected('unix', unixDate);
        this.state.syncViewWithelected();
        self.dayPicker.selectDay();
        self._updateInputElement();
        //self.onSelect(unixDate, this);
        if (self.autoClose) {
            self.element.main.hide();
        }
        return this;
    },
    selectMonth: function (monthNum) {
        var self = this;
        self.state.setView('month', monthNum);
        self.dayPicker.updateView();
        self.changeView('day');
        return this;
    },
    selectYear:function(yearNum){
        var self = this;
        self.state.setView('year', yearNum);
        self.changeView('month');
        return this;
    },
    _formatDigit: function (digit) {
        if (this.persianDigit && digit)
            return digit.toString().toPersianDigit();
        else
            return digit;
    },
    // Removes the datepicker functionality completely.
    destroy: function () {
        this.inputElem.removeClass(self.cssClass);
        this.element.main.remove();
        return this;
    },
    // Handle Pasted Data
    _syncWithImportData: function (pasted) {
        var self = this;
        if (jQuery.isNumeric(pasted)) {
            var newPersainDate = new persianDate(pasted);
            self.state.setSelected('unix',newPersainDate);
            self._updateInputElement();
        } else {
            var persianDateArray = self.validatePersianDateString(pasted);
            if (persianDateArray != null) {
                delay(function () {
                    var newPersainDate = new persianDate(persianDateArray);
                    self.state.setSelected('unix',newPersainDate);
                    self._updateInputElement();

                }, self.inputDelay)
            }
        }
        return this;
    },
    attachEvents: function () {
        var self = this;
        $(window).resize(function () {
            self.view.fixPosition(self);
        });
        if (self.observer) {
            /////////////////   Manipulate by Copy And paste
            self.inputElem.bind('paste', function (e) {
                delay(function () {
                    self._syncWithImportData(e.target.value)
                }, 60);
            });
            /////////////////   Manipulate by alt changes
            $(self.altField).bind("textchange", function () {
                if (!self._flagSelfManipulate) {
                    var newDate = new Date($(this).val());
                    if (newDate != "Invalid Date") {
                        var newPersainDate = new persianDate(newDate);
                        self.selectDate("unix", newPersainDate.valueOf());
                    }
                }
            });
            /////////////////   Manipulate by keyboard
            var ctrlDown = false;
            var ctrlKey = [17, 91], vKey = 86, cKey = 67;
            $(document).keydown(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0)
                    ctrlDown = true;
            }).keyup(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0)
                    ctrlDown = false;
            });
            self.inputElem.bind("keyup", function (e) {
                var $self = $(this);
                if (!self._flagSelfManipulate) {
                    var trueKey = false;
                    if (e.keyCode == 8 || e.keyCode < 105 && e.keyCode > 96 || e.keyCode < 58 && e.keyCode > 47 || (ctrlDown && (e.keyCode == vKey || $.inArray(e.keyCode, ctrlKey) > 0  ))) {
                        trueKey = true;
                    }
                    if (trueKey) {
                        self._syncWithImportData($self.val());
                    }
                }
            });
        }
        return this;
    },
    // Update Input elements
    _updateInputElement: function () {
        var self = this;
        self._flagSelfManipulate = true;
        // Update Alt Field
        $(self.altField).val(self.altFieldFormatter(self.state.selected.unixDate));
        // Update Display Field
        self.inputElem.val(self.formatter(self.state.selected.unixDate));
        self._flagSelfManipulate = false;
        return self;
    },
    // one time run single Run
    _defineOnInitState: function () {
        if (this.isValidGreguranDate(this.inputElem.val())) {
            this.state.unixDate = new Date(this.inputElem.val()).valueOf();
        }
        else {
            this.state.unixDate = new Date().valueOf();
        }
        this.state.setSelected('unix', this.state.unixDate);
        this.state.setView('unix', this.state.unixDate);
        return this;
    },
    init: function () {
        var self = this;
        this.state = new State({datepicker: self});
        this._defineOnInitState();
        this._updateInputElement();
        this.view = this.views['default'];
        this.view.render(this);
        this.inputElem.data("datepicker", this);
        this.inputElem.addClass(self.cssClass);
        this.attachEvents();
        return this;
    }
};
var Datepicker = function (mainElem, options) {
    return inherit(this, [Class_Sprite, Class_pDatepicker, Class_DatepickerConfig, Views_pDatePicker, options, {
        inputElem: $(mainElem),
        inputAltElem: $(options.altField)
    }]);
};

