const circle = document.getElementById("circle");
const letterSpan = document.getElementById("letter");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let currentLetter = getRandomLetter();

letterSpan.textContent = currentLetter;

// 🎲 random letter
function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// 🎨 color per letter
function getColor(letter) {
  const colors = {
    A: "green",
    B: "yellow",
    C: "red",
    D: "blue",
    E: "purple",
    F: "orange",
    G: "pink",
    H: "cyan",
    I: "lime",
    J: "teal",
    K: "magenta",
    L: "brown",
    M: "gold",
    N: "navy",
    O: "gray",
    P: "coral",
    Q: "olive",
    R: "crimson",
    S: "skyblue",
    T: "violet",
    U: "indigo",
    V: "salmon",
    W: "turquoise",
    X: "chocolate",
    Y: "khaki",
    Z: "white"
  };

  return colors[letter] || "white";
}

// 🔥 APPLY COLOR (IMPORTANT FIX)
function applyColor() {
  const color = getColor(currentLetter);

  circle.style.backgroundColor = color;
  circle.style.borderColor = color;
}

// 🔁 change letter + color
function changeLetter() {
  currentLetter = getRandomLetter();
  letterSpan.textContent = currentLetter;
  applyColor();
}

// INIT
applyColor();

// KEY EVENTS
document.addEventListener("keydown", (e) => {

  const key = e.key.toUpperCase();

  // ENTER → change letter + color
  if (e.key === "Enter") {
    changeLetter();
    return;
  }

  // only letters
  if (!/^[A-Z]$/.test(key)) return;

  // correct key → change
  if (key === currentLetter) {
    changeLetter();
  }

});