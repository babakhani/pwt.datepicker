<a name="Config"></a>

## Config
This is default config class

**Kind**: global constant  

* [Config](#Config)
    * [.inline](#Config.inline) : <code>boolean</code>
    * [.initialValue](#Config.initialValue) : <code>boolean</code>
    * [.persianDigit](#Config.persianDigit) : <code>boolean</code>
    * [.viewMode](#Config.viewMode) : <code>string</code>
    * [.format](#Config.format) : <code>boolean</code>
    * [.altField](#Config.altField) : <code>boolean</code>
    * [.altFormat](#Config.altFormat) : <code>string</code>
    * [.minDate](#Config.minDate) : <code>Date</code>
    * [.maxDate](#Config.maxDate) : <code>Date</code>
    * [.navigator](#Config.navigator) : <code>object</code>
        * [.enabled](#Config.navigator.enabled) : <code>boolean</code>
        * [.scroll](#Config.navigator.scroll) : <code>object</code>
            * [.enabled](#Config.navigator.scroll.enabled) : <code>boolean</code>
        * [.text](#Config.navigator.text)
            * [.btnNextText](#Config.navigator.text.btnNextText)
            * [.btnPrevText](#Config.navigator.text.btnPrevText)
        * ["onNext" (navigator)](#Config.navigator.event_onNext)
        * ["onPrev" (navigator)](#Config.navigator.event_onPrev)
        * ["onSwitch" (navigator)](#Config.navigator.event_onSwitch)
    * [.toolbox](#Config.toolbox) : <code>object</code>
        * [.enabled](#Config.toolbox.enabled) : <code>boolean</code>
        * [.text](#Config.toolbox.text) : <code>object</code>
            * [.btnToday](#Config.toolbox.text.btnToday) : <code>string</code>
        * ["onToday" (toolbox)](#Config.toolbox.event_onToday)
    * [.onlyTimePicker](#Config.onlyTimePicker) : <code>boolean</code>
    * [.onlySelectOnDate](#Config.onlySelectOnDate) : <code>boolean</code>
    * [.timePicker](#Config.timePicker) : <code>object</code>
        * [.enabled](#Config.timePicker.enabled) : <code>boolean</code>
        * [.step](#Config.timePicker.step) : <code>number</code>
        * [.hour](#Config.timePicker.hour) : <code>object</code>
            * [.enabled](#Config.timePicker.hour.enabled) : <code>boolean</code>
            * [.step](#Config.timePicker.hour.step) : <code>boolean</code>
        * [.minute](#Config.timePicker.minute) : <code>object</code>
            * [.enabled](#Config.timePicker.minute.enabled) : <code>boolean</code>
            * [.step](#Config.timePicker.minute.step) : <code>boolean</code>
        * [.second](#Config.timePicker.second) : <code>object</code>
            * [.enabled](#Config.timePicker.second.enabled) : <code>boolean</code>
            * [.step](#Config.timePicker.second.step) : <code>boolean</code>
        * [.meridiem](#Config.timePicker.meridiem) : <code>object</code>
            * [.enabled](#Config.timePicker.meridiem.enabled) : <code>boolean</code>
    * [.dayPicker](#Config.dayPicker) : <code>object</code>
        * [.enabled](#Config.dayPicker.enabled) : <code>boolean</code>
        * [.titleFormat](#Config.dayPicker.titleFormat) : <code>string</code>
        * [.titleFormatter(year, month)](#Config.dayPicker.titleFormatter) ⇒ <code>\*</code>
        * ["onSelect" (selectedDayUnix)](#Config.dayPicker.event_onSelect)
    * [.monthPicker](#Config.monthPicker) : <code>object</code>
        * [.enabled](#Config.monthPicker.enabled) : <code>boolean</code>
        * [.titleFormat](#Config.monthPicker.titleFormat) : <code>string</code>
        * [.titleFormatter(unix)](#Config.monthPicker.titleFormatter) ⇒ <code>\*</code>
        * ["onSelect" (monthIndex)](#Config.monthPicker.event_onSelect)
    * [.yearPicker](#Config.yearPicker) : <code>object</code>
        * [.enabled](#Config.yearPicker.enabled) : <code>boolean</code>
        * [.titleFormat](#Config.yearPicker.titleFormat) : <code>string</code>
        * [.titleFormatter(year)](#Config.yearPicker.titleFormatter) ⇒ <code>string</code>
        * ["onSelect" (year)](#Config.yearPicker.event_onSelect)
    * [.position](#Config.position) : <code>mix</code>
    * [.autoClose](#Config.autoClose) : <code>boolean</code>
    * [.template](#Config.template) : <code>string</code>
    * <del>[.observer](#Config.observer) : <code>boolean</code></del>
    * [.inputDelay](#Config.inputDelay) : <code>number</code>
    * [.formatter(unixDate)](#Config.formatter)
    * [.altFieldFormatter(unixDate)](#Config.altFieldFormatter)
    * [.checkDate()](#Config.checkDate) : <code>function</code>
    * [.checkMonth()](#Config.checkMonth) : <code>function</code>
    * [.checkYear()](#Config.checkYear) : <code>function</code>
    * [.onToggle()](#Config.onToggle)
    * [.onDestroy()](#Config.onDestroy)
    * ["onSelect" (unixDate)](#Config.event_onSelect)
    * ["onShow"](#Config.event_onShow)
    * ["onHide" (self)](#Config.event_onHide)

<a name="Config.inline"></a>

### Config.inline : <code>boolean</code>
if true datepicker render inline

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
<a name="Config.initialValue"></a>

### Config.initialValue : <code>boolean</code>
**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>true</code>  
<a name="Config.persianDigit"></a>

### Config.persianDigit : <code>boolean</code>
**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>true</code>  
<a name="Config.viewMode"></a>

### Config.viewMode : <code>string</code>
Acceptable value : day,month,year

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>&quot;&#x27;day&#x27;&quot;</code>  
<a name="Config.format"></a>

### Config.format : <code>boolean</code>
the date format, combination of d, dd, m, mm, yy, yyy.
[http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/](http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/)

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>&#x27;LLLL&#x27;</code>  
<a name="Config.altField"></a>

### Config.altField : <code>boolean</code>
An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class'

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
<a name="Config.altFormat"></a>

### Config.altFormat : <code>string</code>
the date format, combination of d, dd, m, mm, yy, yyy.
[http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/](http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/)

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>&quot;&#x27;unix&#x27;&quot;</code>  
<a name="Config.minDate"></a>

### Config.minDate : <code>Date</code>
set min date on datepicker

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>null</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>minDate</td>
    </tr>  </tbody>
</table>

<a name="Config.maxDate"></a>

### Config.maxDate : <code>Date</code>
set max date on datepicker

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>null</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>maxDate</td>
    </tr>  </tbody>
</table>

<a name="Config.navigator"></a>

### Config.navigator : <code>object</code>
navigator config object

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>true</code>  

* [.navigator](#Config.navigator) : <code>object</code>
    * [.enabled](#Config.navigator.enabled) : <code>boolean</code>
    * [.scroll](#Config.navigator.scroll) : <code>object</code>
        * [.enabled](#Config.navigator.scroll.enabled) : <code>boolean</code>
    * [.text](#Config.navigator.text)
        * [.btnNextText](#Config.navigator.text.btnNextText)
        * [.btnPrevText](#Config.navigator.text.btnPrevText)
    * ["onNext" (navigator)](#Config.navigator.event_onNext)
    * ["onPrev" (navigator)](#Config.navigator.event_onPrev)
    * ["onSwitch" (navigator)](#Config.navigator.event_onSwitch)

<a name="Config.navigator.enabled"></a>

#### navigator.enabled : <code>boolean</code>
Enable or Disable dayPicker

**Kind**: static property of <code>[navigator](#Config.navigator)</code>  
**Default**: <code>true</code>  
<a name="Config.navigator.scroll"></a>

#### navigator.scroll : <code>object</code>
scroll navigation options

**Kind**: static property of <code>[navigator](#Config.navigator)</code>  
<a name="Config.navigator.scroll.enabled"></a>

##### scroll.enabled : <code>boolean</code>
**Kind**: static property of <code>[scroll](#Config.navigator.scroll)</code>  
**Default**: <code>true</code>  
<a name="Config.navigator.text"></a>

#### navigator.text
navigator text config object

**Kind**: static property of <code>[navigator](#Config.navigator)</code>  

* [.text](#Config.navigator.text)
    * [.btnNextText](#Config.navigator.text.btnNextText)
    * [.btnPrevText](#Config.navigator.text.btnPrevText)

<a name="Config.navigator.text.btnNextText"></a>

##### text.btnNextText
text of next btn

**Kind**: static property of <code>[text](#Config.navigator.text)</code>  
**Default**: <code>&#x27;&lt;&#x27;</code>  
<a name="Config.navigator.text.btnPrevText"></a>

##### text.btnPrevText
text of prev btn

**Kind**: static property of <code>[text](#Config.navigator.text)</code>  
**Default:**: '>'  
<a name="Config.navigator.event_onNext"></a>

#### "onNext" (navigator)
Trigger When Next button clicked

**Kind**: event emitted by <code>[navigator](#Config.navigator)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>navigator</td>
    </tr>  </tbody>
</table>

**Example**  
```js
function (navigator) {
     //log('navigator next ');
 }
```
<a name="Config.navigator.event_onPrev"></a>

#### "onPrev" (navigator)
Trigger When Prev button clicked

**Kind**: event emitted by <code>[navigator](#Config.navigator)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>navigator</td>
    </tr>  </tbody>
</table>

**Example**  
```js
function (navigator) {
     //log('navigator prev ');
 }
```
<a name="Config.navigator.event_onSwitch"></a>

#### "onSwitch" (navigator)
Trigger When Switch view button clicked

**Kind**: event emitted by <code>[navigator](#Config.navigator)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>navigator</td>
    </tr>  </tbody>
</table>

**Example**  
```js
function (state) {
                // console.log('navigator switch ');
 }
```
<a name="Config.toolbox"></a>

### Config.toolbox : <code>object</code>
toolbox config object

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>true</code>  

* [.toolbox](#Config.toolbox) : <code>object</code>
    * [.enabled](#Config.toolbox.enabled) : <code>boolean</code>
    * [.text](#Config.toolbox.text) : <code>object</code>
        * [.btnToday](#Config.toolbox.text.btnToday) : <code>string</code>
    * ["onToday" (toolbox)](#Config.toolbox.event_onToday)

<a name="Config.toolbox.enabled"></a>

#### toolbox.enabled : <code>boolean</code>
**Kind**: static property of <code>[toolbox](#Config.toolbox)</code>  
**Default**: <code>true</code>  
<a name="Config.toolbox.text"></a>

#### toolbox.text : <code>object</code>
**Kind**: static property of <code>[toolbox](#Config.toolbox)</code>  
<a name="Config.toolbox.text.btnToday"></a>

##### text.btnToday : <code>string</code>
**Kind**: static property of <code>[text](#Config.toolbox.text)</code>  
**Default**: <code>&quot;&#x27;امروز&#x27;&quot;</code>  
<a name="Config.toolbox.event_onToday"></a>

#### "onToday" (toolbox)
**Kind**: event emitted by <code>[toolbox](#Config.toolbox)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>toolbox</td>
    </tr>  </tbody>
</table>

**Example**  
```js
function (toolbox) {
     //log('toolbox today btn');
 }
```
<a name="Config.onlyTimePicker"></a>

### Config.onlyTimePicker : <code>boolean</code>
if true all pickers hide and just show timepicker

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
<a name="Config.onlySelectOnDate"></a>

### Config.onlySelectOnDate : <code>boolean</code>
if true date select just by click on day in month grid

**Kind**: static property of <code>[Config](#Config)</code>  
**Default:**: true  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>justSelectOnDate</td>
    </tr>  </tbody>
</table>

<a name="Config.timePicker"></a>

### Config.timePicker : <code>object</code>
timepicker config object

**Kind**: static property of <code>[Config](#Config)</code>  

* [.timePicker](#Config.timePicker) : <code>object</code>
    * [.enabled](#Config.timePicker.enabled) : <code>boolean</code>
    * [.step](#Config.timePicker.step) : <code>number</code>
    * [.hour](#Config.timePicker.hour) : <code>object</code>
        * [.enabled](#Config.timePicker.hour.enabled) : <code>boolean</code>
        * [.step](#Config.timePicker.hour.step) : <code>boolean</code>
    * [.minute](#Config.timePicker.minute) : <code>object</code>
        * [.enabled](#Config.timePicker.minute.enabled) : <code>boolean</code>
        * [.step](#Config.timePicker.minute.step) : <code>boolean</code>
    * [.second](#Config.timePicker.second) : <code>object</code>
        * [.enabled](#Config.timePicker.second.enabled) : <code>boolean</code>
        * [.step](#Config.timePicker.second.step) : <code>boolean</code>
    * [.meridiem](#Config.timePicker.meridiem) : <code>object</code>
        * [.enabled](#Config.timePicker.meridiem.enabled) : <code>boolean</code>

<a name="Config.timePicker.enabled"></a>

#### timePicker.enabled : <code>boolean</code>
**Kind**: static property of <code>[timePicker](#Config.timePicker)</code>  
<a name="Config.timePicker.step"></a>

#### timePicker.step : <code>number</code>
**Kind**: static property of <code>[timePicker](#Config.timePicker)</code>  
<a name="Config.timePicker.hour"></a>

#### timePicker.hour : <code>object</code>
**Kind**: static property of <code>[timePicker](#Config.timePicker)</code>  

* [.hour](#Config.timePicker.hour) : <code>object</code>
    * [.enabled](#Config.timePicker.hour.enabled) : <code>boolean</code>
    * [.step](#Config.timePicker.hour.step) : <code>boolean</code>

<a name="Config.timePicker.hour.enabled"></a>

##### hour.enabled : <code>boolean</code>
**Kind**: static property of <code>[hour](#Config.timePicker.hour)</code>  
<a name="Config.timePicker.hour.step"></a>

##### hour.step : <code>boolean</code>
overwrite by parent step

**Kind**: static property of <code>[hour](#Config.timePicker.hour)</code>  
<a name="Config.timePicker.minute"></a>

#### timePicker.minute : <code>object</code>
**Kind**: static property of <code>[timePicker](#Config.timePicker)</code>  

* [.minute](#Config.timePicker.minute) : <code>object</code>
    * [.enabled](#Config.timePicker.minute.enabled) : <code>boolean</code>
    * [.step](#Config.timePicker.minute.step) : <code>boolean</code>

<a name="Config.timePicker.minute.enabled"></a>

##### minute.enabled : <code>boolean</code>
**Kind**: static property of <code>[minute](#Config.timePicker.minute)</code>  
<a name="Config.timePicker.minute.step"></a>

##### minute.step : <code>boolean</code>
overwrite by parent step

**Kind**: static property of <code>[minute](#Config.timePicker.minute)</code>  
<a name="Config.timePicker.second"></a>

#### timePicker.second : <code>object</code>
**Kind**: static property of <code>[timePicker](#Config.timePicker)</code>  

* [.second](#Config.timePicker.second) : <code>object</code>
    * [.enabled](#Config.timePicker.second.enabled) : <code>boolean</code>
    * [.step](#Config.timePicker.second.step) : <code>boolean</code>

<a name="Config.timePicker.second.enabled"></a>

##### second.enabled : <code>boolean</code>
**Kind**: static property of <code>[second](#Config.timePicker.second)</code>  
<a name="Config.timePicker.second.step"></a>

##### second.step : <code>boolean</code>
overwrite by parent step

**Kind**: static property of <code>[second](#Config.timePicker.second)</code>  
<a name="Config.timePicker.meridiem"></a>

#### timePicker.meridiem : <code>object</code>
**Kind**: static property of <code>[timePicker](#Config.timePicker)</code>  
<a name="Config.timePicker.meridiem.enabled"></a>

##### meridiem.enabled : <code>boolean</code>
if you set this as false, datepicker clock system moved to 24-hour system

**Kind**: static property of <code>[meridiem](#Config.timePicker.meridiem)</code>  
<a name="Config.dayPicker"></a>

### Config.dayPicker : <code>object</code>
dayPicker config object

**Kind**: static property of <code>[Config](#Config)</code>  

* [.dayPicker](#Config.dayPicker) : <code>object</code>
    * [.enabled](#Config.dayPicker.enabled) : <code>boolean</code>
    * [.titleFormat](#Config.dayPicker.titleFormat) : <code>string</code>
    * [.titleFormatter(year, month)](#Config.dayPicker.titleFormatter) ⇒ <code>\*</code>
    * ["onSelect" (selectedDayUnix)](#Config.dayPicker.event_onSelect)

<a name="Config.dayPicker.enabled"></a>

#### dayPicker.enabled : <code>boolean</code>
**Kind**: static property of <code>[dayPicker](#Config.dayPicker)</code>  
**Default**: <code>true</code>  
<a name="Config.dayPicker.titleFormat"></a>

#### dayPicker.titleFormat : <code>string</code>
**Kind**: static property of <code>[dayPicker](#Config.dayPicker)</code>  
**Default**: <code>&quot;&#x27;YYYY MMMM&#x27;&quot;</code>  
<a name="Config.dayPicker.titleFormatter"></a>

#### dayPicker.titleFormatter(year, month) ⇒ <code>\*</code>
**Kind**: static method of <code>[dayPicker](#Config.dayPicker)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td>
    </tr><tr>
    <td>month</td>
    </tr>  </tbody>
</table>

<a name="Config.dayPicker.event_onSelect"></a>

#### "onSelect" (selectedDayUnix)
**Kind**: event emitted by <code>[dayPicker](#Config.dayPicker)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>selectedDayUnix</td>
    </tr>  </tbody>
</table>

<a name="Config.monthPicker"></a>

### Config.monthPicker : <code>object</code>
monthPicker config object

**Kind**: static property of <code>[Config](#Config)</code>  

* [.monthPicker](#Config.monthPicker) : <code>object</code>
    * [.enabled](#Config.monthPicker.enabled) : <code>boolean</code>
    * [.titleFormat](#Config.monthPicker.titleFormat) : <code>string</code>
    * [.titleFormatter(unix)](#Config.monthPicker.titleFormatter) ⇒ <code>\*</code>
    * ["onSelect" (monthIndex)](#Config.monthPicker.event_onSelect)

<a name="Config.monthPicker.enabled"></a>

#### monthPicker.enabled : <code>boolean</code>
**Kind**: static property of <code>[monthPicker](#Config.monthPicker)</code>  
**Default**: <code>true</code>  
<a name="Config.monthPicker.titleFormat"></a>

#### monthPicker.titleFormat : <code>string</code>
**Kind**: static property of <code>[monthPicker](#Config.monthPicker)</code>  
**Default**: <code>&quot;&#x27;YYYY&#x27;&quot;</code>  
<a name="Config.monthPicker.titleFormatter"></a>

#### monthPicker.titleFormatter(unix) ⇒ <code>\*</code>
**Kind**: static method of <code>[monthPicker](#Config.monthPicker)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>unix</td>
    </tr>  </tbody>
</table>

<a name="Config.monthPicker.event_onSelect"></a>

#### "onSelect" (monthIndex)
**Kind**: event emitted by <code>[monthPicker](#Config.monthPicker)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>monthIndex</td>
    </tr>  </tbody>
</table>

<a name="Config.yearPicker"></a>

### Config.yearPicker : <code>object</code>
yearPicker config object

**Kind**: static property of <code>[Config](#Config)</code>  

* [.yearPicker](#Config.yearPicker) : <code>object</code>
    * [.enabled](#Config.yearPicker.enabled) : <code>boolean</code>
    * [.titleFormat](#Config.yearPicker.titleFormat) : <code>string</code>
    * [.titleFormatter(year)](#Config.yearPicker.titleFormatter) ⇒ <code>string</code>
    * ["onSelect" (year)](#Config.yearPicker.event_onSelect)

<a name="Config.yearPicker.enabled"></a>

#### yearPicker.enabled : <code>boolean</code>
**Kind**: static property of <code>[yearPicker](#Config.yearPicker)</code>  
**Default**: <code>true</code>  
<a name="Config.yearPicker.titleFormat"></a>

#### yearPicker.titleFormat : <code>string</code>
**Kind**: static property of <code>[yearPicker](#Config.yearPicker)</code>  
**Default**: <code>&quot;&#x27;YYYY&#x27;&quot;</code>  
<a name="Config.yearPicker.titleFormatter"></a>

#### yearPicker.titleFormatter(year) ⇒ <code>string</code>
**Kind**: static method of <code>[yearPicker](#Config.yearPicker)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td>
    </tr>  </tbody>
</table>

<a name="Config.yearPicker.event_onSelect"></a>

#### "onSelect" (year)
**Kind**: event emitted by <code>[yearPicker](#Config.yearPicker)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td>
    </tr>  </tbody>
</table>

<a name="Config.position"></a>

### Config.position : <code>mix</code>
position of datepicker relative to input element

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>&#x27;auto&#x27;</code>  
**Example**  
```js
'position': 'auto'
'position': [10,10]
```
<a name="Config.autoClose"></a>

### Config.autoClose : <code>boolean</code>
If true picker close When Select day

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
<a name="Config.template"></a>

### Config.template : <code>string</code>
by default datepicker have a template string, and you can overwrite it simply by replace string in config.

**Kind**: static property of <code>[Config](#Config)</code>  
**Example**  
```js
<div id="plotId" class="datepicker-plot-area datepicker-plot-area-inline-view">
     {{#navigator.enabled}}
     <div class="navigator">
     <div class="datepicker-header">
     <div class="btn btn-next">{{navigator.text.btnNextText}}</div>
     <div class="btn btn-switch">{{ navigator.switch.text }}</div>
     <div class="btn btn-prev">{{navigator.text.btnPrevText}}</div>
     </div>
     </div>
     {{/navigator.enabled}}
     <div class="datepicker-grid-view" >
     {{#days.enabled}}
     {{#days.viewMode}}
     <div class="datepicker-day-view" >
     <div class="month-grid-box">
     <div class="header">
     <div class="title"></div>
     <div class="header-row">
     <div class="header-row-cell">ش</div>
     <div class="header-row-cell">ی</div>
     <div class="header-row-cell">د</div>
     <div class="header-row-cell">س</div>
     <div class="header-row-cell">چ</div>
     <div class="header-row-cell">پ</div>
     <div class="header-row-cell">ج</div>
     </div>
     </div>
     <table cellspacing="0" class="table-days">
     <tbody>
     {{#days.list}}

     <tr>
     {{#.}}

     {{#enabled}}
     <td data-unix="{{dataUnix}}" ><span  class="{{#otherMonth}}other-month{{/otherMonth}} {{#selected}}selected{{/selected}}">{{title}}</span></td>
     {{/enabled}}
     {{^enabled}}
     <td data-unix="{{dataUnix}}" class="disabled"><span class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span></td>
     {{/enabled}}

     {{/.}}
     </tr>
     {{/days.list}}
     </tbody>
     </table>
     </div>
     </div>
     {{/days.viewMode}}
     {{/days.enabled}}

     {{#month.enabled}}
     {{#month.viewMode}}
     <div class="datepicker-month-view">
     {{#month.list}}
     {{#enabled}}
     <div data-month="{{dataMonth}}" class="month-item {{#selected}}selected{{/selected}}">{{title}}</small></div>
     {{/enabled}}
     {{^enabled}}
     <div data-month="{{dataMonth}}" class="month-item month-item-disable {{#selected}}selected{{/selected}}">{{title}}</small></div>
     {{/enabled}}
     {{/month.list}}
     </div>
     {{/month.viewMode}}
     {{/month.enabled}}

     {{#year.enabled }}
     {{#year.viewMode }}
     <div class="datepicker-year-view" >
     {{#year.list}}
     {{#enabled}}
     <div data-year="{{dataYear}}" class="year-item {{#selected}}selected{{/selected}}">{{title}}</div>
     {{/enabled}}
     {{^enabled}}
     <div data-year="{{dataYear}}" class="year-item year-item-disable {{#selected}}selected{{/selected}}">{{title}}</div>
     {{/enabled}}
     {{/year.list}}
     </div>
     {{/year.viewMode }}
     {{/year.enabled }}

     </div>
     {{#time}}
     {{#enabled}}
     <div class="datepicker-time-view">
     {{#hour.enabled}}
     <div class="hour time-segment" data-time-key="hour">
     <div class="up-btn" data-time-key="hour">▲</div>
     <input value="{{hour.title}}" type="text" placeholder="hour" class="hour-input">
     <div class="down-btn" data-time-key="hour">▼</div>
     </div>
     <div class="divider">:</div>
     {{/hour.enabled}}
     {{#minute.enabled}}
     <div class="minute time-segment" data-time-key="minute" >
     <div class="up-btn" data-time-key="minute">▲</div>
     <input value="{{minute.title}}" type="text" placeholder="minute" class="minute-input">
     <div class="down-btn" data-time-key="minute">▼</div>
     </div>
     <div class="divider second-divider">:</div>
     {{/minute.enabled}}
     {{#second.enabled}}
     <div class="second time-segment" data-time-key="second"  >
     <div class="up-btn" data-time-key="second" >▲</div>
     <input value="{{second.title}}"  type="text" placeholder="second" class="second-input">
     <div class="down-btn" data-time-key="second" >▼</div>
     </div>
     <div class="divider meridian-divider"></div>
     <div class="divider meridian-divider"></div>
     {{/second.enabled}}
     {{#meridiem.enabled}}
     <div class="meridiem time-segment" data-time-key="meridian" >
     <div class="up-btn" data-time-key="meridiem">▲</div>
     <input value="{{meridiem.title}}" type="text" class="meridiem-input">
     <div class="down-btn" data-time-key="meridiem">▼</div>
     </div>
     {{/meridiem.enabled}}
     </div>
     {{/enabled}}
     {{/time}}

     {{#toolbox}}
     {{#enabled}}
     <div class="toolbox ">
     <div class="btn-today">{{text.btnToday}}</div>
     </div>
     {{/enabled}}
     {{/toolbox}}
     </div>
```
<a name="Config.observer"></a>

### <del>Config.observer : <code>boolean</code></del>
***Deprecated***

observer

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
<a name="Config.inputDelay"></a>

### Config.inputDelay : <code>number</code>
inputDelay

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>800</code>  
<a name="Config.formatter"></a>

### Config.formatter(unixDate)
format value of input

**Kind**: static method of <code>[Config](#Config)</code>  
**Default**: <code>function</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>unixDate</td>
    </tr>  </tbody>
</table>

**Example**  
```js
function (unixDate) {
     var self = this;
     var pdate = new persianDate(unixDate);
     pdate.formatPersian = this.persianDigit;
     return pdate.format(self.format);
 }
```
<a name="Config.altFieldFormatter"></a>

### Config.altFieldFormatter(unixDate)
format value of 'altField' input

**Kind**: static method of <code>[Config](#Config)</code>  
**Default**: <code>function</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>unixDate</td>
    </tr>  </tbody>
</table>

**Example**  
```js
function (unixDate) {
     var self = this;
     var thisAltFormat = self.altFormat.toLowerCase();
     if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
         return new Date(unixDate);
     }
     if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
         return unixDate;
     }
     else {
         var pd = new persianDate(unixDate);
         pd.formatPersian = this.persianDigit;
         return pd.format(self.altFormat);
     }
 }
```
<a name="Config.checkDate"></a>

### Config.checkDate() : <code>function</code>
check date avalibility

**Kind**: static method of <code>[Config](#Config)</code>  
<a name="Config.checkMonth"></a>

### Config.checkMonth() : <code>function</code>
check month avalibility

**Kind**: static method of <code>[Config](#Config)</code>  
<a name="Config.checkYear"></a>

### Config.checkYear() : <code>function</code>
check year avalibility

**Kind**: static method of <code>[Config](#Config)</code>  
<a name="Config.onToggle"></a>

### Config.onToggle()
**Kind**: static method of <code>[Config](#Config)</code>  
<a name="Config.onDestroy"></a>

### Config.onDestroy()
**Kind**: static method of <code>[Config](#Config)</code>  
<a name="Config.event_onSelect"></a>

### "onSelect" (unixDate)
A function that takes current datepicker unixDate. It is called When Day Select.

**Kind**: event emitted by <code>[Config](#Config)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>unixDate</td>
    </tr>  </tbody>
</table>

<a name="Config.event_onShow"></a>

### "onShow"
A function that takes current datepicker instance. It is called just before the datepicker is displayed.

**Kind**: event emitted by <code>[Config](#Config)</code>  
<a name="Config.event_onHide"></a>

### "onHide" (self)
A function that takes current datepicker instance. It is called just before the datepicker Hide.

**Kind**: event emitted by <code>[Config](#Config)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>self</td>
    </tr>  </tbody>
</table>

