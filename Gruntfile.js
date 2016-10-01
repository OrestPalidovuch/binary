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
        src: ['jquery/dist/jquery.js', 'bootstrap/dist/js/bootstrap.js', 'anijs/dist/anijs.js', 'anijs/dist/helpers/scrollreveal/anijs-helper-scrollreveal.js'],
        dest: 'dist/with_extras.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['dist/with_extras.js', 'dist/basic.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', ['jshint', 'concat', 'uglify']);

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};