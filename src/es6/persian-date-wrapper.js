class PersianDateWrapper {
    constructor (model) {
        this.model = model;
        return this;
    }

    date (input) {
        if (window.inspdCount || window.inspdCount === 0) {
            window.inspdCount++;
        } else {
            window.inspdCount = 0;
        }

//        console.log('creatre persianDate istance --------- performance hit  :' +  window.inspdCount);

        const that = this;
        let output;
        if (that.model.options.calendar.indexOf('persian') == 0) {
            var p = persianDate.toCalendar('persianAlgo');
            output = new p(input);
        } else {
            var g = persianDate.toCalendar('gregorian');
            output = new g(input);
        }
        return output.toLocale(that.model.options.locale);
    }
}

module.exports = PersianDateWrapper;
