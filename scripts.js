$(document).ready(function() {
  var $horizontal = $('.profile');
  var startPosition = $horizontal.position().left;
  var speed = 14;
  var startSize = 160;


  $(window).scroll(function() {

    if ($horizontal.position().left > 70) {
      var st = $(this).scrollTop();
      var newPos = startPosition - (st * (speed / 6));
      var newSize = startSize - (st * (speed/100));

      $horizontal.css({
        'left': newPos
      });

      $horizontal.css({
        'width': newSize,
        'height': newSize

      });
    }

  });
});
