declare interface PDatePickerTimePicker {
    /**
     * Enable or Disable dayPicker
     * default: false*/
    enabled?:boolean
    /**
     * change view date by scroll.
     * default: true*/
    scrollEnabled?:boolean
    /**
     * default: 1*/
    secondStep?:number
    /**
     * default: 1*/
    minuteStep?:number
    /**
     * default: 1*/
    hourStep?:number
    /**
     * if 'false' second view of timepicker dos not show
     * default: true*/
    showSeconds?:boolean
    /**
     * if 'false' meridian view of timepicker dos not show
     * default: true*/
    showMeridian?:boolean
}
declare interface PDatePickerNavigatorText {
    /**
     * text of navigator next button
     * default: "<"*/
    btnNextText?:string
    /**
     * text of navigator previews button
     * default: ">"*/
    btnPrevText?:string
}
declare interface PDatePickerNavigator {
    /**
     * Enable or Disable dayPicker*/
    enabled?:boolean
    /**
     * navigator text object*/
    text?:PDatePickerNavigatorText
    /**
     * Trigger When Next button clicked*/
    onNext?:Function
    /**
     * Trigger When Prev button clicked*/
    onPrev?:Function
    /**
     * Trigger When Switch button clicked*/
    onSwitch?:Function
}
declare interface PDatePickerToolboxText {
    /**
     * Text of today button
     * default: امروز*/
    btnToday?:string
}

declare interface PDatePickerToolbox {
    /**
     * Enable or Disable dayPicker
     * default: true*/
    enabled:boolean
    /**
     * toolbox text object*/
    text:PDatePickerToolboxText
    /**
     * Trigger When Today Button Clicked*/
    onToday:Function
}
declare interface PDatePickerDayPicker {
    /**
     * change view date by scroll.
     * default: true*/
    scrollEnabled?:boolean
    /**
     * Enable or Disable dayPicker
     * default: true*/
    enabled?:boolean
    /**
     * format text of navigator title
     * default: 'YYYY MMMM'*/
    titleFormat?:string
    /**
     * format text of navigator title*/
    titleFormatter?:Function
    /**
     * Trigger When Date Select*/
    onSelect?:Function
}
declare interface PDatePickerMonthPicker {
    /**
     * change view date by scroll.
     * default: true*/
    scrollEnabled?:boolean
    /**
     * Enable or Disable monthPicker
     * default: true*/
    enabled?:boolean
    /**
     * format text of navigator title
     * default: 'YYYY MMMM'*/
    titleFormat?:string
    /**
     * format text of navigator title*/
    titleFormatter?:Function
    /**
     * Trigger When Month Select*/
    onSelect?:Function
}

declare interface PDatePickerYearPicker {
    /**
     * change view date by scroll.
     * default: true*/
    scrollEnabled?:boolean
    /**
     * Enable or Disable monthPicker
     * default: true*/
    enabled?:boolean
    /**
     * format text of navigator title
     * default: 'YYYY MMMM'*/
    titleFormat?:string
    /**
     * format text of navigator title*/
    titleFormatter?:Function
    /**
     * Trigger When Month Select*/
    onSelect?:Function
}

declare interface PDatePickerOptions {
    /**
     * the date format, combination of d, dd, m, mm, yy, yyy.
     * default: 'mm/dd/yyyy'
     */
    format?:string
    /**
     * format value of input
     {...
        formatter: function(unixDate){return unixDate}
     ...}
     */
    formatter?:Function
    /**
     * An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class'
     * default: false
     */
    altField?:string|JQuery,
    /**
     * The dateFormat to be used for the altField option. acceptable value: unix,gregorian,g,u,YYYY/mMM/DD
     * default: unix
     */
    altFormat?:string
    /**
     * format value of 'altField' input
     {...
     altFieldFormatter: function(unixDate){return unixDate}
     ...}
     */
    altFieldFormatter?:Function
    /**
     * if you use $(element).val() to set input val and 'observer : true' , datepicker sync with your inputed Value. Observer Watch input and altField Elemets.
     * default: false
     */
    observer?:boolean
    /**
     * A function that takes current datepicker instance. It is called just before the datepicker is displayed.
     */
    onShow?:Function
    /**
     * A function that takes current datepicker instance. It is called just before the datepicker Hide.
     */
    onHide?:Function
    /**
     * A function that takes current datepicker unixDate. It is called When Day Select.
     */
    onSelect?:Function
    /**
     * day,month,year*/
    viewMode?:string
    /**
     * if true all digit convert to persian digit.
     * default: day*/
    persianDigit?:boolean
    /**
     * [x,y] , define a position of datepicker relative to input element.
     * default: auto*/
    position?:Array<number,number>
    /**
     * If true picker close When Select day
     * default: false*/
    autoClose?:boolean
    /**
     * unix*/
    minDate?:number
    /**
     * unix*/
    maxDate?:number
    /**
     * timePicker config object*/
    timePicker?:PDatePickerTimePicker
    /**
     * navigator config object*/
    navigator?:PDatePickerNavigator
    /**
     * toolbox config object*/
    toolbox?:PDatePickerToolbox
    /**
     * dayPicker config object*/
    dayPicker?:PDatePickerDayPicker
    /**
     * monthPicker config Object*/
    monthPicker?:PDatePickerMonthPicker
    /**
     * yearPicker config Object*/
    yearPicker?:PDatePickerYearPicker
    /**
     * if True just show timepicker and other view disabled.
     * default: false*/
    onlyTimePicker?:boolean
    /**
     * if True Value of input just change by click on day in day view
     * default: true*/
    justSelectOnDate?:boolean
    /**
     * By using this method you make disable custom dates.*/
    checkDate?:Function
    /**
     * By using this method you make disable custom Month.*/
    checkMonth?:Function
    /**
     * By using this method you make disable custom Year.*/
    checkYear?:Function
}

interface JQuery {
    pDatepicker(): JQuery
    pDatepicker(options:PDatePickerOptions):JQuery
    /**
     * open: Open the date picker
     * hide: Close the date picker
     * destroy: Removes the datepicker functionality completely*/
    pDatepicker(methodName:string)
    /**
     * setDate: Set datepicker selected date time , [1392,12,1,11,11]*/
    pDatepicker(methodName:string, parameter:any)
}
