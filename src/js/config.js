/**
 *
 * @type {{cssClass: string, daysTitleFormat: string, persianDigit: boolean, viewMode: string, position: string, autoClose: boolean, toolbox: boolean, format: boolean, observer: boolean, altField: boolean, altFormat: string, inputDelay: number, viewFormat: string, formatter: formatter, altFieldFormatter: altFieldFormatter, show: show, hide: hide, onShow: onShow, onHide: onHide, onSelect: onSelect, timePicker: {enabled: boolean}, dayPicker: {enabled: boolean}, monthPicker: {enabled: boolean}, yearPicker: {enabled: boolean}}}
 */
var ClassConfig = {

    cssClass: 'datepicker-container',

    daysTitleFormat: "YYYY MMMM",

    persianDigit: true,

    viewMode: "day",

    position: "auto",

    autoClose: false,

    toolbox: true,

    format: false,

    observer: false,

    altField: false,

    altFormat: "unix",

    inputDelay: 800,

    viewFormat: "YYYY/MM/DD",
    /**
     *
     * @param unixDate
     * @returns {*}
     */
    formatter: function (unixDate) {
        'use strict';
        var self = this;
        var pdate = new persianDate(unixDate);
        pdate.formatPersian = false;
        return pdate.format(self.viewFormat);
    },
    /**
     *
     * @param unixDate
     * @returns {*}
     */
    altFieldFormatter: function (unixDate) {
        'use strict';
        var self = this;
        if (self.altFormat.toLowerCase() === "gregorian" | self.altFormat.toLowerCase() === "g") {
            return new Date(self.state.unixDate);
        }
        if (self.altFormat.toLowerCase() === "unix" | self.altFormat.toLowerCase() === "u") {
            return self.state.unixDate;
        }
        else {
            return new persianDate(self.state.unixDate).format(self.altFormat);
        }

    },
    /**
     *
     * @returns {ClassConfig}
     */
    show: function () {
        'use strict';
        this.view.fixPosition(this);
        this.element.main.show();
        this.onShow(this);
        this._viewed = true;
        return this;
    },
    /**
     *
     * @returns {ClassConfig}
     */
    hide: function () {
        'use strict';
        if (this._viewed) {
            this.element.main.hide();
            this.onHide(this);
            this._viewed = false;
        }
        return this;
    },
    /**
     *
     * @param self
     */
    onShow: function (self) {
    },
    /**
     *
     * @param self
     */
    onHide: function (self) {
    },
    /**
     *
     * @param unixDate
     */
    onSelect: function (unixDate) {
    },
    timePicker: {
        enabled: true
    },
    dayPicker: {
        enabled: true
    },
    monthPicker: {
        enabled: true
    },
    yearPicker: {
        enabled: true
    }
}