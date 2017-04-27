$('.lightbox').click(function(){
  const src = $(this).find('img').attr('src');

  const container = $('<div />');
  container.addClass('lightbox-container');
  container.click(function(){
    $(this).remove();
  });
  $('body').append(container);

  const image = $('<img />');
  image.attr('src', src);
  container.append(image);
});

$('.search-icon').click(function() {
  $('.search-box').slideToggle(150);
  $('.search-box input').focus();
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 1,
    center: {lat: 0, lng: 0},
    styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-80},{"gamma":0.5}]}]
  });

  fetch('/studios-map.json')
    .then(res => res.json())
    .then(studios => {
      for (const studio of studios) {
        let marker = new google.maps.Marker({
          position: {lat: studio.coords[0], lng: studio.coords[1]},
          map: map,
          icon: {
            url: studio.profilePic,
            scaledSize: {
              width: 32,
              height: 32
            }
          }
        });

        marker.addListener('click', function() {
          window.location = `/studios/${studio.id}`;
        });
      }
    });
}
