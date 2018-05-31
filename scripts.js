class Game {
  constructor() {
    var game = this;
    this.wordKey = [];
    this.wordBlanksArr = [];
    this.lives = 3;
    this.word = "test";
    this.hint = "test";
    this.wordBlanks = "";
    this.word1 = null;
    this.word2 = null;
      this.words = [
        ["hello", "a common, cordial greeting"],
        ["basketball", "a game with fouls and charges"],
        ["beer", "a popular fermented beverage that sometimes brings out an interesting version of the truth"],
        ["programming", "writing precise directions for a computer to follow"],
        ["excellence", "the state of being we are all in pursuit of"],
        ["flexibility", "it's good to have this; to be adaptable, to go with the flow"],
        ["tulip", "a lovely flower from Holland"],
        ["napkin", "a thing you wipe your face with while eating"],
        ["posture", "mine is terrible, and my back always hurts"],
        ["cat", "the world's most sacred animal, imo"],
        ["table", "a surface on which to drink prosecco or play cards"],
        ["tiles", "line your kitchen or bathroom floor with these"],
        ["lightening", "you def don't want to be struck by this"],
        ["miller", "b l a n k  high life"],
        ["high", "when they go low..."],
        ["life", "it's like a box of chocolates"],
        ["wizards", "what we feel like when we get our code to work"],
        ["late", "call me what you want, just don't call me (this) for dinner"],
        ["digital", "modern remix of madonna's material girl"],
        ["future", "these generations might be in trouble"],
        ["visualize", "to make a person place or thing appear in your mind"],
        ["meowing", "my cat is doing this right now"],
        ["united", "the states of america are apparently this"],
        ["map", "follow me to get where you're going"],
        ["taxes", "we pay these. but not without representation."],
        ["married", "a person who has entered into a legal contract with another to have and to hold is (this)"],
        ["wedding", "a party two people throw when they enter into a legal contract to have and to hold each other forever"],
        ["construction", "the building of something, typically a large structure"],
        ["summer", "my least favorite season"],
        ["roofdeck", "a place in the city to drink beers and look at the sky and get bit by bugs"],
        ["control", "i strive to have this but i usually don't"]
      ];

    this.totalWords = this.words.length;
  }

    getWord() {
      var game = this;
      game.word = game.words[Math.floor(Math.random([0]) * game.totalWords)];
      game.hint = game.word[1];
      game.word = String(game.word[0]);
      document.getElementById("hint").innerHTML = game.hint;
    }

    setBlanks() {
      var game = this;
      game.getWord();
        for (var i = 0; i < game.word.length; i++) {
          console.log('working');
          game.wordKey[i] = game.word.charAt(i);
          game.wordBlanksArr[i] = "_ ";
        }
      game.wordBlanks = game.wordBlanksArr.join("");
      document.getElementById("WORD").innerHTML = game.wordBlanks;
      document.getElementById("numLetters").innerHTML = game.word.length;
    }

    updateLetter(letter) {
      var game = this;
      game.changes = 0;
        for (var i = 0; i < game.word.length; i++) {
          game.wordKey[i] = game.word.charAt(i);
            if (game.word.charAt(i) == letter) {
              game.wordBlanksArr[i] = letter;
              game.changes += 1;
            }
        }
        if (game.changes < 1) {
          game.lives -= 1;
          document.getElementById("lives").innerHTML = game.lives;
          if (game.lives < 1) {
            document.getElementById("WORD").innerHTML = game.word1;
            alert("sorry, you're out of life. try another word!")
            window.location.reload();
          }
        }
      game.wordBlanks = game.wordBlanksArr.join("");
      document.getElementById("WORD").innerHTML = game.wordBlanks;

      game.word1 = game.wordKey.join("");
      game.word2 = game.wordBlanksArr.join("");

        if (game.word1 == game.word2) {
          alert("you won! loading a new game");
          window.location.reload();
        }
    }
}

var hangman = new Game();
hangman.getWord();
hangman.setBlanks();
