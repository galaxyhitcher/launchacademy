$(document).ready(function() {
  var first;
  var second;
  var operator;
  var result;

  $("button[type='submit']").click(function(e) {
    e.preventDefault();
    $first = Number($('#first').val());
    $second = Number($('#second').val());
    operator = $('select').val();

    if (operator === '+') {
      result = $first + $second;
    } else if (operator === '-') {
      result = $first - $second;
    } else if (operator === '/') {
      result = $first / $second;
    } else if (operator === '*') {
      result = $first * $second;
    }

    $('#result').text(result);
  });
});
