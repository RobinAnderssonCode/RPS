//denna fil används ej efter att koden lagts in i weaponClick funktionen som ligger i script.js
var Animate = function(imgOne, imgTwo) {
	var picArray = new Array();
	picArray[0] = "rock.png";
	picArray[1] = "paper.png";
	picArray[2] = "scissor.png";
	var thisId = 0;
	var intervalCount = 0;

	var theInterval = setInterval(function () {
		$("#computerChoice").attr("src", picArray[thisId]);
		thisId++;
		if (thisId == 3) thisId=0;
		intervalCount ++;
		$(".weapon").off("click");	
		if (intervalCount == 20){
			clearInterval(theInterval);
			$("#computerChoice").attr("src", imgTwo);
			console.log(imgTwo);
			$(".weapon").on("click", function() {
				console.log("testar on funktion för click")
			});	
		}
	}, 50);	
	$("#playerChoice").fadeIn(1000).attr("src", imgOne);
}
