var timer = 60;
let score = 0;
let hitrn = 0;

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 85; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").innerHTML = hitrn;
}

function runTimer() {
  var timing = setInterval(function () {
    if (timer) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timing);
      document.querySelector(".pbtm").innerHTML = `<h1>Game over..</h1>`;
    }
  }, 1000);
}

function newScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector(".pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === hitrn) {
    newScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
