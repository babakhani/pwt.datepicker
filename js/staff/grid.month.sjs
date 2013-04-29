/*
 Version 0.0.1
 Smart object
 Abstract factory
 doc:

 For get clicked day use attachEvent  "selectDay"
    	     public API:
         selectDay
         updateAs
         options:
             parent: sample, (container object)
             container: sample, (html element)
             year: sample, (first time initialize)
             month:sample, (first time initialize)
*/
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
    _formatDigit : function(digit){
            if(this.persianDigit)
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
           // this.view.applyStory(this);
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
            if(htmlItemDay == todate.date() && self.state.month == todate.month() && self.state.year == todate.year()) {
                $(this).addClass(self.cssClass.today);
                $(self.element).addClass(self.cssClass.today);
            }
        });
        return this;
    },
    _updateState : function() {
        var self = this;
        var t = new persianDate();
        self.daysCount = t.getDaysInMonth(self.state.year, self.state.month);
        self.firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(self.state.year, self.state.month);
        return this;
    },
    selectDate : function(unixDate) {
        var self = this,reRenderFlag;
        var sDate = new persianDate(unixDate);
        if(self.state.year == sDate.year() && self.state.month == sDate.month()  ) {
            reRenderFlag = false;
        }else{
            reRenderFlag = true;
        }
        self.state.year = sDate.year();
        self.state.month = sDate.month();
        self.state.date = sDate.date();
        if(reRenderFlag){
            self.view.renderDays(self);
        }
        // Reset Class
        $.each(self.daysList, function(index, value) {
            var htmlItemDay = $(this).data().day;
            //print("htmlItemDay : "+htmlItemDay)
            if(htmlItemDay == self.state.date) {
                $(this).addClass(self.cssClass.selected);
            } else {
                $(this).removeClass(self.cssClass.selected);
            }
        });
        return this;
    },
    updateAs : function(year, month) {
        var self = this;
        self.state.year = year;
        self.state.month = month;
        self.view.renderDays(self);
        
        return this;
    },
    goToYear : function(year) {
        this.updateAs(year, this.state.month);
    },
    applyStory : function() {
        //this.view.applyStory(this);
    }
};

var MonthGrid = function(options) {
    // Change !!
    //this.pcal = options.parent.pcal;
    inherit(this, [Class_Sprite, Views_MonthGrid, Class_DateRange, Class_MonthGrid, options]);
    var self = this;
    return this;
};
