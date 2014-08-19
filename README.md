# compile

compile is a method to perform simple replacements in JavaScript. 

[![browser support](https://ci.testling.com/bloodyowl/compile.png)](https://ci.testling.com/bloodyowl/compile)

[![Build Status](https://travis-ci.org/bloodyowl/compile.svg?branch=1.0.0)](https://travis-ci.org/bloodyowl/compile)

## require 

```javascript
var compile = require("compile")
```

## Examples 

You can pass : 

### Arguments 

If `arguments.length` exceeds 2, arguments are used as primary keys. 

```javascript
compile("{{0}} - {{1}} - {{2}}", "foo", "bar", "baz") 
/* -> */ "foo - bar - baz"
```

### Arrays

```javascript
compile("{{0}} - {{1}} - {{2}}", ["foo", "bar", "baz"]) 
/* -> */ "foo - bar - baz"
```

### Strings 
```javascript
compile("this is {{*}}", "foo") 
/* -> */ "this is foo"
```

### Objects 
```javascript
compile("{{foo}} {{bar.baz}}!", {foo:"hello", bar:{baz:"yourself"}}) 
/* -> */ "hello yourself!"
```
