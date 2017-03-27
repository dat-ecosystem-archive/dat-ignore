var assert = require('assert')
var fs = require('fs')
var path = require('path')
var match = require('anymatch')

module.exports = ignore

function ignore (dir) {
  var opts = {
    datignore: path.join(dir, '.datignore')
  }
  opts.ignore = opts.ignore // we want an array here
    ? Array.isArray(opts.ignore)
      ? opts.ignore
      : [opts.ignore]
    : []
  var defaultIgnore = [/^(?:\/.*)?\.dat(?:\/.*)?$/] // ignore .dat
  var ignoreHidden = [/[/\\]\./]
  var datIgnore = !(opts.useDatIgnore === false) ? readDatIgnore() : []

  // Add ignore options
  opts.ignore = opts.ignore.concat(defaultIgnore) // always ignore .dat folder
  if (datIgnore) opts.ignore = opts.ignore.concat(datIgnore) // add .datignore
  if (opts.ignoreHidden !== false) opts.ignore = opts.ignore.concat(ignoreHidden) // ignore all hidden things

  return function (file) {
    return match(opts.ignore, file)
  }

  function readDatIgnore () {
    try {
      return fs.readFileSync(opts.datignore, 'utf8')
        .split('\n')
        .filter(function (str) {
          return !!str.trim()
        })
        .map(function (line) {
          return path.join(dir, line) // prepend the dir to each line
        })
    } catch (e) {
      return []
    }
  }
}
