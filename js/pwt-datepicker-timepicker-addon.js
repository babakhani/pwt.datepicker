/*
 *  @company: WebSys Experts Co.
 *  @author: Erfan Shamabadi
 *	@version: 1.0.0
 *  
 *  5/26/2014
 *  MIT license
 *  
 */
(function($) {

    var DateTimePicker = function(persianDatepicker, options) {

        var self = this;

        this.datepicker = persianDatepicker;
        this.options = options;
        this.$elem = null;

        $.extend(this.datepicker.state, {
            selectedHour: 0,
            selectedMinute: 0,
            selectedSecond: 0,
            viewHour: 0,
            viewMinute: 0,
            viewSecond: 0
        });

        var container = this.datepicker.container;

        if (container.dayView.find("div.timepicker").length === 0 && options.showTimepicker) {
            this.$elem = this._injectTimePicker();
        }

        var $container = $(container.dayView.add(container.monthView).add(container.yearView));

        $container.mousedown(function(e) {
            e.stopPropagation();
            return false;
        });

        $container.click(function(e) {
            e.stopPropagation();
            return false;
        });

        this.datepicker.inputElem.off("blur").blur(function() {
            if (!self.$elem.find(".ui-state-active").length) {
                self.datepicker.hide();
            }
        });

    };

    DateTimePicker.prototype._injectTimePicker = function() {

        var self = this;

        var dayView = this.datepicker.container.dayView;
        if (dayView.find("div.timepicker").length !== 0) {
            return;
        }

        var $elem = $("<div class='timepicker'/>");
        var html =
                "<dl>" +
                "<dt>"+ this.options.timeText +"</dt><dd class='time'>00:00</dd>" +
                "<dt>"+ this.options.hourText +"</dt><dd class='hour'><div class='slider' /></dd>" +
                "<dt>"+ this.options.minuteText +"</dt><dd class='minute'><div class='slider' /></dd>" +
                "<dt style='display:none'>"+ this.options.secondText +"</dt><dd class='second' style='display:none'><div class='slider' /></dd>" +
                "</dl>";

        $elem.html(html);

        $elem.find("dl").css({margin: "10px"});
        $elem.find("dt").css({float: "left"});
        $elem.find("dd").css({margin: "12px 0 10px 60px"});

        var
                hourSlider = $elem.find(".hour .slider"),
                minuteSlider = $elem.find(".minute .slider"),
                secondSlider = $elem.find(".second .slider");


        var changeTime = function() {

            var
                    hour = hourSlider.slider("value"),
                    minute = minuteSlider.slider("value"),
                    second = secondSlider.slider("value");

            self.changeTime(hour, minute, second);
        };

        $elem.find(".slider").slider({orientation: "horizontal", min: 0, change: changeTime, slide: changeTime});

        hourSlider.slider({max: 23});
        minuteSlider.slider({max: 59});
        secondSlider.slider({max: 59});

        dayView.append($elem);
        return $elem;
    };

    DateTimePicker.prototype.changeTime = function(hour, minute, second) {
        hour = hour || 0;
        minute = minute || 0;
        second = second || 0;

        var pDate = new persianDate(this.datepicker.state.unixDate);

        var pDateTime = new persianDate([pDate.year(), pDate.month(), pDate.date(), hour, minute, second]);

        this.datepicker.state.unixDate = pDateTime.valueOf();
        this.datepicker.state.selectedHour = this.datepicker.state.viewHour = hour;
        this.datepicker.state.selectedMinute = this.datepicker.state.viewMinute = minute;
        this.datepicker.state.selectedSecond = this.datepicker.state.viewSecond = second;

        this.$elem.find(".time").text(pDateTime.hour() + ":" + pDateTime.minute());

        this.datepicker._updateInputElement();

    };	

    $.fn.pDatetimepicker = $.fn.persianDatetimepicker = function(options) {

        var $elem = $.fn.persianDatepicker.apply(this, [options]);

        var persianDatepicker = $elem.data("datepicker");

        options = $.extend({
            showTimepicker: true,
			timeText: 'زمان',
			hourText: 'ساعت',
			minuteText: 'دقیقه',
			secondText: 'ثانیه'
        }, options);

        var timePicker = new DateTimePicker(persianDatepicker, options);
        persianDatepicker.timePicker = timePicker;

        return $elem;

    };

})(jQuery)