// TODO: refactor gameWon, removeApple
function lowercaseWord(word) {
  return word[0].toLowerCase() + word.slice(1);
};

var guessWord = {
  weird: ["Erinaceous", "Lamprophony", "Depone",
   "Finnimbrun", "floccinaucinihilipilification",
   "Inaniloquent", "Limerance",
   "Mesonoxian", "Mungo", "Nihilarian",
   "Nudiustertian", "Phenakism", "Pronk",
   "Pulveratricious", "Rastaquouere",
   "Scopperloit", "Selcouth", "Tyrotoxism",
   "Widdiful", "Zabernism"].map(lowercaseWord),
  randomWord: function() {
    var sampled = _(this.weird).sample();
    this.weird.splice(this.weird.indexOf(sampled), 1);
    return sampled;
  },
  setCurrentWord: function() {
    var picked = this.randomWord();
    this.currentWord = picked === undefined ? "Sorry, I've run out of words!" : picked;
  },
  gameWon: function() {
    var that = this;
    return this.currentWord.split('').every(function(letter) { 
      return that.lettersGuessed.includes(letter); 
    });
  },
  unbindKeys: function() {
    $(document).unbind('keypress');
  },
  displayWinMessage: function() {
    $("<h1>You won!</h1>").insertAfter("#tree")
  },
  displayNewGameLink: function() {
    $("<a href='#'>Start New Game</a>").insertAfter("#tree");
    this.bindNewGameLink();
  },
  teardown: function() {
    $("#spaces span").remove();
    $("#guesses span").remove();
    $("body").removeClass("win lose");
    $("a, h1").remove();
    $("#apples").removeClass().addClass("guess");
  },
  startNewGame: function(e) {
    e.preventDefault();
    this.teardown();
    this.init();
  },
  checkForWin: function() {
    if (this.gameWon()) {
      $('body').toggleClass('win');
      this.unbindKeys();
      this.displayNewGameLink();
      this.displayWinMessage();
    }
  },
  displayLoseMessage: function() {
    $("<h1>Try again, the word was " + this.currentWord + ".</h1>").insertAfter("#tree");
  },
  removeApple: function() {
    var that = this;
    $('#apples').removeClass();
    $('#apples').addClass('guess_' + String(that.incorrectGuesses));
    if (this.incorrectGuesses === this.wrongGuesses) {
      $('body').toggleClass('lose');
      this.unbindKeys();
      this.displayNewGameLink();
      this.displayLoseMessage();
    }
  },
  process: function(guess) {
    if (!this.lettersGuessed.includes(guess)) {
      if (this.currentWord.split('').includes(guess)) {
        var indicesOfGuess = this.currentWord.split('')
                                 .reduce(function(prev, currentLetter, i, letterArr){
                                   return guess === currentLetter ? prev.concat([i]) : prev;
                                 }, []);
        indicesOfGuess.forEach(function(i) {
          $('#spaces span').eq(i).html(guess);
        });
        this.lettersGuessed.push(guess);

        this.checkForWin();
      } else {
        this.incorrectGuesses += 1;
        this.removeApple();
      }
    }
    $('<span />').html(guess).appendTo($('#guesses'));
  },
  processTypedLetter: function(e) {
    var keyCode = e.keyCode;
    if (keyCode <= 122 && keyCode >= 97) {
      var guess = String.fromCharCode(keyCode);
      this.process(guess);
    }
  },
  setUpBlankSpaces: function() {
    this.currentWord.split('').forEach(function(letter) {
      $('<span />').appendTo('#spaces');
    });
  },
  bind: function() {
    $(document).on('keypress', $.proxy(this.processTypedLetter, this));
  },
  bindNewGameLink: function() {
    $("a").on('click', $.proxy(this.startNewGame, this));
  },
  init: function() {
    this.setCurrentWord();
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.wrongGuesses = 6;
    this.setUpBlankSpaces();
    this.bind();
    return this;
  },
};

$(function() {
  var game = Object.create(guessWord).init();
});
