var TEMPLATE = {
    datepciker: "<div class='{{css.datePickerPlotArea}}' >" + //
        "<div class='{{css.navigator}}' ></div>" +//
        " <div class='{{css.dayView}}' ></div>" + //
        "<div class='{{css.monthView}}' ></div>" + //
        "<div class='{{css.yearView}}' ></div>" + //
        "<div class='{{css.timeView}}' ></div>" + //
        "<div class='{{css.toolbox}}' ></div>" + //
        "</div>",
    navigator: "<div class='{{css.datpickerHeader}}' >" + //
        "<div class='{{css.btnNext}}' >{{btnNextText}}</div>" + //
        "<div class='{{css.btnSwitch}}' >{{btnSwitchText}}</div>" + //
        "<div class='{{css.btnPrev}}' >{{btnPrevText}}</div>" + //
        "</div>",
    timepicker:
        "<div class='hour' >" + //
            "<div class='up-btn' >+</div>" + //
            "<input type='text' placeholder='hour' class='hour-input' />" + //
            "<div class='down-btn' >-</div>" + //
        "</div>" + //
        "<div class='minute' >" + //
            "<div class='up-btn' >+</div>" + //
            "<input type='text' placeholder='minute' class='minute-input' />" + //
            "<div class='down-btn' >-</div>" + //
        "</div>" + //
        "<div class='second' >" + //
            "<div class='up-btn' >+</div>" + //
            "<input type='text' placeholder='second' class='second-inout' />" + //
            "<div class='down-btn' >-</div>" + //
        "</div>" + //
        "<div class='meridian' >" + //
            "<div class='up-btn' >+</div>" + //
            "<input type='text' placeholder='meridian&' class='meridian-inout' />" + //
            "<div class='down-btn' >-</div>" + //
        "</div>"
}