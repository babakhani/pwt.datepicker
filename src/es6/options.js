/**
 * Extend default config from user interred and do compatibility works
 * @public
 */
class Options {

    /**
     * @param {object} options config passed when initialize
     * @return {object}
     * @todo remove jquery
     */
    constructor(options) {
        return this._compatibility($.extend(true, this, Config, options));
    }

    /**
     * @private
     * @param options
     */
    _compatibility(options) {
        if (options.onlyTimePicker) {
            options.dayPicker.enabled = false;
            options.monthPicker.enabled = false;
            options.yearPicker.enabled = false;
            options.navigator.enabled = false;
            options.toolbox.enabled = false;
            options.timePicker.enabled = true;
        }

        if (options.timePicker.hour.step === null) {
            options.timePicker.hour.step = options.timePicker.step;
        }
        if (options.timePicker.minute.step === null) {
            options.timePicker.minute.step = options.timePicker.step;
        }
        if (options.timePicker.second.step === null) {
            options.timePicker.second.step = options.timePicker.step;
        }

        if (options.dayPicker.enabled === false) {
            options.onlySelectOnDate = false;
        }

        options._viewModeList = [];
        if (options.dayPicker.enabled) {
            options._viewModeList.push('day');
        }
        if (options.monthPicker.enabled) {
            options._viewModeList.push('month');
        }
        if (options.yearPicker.enabled) {
            options._viewModeList.push('year');
        }

    }
}