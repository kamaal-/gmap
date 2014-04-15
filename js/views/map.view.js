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

  	mapClick : function( marker ){
  			
		var _lat = marker.latLng.lat(),
			_lng = marker.latLng.lng(),
			_infoWindow,
			_marker,
			_markerModel;
			
		if( 'marker' === applicationStatus ){

			this.markerCount += 1;

			_infoWindow = new google.maps.InfoWindow({
				content: "Lorem ipsum " + this.markerCount
			})
			
			_marker = new google.maps.Marker({
		      	position: new google.maps.LatLng(_lat,_lng),
		      	animation: google.maps.Animation.DROP,
		    	draggable:true,
		    	map: this.map,
		      	title: "Lorem ipsum " + this.markerCount
		  	});

		  	_markerModel = {
		  		lat : _lat,
				lon : _lng,
				id : marker.__gm_id,
				markerObj : marker,
				title: "Marker "+ marker.__gm_id,
		  	}

		}


  	}

  });

  return MapView;

});