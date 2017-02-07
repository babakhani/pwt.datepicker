class Options {
    constructor(options) {
        return this.compatibility($.extend(true, this, DefaultConfig, options));
    }

    compatibility(options) {
        if (options.onlyTimePicker) {
            options.dayPicker.enabled = false;
            options.monthPicker.enabled = false;
            options.yearPicker.enabled = false;
            options.timePicker.enabled = true;
        }

        if (options.timePicker.hour.step == null) {
            options.timePicker.hour.step = options.timePicker.step;
        }
        if (options.timePicker.minute.step == null) {
            options.timePicker.minute.step = options.timePicker.step;
        }
        if (options.timePicker.second.step == null) {
            options.timePicker.second.step = options.timePicker.step;
        }

        if(options.dayPicker.enabled == false){
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