const flipper = document.querySelectorAll(".card");

//flipper.addEventListener("click", cardFlipper);

flipper.forEach((cards) => cards.addEventListener("click", cardFlipper));

function cardFlipper() {
  this.classList.toggle("card-front");
}
