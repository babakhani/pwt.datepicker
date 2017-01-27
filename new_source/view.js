class View {
    constructor(options, datepicker) {
        this.yearsViewCount = 12;
        this.datepicker = datepicker;
        this.rendered = null;
        return this;
    }

    checkYearAccess(y) {
        var output = true;
        if (this.datepicker.state._filetredDate) {
            var startYear = this.datepicker.state.filterDate.start.year;
            var endYear = this.datepicker.state.filterDate.end.year;
            if (startYear <= y & y <= endYear) {
                output = true;
            } else {
                return false;
            }
        }
        if (output) {
            return this.datepicker.options.checkYear(y);
        }
    };

    getYearViewModel(viewState) {
        /**
         * @description Generate years list based on viewState year
         * @return ['1380',n+12,'1392']
         */
        let list = [...Array(this.yearsViewCount).keys()].map(value => value + parseInt(viewState.year / this.yearsViewCount) * this.yearsViewCount);
        /*
         * @description Generate years object based on list
         */
        let yearsModel = [];
        for (let i of list) {
            yearsModel.push({
                title: i,
                enabled: this.checkYearAccess(i)
            });
        }

        return {
            enabled: true,
            list: yearsModel
        }
    }

    /* TODO: move this method to filter class */


    getMonthViewModel(data) {
        return {
            enabled: false,
            list: [
                {
                    title: ClassDateRange.monthRange['1'].name.fa,
                },
                {
                    title: ClassDateRange.monthRange['2'].name.fa,
                }
            ]
        }
    }

    getViewModel(data) {
        return {
            plotId: '',
            switch: {
                enabled: true,
                date: data.dateObj.format()
            },
            navigator: {
                enabled: true,
            },
            days: {
                enabled: false,

            },
            month: this.getMonthViewModel(data),
            year: this.getYearViewModel(data),
        }
    }

    render(data) {
        Mustache.parse(Template);
        this.rendered = $(Mustache.render(Template, this.getViewModel(data)));
        $('body').append(this.rendered);
    }
}