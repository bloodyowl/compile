;(function(root){
  
  var patternRegExp = /\{\{([\w\*\.]*?)\}\}/g
    , dotRegExp = /([^\.]+)/g
  
  root.String.prototype.compile = compile
  function compile(object){
    var z = arguments.length > 1 ? arguments : object
    return this.replace(patternRegExp, function(a, b){
      var c, o = z
      while((c = dotRegExp.exec(b)) && (c = c[1])) o = o ? (c == "*" ? o : o[c]) : null
      return o == void 0 ? "" : o
    })
  }

})(this)
