var Views_MonthGrid = {
	cssClass : {
		main : "month-grid-box",
		header : "header",
		headerTitle : "title",
		headerRow : "header-row",
		headerRowCell : "header-row-cell",
		daysTable : "table-days",
		currentMonth : "current-month",
		today : "today",
		selected: 'selected'
	},
	views : {
		"default" : {
			render : function(self) {
				self.view_data = {
					css : self.cssClass
				};
				$.template("month_grid_tmpl", 
								"<div class='${css.main}' >\
									<div class='${css.header}' > \
										<div class='${css.headerTitle}' ></div>\
										<div class='${css.headerRow}' ></div>\
 									</div>\
									<table cellspacing='0' class='${css.daysTable}'  ><tbody><tr><td /><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr></tbody></table>\
								</div>" );
				self.element  = $.tmpl("month_grid_tmpl", self.view_data).appendTo(self.container);
				self.header = self.createElementByClass(self.cssClass.header);
				
				// Change !!
				//self.title = self.createElementByClass(self.cssClass.headerTitle).text( self.monthRange[self.state.month].name.fa  )[0];
				self.headerRow = self.createElementByClass(self.cssClass.headerRow);
				for(weekDay in self.weekRange) {
					$("<div/>").text(self.weekRange[weekDay].abbr.fa).addClass(self.cssClass.headerRowCell).appendTo(self.headerRow)[0];
				};
				self.daysBox = self.createElementByClass(self.cssClass.daysTable);
				this.renderDays(self);
			},
			renderDays : function(self) {
				self._updateState();
				self.daysList = [];
				var i = 1;
				var addSpan = function(i){
					var dayPartPersianDate = new persianDate([self.state.year, self.state.month, i]);
					var dayPartUnixTime = dayPartPersianDate.valueOf();
					self.daysList.push($("<span/>").text( self._formatDigit(i) ).data({day:i, unixDate : dayPartUnixTime}).appendTo($(this))[0]);
				}
				$(self.daysBox).find("td").each(function(index) {
					$(this).empty();
					if(self.firstWeekDayOfMonth == 0) {
						addSpan.apply(this,[i]);
						i++;
						self.firstWeekDayOfMonth+=2;
					} else if(index + 1 == self.firstWeekDayOfMonth && i <= self.daysCount) {
						addSpan.apply(this,[i]);
						i++;
						self.firstWeekDayOfMonth+=1;
					}
				});
				// Select Day
				$(self.daysBox).find("td").children("span").click(function(){
					$thisUnixDate = $(this).data("unixDate");
					self.raiseEvent("selectDay",[$thisUnixDate]);
					return false;
				});
				self.raiseEvent("reRender");
			},
			applyStory : function(self) {
				if(self.pcal.dataService){
    				$(self.daysBox).find("td").children("span").each(function() {
    					var unixDate = $(this).data("unixDate");
    					var storyList =  self.pcal.dataService.getDayStory(unixDate);
    					var storyLength = storyList.length;
    					switch(true) {
    						case(storyLength == 0):
    							$(this).removeClass("busy-day");
    							$(this).removeClass("orange-day");
    							$(this).removeClass("normal-day");
    							break;
    						case(storyLength >= 5 ):
    							$(this).addClass("busy-day");
    							break;
    						case(storyLength >= 3 ):
    							$(this).addClass("orange-day");
    							break;
							case(storyLength >= 2 ):
                                $(this).addClass("work-day");
                                break;
    						case(storyLength == 1):
    							$(this).addClass("normal-day");
                                break;
    					}
    				});
				}
			}
		}//------- End of Default view
	}
};
