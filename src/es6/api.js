/**
 * This is the API documentation for persian-datepicker
 */
class API {
    constructor (model) {
        this.model = model;
    }

    /**
     * @description get current option object
     * @example var pd = $('.selector').persianDatepicker();
     * console.log(pd.options);
     */
    get options () {
        return this.model.options;
    }

    /**
     * @description set options live
     * @example var pd = $('.selector').persianDatepicker();
     * pd.options;
     * //return current options
     * pd.options = {};
     * // set options and render datepicker with new options
     */
    set options (inputOptions) {
        let opt = $.extend(true, this.model.options, inputOptions);
        this.model.view.destroy();
        this.model.components(this.model.inputElement, opt);
    }

    /**
     * @description make datepicker visible
     * @example var pd = $('.selector').persianDatepicker();
     * pd.show();
     */
    show () {
        this.model.view.show();
        this.model.options.onShow(this.model);
        return this.model;
    }

    /**
     * @description return datepicker current state
     * @since 1.0.0
     * @example var pd = $('.selector').persianDatepicker();
     * var state = pd.getState();
     *
     * console.log(state.selected);
     * console.log(state.view);
     * */
    getState () {
        return this.model.state;

    }

    /**
     * @description make datepicker invisible
     * @example var pd = $('.selector').persianDatepicker();
     * pd.show();
     */
    hide () {
        this.model.view.hide();
        this.model.options.onHide(this.model);
        return this.model;
    }

    /**
     * @description toggle datepicker visibility state
     * @example var pd = $('.selector').persianDatepicker();
     * pd.toggle();
     */
    toggle () {
        this.model.view.toggle();
        this.model.options.onToggle(this.model);
        return this.model;
    }


    /**
     * @description destroy every thing clean dom and
     * @example var pd = $('.selector').persianDatepicker();
     * pd.destroy();
     */
    destroy () {
        if(this.model){
            this.model.view.destroy();
            this.model.options.onDestroy(this.model);
            delete this.model;
        }
    }


    /**
     * @description set selected date of datepicker accept unix timestamp
     * @param unix
     * @example var pd = $('.selector').persianDatepicker();
     * pd.setDate(1382276091100)
     */
    setDate (unix) {
        this.model.state.setSelectedDateTime('unix', unix);
        this.model.state.setViewDateTime('unix', unix);
        this.model.state.setSelectedDateTime('unix', unix);
        this.model.view.render(this.view);
        this.model.options.onSet(unix);
        return this.model;
    }

}

module.exports = API;
