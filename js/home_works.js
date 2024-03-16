// let gmailInpuit = document.getElementById("gmail_input");
// let gmailButton = document.getElementById("gmail_button");
// let gmailResult = document.getElementById("gmail_result");

// const regExp = /@gmail.com/;

// gmailButton.addEventListener("click", () => {
//   if (regExp.test(gmailInpuit.value)) {
//     gmailResult.innerHTML = "ok";
//     gmailResult.style.color = "green";
//   } else {
//     gmailResult.innerHTML = "not ok";
//     gmailResult.style.color = "red";
//   }
// });

// const childBlock = document.querySelector('.child_block');
// let distanceX = 0;
// let distanceY = 0;
// let directionX = 1;
// let directionY = 0;

// function animate() {
//     if (distanceX >= 447 && directionX === 1) {
//         directionX = 0;
//         directionY = 1;
//     } else if (distanceY >= 447 && directionY === 1) {
//         directionX = -1;
//         directionY = 0;
//     } else if (distanceX <= 0 && directionX === -1) {
//         directionX = 0;
//         directionY = -1;
//     } else if (distanceY <= 0 && directionY === -1) {
//         directionX = 1;
//         directionY = 0;
//     }

//     distanceX += directionX * 4;
//     distanceY += directionY * 4;

//     childBlock.style.left = distanceX + 'px';
//     childBlock.style.top = distanceY + 'px';

//     requestAnimationFrame(animate);
// }

// requestAnimationFrame(animate);

let start = document.getElementById("start");
let stopp = document.getElementById("stop");
let reset = document.getElementById("reset");
let seconds = document.getElementById("seconds");
let count = 0;

function Start() {
  setInterval(() => {
    count++;
    seconds.innerHTML = count;
  }, 1000);
}

function Stop() {
  clearInterval(seconds.innerHTML);
}

function Reset() {
  seconds.innerHTML = "0";
}
stopp.onclick = Stop;
start.onclick = Start;
reset.onclick = Reset;
    