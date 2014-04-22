define([ 'jquery', 'underscore', 'backbone', '../models/map.model', 'text!../../templates/map/map.html' ], function($, _, Backbone, MapModel , mapTemplate) {

	return ( function(){

		var MapView = Backbone.View.extend({

			el : 'body',

			template : _.template( mapTemplate ),

			initialize : function(){

				console.log(this.$el);
				this.render();
			},

			render: function() {

			    this.$el.html(this.template(this.model.attributes));
			    return this;
			}

		});

		return MapView;

	}());

});