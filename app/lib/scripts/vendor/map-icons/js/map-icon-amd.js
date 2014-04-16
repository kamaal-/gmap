define(['async!http://maps.google.com/maps/api/js?sensor=false' ], function() {

	ObjMaker = function() {

		var pin = {

		};

		

		this.marker = function(options){

			google.maps.Marker.apply( pin, arguments );
		
		}

		this.add = function(msg){
		
			console.log(msg);
		
		};

		this.inherits = function(childCtor, parentCtor){

			tempCtor.prototype = parentCtor.prototype;
			childCtor.superClass_ = parentCtor.prototype;
			childCtor.prototype = new tempCtor();
			childCtor.prototype.constructor = childCtor;

		};

	};
	
	return ObjMaker;
	
    // Google Maps API and all its dependencies will be loaded here.
});