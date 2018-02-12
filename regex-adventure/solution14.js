module.exports = function (str) {
  var marked = require('marked');
  var result = marked(str).replace(/@@(.*?)@@/g, function(_match, submatch){
    return '<blink>' + submatch + '</blink>';
  })
  return result;
}
