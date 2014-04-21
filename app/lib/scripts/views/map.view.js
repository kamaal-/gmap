define([ 'jquery', 'underscore', 'backbone', 'text!../../templates/map/map.html' ], function($, _, Backbone, mapTemplate) {

	return ( function(){

		var MapView = Backbone.View.extend({

			template : _.template(mapTemplate, { mapClass : 'ds', mapId: 'gf' }),

			initialize : function(){
				console.log(this.template);
			}

		});

		return MapView;

	}());

});