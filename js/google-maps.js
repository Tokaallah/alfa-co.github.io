// -----------------------------------------------------------------------------
// CENTER POINT
// -----------------------------------------------------------------------------
var centerPointLatitude;
var centerPointLongitude;
if(($(window).width() > 1300) && $('html').attr('lang') === 'en') {
    centerPointLatitude = 14.3771434;
    centerPointLongitude = 39.7269469;
} else if(($(window).width() > 1300) && $('html').attr('lang') === 'ar'){
    centerPointLatitude = 14.196152;
    centerPointLongitude = 48.2083928;
} else if($(window).width() < 1200) {
    centerPointLatitude = 14.3558579;
    centerPointLongitude = 44.1873966;
}

// -----------------------------------------------------------------------------
// HOMEPAGE GOOGLE MAPS
// -----------------------------------------------------------------------------
function googleMaps() {
    var googleMaps;
    var googleMapsMarker;
    var googleMapsOptions = {
        zoom: 7,
        center: new google.maps.LatLng(centerPointLatitude, centerPointLongitude),
        styles: GoogleMapsStyling,
        disableDefaultUI: false,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: []
        }
    };
    var GoogleMapsMarker = {
        url: markerIconURL,
        scaledSize: new google.maps.Size(42, 56.5)
    }
    googleMaps = new google.maps.Map(document.getElementById('google-maps'), googleMapsOptions);
    for(i = 0; i < locations.length; i++){
        googleMapsMarker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: googleMaps,
            icon: GoogleMapsMarker
        });
    }
};

// -----------------------------------------------------------------------------
// GOOGLE MAPS DEFAULT STYLING
// -----------------------------------------------------------------------------
var GoogleMapsStyling = [
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
                "visibility": "on"
            },
            {
                "color": "#cdcdcd"
            },
            {
                "lightness": 16
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
