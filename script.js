let flipper = document.querySelectorAll(".card");
let back = document.querySelector(".card-back");
let deck = document.querySelector(".deck");
let backImage = document.querySelectorAll(".front-image");
let matched = [];
let flipped = [];
let cardArray = [
  "front1.jpg",
  "front1.jpg",
  "front2.jpg",
  "front2.jpg",
  "front3.jpg",
  "front3.jpg",
  "front4.jpg",
  "front4.jpg",
  "front5.jpg",
  "front5.jpg",
];

flipper.forEach((card) => {
  card.addEventListener("click", cardFlipper);
});

function cardFlipper() {
  this.classList.toggle("card-front");
  console.log(flipped);

  if(flipped.length === 2){
    if(flipped[0] === flipped[1]){
      alert("Correct")
    }
    else{
      alert("Wrong")
    }
  }
}

function random () {
  let cardDeck = cardArray;
  console.log(cardDeck);

  //sort --> sorterar sakerna i arrayen i storleks ordning
  //Math.random()-0.5 --> ger ett nummer som är negativt eller positivt
  //Istället för att göra dem i storleks ordning så blir det ordningen (a,b) eller (b,a) --> det blir då en shuffle av bilderna
  cardArray.sort(() => Math.random() - 0.5);

  cardDeck.forEach(item => {
    console.log(item);

    for(var i = 0; i < backImage.length; i++){
      item = cardDeck[i];
      var currentImage = backImage[i];
      currentImage.src = "Pictures/" + item;
    }
  });
};

//När man anropar funktionen changeMode så blir startScreen display "none" och man byter till #mode1 eller #mode2 beroende på "modeIndex"
function changeMode(modeIndex) {
  document.querySelector(".startScreen").style.display = "none";

  document.querySelector("#mode" + modeIndex).style.display = "block";
}

random();
