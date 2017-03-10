## Classes

<dl>
<dt><a href="#Model">Model</a></dt>
<dd><p>Main datepicker object, manage every things</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#state">state</a></dt>
<dd></dd>
</dl>

<a name="Model"></a>

## Model
Main datepicker object, manage every things

**Kind**: global class  

* [Model](#Model)
    * [new Model(inputElement, options)](#new_Model_new)
    * [.initialUnix](#Model+initialUnix) : <code>unix</code>
    * [.inputElement](#Model+inputElement) : <code>Object</code>
    * [.options](#Model+options) : <code>Options</code>
    * [.state](#Model+state) : <code>State</code>
    * [.input](#Model+input) : <code>Input</code>
    * [.view](#Model+view) : <code>View</code>
    * [.toolbox](#Model+toolbox) : <code>Toolbox</code>
    * [.navigator](#Model+navigator) : <code>Navigator</code>
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

### model.options : <code>Options</code>
handle works about config

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+state"></a>

### model.state : <code>State</code>
set and get selected and view and other state

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+input"></a>

### model.input : <code>Input</code>
handle works about input and alt field input element

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+view"></a>

### model.view : <code>View</code>
render datepicker view base on State

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+toolbox"></a>

### model.toolbox : <code>Toolbox</code>
handle works about toolbox

**Kind**: instance property of <code>[Model](#Model)</code>  
<a name="Model+navigator"></a>

### model.navigator : <code>Navigator</code>
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

<a name="state"></a>

## state
**Kind**: global variable  
