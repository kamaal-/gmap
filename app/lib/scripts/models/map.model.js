define([ 'jquery', 'underscore', 'backbone' ], function($, _, Backbone) {
	return (function(){

		var MapModel = Backbone.Model.extend({

			// This function fires when init model
			initialize : function(){

				console.log(this);

			},

			// Default data to prevent empty model creation
			defaults: {
				locaion : {
					lat : -13.397,
					lng : 150.644
				}
			}


		});

		return MapModel;

	}());
});