/*
 * grunt-contrib-uglify
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

// Generate the default source map name
var getSourceMapLocation = function( dest ) {

  var destExt = path.extname(dest);
  var destDirname = path.dirname(dest);
  var destBasename = path.basename(dest, destExt);

  return destDirname + path.sep + destBasename + ".map";

};

// Return the relative path from file1 => file2
var relativePath = function(file1, file2) {

  var file1Dirname = path.dirname(file1);
  var file2Dirname = path.dirname(file2);
  if (file1Dirname !== file2Dirname) {
    return path.relative(file1Dirname, file2Dirname) + path.sep;
  } else {
    return "";
  }

};

module.exports = function(grunt) {

  // Internal lib.
  var contrib = require('grunt-lib-contrib').init(grunt);
  var uglify = require('./lib/uglify').init(grunt);

  var chalk = require('chalk');

  grunt.registerMultiTask('uglify', 'Minify files with UglifyJS.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      banner: '',
      footer: '',
      compress: {
        warnings: false
      },
      mangle: {},
      beautify: false,
      report: false
    });

    // Process banner.
    var banner = grunt.template.process(options.banner);
    var footer = grunt.template.process(options.footer);
    var mapNameGenerator, mapInNameGenerator;

    // Iterate over all src-dest file pairs.
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      if (src.length === 0) {
        grunt.log.warn('Destination (' + f.dest + ') not written because src files were empty.');
        return;
      }

      // function to get the name of the sourceMap
      if (typeof options.sourceMapName === "function") {
        mapNameGenerator = options.sourceMapName;
      }

      // function to get the name of the sourceMapIn file
      if (typeof options.sourceMapIn === "function") {
        if (src.length !== 1) {
          grunt.fail.warn('Cannot generate `sourceMapIn` for multiple source files.');
        }
        mapInNameGenerator = options.sourceMapIn;
      }

      // dynamically create destination sourcemap name
      if (mapNameGenerator) {
        try {
          options.generatedSourceMapName = mapNameGenerator(f.dest);
        } catch (e) {
          var err = new Error('SourceMap failed.');
          err.origError = e;
          grunt.fail.warn(err);
        }
      }
      // If no name is passed, generate the default name
      else if ( !options.sourceMapName ) {
        options.generatedSourceMapName = getSourceMapLocation( f.dest );
      } else {
        options.generatedSourceMapName = options.sourceMapName;
      }

      // Dynamically create incoming sourcemap names
      if (mapInNameGenerator) {
        try {
          options.sourceMapIn = mapInNameGenerator(src[0]);
        } catch (e) {
          var err = new Error('SourceMapInName failed.');
          err.origError = e;
          grunt.fail.warn(err);
        }
      }

      // Calculate the path from the dest file to the sourcemap for the
      // sourceMappingURL reference
      if (options.sourceMap) {
        var destToSourceMapPath = relativePath(f.dest, options.generatedSourceMapName);
        var sourceMapBasename = path.basename(options.generatedSourceMapName);
        options.destToSourceMap = destToSourceMapPath + sourceMapBasename;
      }

      // Minify files, warn and fail on error.
      var result;
      try {
        result = uglify.minify(src, f.dest, options);
      } catch (e) {
        console.log(e);
        var err = new Error('Uglification failed.');
        if (e.message) {
          err.message += '\n' + e.message + '. \n';
          if (e.line) {
            err.message += 'Line ' + e.line + ' in ' + src + '\n';
          }
        }
        err.origError = e;
        grunt.log.warn('Uglifying source "' + src + '" failed.');
        grunt.fail.warn(err);
      }

      // Concat minified source + footer
      var output = result.min + footer;

      // Only prepend banner if uglify hasn't taken care of it as part of the preamble
      if (!options.sourceMap) {
        output = banner + output;
      }

      // Write the destination file.
      grunt.file.write(f.dest, output);

      // Write source map
      if (options.sourceMap) {
        grunt.file.write(options.generatedSourceMapName, result.sourceMap);
        grunt.log.writeln('File ' + chalk.cyan(options.generatedSourceMapName) + ' created (source map).');
      }

      // Print a success message.
      grunt.log.writeln('File ' + chalk.cyan(f.dest) + ' created.');

      // ...and report some size information.
      if (options.report) {
        contrib.minMaxInfo(output, result.max, options.report);
      }
    });
  });

};
