# compile

compile is a method to perform simple replacements in JavaScript. 

## require 

```javascript
var compile = require("compile")
```

## Examples 

You can pass : 

### Arguments 

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