var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 28.704060,
      lng: 77.102493
    },
    zoom: 14
  });
}


$("#navbar a, .btn").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 800)
  } // End if
});