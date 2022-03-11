let flipper = document.querySelectorAll(".card");
let back = document.querySelector(".card-back");
let deck = document.querySelector(".deck");
let frontImage = document.querySelectorAll(".front-image");
let timerCount = document.querySelector(".timer");
let time = 0;
let livesCount = document.querySelector(".lives");
let lives = 3;
let matchedCount = document.querySelector(".matched");
let matched = 0;
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
  "front6.jpg",
  "front6.jpg",
  "front7.jpg",
  "front7.jpg",
  "front8.jpg",
  "front8.jpg",
];

function timer() {
  setInterval(() => {
    time++;
    timerCount.innerHTML = "Time Played: " + time + "s";
  }, 1000);
}

flipper.forEach((card) => {
  card.addEventListener("click", cardFlipper);
});

function cardFlipper(e) {
  this.classList.toggle("card-front");

 
  console.log(e.target.src);
  console.log(flipped);

  if (flipped.length === 2) {
    if (flipped[0] === flipped[1]) {
      console.log("correct");

      matched++;
      matchedCount.innerHTML = "Matched: " + matched;
    } else {
      console.log("wrong");

      lives--;
      livesCount.innerHTML = "Lives: " + lives;
    }
  }
}

function cardShuffle() {
  console.log(cardArray);

  //sort --> sorterar sakerna i arrayen i storleks ordning
  //Math.random()-0.5 --> ger ett nummer som är negativt eller positivt
  //Istället för att göra dem i storleks ordning så blir det ordningen (a,b) eller (b,a) --> det blir då en shuffle av bilderna
  cardArray.sort(() => Math.random() - 0.5);
  cardArray.forEach((item) => {
    console.log(item);

    for (var i = 0; i < frontImage.length; i++) {
      item = cardArray[i];
      var currentImage = frontImage[i];
      currentImage.src = "Pictures/" + item;
    }
  });
}

//När man anropar funktionen changeMode så blir startScreen display "none" och man byter till #mode1 eller #mode2 beroende på "modeIndex"
function changeMode(modeIndex) {
  document.querySelector(".startScreen").style.display = "none";

  document.querySelector("#mode" + modeIndex).style.display = "block";

  timer();
}

cardShuffle();
