/**
 * Date helper, some useful date method stored here
 * @class
 */
class DateUtil {

    /**
     * @param hour
     * @param meridiem
     * @return {*}
     */
    convertAMtoPM(hour) {
        var output = hour;
        if ((hour + 12) > 24) {
            output = hour - 12;
        }
        if ((hour - 12) < 0) {
            output = hour + 12;
        }
        if ((hour - 12) === 0) {
            output = 0;
        }
        return output;
    }


    /**
     * @property convert24hTo12
     * @param hour
     */
    convert24hTo12(hour, meridiem) {
        var output = hour;
        if (hour > 12) {
            output = hour - 12;
        }
        if (hour === 0) {
            output = 0;
        }
        return output;
    }


    /**
     * @property convert12hTo24
     * @param hour
     * @returns {*}
     */
    convert12hTo24(hour, meridiem) {
        var output = hour;
        if (meridiem === "PM" && hour > 12) {
            output = hour - 12;
        }
        if (meridiem === "AM" && hour < 12 && hour > 0) {
            output = hour + 12;
        }
        if (meridiem === "AM" && hour === 0) {
            output = 12;
        }
        if (meridiem === "PM" && hour === 0) {
            output = 0;
        }
        return output;
    }


    /**
     * check if a date is same as b
     * @param dateA
     * @param dateB
     * @return {boolean}
     * @static
     */
    isSameDay(dateA, dateB) {
        return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    }


    /**
     * @desc check if a month is same as b
     * @param {Date} dateA
     * @param {Date} dateB
     * @return {boolean}
     * @static
     */
    isSameMonth(dateA, dateB) {
        return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    }


    /**
     * @desc normalize time, like check second if bigger than 60
     * @param {string} key
     * @param {number} value
     * @return {number}
     * @static
     */
    normalizeTime(key, value) {
        let output = value;
        if (key == 'hour') {
            if (value < 0) {
                output = 23;
            } else if (value > 23) {
                output = 0;
            }
        }
        else if (key == 'minute' || key == 'second') {
            if (value < 0) {
                output = 59;
            } else if (value > 59) {
                output = 0;
            }
        }
        return output;
    }
}
