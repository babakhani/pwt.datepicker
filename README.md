Persian Date Picker
==============

Persian Date Picker
This Date picker work with Iranian calendar.

Jalali calendar datepicker, which depends on https://github.com/babakhani/PersianDate

More info at [Wikipedia](http://en.wikipedia.org/wiki/Iranian_calendar)


- [Documents](http://babakhani.github.io/PersianWebToolkit/datepicker)
- [Demo](http://babakhani.github.io/PersianWebToolkit/demo)
- [Code Document](http://babakhani.github.io/PersianWebToolkit/cod_document)


persian, datepicker, date, khayam, jalali, jquery, plugin, javascript, js, persian web toolkit, pwt,
bootstrap timepicker, bootstrap datetimepicker


## Dependency
- [persian date](https://github.com/babakhani/PersianDate)


## Install
```bash
npm insatll persian-datepicker
```
```bash
bower insatll persian-datepicker
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

## options

Name | Type | Default | Description | Example
------------ | ------------- | ------------- | ------------- | -------------
initialValue | Boolean | true | blob | bloc link
persianDigit | Boolean | true | blob | bloc link
viewMode | String | day | blob | bloc link
format | Boolean | false | blob | bloc link
formatter | Function | functiondsadas | blob | blob
altField | Selector | false | blob | blob
altFormat | Selector | false | blob | blob
altFieldFormatter | Selector | false | blob | blob
minDate | Unixtimestamp | null | blob | blob
maxDate | Unixtimestamp | null | blob | blob
navigator | object | | blobl | blobl
    |enabled | boolean | true
