<a name="API"></a>

## API
This is the API documentation for persian-datepicker

**Kind**: global class  

* [API](#API)
    * [.options](#API+options)
    * [.options](#API+options)
    * [.show()](#API+show)
    * [.getState()](#API+getState)
    * [.hide()](#API+hide)
    * [.toggle()](#API+toggle)
    * [.destroy()](#API+destroy)
    * [.setDate(unix)](#API+setDate)

<a name="API+options"></a>

### apI.options
get current option object

**Kind**: instance property of [<code>API</code>](#API)  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
console.log(pd.options);
```
<a name="API+options"></a>

### apI.options
set options live

**Kind**: instance property of [<code>API</code>](#API)  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.options;
//return current options
pd.options = {};
// set options and render datepicker with new options
```
<a name="API+show"></a>

### apI.show()
make datepicker visible

**Kind**: instance method of [<code>API</code>](#API)  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.show();
```
<a name="API+getState"></a>

### apI.getState()
return datepicker current state

**Kind**: instance method of [<code>API</code>](#API)  
**Since**: 1.0.0  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
var state = pd.getState();

console.log(state.selected);
console.log(state.view);
```
<a name="API+hide"></a>

### apI.hide()
make datepicker invisible

**Kind**: instance method of [<code>API</code>](#API)  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.show();
```
<a name="API+toggle"></a>

### apI.toggle()
toggle datepicker visibility state

**Kind**: instance method of [<code>API</code>](#API)  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.toggle();
```
<a name="API+destroy"></a>

### apI.destroy()
destroy every thing clean dom and

**Kind**: instance method of [<code>API</code>](#API)  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.destroy();
```
<a name="API+setDate"></a>

### apI.setDate(unix)
set selected date of datepicker accept unix timestamp

**Kind**: instance method of [<code>API</code>](#API)  
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

**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.setDate(1382276091100)
```
