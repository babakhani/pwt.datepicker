/**
 * Persian-Datepicker
 * @author Reza Babakhani
 */

import Datepicker from "init.js";
(function ($) {
    $.fn.persianDatepicker = $.fn.pDatepicker = function (options) {
        var args = Array.prototype.slice.call(arguments), output = this;
        if (!this) {
            $.error("Invalid selector");
        }
        $(this).each(function () {
            // encapsulation Args
            var emptyArr = [],
                tempArg = args.concat(emptyArr),
                dp = $(this).data("datepicker"),
                funcName = null;
            if (dp && typeof tempArg[0] === "string") {
                funcName = tempArg[0];
                output = dp[funcName](tempArg[0]);
            } else {
                this.pDatePicker = new Datepicker(this, options);
            }
        });
        return output;
    };
})(jQuery);