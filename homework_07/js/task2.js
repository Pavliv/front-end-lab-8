// Ask abour game
var a = confirm("Do you want to play a game?");

if (a == true) {
	var rand = Math.floor(Math.random() * 6);
	var rangeNumber = 5; // Range of values
	var attemptsLeft = 0; // Attempts have been spent
	var totalPrize = 0; // Total prize
	var possiblePrize = 10; // Possible prize
	var attempt = 0; // Loop iteration
	var inputNumber; // Stire input value
	while (attempt < 3) { // For 3 prompts
		inputNumber = prompt("Enter a number from 0 to "+ rangeNumber + "\n" + "Attempts left: " + attemptsLeft + "\n" + "Total prize: " + Math.floor(totalPrize) + "$" + "\n" + "Possible prize on current attempt: " + Math.floor(possiblePrize) + "$");
		attempt ++;
		attemptsLeft ++;
		if (inputNumber == rand) {
			totalPrize = possiblePrize;
			break;
		}
		possiblePrize = possiblePrize / 2;
	}
	var b = confirm("Do you want to continue a game?"); // If user win first game - question about continue, stored in b
	if (b == true) {
		var rand = Math.floor(Math.random() * 11);
		rangeNumber = 10;
		attemptsLeft = 0;
		possiblePrize = 30;
		attempt = 0;
		while (attempt < 3)  {
			inputNumber = prompt("Enter a number from 0 to "+ rangeNumber + "\n" + "Attempts left: " + attemptsLeft + "\n" + "Total prize: " + Math.floor(totalPrize) + "$" + "\n" + "Possible prize on current attempt: " + Math.floor(possiblePrize) + "$");
			attempt ++;
			attemptsLeft ++;
			if (inputNumber == rand) {
				totalPrize += possiblePrize;
				break;
			}
			possiblePrize = possiblePrize / 2;
		}
		console.log("Total prize: " + Math.floor(totalPrize) + "$");
	} else if (inputNumber != rand || b != true) { // If user doesn't win or doesen't wont continue
		console.log("Thank you for a game. Your prize is: " + Math.floor(totalPrize) + "$");
		console.log("Do you want to play again?");
	}
} else {
	console.log("You did not become a millionaire");
}