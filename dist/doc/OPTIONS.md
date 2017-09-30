<a name="Config"></a>

# Config
persian-datepicker configuration document

**Kind**: global constant  

* [Config](#Config)
    * [.calendarType](#Config.calendarType) : <code>string</code>
    * [.calendar](#Config.calendar) : <code>object</code>
        * [.persian](#Config.calendar.persian) : <code>object</code>
            * [.locale](#Config.calendar.persian.locale) : <code>string</code>
            * [.showHint](#Config.calendar.persian.showHint) : <code>boolean</code>
            * [.leapYearMode](#Config.calendar.persian.leapYearMode) : <code>string</code>
        * [.gregorian](#Config.calendar.gregorian) : <code>object</code>
            * [.locale](#Config.calendar.gregorian.locale) : <code>string</code>
            * [.showHint](#Config.calendar.gregorian.showHint) : <code>boolean</code>
    * [.responsive](#Config.responsive) : <code>boolean</code>
    * [.inline](#Config.inline) : <code>boolean</code>
    * [.initialValue](#Config.initialValue) : <code>boolean</code>
    * [.initialValueType](#Config.initialValueType) : <code>boolean</code>
    * <del>[.persianDigit](#Config.persianDigit) : <code>boolean</code></del>
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
        * ["onNext"](#Config.navigator.event_onNext)
        * ["onPrev"](#Config.navigator.event_onPrev)
        * ["onSwitch"](#Config.navigator.event_onSwitch)
    * [.toolbox](#Config.toolbox) : <code>object</code>
        * [.enabled](#Config.toolbox.enabled) : <code>boolean</code>
        * [.text](#Config.toolbox.text) : <code>object</code>
            * <del>[.btnToday](#Config.toolbox.text.btnToday) : <code>string</code></del>
        * [.submitButton](#Config.toolbox.submitButton)
            * [.enabled](#Config.toolbox.submitButton.enabled) : <code>boolean</code>
            * [.text](#Config.toolbox.submitButton.text) : <code>object</code>
                * [.fa](#Config.toolbox.submitButton.text.fa) : <code>object</code>
                * [.en](#Config.toolbox.submitButton.text.en) : <code>object</code>
            * ["onSubmit"](#Config.toolbox.submitButton.event_onSubmit)
        * [.todayButton](#Config.toolbox.todayButton)
            * [.enabled](#Config.toolbox.todayButton.enabled) : <code>boolean</code>
            * [.text](#Config.toolbox.todayButton.text) : <code>object</code>
                * [.fa](#Config.toolbox.todayButton.text.fa) : <code>object</code>
                * [.en](#Config.toolbox.todayButton.text.en) : <code>object</code>
            * ["onToday"](#Config.toolbox.todayButton.event_onToday)
        * [.calendarSwitch](#Config.toolbox.calendarSwitch) : <code>object</code>
            * [.enabled](#Config.toolbox.calendarSwitch.enabled) : <code>boolean</code>
            * [.format](#Config.toolbox.calendarSwitch.format) : <code>string</code>
            * ["onSwitch"](#Config.toolbox.calendarSwitch.event_onSwitch)
        * <del>["onToday" (toolbox)](#Config.toolbox.event_onToday)</del>
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
        * [.meridian](#Config.timePicker.meridian) : <code>object</code>
            * [.enabled](#Config.timePicker.meridian.enabled) : <code>boolean</code>
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
    * [.position](#Config.position) : <code>string</code> \| <code>array</code>
    * [.autoClose](#Config.autoClose) : <code>boolean</code>
    * [.template](#Config.template) : <code>string</code>
    * [.observer](#Config.observer) : <code>boolean</code>
    * [.inputDelay](#Config.inputDelay) : <code>number</code>
    * [.formatter(unixDate)](#Config.formatter)
    * [.altFieldFormatter(unixDate)](#Config.altFieldFormatter)
    * [.checkDate()](#Config.checkDate) : <code>function</code>
    * [.checkMonth()](#Config.checkMonth) : <code>function</code>
    * [.checkYear()](#Config.checkYear) : <code>function</code>
    * ["onSelect" (unixDate)](#Config.event_onSelect)
    * ["onShow"](#Config.event_onShow)
    * ["onHide"](#Config.event_onHide)
    * ["onToggle"](#Config.event_onToggle)
    * ["onDestroy"](#Config.event_onDestroy)

<a name="Config.calendarType"></a>

## Config.calendarType : <code>string</code>
set default calendar mode of datepicker, available options: 'persian', 'gregorian'

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>&quot;&#x27;persian&#x27;&quot;</code>  
**Since**: 0.6.0  
<a name="Config.calendar"></a>

## Config.calendar : <code>object</code>
calendar type and localization configuration

**Kind**: static property of [<code>Config</code>](#Config)  
**Since**: 0.6.0  
**Example**  
```js
{
    'persian': {
        'locale': 'fa',
        'showHint': false,
        'leapYearMode': 'algorithmic' // "astronomical"
    },

    'gregorian': {
        'locale': 'en',
        'showHint': false
    }
}
```

* [.calendar](#Config.calendar) : <code>object</code>
    * [.persian](#Config.calendar.persian) : <code>object</code>
        * [.locale](#Config.calendar.persian.locale) : <code>string</code>
        * [.showHint](#Config.calendar.persian.showHint) : <code>boolean</code>
        * [.leapYearMode](#Config.calendar.persian.leapYearMode) : <code>string</code>
    * [.gregorian](#Config.calendar.gregorian) : <code>object</code>
        * [.locale](#Config.calendar.gregorian.locale) : <code>string</code>
        * [.showHint](#Config.calendar.gregorian.showHint) : <code>boolean</code>

<a name="Config.calendar.persian"></a>

### calendar.persian : <code>object</code>
Persian calendar configuration

**Kind**: static property of [<code>calendar</code>](#Config.calendar)  
**Since**: 0.6.0  

* [.persian](#Config.calendar.persian) : <code>object</code>
    * [.locale](#Config.calendar.persian.locale) : <code>string</code>
    * [.showHint](#Config.calendar.persian.showHint) : <code>boolean</code>
    * [.leapYearMode](#Config.calendar.persian.leapYearMode) : <code>string</code>

<a name="Config.calendar.persian.locale"></a>

#### persian.locale : <code>string</code>
set locale of Persian calendar available options: 'fa', 'en'

**Kind**: static property of [<code>persian</code>](#Config.calendar.persian)  
**Default**: <code>&quot;&#x27;fa&#x27;&quot;</code>  
**Since**: 0.6.0  
<a name="Config.calendar.persian.showHint"></a>

#### persian.showHint : <code>boolean</code>
if set true, small date hint of this calendar will be shown on another calendar

**Kind**: static property of [<code>persian</code>](#Config.calendar.persian)  
**Default**: <code>false</code>  
**Since**: 0.6.0  
<a name="Config.calendar.persian.leapYearMode"></a>

#### persian.leapYearMode : <code>string</code>
Persian calendar leap year calculation mode, available options: 'algorithmic', 'astronomical'

**Kind**: static property of [<code>persian</code>](#Config.calendar.persian)  
**Default**: <code>&quot;&#x27;algorithmic&#x27;&quot;</code>  
**Link**: http://babakhani.github.io/PersianWebToolkit/doc/persian-date/leapyear  
**Since**: 0.6.0  
<a name="Config.calendar.gregorian"></a>

### calendar.gregorian : <code>object</code>
Gregorian calendar configuration

**Kind**: static property of [<code>calendar</code>](#Config.calendar)  
**Since**: 0.6.0  

* [.gregorian](#Config.calendar.gregorian) : <code>object</code>
    * [.locale](#Config.calendar.gregorian.locale) : <code>string</code>
    * [.showHint](#Config.calendar.gregorian.showHint) : <code>boolean</code>

<a name="Config.calendar.gregorian.locale"></a>

#### gregorian.locale : <code>string</code>
set locale of Gregorian calendar available options: 'fa', 'en'

**Kind**: static property of [<code>gregorian</code>](#Config.calendar.gregorian)  
**Default**: <code>&quot;&#x27;en&#x27;&quot;</code>  
**Since**: 0.6.0  
<a name="Config.calendar.gregorian.showHint"></a>

#### gregorian.showHint : <code>boolean</code>
if set true, small date hint of this calendar will be shown on another calendar

**Kind**: static property of [<code>gregorian</code>](#Config.calendar.gregorian)  
**Default**: <code>false</code>  
**Since**: 0.6.0  
<a name="Config.responsive"></a>

## Config.responsive : <code>boolean</code>
if set true make enable responsive view on mobile devices

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>true</code>  
**Since**: 0.6.0  
<a name="Config.inline"></a>

## Config.inline : <code>boolean</code>
if true datepicker render inline

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>false</code>  
<a name="Config.initialValue"></a>

## Config.initialValue : <code>boolean</code>
If set true datepicker init with input value date, use data-date property when you want set inline datepicker initial value

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>true</code>  
<a name="Config.initialValueType"></a>

## Config.initialValueType : <code>boolean</code>
If set true datepicker init with input value date

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>true</code>  
<a name="Config.persianDigit"></a>

## <del>Config.persianDigit : <code>boolean</code></del>
***Deprecated***

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>true</code>  
<a name="Config.viewMode"></a>

## Config.viewMode : <code>string</code>
default view mode, Acceptable value : day,month,year

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>&quot;&#x27;day&#x27;&quot;</code>  
<a name="Config.format"></a>

## Config.format : <code>boolean</code>
the date format, combination of d, dd, m, mm, yy, yyy.

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>&#x27;LLLL&#x27;</code>  
**Link**: http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format  
<a name="Config.altField"></a>

## Config.altField : <code>boolean</code>
An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class'

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>false</code>  
**Example**  
```js
altField: '#inputAltFirld'

altField: '.input-alt-field'
```
<a name="Config.altFormat"></a>

## Config.altFormat : <code>string</code>
the date format, combination of d, dd, m, mm, yy, yyy.

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>&quot;&#x27;unix&#x27;&quot;</code>  
**Link**: http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format  
<a name="Config.minDate"></a>

## Config.minDate : <code>Date</code>
Set min date on datepicker, prevent user select date before given unix time

**Kind**: static property of [<code>Config</code>](#Config)  
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

## Config.maxDate : <code>Date</code>
Set max date on datepicker, prevent user select date after given unix time

**Kind**: static property of [<code>Config</code>](#Config)  
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

## Config.navigator : <code>object</code>
navigator config object

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>true</code>  

* [.navigator](#Config.navigator) : <code>object</code>
    * [.enabled](#Config.navigator.enabled) : <code>boolean</code>
    * [.scroll](#Config.navigator.scroll) : <code>object</code>
        * [.enabled](#Config.navigator.scroll.enabled) : <code>boolean</code>
    * [.text](#Config.navigator.text)
        * [.btnNextText](#Config.navigator.text.btnNextText)
        * [.btnPrevText](#Config.navigator.text.btnPrevText)
    * ["onNext"](#Config.navigator.event_onNext)
    * ["onPrev"](#Config.navigator.event_onPrev)
    * ["onSwitch"](#Config.navigator.event_onSwitch)

<a name="Config.navigator.enabled"></a>

### navigator.enabled : <code>boolean</code>
make navigator enable or disable

**Kind**: static property of [<code>navigator</code>](#Config.navigator)  
**Default**: <code>true</code>  
<a name="Config.navigator.scroll"></a>

### navigator.scroll : <code>object</code>
scroll navigation options

**Kind**: static property of [<code>navigator</code>](#Config.navigator)  
<a name="Config.navigator.scroll.enabled"></a>

#### scroll.enabled : <code>boolean</code>
if you want make disable scroll navigation set this option false

**Kind**: static property of [<code>scroll</code>](#Config.navigator.scroll)  
**Default**: <code>true</code>  
<a name="Config.navigator.text"></a>

### navigator.text
navigator text config object

**Kind**: static property of [<code>navigator</code>](#Config.navigator)  

* [.text](#Config.navigator.text)
    * [.btnNextText](#Config.navigator.text.btnNextText)
    * [.btnPrevText](#Config.navigator.text.btnPrevText)

<a name="Config.navigator.text.btnNextText"></a>

#### text.btnNextText
text of next button

**Kind**: static property of [<code>text</code>](#Config.navigator.text)  
**Default**: <code>&#x27;&lt;&#x27;</code>  
<a name="Config.navigator.text.btnPrevText"></a>

#### text.btnPrevText
text of prev button

**Kind**: static property of [<code>text</code>](#Config.navigator.text)  
**Default:**: '>'  
<a name="Config.navigator.event_onNext"></a>

### "onNext"
Called when navigator goes to next state

**Kind**: event emitted by [<code>navigator</code>](#Config.navigator)  
**Example**  
```js
function (navigator) {
     //log('navigator next ');
 }
```
<a name="Config.navigator.event_onPrev"></a>

### "onPrev"
Called when navigator goes to previews state

**Kind**: event emitted by [<code>navigator</code>](#Config.navigator)  
**Example**  
```js
function (navigator) {
     //log('navigator prev ');
 }
```
<a name="Config.navigator.event_onSwitch"></a>

### "onSwitch"
Called when navigator switch

**Kind**: event emitted by [<code>navigator</code>](#Config.navigator)  
**Example**  
```js
function (state) {
                // console.log('navigator switch ');
 }
```
<a name="Config.toolbox"></a>

## Config.toolbox : <code>object</code>
toolbox config object

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>true</code>  

* [.toolbox](#Config.toolbox) : <code>object</code>
    * [.enabled](#Config.toolbox.enabled) : <code>boolean</code>
    * [.text](#Config.toolbox.text) : <code>object</code>
        * <del>[.btnToday](#Config.toolbox.text.btnToday) : <code>string</code></del>
    * [.submitButton](#Config.toolbox.submitButton)
        * [.enabled](#Config.toolbox.submitButton.enabled) : <code>boolean</code>
        * [.text](#Config.toolbox.submitButton.text) : <code>object</code>
            * [.fa](#Config.toolbox.submitButton.text.fa) : <code>object</code>
            * [.en](#Config.toolbox.submitButton.text.en) : <code>object</code>
        * ["onSubmit"](#Config.toolbox.submitButton.event_onSubmit)
    * [.todayButton](#Config.toolbox.todayButton)
        * [.enabled](#Config.toolbox.todayButton.enabled) : <code>boolean</code>
        * [.text](#Config.toolbox.todayButton.text) : <code>object</code>
            * [.fa](#Config.toolbox.todayButton.text.fa) : <code>object</code>
            * [.en](#Config.toolbox.todayButton.text.en) : <code>object</code>
        * ["onToday"](#Config.toolbox.todayButton.event_onToday)
    * [.calendarSwitch](#Config.toolbox.calendarSwitch) : <code>object</code>
        * [.enabled](#Config.toolbox.calendarSwitch.enabled) : <code>boolean</code>
        * [.format](#Config.toolbox.calendarSwitch.format) : <code>string</code>
        * ["onSwitch"](#Config.toolbox.calendarSwitch.event_onSwitch)
    * <del>["onToday" (toolbox)](#Config.toolbox.event_onToday)</del>

<a name="Config.toolbox.enabled"></a>

### toolbox.enabled : <code>boolean</code>
boolean option that make toolbar enable or disable

**Kind**: static property of [<code>toolbox</code>](#Config.toolbox)  
**Default**: <code>true</code>  
<a name="Config.toolbox.text"></a>

### toolbox.text : <code>object</code>
toolbox button text coniguration

**Kind**: static property of [<code>toolbox</code>](#Config.toolbox)  
<a name="Config.toolbox.text.btnToday"></a>

#### <del>text.btnToday : <code>string</code></del>
***Deprecated***

text of today button, deprecated from 0.6.0

**Kind**: static property of [<code>text</code>](#Config.toolbox.text)  
**Default**: <code>&quot;&#x27;امروز&#x27;&quot;</code>  
<a name="Config.toolbox.submitButton"></a>

### toolbox.submitButton
submit button configuration (only shown on mobile)

**Kind**: static property of [<code>toolbox</code>](#Config.toolbox)  
**Since**: 0.6.0  

* [.submitButton](#Config.toolbox.submitButton)
    * [.enabled](#Config.toolbox.submitButton.enabled) : <code>boolean</code>
    * [.text](#Config.toolbox.submitButton.text) : <code>object</code>
        * [.fa](#Config.toolbox.submitButton.text.fa) : <code>object</code>
        * [.en](#Config.toolbox.submitButton.text.en) : <code>object</code>
    * ["onSubmit"](#Config.toolbox.submitButton.event_onSubmit)

<a name="Config.toolbox.submitButton.enabled"></a>

#### submitButton.enabled : <code>boolean</code>
make submit button enable or disable

**Kind**: static property of [<code>submitButton</code>](#Config.toolbox.submitButton)  
**Default**: <code>false</code>  
**Since**: 0.6.0  
<a name="Config.toolbox.submitButton.text"></a>

#### submitButton.text : <code>object</code>
submit button text

**Kind**: static property of [<code>submitButton</code>](#Config.toolbox.submitButton)  
**Since**: 0.6.0  

* [.text](#Config.toolbox.submitButton.text) : <code>object</code>
    * [.fa](#Config.toolbox.submitButton.text.fa) : <code>object</code>
    * [.en](#Config.toolbox.submitButton.text.en) : <code>object</code>

<a name="Config.toolbox.submitButton.text.fa"></a>

##### text.fa : <code>object</code>
show when current calendar is Persian

**Kind**: static property of [<code>text</code>](#Config.toolbox.submitButton.text)  
**Default**: <code>تایید</code>  
**Since**: 0.6.0  
<a name="Config.toolbox.submitButton.text.en"></a>

##### text.en : <code>object</code>
show when current calendar is Gregorian

**Kind**: static property of [<code>text</code>](#Config.toolbox.submitButton.text)  
**Default**: <code>submit</code>  
**Since**: 0.6.0  
<a name="Config.toolbox.submitButton.event_onSubmit"></a>

#### "onSubmit"
Called when submit button clicked

**Kind**: event emitted by [<code>submitButton</code>](#Config.toolbox.submitButton)  
**Since**: 0.6.0  
<a name="Config.toolbox.todayButton"></a>

### toolbox.todayButton
toolbox today button configuration

**Kind**: static property of [<code>toolbox</code>](#Config.toolbox)  
**Since**: 0.6.0  

* [.todayButton](#Config.toolbox.todayButton)
    * [.enabled](#Config.toolbox.todayButton.enabled) : <code>boolean</code>
    * [.text](#Config.toolbox.todayButton.text) : <code>object</code>
        * [.fa](#Config.toolbox.todayButton.text.fa) : <code>object</code>
        * [.en](#Config.toolbox.todayButton.text.en) : <code>object</code>
    * ["onToday"](#Config.toolbox.todayButton.event_onToday)

<a name="Config.toolbox.todayButton.enabled"></a>

#### todayButton.enabled : <code>boolean</code>
make toolbox today button enable or disable

**Kind**: static property of [<code>todayButton</code>](#Config.toolbox.todayButton)  
**Since**: 0.6.0  
<a name="Config.toolbox.todayButton.text"></a>

#### todayButton.text : <code>object</code>
today button text

**Kind**: static property of [<code>todayButton</code>](#Config.toolbox.todayButton)  
**Since**: 0.6.0  

* [.text](#Config.toolbox.todayButton.text) : <code>object</code>
    * [.fa](#Config.toolbox.todayButton.text.fa) : <code>object</code>
    * [.en](#Config.toolbox.todayButton.text.en) : <code>object</code>

<a name="Config.toolbox.todayButton.text.fa"></a>

##### text.fa : <code>object</code>
show when current calendar is Persian

**Kind**: static property of [<code>text</code>](#Config.toolbox.todayButton.text)  
**Default**: <code>امروز</code>  
**Since**: 0.6.0  
<a name="Config.toolbox.todayButton.text.en"></a>

##### text.en : <code>object</code>
show when current calendar is Gregorian

**Kind**: static property of [<code>text</code>](#Config.toolbox.todayButton.text)  
**Default**: <code>today</code>  
**Since**: 0.6.0  
<a name="Config.toolbox.todayButton.event_onToday"></a>

#### "onToday"
Called when today button clicked

**Kind**: event emitted by [<code>todayButton</code>](#Config.toolbox.todayButton)  
**Since**: 0.6.0  
<a name="Config.toolbox.calendarSwitch"></a>

### toolbox.calendarSwitch : <code>object</code>
toolbox calendar switch configuration

**Kind**: static property of [<code>toolbox</code>](#Config.toolbox)  
**Since**: 0.6.0  

* [.calendarSwitch](#Config.toolbox.calendarSwitch) : <code>object</code>
    * [.enabled](#Config.toolbox.calendarSwitch.enabled) : <code>boolean</code>
    * [.format](#Config.toolbox.calendarSwitch.format) : <code>string</code>
    * ["onSwitch"](#Config.toolbox.calendarSwitch.event_onSwitch)

<a name="Config.toolbox.calendarSwitch.enabled"></a>

#### calendarSwitch.enabled : <code>boolean</code>
make calendar switch enable or disable

**Kind**: static property of [<code>calendarSwitch</code>](#Config.toolbox.calendarSwitch)  
**Default**: <code>true</code>  
**Since**: 0.6.0  
<a name="Config.toolbox.calendarSwitch.format"></a>

#### calendarSwitch.format : <code>string</code>
calendar switch text format string

**Kind**: static property of [<code>calendarSwitch</code>](#Config.toolbox.calendarSwitch)  
**Default**: <code>&quot;MMMM&quot;</code>  
**Link**: http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format  
**Since**: 0.6.0  
<a name="Config.toolbox.calendarSwitch.event_onSwitch"></a>

#### "onSwitch"
Called when calendar switch clicked

**Kind**: event emitted by [<code>calendarSwitch</code>](#Config.toolbox.calendarSwitch)  
**Since**: 0.6.0  
<a name="Config.toolbox.event_onToday"></a>

### <del>"onToday" (toolbox)</del>
***Deprecated***

**Kind**: event emitted by [<code>toolbox</code>](#Config.toolbox)  
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

## Config.onlyTimePicker : <code>boolean</code>
if true all pickers hide and just show timepicker

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>false</code>  
<a name="Config.onlySelectOnDate"></a>

## Config.onlySelectOnDate : <code>boolean</code>
if true date select just by click on day in month grid, and when user select month or year selected date doesnt change

**Kind**: static property of [<code>Config</code>](#Config)  
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

## Config.timePicker : <code>object</code>
timePicker configuration

**Kind**: static property of [<code>Config</code>](#Config)  

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
    * [.meridian](#Config.timePicker.meridian) : <code>object</code>
        * [.enabled](#Config.timePicker.meridian.enabled) : <code>boolean</code>

<a name="Config.timePicker.enabled"></a>

### timePicker.enabled : <code>boolean</code>
make timePicker enable or disable

**Kind**: static property of [<code>timePicker</code>](#Config.timePicker)  
<a name="Config.timePicker.step"></a>

### timePicker.step : <code>number</code>
The amount that increases or decreases by pressing the button

**Kind**: static property of [<code>timePicker</code>](#Config.timePicker)  
<a name="Config.timePicker.hour"></a>

### timePicker.hour : <code>object</code>
hour selector configuration

**Kind**: static property of [<code>timePicker</code>](#Config.timePicker)  

* [.hour](#Config.timePicker.hour) : <code>object</code>
    * [.enabled](#Config.timePicker.hour.enabled) : <code>boolean</code>
    * [.step](#Config.timePicker.hour.step) : <code>boolean</code>

<a name="Config.timePicker.hour.enabled"></a>

#### hour.enabled : <code>boolean</code>
make hour selector enable or disable

**Kind**: static property of [<code>hour</code>](#Config.timePicker.hour)  
<a name="Config.timePicker.hour.step"></a>

#### hour.step : <code>boolean</code>
The amount that increases or decreases hour, by pressing the button. overwrite by timepicker.step

**Kind**: static property of [<code>hour</code>](#Config.timePicker.hour)  
<a name="Config.timePicker.minute"></a>

### timePicker.minute : <code>object</code>
minute selector configuration

**Kind**: static property of [<code>timePicker</code>](#Config.timePicker)  

* [.minute](#Config.timePicker.minute) : <code>object</code>
    * [.enabled](#Config.timePicker.minute.enabled) : <code>boolean</code>
    * [.step](#Config.timePicker.minute.step) : <code>boolean</code>

<a name="Config.timePicker.minute.enabled"></a>

#### minute.enabled : <code>boolean</code>
make minute selector enable or disable

**Kind**: static property of [<code>minute</code>](#Config.timePicker.minute)  
<a name="Config.timePicker.minute.step"></a>

#### minute.step : <code>boolean</code>
overwrite by parent step

**Kind**: static property of [<code>minute</code>](#Config.timePicker.minute)  
<a name="Config.timePicker.second"></a>

### timePicker.second : <code>object</code>
second selector configuration

**Kind**: static property of [<code>timePicker</code>](#Config.timePicker)  

* [.second](#Config.timePicker.second) : <code>object</code>
    * [.enabled](#Config.timePicker.second.enabled) : <code>boolean</code>
    * [.step](#Config.timePicker.second.step) : <code>boolean</code>

<a name="Config.timePicker.second.enabled"></a>

#### second.enabled : <code>boolean</code>
make second selector enable or disable

**Kind**: static property of [<code>second</code>](#Config.timePicker.second)  
<a name="Config.timePicker.second.step"></a>

#### second.step : <code>boolean</code>
The amount that increases or decreases second, by pressing the button. overwrite by timepicker.step

**Kind**: static property of [<code>second</code>](#Config.timePicker.second)  
<a name="Config.timePicker.meridian"></a>

### timePicker.meridian : <code>object</code>
meridian selector configuration

**Kind**: static property of [<code>timePicker</code>](#Config.timePicker)  
<a name="Config.timePicker.meridian.enabled"></a>

#### meridian.enabled : <code>boolean</code>
if you set this as false, datepicker timepicker system moved to 24-hour system

**Kind**: static property of [<code>meridian</code>](#Config.timePicker.meridian)  
<a name="Config.dayPicker"></a>

## Config.dayPicker : <code>object</code>
dayPicker configuration

**Kind**: static property of [<code>Config</code>](#Config)  

* [.dayPicker](#Config.dayPicker) : <code>object</code>
    * [.enabled](#Config.dayPicker.enabled) : <code>boolean</code>
    * [.titleFormat](#Config.dayPicker.titleFormat) : <code>string</code>
    * [.titleFormatter(year, month)](#Config.dayPicker.titleFormatter) ⇒ <code>\*</code>
    * ["onSelect" (selectedDayUnix)](#Config.dayPicker.event_onSelect)

<a name="Config.dayPicker.enabled"></a>

### dayPicker.enabled : <code>boolean</code>
make daypicker enable or disable

**Kind**: static property of [<code>dayPicker</code>](#Config.dayPicker)  
**Default**: <code>true</code>  
<a name="Config.dayPicker.titleFormat"></a>

### dayPicker.titleFormat : <code>string</code>
daypicker title format string

**Kind**: static property of [<code>dayPicker</code>](#Config.dayPicker)  
**Default**: <code>&quot;&#x27;YYYY MMMM&#x27;&quot;</code>  
**Link**: http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format  
<a name="Config.dayPicker.titleFormatter"></a>

### dayPicker.titleFormatter(year, month) ⇒ <code>\*</code>
daypicker title formatter function

**Kind**: static method of [<code>dayPicker</code>](#Config.dayPicker)  
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

### "onSelect" (selectedDayUnix)
fired when user select date

**Kind**: event emitted by [<code>dayPicker</code>](#Config.dayPicker)  
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

## Config.monthPicker : <code>object</code>
monthPicker configuration

**Kind**: static property of [<code>Config</code>](#Config)  

* [.monthPicker](#Config.monthPicker) : <code>object</code>
    * [.enabled](#Config.monthPicker.enabled) : <code>boolean</code>
    * [.titleFormat](#Config.monthPicker.titleFormat) : <code>string</code>
    * [.titleFormatter(unix)](#Config.monthPicker.titleFormatter) ⇒ <code>\*</code>
    * ["onSelect" (monthIndex)](#Config.monthPicker.event_onSelect)

<a name="Config.monthPicker.enabled"></a>

### monthPicker.enabled : <code>boolean</code>
make monthPicker enable or disable

**Kind**: static property of [<code>monthPicker</code>](#Config.monthPicker)  
**Default**: <code>true</code>  
<a name="Config.monthPicker.titleFormat"></a>

### monthPicker.titleFormat : <code>string</code>
monthPicker title format string

**Kind**: static property of [<code>monthPicker</code>](#Config.monthPicker)  
**Default**: <code>&quot;&#x27;YYYY&#x27;&quot;</code>  
<a name="Config.monthPicker.titleFormatter"></a>

### monthPicker.titleFormatter(unix) ⇒ <code>\*</code>
monthPicker title formatter function

**Kind**: static method of [<code>monthPicker</code>](#Config.monthPicker)  
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

### "onSelect" (monthIndex)
fired when user select month

**Kind**: event emitted by [<code>monthPicker</code>](#Config.monthPicker)  
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

## Config.yearPicker : <code>object</code>
yearPicker configuration

**Kind**: static property of [<code>Config</code>](#Config)  

* [.yearPicker](#Config.yearPicker) : <code>object</code>
    * [.enabled](#Config.yearPicker.enabled) : <code>boolean</code>
    * [.titleFormat](#Config.yearPicker.titleFormat) : <code>string</code>
    * [.titleFormatter(year)](#Config.yearPicker.titleFormatter) ⇒ <code>string</code>
    * ["onSelect" (year)](#Config.yearPicker.event_onSelect)

<a name="Config.yearPicker.enabled"></a>

### yearPicker.enabled : <code>boolean</code>
make yearPicker enable or disable

**Kind**: static property of [<code>yearPicker</code>](#Config.yearPicker)  
**Default**: <code>true</code>  
<a name="Config.yearPicker.titleFormat"></a>

### yearPicker.titleFormat : <code>string</code>
yearPicker title format string

**Kind**: static property of [<code>yearPicker</code>](#Config.yearPicker)  
**Default**: <code>&quot;&#x27;YYYY&#x27;&quot;</code>  
<a name="Config.yearPicker.titleFormatter"></a>

### yearPicker.titleFormatter(year) ⇒ <code>string</code>
yearPicker title formatter function

**Kind**: static method of [<code>yearPicker</code>](#Config.yearPicker)  
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

### "onSelect" (year)
fired when user select year

**Kind**: event emitted by [<code>yearPicker</code>](#Config.yearPicker)  
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

## Config.position : <code>string</code> \| <code>array</code>
position of datepicker relative to input element

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>&quot;&#x27;auto&#x27;&quot;</code>  
**Example**  
```js
'position': 'auto'
'position': [10,10]
```
<a name="Config.autoClose"></a>

## Config.autoClose : <code>boolean</code>
If true datepicker close When select a date

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>false</code>  
<a name="Config.template"></a>

## Config.template : <code>string</code>
by default datepicker have a template string, and you can overwrite it simply by replace string in config.

**Kind**: static property of [<code>Config</code>](#Config)  
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
     {{#meridian.enabled}}
     <div class="meridian time-segment" data-time-key="meridian" >
     <div class="up-btn" data-time-key="meridian">▲</div>
     <input value="{{meridian.title}}" type="text" class="meridian-input">
     <div class="down-btn" data-time-key="meridian">▼</div>
     </div>
     {{/meridian.enabled}}
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

## Config.observer : <code>boolean</code>
if true datepicker update self by user inputted date string, accept 'yyyy/mm/dd'

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>false</code>  
**Example**  
```js
'1396/10/2', ''
```
<a name="Config.inputDelay"></a>

## Config.inputDelay : <code>number</code>
waite time for last user key-down event, accept millisecond

**Kind**: static property of [<code>Config</code>](#Config)  
**Default**: <code>800</code>  
<a name="Config.formatter"></a>

## Config.formatter(unixDate)
format value of input

**Kind**: static method of [<code>Config</code>](#Config)  
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

## Config.altFieldFormatter(unixDate)
format value of 'altField' input

**Kind**: static method of [<code>Config</code>](#Config)  
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

## Config.checkDate() : <code>function</code>
Validate date access before render

**Kind**: static method of [<code>Config</code>](#Config)  
<a name="Config.checkMonth"></a>

## Config.checkMonth() : <code>function</code>
Validate month access before render

**Kind**: static method of [<code>Config</code>](#Config)  
<a name="Config.checkYear"></a>

## Config.checkYear() : <code>function</code>
Validate year access before render

**Kind**: static method of [<code>Config</code>](#Config)  
<a name="Config.event_onSelect"></a>

## "onSelect" (unixDate)
A function that takes current datepicker unixDate. called When date Select.

**Kind**: event emitted by [<code>Config</code>](#Config)  
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

## "onShow"
A function that takes current datepicker instance. It is called just before the datepicker is displayed.

**Kind**: event emitted by [<code>Config</code>](#Config)  
<a name="Config.event_onHide"></a>

## "onHide"
A function that takes current datepicker instance. It is called just before the datepicker Hide.

**Kind**: event emitted by [<code>Config</code>](#Config)  
<a name="Config.event_onToggle"></a>

## "onToggle"
on toggle datepicker event

**Kind**: event emitted by [<code>Config</code>](#Config)  
<a name="Config.event_onDestroy"></a>

## "onDestroy"
on destroy datepicker event

**Kind**: event emitted by [<code>Config</code>](#Config)  
