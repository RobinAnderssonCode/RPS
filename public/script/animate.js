//Animations funktion som anropas när både användaren och datorn har valt ett vapen
/*Denna funktion tar emot spelarnas vapen samt funktionen weaponClick.
Klassen hanterar allt visuellt som händer efter att användaren klickat på sitt vapen
och tills det att omgångens resultatvisas.*/
var Animate = function(imgOne, imgTwo, weaponClick) {
	var thinkingArray = new Array();
	var picArray = new Array();
	picArray[0] = "img/rock.png";
	picArray[1] = "img/paper.png";
	picArray[2] = "img/scissor.png";
	var thinkingTime = 30;
	var thisId = 0;
	var intervalCount = 0;

//Sätter en intervall som ändrar bild datorns resultatsruta en gång var tiondels sekund.
//Intervallen lägger även till en punkt efter texten "thinkning" med samma tidsintervall
//Samt att den avaktiverar vapenknapparna under tiden som animationen körs.
	var theInterval = setInterval(function () {
		$("#computerResult").text("Thinking" + thinkingArray.join(""));
		thinkingArray.push(".");
		$("#computerChoice").attr("src", picArray[thisId]);
		thisId++;
		if (thisId == 3) thisId=0;
		if (intervalCount % 10 == 0) thinkingArray=[];
		intervalCount ++;
		$(".weapon").off("click");	
		//$(".weapon").fadeOut("slow");	
		if (intervalCount == thinkingTime){
			clearInterval(theInterval);
			$(".resultScreen").toggleClass("thinkingScreen", false);
			$("#computerChoice").attr("src", imgTwo);
			//console.log(imgTwo);
			var runResult = new Result(result);
			drawCount = gameCount - (winCount + loseCount);
			$("#gameCount").text(gameCount + " games played");
			$("#drawCount").text(drawCount + " games ended with draw");
			//$(".weapon").fadeIn("fast");	
			$(".weapon").on("click", weaponClick()); 
			};	
	}, 100);	
	$("#playerChoice").css("visibility","visible").fadeIn(1000).attr("src", imgOne);
}
