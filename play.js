//Timer function
function myFunction() {
  let i =60
  let timer=setInterval(function(){
  document.querySelector("label").innerText=i;
  i--;
  if(i==0 ){
  clearInterval(timer)
  window.location.replace("lose.html");
  }
  }
  , 1000);
  }
  myFunction()




const cards = document.querySelectorAll(`.memory-card`);

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.toggle(`flip`);
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  hasFlippedCard = false;
  secondCard = this;

  checkForMatch();
}

checkForMatch = () => {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
  } else {
    unFlippedCards();
  }
};

disableCards = () => {
  firstCard.removeEventListener(`click`, flipCard);
  secondCard.removeEventListener(`click`, flipCard);

  resetBoard;
};

unFlippedCards = () => {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove(`flip`);
    secondCard.classList.remove(`flip`);

    lockBoard = false;
  }, 1000);
};
resetBoard = () => {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
};

(shuffle = () => {
  cards.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 12);
    card.style.order = randomPosition;
  });
})();

my = () => {};
cards.forEach((card) => card.addEventListener(`click`, flipCard));
