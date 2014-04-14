// Filename: js/collections/marker.collections.js
define([
 
  'jquery', 
  'jquery_ui', 
  'underscore', 
  'backbone',
  'js/models/marker.model'

], function($,ui, _, Backbone, MarkerModel, MapModel){

	var MarkerCollections = Backbone.Collection.extend({
		model : MarkerModel,

	});

	return MarkerCollections;

});