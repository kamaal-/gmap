// Filename: js/views/map.view.js
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var MapView = Backbone.View.extend({
  	
  	initialize : function(){

  		console.log(this.model);
  		
  	},

  	render : function(){

  		var map = new google.maps.Map(document.getElementById('the-map'), this.model.attributes.mapOptions);

  		return this;

  	}

  });

  return MapView;

});