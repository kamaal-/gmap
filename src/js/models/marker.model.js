App.Models.Marker = Backbone.Model.extend({

	initialize : function(){

		console.log( this );

	},

	defaults : {
		lat : '0.1',
		lng : '0.2',
		type : 'normal', // svg, image
		color : false,// svg 
            content : '<div class="wrapper"><h3>Hello</h3></div>'
	}

});