/**
 * @class ClassDatepicker
 * @type {{_pickers: {}, _getNextState: _getNextState, _checkNextStateAvalibility: _checkNextStateAvalibility, changeView: changeView, _flagSelfManipulate: boolean, selectTime: selectTime, selectDate: selectDate, selectMonth: selectMonth, selectYear: selectYear, _formatDigit: _formatDigit, destroy: destroy, _syncWithImportData: _syncWithImportData, _attachEvents: _attachEvents, _updateInputElement: _updateInputElement, _defineOnInitState: _defineOnInitState, events: {}, _viewed: boolean, init: init}}
 */
var ClassDatepicker = {
    /**
     *
     * @desc list of picker obejcts like dayPicker,monthPicker,yearPicker
     * @private
     */
    _pickers: {},


    /**
     * @desc save current visibility state of plugin
     * @private
     */
    _viewed: false,


    /**
     * @desc if plugin selector detect as a div or any element exsept inpout set as true
     * @private
     */
    _inlineView: false,


    /**
     * @desc define next state of {@link ClassDatepicker._pickers}
     * @param {string} action . Acceptable Value : 'day','month',year
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
     * @desc check next state is available in {@link ClassDatepicker._pickers}
     * @param {string} state Accepptable Value: 'day','month','year'
     * @returns {*}
     * @private
     */
    _checkNextStateAvalibility: function (state) {
        if (!this._pickers[state]) {
            this.element.main.hide();
            return false;
            $.error(state + "Picker Set as {enabled:false} and dos not exist!! Set viewMode to Enabled view Check Configuration");
        }
        return state;
    },


    /**
     * @desc update {@link ClassNavigator} object switch text
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
     * @desc update {@link ClassNavigator} relaion state
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
     * @desc change {@link _pickers} visibility
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
        if (newState) {
            self.publishInDic(self._pickers, 'hide');
            self._pickers[newState].show();
            self.switchNavigatorRelation(newState);
            self.currentView = newState;
        }
        return this;
    },


    /**
     * @desc used in {@link ClassDatepicker._attachEvents}
     * @private
     */
    _flagSelfManipulate: true,


    /**
     * @desc only called by {@link ClassTimepicker}
     * @param key
     * @param val
     * @event
     */
    selectTime: function (key, val) {
        this.state.setTime(key, val);
        this._updateInputElement();
        this.onSelect(key, this);
    },


    /**
     * @desc only called by {@link ClassDaypicker}
     * @param key
     * @param unixDate
     * @returns {ClassDatepicker}
     * @event
     */
    selectDate: function (unixDate) {
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
     * @desc only called by {@link ClassDaypicker}
     * @param key
     * @param unixDate
     * @returns {ClassDatepicker}
     * @event
     */
    selectDateTime: function (unixDate) {
        var self = this;
        self.state.setSelectedDateTime('unix', unixDate);
        this.state.syncViewWithelected();
        switch (self.currentView) {
            case ('month'):
                self.monthPicker.selectMonth();
                break
            case ('year'):
                self.yearPicker.selectYear();
                break
            case ('day'):
                self.dayPicker.selectDay();
                break
        }
        self._updateInputElement();
        self.onSelect(unixDate, this);
        if (self.autoClose) {
            self.element.main.hide();
        }
        return this;
    },


    /**
     * @desc only called by {@link ClassMonthPicker}
     * @param monthNum
     * @returns {ClassDatepicker}
     */
    selectMonth: function (monthNum) {
        var self = this;
        if (this.justSelectOnDate) {
            self.state.setView('month', monthNum);
        } else {
            self.state.setSelected('month', monthNum);
            self.state.setSelected('year', self.state.view.year);
            self.state.syncViewWithelected();
        }
        self._updateInputElement();
        self.changeView(self.currentView, 'next');
        return this;
    },


    /**
     * @desc only called by {@link ClassYearPicker}
     * @param yearNum
     * @returns {ClassDatepicker}
     */
    selectYear: function (yearNum) {
        var self = this;
        if (this.justSelectOnDate) {
            self.state.setView('year', yearNum);
        } else {
            self.state.setSelected('year', yearNum);
            self.state.syncViewWithelected();
        }
        self._updateInputElement();
        self.changeView(self.currentView, 'next');
        return this;
    },


    /**
     * @desc check {@link ClassDatepicker.persianDigit} and if set true all digit convert to persian
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
     * @desc use in {@link ClassDatepicker._attachEvents}
     * @param pasted
     * @returns {ClassDatepicker}
     * @private
     */
    _syncWithImportData: function (pasted) {
        if (pasted) {
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
                        self.selectDate(newPersainDate.valueOf());
                    }, self.inputDelay)
                }
            }
        }
        return this;
    },


    /**
     * @desc  Attach all dom events to rendered element.
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
                        self.selectDate(newPersainDate.valueOf());
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
        $(document).not(".datepicker-plot-area,.datepicker-plot-area > *").click(function (e) {
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
     * @desc update input and altField input elemet value
     * @returns {ClassDatepicker}
     * @private
     */
    _updateInputElement: function () {
        var self = this;
        self._flagSelfManipulate = true;
        // Update Alt Field
        self.altField.val(self.altFieldFormatter(self.state.selected.unixDate)).trigger('change');
        ;
        // Update Display Field
        self.inputElem.val(self.formatter(self.state.selected.unixDate)).trigger('change');
        ;
        self._flagSelfManipulate = false;
        return self;
    },


    /**
     * @desc bootstrap method of {@link ClassDatepicker}
     * @returns {ClassDatepicker}
     * @private
     */
    _defineOnInitState: function () {
        if ($(this.$container)[0].nodeName == 'INPUT') {
            var garegurianDate = new Date(this.inputElem.val()).valueOf();
            this.$container = $('body');
        }
        else {
            var garegurianDate = new Date($(this.$container).data('date')).valueOf();
            this._inlineView = true;
        }
        if (garegurianDate && garegurianDate != 'undefined') {
            this.state.unixDate = garegurianDate;
        }
        else {
            this.state.unixDate = new Date().valueOf();
        }
        this.altField = $(this.altField);
        this.state.setSelectedDateTime('unix', this.state.unixDate);
        this.state.setTime('unix', this.state.unixDate);
        this.state.setView('unix', this.state.unixDate);
        return this;
    },


    /**
     * @desc set time of timepicker
     */
    setTime: function () {
        this.timePicker.setTime(this.state.selected.unixDate);
    },


    /**
     * @desc set date of datepicker
     */
    setDate: function (p) {
        var date = new persianDate(p);
        this.selectDateTime(date.valueOf())
        this.setTime();
        return this;
    },


    /**
     * @desc initilize {@link ClassDatepicker}
     * @returns {ClassDatepicker}
     */
    init: function () {
        var self = this;
        this.state = new State({datepicker: self});
        this.compatConfig();
        this._defineOnInitState();
        if (self.initialValue) {
            this._updateInputElement();
        }
        this.view = this.views['default'];
        this.view.render(this);
        this.inputElem.data("datepicker", this);
        this.inputElem.addClass(self.cssClass);
        this._attachEvents();
        return this;
    }
};

var Datepicker = function (mainElem, options) {
    return inherit(this, [ClassSprite, ClassCompat, ClassDatepicker, ViewsDatePicker, ClassConfig, options, {
        $container: mainElem,
        inputElem: $(mainElem)
    }]);
};

