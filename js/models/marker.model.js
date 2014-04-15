define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var MarkerModel = Backbone.Model.extend({

  	defaults : {
  		lat : -34.397,
		lon : 150.644,
		id : 0,
		markerObj : {},
		title: "",
  		content : ""
  	}
  
  });

  return MarkerModel;

});