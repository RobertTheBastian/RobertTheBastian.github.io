$(document).ready(function() {
  var $profile = $('.profile');
  var docWidth = $( document).width();
  var speed = 22;
  var startSize = 196;
  var startPosition = (docWidth /2) - (startSize /2);

  $profile.css({
    'left':startPosition,
    'width': startSize,
    'height': startSize
});

  $(window).scroll(function() {

      var st = $(this).scrollTop();
      var newPos = startPosition - (st * (speed / 6));
      var newSize = startSize - (st * (speed/100));

      $profile.css({
        'left': newPos,
        'width': newSize,
        'height': newSize
      });


  });
});