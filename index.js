// Function to close hamburger menu once an item is clicked.

function toggle() {
  $(".toggler").prop("checked", false);
}

function initMap() {
  // The location of Odinsgrill
  var odinlocation = { lat: 57.709927, lng: 11.984851 };
  // The map, centered at Odinsgrill
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 14, center: odinlocation });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({ position: odinlocation, map: map });
}

