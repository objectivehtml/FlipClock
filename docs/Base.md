#Index

**Functions**

* [constructor(options)](#constructor)
* [callback(method)](#callback)
* [log(str)](#log)
* [getOption(index)](#getOption)
* [getOptions()](#getOptions)
* [setOption(index, value)](#setOption)
* [setOptions(options)](#setOptions)

**Members**

* [buildDate](#buildDate)
* [version](#version)
* [options](#options)
* [_events](#_events)
* [_uid](#_uid)
 
<a name="constructor"></a>
#constructor(options)
Sets the default options

**Params**

- options `mixed` - The default options  

<a name="callback"></a>
#callback(method)
Delegates the callback to the defined method

**Params**

- method `function` - The callback function  

**Returns**:  - object  
<a name="log"></a>
#log(str)
Log a string into the console if it exists

**Params**

- str `string` - The string to log  

**Returns**:  - mixed  
<a name="getOption"></a>
#getOption(index)
Get an single option value. Returns false if option does not exist

**Params**

- index `string` - The name of the option  

**Returns**:  - mixed  
<a name="getOptions"></a>
#getOptions()
Get all options

**Returns**:  - bool  
<a name="setOption"></a>
#setOption(index, value)
Set a single option value

**Params**

- index `string` - The name of the option  
- value `string` - The value of the option  

**Returns**:  - object  
<a name="setOptions"></a>
#setOptions(options)
Set a multiple options by passing a JSON object

**Params**

- options `object` - An object of options to set  

**Returns**:  - object  
<a name="buildDate"></a>
#buildDate
**Params**

- buildDate `string` - The last official build date  

<a name="version"></a>
#version
**Params**

- version `string` - The current version  

<a name="options"></a>
#options
**Params**

- options `object` - The available options for this class  

<a name="_events"></a>
#_events
**Params**

- _events `object` - The bound events to this object  

<a name="_uid"></a>
#_uid
**Params**

- _uid `object` - The Flipclock.Uuid object instance  

