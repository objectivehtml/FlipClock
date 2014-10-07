var test = require('tap').test
var gfs = require('../graceful-fs.js')
var fs = require('fs')

var gstat, fstat

test('gfs.stat', function (t) {
  gfs.stat(__filename, function (er, st) {
    if (er) throw er
    gstat = st
    t.ok(st instanceof gfs.Stats, 'should instanceof gfs.Stats')
    t.end()
  })
})

test('fs.stat', function (t) {
  fs.stat(__filename, function (er, st) {
    if (er) throw er
    fstat = st
    t.ok(st instanceof fs.Stats, 'should instanceof fs.Stats')
    t.end()
  })
})

test('stats should match', function (t) {
  t.similar(gstat, fstat)
  t.end()
})
