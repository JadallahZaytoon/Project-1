// var userN = sessionStorage.getItem("user");
// const playerDisplay = document.getElementById("plyer_name");
// playerDisplay.append(userN);
// // h11.id="heas"
// // h11.innerText=userN;
// // const myPageBody=document.querySelector("body")
// // myPageBody.append(h11)

// let counter = document.getElementById("timer");
// let count1 = 1;

// setcounter = () => {
//   //selctor for start btn and disable
// //  document.getElementById("btnStart").disabled=ture;
  
//  let x= setInterval(() => {
//     counter.innerText = count1;
    

//     if(count1===5){

//       clearInterval(x);

//     // const timesUp = document.getSelection("timer");
//     // timesUp.append="Time's Up";
    
      
    
//     }
    
//     count1++;
//   }, 1000);
// };

const cards=document.querySelectorAll(`.memory-card`);

let hasFlippedCard=false;
let lockBoard=false;
let firstCard,secondCard;




function flipCard(){

  if(lockBoard) return;
  if(this===firstCard)return;
  this.classList.toggle(`flip`)
  if(!hasFlippedCard){

    hasFlippedCard=true;
    firstCard=this;
    
    return;
  }

    hasFlippedCard=false;
    secondCard=this;

    checkForMatch();
     
  
}

checkForMatch=()=>{

  if(firstCard.dataset.framework===
    secondCard.dataset.framework){

      disableCards();
      
    }else{
     
      unFlippedCards();
    }

}

disableCards=()=>{

  firstCard.removeEventListener(`click`,flipCard);
  secondCard.removeEventListener(`click`,flipCard);

    resetBoard;

}

unFlippedCards=()=>{
  lockBoard=true;

  setTimeout(()=>{
    firstCard.classList.remove(`flip`)
  secondCard.classList.remove(`flip`)

  lockBoard=false;
  },1000)
}
resetBoard=()=>{
  [hasFlippedCard,lockBoard]=[false,false];
  [firstCard,secondCard]=[null,null]
}
cards.forEach(card=>card.addEventListener(`click`,flipCard));