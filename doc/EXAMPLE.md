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


## without initialValue

```javascript
$('.initial-value-example').persianDatepicker({
    initialValue: false
});
```

```html
<input class="initial-value-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo initial-value-example" />



## initialValueType

```javascript
$('.initial-value-type-example').persianDatepicker({
    initialValueType: 'persian'
});
```

```html
<input class="initial-value-type-example" value="1396-10-12" />
```
<label>Datepicker</label>
<input class="datepicker-demo initial-value-type-example" value="1396-10-12" />



```javascript
$('.initial-value-type-gregorian-example').persianDatepicker({
    initialValueType: 'gregorian'
});
```

```html
<input class="initial-value-type-gregorian-example" value="2017-1-1" />
```
<label>Datepicker</label>
<input class="datepicker-demo initial-value-type-gregorian-example" value="2017-1-1" />



## inline

```javascript
$('.inline-example').persianDatepicker({
    inline: true,
    altField: '#inlineExampleAlt',
    altFormat: 'LLLL',
    toolbox:{
        calendarSwitch:{
            enabled: true
        }
    },
    navigator:{
        scroll:{
            enabled: false
        }
    },
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
```


```html
<input id="inlineExampleAlt" class="datepicker-demo" />
<div class="inline-example" ></div>
```

<div class="one-inline-datepicker">
<label>Datepicker</label>
<input id="inlineExampleAlt" class="datepicker-demo" />
<div class="inline-example" ></div>
</div>


## Gregorian Calendar

```javascript
$('.gregorian-example').persianDatepicker({
    inline: true,
    altField: '#gregorianExampleAlt',
    altFormat: 'LLLL',
    toolbox:{
        calendarSwitch:{
            enabled: true
        }
    },
    navigator:{
        scroll:{
            enabled: false
        }
    },
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
<input id="gregorianExampleAlt" class="datepicker-demo" />
<div class="gregorian-example" ></div>
```

<div class="one-inline-datepicker">
<label>Datepicker</label>
<input id="gregorianExampleAlt" class="datepicker-demo" />
<div class="gregorian-example" ></div>
</div>



## Change Leap Year Mode

```javascript
$('.leapyear-algorithmic').persianDatepicker({
    inline: true,
    
});

$('.leapyear-astronomical').persianDatepicker({
    inline: true,
    calendar:{
        persian: {
            leapYearMode: 'astronomical'
        }
    }
});
```

```html
<div class="leapyear-algorithmic" data-date="2025/3/12" ></div>
<div class="leapyear-astronomical" data-date="2025/3/12" ></div>
```

<div class="two-inline-datepicker">
<div>
<label>algorithmic</label>
<div class="leapyear-algorithmic" data-date="2025/3/12" ></div>
</div>
<div>
<label>astronomical</label>
<div class="leapyear-astronomical" data-date="2025/3/12" ></div>
</div>
</div>



## locale

```javascript
$('.locale-fa').persianDatepicker({
    inline: true,
    
});

$('.locale-en').persianDatepicker({
    inline: true,
    calendar:{
        persian: {
            locale: 'en'
        }
    }
});
```

```html
<div class="locale-fa" ></div>
<div class="locale-en" ></div>
```

<div class="two-inline-datepicker">
<div>
<label>fa</label>
<div class="locale-fa" ></div>
</div>
<div>
<label>en</label>
<div class="locale-en" ></div>
</div>
</div>


## Observer

true, make user able to edit date by keyboard

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
        return new persianDate(unix).day() != 4;
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
        console.log('datepicker select : ' + unix);
    }
});
```

```html
<input class="on-select-example" />
```
<label>Datepicker</label>
<input class="datepicker-demo on-select-example" />




## Range selector

Range Selector that make sure 'to' date is after 'from' date and also 'from' is before 'to' date.

```javascript

var to, from;
to = $(".range-to-example").persianDatepicker({
    inline: true,
    altField: '.range-to-example-alt',
    altFormat: 'LLLL',
    initialValue: false,
    onSelect: function (unix) {
        to.touched = true;
        if (from && from.options && from.options.maxDate != unix) {
            var cachedValue = from.getState().selected.unixDate;
            from.options = {maxDate: unix};
            if (from.touched) {
                from.setDate(cachedValue);
            }
        }
    }
});
from = $(".range-from-example").persianDatepicker({
    inline: true,
    altField: '.range-from-example-alt',
    altFormat: 'LLLL',
    initialValue: false,
    onSelect: function (unix) {
        from.touched = true;
        if (to && to.options && to.options.minDate != unix) {
            var cachedValue = to.getState().selected.unixDate;
            to.options = {minDate: unix};
            if (to.touched) {
                to.setDate(cachedValue);
            }
        }
    }
});

```

```html
<div class="range-from-example"></div>
<div class="range-to-example"></div>
```

<div class="two-inline-datepicker">
<div>
<label>to</label>
<input  class='datepicker-demo range-to-example-alt' />
<div class="datepicker-demo range-to-example" ></div>
</div>
<div>
<label>From</label>
<input  class='datepicker-demo range-from-example-alt' />
<div class="datepicker-demo range-from-example" ></div>
</div>
</div>





