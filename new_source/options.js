class Options {
    constructor(options) {
        return $.extend(true, this, DefaultConfig, options);
    }
}