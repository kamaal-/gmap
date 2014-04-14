/*
 * ﷽ 
 */
var App = {
		Models : {},
		Collections : {},
		Views : {},
		SVGMarkers : {}
	};

jQuery(document).ready(function($) {

	"use strict";
	
	var marker = new App.Models.Marker({
		
		}),
		markerSvg = App.SVGMarkers.default;
		
	console.log(markerSvg);

});