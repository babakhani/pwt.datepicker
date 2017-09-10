let Template = require('./template');
let Helper = require('./helper');
let DateUtil = require('./date');
let Mustache = require('mustache');

/**
 * As its name suggests, all rendering works do in this object
 */
class View {

    /**
     *
     * @param {Datepicker} model
     * @return {View}
     */
    constructor (model) {

        /**
         * @type {number}
         */
        this.yearsViewCount = 12;

        /**
         *
         * @type {Datepicker}
         */
        this.model = model;

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

        if (this.model.state.ui.isInline) {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container-inline"></div>').appendTo(that.model.inputElement);
        }
        else {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
            this.$container.hide();
            this.setPickerBoxPosition();
        }
        return this;
    }

    /**
     * @desc remove datepicker container element from dom
     */
    destroy () {
        this.$container.remove();
    }

    /**
     * @desc set datepicker container element based on <input/> element position
     */
    setPickerBoxPosition () {
        let inputPosition = this.model.input.getInputPosition();
        let inputSize = this.model.input.getInputSize();
        if (this.model.options.position === "auto") {
            this.$container.css({
                left: (inputPosition.left) + 'px',
                top: (inputSize.height + inputPosition.top) + 'px'
            });
        } else {
            this.$container.css({
                left: (this.model.options.position[1] + inputPosition.left) + 'px',
                top: (this.model.options.position[0] + inputPosition.top) + 'px'
            });
        }
    }

    /**
     * @desc show datepicker container element
     */
    show () {
        this.$container.show();
        this.setPickerBoxPosition();
    }

    /**
     * @desc hide datepicker container element
     */
    hide () {
        this.$container.hide();
    }

    /**
     * @desc toggle datepicker container element
     */
    toggle () {
        this.$container.toggle();
    }

    /**
     * @desc return navigator switch text
     * @param {String} data -  accept day, month, year
     * @private
     * @return {String}
     */
    _getNavSwitchText (data) {
        let output;
        if (this.model.state.viewMode == 'day') {
            output = this.model.options.dayPicker.titleFormatter.call(this, data.year, data.month);
        }
        else if (this.model.state.viewMode == 'month') {
            output = this.model.options.monthPicker.titleFormatter.call(this, data.dateObject.valueOf());
        }
        else if (this.model.state.viewMode == 'year') {
            output = this.model.options.yearPicker.titleFormatter.call(this, data.year);
        }
        return output;
    }

    /**
     * @desc check year is accessible
     * @param {Number} year - year number
     * @return {Boolean}
     */
    checkYearAccess (year) {
        let output = true;
        if (this.model.state.filetredDate) {
            let startYear = this.model.state.filterDate.start.year;
            let endYear = this.model.state.filterDate.end.year;
            if (startYear && year < startYear) {
                return false;
            }
            else if (endYear && year > endYear) {
                return false;
            }
        }
        if (output) {
            return this.model.options.checkYear(year);
        }
    }


    /**
     * @private
     * @param viewState
     * @return {{enabled: boolean, viewMode: boolean, list: Array}}
     */
    _getYearViewModel (viewState) {
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
            let yearStr = new persianDate([i]);
            yearStr.formatPersian = this.model.options.persianDigit;
            yearsModel.push({
                title: yearStr.format('YYYY'),
                enabled: this.checkYearAccess(i),
                dataYear: i,
                selected: this.model.state.selected.year == i
            });
        }
        return {
            enabled: this.model.options.yearPicker.enabled,
            viewMode: this.model.state.viewMode == 'year',
            list: yearsModel
        };
    }

    /**
     * @desc check month is accessible
     * @param {Number} month - month number
     * @return {Boolean}
     */
    checkMonthAccess (month) {
        let output = true,
          y = this.model.state.view.year;
        if (this.model.state.filetredDate) {
            let startMonth = this.model.state.filterDate.start.month,
              endMonth = this.model.state.filterDate.end.month,
              startYear = this.model.state.filterDate.start.year,
              endYear = this.model.state.filterDate.end.year;
            if (startMonth && endMonth && ((y == endYear && month > endMonth) || y > endYear) || ((y == startYear && month < startMonth) || y < startYear)) {
                return false;
            }
            else if (endMonth && ((y == endYear && month > endMonth) || y > endYear)) {
                return false;
            }
            else if (startMonth && ((y == startYear && month < startMonth) || y < startYear)) {
                return false;
            }
        }
        if (output) {
            return this.model.options.checkMonth(month, y);
        }
    }

    /**
     * @private
     * @return {{enabled: boolean, viewMode: boolean, list: Array}}
     */
    _getMonthViewModel () {
        let monthModel = [];
        for (let [index, month] of persianDate.rangeName().months.entries()) {
            monthModel.push({
                title: month,
                enabled: this.checkMonthAccess(index),
                year: this.model.state.view.year,
                dataMonth: index + 1,
                selected: persianDate.isSameMonth(this.model.state.selected.dateObject, new persianDate([this.model.state.view.year, index]))
            });
        }
        return {
            enabled: this.model.options.monthPicker.enabled,
            viewMode: this.model.state.viewMode == 'month',
            list: monthModel
        };
    }

    /**
     * @desc check day is accessible
     * @param {Number} thisUnix - month number
     * @return {Boolean}
     */
    checkDayAccess (unixtimespan) {
        let self = this,
          output = true;
        self.minDate = this.model.options.minDate;
        self.maxDate = this.model.options.maxDate;

        if (self.model.state.filetredDate) {
            if (self.minDate && self.maxDate) {
                self.minDate = new persianDate(self.minDate).startOf('day').valueOf();
                self.maxDate = new persianDate(self.maxDate).endOf('day').valueOf();
                if (!(unixtimespan >= self.minDate && unixtimespan <= self.maxDate)) {
                    return false;
                }
            } else if (self.minDate) {
                self.minDate = new persianDate(self.minDate).startOf('day').valueOf();
                if (unixtimespan <= self.minDate) {
                    return false;
                }
            } else if (self.maxDate) {
                self.maxDate = new persianDate(self.maxDate).endOf('day').valueOf();
                if (unixtimespan >= self.maxDate) {
                    return false;
                }
            }
        }
        if (output) {
            return self.model.options.checkDate(unixtimespan);
        }
    }

    /**
     * @private
     * @return {object}
     */
    _getDayViewModel () {
        if (this.model.state.viewMode != 'day') {
            return [];
        }
        //log('if you see this many time your code has performance issue');
        const viewMonth = this.model.state.view.month;
        const viewYear = this.model.state.view.year;
        let pdateInstance = new persianDate();
        let daysCount = pdateInstance.daysInMonth(viewYear, viewMonth);
        let firstWeekDayOfMonth = pdateInstance.getFirstWeekDayOfMonth(viewYear, viewMonth) - 1;
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
                    pdate = new persianDate(this.model.state.view.dateObject.startOf('month').valueOf());
                    calcedDate = pdate.subtract('days', ((firstWeekDayOfMonth) - dayIndex ));
                    otherMonth = true;
                }
                else if ((rowIndex === 0 && dayIndex >= firstWeekDayOfMonth) || (rowIndex <= 5 && daysListindex < daysCount)) {
                    daysListindex += 1;
                    calcedDate = new persianDate([this.model.state.view.year, this.model.state.view.month, daysListindex]);
                    otherMonth = false;
                }
                else {
                    nextMonthListIndex += 1;
                    pdate = new persianDate(this.model.state.view.dateObject.endOf('month').valueOf());
                    calcedDate = pdate.add('days', nextMonthListIndex);
                    otherMonth = true;
                }
                calcedDate.formatPersian = this.model.options.persianDigit;
                outputList[rowIndex].push({
                    title: calcedDate.format('DD'),
                    dataUnix: calcedDate.valueOf(),
                    selected: persianDate.isSameDay(calcedDate, this.model.state.selected.dateObject),
                    today: persianDate.isSameDay(calcedDate, new persianDate()),
                    otherMonth: otherMonth,
                    // TODO: make configurable
                    enabled: this.checkDayAccess(calcedDate.valueOf())
                });
            }
        }
        return {
            enabled: this.model.options.dayPicker.enabled && this.model.state.viewMode == 'day',
            viewMode: this.model.state.viewMode == 'day',
            list: outputList
        };
    }

    /**
     * @private
     * @return {{enabled: boolean, hour: {title, enabled: boolean}, minute: {title, enabled: boolean}, second: {title, enabled: boolean}, meridiem: {title: (meridiem|{title, enabled}|ClassDatepicker.ClassConfig.timePicker.meridiem|{enabled}|string|string), enabled: boolean}}}
     */
    _getTimeViewModel () {
        let hourTitle;
        this.model.state.view.dateObject.formatPersian = this.model.options.persianDigit;

        if (this.model.options.timePicker.meridiem.enabled) {
            hourTitle = (DateUtil.convert24hTo12(this.model.state.view.hour, this.model.state.view.meridiem) + '').toPersianDigit();
        } else {
            hourTitle = (this.model.state.view.hour + '').toPersianDigit();
        }

        return {
            enabled: this.model.options.timePicker.enabled,
            hour: {
                title: hourTitle,
                enabled: this.model.options.timePicker.hour.enabled
            },
            minute: {
                title: this.model.state.view.dateObject.format('mm'),
                enabled: this.model.options.timePicker.minute.enabled
            },
            second: {
                title: this.model.state.view.dateObject.format('ss'),
                enabled: this.model.options.timePicker.second.enabled
            },
            meridiem: {
                title: this.model.state.view.dateObject.format('a'),
                enabled: this.model.options.timePicker.meridiem.enabled
            }
        };
    }

    _getWeekViewModel (data) {
        console.log('_getWeekViewModel');
        console.log(data);
        return {
            enabled: true,
            list: persianDate.rangeName().weekdaysMin
        };
    }

    /**
     * @param data
     * @return {*}
     */
    getViewModel (data) {
        return {
            plotId: '',
            navigator: {
                enabled: this.model.options.navigator.enabled,
                switch: {
                    enabled: true,
                    text: this._getNavSwitchText(data)
                },
                text: this.model.options.navigator.text
            },
            selected: this.model.state.selected,
            time: this._getTimeViewModel(data),
            days: this._getDayViewModel(data),
            weekdays: this._getWeekViewModel(data),
            month: this._getMonthViewModel(data),
            year: this._getYearViewModel(data),
            toolbox: this.model.options.toolbox,
            cssClass: this.model.state.ui.isInline ? 'datepicker-plot-area-inline-view' : ''
        };
    }

    /**
     * @render datepicker view element
     * @param data
     */
    render (data) {
        Helper.debug(this, 'render');
        Mustache.parse(Template);
        this.rendered = $(Mustache.render(this.model.options.template, this.getViewModel(data)));
        this.$container.empty().append(this.rendered);
        this.afterRender();
    }


    reRender () {
        let data = this.model.state.view;
        this.render(data);
    }

    /**
     * @desc do after render work like attache events
     */
    afterRender () {
        if (this.model.navigator) {
            this.model.navigator.liveAttach();
        }
    }
}

module.exports = View;
