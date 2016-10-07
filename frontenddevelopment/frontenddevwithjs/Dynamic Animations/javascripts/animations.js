$(function() {
  var $canvas = $("#shape_container");

  function getFormObject($f) {
    var o = {};

    $f.serializeArray().forEach(function(input) {
      o[input.name] = input.value;
    });

    return o;
  }

  function createElement(data) {
    var $d = $("<div />", {
      "class": data.shape,
      data: data,
    });

    resetElement($d);

    return $d;
  }

  function animateElement() {
    var $e = $(this),
        data = $e.data();
    resetElement($e);
    $e.animate({
      left: +data.x_end_coord,
      top: +data.y_end_coord,
    }, +data.duration);
  }

  function resetElement($e) {
    var data = $e.data();
    $e.css({
      left: +data.x_start_coord,
      top: +data.y_start_coord,
    });
  }

  function stopAnimations() {
    $canvas.find("div").stop();
  }

  $('form').on('submit', function(e) {
    e.preventDefault();

    var $f = $(this),
        data = getFormObject($f);

    $canvas.append(createElement(data));
  });

  $('#start').on('click', function(e) {
    e.preventDefault();

    $canvas.find("div").each(animateElement);
  });

  $("#stop").on("click", function(e) {
    e.preventDefault();

    stopAnimations();
  });
});
