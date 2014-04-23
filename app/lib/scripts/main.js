require.config({
	urlArgs: "ts="+new Date().getTime(),
	paths:{
		'jquery' 		: "vendor/jquery/dist/jquery",
		'jquery_ui'		: 'vendor/jquery-ui/ui/jquery-ui',
		'underscore' 	: "vendor/underscore/underscore",
		'backbone'		: "vendor/backbone/backbone",
		'map-icon'		: "vendor/map-icons/js/map-icon-amd",
		'text'			: 'vendor/requirejs-plugins/lib/text',
		'async'			: 'vendor/requirejs-plugins/src/async',
	}
});

require(['application/app'], function( App ) {

	App();
	
	/*var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };

	var map = new google.maps.Map(document.getElementById("the-map"), mapOptions);

	
	
	var marker = new icon({
		position: new google.maps.LatLng(-34.397, 150.644),
			    animation: google.maps.Animation.DROP,
			    draggable:true,
			    map: map,
			    zIndex: 9,
			    title : "Im marker",
			    label: '<i class="map-icon-hardware-store"></i>',
			    icon: {
	                    path: MAP_PIN,
	                    fillColor: '#315a40',
	                    fillOpacity: 1,
	                    strokeColor: '',
	                    strokeWeight: 0,
	                    scale: 1/4
	            	}

	});*/

    // Google Maps API and all its dependencies will be loaded here.
});