class PersianDateParser {
    constructor() {
        this.pattern = {
          iso: /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\\.[0-9]+)?(Z)?$/g,
          jalali: /^[1-4]\d{3}(\/|-|\.)((0?[1-6](\/|-|\.)((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))(\/|-|\.)(30|([1-2][0-9])|(0?[1-9]))))$/g
        };
    }

    parse(inputString) {
        let that = this,
            persianDateArray,
            isoPat = new RegExp(that.pattern.iso),
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
        } else if (isoPat.test(inputString)) {
          /* eslint-disable no-useless-escape */
          persianDateArray = inputString.split(/\/|-|\,|\:|\T|\Z/g).map(Number);
          return persianDateArray;
          /* eslint-enable no-useless-escape */
        } else {
            return undefined;
        }

    }

}

module.exports = PersianDateParser;
