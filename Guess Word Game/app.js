const categories = {
  fruits: [
    "kiwi", "plum", "pear", "lime", "date", "fig", "banana", "mango", "orange", "papaya",
    "grapes", "guava", "apples", "peach", "lychee", "tomato", "pineapple", "pomegranate",
    "blackberry", "raspberries", "watermelon", "cantaloupe", "cranberry", "honeydew",
    "nectarine", "tangerine"
  ],
  vegetables: [
    "kale", "peas", "corn", "okra", "beet", "carrot", "tomato", "radish", "turnip", "onions",
    "celery", "pepper", "garlic", "chilli", "leek", "parsnip", "broccoli", "eggplants",
    "asparagus", "cauliflower", "zucchini", "cucumber", "artichoke", "brussels", "mustardgreens"
  ],
  animals: [
    "lion", "bear", "wolf", "frog", "crab", "monkey", "rabbit", "donkey", "turtle", "parrot",
    "giraffe", "cheetah", "elephant", "kangaroo", "alligator", "chimpanzee", "crocodile",
    "porcupine", "squirrel"
  ],
  country: [
    "chad", "laos", "mali", "peru", "iran", "cuba", "fiji", "togo", "oman", "pakistan", "france",
    "brazil", "canada", "mexico", "sweden", "turkey", "argentina", "australia", "singapore",
    "newzealand", "kazakhstan", "netherlands"
  ],
  colors: [
    "blue", "cyan", "gold", "gray", "pink", "orange", "yellow", "purple", "violet", "maroon",
    "indigo", "silver", "turquoise", "chartreuse", "aquamarine", "magenta", "periwinkle"
  ],
  sports: [
    "golf", "judo", "yoga", "dive", "soccer", "tennis", "boxing", "hockey", "kabaddi", "rugby",
    "badminton", "basketball", "volleyball", "wrestling", "speedskate"
  ]
};

let selectedCategory = "", selectedLevel = "";
let word = "", guessed = [], wrongGuesses = 0, gameOver = false;
let usedLetters = [], hintUsed = false;

function showCategories() {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("categoryButtons").style.display = "block";
}

function selectCategory(category) {
  selectedCategory = category;
  document.getElementById("categoryButtons").style.display = "none";
  document.getElementById("levelButtons").style.display = "block";
}

function selectLevel(level) {
  selectedLevel = level;
  document.getElementById("levelButtons").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("categoryTitle").textContent = `Category: ${selectedCategory.toUpperCase()} | Level: ${selectedLevel.toUpperCase()}`;
  startGame();
}

function getFilteredWord() {
  const wordList = categories[selectedCategory];
  const filtered = wordList.filter(w => {
    if (selectedLevel === "easy") return w.length === 4;
    if (selectedLevel === "medium") return w.length >= 5 && w.length <= 7;
    if (selectedLevel === "hard") return w.length >= 8 && w.length <= 9;
  });
  return filtered[Math.floor(Math.random() * filtered.length)];
}

function startGame() {
  word = getFilteredWord();
  guessed = Array(word.length).fill("_");
  wrongGuesses = 0;
  gameOver = false;
  usedLetters = [];
  hintUsed = false;

  document.getElementById("wordDisplay").textContent = guessed.join(" ");
  document.getElementById("hangmanMsg").textContent = "";
  document.getElementById("usedLetters").textContent = "";
  document.getElementById("letterInput").disabled = false;
  document.getElementById("letterInput").value = "";
  document.getElementById("hintBtn").disabled = false;

  document.getElementById("finalMessage").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";
}

function guessLetter() {
  if (gameOver) return;

  const input = document.getElementById("letterInput");
  const letter = input.value.toLowerCase();

  if (!letter.match(/[a-z]/) || usedLetters.includes(letter)) {
    document.getElementById("hangmanMsg").textContent = "⚠️ Invalid or repeated letter!";
    input.value = "";
    return;
  }

  usedLetters.push(letter);
  document.getElementById("usedLetters").textContent = "Used: " + usedLetters.join(", ");
  input.value = "";

  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter && guessed[i] !== letter) {
      guessed[i] = letter;
      found = true;
    }
  }

  document.getElementById("wordDisplay").textContent = guessed.join(" ");

  if (!found) {
    wrongGuesses++;
    document.getElementById("hangmanMsg").textContent = `❌ (${wrongGuesses}/5 wrong guesses)`;
  } else {
    document.getElementById("hangmanMsg").textContent = "✅ Correct!";
  }

  if (!guessed.includes("_")) {
    endGame(true);
  } else if (wrongGuesses >= 5) {
    endGame(false);
  }
}

function useHint() {
  if (hintUsed || gameOver) return;

  const hidden = guessed.map((v, i) => v === "_" ? i : -1).filter(i => i !== -1);
  if (!hidden.length) return;

  const i = hidden[Math.floor(Math.random() * hidden.length)];
  guessed[i] = word[i];
  usedLetters.push(word[i]);

  document.getElementById("wordDisplay").textContent = guessed.join(" ");
  document.getElementById("usedLetters").textContent = "Used: " + usedLetters.join(", ");
  document.getElementById("hangmanMsg").textContent = `💡 Hint: Letter "${word[i]}" revealed.`;

  hintUsed = true;
  document.getElementById("hintBtn").disabled = true;

  if (!guessed.includes("_")) {
    endGame(true);
  }
}

function endGame(success) {
  gameOver = true;
  document.getElementById("gameArea").style.display = "none";
  const msg = success
    ? "🎉 Congrats! You guessed the word!"
    : `😢 Game Over! The word was: ${word}`;
  const finalMsg = document.getElementById("finalMessage");
  finalMsg.textContent = msg;
  finalMsg.style.color = success ? "green" : "red";
  finalMsg.style.display = "block";

  document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
  selectedCategory = "";
  selectedLevel = "";
  document.getElementById("categoryButtons").style.display = "block";
  document.getElementById("finalMessage").style.display = "none";
  document.getElementById("restartBtn").style.display = "none";
}

document.getElementById("guessBtn").onclick = function () {
  guessLetter();
};
