var numSquares = 6;
var colors = [];
var pickedColor;
var squares =document.querySelectorAll(".squares");
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay =document.querySelector("#messageDisplay");
var h1 =document.querySelector("h1");
var resetButton =document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode");






init();

function init(){
	setupModeButtons();
	setupSquares();
	resets();
}


function setupModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
			var execute =this.textContent;	
	 		modeButtons[0].classList.remove("selected");	
	 		modeButtons[1].classList.remove("selected");	
	 		this.classList.add("selected");
	 		if(execute === "Easy" ){
	 			numSquares =  3;}
	 			else{
	 				numSquares = 6;
	 			} 
	 		resets();
		 });
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
				if (clickedColor === pickedColor) {
					messageDisplay.textContent = "Correct!";
					messageDisplay.classList.add("Sparkle");
					resetButton.textContent = "Play Again?";
					changeColor(clickedColor);
					h1.style.backgroundColor = clickedColor;
				} else {
					messageDisplay.classList.remove("Sparkle");
					this.style.backgroundColor = "#232323";
					messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function resets(){
	colors=generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
	} else {
		squares[i].style.display="none";
	}
}	
	h1.style.backgroundColor="steelblue";

}


resetButton.addEventListener("click", function(){
	resets();	
})







// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");	
// 	easyBtn.classList.add("selected");
// 	numSquares =3;
// 	colors=generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 	if(colors[i]){
// 	squares[i].style.backgroundColor=colors[i];
// 	} else{
// 		squares[i].style.display="none";	
// 	}
//  }

// });


// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");	
// 	hardBtn.classList.add("selected");
// 	numSquares=6;
// 	colors=generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent=pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 	squares[i].style.backgroundColor=colors[i];
// 	squares[i].style.display="block";	
// 	}
 
// });









function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor =color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr =[]
	for (var i = 0; i <num; i++) {
	arr.push(randomColor())
}
	return arr;
}

function randomColor(){
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+ g + ", "+ b + ")";

}
