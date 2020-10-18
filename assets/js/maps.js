// cycle locations
let cyclingLocation = [
  { 'name': 'Achill Cycle Hub', 'lat': 53.97610111, 'lng': -10.08038879 },
  { 'name': 'Ballintotis- Castlepook Loop', 'lat': 51.911149, 'lng': -8.092401 },
  { 'name': 'Beara Way Cycling Route', 'lat': 51.75020745, 'lng': -9.549238756 },
  { 'name': 'Clifden Cycle Hub', 'lat': 53.48742769, 'lng': -10.01909941 },
  { 'name': 'Donegal Cycle Route', 'lat': 54.652177, 'lng': -8.111556 },
  { 'name': 'Doolin Cycle Hub', 'lat': 53.00525867, 'lng': -9.388025676 },
  { 'name': 'East Kilkenny Cycle Route', 'lat': 52.649863, 'lng': -7.249158 },
  { 'name': "Lough O'Flynn Cycle Route", 'lat': 53.741832, 'lng': -8.633925 },
  { 'name': 'Mullingar Cycle Hub', 'lat': 53.522007, 'lng': -7.34634 },
  { 'name': 'North Kilkenny Cycle Loop', 'lat': 52.649863, 'lng': -7.249158 }
];

let map;
initMap = () => {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: new google.maps.LatLng(53.14240, -6.266155),
    styles: [
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#004060"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#00557f"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#d3eaf6"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#000000"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#006699"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#bfe3f5"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a1e0e8"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#9bd0ea"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#abeab2"
          }
        ]
      },
      {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#9bd0ea"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#ffb884"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#f38e43"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#f38e43"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#ea6400"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#dff4ff"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#006699"
          }
        ]
      },
      {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#9bd0ea"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#006699"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      }
    ]
  });

  for (let x in cyclingLocation) {
    let trail = cyclingLocation[x];
    let location = new google.maps.LatLng(trail.lat, trail.lng);
    addMarker(map, trail.name, location);
  }
}

addMarker = (map, name, location) => {
  let marker = new google.maps.Marker({
    position: location,
    map: map
  });
  let infowindow = new google.maps.InfoWindow({
    content: name
  });
  google.maps.event.addListener(marker, 'click', function () {
    infowindow.open(map, marker);
  });
}