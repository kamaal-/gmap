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
	
	/*

	
	
	*/

});