test("String#compile", function(){

 ok(('Hello {{*}}').compile("John") == "Hello John", "String as argument")
 ok(('Hello {{foo}} {{bar}}').compile({foo:"John",bar:"Doe"}) == "Hello John Doe", "Object as argument")
 ok(('Hello {{0}} {{1}}').compile("John", "Doe") == "Hello John Doe", "Arguments as argument")
 ok(('Hello {{0}} {{1}}').compile(["John", "Doe"]) == "Hello John Doe", "Array as argument")
 ok(('Hello {{foo.foo}} {{foo.bar}}{{foo.nothing}}').compile({foo:{foo:"John",bar:"Doe"}}) == "Hello John Doe", "Nesting")

})