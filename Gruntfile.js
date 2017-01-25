module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        style: 'expanded',
        includePaths: require('node-bourbon').includePaths
      },
      dist: {
        files: {
          'compiled/flipclock.css': 'src/flipclock/css/flipclock.scss',
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: ['> 2%', 'IE >= 9', 'iOS >= 7'],
            cascade: false,
            remove: true
          })
        ]
      },
      dist: {
        src: 'compiled/*.css'
      }
    },
    concat: {
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
        files: ['src/flipclock/css/*.scss'],
        tasks: ['sass'],
      }
    },
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'postcss', 'concat', 'uglify', 'watch']);
};
