import "./style.css";

window.onload = function() {
  let suit = ["heart", "club", "spade", "diamond"];
  let value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  console.log("Hello Rigo from the console!");

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let card = document.querySelector(".card");
  let cardValue = document.querySelector("h1");

  card.classList.add(suit[getRndInteger(0, suit.length - 1)]);
  cardValue.innerHTML = value[getRndInteger(0, value.length - 1)];
};
