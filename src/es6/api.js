let Options = require('./options');

/**
 * This is default API class
 */
class API {
    constructor(model) {
        this.model = model;
    }

    get options() {
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
    set options(inputOptions) {
        this.model.options = new Options(inputOptions);
        this.model.view.reRender();
    }


    /**
     * @description make datepicker visible
     * @example var pd = $('.selector').persianDatepicker();
     * pd.show();
     */
    show() {
        this.model.view.show();
        this.model.options.onShow(this);
        return this.model;
    }


    /**
     * @description make datepicker invisible
     * @example var pd = $('.selector').persianDatepicker();
     * pd.show();
     */
    hide() {
        this.model.view.hide();
        this.model.options.onHide(this);
        return this.model;
    }

    /**
     * @description toggle datepicker visibility state
     * @example var pd = $('.selector').persianDatepicker();
     * pd.toggle();
     */
    toggle() {
        this.model.view.toggle();
        this.model.options.onToggle(this.model);
        return this.model;
    }


    /**
     * @description destroy every thing clean dom and
     * @example var pd = $('.selector').persianDatepicker();
     * pd.destroy();
     */
    destroy() {
        // TODO: destroy every thing
        this.model.view.destroy();
        this.model.options.onDestroy(this.model);
        return this.model;
    }


    /**
     * @description set selected date of datepicker accept unix timestamp
     * @param unix
     * @example var pd = $('.selector').persianDatepicker();
     * pd.setDate(1382276091100)
     */
    setDate(unix) {
        this.model.state.setSelectedDateTime('unix', unix);
        this.model.state.setViewDateTime('unix', unix);
        this.model.state.setSelectedDateTime('unix', unix);
        this.model.options.dayPicker.onSelect(unix);
        this.model.view.render(this.view);
        return this.model;
    }

}

module.exports = API;
