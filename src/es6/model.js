let State = require('./state');
let Toolbox = require('./toolbox');
let View = require('./view');
let Input = require('./input');
let API = require('./api');
let Navigator = require('./navigator');
let Options = require('./options');
let PersianDateWrapper = require('./persian-date-wrapper');


/**
 * Main datepicker object, manage every things
 */
class Model {

    /**
     * @param inputElement
     * @param options
     * @private
     */
    constructor(inputElement, options) {


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
        this.options = new Options(options, this);


        /**
         *
         * @type {PersianDateWrapper}
         */
        this.PersianDate = new PersianDateWrapper(this);

        /**
         * @desc set and get selected and view and other state
         * @type {State}
         */
        this.state = new State(this);


        this.api = new API(this);

        /**
         * @desc handle works about input and alt field input element
         * @type {Input}
         */
        this.input = new Input(this, inputElement);


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
        this.state.setSelectedDateTime('unix', this.input.getOnInitState());
        this.view.render();

        /**
         * @desc handle navigation and dateoicker element events
         * @type {Navigator}
         */
        this.navigator = new Navigator(this);

        return this.api;
    }
}

module.exports = Model;
