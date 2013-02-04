;(function(){
  var _compile = /\{\{([\w\*\.]*?)\}\}/g
    , toArray = [].slice

  function fold(arr, fn, initial){
    var hasInit = arguments.length != 1
      , reduced = hasInit ? initial : arr[0]
      , index = hasInit ? 0 : 1
      , length = arr.length

    for(;index < length; index++) reduced = fn(reduced, arr[index], index, arr)
    return reduced
  }


  function compile(object) {
    var objectIsString

    if(arguments.length > 1) object = toArray.call(arguments)

    objectIsString = typeof object == "string"
    return this.replace(_compile, function(path, match){
      var split = match.split(".")
      if(objectIsString){
        if(match == "*") return object
        else return ""
      }
      return fold(split, function(previous, actual){
        if(/string|number/.test(typeof previous)) {
          if(previous !== object) return ""
          else return previous
        }
        return actual in previous ? previous[actual] : ""
      }, object)
    })
  }

  String.prototype.compile = compile

})()