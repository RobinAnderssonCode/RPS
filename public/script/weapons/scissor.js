//Function som tar emot motståndarens vapen och räknar ut vem som vinner.
//Anropas ifall anvnädaren väljer vapnet med samma namn som funktioen.
var Scissor = function (opponent) {
		if (opponent == "rock"){
			result = "Lose";
		} else if (opponent == "paper") {
			result = "Win";
		} else if (opponent == "scissor"){
			result = "Draw";
		};
		return result;
	};