const DateUtil = {
    isSameDay: function (dateA, dateB) {
        return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month()
    },
    isSameMonth: function (dateA, dateB) {
        return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month()
    },
    normalizeTime: function (key, value) {
        let output = value;
        if (key == 'hour') {
            if (value < 0) {
                output = 23
            } else if (value > 23) {
                output = 0
            }
        }
        else if (key == 'minute' || key == 'second') {
            if (value < 0) {
                output = 59;
            } else if (value > 59) {
                output = 0;
            }
        }
        return output;
    },
    validatePersianDateString: function (pasted) {
        var newDate = new Date(pasted),
            trueYear = null,
            trueMonth = null,
            trueDay = null,
            inputArray = pasted.split("/");


        if (inputArray.length === 3) {
            trueYear = inputArray[0].toString().length <= 4 && inputArray[0].toString().length >= 1;
            trueMonth = inputArray[1].toString().length <= 2 && inputArray[1].toString().length >= 1;
            trueDay = inputArray[2].toString().length <= 2 && inputArray[2].toString().length >= 1;
        }
        $.each(inputArray, function (index, key) {
            inputArray[index] = parseInt(key);
        });
        if (trueYear && trueMonth && trueDay && newDate !== "Invalid Date") {
            return inputArray;
        } else {
            return null;
        }
    }
}