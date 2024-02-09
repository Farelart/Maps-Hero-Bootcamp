function initMap() {

    // location markers
    const markers = [
        {
            locationName: 'Crumbs & Dollies',
            lat: 51.5143610291308,
            lng: -0.13909998704347487,
            address: '1 Kingly Ct, Carnaby, London W1B 5PW, Royaume-Uni'
        },
        {
            locationName: 'Rinkoff Bakery',
            lat: 51.520463196144455,
            lng: -0.05282948183297341,
            address: '222-226 Jubilee St, Stepney Green, London E1 3BS, Royaume-Uni'
        },
        {
            locationName: 'Comptoir Gourmand Bermondsey',
            lat: 51.50093789585487,
            lng: -0.08201281534203214,
            address: '96 Bermondsey St, London SE1 3UB, Royaume-Uni'
        },
        {
            locationName: 'Bageriet',
            lat: 51.512070467994214,
            lng: -0.12630011939816194,
            address: '24 Rose St, London WC2E 9EA, Royaume-Uni'
        },
        {
            locationName: 'Ole & Steen',
            lat: 51.50618432530881, 
            lng: -0.017370999999999998,
            address: 'CR34 Crossrail Pl, London E14 5AR, Royaume-Uni'
        }
    ];

    const fehMarker = 'https://i0.wp.com/www.frontendhero.dev/wp-content/uploads/2023/03/feh-marker.png?resize=29%2C45&ssl=1';

    const centerMap = { lat: 51.5034984, lng: -0.1198804 }

    const mapOptions = {
        center: centerMap,
        zoom: 10,
        disableDefaultUI: true,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    }

    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const infoWindow = new google.maps.InfoWindow ({
        minWidth: 200,
        maxWidth: 200
    });

    const bounds = new google.maps.LatLngBounds();

    // loop through all markers
    for (let i = 0; i < markers.length; i++) {
        const marker = new google.maps.Marker({
            position: {lat: markers[i]['lat'], lng: markers[i]['lng']},
            map: map,
            icon: fehMarker
        });

        function createInfoWindow() {
            const infoWindowContent = `
            <div class ="feh-content">
                <h3>${markers[i]['locationName']}</h3>
                <address>
                    <p>${markers[i]['address']}</p>
                </address>
            </div>
            `;

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent(infoWindowContent);
                infoWindow.open(map, marker);
            });

        }
        createInfoWindow();

        infoWindow.addListener('closeclick', function(){
            map.fitBounds(bounds);
        });

        bounds.extend(new google.maps.LatLng(markers[i]['lat'], markers[i]['lng']));
        map.fitBounds(bounds);

    }
}