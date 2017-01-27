class View {
    constructor(datepicker) {
        this.yearsViewCount = 12;
        this.datepicker = datepicker;
        this.rendered = null;
        return this;
    }

    checkYearAccess(y) {
        var output = true;
        if (this.datepicker.state._filetredDate) {
            var startYear = this.datepicker.state.filterDate.start.year;
            var endYear = this.datepicker.state.filterDate.end.year;
            if (startYear <= y & y <= endYear) {
                output = true;
            } else {
                return false;
            }
        }
        if (output) {
            return this.datepicker.options.checkYear(y);
        }
    };

    getYearViewModel(viewState) {
        /**
         * @description Generate years list based on viewState year
         * @return ['1380',n+12,'1392']
         */
        let list = [...Array(this.yearsViewCount).keys()].map(value => value + parseInt(viewState.year / this.yearsViewCount) * this.yearsViewCount);
        /*
         * @description Generate years object based on list
         */
        let yearsModel = [];
        for (let i of list) {
            yearsModel.push({
                title: i,
                enabled: this.checkYearAccess(i)
            });
        }
        return {
            enabled: this.datepicker.options.yearPicker.enabled,
            viewMode: this.datepicker.state.viewMode == 'year',
            list: yearsModel
        }
    };

    checkMonthAccess(month) {
        var output = true,
            y = null;
        if (this.datepicker.state._filetredDate) {
            y = this.datepicker.state.view.year;
            var startMonth = this.datepicker.state.filterDate.start.month,
                endMonth = this.datepicker.state.filterDate.end.month,
                startYear = this.datepicker.state.filterDate.start.year,
                endYear = this.datepicker.state.filterDate.end.year;
            if (
                (startYear == endYear && endYear == y && month >= startMonth && month <= endMonth)
                |
                (y != endYear && y == startYear && month >= startMonth)
                |
                (y != startYear && y == endYear && month <= endMonth)
                |
                (y > startYear && y < endYear)
            ) {
                output = true;
            }
            else {
                return false;
            }
        }
        if (output) {
            return this.datepicker.options.checkMonth(month, y);
        }
    };

    getMonthViewModel() {
        let monthModel = [];
        for (let month of ClassDateRange.monthRange) {
            monthModel.push({
                title: month.name.fa,
                enabled: this.checkMonthAccess(month.index),
                year: this.datepicker.state.view.year
            });
        }
        return {
            enabled: this.datepicker.options.monthPicker.enabled,
            viewMode: this.datepicker.state.viewMode == 'month',
            list: monthModel
        }
    };

    checkDayAccess(thisUnix) {
        var self = this,
            output = true;
        self.minDate = this.datepicker.options.minDate;
        self.maxDate = this.datepicker.options.maxDate;
        log('-========');
        log('min : ' + self.minDate);
        log(thisUnix);
        log('max : ' + self.maxDate);
        log('-========');
        log('-========');
        log('-========');
        log('-========');

        if (self.datepicker.state._filetredDate) {
            if (self.minDate && self.maxDate) {
                self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                if (!(thisUnix >= self.minDate && thisUnix <= self.maxDate)) {
                    return false;
                }
            } else if (self.minDate) {
                self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                if (thisUnix <= self.minDate) {
                    return false;
                }
            } else if (self.maxDate) {
                self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                if (thisUnix <= self.maxDate) {
                    return false;
                }
            }
        }
        if (output) {
            return self.datepicker.options.checkDate(thisUnix);
        }
    };

    getDayViewModel() {
        const viewMonth = this.datepicker.state.view.month;
        const viewYear = this.datepicker.state.view.year;
        let t = new persianDate();
        let daysCount = t.daysInMonth(viewYear, viewMonth);
        let firstWeekDayOfMonth = t.getFirstWeekDayOfMonth(viewYear, viewMonth) - 1;
        let outputList = [];
        let daysListindex = 0;
        let daysMatrix = [
            ['null', 'null', 'null', 'null', 'null', 'null', 'null'],
            ['null', 'null', 'null', 'null', 'null', 'null', 'null'],
            ['null', 'null', 'null', 'null', 'null', 'null', 'null'],
            ['null', 'null', 'null', 'null', 'null', 'null', 'null'],
            ['null', 'null', 'null', 'null', 'null', 'null', 'null'],
            ['null', 'null', 'null', 'null', 'null', 'null', 'null']
        ];
        for (let [rowIndex, daysRow] of daysMatrix.entries()) {
            outputList[rowIndex] = [];
            for (let [dayIndex, day] of daysRow.entries()) {
                var dayObject = {
                    title: null,
                    checkDayAccess: this.checkDayAccess(new pDate([this.datepicker.state.view.year, this.datepicker.state.view.month, daysListindex]).valueOf())
                };
                if (rowIndex == 0 && dayIndex < firstWeekDayOfMonth) {
                    dayObject.title = '--';
                    outputList[rowIndex].push(dayObject);
                }
                else if (rowIndex == 0 && dayIndex >= firstWeekDayOfMonth) {
                    daysListindex += 1;
                    dayObject.title = daysListindex;
                    outputList[rowIndex].push(dayObject);
                }
                else if (rowIndex <= 5 && daysListindex < daysCount) {
                    daysListindex += 1;
                    dayObject.title = daysListindex;
                    outputList[rowIndex].push(dayObject);
                }
                else {
                    dayObject.title = '--';
                    outputList[rowIndex].push(dayObject);
                }
            }
        }
        log(outputList)

        return {
            enabled: this.datepicker.options.dayPicker.enabled,
            viewMode: this.datepicker.state.viewMode == 'day',
            list: outputList
        }
    };

    getViewModel(data) {
        return {
            plotId: '',
            switch: {
                enabled: true,
                date: data.dateObj.format()
            },
            navigator: {
                enabled: this.datepicker.options.navigator.enabled,
            },
            days: this.getDayViewModel(data),
            month: this.getMonthViewModel(data),
            year: this.getYearViewModel(data),
        }
    };

    render(data) {
        Mustache.parse(Template);
        this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
        this.datepicker.$container.empty().append(this.rendered);
    };
}