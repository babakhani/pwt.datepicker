class PersianDateWrapper {
    constructor (model) {
        this.model = model;
        this.model.options.calendar_ = this.model.options.calendarType;
        this.model.options.locale_ = this.model.options.calendar[this.model.options.calendarType].locale;
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
        if (this.model.options.calendar[this.model.options.calendarType].leapYearMode) {
            cp.toLeapYearMode(this.model.options.calendar[this.model.options.calendarType].leapYearMode);
        }
        output = new cp(input);
        return output.toLocale(that.model.options.locale_);
    }
}

module.exports = PersianDateWrapper;
