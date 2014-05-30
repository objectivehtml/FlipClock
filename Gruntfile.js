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
          'src/flipclock/js/vendor/*.js',
          'src/flipclock/js/libs/core.js',
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
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['<%= concat.js.src %>'],
        tasks: ['concat'],
      },
      css: {
        files: ['<%= concat.css.src %>'],
        tasks: ['concat'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'watch']);
};