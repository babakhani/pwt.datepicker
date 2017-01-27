class State {
    constructor(options, datepicker) {
        this.datepicker = datepicker;
        this._filetredDate = false;
        this.viewmode = datepicker.options.viewMode; // defaul 'day'
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
        return this;

    }

    _changeViewMode(viewmodeStr) {
        log('_changeViewMode : ' + viewmodeStr);
        this.viewmode = viewmodeStr;
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
        this.view.unixDate = this.view.dateObj.valueOf();
        this.datepicker.view.render(this.view);
        return this;
    }

    next() {
        log('state next')
    }

    prev(){
        log('state prev')
    }

    switchViewMode(){
        log('state switchViewMode')
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