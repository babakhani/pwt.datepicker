const Datepicker = function (inputElement, options) {
    let randomId = parseInt(Math.random(100) * 1000);
    this.id = `persianDateInstance-${randomId}`;
    this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
    this.inputElement = inputElement;
    this.initialUnix = null;
    this.options = new Options(options);
    this.state = new State(this);
    this.view = new View(this);
    this.toolbox = new Toolbox(this);
    this.input = new Input(this, inputElement);
    this.updateInput = function (unix) {
        this.input.update(unix);
    };
    this.selectDate = function (unix) {
        $(inputElement).val(new pDate(unix).format());
        return this;
    };
    this.state.setViewDateTime('unix', this.input.getOnInitState());
    if (this.options.initialValue) {
        this.state.setSelectedDateTime('unix', this.input.getOnInitState());
        this.state.setViewDateTime('unix', this.input.getOnInitState());
    }
    this.navigator = new Navigator(options, this);
    return {
        'datepicker': this,
        'state': this.state,
        selectDate: this.selectDate,
        updateView: this.updateView
    };
};