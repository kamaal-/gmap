// Filename: js/models/map.models.js
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var MapModel = Backbone.Model.extend({

  	defaults : {
  		
  		'map_class' : 'elephas-map-class',

  		mapOptions : {
  			zoom: 8,
  			center: new google.maps.LatLng(-34.397, 150.644)
  		}
  		
  	}
  
  });

  return MapModel;

});