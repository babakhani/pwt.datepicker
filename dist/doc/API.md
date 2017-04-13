<a name="API"></a>

## API
This is default API class

**Kind**: global class  

* [API](#API)
    * [.options](#API+options)
    * [.show()](#API+show)
    * [.hide()](#API+hide)
    * [.toggle()](#API+toggle)
    * [.destroy()](#API+destroy)
    * [.setDate(unix)](#API+setDate)

<a name="API+options"></a>

### apI.options
set options live

**Kind**: instance property of <code>[API](#API)</code>  
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

**Kind**: instance method of <code>[API](#API)</code>  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.show();
```
<a name="API+hide"></a>

### apI.hide()
make datepicker invisible

**Kind**: instance method of <code>[API](#API)</code>  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.show();
```
<a name="API+toggle"></a>

### apI.toggle()
toggle datepicker visibility state

**Kind**: instance method of <code>[API](#API)</code>  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.toggle();
```
<a name="API+destroy"></a>

### apI.destroy()
destroy every thing clean dom and

**Kind**: instance method of <code>[API](#API)</code>  
**Example**  
```js
var pd = $('.selector').persianDatepicker();
pd.destroy();
```
<a name="API+setDate"></a>

### apI.setDate(unix)
set selected date of datepicker accept unix timestamp

**Kind**: instance method of <code>[API](#API)</code>  
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
