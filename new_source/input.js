class Input {
    constructor(datepicker, inputElement) {
        this.datepicker = datepicker;
        this.elem = inputElement;
        this.initialUnix = null;
        return this;
    }

    attachInputElementEvents() {
        let that = this;
        $(this.elem).focus(function () {
            that.datepicker.view.show();
        });
        $(this.elem).blur(function (e) {
            // TODO: must fix
            // if ($(e.target).parents('#' + that.datepicker.view.id).length < 0) {
           // that.datepicker.view.hide();
            //}
        });
    }

    getInputPosition() {
        return $(this.elem).position();
    }

    getInputSize() {
        return {
            width: $(this.elem).outerWidth(),
            height: $(this.elem).outerHeight()
        }
    }

    updateAltField(unix) {
        let value = this.datepicker.options.altFieldFormatter(unix);
        $(this.datepicker.options.altField).val(value);
    }

    updateInputField(unix) {
        let value = this.datepicker.options.formatter(unix);
        $(this.elem).val(value);
    }

    update(unix) {
        this.updateInputField(unix);
        this.updateAltField(unix);
    }

    getOnInitState() {
        let garegurianDate = null;
        let $inputElem = $(this.elem);
        this.initialUnix = null;
        if ($inputElem[0].nodeName === 'INPUT') {
            garegurianDate = new Date($inputElem[0].getAttribute('value')).valueOf();
        }
        else {
            garegurianDate = new Date($inputElem.data('date')).valueOf();
        }
        if (garegurianDate && garegurianDate != 'undefined') {
            this.initialUnix = garegurianDate;
        }
        else {
            this.initialUnix = new Date().valueOf();
        }
        return this.initialUnix;
    }

}