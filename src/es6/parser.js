class PersianDateParser {
    constructor() {
        this.pattern = {
            jalali: /^[1-4]\d{3}(\/|-|\.)((0?[1-6](\/|-|\.)((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))(\/|-|\.)(30|([1-2][0-9])|(0?[1-9]))))$/g
        };
    }

    parse(inputString) {
        let that = this,
            persianDateArray,
            jalaliPat = new RegExp(that.pattern.jalali);

        String.prototype.toEnglishDigits = function () {
            let charCodeZero = '۰'.charCodeAt(0);
            return this.replace(/[۰-۹]/g, function (w) {
                return w.charCodeAt(0) - charCodeZero;
            });
        };

        inputString = inputString.toEnglishDigits();

        if (jalaliPat.test(inputString)) {
            /* eslint-disable no-useless-escape */
            persianDateArray = inputString.split(/\/|-|\,|\./).map(Number);
            /* eslint-enable no-useless-escape */
            return persianDateArray;
        } else {
            return undefined;
        }

    }

}

module.exports = PersianDateParser;
