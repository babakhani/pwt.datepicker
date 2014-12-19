'use strict';
/**
 * @class ClassDatepicker
 * @type {{_pickers: {}, _getNextState: _getNextState, _checkNextStateAvalibility: _checkNextStateAvalibility, changeView: changeView, _flagSelfManipulate: boolean, selectTime: selectTime, selectDate: selectDate, selectMonth: selectMonth, selectYear: selectYear, _formatDigit: _formatDigit, destroy: destroy, _syncWithImportData: _syncWithImportData, _attachEvents: _attachEvents, _updateInputElement: _updateInputElement, _defineOnInitState: _defineOnInitState, events: {}, _viewed: boolean, init: init}}
 */
var ClassDatepicker = {
    /**
     *
     * @private
     */
    _pickers: {},


    /**
     *
     * @param action
     * @returns {*}
     * @private
     */
    _getNextState: function (action) {
        var currentState = this.currentView;
        var nextState = this.currentView;
        if (action === 'next') {
            if (currentState === 'month' && this.dayPicker) {
                nextState = 'day';
            }
            if (currentState === 'year') {
                if (this.monthPicker) {
                    nextState = 'month';
                } else {
                    if (this.dayPicker) {
                        nextState = 'day';
                    }
                }
            }
        }
        else if (action === 'prev') {
            if (currentState === 'month' && this.yearPicker) {
                nextState = 'year';
            }
            if (currentState === 'day') {
                if (this.monthPicker) {
                    nextState = 'month';
                } else {
                    if (this.yearPicker) {
                        nextState = 'year';
                    }
                }
            }
        }
        return this._checkNextStateAvalibility(nextState);
    },


    /**
     *
     * @param state
     * @returns {*}
     * @private
     */
    _checkNextStateAvalibility: function (state) {
        if (!this._pickers[state]) {
            this.element.main.hide();
            $.error(state + "Picker Set as {enabled:false} and dos not exist!! Set viewMode to Enabled view Check Configuration");
        }
        return state;
    },


    /**
     * @param switchStr
     * @public
     * @returns {ClassDatepicker}
     */
    updateNavigator: function (switchStr) {
        if (this.navigator) {
            this.navigator.updateSwitchBtn(this._formatDigit(switchStr));
        }
        return this;
    },


    /**
     * @param switchStr
     * @public
     * @returns {ClassDatepicker}
     */
    switchNavigatorRelation: function (newState) {
        if (this.navigator) {
            this.navigator.switchRelation(newState);
        }
        return this;
    },


    /**
     *
     * @param state
     * @param action
     * @returns {ClassDatepicker}
     */
    changeView: function (state, action) {
        var self = this;
        var newState;
        if (!action) {
            newState = this._checkNextStateAvalibility(state);
        } else {
            newState = this._getNextState(action);
        }
        self.publishInDic(self._pickers, 'hide');
        self._pickers[newState].show();
        self.switchNavigatorRelation(newState);
        self.currentView = newState;
        return this;
    },


    /**
     * @private
     */
    _flagSelfManipulate: true,


    /**
     *
     * @param key
     * @param val
     */
    selectTime: function (key, val) {
        this.state.setTime(key, val);
        this._updateInputElement();
        this.onSelect(key, this);
    },


    /**
     *
     * @param key
     * @param unixDate
     * @returns {ClassDatepicker}
     */
    selectDate: function (key, unixDate) {
        var self = this;
        self.state.setSelected('unix', unixDate);
        this.state.syncViewWithelected();
        switch (self.currentView) {
            case ('month'):
                self.monthPicker.selectMonth();
                break;
            case ('year'):
                self.yearPicker.selectYear();
                break;
            case ('day'):
                self.dayPicker.selectDay();
                break;
        }
        self._updateInputElement();
        self.onSelect(unixDate, this);
        if (self.autoClose) {
            self.element.main.hide();
        }
        return this;
    },


    /**
     *
     * @param monthNum
     * @returns {ClassDatepicker}
     */
    selectMonth: function (monthNum) {
        var self = this;
        self.state.setSelected('month', monthNum);
        self.state.setSelected('year', self.state.view.year);
        self.state.syncViewWithelected();
        self._updateInputElement();
        self.changeView(self.currentView, 'next');
        return this;
    },


    /**
     *
     * @param yearNum
     * @returns {ClassDatepicker}
     */
    selectYear: function (yearNum) {
        var self = this;
        self.state.setSelected('year', yearNum);
        self.state.syncViewWithelected();
        self._updateInputElement();
        self.changeView(self.currentView, 'next');
        return this;
    },


    /**
     *
     * @param digit
     * @returns {*}
     * @private
     */
    _formatDigit: function (digit) {
        if (this.persianDigit && digit) {
            return digit.toString().toPersianDigit();
        }
        else {
            return digit;
        }
    },


    /**
     *
     * @returns {ClassDatepicker}
     */
    destroy: function () {
        this.inputElem.removeClass(self.cssClass);
        this.element.main.remove();
        return this;
    },


    /**
     *
     * @param pasted
     * @returns {ClassDatepicker}
     * @private
     */
    _syncWithImportData: function (pasted) {
        var self = this;
        if (jQuery.isNumeric(pasted)) {
            var newPersainDate = new persianDate(pasted);
            self.state.setSelected('unix', newPersainDate);
            self._updateInputElement();
        } else {
            var persianDateArray = self.validatePersianDateString(pasted);
            if (persianDateArray != null) {
                delay(function () {
                    var newPersainDate = new persianDate(persianDateArray);
                    self.selectDate('unix', newPersainDate.valueOf());
                }, self.inputDelay)
            }
        }
        return this;
    },


    /**
     *
     * @returns {ClassDatepicker}
     * @private
     */
    _attachEvents: function () {
        var self = this;
        $(window).resize(function () {
            self.view.fixPosition(self);
        });
        if (self.observer) {
            /////////////////   Manipulate by Copy And paste
            self.inputElem.bind('paste', function (e) {
                delay(function () {
                    self._syncWithImportData(e.target.value);
                }, 60);
            });
            /////////////////   Manipulate by alt changes
            $(self.altField).bind("change", function () {
                if (!self._flagSelfManipulate) {
                    var newDate = new Date($(this).val());
                    if (newDate !== "Invalid Date") {
                        var newPersainDate = new persianDate(newDate);
                        self.selectDate('unix', newPersainDate.valueOf());
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
                    if (e.keyCode === 8 || e.keyCode < 105 && e.keyCode > 96 || e.keyCode < 58 && e.keyCode > 47 || (ctrlDown && (e.keyCode == vKey || $.inArray(e.keyCode, ctrlKey) > 0  ))) {
                        trueKey = true;
                    }
                    if (trueKey) {
                        self._syncWithImportData($self.val());
                    }
                }
            });
        }

        self.inputElem.focus(function () {
            self.show();
        });
        self.inputElem.click(function (e) {
            e.stopPropagation();
            return false;
        });
        self.inputElem.blur(function () {
            if (!$.browser.msie) {
                self.hide();
            }
        });
        $(document).click(function () {
            self.inputElem.blur();
            self.hide();
        });
        $(self.element.main).mousedown(function (e) {
            e.stopPropagation();
            return false;
        });
        return this;
    },


    /**
     *
     * @returns {ClassDatepicker}
     * @private
     */
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


    /**
     *
     * @returns {ClassDatepicker}
     * @private
     */
    _defineOnInitState: function () {
        if (this.isValidGreguranDate(this.inputElem.val())) {
            this.state.unixDate = new Date(this.inputElem.val()).valueOf();
        }
        else {
            this.state.unixDate = new Date().valueOf();
        }
        this.state.setSelected('unix', this.state.unixDate);
        this.state.setTime('unix', this.state.unixDate);
        this.state.setView('unix', this.state.unixDate);
        return this;
    },


    /**
     * @private
     */
    events: {},


    /**
     * @private
     */
    _viewed: false,


    /**
     *
     * @returns {ClassDatepicker}
     */
    init: function () {
        var self = this;
        this.state = new State({datepicker: self});
        this._defineOnInitState();
        this._updateInputElement();
        this.view = this.views['default'];
        this.view.render(this);
        this.inputElem.data("datepicker", this);
        this.inputElem.addClass(self.cssClass);
        this._attachEvents();
        return this;
    }
};

/**
 *
 * @param mainElem
 * @param options
 * @returns {*}
 * @constructs ClassDatepicker
 */
var Datepicker = function (mainElem, options) {
    return inherit(this, [ClassSprite, ClassDatepicker, ClassConfig, ViewsDatePicker, options, {
        inputElem: $(mainElem),
        inputAltElem: $(options.altField)
    }]);
};

