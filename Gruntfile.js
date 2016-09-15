module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['index.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    concat: {
      basic: {
        src: ['index.js'],
        dest: 'dist/basic.js',
      },
      extras: {
        src: ['jquery/dist/jquery.js', 'bootstrap/dist/js/bootstrap.js'],
        dest: 'dist/with_extras.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['dist/with_extras.js', 'dist/basic.js']
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'output.css': ['bootstrap/dist/css/bootstrap-theme.css', 'bootstrap/dist/css/bootstrap.css', 'animate.css/animate.min.css', 'style.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('test', ['jshint', 'concat', 'uglify', 'cssmin']);

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);

};