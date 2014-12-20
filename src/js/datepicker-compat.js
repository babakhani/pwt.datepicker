/**
 *
 * @type {{}}
 */
var ClassCompat = {
    compatConfig: function () {
        if (this.viewMode === false) {
            if (this.yearPicker.enabled) {
                this.viewMode = 'year';
            }
            if (this.monthPicker.enabled) {
                this.viewMode = 'month';
            }
            if (this.dayPicker.enabled) {
                this.viewMode = 'day';
            }
        }
    }

};