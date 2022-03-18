let flipper = document.querySelectorAll(".card");
let back = document.querySelector(".card-back");
let deck = document.querySelector(".deck");
let frontImage = document.querySelectorAll(".front-image");
let timerCount = document.querySelector(".timer");
let time = 60;
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

let changeHealth = document.querySelector(".health");
let changeTime = document.querySelector(".counter");
let interval;

flipper.forEach((card) => {
  card.addEventListener("click", cardFlipper);
});

function cardFlipper(e) {
  if (flipped[0] === this) {
    return;
  }
  this.classList.toggle("card-front");
  cardCheck(e);
}

function cardCheck(e) {
  var flippedImage = e.target;
  flipped.push(flippedImage);
  if (flipped.length === 2) {
    document.body.style.pointerEvents = "none";
    if (
      flipped[0].lastElementChild.firstElementChild.src ===
      flipped[1].lastElementChild.firstElementChild.src
    ) {
      console.log("correct");
      flipped.forEach((element) => {
        setTimeout(() => {
          element.style.pointerEvents = "none";
          document.body.style.pointerEvents = "all";
        }, 1000);
      });

      cardRemove();
      livesGain();
      match();
    } else {
      console.log("wrong");

      flipped.forEach((element) => {
        setTimeout(() => {
          element.classList.remove("card-front");
          document.body.style.pointerEvents = "all";
        }, 1200);
      });

      cardRemove();
      livesLoss();
    }
  }
}

function cardShuffle() {
  //sort --> sorterar sakerna i arrayen i storleks ordning
  //Math.random()-0.5 --> ger ett nummer som är negativt eller positivt
  //Istället för att göra dem i storleks ordning så blir det ordningen (a,b) eller (b,a) --> det blir då en shuffle av bilderna
  cardArray.sort(() => Math.random() - 0.5);
  cardArray.forEach((item) => {
    for (var i = 0; i < frontImage.length; i++) {
      item = cardArray[i];
      var currentImage = frontImage[i];
      currentImage.src = "Pictures/" + item;
    }
  });
}

function changeMode(pageIndex) {
  interval = setInterval(timer, 1000);
  document.querySelector("#page1").style.display = "none";
  document.querySelector("#page2").style.display = "none";
  document.querySelector("#page" + pageIndex).style.display = "block";

  if (pageIndex == 2) {
    timer();
    cardShuffle();
  } else {
    location.reload();
  }
}

function timer() {
  time--;
  timerCount.innerHTML = "Timecounter: " + time + "s";
  if (time <= 0) {
    setTimeout(() => {
      alert("You lost!");
      stopClick();
      clearInterval(interval);
    }, 500);
  }
}
function cardRemove() {
  flipped.pop();
  flipped.pop();
}
function livesGain() {
  document.body.classList.add("gain");
  setTimeout(() => {
    document.body.classList.remove("gain");
  }, 1000);
  lives++;
  livesCount.innerHTML = "Lives: " + lives;
}
function stopClick() {
  flipper.forEach((element) => {
    element.removeEventListener("click", cardFlipper);
  });
}
function livesLoss() {
  document.body.classList.add("loss");
  setTimeout(() => {
    document.body.classList.remove("loss");
  }, 1000);
  lives--;
  livesCount.innerHTML = "Lives: " + lives;
  if (lives == 0) {
    setTimeout(() => {
      alert("You lost!");
      stopClick();
      clearInterval(interval);
    }, 500);
  }
}
function match() {
  matched++;
  matchedCount.innerHTML = "Matched: " + matched;
  if (matched === cardArray.length / 2) {
    setTimeout(() => {
      alert("You won!");
      stopClick();
      clearInterval(interval);
    }, 500);
  }
}

function increaseLives() {
  lives++;
  changeHealth.innerHTML = lives;
  if (lives >= 20) {
    lives = 20;
  }
}

function decreaseLives() {
  lives--;
  changeHealth.innerHTML = lives;
  if (lives <= 3) {
    lives = 3;
  }
}

function decreaseTime() {
  time -= 10;
  changeTime.innerHTML = time + "s";
  if (time <= 30) {
    time = 30;
  }
}

function increaseTime() {
  time += 10;
  changeTime.innerHTML = time + "s";
  if (time >= 180) {
    time = 180;
  }
}
