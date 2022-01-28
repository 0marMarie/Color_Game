var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();



function init(){
    setUpModeButtons();
    setUpSquares();
    resetMe();
}



function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click" , function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent === "Easy"){
            numSquares = 3;
        }
        else{
            numSquares = 6;
        }
         resetMe();
    });
}
}



function setUpSquares(){
    for(var i = 0 ; i < squares.length ; i++){
        squares[i].addEventListener("click" , function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                message.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                reset.textContent = "Play Again ?";
            }
            else{
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again ";
            }
        });
    }
}



function resetMe(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    reset.textContent = "New Colors";

    for(var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


reset.addEventListener("click" , function(){

    resetMe();
});


function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(var i = 0 ; i < num ; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){

   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")" ;
}

