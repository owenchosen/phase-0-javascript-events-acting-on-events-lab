// Your code here
const dodger = document.getElementById ("dodger");
const game = document.getElementById ("game");
dodger.style.bottom = "100px";
dodger.style.backgroundColor = "#FF69B4";



document.addEventListener ("keydown", (eventDetails) => {
    if (eventDetails.key === "ArrowLeft") moveDodgerLeft();
    else if (eventDetails.key === "ArrowRight") moveDodgerRight();
    else{}
});

function moveDodgerLeft () {
    let left = dodger.style.left.replace('px', '');
    left = parseInt(left, 10);
    if (left > 0) dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight () {
    let left = dodger.style.left.replace('px', '');
    left = parseInt(left, 10);
    if (left < 360) dodger.style.left = `${left + 1}px`;
}