/**
 * Do every thing about input element like get default value, set new value, set alt field input and etc.
 */
class Input {

    /**
     * @param {Model} model
     * @param {Element}
     * @return {Input}
     */
    constructor(model, inputElement) {

        /**
         * @type {Object}
         */
        this.model = model;

        /**
         * @type {Element}
         */
        this.elem = inputElement;

        // if (this.model.options.observer) {
        this.observe();
        // }


        this.addInitialClass();

        /**
         * @type {Number}
         */
        this.initialUnix = null;
        this._attachInputElementEvents();
        return this;
    }


    addInitialClass() {
        $(this.elem).addClass('pwt-datepicker-input-element');
    }


    observe() {
        let that = this;
        let watch = function () {
            var elem = $(this);
            // Save current value of element
            elem.data('oldVal', elem.val());
            // Look for changes in the value
            elem.bind("propertychange change click keyup input paste", function (event) {
                // If value has changed...
                if (elem.data('oldVal') != elem.val()) {
                    // Updated stored value
                    elem.data('oldVal', elem.val());

                    // that.model.state.setViewDateTime('unix', elem.val());
                    // that.model.state.setSelectedDateTime('unix', elem.val());
                }
            });
        };
        $(this.elem).each(watch);
        $(this.model.options.altField).each(watch);
    }

    /**
     * @private
     * @desc attach events to input field
     */
    _attachInputElementEvents() {
        let that = this;
        $(this.elem).on('focus click',function () {
            that.model.view.show();
        });
        if (this.model.state.ui.isInline === false) {
            $(document).on('click', function (e) {
                if (!$(e.target).closest(".datepicker-plot-area, .datepicker-plot-area > *, .pwt-datepicker-input-element").length) {
                    that.model.view.hide();
                }
            });
        }
    }


    /**
     * @desc get <input/> element position
     * @return {{top: Number, left: Number}}
     * @todo remove jquery
     */
    getInputPosition() {
        return $(this.elem).offset();
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
        let value = this.model.options.altFieldFormatter(unix);
        $(this.model.options.altField).val(value);
    }


    /**
     * @desc update <input/> element value
     * @param {Number} unix
     * @todo remove jquery
     * @private
     */
    _updateInputField(unix) {
        let value = this.model.options.formatter(unix);
        $(this.elem).val(value);
    }


    /**
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