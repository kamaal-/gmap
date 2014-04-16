// Filename: js/views/map.view.js
define([
  'underscore',
  'backbone',
  'js/collections/marker.collections'
], function( _, Backbone, markerCollections  ) {

    var MapView = Backbone.View.extend({
  	
      	initialize : function(){

      		_.bindAll(this, 'render', 'mapClick');

      	},

      	map: {},

      	markerCollections : new markerCollections(),

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

            //Checking the app status(tab) 
    		if( 'marker' === applicationStatus ){

    			this.markerCount += 1;

    			_infoWindow = new google.maps.InfoWindow({
    				content: "Lorem ipsum " + this.markerCount
    			})
    			
                //Marker
    			_marker = new google.maps.Marker({
    		      	position: new google.maps.LatLng(_lat,_lng),
    		      	animation: google.maps.Animation.DROP,
    		    	draggable:true,
    		    	map: this.map,
    		      	title: "Lorem ipsum " + this.markerCount
    		  	});

                //Marke r Model
    		  	_markerModel = {
    		  		lat : _lat,
    				lon : _lng,
    				id : marker.__gm_id,
    				markerObj : marker,
    				title: "Marker "+ marker.__gm_id,
    		  	}

                //Adding marker model to it's collection
    		  	this.markerCollections.add(_markerModel);

    		}


        }

    });

    return MapView;

});