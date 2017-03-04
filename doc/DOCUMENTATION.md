<a name="Config"></a>

## Config
This is default config class

**Kind**: global constant  

* [Config](#Config)
    * [.initialValue](#Config.initialValue) : <code>Boolean</code>
    * [.persianDigit](#Config.persianDigit) : <code>Boolean</code>
    * [.viewMode](#Config.viewMode) : <code>string</code>
    * [.format](#Config.format) : <code>boolean</code>
    * [.altField](#Config.altField) : <code>boolean</code>
    * [.altFormat](#Config.altFormat) : <code>string</code>
    * [.minDate](#Config.minDate) : <code>boolean</code>
    * [.maxDate](#Config.maxDate) : <code>boolean</code>
    * [.navigator](#Config.navigator) : <code>object</code>
        * [.enabled](#Config.navigator.enabled)
        * [.text](#Config.navigator.text)
            * [.btnNextText](#Config.navigator.text.btnNextText)
            * [.btnPrevText](#Config.navigator.text.btnPrevText)
        * ["onNext" (navigator)](#Config.navigator.event_onNext)
        * ["onPrev" (navigator)](#Config.navigator.event_onPrev)
        * ["onSwitch" (navigator)](#Config.navigator.event_onSwitch)
    * [.toolbox](#Config.toolbox) : <code>object</code>
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
    * [.monthPicker](#Config.monthPicker) : <code>object</code>
    * [.yearPicker](#Config.yearPicker) : <code>object</code>
    * [.position](#Config.position)
    * [.autoClose](#Config.autoClose) : <code>boolean</code>
    * <del>[.observer](#Config.observer) : <code>boolean</code></del>
    * [.inputDelay](#Config.inputDelay) : <code>number</code>
    * [.formatter(unixDate)](#Config.formatter) ⇒ <code>\*</code>
    * [.altFieldFormatter(unixDate)](#Config.altFieldFormatter) ⇒ <code>\*</code>
    * [.checkDate()](#Config.checkDate) : <code>function</code>
    * [.checkMonth()](#Config.checkMonth) : <code>function</code>
    * [.checkYear()](#Config.checkYear) : <code>function</code>
    * [.onToggle()](#Config.onToggle)
    * [.onDestroy()](#Config.onDestroy)
    * ["onSelect" (unixDate)](#Config.event_onSelect)
    * ["onShow"](#Config.event_onShow)
    * ["onHide" (self)](#Config.event_onHide)

<a name="Config.initialValue"></a>

### Config.initialValue : <code>Boolean</code>
**Kind**: static property of <code>[Config](#Config)</code>  
<a name="Config.persianDigit"></a>

### Config.persianDigit : <code>Boolean</code>
**Kind**: static property of <code>[Config](#Config)</code>  
<a name="Config.viewMode"></a>

### Config.viewMode : <code>string</code>
Acceptable value : day,month,year

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>&quot;day&quot;</code>  
<a name="Config.format"></a>

### Config.format : <code>boolean</code>
the date format, combination of d, dd, m, mm, yy, yyy.
[http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/](http://babakhani.github.io/PersianWebToolkit/doc/persiandate/0.1.8/#/displaying/format/)

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
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
**Default**: <code>&quot;unix&quot;</code>  
<a name="Config.minDate"></a>

### Config.minDate : <code>boolean</code>
set min date on datepicker

**Kind**: static property of <code>[Config](#Config)</code>  
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

### Config.maxDate : <code>boolean</code>
set max date on datepicker

**Kind**: static property of <code>[Config](#Config)</code>  
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
    * [.enabled](#Config.navigator.enabled)
    * [.text](#Config.navigator.text)
        * [.btnNextText](#Config.navigator.text.btnNextText)
        * [.btnPrevText](#Config.navigator.text.btnPrevText)
    * ["onNext" (navigator)](#Config.navigator.event_onNext)
    * ["onPrev" (navigator)](#Config.navigator.event_onPrev)
    * ["onSwitch" (navigator)](#Config.navigator.event_onSwitch)

<a name="Config.navigator.enabled"></a>

#### navigator.enabled
Enable or Disable dayPicker

**Kind**: static property of <code>[navigator](#Config.navigator)</code>  
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
<a name="Config.navigator.text.btnPrevText"></a>

##### text.btnPrevText
text of prev btn

**Kind**: static property of <code>[text](#Config.navigator.text)</code>  
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

<a name="Config.toolbox"></a>

### Config.toolbox : <code>object</code>
toolbox config object

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>true</code>  
<a name="Config.onlyTimePicker"></a>

### Config.onlyTimePicker : <code>boolean</code>
if true all pickers hide and just show timepicker

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
<a name="Config.onlySelectOnDate"></a>

### Config.onlySelectOnDate : <code>boolean</code>
if true date select just by click on day in month grid

**Kind**: static property of <code>[Config](#Config)</code>  
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
<a name="Config.monthPicker"></a>

### Config.monthPicker : <code>object</code>
monthPicker config object

**Kind**: static property of <code>[Config](#Config)</code>  
<a name="Config.yearPicker"></a>

### Config.yearPicker : <code>object</code>
yearPicker config object

**Kind**: static property of <code>[Config](#Config)</code>  
<a name="Config.position"></a>

### Config.position
**Kind**: static property of <code>[Config](#Config)</code>  
<a name="Config.autoClose"></a>

### Config.autoClose : <code>boolean</code>
If true picker close When Select day

**Kind**: static property of <code>[Config](#Config)</code>  
**Default**: <code>false</code>  
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

### Config.formatter(unixDate) ⇒ <code>\*</code>
format value of input

**Kind**: static method of <code>[Config](#Config)</code>  
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

<a name="Config.altFieldFormatter"></a>

### Config.altFieldFormatter(unixDate) ⇒ <code>\*</code>
format value of 'altField' input

**Kind**: static method of <code>[Config](#Config)</code>  
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

