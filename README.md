Persian Date Picker
==============

[![npm version](https://badge.fury.io/js/persian-datepicker.svg)](https://badge.fury.io/js/persian-datepicker)
[![Bower version](https://badge.fury.io/bo/persian-datepicker.svg)](https://badge.fury.io/bo/persian-datepicker)
[![Travis-ci](https://travis-ci.org/babakhani/pwt.datepicker.svg?branch=master)](https://badge.fury.io/bo/persian-datepicker)

Persian Date Picker
This Date picker work with Iranian calendar.

Jalali calendar datepicker, which depends on https://github.com/babakhani/PersianDate

More info at [Wikipedia](http://en.wikipedia.org/wiki/Iranian_calendar)


<a class="github-button" href="https://github.com/babakhani/pwt.datepicker" data-icon="octicon-star" data-style="mega" data-count-href="/babakhani/pwt.datepicker/stargazers" data-count-api="/repos/babakhani/pwt.datepicker#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star babakhani/pwt.datepicker on GitHub">Star</a>
<a class="github-button" href="https://github.com/babakhani/pwt.datepicker/issues" data-icon="octicon-issue-opened" data-style="mega" data-count-api="/repos/babakhani/pwt.datepicker#open_issues_count" data-count-aria-label="# issues on GitHub" aria-label="Issue babakhani/pwt.datepicker on GitHub">Issue</a>
<a class="github-button" href="https://github.com/babakhani/pwt.datepicker/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/babakhani/pwt.datepicker/network" data-count-api="/repos/babakhani/pwt.datepicker#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork babakhani/pwt.datepicker on GitHub">Fork</a>


- [Documents](http://babakhani.github.io/PersianWebToolkit/doc/datepicker)
- [Demo](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/example)


## Table of content:

- [Dependency](#dependency)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [See Options Full Document](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/options/)


## Dependency

- [persian date](https://github.com/babakhani/PersianDate)


## Install

```bash
npm install persian-datepicker
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

## options table

[See Options Full Document](http://babakhani.github.io/PersianWebToolkit/doc/datepicker/options/)


| name                           | type             | default                                         | description  |
| -------------                  |:-------------:   | :----------------------------------------------:| :----------: |
| initialCalendar                | string           | 'persian'                                       | set default calendar mode of datepicker, available options: 'persian', 'gregorian' |
| calendar                       | object           |                                                 | calendar type and localization configuration |
| calendar.persian               | object           |                                                 | Persian calendar configuration |
| calendar.persian.locale        | string           | 'fa'                                            | set locale of calendar available options: 'fa', 'en' |
| calendar.persian.showHint      | boolean          | false                                           | if set true, small date hint of this calendars will be shown on another calendar |
| calendar.persian.leapYearMode  | string           | algorithmic                                     | config leap year calculation mode, available options: 'algorithmic', 'astronomical' |
| calendar.gregorian             | object           |                                                 | Gregorian calendar configuration |
| calendar.gregorian.locale      | string           | 'en'                                            | set locale of calendar available options: 'fa', 'en' |
| calendar.gregorian.showHint    | boolean          | false                                           | if set true, small date hint of this calendars will be shown on another calendar |
| responsive                     | boolean          | true                                            | if set true make enable responsive view on mobile devices |
| initialValue                   | boolean          | true                                            | If set true datepicker init with input value date |
| inline                         | boolean          | false                                           | if true datepicker render inline |
| responsive                     | boolean          | true                                            | If set true datepicker init with input value date |
| persianDigit                   | boolean          | true                                            | If true all digit shows as persian digit |
| viewMode                       | string           | 'day'                                           | Accept day, month, year |
| format                         | string           | 'LLLL'                                          | Default input value formatt string.|
| formatter                      | function         | function(unixDate){return unixDate}             | Format value of input |
| altField                       | selector         | false                                           | Format value of alt field input |
| altFieldFormatter              | selector         | function(unixDate){return unixDate}             | Format value of input |
| minDate                        | unixDate         | null                                            | Format value of input |
| maxDate                        | unixDate         | null                                            | Format value of input |
| navigator                      | object           |                                                 | Navigator object options |
| navigator.enabled              | boolean          | true                                            | Make enable/disable navigator |
| navigator.scroll               | object           |                                                 | navigate by mousewheel options |
| navigator.scroll.enabled       | boolean          | true                                            | if you want prevent to navigate on dates with mousewheel event make this options false |
| navigator.text                 | object           | true                                            | |
| navigator.text.btnNextText     | string           | '<'                                             | |
| navigator.text.btnPrevText     | string           | '>'                                             | |
| navigator.text.onNext          | event            | function (navigator) {}                         | Called when navigator goes to next state |
| navigator.text.onPrev          | event            | function (navigator) {}                         | Called when navigator goes to prev state |
| navigator.text.onSwitch        | event            | function (state) {}                             | Called when navigator switch |
| toolbox                        | object           |                                                 | Toolbox object options.|
| toolbox.enabled                | boolean          | true                                            | Enable/Disable toolbox object |
| toolbox.text                   | object           |                                                 | |
| toolbox.text.btnToday          | string           | 'امروز'                                         | Today button text|
| toolbox.onToday                | event            | function(toolbox){return unixDate}              | Event called when today btn clicked|
| onlyTimePicker (mode)          | boolean          | false                                           | Must change |
| onlySelectOnDate               | boolean          | true                                            | Must change |
| checkDate                      | function         | function (unix)  { return true; }               | Validate date access before render|
| checkMonth                     | function         | function (month) { return true; }               | Validate month access before render|
| checkYear                      | function         | function (year)  { return true; }               | Validate year access before render|
| timePicker                     | object           |                                                 | |
| timePicker.enabled             | boolean          | false                                           | Enable/Disable timePicker object |
| timePicker.step                | int              | 1                                               | Time section step |
| timePicker.hour                | object           |                                                 | |
| timePicker.hour.enabled        | boolean          | true                                            | Enable/Disable hour in timepPcker object |
| timePicker.hour.step           | int              | null                                            | Hour section step |
| timePicker.minute              | object           |                                                 | |
| timePicker.minute.enabled      | boolean          | true                                            | Enable/Disable minute in timePicker object |
| timePicker.minute.step         | int              | null                                            | Minute section step |
| timePicker.second              | object           |                                                 | |
| timePicker.second.enabled      | boolean          | true                                            | Enable/Disable second in timePicker object |
| timePicker.second.step         | int              | null                                            | Second section step|
| timePicker.meridian            | object           |                                                 | |
| timePicker.meridian.enabled    | boolean          | true                                            | Enable/Disable meridian in timePicker object |
| dayPicker                      | object           |                                                 | |
| dayPicker.enabled              | boolean          | true                                            | Enable/Disable dayPicker object |
| dayPicker.titleFormat          | string           | 'YYYY MMMM'                                     | DayPicker title format string |
| dayPicker.titleFormatter       | function         | function (year, month) {}                       | DayPicker title formatter function |
| dayPicker.onSelect             | event            | function (selectedDayUnix) {}                   | Called when date select |
| monthPicker                    | object           |                                                 | |
| monthPicker.enabled            | boolean          | true                                            | Enable/Disable monthPicker object |
| monthPicker.titleFormat        | string           | 'YYYY'                                          | MonthPicker title format string |
| monthPicker.titleFormatter     | function         | function (unix) {}                              | MonthPicker title formatter function |
| monthPicker.onSelect           | event            | function (monthIndex) {}                        | Called when month select |
| yearPicker                     | object           |                                                 | |
| yearPicker.enabled             | boolean          | true                                            | Enable/Disable yearPicker object |
| yearPicker.titleFormat         | string           | 'YYYY'                                          | YearPicker title format string |
| yearPicker.titleFormatter      | function         | function (year) {}                              | YearPicker title formatter function |
| yearPicker.onSelect            | event            | function (year) {}                              | Called when year select |
| onSelect                       | event            | function (unixDate) {}                          | Called when datePicker select event fire |
| onShow                         | event            | function () {}                                  | Called when datePicker show |
| onHide                         | event            | function () {}                                  | Called when datePicker hide |
| onToggle                       | event            | function () {}                                  | Called when datePicker toggle |
| onDestroy                      | event            | function () {}                                  | Called when datePicker destroy |
| autoClose                      | boolean          | false                                           | If true datePicker close after select date|
| position                       | string           | auto                                            | position of datepicker element relative to input element, accept auto, [x,y] |