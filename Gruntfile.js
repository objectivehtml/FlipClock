module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: [
          'src/flipclock/css/flipclock.css'
        ],
        dest: 'compiled/flipclock.css',
      },
      js: {
        src: [     
          'src/flipclock/js/libs/base.js',
          'src/flipclock/js/libs/*.js',
          'src/flipclock/js/faces/twentyfourhourclock.js',
          'src/flipclock/js/faces/*.js',
          'src/flipclock/js/lang/*.js',
        ],
        dest: 'compiled/flipclock.js',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'compiled/flipclock.min.js': ['<%= concat.js.dest %>']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);
};