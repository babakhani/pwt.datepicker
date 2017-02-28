## Classes

<dl>
<dt><a href="#DateUtil">DateUtil</a></dt>
<dd><p>Date helper, some useful date method stored here</p>
</dd>
<dt><a href="#Input">Input</a></dt>
<dd><p>Do every thing about input element like get default value, set new value, set alt field input and etc.</p>
</dd>
<dt><a href="#Model">Model</a></dt>
<dd><p>Main datepicker object, manage every things</p>
</dd>
<dt><a href="#Navigator">Navigator</a></dt>
<dd><p>This navigator class do every thing about navigate and select date</p>
</dd>
<dt><a href="#Options">Options</a></dt>
<dd><p>Extend default config from user interred and do compatibility works</p>
</dd>
<dt><a href="#State">State</a></dt>
<dd><p>All state set in his object and get from this
also this object notify other object to update self or update view or etc.</p>
</dd>
<dt><a href="#Toolbox">Toolbox</a></dt>
<dd><p>Do every things about toolbox, like attach events to toolbox elements</p>
</dd>
<dt><a href="#View">View</a></dt>
<dd><p>As its name suggests, all rendering works do in this object</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#Config">Config</a></dt>
<dd><p>This is default config class</p>
</dd>
<dt><a href="#ClassDateRange">ClassDateRange</a></dt>
<dd></dd>
<dt><a href="#Template">Template</a> : <code>string</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#log">log(input)</a></dt>
<dd><p>normal log</p>
</dd>
<dt><a href="#debug">debug(elem, input)</a></dt>
<dd><p>show debug messages if window.persianDatepickerDebug set as true</p>
</dd>
</dl>

<a name="DateUtil"></a>

## DateUtil
Date helper, some useful date method stored here

**Kind**: global class  

* [DateUtil](#DateUtil)
    * [.isSameDay(dateA, dateB)](#DateUtil+isSameDay) ⇒ <code>boolean</code>
    * [.isSameMonth(dateA, dateB)](#DateUtil+isSameMonth) ⇒ <code>boolean</code>
    * [.normalizeTime(key, value)](#DateUtil+normalizeTime) ⇒ <code>number</code>

<a name="DateUtil+isSameDay"></a>

### dateUtil.isSameDay(dateA, dateB) ⇒ <code>boolean</code>
check if a date is same as b

**Kind**: instance method of <code>[DateUtil](#DateUtil)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dateA</td>
    </tr><tr>
    <td>dateB</td>
    </tr>  </tbody>
</table>

<a name="DateUtil+isSameMonth"></a>

### dateUtil.isSameMonth(dateA, dateB) ⇒ <code>boolean</code>
check if a month is same as b

**Kind**: instance method of <code>[DateUtil](#DateUtil)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>dateA</td><td><code>Date</code></td>
    </tr><tr>
    <td>dateB</td><td><code>Date</code></td>
    </tr>  </tbody>
</table>

<a name="DateUtil+normalizeTime"></a>

### dateUtil.normalizeTime(key, value) ⇒ <code>number</code>
normalize time, like check second if bigger than 60

**Kind**: instance method of <code>[DateUtil](#DateUtil)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>string</code></td>
    </tr><tr>
    <td>value</td><td><code>number</code></td>
    </tr>  </tbody>
</table>

<a name="Input"></a>

## Input
Do every thing about input element like get default value, set new value, set alt field input and etc.

**Kind**: global class  

* [Input](#Input)
    * [new Input(model, inputElement)](#new_Input_new)
    * [.model](#Input+model) : <code>Object</code>
    * [.elem](#Input+elem) : <code>Element</code>
    * [.initialUnix](#Input+initialUnix) : <code>Number</code>
    * [.getInputPosition()](#Input+getInputPosition) ⇒ <code>Object</code>
    * [.getInputSize()](#Input+getInputSize) ⇒ <code>Object</code>
    * [.update(unix)](#Input+update)
    * [.getOnInitState()](#Input+getOnInitState) ⇒ <code>Number</code>

<a name="new_Input_new"></a>

### new Input(model, inputElement)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>model</td><td><code><a href="#Model">Model</a></code></td>
    </tr><tr>
    <td>inputElement</td><td><code>Element</code></td>
    </tr>  </tbody>
</table>

<a name="Input+model"></a>

### input.model : <code>Object</code>
**Kind**: instance property of <code>[Input](#Input)</code>  
<a name="Input+elem"></a>

### input.elem : <code>Element</code>
**Kind**: instance property of <code>[Input](#Input)</code>  
<a name="Input+initialUnix"></a>

### input.initialUnix : <code>Number</code>
**Kind**: instance property of <code>[Input](#Input)</code>  
<a name="Input+getInputPosition"></a>

### input.getInputPosition() ⇒ <code>Object</code>
get <input/> element position

**Kind**: instance method of <code>[Input](#Input)</code>  
**Todo**

- remove jquery

<a name="Input+getInputSize"></a>

### input.getInputSize() ⇒ <code>Object</code>
get <input/> element size

**Kind**: instance method of <code>[Input](#Input)</code>  
**Todo**

- remove jquery

<a name="Input+update"></a>

### input.update(unix)
**Kind**: instance method of <code>[Input](#Input)</code>  
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

<a name="Input+getOnInitState"></a>

### input.getOnInitState() ⇒ <code>Number</code>
return initial value

**Kind**: instance method of <code>[Input](#Input)</code>  
**Returns**: <code>Number</code> - - unix  
<a name="Model"></a>

## Model
Main datepicker object, manage every things

**Kind**: global class  

* [Model](#Model)
    * [new Model(inputElement, options)](#new_Model_new)
    * [.initialUnix](#Model+initialUnix) : <code>unix</code>
    * [.inputElement](#Model+inputElement) : <code>Object</code>
    * [.options](#Model+options) : <code>[Options](#Options)</code>
    * [.input](#Model+input) : <code>[Input](#Input)</code>
    * [.state](#Model+state) : <code>[State](#State)</code>
    * [.view](#Model+view) : <code>[View](#View)</code>
    * [.toolbox](#Model+toolbox) : <code>[Toolbox](#Toolbox)</code>
    * [.navigator](#Model+navigator) : <code>[Navigator](#Navigator)</code>
    * [.updateInput(unix)](#Model+updateInput)

<a name="new_Model_new"></a>

### new Model(inputElement, options)
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>inputElement</td>
    </tr><tr>
    <td>options</td>
    </tr>  </tbody>
</table>

<a name="Model+initialUnix"></a>

### model.initialUnix : <code>unix</code>
[initialUnix=null]

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+inputElement"></a>

### model.inputElement : <code>Object</code>
inputElement=inputElement

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+options"></a>

### model.options : <code>[Options](#Options)</code>
handle works about config

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+input"></a>

### model.input : <code>[Input](#Input)</code>
handle works about input and alt field input element

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+state"></a>

### model.state : <code>[State](#State)</code>
set and get selected and view and other state

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+view"></a>

### model.view : <code>[View](#View)</code>
render datepicker view base on State

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+toolbox"></a>

### model.toolbox : <code>[Toolbox](#Toolbox)</code>
handle works about toolbox

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+navigator"></a>

### model.navigator : <code>[Navigator](#Navigator)</code>
handle navigation and dateoicker element events

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+updateInput"></a>

### model.updateInput(unix)
**Kind**: instance method of <code>[Model](#Model)</code>  
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

<a name="Navigator"></a>

## Navigator
This navigator class do every thing about navigate and select date

**Kind**: global class  
**Access:** public  

* [Navigator](#Navigator)
    * [new Navigator(datepicker)](#new_Navigator_new)
    * [.model](#Navigator+model) : <code>Datepicker</code>
    * [.liveAttach()](#Navigator+liveAttach)
    * [.timeUp(timekey)](#Navigator+timeUp)
    * [.timeDown(timekey)](#Navigator+timeDown)

<a name="new_Navigator_new"></a>

### new Navigator(datepicker)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>datepicker</td><td><code>object</code></td>
    </tr>  </tbody>
</table>

<a name="Navigator+model"></a>

### navigator.model : <code>Datepicker</code>
**Kind**: instance property of <code>[Navigator](#Navigator)</code>  
<a name="Navigator+liveAttach"></a>

### navigator.liveAttach()
attach events that needed attach after every render

**Kind**: instance method of <code>[Navigator](#Navigator)</code>  
**Access:** public  
**Todo**

- attach as a live way

<a name="Navigator+timeUp"></a>

### navigator.timeUp(timekey)
set time up depend to timekey

**Kind**: instance method of <code>[Navigator](#Navigator)</code>  
**Access:** public  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>timekey</td><td><code>String</code></td><td><p>accept hour, minute,second</p>
</td>
    </tr>  </tbody>
</table>

<a name="Navigator+timeDown"></a>

### navigator.timeDown(timekey)
set time down depend to timekey

**Kind**: instance method of <code>[Navigator](#Navigator)</code>  
**Access:** public  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>timekey</td><td><code>String</code></td><td><p>accept hour, minute,second</p>
</td>
    </tr>  </tbody>
</table>

<a name="Options"></a>

## Options
Extend default config from user interred and do compatibility works

**Kind**: global class  
**Access:** public  
<a name="new_Options_new"></a>

### new Options(options)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>options</td><td><code>object</code></td><td><p>config passed when initialize</p>
</td>
    </tr>  </tbody>
</table>

<a name="State"></a>

## State
All state set in his object and get from this
also this object notify other object to update self or update view or etc.

**Kind**: global class  

* [State](#State)
    * [new State(model)](#new_State_new)
    * [.model](#State+model) : <code>object</code>
    * [.filetredDate](#State+filetredDate) : <code>Boolean</code>
    * [.viewModeList](#State+viewModeList) : <code>Array</code>
    * [.viewMode](#State+viewMode) : <code>String</code>
    * [.viewModeIndex](#State+viewModeIndex) : <code>number</code>
    * [.filterDate](#State+filterDate) : <code>Object</code>
    * [.view](#State+view) : <code>Object</code>
    * [.selected](#State+selected) : <code>Object</code>
    * [.setSelectedDateTime(key, value)](#State+setSelectedDateTime) ⇒ <code>[State](#State)</code>
    * [.navigate(nav)](#State+navigate)
    * [.switchViewMode()](#State+switchViewMode) ⇒ <code>[State](#State)</code>
    * [.switchViewModeTo(viewMode)](#State+switchViewModeTo)
    * [.setViewDateTime(key, value)](#State+setViewDateTime) ⇒ <code>[State](#State)</code>

<a name="new_State_new"></a>

### new State(model)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>model</td><td><code>model</code></td>
    </tr>  </tbody>
</table>

<a name="State+model"></a>

### state.model : <code>object</code>
**Kind**: instance property of <code>[State](#State)</code>  
<a name="State+filetredDate"></a>

### state.filetredDate : <code>Boolean</code>
**Kind**: instance property of <code>[State](#State)</code>  
<a name="State+viewModeList"></a>

### state.viewModeList : <code>Array</code>
get generated view mode list from options object

**Kind**: instance property of <code>[State](#State)</code>  
<a name="State+viewMode"></a>

### state.viewMode : <code>String</code>
view mode string day, month, year

**Kind**: instance property of <code>[State](#State)</code>  
**Default**: <code>day</code>  
**Todo**

- add time to view modes

<a name="State+viewModeIndex"></a>

### state.viewModeIndex : <code>number</code>
view mode string index in view mode list

**Kind**: instance property of <code>[State](#State)</code>  
<a name="State+filterDate"></a>

### state.filterDate : <code>Object</code>
contain filtered date objects

**Kind**: instance property of <code>[State](#State)</code>  
<a name="State+view"></a>

### state.view : <code>Object</code>
contain view date object

**Kind**: instance property of <code>[State](#State)</code>  
<a name="State+selected"></a>

### state.selected : <code>Object</code>
contain selected date object

**Kind**: instance property of <code>[State](#State)</code>  
<a name="State+setSelectedDateTime"></a>

### state.setSelectedDateTime(key, value) ⇒ <code>[State](#State)</code>
called on date select

**Kind**: instance method of <code>[State](#State)</code>  
**Access:** public  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>String</code></td><td><p>accept date, month, year, hour, minute, second</p>
</td>
    </tr><tr>
    <td>value</td><td><code>Number</code></td><td></td>
    </tr>  </tbody>
</table>

<a name="State+navigate"></a>

### state.navigate(nav)
change view state

**Kind**: instance method of <code>[State](#State)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>nav</td><td><code>String</code></td><td><p>accept next, prev</p>
</td>
    </tr>  </tbody>
</table>

<a name="State+switchViewMode"></a>

### state.switchViewMode() ⇒ <code>[State](#State)</code>
every time called view state changed to next in queue

**Kind**: instance method of <code>[State](#State)</code>  
**Access:** public  
<a name="State+switchViewModeTo"></a>

### state.switchViewModeTo(viewMode)
switch to specified view mode

**Kind**: instance method of <code>[State](#State)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>viewMode</td><td><code>String</code></td><td><p>accept date, month, year</p>
</td>
    </tr>  </tbody>
</table>

<a name="State+setViewDateTime"></a>

### state.setViewDateTime(key, value) ⇒ <code>[State](#State)</code>
**Kind**: instance method of <code>[State](#State)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>key</td><td><code>String</code></td><td><p>accept date, month, year, hour, minute, second</p>
</td>
    </tr><tr>
    <td>value</td><td><code>Number</code></td><td></td>
    </tr>  </tbody>
</table>

<a name="Toolbox"></a>

## Toolbox
Do every things about toolbox, like attach events to toolbox elements

**Kind**: global class  

* [Toolbox](#Toolbox)
    * [new Toolbox(datepicker)](#new_Toolbox_new)
    * [.model](#Toolbox+model) : <code>Datepicker</code>
    * [._attachEvents()](#Toolbox+_attachEvents)

<a name="new_Toolbox_new"></a>

### new Toolbox(datepicker)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>datepicker</td><td><code>Datepicker</code></td>
    </tr>  </tbody>
</table>

<a name="Toolbox+model"></a>

### toolbox.model : <code>Datepicker</code>
**Kind**: instance property of <code>[Toolbox](#Toolbox)</code>  
<a name="Toolbox+_attachEvents"></a>

### toolbox._attachEvents()
attach all events about toolbox

**Kind**: instance method of <code>[Toolbox](#Toolbox)</code>  
<a name="View"></a>

## View
As its name suggests, all rendering works do in this object

**Kind**: global class  

* [View](#View)
    * [new View(model)](#new_View_new)
    * [.yearsViewCount](#View+yearsViewCount) : <code>number</code>
    * [.model](#View+model) : <code>Datepicker</code>
    * [.rendered](#View+rendered) : <code>null</code>
    * [.$container](#View+$container) : <code>null</code>
    * [.id](#View+id) : <code>string</code>
    * [.destroy()](#View+destroy)
    * [.setPickerBoxPosition()](#View+setPickerBoxPosition)
    * [.show()](#View+show)
    * [.hide()](#View+hide)
    * [.toggle()](#View+toggle)
    * [.checkYearAccess(year)](#View+checkYearAccess) ⇒ <code>Boolean</code>
    * [.checkMonthAccess(month)](#View+checkMonthAccess) ⇒ <code>Boolean</code>
    * [.checkDayAccess(thisUnix)](#View+checkDayAccess) ⇒ <code>Boolean</code>
    * [.getViewModel(data)](#View+getViewModel) ⇒ <code>\*</code>
    * [.render(data)](#View+render)
    * [.afterRender()](#View+afterRender)

<a name="new_View_new"></a>

### new View(model)
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>model</td><td><code>Datepicker</code></td>
    </tr>  </tbody>
</table>

<a name="View+yearsViewCount"></a>

### view.yearsViewCount : <code>number</code>
**Kind**: instance property of <code>[View](#View)</code>  
<a name="View+model"></a>

### view.model : <code>Datepicker</code>
**Kind**: instance property of <code>[View](#View)</code>  
<a name="View+rendered"></a>

### view.rendered : <code>null</code>
**Kind**: instance property of <code>[View](#View)</code>  
<a name="View+$container"></a>

### view.$container : <code>null</code>
**Kind**: instance property of <code>[View](#View)</code>  
<a name="View+id"></a>

### view.id : <code>string</code>
**Kind**: instance property of <code>[View](#View)</code>  
<a name="View+destroy"></a>

### view.destroy()
remove datepicker container element from dom

**Kind**: instance method of <code>[View](#View)</code>  
<a name="View+setPickerBoxPosition"></a>

### view.setPickerBoxPosition()
set datepicker container element based on <input/> element position

**Kind**: instance method of <code>[View](#View)</code>  
<a name="View+show"></a>

### view.show()
show datepicker container element

**Kind**: instance method of <code>[View](#View)</code>  
<a name="View+hide"></a>

### view.hide()
hide datepicker container element

**Kind**: instance method of <code>[View](#View)</code>  
<a name="View+toggle"></a>

### view.toggle()
toggle datepicker container element

**Kind**: instance method of <code>[View](#View)</code>  
<a name="View+checkYearAccess"></a>

### view.checkYearAccess(year) ⇒ <code>Boolean</code>
check year is accessible

**Kind**: instance method of <code>[View](#View)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>year</td><td><code>Number</code></td><td><p>year number</p>
</td>
    </tr>  </tbody>
</table>

<a name="View+checkMonthAccess"></a>

### view.checkMonthAccess(month) ⇒ <code>Boolean</code>
check month is accessible

**Kind**: instance method of <code>[View](#View)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>month</td><td><code>Number</code></td><td><p>month number</p>
</td>
    </tr>  </tbody>
</table>

<a name="View+checkDayAccess"></a>

### view.checkDayAccess(thisUnix) ⇒ <code>Boolean</code>
check day is accessible

**Kind**: instance method of <code>[View](#View)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>thisUnix</td><td><code>Number</code></td><td><p>month number</p>
</td>
    </tr>  </tbody>
</table>

<a name="View+getViewModel"></a>

### view.getViewModel(data) ⇒ <code>\*</code>
**Kind**: instance method of <code>[View](#View)</code>  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td>
    </tr>  </tbody>
</table>

<a name="View+render"></a>

### view.render(data)
**Kind**: instance method of <code>[View](#View)</code>  
**Render**: datepicker view element  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>data</td>
    </tr>  </tbody>
</table>

<a name="View+afterRender"></a>

### view.afterRender()
do after render work like attache events

**Kind**: instance method of <code>[View](#View)</code>  
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
if true all pickers hide and just shpw timepicker

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

<a name="ClassDateRange"></a>

## ClassDateRange
**Kind**: global constant  

* [ClassDateRange](#ClassDateRange)
    * [.monthRange](#ClassDateRange.monthRange)
    * [.weekRange](#ClassDateRange.weekRange)
    * [.persianDaysName](#ClassDateRange.persianDaysName)

<a name="ClassDateRange.monthRange"></a>

### ClassDateRange.monthRange
**Kind**: static property of <code>[ClassDateRange](#ClassDateRange)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>monthRange</td>
    </tr>  </tbody>
</table>

<a name="ClassDateRange.weekRange"></a>

### ClassDateRange.weekRange
**Kind**: static property of <code>[ClassDateRange](#ClassDateRange)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>weekRange</td>
    </tr>  </tbody>
</table>

<a name="ClassDateRange.persianDaysName"></a>

### ClassDateRange.persianDaysName
**Kind**: static property of <code>[ClassDateRange](#ClassDateRange)</code>  
**Properties**

<table>
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>persianDaysName</td>
    </tr>  </tbody>
</table>

<a name="Template"></a>

## Template : <code>string</code>
**Kind**: global constant  
<a name="log"></a>

## log(input)
normal log

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>input</td>
    </tr>  </tbody>
</table>

**Example**  
```js
log('whoooooha')
```
<a name="debug"></a>

## debug(elem, input)
show debug messages if window.persianDatepickerDebug set as true

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>elem</td>
    </tr><tr>
    <td>input</td>
    </tr>  </tbody>
</table>

**Example**  
```js
window.persianDatepickerDebug = true;
debug('element','message');
```
