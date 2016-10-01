function $(id_selector) {
  return document.getElementById(id_selector);
}
window.onload = function() {
  $('calculator').onsubmit = function(e) {
    e.preventDefault();

    var first = +$('first').value,
        second = +$('second').value,
        operator = $('operator').value,
        result;

    if (operator === '+') {
      result = first + second;
    }
    if (operator === '-') {
      result = first - second;
    }
    if (operator === '*') {
      result = first * second;
    }
    if (operator === '/') {
      result = first / second;
    }

    $('result').innerHTML = result;
  }
};
