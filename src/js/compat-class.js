/**
 * @desc Instantiate by {@link ClassDatepicker}
 * @class ClassCompat
 * @memberOf ClassDatepicker
 * @type {{}}
 */
var ClassCompat = {
    /**
     * @memberOf ClassDatepicker.ClassCompat
     * @returns {ClassDatepicker}
     */
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
            } else {
                this.justSelectOnDate = false;
            }
        }
        if (this.minDate | this.maxDate) {
            this.state.setFilterDate('unix', this.minDate, this.maxDate);
            this.state._filetredDate = true;
        } else {
            this.state._filetredDate = false;
        }
        return this;
    }
};