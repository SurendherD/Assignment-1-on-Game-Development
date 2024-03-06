// Iteration 1: Make the Play button functional.
// Description: When the Play button is clicked the game page should be displayed.


var goToSecondPage=document.querySelector("#play-button");
goToSecondPage.addEventListener("click",()=>{
    document.location.href="./game.html";
});