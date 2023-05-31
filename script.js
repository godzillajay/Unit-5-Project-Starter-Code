let startBtn = document.querySelector(".start");
let inputBtn = document.querySelector(".input");
let scale = document.querySelector(".scale");
let thinkBtn = document.querySelector(".think");
let doBtn = document.querySelector(".do");
let taxEvasion = document.querySelector(".taxEvasion");
let genocide = document.querySelector(".genocide");
let burglary = document.querySelector(".burglary");
let arson = document.querySelector(".arson");
let confetti = document.querySelector(".confetti");

startBtn.onclick = function() {
    let quizOpening = document.querySelector(".quizOpening");
    let questionOne = document.querySelector(".questionOne");

    quizOpening.style = "display: none";
    questionOne.style = "display: block";
};


let questionOne = document.querySelector(".questionOne");
let questionTwo = document.querySelector(".questionTwo");


inputBtn.onclick = (function() {
  scale = document.querySelector(".scale").value;
  if(scale < 7) {
   questionOne.style = "display: none";
   questionTwo.style = "display: block";
}else if (scale >=7) {
   questionOne.style = "display: none";
   questionTwo.style = "display: block";
}
});

thinkBtn.onclick = (function() {
  console.log("fire")
  if (scale <7) {
    questionTwo.style = "display: none";
    taxEvasion.style = "display: block";
    confetti.style = "display: block";
  }else if (scale >=7) {
    questionTwo.style = "display: none";
    genocide.style = "display: block";
    confetti.style = "display: block";
  }
});

doBtn.onclick = (function() {
  if (scale <7){
    questionTwo.style = "display: none";
    burglary.style = "display: block";
    confetti.style = "display: block";
  }else if (scale >=7){
    questionTwo.style = "display: none";
    arson.style = "display: block";
    confetti.style = "display: block";
    
  }
});






