module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      css: {
        src: [
          'src/flipclock/css/flipclock.css'
        ],
        dest: 'dist/flipclock.css',
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
        dest: 'dist/flipclock.js',
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      dist: {
        files: {
          'dist/flipclock.min.js': ['<%= concat.js.dest %>']
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
        tasks: ['jsdoc']
      }
    },
    jsdoc : {
        dist : {
            src: ['src/flipclock/js/libs/Divider.js'], 
            options: {
                destination: 'docs'
            }
        }
    }
    /*
    jsdoc2md : {
      separateOutputFilePerInput: {
        files: [
            { src: "src/flipclock/js/libs/Base.js", dest: "docs/Base.md" },
            { src: "src/flipclock/js/libs/Divider.js", dest: "docs/Divider.md" },
        ]
      },
    }
    */
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'watch', 'jsdoc']);
};