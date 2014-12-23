/**
 * @type {{datepciker: string, navigator: string, timepicker: string}}
 */
var TEMPLATE = {
    /**
     * datepicker
     */
    datepciker: "<div class='{{css.datePickerPlotArea}}' >" + //
        "<div class='{{css.navigator}}' ></div>" +//
        " <div class='{{css.dayView}}' ></div>" + //
        "<div class='{{css.monthView}}' ></div>" + //
        "<div class='{{css.yearView}}' ></div>" + //
        "<div class='{{css.timeView}}' ></div>" + //
        "<div class='{{css.toolbox}}' ></div>" + //
        "</div>",


    /**
     * navigator
     */
    navigator: "<div class='{{css.datpickerHeader}}' >" + //
        "<div class='{{css.btnNext}}' >{{btnNextText}}</div>" + //
        "<div class='{{css.btnSwitch}}' >{{btnSwitchText}}</div>" + //
        "<div class='{{css.btnPrev}}' >{{btnPrevText}}</div>" + //
        "</div>",


    /**
     * timepicker
     */
    timepicker: "<div class='hour time-segment' data-time-key='hour' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='hour' class='hour-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>" + //
        "<div class='divider' >:</div>" + //
        "<div class='minute time-segment' data-time-key='minute' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='minute' class='minute-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>" + //
        "<div class='divider second-divider' >:</div>" + //
        "<div class='second time-segment' data-time-key='second' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='second' class='second-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>" + //
        "<div class='divider meridian-divider' ></div>" + //
        "<div class='divider meridian-divider' ></div>" + //
        "<div class='meridian time-segment' data-time-key='meridian' >" + //
        "<div class='up-btn' >&#9650;</div>" + //
        "<input type='text' placeholder='meridian&' class='meridian-input' />" + //
        "<div class='down-btn' >&#9660;</div>" + //
        "</div>",

    /**
     * Month Grid
     */
    monthGrid: "<div class='{{css.main}}' >" + //
        "<div class='{{css.header}}' >" + //
        "<div class='{{css.headerTitle}}' ></div>" + //
        "<div class='{{css.headerRow}}' ></div>" + //
        "</div>" + //
        "<table cellspacing='0' class='{{css.daysTable}}'  ><tbody><tr><td /><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr><tr><td/><td/><td/><td/><td/><td/><td/></tr></tbody></table>" + //
        "</div>"
}