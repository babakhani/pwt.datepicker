/**
 * Date helper, some useful date method stored here
 * @class
 */
const DateUtil = {

    /**
     * @property convert24hTo12
     * @param hour
     */
    convert24hTo12(hour) {
        let output = hour;
        if (hour > 12) {
            output = hour - 12;
        }
        if (hour === 0) {
            output = 0;
        }
        return output;
    },

    /**
     * check if a date is same as b
     * @param dateA
     * @param dateB
     * @return {boolean}
     * @static
     */
    isSameDay(dateA, dateB) {
        return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    },


    /**
     * @desc check if a month is same as b
     * @param {Date} dateA
     * @param {Date} dateB
     * @return {boolean}
     * @static
     */
    isSameMonth(dateA, dateB) {
        return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
    },

};

module.exports = DateUtil;
