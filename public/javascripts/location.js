
        

	var x = document.getElementById("msg");

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else { 
	        x.innerHTML = "Geolocation is not supported by this browser.";
	    }
	};

	function showPosition(position) {
	    
	    var lati =position.coords.latitude;
	    var longi=position.coords.longitude;
	    L.mapbox.accessToken = 'pk.eyJ1IjoibmFnYXJhamJoYXQiLCJhIjoiY2lrZnBvc2tsMDAyZHZwbTB3Z3ZuZDg1MiJ9.-fWmFnJhDitJIbPu2qHGUA';
	var map=L.mapbox.map('map-two', 'mapbox.streets').setView([lati, longi],12);	


	L.mapbox.featureLayer({
	    // this feature is in the GeoJSON format: see geojson.org
	    // for the full specification
	    type: 'Feature',
	    geometry: {
	        type: 'Point',
	        // coordinates here are in longitude, latitude order because
	        // x, y is the standard for GeoJSON and many formats
	        coordinates: [
	          longi,
	          lati 
	        ]
	    },
	    properties: {
	        title: 'Your location',
	        description: 'You are here',
	        // one can customize markers by adding simplestyle properties
	        // https://www.mapbox.com/guides/an-open-platform/#simplestyle
	        'marker-size': 'large',
	        'marker-color': '#FF4136',
	        'marker-symbol': 'star'
	    }
	}).addTo(map);

	   
	};

