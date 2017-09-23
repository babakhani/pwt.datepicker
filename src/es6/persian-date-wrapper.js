class PersianDateWrapper {
    constructor (model) {
        this.model = model;
        this.model.options.calendar_ = this.model.options.calendarType__;
        this.model.options.locale_ = this.model.options.calendar[this.model.options.calendarType__].locale;
        return this;
    }

    date (input) {
        if (window.inspdCount || window.inspdCount === 0) {
            window.inspdCount++;
        } else {
            window.inspdCount = 0;
        }
        const that = this;
        let output, cp;
        cp = persianDate.toCalendar(that.model.options.calendar_);
        if (this.model.options.calendar[this.model.options.calendarType__].leapYearMode) {
            cp.toLeapYearMode(this.model.options.calendar[this.model.options.calendarType__].leapYearMode);
        }
        output = new cp(input);
        return output.toLocale(that.model.options.locale_);
    }
}

module.exports = PersianDateWrapper;
