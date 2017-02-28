/**
 * Main datepicker object, manage every things
 */
class Model {

    /**
     * @param inputElement
     * @param options
     */
    constructor(inputElement, options) {


        /**
         * @desc DateUtil - date helper class
         * @type {DateUtil}
         */


        /**
         * @desc [initialUnix=null]
         * @type {unix}
         */
        this.initialUnix = null;


        /**
         * @desc inputElement=inputElement
         * @type {Object}
         */
        this.inputElement = inputElement;


        /**
         * @desc handle works about config
         * @type {Options}
         */
        this.options = new Options(options);


        /**
         * @desc handle works about input and alt field input element
         * @type {Input}
         */
        this.input = new Input(this, inputElement);


        /**
         * @desc set and get selected and view and other state
         * @type {State}
         */
        this.state = new State(this);


        /**
         * @desc render datepicker view base on State
         * @type {View}
         */
        this.view = new View(this);

        /**
         * @desc handle works about toolbox
         * @type {Toolbox}
         */
        this.toolbox = new Toolbox(this);

        /**
         *
         * @param unix
         */
        this.updateInput = function (unix) {
            this.input.update(unix);
        };

        this.state.setViewDateTime('unix', this.input.getOnInitState());
        if (this.options.initialValue) {
            this.state.setSelectedDateTime('unix', this.input.getOnInitState());
        }


        /**
         * @desc handle navigation and dateoicker element events
         * @type {Navigator}
         */
        this.navigator = new Navigator(this);

        let that = this;
        return {
            'datepicker': this,
            'state': this.state,
            get options() {
                return that.options;
            },
            set options(inputOptions) {
                that.options = new Options(inputOptions);
                that.view.reRender();
            },
            selectDate: this.selectDate,
            updateView: this.view.updateView,
            show: function () {
                that.view.show();
                that.options.onShow(that);
                return that;
            },
            hide: function () {
                that.view.hide();
                that.options.onHide(that);
                return that;
            },
            toggle: function () {
                that.view.toggle();
                that.options.onToggle(that);
                return that;
            },
            destroy: function () {
                that.view.destroy();
                that.options.onDestroy(that);
                return that;
            }
        };
    }
}