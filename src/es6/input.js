let Helper = require('./helper');
let PersianDateParser = require('./parser');
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

        if (this.model.options.observer) {
            this.observe();
        }

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

    parseInput(inputString) {
        let parse = new PersianDateParser(),
            that = this;
        if (parse.parse(inputString) !== undefined) {
            let pd = new persianDate(parse.parse(inputString)).valueOf();
            that.model.state.setSelectedDateTime('unix', pd);
            that.model.state.setViewDateTime('unix', pd);
        }
    }

    observe() {
        let that = this;
        /////////////////   Manipulate by Copy And paste
        $(that.elem).bind('paste', function (e) {
            Helper.delay(function () {
                that.parseInput(e.target.value);
            }, 60);
        });
        let typingTimer,
            doneTypingInterval = that.model.options.inputDelay,
            ctrlDown = false,
            ctrlKey = [17, 91], vKey = 86, cKey = 67;

        $(document).keydown(function (e) {
            if ($.inArray(e.keyCode, ctrlKey) > 0)
                ctrlDown = true;
        }).keyup(function (e) {
            if ($.inArray(e.keyCode, ctrlKey) > 0)
                ctrlDown = false;
        });

        $(that.elem).bind("keyup", function (e) {
            var $self = $(this);
            var trueKey = false;
            if (e.keyCode === 8 || e.keyCode < 105 && e.keyCode > 96 || e.keyCode < 58 && e.keyCode > 47 || (ctrlDown && (e.keyCode == vKey || $.inArray(e.keyCode, ctrlKey) > 0  ))) {
                trueKey = true;
            }
            if (trueKey) {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function () {
                    doneTyping($self);
                }, doneTypingInterval);
            }
        });

        $(that.elem).on('keydown', function () {
            clearTimeout(typingTimer);
        });
        function doneTyping($self) {
            that.parseInput($self.val());
        }

        /////////////////   Manipulate by alt changes
        // TODO
        // self.model.options.altField.bind("change", function () {
        //     //if (!self._flagSelfManipulate) {
        //         var newDate = new Date($(this).val());
        //         if (newDate !== "Invalid Date") {
        //             var newPersainDate = new persianDate(newDate);
        //             self.selectDate(newPersainDate.valueOf());
        //         }
        //   //  }
        // });
    }

    /**
     * @private
     * @desc attach events to input field
     */
    _attachInputElementEvents() {
        let that = this;
        $(this.elem).on('focus click', function () {
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
        if ($(this.elem).val() != value) {
            $(this.elem).val(value);
        }
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

module.exports = Input;
