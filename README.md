Persian Date Picker
===================

### Important Notice: Project Deprecation

I will no longer be maintaining or supporting this package. While the code remains accessible, please be advised that you use it at your own risk.

This package is deprecated primarily due to the deprecation of jQuery. jQuery is no longer a viable technology for modern web development, and it is not wise to continue adding features to projects that rely on it.

### Leap Year Issues

If you encounter problems related to leap year handling, please review the dedicated discussion in GitHub Issue [#421](https://github.com/babakhani/pwt.datepicker/issues/421).

The leap year issue was resolved at the beginning of the project. For more details on the research and solution, refer to the documentation here: [Leap Year Research](https://babakhani.github.io/PersianWebToolkit/doc/persian-date/leapyear/).

Additionally, the main configuration for leap year handling in the Persian Date library can be found in the documentation: [Leap Year Mode Configuration](https://babakhani.github.io/PersianWebToolkit/doc/persian-date/#toleapyearmode).

-------------------

This Date picker work with Iranian calendar.

Jalali calendar datepicker, which depends on [persianDate](https://github.com/babakhani/PersianDate)

More info at [Wikipedia](http://en.wikipedia.org/wiki/Iranian_calendar)

> Note: from v1.0.0 persianDatepicker support gregorian calendar

[![npm version](https://badge.fury.io/js/persian-datepicker.svg)](https://badge.fury.io/js/persian-datepicker)
[![Bower version](https://badge.fury.io/bo/persian-datepicker.svg)](https://badge.fury.io/bo/persian-datepicker)
[![Travis-ci](https://travis-ci.org/babakhani/pwt.datepicker.svg?branch=master)](https://badge.fury.io/bo/persian-datepicker)

<a class="github-button" href="https://github.com/babakhani/pwt.datepicker" data-icon="octicon-star" data-style="mega" data-count-href="/babakhani/pwt.datepicker/stargazers" data-count-api="/repos/babakhani/pwt.datepicker#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star babakhani/pwt.datepicker on GitHub">Star</a>
<a class="github-button" href="https://github.com/babakhani/pwt.datepicker/issues" data-icon="octicon-issue-opened" data-style="mega" data-count-api="/repos/babakhani/pwt.datepicker#open_issues_count" data-count-aria-label="# issues on GitHub" aria-label="Issue babakhani/pwt.datepicker on GitHub">Issue</a>
<a class="github-button" href="https://github.com/babakhani/pwt.datepicker/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/babakhani/pwt.datepicker/network" data-count-api="/repos/babakhani/pwt.datepicker#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork babakhani/pwt.datepicker on GitHub">Fork</a>


- [Documents](http://babakhani.github.io/PersianWebToolkit/doc/datepicker)
- [Example/Demo](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/example)
- [Playground](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/playground.html)


## Table of content:

- [Dependency](#dependency)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [See Options Full Document](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/options/)


## CDN

- persian-date.js [uncompressed](https://unpkg.com/persian-date@latest/dist/persian-date.js) | [minified](https://unpkg.com/persian-date@latest/dist/persian-date.min.js)
- persian-datepicker.js [uncompressed](https://unpkg.com/persian-datepicker@latest/dist/js/persian-datepicker.js) | [minified](https://unpkg.com/persian-datepicker@latest/dist/js/persian-datepicker.min.js)
- persian-datepicker.css [uncompressed](https://unpkg.com/persian-datepicker@latest/dist/css/persian-datepicker.css) | [minified](https://unpkg.com/persian-datepicker@latest/dist/css/persian-datepicker.min.css)


## Dependency

- [persian date](https://github.com/babakhani/PersianDate)
- [jquery](http://jquery.com/)

> persian-datepicker 1.x.x need persian-date 1.x.x

## Install

```bash
npm install persian-datepicker

bower install persian-datepicker
```

## Usage

```html
<head>
  <link rel="stylesheet" href="css/persian.datepicker.css"/>
  <script src="js/jquery.js"></script>
  <script src="js/persian.date.js"></script>
  <script src="js/persian.datepicker.js"></script>
</head>

<script type="text/javascript">
  $(document).ready(function() {
    $(".example1").pDatepicker();
  });
</script>

<input type="text" class="example1" />
```

## Options table

[Options full document](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/options/)


| name                           | type             | default                                         | description  |
| -------------                  |:-------------:   | :----------------------------------------------:| :----------: |
| calendarType                   | string           | 'persian'                                       | Set default calendar mode of datepicker, available options: 'persian', 'gregorian' |
| calendar                       | object           |                                                 | Calendar type and localization configuration |
| calendar.persian               | object           |                                                 | Persian calendar configuration |
| calendar.persian.locale        | string           | 'fa'                                            | Set locale of Persian calendar available options: 'fa', 'en' |
| calendar.persian.showHint      | boolean          | false                                           | If set true, small date hint of this calendar will be shown on another calendar |
| calendar.persian.leapYearMode  | string           | algorithmic                                     | Persian calendar leap year calculation mode, available options: 'algorithmic', 'astronomical' |
| calendar.gregorian             | object           |                                                 | Gregorian calendar configuration |
| calendar.gregorian.locale      | string           | 'en'                                            | set locale of Gregorian calendar available options: 'fa', 'en' |
| calendar.gregorian.showHint    | boolean          | false                                           | If set true, small date hint of this calendar will be shown on another calendar |
| responsive                     | boolean          | true                                            | If set true make enable responsive view on mobile devices |
| initialValue                   | boolean          | true                                            | If set true datepicker init with input value date, use data-date property when you want set inline datepicker initial value |
| initialValueType               | string           | 'gregorian'                                     | Initial value calendar type, accept: 'persian', 'gregorian' |
| inline                         | boolean          | false                                           | If set true datepicker render inline |
| persianDigit (DEPRECATED from 1.0.0)      | boolean          | true                               | If set true all digit shows as persian digit |
| viewMode                       | string           | 'day'                                           | Accept 'day', 'month', 'year' |
| format                         | string           | 'LLLL'                                          | The date format, combination of d, dd, m, mm, yy, yyy. [format document](http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format) |
| formatter                      | function         | function(unixDate){return unixDate}             | Main Input value formatter function |
| altField                       | string           | null                                            | An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class' |
| altFormat                      | string           | 'unix'                                          | The date format, combination of d, dd, m, mm, yy, yyy. [format document](http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format) |
| altFieldFormatter              | function         | function(unixDate){return unixDate}             | Format value of alt field input input |
| minDate                        | Unix Offset      | null                                            | Set min date on datepicker, prevent user select date before given unix time |
| maxDate                        | Unix Offset      | null                                            | Set max date on datepicker, prevent user select date after given unix time |
| navigator                      | object           |                                                 | Navigator config object |
| navigator.enabled              | boolean          | true                                            | Make navigator enable or disable |
| navigator.scroll               | object           |                                                 | Navigate by scroll configuration |
| navigator.scroll.enabled       | boolean          | true                                            | If you want prevent to navigate with mouse-wheel event make this option false |
| navigator.text                 | object           |                                                 | Navigator text config object |
| navigator.text.btnNextText     | string           | '<'                                             | Text of next button|
| navigator.text.btnPrevText     | string           | '>'                                             | Text of previews button |
| navigator.onNext               | event            | function (navigator) {}                         | Called when navigator goes to next state |
| navigator.onPrev               | event            | function (navigator) {}                         | Called when navigator goes to prev state |
| navigator.onSwitch             | event            | function (state) {}                             | Called when navigator switch |
| toolbox                        | object           |                                                 | Toolbox object options.|
| toolbox.enabled                | boolean          | true                                            | Enable/Disable toolbox object |
| toolbox.text (DEPRECATED from 1.0.0)              | object           |                              | |
| toolbox.text.btnToday (DEPRECATED from 1.0.0)     | string          | 'امروز'                      | Today button text|
| toolbox.todayButton            | object           |                                                 | Toolbox today button configuration|
| toolbox.todayButton.enabled    | boolean          | false                                           | Make toolbox today button enable or disable|
| toolbox.todayButton.text       | object           |                                                 | Today button text|
| toolbox.todayButton.text.fa    | string           | 'امروز'                                        | Show when current calendar is Persian|
| toolbox.todayButton.text.en    | string           | 'Today'                                         | Show when current calendar is Gregorian|
| toolbox.todayButton.onToday    | event            | function () {}                                  | Called when today button clicked |
| toolbox.submitButton           | object           |                                                 | Toolbox today button configuration|
| toolbox.submitButton.enabled   | boolean          | true                                            | Make toolbox submit button enable or disable|
| toolbox.submitButton.text      | object           |                                                 | Submit button text|
| toolbox.submitButton.text.fa   | string           | 'تایید'                                         | Show when current calendar is Persian|
| toolbox.submitButton.text.en   | string           | 'submit'                                         | Show when current calendar is Gregorian|
| toolbox.submitButton.onSubmit  | event            | function () {}                                  | Called when submit button clicked |
| toolbox.calendarSwitch         | object           |                                                 | |
| toolbox.calendarSwitch.enabled | boolean          | true                                            | Make calendar switch enable or disable |
| toolbox.calendarSwitch.format  | string           | 'MMMM'                                          | Calendar switch text format string |
| toolbox.calendarSwitch.onSwitch| event            | function () {}                                  | Called when calendar switch clicked |
| toolbox.onToday (DEPRECATED from 0.6.0)                | event            | function(toolbox){return unixDate}              | Event called when today btn clicked|
| onlyTimePicker (mode)          | boolean          | false                                           | If true, all pickers hide and just show timepicker |
| onlySelectOnDate               | boolean          | true                                            | If true, date select just by click on day in month grid, and when user select month or year selected date doesnt change |
| checkDate                      | function         | function (unix)  { return true; }               | Validate date access before render|
| checkMonth                     | function         | function (month) { return true; }               | Validate month access before render|
| checkYear                      | function         | function (year)  { return true; }               | Validate year access before render|
| timePicker                     | object           |                                                 | |
| timePicker.enabled             | boolean          | false                                           | Make timePicker enable or disable |
| timePicker.step                | int              | 1                                               | The amount that increases or decreases by pressing the button |
| timePicker.hour                | object           |                                                 | |
| timePicker.hour.enabled        | boolean          | true                                            | Enable/Disable hour in timepPicker object |
| timePicker.hour.step           | int              | null                                            | The amount that increases or decreases hour, by pressing the button. overwrite by timepicker.step |
| timePicker.minute              | object           |                                                 | |
| timePicker.minute.enabled      | boolean          | true                                            | Enable/Disable minute in timePicker object |
| timePicker.minute.step         | int              | null                                            | The amount that increases or decreases minute, by pressing the button. overwrite by timepicker.step |
| timePicker.second              | object           |                                                 | |
| timePicker.second.enabled      | boolean          | true                                            | Enable/Disable second in timePicker object |
| timePicker.second.step         | int              | null                                            | The amount that increases or decreases second, by pressing the button. overwrite by timepicker.step|
| timePicker.meridian            | object           |                                                 | |
| timePicker.meridian.enabled    | boolean          | true                                            | Enable/Disable meridian in timePicker object |
| dayPicker                      | object           |                                                 | |
| dayPicker.enabled              | boolean          | true                                            | Enable/Disable dayPicker object |
| dayPicker.titleFormat          | string           | 'YYYY MMMM'                                     | DayPicker title format string |
| dayPicker.titleFormatter       | function         | function (year, month) {}                       | DayPicker title formatter function |
| dayPicker.onSelect             | event            | function (selectedDayUnix) {}                   | Called when date select by user |
| monthPicker                    | object           |                                                 | |
| monthPicker.enabled            | boolean          | true                                            | Enable/Disable monthPicker object |
| monthPicker.titleFormat        | string           | 'YYYY'                                          | MonthPicker title format string |
| monthPicker.titleFormatter     | function         | function (unix) {}                              | MonthPicker title formatter function |
| monthPicker.onSelect           | event            | function (monthIndex) {}                        | Called when month select by user |
| yearPicker                     | object           |                                                 | |
| yearPicker.enabled             | boolean          | true                                            | Enable/Disable yearPicker object |
| yearPicker.titleFormat         | string           | 'YYYY'                                          | YearPicker title format string |
| yearPicker.titleFormatter      | function         | function (year) {}                              | YearPicker title formatter function |
| yearPicker.onSelect            | event            | function (year) {}                              | Called when year select by user |
| onSelect                       | event            | function (unixDate) {}                          | Called when date Select by user. |
| onSet                          | event            | function (unixDate) {}                          | Called when date Select by api. |
| onShow                         | event            | function () {}                                  | Called when datePicker shown |
| onHide                         | event            | function () {}                                  | Called when datePicker hidden |
| onToggle                       | event            | function () {}                                  | Called when datePicker visibility toggle |
| onDestroy                      | event            | function () {}                                  | Called when datePicker destroyed |
| autoClose                      | boolean          | false                                           | If true datePicker close after select date|
| position                       | string           | 'auto'                                          | Position of datepicker element relative to input element, accept 'auto', [x,y] |
| observer                       | boolean          | false                                           | If true datepicker update self by user inputted date string, accept 'yyyy/mm/dd' |
| inputDelay                     | int              | 800  (millisecond)                              | Time for last user key-down event, accept millisecond |
| template                       | string           | null                                            | By default datepicker have a template string, and you can overwrite it simply by replace string in config. |

## license
Freely distributable under the terms of the [MIT](https://opensource.org/licenses/MIT) license. 

