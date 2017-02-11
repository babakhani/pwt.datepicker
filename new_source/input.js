/**
 * Do every thing about <input/> element like get default value, set new value, set alt field input and etc.
 */
class Input {

    /**
     * @param {Datepicker} datepicker
     * @param {Element} inputElement
     * @return {Input}
     */
    constructor(datepicker, inputElement) {

        /**
         * @type {Datepicker} datepicker
         */
        this.datepicker = datepicker;

        /**
         * @type {Element} input element
         */
        this.elem = inputElement;

        /**
         * @type {Number} initialUnix
         */
        this.initialUnix = null;
        this._attachInputElementEvents();
        return this;
    }

    /**
     * @private
     * @desc attach events to input field
     */
    _attachInputElementEvents() {
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


    /**
     * @desc get <input/> element position
     * @return {{top: Number, left: Number}}
     * @todo remove jquery
     */
    getInputPosition() {
        return $(this.elem).position();
    }


    /**
     * @desc get <input/> element size
     * @return {{width: Number, height: Number}}
     * @todo remove jquery
     */
    getInputSize() {
        return {
            width: $(this.elem).outerWidth(),
            height: $(this.elem).outerHeight()
        };
    }


    /**
     * @desc update <input/> element value
     * @param {Number} unix
     * @todo remove jquery
     * @private
     */
    _updateAltField(unix) {
        let value = this.datepicker.options.altFieldFormatter(unix);
        $(this.datepicker.options.altField).val(value);
    }


    /**
     * @desc update <input/> element value
     * @param {Number} unix
     * @todo remove jquery
     * @private
     */
    _updateInputField(unix) {
        let value = this.datepicker.options.formatter(unix);
        $(this.elem).val(value);
    }


    /**
     * @desc
     * @param unix
     */
    update(unix) {
        this._updateInputField(unix);
        this._updateAltField(unix);
    }


    /**
     * @desc return initial value
     * @return {Number} - unix
     */
    getOnInitState() {
        let garegurianDate = null;
        let $inputElem = $(this.elem);
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