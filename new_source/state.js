class State {
    constructor(datepicker) {
        this.datepicker = datepicker;
        this.filetredDate = (this.datepicker.options.minDate || this.datepicker.options.maxDate);
        this.viewModeList = ['day', 'month', 'year'];
        this.viewMode = datepicker.options.viewMode; // defaul 'day'
        this.viewModeIndex = this.viewModeList.indexOf(datepicker.options.viewMode); // defaul 'day'
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
            dateObject: null
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
        var self = this;
        switch (key) {
            case 'unix':
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.year = pd.year();
                self.selected.month = pd.month();
                self.selected.date = pd.date();
                self.selected.hour = pd.hour();
                self.selected.minute = pd.minute();
                self.selected.second = pd.second();
                self._updateSelectedUnix();
                break;
            case 'year':
                this.selected.year = value;
                self._updateSelectedUnix();
                break;
            case 'month':
                this.selected.month = value;
                self._updateSelectedUnix();
                break;
            case 'date':
                this.selected.month = value;
                self._updateSelectedUnix();
                break;
        }
        return this;
    }

    _updateSelectedUnix() {
        this.selected.dateObj = new persianDate([this.selected.year,
            this.selected.month,
            this.selected.date,
            this.selected.hour,
            this.selected.minute,
            this.selected.second
        ]);
        this.selected.unixDate = this.selected.dateObj.valueOf();
        this.datepicker.selectDate(this.selected.unixDate);
        return this;
    }

    _syncViewModes(pd) {
        this.view.year = pd.year();
        this.view.month = pd.month();
        this.view.date = pd.date();
    }

    _updateViewUnix() {
        this.view.dateObj = new persianDate([
            this.view.year,
            this.view.month,
            this.view.date,
            this.view.hour,
            this.view.minute,
            this.view.second
        ]);
        this._syncViewModes(this.view.dateObj)
        this.view.unixDate = this.view.dateObj.valueOf();
        this.datepicker.view.render(this.view);
        return this;
    }

    navigate(nav,) {
        if (nav == 'next') {
            if (this.viewMode == 'year') {
                this.updateView('year', this.view.year + 12);
            }
            if (this.viewMode == 'month') {
                this.updateView('year', this.view.year + 1);
            }
            if (this.viewMode == 'day') {
                if ((this.view.month + 1) == 13) {
                    this.updateView('year', this.view.year + 1);
                    this.updateView('month', 1);
                } else {
                    this.updateView('month', this.view.month + 1);
                }
            }
        }
        else {
            if (this.viewMode == 'year') {
                this.updateView('year', this.view.year - 12);
            }
            if (this.viewMode == 'month') {
                this.updateView('year', this.view.year - 1);
            }
            if (this.viewMode == 'day') {
                if ((this.view.month - 1) <= 0) {
                    this.updateView('year', this.view.year - 1);
                    this.updateView('month', 12);
                } else {
                    this.updateView('month', this.view.month - 1);
                }
            }
        }
    }

    switchViewMode() {
        this.viewModeIndex = ((this.viewModeIndex + 1) >= this.viewModeList.length) ? 0 : (this.viewModeIndex + 1);
        this.viewMode = (this.viewModeList[this.viewModeIndex]) ? (this.viewModeList[this.viewModeIndex]) : (this.viewModeList[0]);
        this._updateViewUnix();
        return this;
    }

    switchViewModeTo(viewMode) {
        this.viewMode = viewMode;
        this.viewModeIndex = this.viewModeList.indexOf(viewMode);
    }

    updateView(key, value) {
        var self = this;
        switch (key) {
            case 'unix':
                var pd = new persianDate(value);
                self.view.year = pd.year();
                self.view.month = pd.month();
                self.view.date = pd.date();
                break;
            case 'year':
                this.view.year = value;
                break;
            case 'month':
                this.view.month = value;
                break;
            case 'date':
                this.view.month = value;
                break;
        }
        this._updateViewUnix();
        return this;
    }
}