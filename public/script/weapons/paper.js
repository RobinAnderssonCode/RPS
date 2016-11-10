//Function som tar emot motståndarens vapen och räknar ut vem som vinner.
//Anropas ifall anvnädaren väljer vapnet med samma namn som funktioen.
//Genom att separera uträkningen av vem som vinner på detta sätt förenklar vi möjligheten
//att lägga till fler vapen i framtiden ifall man skulle vilja utöka spelet.
var Paper = function (opponent) {
		if (opponent == "rock"){
			result = "Win";
		} else if (opponent == "paper") {
			result = "Draw";
		} else if (opponent == "scissor"){
			result = "Lose";
		};
		return result;
	};