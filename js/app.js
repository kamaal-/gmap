// Filename: js/app.js
define([
 
  'jquery', 
  'jquery_ui', 
  'underscore', 
  'backbone',
  'js/models/map.model',
  
  'js/views/map.view'

], function($,ui, _, Backbone, MapModel , MapView){
  var initialize = function(){

    var mapModel = new MapModel({
      map_class : 'new-map'
    });
    
    map = new MapView({
      model : mapModel
    }); 

    map.render();

  };

  return { 
    initialize: initialize
  };

});