define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  
  var MarkerModel = Backbone.Model.extend({

  	defaults : {
  
  		lat: '1.23'
  
  	}
  
  });

  return MarkerModel;

});