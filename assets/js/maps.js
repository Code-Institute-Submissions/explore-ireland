var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
      zoom:6,
      center: new google.maps.LatLng(53.14240, -6.266155)
  });

for (var x in cyclingLocation) {
  var trail = cyclingLocation[x];
  var location = new google.maps.LatLng(trail.lat,trail.lng);
  addMarker(map, trail.name, location);
  }
}
function addMarker(map, name, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content: name
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}
google.maps.event.addDomListner(window, 'load', initialize);