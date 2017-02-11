/**
 *
 */
class ConfigClass {

    constructor(){
        return {
            /**
             * @memberOf ConfigClass
             */
            'initialValue': true,
            'persianDigit': true
        }

    }


    // /**
    //  * Desc format <input/> elemnt value
    //  * @param unixDate
    //  * @return {*}
    //  */
    // formatter(unixDate) {
    //     var self = this;
    //     var pdate = new persianDate(unixDate);
    //     pdate.formatPersian = this.persianDigit;
    //     return pdate.format(self.format);
    // }
    //
    // altFieldFormatter(unixDate) {
    //     var self = this;
    //     var thisAltFormat = self.altFormat.toLowerCase();
    //     if (thisAltFormat === "gregorian" || thisAltFormat === "g") {
    //         return new Date(unixDate);
    //     }
    //     if (thisAltFormat === "unix" || thisAltFormat === "u") {
    //         return unixDate;
    //     }
    //     else {
    //         var pd = new persianDate(unixDate);
    //         pd.formatPersian = this.persianDigit;
    //         return pd.format(self.altFormat);
    //     }
    // }
    //
    //
    // checkDate(unix) {
    //     return true;
    // }
    //
    // checkMonth(month) {
    //     return true;
    // }
    //
    // checkYear(year) {
    //     return true;
    // }
    //
    // onSelect(unixDate) {
    //     debug(this, 'datepicker Event: onSelect : ' + unixDate);
    // }
    //
    // onShow() {
    //     debug(this, 'dayPicker Event: onShow ');
    // }
    //
    // onHide() {
    //     debug(this, 'dayPicker Event: onHide ');
    // }
    //
    // onToggle() {
    //     debug(this, 'dayPicker Event: onToggle ');
    // }
    //
    // onDestroy() {
    //     debug(this, 'dayPicker Event: onDestroy ');
    // }
    //
    // constructor() {
    //     this.initialValue = true;
    //     this.persianDigit = true;
    //     this.viewMode = 'day';
    //     this.format = false;
    //     this.altField = false;
    //     this.altFormat = 'unix';
    //     this.minDate = null;
    //     this.maxDate = null;
    //
    //     this.onlyTimePicker = false;
    //     this.onlySelectOnDate = true;
    //
    //
    //     this.autoClose = false;
    //
    //     this.position = 'auto';
    //
    //     this.navigator = {
    //         'enabled': true,
    //         'text': {
    //             'btnNextText': "<",
    //             'btnPrevText': ">"
    //         },
    //         'onNext': function (navigator) {
    //             //log("navigator next ");
    //         },
    //         'onPrev': function (navigator) {
    //         },
    //         'onSwitch': function (state) {
    //             // console.log("navigator switch ");
    //         }
    //     };
    //     this.toolbox = {
    //         'enabled': true,
    //         'text': {
    //             btnToday: "امروز"
    //         },
    //         onToday: function (toolbox) {
    //             //log("toolbox today btn");
    //         }
    //     };
    //
    //     this.timePicker = {
    //         'enabled': true,
    //         'step': 1,
    //         'hour': {
    //             'enabled': true,
    //             'step': null // overwrite by parent step
    //         },
    //         'minute': {
    //             'enabled': true,
    //             'step': null // overwrite by parent step
    //         },
    //         'second': {
    //             'enabled': true,
    //             'step': null // overwrite by parent step
    //         },
    //         'meridian': {
    //             'enabled': true
    //         }
    //     };
    //
    //
    //     this.dayPicker = {
    //         'enabled': true,
    //         'titleFormat': 'YYYY MMMM',
    //         'titleFormatter': function (year, month) {
    //             var titleDate = new persianDate([year, month]);
    //             titleDate.formatPersian = this.datepicker.options.persianDigit;
    //             return titleDate.format(this.datepicker.options.dayPicker.titleFormat);
    //         },
    //         'onSelect': function (selectedDayUnix) {
    //             debug('dayPicker Event: onSelect : ' + selectedDayUnix);
    //         }
    //
    //     };
    //
    //     this.monthPicker = {
    //         'enabled': true,
    //         'titleFormat': 'YYYY',
    //         'titleFormatter': function (unix) {
    //             var titleDate = new persianDate(unix);
    //             titleDate.formatPersian = this.datepicker.options.persianDigit;
    //             return titleDate.format(this.datepicker.options.monthPicker.titleFormat);
    //         },
    //         'onSelect': function (monthIndex) {
    //             debug('monthPicker Event: onSelect : ' + monthIndex);
    //         }
    //     };
    //
    //
    //     this.yearPicker = {
    //         'enabled': true,
    //         'titleFormat': 'YYYY',
    //         'titleFormatter': function (year) {
    //             let remaining = parseInt(year / 12, 10) * 12;
    //             let startYear = new pDate([remaining]);
    //             let endYear = new pDate([remaining + 11]);
    //             startYear.formatPersian = this.datepicker.options.persianDigit;
    //             endYear.formatPersian = this.datepicker.options.persianDigit;
    //             return startYear.format(this.datepicker.options.yearPicker.titleFormat) + "-" + endYear.format(this.datepicker.options.yearPicker.titleFormat);
    //         },
    //         'onSelect': function (year) {
    //             debug('yearPicker Event: onSelect : ' + year);
    //         }
    //     }
    //
    //     return this;
    //
    // }
}
