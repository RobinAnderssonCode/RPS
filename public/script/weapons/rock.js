//Function som tar emot motståndarens vapen och räknar ut vem som vinner.
//Anropas ifall anvnädaren väljer vapnet med samma namn som funktioen.
var Rock = function (opponent) {
		if (opponent == "rock"){
			result = "Draw";
		} else if (opponent == "paper") {
			result = "Lose";
		} else if (opponent == "scissor"){
			result = "Win";
		};
		return result;
};