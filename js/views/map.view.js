// Filename: js/views/map.view.js
define([
  'underscore',
  'backbone',
], function(_, Backbone) {
  
  var MapView = Backbone.View.extend({
  	
  	initialize : function(){

  		_.bindAll(this, 'render', 'mapClick');

  	},

  	map: {},

  	markerCount : 0,

  	render : function(){

  		this.map = new google.maps.Map(document.getElementById('the-map'), this.model.attributes.mapOptions);

  		google.maps.event.addListener( this.map, "click", this.mapClick );

  		return this;

  	},

  	mapClick : function( _marker ){

  		if( 'marker' === applicationStatus ){
  			
  			this.markerCount += 1;

  			var _lat = _marker.latLng.lat(),
  				_lng = _marker.latLng.lng(),
  				_infoWindow = new google.maps.InfoWindow({
  					content: "Lorem ipsum " + this.markerCount
  				}),
  				marker = new google.maps.Marker({
			      	position: new google.maps.LatLng(_lat,_lng),
			      	animation: google.maps.Animation.DROP,
			    	draggable:true,
			    	map: this.map,
			      	title: "Lorem ipsum " + this.markerCount
			  });

  		}

  		console.log(_infoWindow);

  	}

  });

  return MapView;

});