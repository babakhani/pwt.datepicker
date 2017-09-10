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
    }
};

module.exports = DateUtil;
