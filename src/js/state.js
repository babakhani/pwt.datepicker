var Class_DatepickerState = {
    view: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },
    selected: {
        year: 0,
        month: 0,
        date: 0,
        hour: 0,
        minute: 0,
        second: 0,
        unixDate: 0
    },
    _updateSelectedUnix: function () {
        var self = this;
        this.selected.unixDate = new persianDate([this.selected.year ? this.selected.year : 0, this.selected.month, this.selected.date ]).valueOf();
        return this;
    },
    setSelected: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
            {
                self.selected.unixDate = value;
                var pd = new persianDate(value);
                self.selected.year = pd.year();
                self.selected.month = pd.month();
                self.selected.date = pd.date();
                break;
            }
            case 'year':
            {
                this.selected.year = value;
                self._updateSelectedUnix();
                break;
            }
            case 'month':
            {
                this.selected.month = value
                self._updateSelectedUnix();
                break;
            }
            case 'date':
            {
                this.selected.month = value
                self._updateSelectedUnix();
                break;
            }
        }
        return this;
    },
    syncViewWithelected: function () {
        this.view.year = this.selected.year;
        this.view.month = this.selected.month;
        this.view.date = this.selected.date;
        this.view.unixDate = this.selected.unixDate;
        return this;
    },
    setView: function (key, value) {
        var self = this;
        switch (key) {
            case 'unix':
            {
                var pd = new persianDate(value);
                self.view.year = pd.year();
                self.view.month = pd.month();
                self.view.date = pd.date();
                self.view.unixDate = value;
                break;
            }
            case 'year':
            {
                this.view.year = value;

            }
            case 'month':
            {
                this.view.month = value;
            }
            case 'date':
            {
                this.view.month = value;
            }
        }
        return this;
    }
};
var State = function (options) {
    return inherit(this, [Class_DatepickerState, options]);
};

