/*
 (c) Copyright 2013 babakhani reza. All Rights Reserved.
 */

(function($) {
      $.fn.pDatepicker = function(options) {
            if (!this) {
                  $.error("Invalid selector");
            }
            rootElement = this[0];
            $(this).each(function() {
                  this.pDatePicker = new pDatepicker(options, this);
            });
            return this;
      };
})(jQuery);

var Class_pDatepicker = {
      cssClass : 'datepicker-container',
      daysTitleFormat : "YYYY MMMM",
      persianDigit : true,
      // Released Do not Any Change
      viewFormat : "YYYY-MM-DD",
      viewMode : "day", /// day,month,year
      position : "auto", // [x,y]
      autoClose : false,
      toolbox : true,
      mask : false, //unix,Gregorian
      viewFormatter : function(unixDate /* javascript date object*/) {
            var self = this;
            var pdate = new persianDate(unixDate);
            return self._formatDigit(pdate.format(self.viewFormat));
      },
      maskFormatter : function(unixDate /* javascript date object*/) {
            var self = this;
            if (self.mask.toLowerCase() == "gregorian")
                  return new Date(self.state.unixDate);
            if (self.mask.toLowerCase() == "unix")
                  return self.state.unixDate;
            else
                  //$.error("Persian Datepicker : Invalid Mask Config, Check Your Configuration Please. ");
                  return self.state.unixDate;
      },

      //--------------------------------------------------------
      state : {
            unixDate : new persianDate().valueOf(),
            selectedYear : 0,
            selectedMonth : 0,
            selectedDay : 0,
            viewYear : 0,
            viewMonth : 0,
            viewDay : 0
      },
      events : {
      },
      // Public Methud
      show : function() {
            this.element.main.show();
            return this;
      },
      hide : function() {
            this.element.main.hide();
            return this;
      },
      init : function() {
            var self = this;
            this.inputElem.addClass(self.cssClass);
            if (self.mask) {
                  self._appendMaskInput()
            };
            return this
      },
      _formatDigit : function(digit) {
            if (this.persianDigit)
                  return digit.toString().toPersianDigit();
            else
                  return digit;
      },
      _appendMaskInput : function() {
            var self = this;
            var inputName = this.inputElem.attr("name");
            this.inputElem.attr("name", "");
            self.visualInput = this.inputElem.clone().attr({
                  "type" : "hidden",
                  "name" : inputName
            }).removeAttr("class");
            self.visualInput.attr("id", "");
            this.inputElem.after(self.visualInput);
      },
      _updateState : function(key, val) {
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
            self._updateInputElement();
            return this;
      },
      _updateInputElement : function() {
            var self = this;
            if (self.mask) {
                  self.visualInput.val(self.maskFormatter(self.state.unixDate));
            }
            this.inputElem.val(self.viewFormatter(self.state.unixDate));
            return this;
      },
      // one time run
      _defineCurrentState : function() {
            if (this.inputElem.val() && new Date(this.inputElem.val()) != "Invalid Date" && new Date(this.inputElem.val()) != "undefined") {
                  this.state.unixDate = new Date(this.inputElem.val()).valueOf();
            } else {
                  this.state.unixDate = new Date().valueOf();
            }
            var pd = new persianDate(this.state.unixDate);
            this.state.selectedYear = this.state.viewYear = pd.year();
            this.state.selectedMonth = this.state.viewMonth = pd.month();
            this.state.selectedDay = this.state.viewDay = pd.date();
            this._updateInputElement();
            return this;
      },
      _syncViewWidthSelected : function() {
            var pd = new persianDate(this.state.unixDate);
            this.state.selectedYear = this.state.viewYear = pd.year();
            this.state.selectedMonth = this.state.viewMonth = pd.month();
            this.state.selectedDay = this.state.viewDay = pd.date();
            return this;
      }
};

var pDatepicker = function(options, mainElem) {
      inherit(this, [Class_Sprite, Class_pDatepicker, Views_pDatePicker, options, {
            inputElem : $(mainElem)
      }]);
      this._defineCurrentState();
      var viewName = 'default';
      this.view = this.views[viewName];
      this.raiseEvent('render');
      this.view.render(this);
      return this;
};
