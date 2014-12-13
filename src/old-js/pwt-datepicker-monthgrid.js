var Class_MonthGrid = {
      // List Of days Html object
      state : {
            year : null,
            month : null,
            date : null,
            firstWeekDayOfMonth : null,
            daysCount : null
      },
      persianDigit : true,
      _formatDigit : function(digit) {
            if (this.persianDigit)
                  return digit.toString().toPersianDigit();
            else
                  return digit;
      },
      events : {
            init : function() {
            },
            render : function() {
                  this.state.month = this.month;
                  this.state.year = this.year;
            },
            reRender : function() {
                  this._markToday();
            },
            selectDay : function(x) {
            }
      },
      _markToday : function() {
            var self = this;
            var todate = new persianDate();
            $(self.element).removeClass(self.cssClass.today);
            $.each(self.daysList, function(index, value) {
                  var htmlItemDay = $(this).data().day;
                  var htmlItemMonth = $(this).data().month;
                  var htmlItemYear = $(this).data().year;
                  if (htmlItemDay == todate.date() && htmlItemMonth == todate.month() && htmlItemYear == todate.year()) {
                        $(this).addClass(self.cssClass.today);
                        $(self.element).addClass(self.cssClass.today);
                  }
            });
            return this;
      },
      // TODO : must remove
      _updateState : function() {
            var self = this;
            var t = new persianDate();
            self.daysCount = t.daysInMonth(self.state.year, self.state.month);
            self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
            return this;
      },
      selectDate : function(unixDate) {
            
            
            var self = this, reRenderFlag;
            var sDate = new persianDate(unixDate);
            if (self.state.year == sDate.year() && self.state.month == sDate.month()) {
                  reRenderFlag = false;
            } else {
                  reRenderFlag = true;
            }
            self.state.year = sDate.year();
            self.state.month = sDate.month();
            self.state.date = sDate.date();
            if (reRenderFlag) {
                  self.view.renderDays(self);
            }
            self.markSelectedDate(unixDate);
            return this;
      },
      markSelectedDate : function(unixDate) {
            var self = this;
            $.each(self.daysList, function(index, value) {
                  var viewItemUnix= parseInt($(value).attr("unixDate"));   
                  if (self.isSameDay(viewItemUnix,unixDate)  ) {
                        $(this).addClass(self.cssClass.selected);
                  } else {
                        $(this).removeClass(self.cssClass.selected);
                  }
            });
      },
      updateAs : function(year, month) {
            var self = this;
            self.state.year = year;
            self.state.month = month;
            self.view.renderDays(self);
            return this;
      },
      goToNextMonth : function() {
            var self = this;
            if (self.state.month == 12) {
                  self.state.month = 1;
                  self.state.viewYear++;
            } else {
                  self.state.month++;
            }
            self.updateAs(self.state.year, self.state.month)
            return false;
      },
      goToPrevMonth : function() {

      },
      goToYear : function(year) {
            this.updateAs(year, this.state.month);
      },
      applyStory : function() {
            //this.view.applyStory(this);
      }
};

MonthGrid = function(options) {
      // Change !!
      //this.pcal = options.parent.pcal;
      inherit(this, [Class_Sprite, Views_MonthGrid, Class_DateRange, Class_MonthGrid, options]);
      var self = this;
      return this;
}
