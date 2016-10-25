var guessWord = {
  weird: ["Erinaceous", "Lamprophony", "Depone",
   "Finnimbrun", "floccinaucinihilipilification",
   "Inaniloquent", "Limerance",
   "Mesonoxian", "Mungo", "Nihilarian",
   "Nudiustertian", "Phenakism", "Pronk",
   "Pulveratricious", "Rastaquouere",
   "Scopperloit", "Selcouth", "Tyrotoxism",
   "Widdiful", "Zabernism"],
  randomWord: function() {
    var sampled = _(this.weird).sample();
    this.weird.splice(this.weird.indexOf(sampled), 1);
    return sampled;
  },
  setCurrentWord: function() {
    var picked = this.randomWord();
    this.currentWord = picked === undefined ? "Sorry, I've run out of words!" : picked;
  },
  init: function() {
    this.setCurrentWord();
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.wrongGuesses = 6;
    return this;
  },
};

var game = Object.create(guessWord).init();

$(function() {
  for (var i = 0; i < game.currentWord.length; i++) {
    $('<span />').appendTo('#spaces');
  }
});
