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
          'src/flipclock/js/libs/Base.js',
          'src/flipclock/js/libs/Plugins.js',
          'src/flipclock/js/libs/List.js',
          'src/flipclock/js/libs/ListItem.js',
          'src/flipclock/js/libs/EnglishAlphaList.js',
          'src/flipclock/js/libs/*.js',
          'src/flipclock/js/faces/TwentyFourHourClockFace.js',
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
      },
      docs: {
        files: ['<%= concat.js.src %>'],
        tasks: ['jsdoc2md']
      }
    },
    jsdoc2md : {
      separateOutputFilePerInput: {
        files: [
            { src: "src/flipclock/js/libs/Base.js", dest: "docs/Base.md" },
            { src: "src/flipclock/js/libs/Divider.js", dest: "docs/Divider.md" },
        ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc-to-markdown');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'watch', 'jsdoc2md']);
};