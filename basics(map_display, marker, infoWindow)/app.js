function initMap() {

    // Map option

    let options = {
        center: {lat: 38.3460, lng: -0.4907},
        zoom: 8
    };

    // New Map
    map = new google.maps.Map(document.getElementById('map'), options);

    // listen for click on map location

    google.maps.event.addListener(map, "click", (event) => {
        // add Marker
        addMarker(event.latLng);
    })

    // Marker
/*
    const marker = new google.maps.Marker({
        position: {lat: 37.9922, lng: -1.1307},
        map:map,
        icon:"https://img.icons8.com/nolan/2x/marker.png"
    });

    // InfoWindow

    const  detailWindow = new google.maps.InfoWindow({
        content: `<h2>Murcia City</h2>`
    });

    marker.addListener("mouseover", () => {
        detailWindow.open(map, marker);
    });
    */

    // Add Marker function

    function addMarker(location, imageIcon, content) {
        const marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: imageIcon
        });

        /* A code he did but i didn't use
        
            if (property.imageIcon){
                // set image icon
                marker.setIcon(property.imageIcon)
            }
        */

        const detailWindow = new google.maps.InfoWindow({
            content: content
        })

        marker.addListener("mouseover", () => {
            detailWindow.open(map, marker)
        })

    }

    murcia = {lat: 37.9922, lng: -1.1307};
    valencia = {lat: 39.4699, lng: -0.3763};
    benidorm = {lat: 38.5411, lng: -0.1225};

    imageIcon = "https://img.icons8.com/nolan/2x/marker.png";
    murciaContent = `<h2>Murcia city</h2>`;
    valenciaContent = `<h2>Valencia city</h2>`;
    benidormContent = `<h2>Benidorm city</h2>`;

    addMarker(murcia, imageIcon, murciaContent);
    addMarker(valencia, undefined, valenciaContent);
    addMarker(benidorm, undefined, benidormContent);

    /* Add marker to array and loop for markers

    markerArray = [
        {location: {lat: 37.9922, lng: -1.1307},
        imageIcon: "https://img.icons8.com/nolan/2x/marker.png",
        content: <h2>Murcia city</h2>},

        {location:{lat: 39.4699, lng: -0.3763}},

        {location:{lat: 38.5411, lng: -0.1225}}
    ]

    for(let i = 0; i < MarkerArray.length; i++){
        addMarker(markerArray[i]);
    }
    
    */
}