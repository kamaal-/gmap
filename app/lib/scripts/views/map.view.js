define([ 'jquery', 'underscore', 'backbone', '../models/map.model', 'text!../../templates/map/map.html', 'async!http://maps.google.com/maps/api/js?sensor=false' ], function($, _, Backbone, MapModel , mapTemplate) {

	return ( function(){

		var MapView = Backbone.View.extend({

			el : '#js-map-wrapper',

			template : _.template( mapTemplate ),

			initialize : function(){

				_.bindAll(this, 'beforeRender', 'render', 'afterRender');
				var _this = this; 
				this.render = _.wrap(this.render, function(render) {

		            _this.beforeRender(); 
		            render(); 
		            _this.afterRender(); 
		            return _this; 

		        }); 

		        this.render();

			},

			beforeRender: function() { 

		       console.log('beforeRender'); 

		    }, 

			render: function() {

			    this.$el.html(this.template(this.model.attributes));
			    return this;

			},

			afterRender: function() {

				var mapCanvas = $( '#' + this.model.attributes.mapId )[0],
					mapOptions = {
						center : new google.maps.LatLng( this.model.attributes.locaion.lat, this.model.attributes.locaion.lng ),
						zoom: 8,
						disableDefaultUI: true
					};

				var map = new google.maps.Map( mapCanvas, mapOptions );

		        console.log(mapCanvas);

		    } 

		});

		return MapView;

	}());

});