$(document).ready(function() {

// Todo: crystals
var crystal = {
	blue : {
		name: "Blue",
		value: 0
	};
	red: {
		name: "Red",
		value: 0
	};
	yellow : {
		name: "Yellow",
		value: 0
	};
	green : { 
		name: "Green"
		value: 0
	};
}
// buttons for crystals, assign them random numbers
var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;
// helper function for getting random numbers
var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// starts the game and restarts the game
var startGame = function() {
	currentScore = 0;

	//sets a new target score
var targetScore = getRandom(19, 120)

	// set different values for each of the crystals

	crystal.blue.value = getRandom(1, 12)
	crystal.red.value = getRandom(1, 12)
	crystal.yellow.value = getRandom(1, 12)
	crystal.green.value = getRandom(1, 12)

$(blue).on("click", function() {
	currentscore += blue
	$("#userScore").html(currentScore);

}

$(red).on("click", function() {
	currentscore += red
	$("#userscore").html(currentScore);
}

$(yellow).on("click", function() {
	currentscore += green
	$("#userScore").html(currentScore);
}

// have a target number

// reset the game

// win the game

// lose the game 