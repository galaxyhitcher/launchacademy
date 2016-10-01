$(document).ready(function() {
  var answer = Math.floor(Math.random() * 100) + 1;
  var inputValue;
  var userMessage;
  var guesses = 0;

  $('form').on('submit', function(e) {
    e.preventDefault();
    
    guesses++;

    inputValue = +$('input#guess').val();

    if (inputValue > answer) {
      userMessage = "My number is lower than " + String(inputValue);
    } else if (inputValue < answer) {
      userMessage = "My number is higher than " + String(inputValue);
    } else if (inputValue === answer) {
      userMessage = "You won! It only took you " + String(guesses) + " guesses."
      guesses = 0;
    }

    $('p').text(userMessage);
  });

  $('a').click(function() {
    answer = Math.floor(Math.random() * 100) + 1;
    userMessage = "Guess a number from 1 to 100";
    $('p').text(userMessage);
  });
});
