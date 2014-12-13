var Class_DatepickerConfig = {
    cssClass: 'datepicker-container',
    daysTitleFormat: "YYYY MMMM",
    persianDigit: true,
    // Released Do not Any Change
    viewMode: "day", /// day,month,year
    position: "auto", // [x,y]
    autoClose: false,
    toolbox: true,
    // 0.0.4
    format: false,
    observer: false,
    altField: false,
    altFormat: "unix",
    inputDelay: 800,
    // Deprecated In 0.0.4
    //=mask : false, //unix,Gregorian
    viewFormat: "YYYY/MM/DD",
    formatter: function (unixDate) {
        var self = this;
        var pdate = new persianDate(unixDate);
        pdate.formatPersian = false;
        return pdate.format(self.viewFormat);
    },
    altFieldFormatter: function (unixDate) {
        var self = this;
        if (self.altFormat.toLowerCase() == "gregorian" | self.altFormat.toLowerCase() == "g")
            return new Date(self.state.unixDate);
        if (self.altFormat.toLowerCase() == "unix" | self.altFormat.toLowerCase() == "u")
            return self.state.unixDate;
        else
            return new persianDate(self.state.unixDate).format(self.altFormat);
    },
    //--------------------------------------------------------
    events: {},
    _viewed: false,
    // ------------------------------------------------------------------------ Public Methud
    show: function () {
        this.view.fixPosition(this);
        this.element.main.show();
        this.onShow(this);
        this._viewed = true;
        return this;
    },
    hide: function () {
        if (this._viewed) {
            this.element.main.hide();
            this.onHide(this);
            this._viewed = false;
        }
        return this;
    },
    onShow: function (self) {
    },
    onHide: function (self) {
    },
    // TODO: add this to documentation
    onSelect: function (unixDate) {
    }
}