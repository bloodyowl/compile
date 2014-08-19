var patternRegExp = /\{\{([\w\*\.]*?)\}\}/g
var dotRegExp = /([^\.]+)/g
var slice = [].slice

module.exports = function (string, object){
  var data = arguments.length > 2 ? slice.call(arguments, 1) : object
  return string.replace(patternRegExp, function(a, toReplace){
    var segment, currentData = data
    while((segment = dotRegExp.exec(toReplace)) && (segment = segment[1])) {
      currentData = currentData ? (segment == "*" ? currentData : currentData[segment]) : null
    }
    return currentData == void 0 ? "" : currentData
  })
}
