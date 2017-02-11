/**
 * As its name suggests, all rendering works do in this object
 */
class View {

    /**
     *
     * @param {Datepicker} datepicker
     * @return {View}
     */
    constructor(datepicker) {

        /**
         * @type {number}
         */
        this.yearsViewCount = 12;

        /**
         *
         * @type {Datepicker}
         */
        this.datepicker = datepicker;

        /**
         *
         * @type {null}
         */
        this.rendered = null;


        /**
         *
         * @type {null}
         */
        this.$container = null;


        /**
         *
         * @type {string}
         */
        this.id = `persianDateInstance-${parseInt(Math.random(100) * 1000)}`;
        let that = this;
        if (this.datepicker.inputElement.nodeName === 'INPUT') {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
            this.$container.hide();
            this.setPickerBoxPosition();
        }
        else {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container-inline"></div>').appendTo(that.datepicker.inputElement);
        }
        return this;
    }

    /**
     * @desc remove datepicker container element from dom
     */
    destroy() {
        this.$container.remove();
    }

    /**
     * @desc set datepicker container element based on <input/> element position
     */
    setPickerBoxPosition() {
        let inputPosition = this.datepicker.input.getInputPosition();
        let inputSize = this.datepicker.input.getInputSize();
        if (this.datepicker.options.position === "auto") {
            this.$container.css({
                left: (inputPosition.left) + 'px',
                top: (inputSize.height + inputPosition.top) + 'px'
            });
        } else {
            this.$container.css({
                top: (this.datepicker.options.position[0] + inputPosition.left) + 'px',
                left: (this.datepicker.options.position[1] + inputPosition.top) + 'px'
            });
        }
    }

    /**
     * @desc show datepicker container element
     */
    show() {
        this.$container.show();
    }

    /**
     * @desc hide datepicker container element
     */
    hide() {
        this.$container.hide();
    }

    /**
     * @desc toggle datepicker container element
     */
    toggle() {
        this.$container.toggle();
    }

    /**
     * @desc return navigator switch text
     * @param {String} data -  accept day, month, year
     * @private
     * @return {String}
     */
    _getNavSwitchText(data) {
        let output;
        if (this.datepicker.state.viewMode == 'day') {
            output = this.datepicker.options.dayPicker.titleFormatter.call(this, data.year, data.month);
        }
        else if (this.datepicker.state.viewMode == 'month') {
            output = this.datepicker.options.monthPicker.titleFormatter.call(this, data.dateObject.valueOf());
        }
        else if (this.datepicker.state.viewMode == 'year') {
            output = this.datepicker.options.yearPicker.titleFormatter.call(this, data.year);
        }
        return output;
    }

    /**
     * @desc check year is accessible
     * @param {Number} year - year number
     * @return {Boolean}
     */
    checkYearAccess(year) {
        var output = true;
        if (this.datepicker.state.filetredDate) {
            var startYear = this.datepicker.state.filterDate.start.year;
            var endYear = this.datepicker.state.filterDate.end.year;
            if (startYear <= year & year <= endYear) {
                output = true;
            } else {
                return false;
            }
        }
        if (output) {
            return this.datepicker.options.checkYear(year);
        }
    }


    /**
     * @private
     * @param viewState
     * @return {{enabled: boolean, viewMode: boolean, list: Array}}
     */
    _getYearViewModel(viewState) {
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
        };
    }

    /**
     * @desc check month is accessible
     * @param {Number} month - month number
     * @return {Boolean}
     */
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
    }

    /**
     * @private
     * @return {{enabled: boolean, viewMode: boolean, list: Array}}
     */
    _getMonthViewModel() {
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
        };
    }

    /**
     * @desc check day is accessible
     * @param {Number} thisUnix - month number
     * @return {Boolean}
     */
    checkDayAccess(unixtimespan) {
        var self = this,
            output = true;
        self.minDate = this.datepicker.options.minDate;
        self.maxDate = this.datepicker.options.maxDate;

        if (self.datepicker.state.filetredDate) {
            if (self.minDate && self.maxDate) {
                self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                if (!(unixtimespan >= self.minDate && unixtimespan <= self.maxDate)) {
                    return false;
                }
            } else if (self.minDate) {
                self.minDate = new pDate(self.minDate).startOf('day').valueOf();
                if (unixtimespan <= self.minDate) {
                    return false;
                }
            } else if (self.maxDate) {
                self.maxDate = new pDate(self.maxDate).endOf('day').valueOf();
                if (unixtimespan <= self.maxDate) {
                    return false;
                }
            }
        }
        if (output) {
            return self.datepicker.options.checkDate(unixtimespan);
        }
    }

    /**
     * @private
     * @return {object}
     */
    _getDayViewModel() {
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
                let calcedDate, otherMonth, pdate;
                if (rowIndex === 0 && dayIndex < firstWeekDayOfMonth) {
                    pdate = new pDate(this.datepicker.state.view.dateObject.startOf('month').valueOf());
                    calcedDate = pdate.subtract('days', (firstWeekDayOfMonth - dayIndex));
                    otherMonth = true;
                }
                else if ((rowIndex === 0 && dayIndex >= firstWeekDayOfMonth) || (rowIndex <= 5 && daysListindex < daysCount)) {
                    daysListindex += 1;
                    calcedDate = new pDate([this.datepicker.state.view.year, this.datepicker.state.view.month, daysListindex]);
                    otherMonth = false;
                }
                else {
                    nextMonthListIndex += 1;
                    pdate = new pDate(this.datepicker.state.view.dateObject.endOf('month').valueOf());
                    calcedDate = pdate.add('days', nextMonthListIndex);
                    otherMonth = true;
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
        };
    }

    /**
     * @private
     * @return {{enabled: boolean, hour: {title, enabled: boolean}, minute: {title, enabled: boolean}, second: {title, enabled: boolean}, meridian: {title: (meridian|{title, enabled}|ClassDatepicker.ClassConfig.timePicker.meridian|{enabled}|string|string), enabled: boolean}}}
     */
    _getTimeViewModel() {
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
        };
    }

    /**
     * @param data
     * @return {*}
     */
    getViewModel(data) {
        return {
            plotId: '',
            navigator: {
                enabled: this.datepicker.options.navigator.enabled,
                switch: {
                    enabled: true,
                    text: this._getNavSwitchText(data)
                },
                text: this.datepicker.options.navigator.text
            },
            selected: this.datepicker.state.selected,
            time: this._getTimeViewModel(data),
            days: this._getDayViewModel(data),
            month: this._getMonthViewModel(data),
            year: this._getYearViewModel(data),
            toolbox: this.datepicker.options.toolbox
        };
    }

    /**
     * @render datepicker view element
     * @param data
     */
    render(data) {
        debug(this, 'render');
        Mustache.parse(Template);
        this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
        this.$container.empty().append(this.rendered);
        this.afterRender();
    }

    /**
     * @desc do after render work like attache events
     */
    afterRender() {
        if (this.datepicker.navigator) {
            this.datepicker.navigator.liveAttach();
        }
    }
}

