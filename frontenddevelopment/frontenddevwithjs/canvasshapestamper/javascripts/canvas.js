$(function() {
  var currentShape,
      x_coord,
      y_coord,
      $canvas = $('canvas').get(0),
      ctx = $canvas.getContext('2d'),
      bgColor;

  $('.drawing_method').click(function() {
    currentShape = $(this).text();
    $('.active').removeClass('active');
    $(this).addClass('active');
    bgColor = $('input').val();
  });

  $('input').change(function() {
    bgColor = $(this).val();
  })

  $('#clear').click(function(e) {
    e.preventDefault();
    ctx.clearRect(0, 0, $canvas.width, $canvas.height);
  });

  $('canvas').click(function(e) {
    var offset = $(this).offset();
    x_coord = e.pageX - offset.left;
    y_coord = e.pageY - offset.top;

    if (currentShape === "Circle") {
      createCircle(x_coord, y_coord);
    } else if(currentShape === "Square") {
      createSquare(x_coord, y_coord);
    } else if(currentShape === "Triangle") {
      createTriangle(x_coord, y_coord);
    }

  });

  function createCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI);
    ctx.fillStyle = bgColor;
    ctx.fill();
  }

  function createSquare(x, y) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(x, y, 30, 30);
  }

  function createTriangle(x, y) {
    var radius = 15 * Math.cos((2 * Math.PI) / 180);
    var delta = radius * Math.cos((2 * Math.PI) / 180);
    ctx.beginPath();
    ctx.moveTo(x, y - radius);
    ctx.lineTo(x - delta, y + delta);
    ctx.lineTo(x + delta, y + delta);
    ctx.lineTo(x, y - radius);
    ctx.fillStyle = bgColor;
    ctx.fill();
  }
});
