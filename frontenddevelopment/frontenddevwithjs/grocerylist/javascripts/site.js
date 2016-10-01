$(document).ready(function() {
  $('button[type="submit"]').click(function(e) {
    e.preventDefault();
    $name = $('#name')[0].value;
    $quantity = $('#quantity')[0].value;

    if ($quantity === '') {
      $quantity = '1';
    }

    $('ul').append($('<li>').text($quantity + ' ' + $name));
    $('form').get(0).reset();
  });
})
