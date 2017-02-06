class Input {
    constructor(datepicker, inputElement) {
        this.datepicker = datepicker;
        this.elem = inputElement;
        this.initialUnix = null;
        return this;
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