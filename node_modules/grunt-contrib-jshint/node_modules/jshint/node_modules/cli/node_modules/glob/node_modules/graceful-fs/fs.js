// extend the builtin so that our monkeypatchery doesn't
// muck with things not using graceful-fs

var util = require('util')
module.exports = util._extend({}, require('fs'))
