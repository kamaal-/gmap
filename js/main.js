/*
 * ﷽ 
 */
require.config({
  paths: {
    
    jquery: 'js/vendor/jquery.min',
    jquery_ui: 'js/vendor/jquery-ui.min',
    underscore: 'js/vendor/underscore',
    backbone: 'js/vendor/backbone',
  },
  urlArgs: "bust=v2"

});

require([
  // Load our app module and pass it to our definition function
 
  'js/app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();

  window.applicationStatus = 'marker';

});