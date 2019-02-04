let Model = require('./model');

/**
 * @author babakhani.reza@gmail.com
 * @description jquery plugin initializer
 */
/*eslint-disable no-unused-vars */
module.exports = function (options) {
    let args = Array.prototype.slice.call(arguments), output = null, self = this;
    if (!this) {
        $.error('Invalid selector');
    }
    $(this).each(function () {
        // encapsulation Args
        let emptyArr = [],
          tempArg = args.concat(emptyArr),
          dp = $(this).data('datepicker'),
          funcName = null;
        if (dp && typeof tempArg[0] === 'string') {
            funcName = tempArg[0];
            output = dp[funcName](tempArg[0]);
        } else {
            self.pDatePicker = new Model(this, options);
        }
    });
    $(this).data('datepicker', self.pDatePicker);
    return self.pDatePicker;
};
/*eslint-enable no-unused-vars */
