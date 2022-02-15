let flipper = document.querySelectorAll(".card");
let deck = document.querySelector(".deck");
const cardArray = [
  "front1.jpg",
  "front1.jpg",
  "front2.jpg",
  "front2.jpg",
  "front3.jpg",
  "front3.jpg",
  "front4.jpg",
  "front4.jpg",
  "front5.jpg",
  "front5.jpg"
];

const cards = document.querySelector(".card");

let matched = [];
let flipped = [];

flipper.forEach(card => {
  card.addEventListener("click", cardFlipper)
});

function cardFlipper() {
  this.classList.toggle("card-front");
}


const random = () => {
  const cardDeck = cardArray;
  console.log(cardDeck)
  cardArray.sort(()=> Math.random() - 0.5)
};

random();



function changeMode(modeIndex){
  
  document.querySelector(".startScreen").style.display="none";

  document.querySelector("#mode" + modeIndex).style.display="block";  
}