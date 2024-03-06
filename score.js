// Iteration 5: Store the player score and display it on the game over screen
var btn=document.querySelector("#play-again-button");
var scoreboard = document.getElementById("score-board");

btn.addEventListener("click",()=>{
    window.location.href="./index.html";
});

scoreboard.innerText=localStorage.getItem("score");