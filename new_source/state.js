class State {
    constructor(datepicker) {
        this.datepicker = datepicker;
        this.filetredDate = (this.datepicker.options.minDate || this.datepicker.options.maxDate);
        this.viewModeList = this.datepicker.options._viewModeList;
        this.viewMode = (this.viewModeList.indexOf(datepicker.options.viewMode) > 0) ? datepicker.options.viewMode : this.viewModeList[0]; // defaul 'day'
        this.viewModeIndex = (this.viewModeList.indexOf(datepicker.options.viewMode) > 0) ? this.viewModeList.indexOf(datepicker.options.viewMode) : 0; // defaul 'day'
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
        this.setFilterDate(this.datepicker.options.minDate, this.datepicker.options.maxDate);
        return this;
    }

    setFilterDate(minDate, maxDate) {
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
    };

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
                this.selected.month = value;
                that._updateSelectedUnix();
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
        return this;
    }

    _syncViewModes(pd) {
        this.view.year = pd.year();
        this.view.month = pd.month();
        this.view.date = pd.date();
    }

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

    switchViewMode() {
        this.viewModeIndex = ((this.viewModeIndex + 1) >= this.viewModeList.length) ? 0 : (this.viewModeIndex + 1);
        this.viewMode = (this.viewModeList[this.viewModeIndex]) ? (this.viewModeList[this.viewModeIndex]) : (this.viewModeList[0]);
        this._setViewDateTimeUnix();
        return this;
    }

    switchViewModeTo(viewMode) {
        if (this.viewModeList.indexOf(viewMode) >= 0) {
            this.viewMode = viewMode;
            this.viewModeIndex = this.viewModeList.indexOf(viewMode);
        }
    }


    _setViewDateTimeUnix() {
        this.view.dateObject = new persianDate([
            this.view.year,
            this.view.month,
            this.view.date,
            this.view.hour,
            this.view.minute,
            this.view.second
        ]);
        this._syncViewModes(this.view.dateObject)
        this.view.unixDate = this.view.dateObject.valueOf();
        this.datepicker.view.render(this.view);
        return this;
    }

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
                this.view.month = value;
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