var wins = 0;
var losses = 0;
var targetNumber;
var counter = 0;
var rupeeValues = [];

//array with four elements to run for loop four times
var rupeeQuantity = [1, 2, 3, 4];


// The player will be shown a random number at the start of the game.
targetNumber = Math.floor((Math.random() * 101) + 19);
$("#price").text("$ " + targetNumber);

$("#budget").text("$ " + counter);

// Generate four random numbers
for (var i = 0; i < rupeeQuantity.length; i++) {
	var newValue = Math.floor((Math.random() * 11) + 1);
	rupeeValues.push(newValue);
	console.log(rupeeValues);
}

//Assign one random number to each crystal
// $("#blue").attr("data-rupeeValue", rupeeValues[0]);
// $("#gold").attr("data-rupeeValue", rupeeValues[1]);
// $("#green").attr("data-rupeeValue", rupeeValues[2]);
// $("#purple").attr("data-rupeeValue", rupeeValues[3]);
$(".rupeeImage").each(function(index, item){
	$(item).attr("data-rupee-value", rupeeValues[index]);
});

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
$(".rupeeImage").on("click", function() {
	var singleRupeeValue = $(this).attr("data-rupee-value");
	singleRupeeValue = parseInt(singleRupeeValue)
	console.log(singleRupeeValue);

	counter = counter + singleRupeeValue;
	console.log("Collected " + counter);

	$("#budget").text("$ " + counter);

	if (counter > targetNumber) {
		losses++;
		console.log(losses);
		$("#losses").text("Losses: " + losses);
		alert("You lose!");
		reset();
	} else if (counter === targetNumber) {
		wins++;
		console.log(wins);
		$("#wins").text("Wins: " + wins);
		alert("you win!")
		reset();
	}
});

function reset () {
	targetNumber;
	counter = 0;
	rupeeValues = [];

	$("#budget").text("$ " + counter);

	//generate new random number
	targetNumber = Math.floor((Math.random() * 101) + 19);
	$("#price").text("$ " + targetNumber);

	for (var i = 0; i < rupeeQuantity.length; i++) {
		var newValue = Math.floor((Math.random() * 11) + 1);
		rupeeValues.push(newValue);
		console.log(rupeeValues);
	}

	//generate new rupee values
	$(".rupeeImage").each(function(index, item){
		$(item).attr("data-rupee-value", rupeeValues[index]);
	});
}
