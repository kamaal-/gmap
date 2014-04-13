App.Models.Marker = Backbone.Model.extend({

	initialize : function(){

		console.log("Marker created");

	},

	defaults : {
		lat : '0.1',
		lng : '0.2',
		type : 'normal' // svg, image
		color : false // svg 
		 
	}

});