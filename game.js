
var num1=document.getElementById("number1");
var num2=document.getElementById("number2");
var timer=document.getElementById("timer");
var button=document.getElementById("buttons");

var Number1;
var Number2;
var time=0;
var timeRemaining;
var score=0;

function randomNumber(){
    return Math.floor(Math.random()*100);
}

function gameover(){
    stopTimer();
    window.location.href="./gameover.html";
    localStorage.setItem("score",score);
}

// Iteration 4: Build a timer for the game
function startTimer(){
    time=setInterval(()=>{
        timeRemaining--;
        timer.innerText=timeRemaining;
        if(timeRemaining==0){
            gameover();
        }
    },1000);
}

function stopTimer(){
    clearInterval(time);
    timeRemaining=5;
    timer.innerText=timeRemaining;
}



function displayRandomNumber(){
    stopTimer();
    Number1=randomNumber();
    Number2=randomNumber();
    num1.innerText=Number1;
    num2.innerText=Number2;
    startTimer();
}

function guess(operator){
    if((operator == "greater-than" && Number1 > Number2) || (operator == "lesser-than" && Number1<Number2) || (operator == "equal-to" && Number1 == Number2)){
        score++;
        displayRandomNumber();
    }
    else{
        gameover();
    }
}


// Iteration 2: Generate 2 random number and display it on the screen
displayRandomNumber();

// Iteration 3: Make the options button functional
button.addEventListener("click",(operator)=>{
    guess(operator.target.id);});
