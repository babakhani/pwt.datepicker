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
    constructor (model, inputElement) {

        /**
         * @type {Object}
         */
        this.model = model;

        /**
         * @type {boolean}
         * @private
         */
        this._firstUpdate = true;

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


    addInitialClass () {
        $(this.elem).addClass('pwt-datepicker-input-element');
    }

    parseInput (inputString) {
        let parse = new PersianDateParser(),
          that = this;
        if (parse.parse(inputString) !== undefined) {
            let pd = new persianDate(parse.parse(inputString)).valueOf();
            that.model.state.setSelectedDateTime('unix', pd);
            that.model.state.setViewDateTime('unix', pd);
        }
    }

    observe () {
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
            let $self = $(this);
            let trueKey = false;
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
        function doneTyping ($self) {
            that.parseInput($self.val());
        }

        /////////////////   Manipulate by alt changes
        // TODO
        // self.model.options.altField.bind("change", function () {
        //     //if (!self._flagSelfManipulate) {
        //         let newDate = new Date($(this).val());
        //         if (newDate !== "Invalid Date") {
        //             let newPersainDate = new persianDate(newDate);
        //             self.selectDate(newPersainDate.valueOf());
        //         }
        //   //  }
        // });
    }

    /**
     * @private
     * @desc attach events to input field
     */
    _attachInputElementEvents () {
        let that = this;
        let closePickerHandler = function (e) {
            if (!$(e.target).is(that.elem)
              && !$(e.target).is(that.model.view.$container)
              && $(e.target).closest('#' + that.model.view.$container.attr('id')).length == 0
              && !$(e.target).is($(that.elem).children())) {
                that.model.view.hide();
                $('body').unbind('click', closePickerHandler);
            }
        };

        $(this.elem).on('focus click', function () {
            that.model.view.show();
            if (that.model.state.ui.isInline === false) {
                $('body').bind('click', closePickerHandler);
            }
        });

    }


    /**
     * @desc get <input/> element position
     * @return {{top: Number, left: Number}}
     * @todo remove jquery
     */
    getInputPosition () {
        return $(this.elem).offset();
    }


    /**
     * @desc get <input/> element size
     * @return {{width: Number, height: Number}}
     * @todo remove jquery
     */
    getInputSize () {
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
    _updateAltField (unix) {
        let value = this.model.options.altFieldFormatter(unix);
        $(this.model.options.altField).val(value);
    }


    /**
     * @desc update <input/> element value
     * @param {Number} unix
     * @todo remove jquery
     * @private
     */
    _updateInputField (unix) {
        let value = this.model.options.formatter(unix);
        if ($(this.elem).val() != value) {
            $(this.elem).val(value);
        }
    }


    /**
     * @param unix
     */
    update (unix) {
        if (this.model.options.initialValue == false && this._firstUpdate) {
            this._firstUpdate = false;
        } else {
            this._updateInputField(unix);
            this._updateAltField(unix);

        }
    }


    /**
     * @desc return initial value
     * @return {Number} - unix
     */
    getOnInitState() {
        const persianDatePickerTimeRegex = '^([0-1][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$'
        let garegurianDate = null;
        let $inputElem = $(this.elem);
        let inputValue = null;
        if ($inputElem[0].nodeName === 'INPUT') {
            inputValue = $inputElem[0].getAttribute('value')
        }
        else {
            inputValue = $inputElem.data('date')
        }

        // Check time string by regex
        if (inputValue && inputValue.match(persianDatePickerTimeRegex)) {
            let timeArray = inputValue.split(':'),
              tempDate = new Date();
            tempDate.setHours(timeArray[0]);
            tempDate.setMinutes(timeArray[1]);
            if (timeArray[2]) {
                tempDate.setSeconds(timeArray[2]);
            } else {
                tempDate.setSeconds(0);
            }
            this.initialUnix = tempDate.valueOf();
        }
        else {
            if (this.model.options.calendarType === 'persian' && inputValue) {
                let parse = new PersianDateParser()
                let pd = new persianDate(parse.parse(inputValue)).valueOf();
                garegurianDate = new Date(pd).valueOf();
            } else {
                garegurianDate = new Date(inputValue).valueOf();
            }

            if (garegurianDate && garegurianDate != 'undefined') {
                this.initialUnix = garegurianDate;
            }
            else {
                this.initialUnix = new Date().valueOf();
            }
        }
        return this.initialUnix;
    }

}

module.exports = Input;
