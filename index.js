// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
const game = document.getElementById("game")
//dodger.style.left = "0px";

document.addEventListener("keydown", function (event) {
    //console.log(event);
   if (event.key === "ArrowLeft") {
       moveDodgerLeft();
   }

   else if (event.key === "ArrowRight") {
       moveDodgerRight();
   }

   else if (event.key === "ArrowUp") {
       moveDodgerUp();
   }

   else if (event.key === "ArrowDown") {
       moveDodgerDown();
   }
})

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);  
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    console.log(game.offsetWidth)
    const boundary = game.offsetWidth - dodger.offsetWidth
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    //console.log("Dodger: " + dodger.offsetWidth)
    if (right < boundary) {
        dodger.style.left = `${right + 1}px`;
    }
}

// function moveDodgerUp() {
//     const upNumbers = dodger.style.up.replace("px", "");
//     const up = parseInt(upNumbers, 10);
//     if (up > 0) {
//         dodger.style.bottom = `${down + 1}px`; 
//     }
// }

// function moveDodgerDown() {
//     const downNumbers = dodger.style.down.replace("px", "");
//     const down = parseInt(downNumbers, 10);
//     if (down < -0) {
//         dodger.style.down = `${down - 1}px`;
//     }
// }