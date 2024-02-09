// set map options

let myLatLng = {
    lat: 38.3460,
    lng: -0.4907
};

let mapOptions = {
    center: myLatLng,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP // specifying the kind of map we want(in this case we want a roadmap or a map of roads)
};

// create Map

let map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

// create a directions service object to use the route method and get a result for our request

let directionsService = new google.maps.DirectionsService();

// create a DirectionsRenderer object which we will use to display the route

let directionsDisplay = new google.maps.DirectionsRenderer();

// bind the directionsRenderer to the map

directionsDisplay.setMap(map);

// function

function calcRoute() {
    // create request
    let request = {
        origin: document.getElementById("from").value,
        destination: document.getElementById("to").value,
        travelMode: google.maps.TravelMode.DRIVING, // WALKING, BYCYCLING AND TRANSIT
        unitSystem: google.maps.UnitSystem.IMPERIAL // IMPERIAL for miles and feet or METRIC for km and m
    };

    // Pass the request to the route method
    directionsService.route(request, (result, status) => {
        if (status == google.maps.DirectionsStatus.OK) {
            // get distance and time
            const output = document.querySelector('#output');
            output.innerHTML = "<div class='alert-info'>From: " + document.getElementById("from").value + ".<br/>To:" + document.getElementById("to").value + ".<br/> Driving distance <i class='fas fa-road'></i>:" + result.routes[0].legs[0].distance.text + ".<br /> Duration <i class='fas fa-hourglass-start'></i>: " + result.routes[0].legs[0].duration.text + ".</div> ";

            //display route
            directionsDisplay.setDirections(result);

        } else {
            //delete route from map
            directionsDisplay.setDirections({routes: []});

            //center map in spain
            map.setCenter(myLatLng);

            //show error message
            output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retireve driving distance. </div>";
        }
    });
}

// create autocomplete objects for all input 

let options = {
    type: ['(geocode)']
}

let input1 = document.getElementById("from");
let autocomplete1 = new google.maps.places.Autocomplete(input1, options);

let input2 = document.getElementById("to");
let autocomplete2 = new google.maps.places.Autocomplete(input2, options);
