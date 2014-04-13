module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  
  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    'uglify' : {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/app.js',
        dest: 'js/app.min.js'
      }, 
      'plugin_build' : {
        files : {
          'js/vendor/plugins.min.js' : [ 'src/js/vendor/plugin.js',  'src/js/vendor/underscore.js',  'src/js/vendor/backbone.js']
        }
      }
    },

    'jshint' : {
      // define the files to lint
      files: ['src/js/app.js'],

      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    compass: {
      bootstrap: {
        options: {
          config: 'src/config.rb',
          environment: 'development',
          force: grunt.option('force') || false,
          outputStyle : 'compressed'
        }
      }
    },


    'watch' : {
      files: ['src/js/*.js', 'src/sass/*.scss', 'index.html'],
      tasks: ['uglify:plugin_build', 'uglify', 'jshint'],
      options: {
        livereload: false,
      }
    }


  });

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'jshint']);

};