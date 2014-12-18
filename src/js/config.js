/**
 * Default Plugin Config Class
 * @class Config
 */
var ClassConfig = {
    /**
     * @property cssClass
     * @type String
     * @default 'datepicker-container'
     */
    cssClass: 'datepicker-container',
    /**
     * @property daysTitleFormat
     * @type String
     * @default "YYYY MMMM"
     */
    daysTitleFormat: "YYYY MMMM",
    /**
     * @property persianDigit
     * @type boolean
     * @default true
     */
    persianDigit: true,
    /** day, month, year
     * @property viewMode
     * @type string
     * @default "day"
     */
    viewMode: "day",
    /**
     * Array of position [x,y], relative to current position of plugin
     * @property position
     * @type string / array
     * @default "auto"
     */
    position: "auto",
    /**
     * @property autoClose
     * @type boolean
     * @default false
     */
    autoClose: false,
    /**
     * Show Toolbox
     * @property toolbox
     * @type boolean
     * @default true
     */
    toolbox: true,
    /**
     * Show Toolbox
     * @property format
     * @type boolean
     * @default false
     */
    format: false,
    /**
     * if set true, pasted date sync with datepicker
     * @property observer
     * @type boolean
     * @default false
     */
    observer: false,
    /**
     * @property altField
     * @type boolean
     * @default false
     * @deprecated
     */
    altField: false,
    /**
     * @property altFormat
     * @type string
     * @default 'unix'
     * @deprecated
     */
    altFormat: "unix",
    /**
     * @property inputDelay
     * @type number
     * @default 800
     */
    inputDelay: 800,
    // Deprecated In 0.0.4
    //=mask : false, //unix,Gregorian
    /**
     * @property viewFormat
     * @type string
     * @default 'YYYY/MM/DD'
     */
    viewFormat: "YYYY/MM/DD",
    /**
     * @method formatter
     * @type string
     * @param [number] unixDate
     */
    formatter: function (unixDate) {
        var self = this;
        var pdate = new persianDate(unixDate);
        pdate.formatPersian = false;
        return pdate.format(self.viewFormat);
    },
    /**
     * @method altFieldFormatter
     * @type string
     * @param [number] unixDate
     */
    altFieldFormatter: function (unixDate) {
        var self = this;
        if (self.altFormat.toLowerCase() == "gregorian" | self.altFormat.toLowerCase() == "g")
            return new Date(self.state.unixDate);
        if (self.altFormat.toLowerCase() == "unix" | self.altFormat.toLowerCase() == "u")
            return self.state.unixDate;
        else
            return new persianDate(self.state.unixDate).format(self.altFormat);
    },
    /**
     * Show datepicker element
     * @method show
     */
    show: function () {
        this.view.fixPosition(this);
        this.element.main.show();
        this.onShow(this);
        this._viewed = true;
        return this;
    },
    /**
     * Hide datepicker element
     * @method hide
     */
    hide: function () {
        if (this._viewed) {
            this.element.main.hide();
            this.onHide(this);
            this._viewed = false;
        }
        return this;
    },
    /**
     * Event Called On show Datepicker
     * @method onShow
     * @param [object] Datepicker
     */
    onShow: function (self) {
    },
    /**
     * Event Called On hide Datepicker
     * @method onHide
     * @param [object] Datepicker
     */
    onHide: function (self) {
    },
    /**
     * Event Called On Select Date
     * @method onSelect
     * @param [object] Datepicker
     */
    // TODO: add this to documentation
    onSelect: function (unixDate) {
    },

    // Version 3
    /**
     * Event Called On Select Date
     * @method onSelect
     * @param [object] Datepicker
     */
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