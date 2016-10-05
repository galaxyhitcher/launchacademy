$(document).ready(function() {
  $blinds = $('[id^=blind]');

  $blinds.each(function(i) {
    var $blind = $blinds.eq(i);
    setTimeout(function() {
      $blind.animate({
        top: "+=" + $blind.height(),
        height: "0"
      }, 250, function() {
        // Animation complete.
      });
    }, 1500*i);
  });
});
