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
    state: {
        unixDate: null,
        selectedYear: 0,
        selectedMonth: 0,
        selectedDay: 0,
        viewYear: 0,
        viewMonth: 0,
        viewDay: 0
    },
    // Update Every Thing This Update All State
    _updateStateFromUnixDate: function (unixDate) {
        var pd = new persianDate(this.state.unixDate);
        this.state.year = pd.year();
        this.state.month = pd.month();
        this.state.day = pd.date();
        return this;
    },
    _updateStateUnixDate: function () {
        var self = this;
        this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
    },
    _updateView: function () {
        this.dayPickerView.updateView();
        this.monthPickerView.updateView();
        this.yearPickerView.updateView();
    },
    updateAllViews: function () {
        var self = this;
        self.dayPicker.updateView();
        self.monthPicker.updateView();
        //self.yearPicker.updateView();
        return self;
    },
    changeView: function (viewName) {
        var self = this;
        self.navigator.switchRelation(viewName);
        switch (viewName) {
            case ('month'):
                self.container.yearView.hide();
                self.container.dayView.hide();
                self.container.monthView.show();
                break;
            case ('year'):
                self.container.dayView.hide();
                self.container.monthView.hide();
                self.container.yearView.show();
                break;
            case ('day'):
                self.container.yearView.hide();
                self.container.monthView.hide();
                self.container.dayView.show();
                break;
        }
        return this;
    },
    updateState: function (key, val, updateDisplayInput) {
        this._updateState(key, val, updateDisplayInput);
        return this;
    },
    _updateState: function (key, val, updateDisplayInput) {
        var self = this;
        if (key == "year") {
            this.state.selectedYear = val;
            this._updateStateUnixDate();
        } else if (key == "unix") {
            this.state.unixDate = val;
            self._updateStateFromUnixDate(this.state.unixDate);
        } else if (key = "month") {
            this.state.selectedMonth = val;
            this._updateStateUnixDate();
        }
        this._syncViewStateWidthSelected();
        //this._updateView();
        if (updateDisplayInput == true) {
            self._updateInputElement();
        }
        return this;
    },
    _syncWithImportData: function (pasted) {
        var self = this;
        if (jQuery.isNumeric(pasted)) {
            var newPersainDate = new persianDate(pasted);
            self._updateState("unix", newPersainDate.valueOf(), true);
        } else {
            var persianDateArray = self.validatePersianDateString(pasted);
            if (persianDateArray != null) {
                delay(function () {
                    var newPersainDate = new persianDate(persianDateArray);
                    self._updateState("unix", newPersainDate.valueOf(), true);
                }, self.inputDelay)
            }
        }
        return this;
    },
    _flagSelfManipulate: true,
    _selectDate: function (key, unixDate) {
        var self = this;
        self._updateState("unix", unixDate, true);
        self.onSelect(unixDate, this);
        if (self.autoClose) {
            self.element.main.hide();
        }
        return this;
    },
    _formatDigit: function (digit) {
        if (this.persianDigit)
            return digit.toString().toPersianDigit();
        else
            return digit;
    },
    _syncViewStateWidthSelected: function () {
        var pd = new persianDate(this.state.unixDate);
        this.state.selectedYear = this.state.viewYear = pd.year();
        this.state.selectedMonth = this.state.viewMonth = pd.month();
        this.state.selectedDay = this.state.viewDay = pd.date();
        return this;
    },
    // Removes the datepicker functionality completely.
    destroy: function () {
        this.inputElem.removeCla_syncWithImportData
        s(self.cssClass);
        this.element.main.remove();
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
                        self._updateState("unix", newPersainDate.valueOf(), true);
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
        $(self.altField).val(self.altFieldFormatter(self.state.unixDate));
        // Update Display Field
        self.inputElem.val(self.formatter(self.state.unixDate));
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
        this._updateStateFromUnixDate(this.state.unixDate);
        return this;
    },
    init: function () {
        var self = this;
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

