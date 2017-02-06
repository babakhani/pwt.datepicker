class View {
    constructor(datepicker) {
        this.yearsViewCount = 12;
        this.datepicker = datepicker;
        this.rendered = null;
        return this;
    }

    getNavSwitchText(data) {
        let output;
        if (this.datepicker.state.viewMode == 'day') {
            output = this.datepicker.options.dayPicker.titleFormatter.call(this, data.year, data.month)
        }
        else if (this.datepicker.state.viewMode == 'month') {
            output = this.datepicker.options.monthPicker.titleFormatter.call(this, data.dateObject.valueOf())
        }
        else if (this.datepicker.state.viewMode == 'year') {
            output = this.datepicker.options.yearPicker.titleFormatter.call(this, data.year)
        }
        return output;
    };

    checkYearAccess(y) {
        var output = true;
        if (this.datepicker.state.filetredDate) {
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
            let yearStr = new pDate([i]);
            yearStr.formatPersian = this.datepicker.options.persianDigit;
            yearsModel.push({
                title: yearStr.format('YYYY'),
                enabled: this.checkYearAccess(i),
                dataYear: i,
                selected: this.datepicker.state.selected.year == i
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
            y = this.datepicker.state.view.year;
        if (this.datepicker.state.filetredDate) {
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
                year: this.datepicker.state.view.year,
                dataMonth: month.index,
                selected: DateUtil.isSameMonth(this.datepicker.state.selected.dateObject, new pDate([this.datepicker.state.view.year, month.index]))
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

        if (self.datepicker.state.filetredDate) {
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
        if (this.datepicker.state.viewMode != 'day') {
            return [];
        }
        // log('if you see this many time your code has performance issue')
        const viewMonth = this.datepicker.state.view.month;
        const viewYear = this.datepicker.state.view.year;
        let pdateInstance = new persianDate();
        let daysCount = pdateInstance.daysInMonth(viewYear, viewMonth);
        var firstWeekDayOfMonth = pdateInstance.getFirstWeekDayOfMonth(viewYear, viewMonth) - 1;
        let outputList = [];
        let daysListindex = 0;
        let nextMonthListIndex = 0;
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
                if (rowIndex == 0 && dayIndex < firstWeekDayOfMonth) {
                    var pdate = new pDate(this.datepicker.state.view.dateObject.startOf('month').valueOf());
                    var calcedDate = pdate.subtract('days', (firstWeekDayOfMonth - dayIndex));
                    var otherMonth = true;
                }
                else if ((rowIndex == 0 && dayIndex >= firstWeekDayOfMonth) || (rowIndex <= 5 && daysListindex < daysCount)) {
                    daysListindex += 1;
                    var calcedDate = new pDate([this.datepicker.state.view.year, this.datepicker.state.view.month, daysListindex]);
                    var otherMonth = false;
                }
                else {
                    nextMonthListIndex += 1;
                    var pdate = new pDate(this.datepicker.state.view.dateObject.endOf('month').valueOf());
                    var calcedDate = pdate.add('days', nextMonthListIndex);
                    var otherMonth = true;
                }
                calcedDate.formatPersian = this.datepicker.options.persianDigit;
                outputList[rowIndex].push({
                    title: calcedDate.format('DD'),
                    dataUnix: calcedDate.valueOf(),
                    selected: DateUtil.isSameDay(calcedDate, this.datepicker.state.selected.dateObject),
                    otherMonth: otherMonth,
                    // TODO: make configurable
                    enabled: this.checkDayAccess(calcedDate.valueOf())
                });
            }
        }
        return {
            enabled: this.datepicker.options.dayPicker.enabled && this.datepicker.state.viewMode == 'day',
            viewMode: this.datepicker.state.viewMode == 'day',
            list: outputList
        }
    };

    getTimeViewModel() {
        this.datepicker.state.view.dateObject.formatPersian = this.datepicker.options.persianDigit;
        return {
            enabled: this.datepicker.options.timePicker.enabled,
            hour: {
                title: this.datepicker.state.view.dateObject.format('HH'),
                enabled: this.datepicker.options.timePicker.hour.enabled

            },
            minute: {
                title: this.datepicker.state.view.dateObject.format('mm'),
                enabled: this.datepicker.options.timePicker.minute.enabled
            },
            second: {
                title: this.datepicker.state.view.dateObject.format('ss'),
                enabled: this.datepicker.options.timePicker.second.enabled
            },
            meridian: {
                title: this.datepicker.state.view.dateObject.meridian,
                enabled: this.datepicker.options.timePicker.meridian.enabled
            }
        }
    };

    getViewModel(data) {
        return {
            plotId: '',
            navigator: {
                enabled: this.datepicker.options.navigator.enabled,
                switch: {
                    enabled: true,
                    text: this.getNavSwitchText(data)
                },
                text: this.datepicker.options.navigator.text
            },
            selected: this.datepicker.state.selected,
            time: this.getTimeViewModel(data),
            days: this.getDayViewModel(data),
            month: this.getMonthViewModel(data),
            year: this.getYearViewModel(data),
            toolbox: this.datepicker.options.toolbox
        }
    };

    render(data) {
        debug(this, 'render');
        Mustache.parse(Template);
        this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
        this.datepicker.$container.empty().append(this.rendered);
        this.afterRnder();
    };

    afterRnder() {
        if (this.datepicker.navigator) {
            this.datepicker.navigator.liveAttach();
        }
    }
}