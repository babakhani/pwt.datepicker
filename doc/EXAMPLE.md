# Example


## normal example

```javascript
$('.normal-example').persianDatepicker();
```

```html
<input class="normal-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo normal-example" />


## inline example

inline example with 



```javascript
$('.inline-example').persianDatepicker({
    inline: true,
    altField: '#inlineExampleAlt',
    altFormat: 'LLLL',
    maxDate: new persianDate().add('month', 3).valueOf(),
    minDate: new persianDate().subtract('month', 3).valueOf(),
    timePicker: {
        enabled: true,
        meridiem: {
            enabled: true
        }
    }
});
```

```html
<input id="inlineExampleAlt" class="datepicker-demo" />
<div class="inline-example" ></div>
```

<label>Datepicker</label>
<input id="inlineExampleAlt" class="datepicker-demo" />
<div class="inline-example" ></div>

## Observer

```javascript
$('.observer-example').persianDatepicker({
    observer: true,
    format: 'YYYY/MM/DD',
    altField: '.observer-example-alt'
});
```

```html
<input class="observer-example" />
```
<label>Alt field</label>
<input class="datepicker-demo observer-example-alt" />
<label>Datepicker</label>
<input class="datepicker-demo observer-example" />


## format

More options in [Persian Date Documents](http://babakhani.github.io/PersianWebToolkit/datepicker)

```javascript
$('.format-example').persianDatepicker({
    format: 'LLLL' 
});
```

```html
<input class="format-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo format-example" />


## formatter

```javascript
$('.formatter-example').persianDatepicker({
    formatter: function(unix){
        return 'selected unix: ' + unix; 
    } 
});
```

```html
<input class="formatter-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo formatter-example" />


## altField

```javascript
$('.alt-field-example').persianDatepicker({
    altField: '.alt-field-example-alt-field'
});
```

```html
<input class="alt-field-example" />
```
<label>Alt field</label>
<input class="datepicker-demo-alt alt-field-example-alt-field" />

<label>Datepicker</label>
<input class="datepicker-demo alt-field-example" />


## persianDigit

```javascript
$('.persian-digit-example').persianDatepicker({
    persianDigit: false
});
```

```html
<input class="persian-digit-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo persian-digit-example" />


## viewMode

```javascript
$('.view-mode-example').persianDatepicker({
    viewMode: 'year'
});
```

```html
<input class="view-mode-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo view-mode-example" />



## minDate

```javascript
$('.min-date-example').persianDatepicker({
    minDate: new persianDate().unix()
});
```

```html
<input class="min-date-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo min-date-example" />



## maxDate

```javascript
$('.max-date-example').persianDatepicker({
    maxDate: new persianDate().unix()
});
```

```html
<input class="max-date-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo max-date-example" />



## checkDate

```javascript
$('.check-date-example').persianDatepicker({
    checkDate: function(unix){
        return new persianDate(unix).weekDayNumber != 4;
    }
});
```

```html
<input class="check-date-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo check-date-example" />


## checkMonth

```javascript
$('.check-month-example').persianDatepicker({
    checkMonth: function(month){
        return month < 6;
    }
});
```

```html
<input class="check-month-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo check-month-example" />


## checkYear

```javascript
$('.check-year-example').persianDatepicker({
    checkYear: function(year){
        return year >= 1391;
    }
});
```

```html
<input class="check-year-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo check-year-example" />


## onlyTimePicker

```javascript
$('.only-timepicker-example').persianDatepicker({
    onlyTimePicker: true
});
```

```html
<input class="only-timepicker-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo only-timepicker-example" />


## autoClose

```javascript
$('.auto-close-example').persianDatepicker({
    autoClose: true
});
```

```html
<input class="auto-close-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo auto-close-example" />



## onSelect

```javascript
$('.on-select-example').persianDatepicker({
    onSelect: function(unix){
        alert('datepicker select : ' + unix);
    }
});
```

```html
<input class="on-select-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo on-select-example" />












