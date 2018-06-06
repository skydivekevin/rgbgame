var numsquares = 6;

var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var titleBackground = document.querySelector("#titleBackground");
var titleContainer = document.querySelector("#titleContainer");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors();
			resetButton.textContent = "Play Again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "You suck at life :( ";
		}
	});
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//add num random colors to array
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")"
}

function changeColors(color){
	for (var i = 0; i < numsquares; i++){
		squares[i].style.background = pickedColor;
		titleBackground.style.background = pickedColor;
		titleContainer.style.background = pickedColor;
	}
}

function reset(){
	messageDisplay.textContent = "";
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
}

resetButton.addEventListener("click", function(){
	reset();
	this.textContent = "New Colors"
	titleContainer.style.background = "steelblue";
	titleBackground.style.background = "steelblue";
	}
)

easyBtn.addEventListener("click", function(){
	titleContainer.style.background = "steelblue";
	titleBackground.style.background = "steelblue";
	numsquares = 3;
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.background = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	titleContainer.style.background = "steelblue";
	titleBackground.style.background = "steelblue";
	numsquares = 6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.background = "block";
		
	}
});



