// TODO: fix event binding


var Game = {
  weird: ["Erinaceous", "Lamprophony", "Depone",
   "Finnimbrun", "floccinaucinihilipilification",
   "Inaniloquent", "Limerance",
   "Mesonoxian", "Mungo", "Nihilarian",
   "Nudiustertian", "Phenakism", "Pronk",
   "Pulveratricious", "Rastaquouere",
   "Scopperloit", "Selcouth", "Tyrotoxism",
   "Widdiful", "Zabernism"].map(function(word) { return word[0].toLowerCase() + word.slice(1); }),
  randomWord: function() {
    var sampled = _(this.weird).sample();
    this.weird.splice(this.weird.indexOf(sampled), 1);
    return sampled;
  },
  showNoMoreWords: function() {
    this.unbindKeys();
    this.currentWord = "";
    $("#spaces, #guesses").remove();
    $("#apples").removeClass().addClass("guess_6");
    $("<h1>You used up all the words</h1>").insertAfter("#tree");
  },
  setCurrentWord: function() {
    var picked = this.randomWord();
    if (picked === undefined) {
      this.showNoMoreWords();
    } else {
      this.currentWord = picked;
    }
  },
  gameWon: function() {
    return this.currentWord.split('').every(function(letter) { 
      return this.lettersGuessed.includes(letter); 
    }, this);
  },
  unbindKeys: function() {
    $(document).off('keypress');
  },
  displayWinMessage: function() {
    $("<h1>You won!</h1>").insertAfter("#tree")
  },
  displayNewGameLink: function() {
    $("<a href='#'>Start New Game</a>").insertAfter("#tree");
    this.bindNewGameLink();
  },
  startNewGame: function(e) {
    e.preventDefault();
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
    if (this.currentWord !== '') {
      $('#apples').removeClass();
      $('#apples').addClass('guess_' + String(this.incorrectGuesses));
      if (this.incorrectGuesses === this.wrongGuesses) {
        $('body').toggleClass('lose');
        this.unbindKeys();
        this.displayNewGameLink();
        this.displayLoseMessage();
      }
    }
  },
  updateGuessDisplay: function(guess) {
    $('<span />').html(guess).appendTo($('#guesses'));
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

      this.updateGuessDisplay(guess);
    }

    if (!this.lettersGuessed.includes(guess)) {
      this.lettersGuessed.push(guess);
    }
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
    $("#spaces span").remove();
    $("#guesses span").remove();
    $("body").removeClass("win lose");
    $("a, h1").remove();
    $("#apples").removeClass().addClass("guess");
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
  var game = Object.create(Game).init();
});
