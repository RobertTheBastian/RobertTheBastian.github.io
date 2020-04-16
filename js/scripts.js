//profile scroll effect
$(document).ready(function () {
  var $profile = $('.profile');
  var docWidth = $(document).width();
  var speed = 22;
  var startSize = 196;
  var startPosition = (docWidth / 2) - (startSize / 2);

  $profile.css({
    'left': startPosition,
    'width': startSize,
    'height': startSize
  });

  $(window).scroll(function () {

    var st = $(this).scrollTop();
    var newPos = startPosition - (st * (speed / 6));
    var newSize = startSize - (st * (speed / 100));

    $profile.css({
      'left': newPos,
      'width': newSize,
      'height': newSize
    });
  });
});



//Hero particle BG
$(document).ready(function () {
  $('#particles').particleground({
    dotColor: '#e8e8e8',
    lineColor: '#f5f5f5',
    maxSpeedX: 0.3,
    maxSpeedY: 0.3,
    lineWidth: 0.2,
    proximity: 150,
    density: 7500,
    parallaxMultiplier: 10,

  });
});

//var parallax = $('#particles').parallax();