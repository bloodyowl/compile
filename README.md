# String#compile

String.compile is a method to perform simple replacements in JavaScript. 

## Examples 

You can pass : 

### Arguments 

```javascript
"{{0}} - {{1}} - {{2}}".compile("foo", "bar", "baz") 
/* -> */ "foo - bar - baz"
```

### Arrays

```javascript
"{{0}} - {{1}} - {{2}}".compile(["foo", "bar", "baz"]) 
/* -> */ "foo - bar - baz"
```

### Strings 
```javascript
"this is {{*}}".compile("foo") 
/* -> */ "this is foo"
```

### Objects 
```javascript
"{{foo}} {{bar.baz}}!".compile({foo:"hello", bar:{baz:"yourself"}}) 
/* -> */ "hello yourself!"
```