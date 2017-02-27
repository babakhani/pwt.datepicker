/**
 * Datepicker
 */
class Model {

    /**
     *
     * @param inputElement
     * @param options
     */
    constructor(inputElement, options) {


        /**
         * @type {DateUtil} DateUtil - date helper class
         */


        /**
         * @type {unix} [initialUnix=null]
         */
        this.initialUnix = null;


        /**
         * @type {Object} [inputElement=inputElement]
         */
        this.inputElement = inputElement;


        /**
         * @type {Options} handle works about config
         */
        this.options = new Options(options);


        /**
         * @type {Input} handle works about input and alt field input element
         */
        this.input = new Input(this, inputElement);


        /**
         *
         * @type {State} set and get selected and view and other state
         */
        this.state = new State(this);


        /**
         *
         * @type {View} render datepicker view base on State
         */
        this.view = new View(this);

        /**
         *
         * @type {Toolbox} handle works about toolbox
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
         *
         * @type {Navigator} handle navigation and dateoicker element events
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