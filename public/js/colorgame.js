var header = document.querySelector("#header");
var currentColor = document.querySelector("#colorid");
var newcolorOption = document.querySelector("#new-color-menu");
var messageText = document.querySelector("#game-message");
var easyOption = document.querySelector("#easy-menu");
var hardOption = document.querySelector("#hard-menu");

var cells = document.querySelectorAll("#play-screen p");
for (var i = 0; i < 6; ++i)
{
	cells[i].setAttribute("data-clicked","false");
	cells[i].setAttribute("data-cellNum",i);
}
	

function rand()
{
	return Math.floor(Math.random()*225*2 % 225);
}

function randomColor()
{
	return "rgb(" + rand() + ", " + rand() + ", " + rand() + ")";
}

var questionColor = randomColor();
var gameIsHard = false;
var gameStarted = false;
var gameEnded = false;

function generateBlocks()
{
	var maxCells = 3;
	for (var i = 0; i < 3; ++i)
		cells[i].style.backgroundColor = randomColor();
	if (gameIsHard)
	{
		for (var i = 0; i < 3; ++i)
			cells[i+3].style.backgroundColor = randomColor();
		maxCells = 6;
	}
	else
	{
		for (var i = 0; i < 3; ++i)
			cells[i+3].style.backgroundColor = "black";
	}

	var randIndex = Math.floor(Math.random()*maxCells*2 % maxCells);
	cells[randIndex].style.backgroundColor = questionColor;
}

currentColor.textContent = questionColor;
generateBlocks();

function restart()
{
	questionColor = randomColor();
	messageText.textContent = "";
	currentColor.textContent = questionColor;
	header.style.backgroundColor = "#2a6bdd";
	gameStarted = false;
	gameEnded = false;
	for (var i = 0; i < 6; ++i)
		cells[i].setAttribute("data-clicked","false");
	generateBlocks();
}

function mouseoverEffect(element) 
{
	element.classList.add("blue-white");
	element.classList.remove("default-style");
}

function mouseoutEffect(element)
{
	element.classList.remove("blue-white");
	element.classList.add("default-style");
}

newcolorOption.addEventListener("mouseover", function() {
	mouseoverEffect(this);
});
newcolorOption.addEventListener("mouseout", function() {
	mouseoutEffect(this);
});
newcolorOption.addEventListener("click", function() {
	restart();
})


easyOption.addEventListener("mouseover", function() {
	if (gameIsHard)
		mouseoverEffect(this);
});
easyOption.addEventListener("mouseout", function() {
	if (gameIsHard)
		mouseoutEffect(this);
})
easyOption.addEventListener("click", function() {
	if (gameEnded || (!gameStarted && gameIsHard))
	{
		gameIsHard = false;
		mouseoutEffect(hardOption);
		mouseoverEffect(easyOption);
		restart();
	}
});

hardOption.addEventListener("mouseover", function() {
	if (!gameIsHard)
		mouseoverEffect(this);
});
hardOption.addEventListener("mouseout", function() {
	if (!gameIsHard)
		mouseoutEffect(this);
});
hardOption.addEventListener("click", function() {
	if (gameEnded || (!gameStarted && !gameIsHard))
	{
		gameIsHard = true;
		mouseoutEffect(easyOption);
		mouseoverEffect(hardOption);
		restart();
	}
});

for (var i = 0; i < 6; ++i)
{
	cells[i].addEventListener("click", function() {
		if (!gameEnded && this.getAttribute("data-clicked") == "false" && (this.getAttribute("data-cellNum") < 3 || gameIsHard))
		{
			var colorClicked = this.style.backgroundColor;
			if (colorClicked != questionColor)
			{
				messageText.textContent = "Please try again";
				this.setAttribute("data-clicked","true");
				this.style.backgroundColor = "black";
			}
			else
			{
				messageText.textContent = "Correct";
				for (var j = 0; j < 6; ++j)
					if (j < 3 || gameIsHard)
						cells[j].style.backgroundColor = colorClicked;
				header.style.backgroundColor = colorClicked;
				gameEnded = true;
			}
		}
	});
}