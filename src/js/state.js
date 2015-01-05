'use strict';
/**
 * @desc Instantiate in {@link ClassDatepicker}
 * @class ClassDatepickerState
 * @type {{view: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, selected: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, _updateSelectedUnix: _updateSelectedUnix, setTime: setTime, setSelected: setSelected, syncViewWithelected: syncViewWithelected, setView: setView}}
 */
var ClassDatepickerState = {
    /**
     * @desc define start and end of available date
     */
    filterDate: {
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
            unixDate: 100
        }
    },

    /**
     * @desc view
     */
    view: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },


    /**
     * @desc selected
     */
    selected: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },


    /**
     * @desc setFilterDate
     * @param key
     * @param startVal
     * @param endVal
     */
    setFilterDate: function (key, startVal, endVal) {
        var self = this;
        if (!startVal) {
            startVal = -99999999999999;
        }
        var pd = new persianDate(startVal);
        self.filterDate.start.unixDate = startVal;
        self.filterDate.start.hour = pd.hour();
        self.filterDate.start.minute = pd.minute();
        self.filterDate.start.second = pd.second();
        self.filterDate.start.month = pd.month();
        self.filterDate.start.date = pd.date();
        self.filterDate.start.year = pd.year();

        if (!endVal) {
            endVal = 99999999999999
        }
        var pd = new persianDate(endVal);
        self.filterDate.end.unixDate = endVal;
        self.filterDate.end.hour = pd.hour();
        self.filterDate.end.minute = pd.minute();
        self.filterDate.end.second = pd.second();
        self.filterDate.end.month = pd.month();
        self.filterDate.end.date = pd.date();
        self.filterDate.end.year = pd.year();
    },


    /**
     * @desc _updateSelectedUnix
     * @returns {Class_DatepickerState}
     * @private
     */
    _updateSelectedUnix: function () {
        this.selected.dateObj = new persianDate([this.selected.year,
            this.selected.month,
            this.selected.date,
            this.selected.hour,
            this.selected.minute,
            this.selected.second
        ])
        this.selected.unixDate = this.selected.dateObj.valueOf();
        return this;
    },


    /**
     * @desc setTime
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setTime: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.hour = pd.hour();
                self.selected.minute = pd.minute();
                self.selected.second = pd.second();
                self._updateSelectedUnix();
                break;
            case 'hour':
                this.selected.hour = value;
                self._updateSelectedUnix();
                break;
            case 'minute':
                this.selected.minute = value;
                self._updateSelectedUnix();
                break;
            case 'second':
                this.selected.second = value;
                self._updateSelectedUnix();
                break;
        }
        return this;
    },


    /**
     * @desc setSelected
     * @public
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setSelected: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.year = pd.year();
                self.selected.month = pd.month();
                self.selected.date = pd.date();
                self._updateSelectedUnix();
                break;
            case 'year':
                this.selected.year = value;
                self._updateSelectedUnix();
                break;
            case 'month':
                this.selected.month = value
                self._updateSelectedUnix();
                break;
            case 'date':
                this.selected.month = value
                self._updateSelectedUnix();
                break;
        }
        return this;
    },


    /**
     * @desc syncViewWithelected
     * @public
     * @returns {Class_DatepickerState}
     */
    syncViewWithelected: function () {
        this.view.year = this.selected.year;
        this.view.month = this.selected.month;
        this.view.date = this.selected.date;
        this.view.unixDate = this.selected.unixDate;
        return this;
    },


    /**
     * @desc _updateViewUnix
     * @returns {Class_DatepickerState}
     * @private
     */
    _updateViewUnix: function () {
        this.view.dateObj = new persianDate([
            this.view.year,
            this.view.month,
            this.view.date,
            this.view.hour,
            this.view.minute,
            this.view.second
        ])
        this.view.unixDate = this.view.dateObj.valueOf();
        return this;
    },

    /**
     * @desc setView
     * @public
     * @param key
     * @param value
     * @returns {Class_DatepickerState}
     */
    setView: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                var pd = new persianDate(value);
                self.view.year = pd.year();
                self.view.month = pd.month();
                self.view.date = pd.date();
                self.view.unixDate = value;
                break;
            case 'year':
                this.view.year = value;
                this._updateViewUnix();
                break;
            case 'month':
                this.view.month = value;
                this._updateViewUnix();
                break;
            case 'date':
                this.view.month = value;
                this._updateViewUnix();
                break;
        }
        return this;
    }
};


var State = function (options) {
    return inherit(this, [ClassDatepickerState, options]);
};

