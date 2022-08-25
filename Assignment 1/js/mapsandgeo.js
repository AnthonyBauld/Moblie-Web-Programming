// "I Anthony Bauld, certify that this material is my original work. No other person's work has been used without due acknowledgement. 
// I have not made my work available to anyone else."

// Create's a let variable called map.
let map;
// Create's a initMap() function that will allow us to print and use the google map in different ways.
function initMap() {
    // Create's a new variable called directionService that is set to the DirectionsService() function.
    directionsService = new google.maps.DirectionsService();
    // Create's a new variable called directionsRenderer that is set to the DirectionsRenderer() function.
    directionsRenderer = new google.maps.DirectionsRenderer();
    // Create's a map using the google maps JS.
    map = new google.maps.Map(document.getElementById("map"), {
        // Sets the location of the map when the .HTML page is loaded.
        center: {
            lat: 43.2382,
            lng: -79.8881
        },
        // Sets the map zoom to 12.
        zoom: 12,
        // Allows zoom control.
        zoomControl: true,
        // Allows map type control.
        mapTypeControl: true,
        // Allows scale control.
        scaleControl: true,
        // Allows street-view control.
        streetViewControl: true,
        // Sets the map color to "dark-mode".
        styles: [{
            elementType: "geometry",
            stylers: [{
                color: "#242f3e"
            }]
        }, {
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#242f3e"
            }]
        }, {
            elementType: "labels.text.fill",
            stylers: [{
                color: "#746855"
            }]
        }, {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#d59563"
            }],
        }, {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#d59563"
            }],
        }, {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{
                color: "#263c3f"
            }],
        }, {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#6b9a76"
            }],
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                color: "#38414e"
            }],
        }, {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#212a37"
            }],
        }, {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#9ca5b3"
            }],
        }, {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{
                color: "#746855"
            }],
        }, {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{
                color: "#1f2835"
            }],
        }, {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#f3d19c"
            }],
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{
                color: "#2f3948"
            }],
        }, {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#d59563"
            }],
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [{
                color: "#17263c"
            }],
        }, {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{
                color: "#515c6d"
            }],
        }, {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{
                color: "#17263c"
            }],
        }, ],
    });
    // Create's a variable called infowindow that is set to the InfoWindow() function.
    infowindow = new google.maps.InfoWindow();
    // Create's a marker_clicked function that will allow us to set information into the marker windows.
    marker_clicked = function() {
        // Closes the infowinow.
        infowindow.close();
        // Sets the content within the infowindow to the ADDRESS from the bike.js.
        infowindow.setContent(this.ADDRESS);
        // When marker is clicked open the infowindow within the map.
        infowindow.open(map, this);
    }
    // Create's a variable called let markers that will be used to store an array.
    let markers = [];
    // Create's a for loop that will allow the user to filter the markers on the map based on two features.
    for (i = 0; i < bike.length; i++) {
        // If the bike is equal to "Multi-Ring" filter the icons.
        if (bike[i].properties.RACK_TYPE == "Multi-Ring")
            // Sets the new icon when the user filters.
            new_icon = "http://maps.google.com/mapfiles/kml/paddle/M.png";
        // Else if the bike is equal too anything else filter the icons.
        else {
            // Sets the new icon when the user filters.
            new_icon = "http://maps.google.com/mapfiles/kml/paddle/H.png";
        }
        // Create's a new_marker that will allow us to set the position of the bike rakes within Hamiltion.
        new_marker = new google.maps.Marker({
            // Sets the Latitude and Longitude of the bike rakes after it parses the float.
            position: {
                lat: parseFloat(bike[i].properties.LATITUDE),
                lng: parseFloat(bike[i].properties.LONGITUDE)
            },
            // Sets the title of the bike markers to the ADDRESS.
            title: bike[i].properties.ADDRESS,
            // Sets the icon to new_icon to allow the filter function to work.
            icon: new_icon,
        });
        // Sets the new_markers to map so it can display to the users.
        new_marker.setMap(map);
        // Sets the ADDRESS to new_marker to allow the user to see the address.
        new_marker.ADDRESS = bike[i].properties.ADDRESS;
        // When the new_marker is clicked run the funtion marker_clicked().
        new_marker.addListener("click", marker_clicked);
        // Sets the RACK_TYPE to the new_marker to allow the user to filter the different racks.
        new_marker.RACK_TYPE = bike[i].properties.RACK_TYPE;
        // Pushs the marker to the new_marker.
        markers.push(new_marker);
    }
    // Creates a function called showPositionOnMap() that will allow us to call geolocater to print the user location.
    function showPositionOnMap(position) {
        // Create's a new marker called user_location.
        user_location = new google.maps.Marker({
            // Sets the position of user_location to the position coords of the user.
            position: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            },
            // Sets the title to "Your location".
            title: "Your location",
            // Sets the icon to a track-0.
            icon: "http://earth.google.com/images/kml-icons/track-directional/track-0.png",
            // Create's an animation for the marker to drop down when the user allows their location to be placed.
            animation: google.maps.Animation.DROP,
        })
        // Sets the user_location to the map to be displayed.
        user_location.setMap(map);
    }
    // Create's a onclick button called myaddress that once clicked runs the navigator geolcation.
    document.getElementById("myaddress").onclick = function() {
        // Runs the naviagtor geolcation to get the current posisition and that pushes it to the function showPositionOnMap().
        navigator.geolocation.getCurrentPosition(showPositionOnMap);
    }
    // Create's a function called filterRing() that will filter the bike rack types.
    function filterRing() {
        // Create's a for loop that will check if rack type equals "Multi-Ring".
        for (i = 0; i < markers.length; i++) {
            // If the rack type equals "Multi-Ring" executes this if statement.
            if (markers[i].RACK_TYPE == "Multi-Ring")
                // Sets the markers to the map.
                markers[i].setMap(map);
            // Else if the rack type does not equals "Multi-Ring" executes this if statement.
            else
                // Sets the markers to the map to be null.
                markers[i].setMap(null);
        }
    }
    // Create's a onclick that calls the function filterRing().
    document.getElementById("multifilter").onclick = filterRing;
    // Create's a function called filterRing() that will filter the bike rack types.
    function filterHammer() {
        // Create's a for loop that will check if rack type equals "Hammer Hoop".
        for (i = 0; i < markers.length; i++) {
            // If the rack type equals "Hammer Hoop" executes this if statement.
            if (markers[i].RACK_TYPE == "Hammer Hoop")
            // Sets the markers to the map.
                markers[i].setMap(map);
            // Else if the rack type does not equals "Hammer Hoop" executes this if statement.
            else
                // Sets the markers to the map to be null.
                markers[i].setMap(null);
        }
    }
    // Create's a onclick that calls the function filterHammer().
    document.getElementById("hammerfilter").onclick = filterHammer;
    // Create's a function called showAll() that will show all the rack types that are clicked.
    function showAll() {
        // Create's a for loop that will check for all markers
        for (i = 0; i < markers.length; i++) {
            // Sets the markers to the map.
            markers[i].setMap(map);
        }
    }
    // Create's a onclick that calls the function showAll().
    document.getElementById("showall").onclick = showAll;
    // Create's a variable called geocoder thats set to the function Geocoder().
    geocoder = new google.maps.Geocoder();
    // Create's a function called inputAddress that will allow the user to enter an address.
    function inputAddress() {
        // Create's a let variable called address that will take the value from the search bar.
        let address = document.getElementById("search").value;
        // Create's a geocoders function that will run the address.
        geocoder.geocode({
            'address': address
        }, function(results, status) {
            // If the status equals 'OK' runs the executeable code.
            if (status == 'OK') {
                // Create's a var variable called markers that will place the searched address.
                var markers = new google.maps.Marker({
                    // Sets the position to the geometry of the location.
                    position: results[0].geometry.location,
                    // Sets the map to map.
                    map: map,
                    // Sets the icon.
                    icon: "http://earth.google.com/images/kml-icons/track-directional/track-0.png"
                })
            }
        });
    }
    // Create's a onclick that calls the function inputAddress().
    document.getElementById("searchbutton").onclick = inputAddress;
    // Create's a function called userDirection() that will show directions from current location of user to searched value.
    function userDirections() {
        // Sets the direction renderer to the map.
        directionsRenderer.setMap(map);
        // Sets the direction renderer to null.
        directionsRenderer.setDirections(null);
        // Create's a request that will pull the start and end for the directions.
        request = {
            // Set the origin from the user_location position.
            origin: user_location.getPosition(),
            // Grabs the destination from the search bar value.
            destination: document.getElementById("search").value,
            // Sets the travel mode to driving.
            travelMode: "DRIVING"
        }
        // Create's a direction service function that will run when that status is triggered.
        directionsService.route(request, function(result, status) {
            // If status is equal to 'OK' render the set directions from results.
            if (status == 'OK') {
                // Runs the directions renderer from results.
                directionsRenderer.setDirections(result);
            }
        });
    }
    // Create's a onclick that calls the function userDirections().
    document.getElementById("directions").onclick = userDirections;
}
