var userN = sessionStorage.getItem("user");
const playerDisplay = document.getElementById("plyer_name");
playerDisplay.append(userN);
// h11.id="heas"
// h11.innerText=userN;
// const myPageBody=document.querySelector("body")
// myPageBody.append(h11)

let counter = document.getElementById("timer");
let count1 = 1;

setcounter = () => {
  setInterval(() => {
    counter.innerText = count1;
    count1++;
  }, 30000);
};
