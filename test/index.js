var tape = require("tape")
  , compile = require("../")

tape("String#compile", function(test){

 test.equal(compile("Hello {{*}}", "John"), "Hello John", "String as argument")
 test.equal(compile("Hello {{foo}} {{bar}}", {foo:"John",bar:"Doe"}), "Hello John Doe", "Object as argument")
 test.equal(compile("Hello {{0}} {{1}}", "John", "Doe"),"Hello John Doe", "Arguments as argument")
 test.equal(compile("Hello {{0}} {{1}}", ["John", "Doe"]), "Hello John Doe", "Array as argument")
 test.equal(compile("Hello {{foo.foo}} {{foo.bar}}{{foo.nothing}}", {foo:{foo:"John",bar:"Doe"}}), "Hello John Doe", "Nesting")
 test.end()
})