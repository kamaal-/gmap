// Filename: js/app.js
define([
 
  'jquery', 
  'jquery_ui', 
  'underscore', 
  'backbone',
  'js/models/marker.model'

], function($,ui, _, Backbone, MarkerModel){
  var initialize = function(){
    //
    var marker = new MarkerModel({
      lat: '2.321'
    });

    console.log(marker.attributes);

  };

  return { 
    initialize: initialize
  };

});