// Filename: js/collections/marker.collections.js
define([
 
  'jquery', 
  'jquery_ui', 
  'underscore', 
  'backbone',
  'js/models/marker.model'

], function($,ui, _, Backbone, MarkerModel, MapModel){

	var MarkerCollections = Backbone.Collection.extend({

		initialize : function (){

			this.listenTo(this, 'add', this.addMarker);

                  _.bindAll(this, 'addMarker' );
    	      
            },

		model : MarkerModel,

		addMarker : function (model){

			console.log(model.attributes);

		}

	});

	return MarkerCollections;

});