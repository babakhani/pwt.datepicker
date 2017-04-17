const Helper = {
    /**
     * @desc normal log
     * @param input
     * @example log('whoooooha')
     */
    log(input) {
        console.log(input);
    },

    /**
     * @desc show debug messages if window.persianDatepickerDebug set as true
     * @param elem
     * @param input
     * @example window.persianDatepickerDebug = true;
     * debug('element','message');
     */
    debug(elem, input) {
        if (window.persianDatepickerDebug) {
            if (elem.constructor.name) {
                console.log('Debug: ' + elem.constructor.name + ' : ' + input);
            } else {
                console.log('Debug: ' + input);
            }

        }
    },

    delay(callback, ms) {
        clearTimeout(window.datepickerTimer);
        window.datepickerTimer = setTimeout(callback, ms);
    }
};

module.exports = Helper;
