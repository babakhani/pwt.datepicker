const Datepicker = function (inputElement, options) {
    this.initialUnix = null;
    this.inputElement = inputElement;
    this.options = new Options(options);
    this.input = new Input(this, inputElement);
    this.state = new State(this);
    this.view = new View(this);
    this.toolbox = new Toolbox(this);


    this.updateInput = function (unix) {
        this.input.update(unix);
    };

    this.state.setViewDateTime('unix', this.input.getOnInitState());

    if (this.options.initialValue) {
        this.state.setSelectedDateTime('unix', this.input.getOnInitState());
        this.state.setViewDateTime('unix', this.input.getOnInitState());
    }

    this.navigator = new Navigator(options, this);

    let that = this;
    return {
        'datepicker': this,
        'state': this.state,
        selectDate: this.selectDate,
        updateView: this.updateView,
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
};