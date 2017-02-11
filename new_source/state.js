/**
 * All state set in his object and get from this
 * also this object notify other object to update self or update view or etc.
 */
class State {

    /**
     * @param {Datepicker} datepicker
     * @return {State}
     */
    constructor(datepicker) {

        /**
         * @type {object}
         */
        this.datepicker = datepicker;

        /**
         * @type {Boolean}
         */
        this.filetredDate = (this.datepicker.options.minDate || this.datepicker.options.maxDate);

        /**
         * @desc get generated view mode list from options object
         * @type {Array}
         */
        this.viewModeList = this.datepicker.options._viewModeList;

        /**
         * @desc view mode string day, month, year
         * @type {String}
         * @default day
         * @todo add time to view modes
         */
        this.viewMode = (this.viewModeList.indexOf(datepicker.options.viewMode) > 0) ? datepicker.options.viewMode : this.viewModeList[0];

        /**
         * @desc view mode string index in view mode list
         * @type {number}
         */
        this.viewModeIndex = (this.viewModeList.indexOf(datepicker.options.viewMode) > 0) ? this.viewModeList.indexOf(datepicker.options.viewMode) : 0; // defaul 'day'


        /**
         * @desc contain filtered date objects
         * @type {{start: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, end: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}}}
         */
        this.filterDate = {
            start: {
                year: 0,
                month: 0,
                date: 0,
                hour: 0,
                minute: 0,
                second: 0,
                unixDate: 0
            },
            end: {
                year: 0,
                month: 0,
                date: 0,
                hour: 0,
                minute: 0,
                second: 0,
                unixDate: 0
            }
        };

        /**
         * @desc contain view date object
         * @type {{year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number, dateObject: null, meridian: string}}
         */
        this.view = {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null,
            meridian: 'AM'
        };

        /**
         * @desc contain selected date object
         * @type {{year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number, dateObject: null}}
         */
        this.selected = {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null
        };

        this._setFilterDate(this.datepicker.options.minDate, this.datepicker.options.maxDate);
        return this;
    }

    /**
     * @private
     * @param minDate
     * @param maxDate
     */
    _setFilterDate(minDate, maxDate) {
        var self = this;
        if (!minDate) {
            minDate = -999999999999999999;
        }
        if (!maxDate) {
            maxDate = 999999999999999999;
        }
        var pd = new persianDate(minDate);
        self.filterDate.start.unixDate = minDate;
        self.filterDate.start.hour = pd.hour();
        self.filterDate.start.minute = pd.minute();
        self.filterDate.start.second = pd.second();
        self.filterDate.start.month = pd.month();
        self.filterDate.start.date = pd.date();
        self.filterDate.start.year = pd.year();
        var pdEnd = new persianDate(maxDate);
        self.filterDate.end.unixDate = maxDate;
        self.filterDate.end.hour = pdEnd.hour();
        self.filterDate.end.minute = pdEnd.minute();
        self.filterDate.end.second = pdEnd.second();
        self.filterDate.end.month = pdEnd.month();
        self.filterDate.end.date = pdEnd.date();
        self.filterDate.end.year = pdEnd.year();
    }


    /**
     * @desc called on date select
     * @param {String} key - accept date, month, year, hour, minute, second
     * @param {Number} value
     * @public
     * @return {State}
     */
    setSelectedDateTime(key, value) {
        var that = this;
        switch (key) {
            case 'unix':
                that.selected.unixDate = value;
                var pd = new persianDate(value);
                that.selected.year = pd.year();
                that.selected.month = pd.month();
                that.selected.date = pd.date();
                that.selected.hour = that.view.hour;
                that.selected.minute = that.view.minute;
                that.selected.second = that.view.second;
                that._updateSelectedUnix();
                break;
            case 'year':
                this.selected.year = value;
                that._updateSelectedUnix();
                break;
            case 'month':
                this.selected.month = value;
                that._updateSelectedUnix();
                break;
            case 'date':
                this.selected.date = value;
                that._updateSelectedUnix();
                break;
            case 'hour':
                this.selected.hour = value;
                that._updateSelectedUnix();
                break;
            case 'minute':
                this.selected.minute = value;
                that._updateSelectedUnix();
                break;
            case 'second':
                this.selected.second = value;
                that._updateSelectedUnix();
                break;
        }
        return this;
    }


    /**
     * @return {State}
     * @private
     */
    _updateSelectedUnix() {
        this.selected.dateObject = new persianDate([
            this.selected.year,
            this.selected.month,
            this.selected.date,
            this.view.hour,
            this.view.minute,
            this.view.second
        ]);
        this.selected.unixDate = this.selected.dateObject.valueOf();
        this.datepicker.updateInput(this.selected.unixDate);
        this.datepicker.options.onSelect(this.selected.unixDate);
        return this;
    }

    /**
     * @param pd
     * @private
     */
    _syncViewModes(pd) {
        this.view.year = pd.year();
        this.view.month = pd.month();
        this.view.date = pd.date();
    }

    /**
     * @desc change view state
     * @param {String} nav - accept next, prev
     */
    navigate(nav) {
        if (nav == 'next') {
            if (this.viewMode == 'year') {
                this.setViewDateTime('year', this.view.year + 12);
            }
            if (this.viewMode == 'month') {
                this.setViewDateTime('year', this.view.year + 1);
            }
            if (this.viewMode == 'day') {
                if ((this.view.month + 1) == 13) {
                    this.setViewDateTime('year', this.view.year + 1);
                    this.setViewDateTime('month', 1);
                } else {
                    this.setViewDateTime('month', this.view.month + 1);
                }
            }
        }
        else {
            if (this.viewMode == 'year') {
                this.setViewDateTime('year', this.view.year - 12);
            }
            if (this.viewMode == 'month') {
                this.setViewDateTime('year', this.view.year - 1);
            }
            if (this.viewMode == 'day') {
                if ((this.view.month - 1) <= 0) {
                    this.setViewDateTime('year', this.view.year - 1);
                    this.setViewDateTime('month', 12);
                } else {
                    this.setViewDateTime('month', this.view.month - 1);
                }
            }
        }
    }

    /**
     * @public
     * @desc every time called view state changed to next in queue
     * @return {State}
     */
    switchViewMode() {
        this.viewModeIndex = ((this.viewModeIndex + 1) >= this.viewModeList.length) ? 0 : (this.viewModeIndex + 1);
        this.viewMode = (this.viewModeList[this.viewModeIndex]) ? (this.viewModeList[this.viewModeIndex]) : (this.viewModeList[0]);
        this._setViewDateTimeUnix();
        return this;
    }

    /**
     * @desc switch to specified view mode
     * @param {String} viewMode - accept date, month, year
     */
    switchViewModeTo(viewMode) {
        if (this.viewModeList.indexOf(viewMode) >= 0) {
            this.viewMode = viewMode;
            this.viewModeIndex = this.viewModeList.indexOf(viewMode);
        }
    }

    /**
     *
     * @return {State}
     * @private
     */
    _setViewDateTimeUnix() {
        this.view.dateObject = new persianDate([
            this.view.year,
            this.view.month,
            this.view.date,
            this.view.hour,
            this.view.minute,
            this.view.second
        ]);
        this._syncViewModes(this.view.dateObject);
        this.view.unixDate = this.view.dateObject.valueOf();
        this.datepicker.view.render(this.view);
        return this;
    }

    /**
     *
     * @param {String} key -  accept date, month, year, hour, minute, second
     * @param {Number} value
     * @return {State}
     */
    setViewDateTime(key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                var pd = new persianDate(value);
                self.view.year = pd.year();
                self.view.month = pd.month();
                self.view.date = pd.date();
                self.view.hour = pd.hour();
                self.view.minute = pd.minute();
                self.view.second = pd.second();
                break;
            case 'year':
                this.view.year = value;
                break;
            case 'month':
                this.view.month = value;
                break;
            case 'date':
                this.view.date = value;
                break;
            case 'hour':
                this.view.hour = value;
                break;
            case 'minute':
                this.view.minute = value;
                break;
            case 'second':
                this.view.second = value;
                break;
        }
        this._setViewDateTimeUnix();
        return this;
    }
}