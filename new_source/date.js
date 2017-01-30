const DateUtil = {
    isSameDay: function (dateA, dateB) {
        return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month()
    },
    isSameMonth: function (dateA, dateB) {
        return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month()
    }
}