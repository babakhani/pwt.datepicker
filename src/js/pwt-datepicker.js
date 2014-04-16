/*
 // Jquery Persian Datepicker
 // Copyright 2011, Software Freedom Conservancy, Inc.
 // Dual licensed under the MIT or GPL Version 2 licenses.
 // babakhani reza@gmail.com
 // babakhani.github.io/PersianWebToolkit
 // Beta Version 0.2.3
 // Dependency :  Jquery.js , pwt-date.js
 Chnage Log:
 0.2.4
 Issue #14
 Show All ( After Before ) Days in month view
 0.2.3
 Fix Paste An cntl+v Event
 0.2.2
 Fix Ie8
 0.2.1
 Fix manual entry
 0.2.0
 Add jquery manifest some version
 0.0.6
 Add manual entry
 rename $.tmpl

 0.0.5
 Fix Datepicker position on window.resize
 Add manual text change

 0.0.4
 Implement Jquery plugin manifest
 Add Observer Option
 Add : format,formatter, altField,altFormat,altFieldFormatter
 show(),hide(),destroy()
 deprecate: viewFormat ,mask,maskFormatter,viewFormatter
 0.0.3 remove jquery tmpl
 */

(function() {

      var Class_pDatepicker = {
            cssClass : 'datepicker-container',
            daysTitleFormat : "YYYY MMMM",
            persianDigit : true,
            // Released Do not Any Change
            viewMode : "day", /// day,month,year
            position : "auto", // [x,y]
            autoClose : false,
            toolbox : true,
            // 0.0.4
            format : false,
            observer : false,
            altField : false,
            altFormat : "unix",
            inputDelay : 800,
            // Deprecated In 0.0.4
            //=mask : false, //unix,Gregorian
            viewFormat : "YYYY/MM/DD",
            formatter : function(unixDate) {
                  var self = this;
                  var pdate = new persianDate(unixDate);
                  pdate.formatPersian = false;
                  return pdate.format(self.viewFormat);
            },
            altFieldFormatter : function(unixDate) {
                  var self = this;
                  if (self.altFormat.toLowerCase() == "gregorian" | self.altFormat.toLowerCase() == "g")
                        return new Date(self.state.unixDate);
                  if (self.altFormat.toLowerCase() == "unix" | self.altFormat.toLowerCase() == "u")
                        return self.state.unixDate;
                  else
                        return new persianDate(self.state.unixDate).format(self.altFormat);
            },
            //--------------------------------------------------------
            state : {
                  unixDate : null,
                  selectedYear : 0,
                  selectedMonth : 0,
                  selectedDay : 0,
                  viewYear : 0,
                  viewMonth : 0,
                  viewDay : 0
            },
            events : {},
            _viewed : false,
            // ------------------------------------------------------------------------ Public Methud
            show : function() {
                  this.view.fixPosition(this);
                  this.element.main.show();
                  this.onShow(this);
                  this._viewed = true;
                  return this;
            },
            hide : function() {
                  if (this._viewed) {
                        this.element.main.hide();
                        this.onHide(this);
                        this._viewed = false;
                  }
                  return this;
            },
            onShow : function(self) {
            },
            onHide : function(self) {
            },
            // TODO: add this to documentation
            onSelect : function(unixDate) {
            },
            ////////////////////////////////////////////////////////////
            //                                                    end Of config
            ////////////////////////////////////////////////////////////
            // Update Every Thing This Update All State
            _updateState : function(key, val, updateDisplayInput) {
                  var self = this;
                  if (key == "year") {
                        this.state.selectedYear = val;
                        this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
                  } else if (key == "unix") {
                        this.state.unixDate = val;
                        var pd = new persianDate(this.state.unixDate);
                        this.state.selectedYear = pd.year();
                        this.state.selectedMonth = pd.month();
                        this.state.selectedDay = pd.date();

                  } else if ( key = "month") {
                        this.state.selectedMonth = val;
                        this.state.unixDate = new persianDate([self.state.selectedYear, self.state.selectedMonth, self.state.selectedDay]).valueOf();
                  }
                  this._syncViewStateWidthSelected()
                  this.dayPickerView.updateView()
                  this.monthPickerView.updateView()
                  this.yearPickerView.updateView()
                  if (updateDisplayInput == true) {
                        self._updateInputElement();
                  }
                  return this;
            },
            _syncWithImportData : function(pasted) {
                  var self = this;
                  if (jQuery.isNumeric(pasted)) {
                        var newPersainDate = new persianDate(pasted);
                        self._updateState("unix", newPersainDate.valueOf(), true);
                  } else {
                        var persianDateArray = self.validatePersianDateString(pasted)
                        if (persianDateArray != null) {
                              delay(function() {
                                    var newPersainDate = new persianDate(persianDateArray);
                                    self._updateState("unix", newPersainDate.valueOf(), true);
                              }, self.inputDelay)
                        }
                  }
                  return this;
            },
            _flagSelfManipulate : true,
            _selectDate : function(key, unixDate) {
                  var self = this;
                  self._updateState("unix", unixDate, true);
                  self.dayPickerView.updateView();
                  self.onSelect(unixDate, this);
                  if (self.autoClose) {
                        self.element.main.hide();
                  }
                  return this;
            },
            _formatDigit : function(digit) {
                  if (this.persianDigit)
                        return digit.toString().toPersianDigit();
                  else
                        return digit;
            },
            _updateInputElement : function() {
                  var self = this;
                  self._flagSelfManipulate = true;
                  // Update Alt Field
                  $(self.altField).val(self.altFieldFormatter(self.state.unixDate));
                  // Update Display Field
                  self.inputElem.val(self.formatter(self.state.unixDate)).data({
                        "lastValue" : ""
                  });
                  self.inputVal = self.inputElem.val();
                  // Update Display Field MetaData
                  var peDate = new pDate(self.state.unixDate);
                  peDate.formatPersian = false;
                  self.inputElem.attr("pDateEnChar", peDate.format("YYYY/MM/DD"));

                  self._flagSelfManipulate = false;
                  return self;
            },
            _syncViewStateWidthSelected : function() {
                  var pd = new persianDate(this.state.unixDate);
                  this.state.selectedYear = this.state.viewYear = pd.year();
                  this.state.selectedMonth = this.state.viewMonth = pd.month();
                  this.state.selectedDay = this.state.viewDay = pd.date();
                  return this;
            },
            // one time run single Run
            _defineOnInitState : function() {
                  if (this.isValidGreguranDate(this.inputElem.val())) {
                        this.state.unixDate = new Date(this.inputElem.val()).valueOf();
                        var pd = new persianDate(this.state.unixDate);
                  }
                  else {
                        this.state.unixDate = new Date().valueOf();
                        var pd = new persianDate();
                  }
                  this.state.selectedYear = this.state.viewYear = pd.year();
                  this.state.selectedMonth = this.state.viewMonth = pd.month();
                  this.state.selectedDay = this.state.viewDay = pd.date();
                  this._updateInputElement();
                  return this;
            },
            // Removes the datepicker functionality completely.
            destroy : function() {
                  this.inputElem.removeClass(self.cssClass);
                  this.element.main.remove();
                  return this;
            },
            attachEvents : function() {
                  var self = this;
                  $(window).resize(function() {
                        self.view.fixPosition(self);
                  });
                  if (self.observer) {
                        /////////////////   Manipulate by Copy And paste
                        self.inputElem.bind('paste', function(e) {
                              delay(function() {
                                    self._syncWithImportData(e.target.value)
                              }, 60);
                        });
                        /////////////////   Manipulate by alt changes
                        $(self.altField).bind("textchange", function() {
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
                        $(document).keydown(function(e) {
                              if ($.inArray(e.keyCode, ctrlKey) > 0)
                                    ctrlDown = true;
                        }).keyup(function(e) {
                              if ($.inArray(e.keyCode, ctrlKey) > 0)
                                    ctrlDown = false;
                        });
                        self.inputElem.bind("keyup", function(e) {
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
                  /////////////

                  return this;
            },
            init : function() {
                  var self = this;
                  this._defineOnInitState();
                  this.view = this.views['default'];
                  //this.raiseEvent('render');
                  this.view.render(this);
                  this.inputElem.data("datepicker", this);
                  this.inputElem.addClass(self.cssClass);
                  this.attachEvents();
                  return this;
            }
      };
      var Datepicker = function(mainElem, options) {
            return inherit(this, [Class_Sprite, Class_pDatepicker, Views_pDatePicker, options, {
                  inputElem : $(mainElem),
                  inputAltElem : $(options.altField)
            }]);
      };
      (function($) {
            $.fn.persianDatepicker = $.fn.pDatepicker = function(options) {
                  var args = Array.prototype.slice.call(arguments), output = this;
                  if (!this) {
                        $.error("Invalid selector");
                  }
                  $(this).each(function() {
                        // encapsulation Args
                        var emptyArr = new Array, tempArg = args.concat(emptyArr), dp = $(this).data("datepicker");
                        if (dp && typeof tempArg[0] == "string") {
                              var funcName = tempArg[0], funcArgs = tempArg.splice(0, 1);
                              output = dp[funcName](tempArg);
                        } else {
                              this.pDatePicker = new Datepicker(this, options);
                        }
                  });
                  return output;
            };
      })(jQuery);
})();
