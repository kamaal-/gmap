module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  
  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),

    'uglify' : {
      options: {
        banner: '/*\n'+
                ' * ﷽ \n' +
                ' *\n'+
                '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'

      },
      build: {
        src:[ 'js/app.js'],
        dest: 'js/app.min.js'
      }
      
    },

    'jshint' : {
      
      // define the files to lint
      all: ['Gruntfile.js', 'lib/scripts/application/js/app.js'],

      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {

        reporter : require('jshint-stylish'),
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    compass: {
      compilesass: {
        options: {
          config: 'config.rb',
          environment: 'development',
          force: grunt.option('force') || false,
          outputStyle : 'compressed'
        }
      }
    },

    'watch' : {
      files: ['lib/sass/*.scss', 'index.html'],
      tasks: ['compass'],
      options: {
        livereload: false,
      }
    },

     requirejs: {
      compile: {
        options: {
          baseUrl : "lib/scripts",
          mainConfigFile : "../app/lib/scripts/main.js",
          name: "main",
          out: '../dist/out.js'
        }
      }
    }

  });

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'uglify']);

};