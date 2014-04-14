// Filename: js/views/map.view.js
define([
  'underscore',
  'backbone',
  'js/collections/marker.collections',
], function(_, Backbone, MarkerCollections) {
  
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
  			
		var _lat = _marker.latLng.lat(),
			_lng = _marker.latLng.lng(),
			_infoWindow,
			marker;
			
		if( 'marker' === applicationStatus ){

			this.markerCount += 1;

			_infoWindow = new google.maps.InfoWindow({
				content: "Lorem ipsum " + this.markerCount
			})
			
			marker = new google.maps.Marker({
		      	position: new google.maps.LatLng(_lat,_lng),
		      	animation: google.maps.Animation.DROP,
		    	draggable:true,
		    	map: this.map,
		      	title: "Lorem ipsum " + this.markerCount
		  });

		}


  	}

  });

  return MapView;

});