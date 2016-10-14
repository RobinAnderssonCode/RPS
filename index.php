<!DOCTYPE html>
<html lang="sv">

<head>
<meta charset="UTF-8">
<!-- JQuery plus JQuery UI -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<!--<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>-->

<!-- Egna CSS och JS filer -->

<link rel="stylesheet" type="text/css" href="style/style.css">

<link rel="stylesheet" type="text/css" href="style/desktop.css">
<link rel="stylesheet" type="text/css" href="style/mobile.css">

<script src="script/weapons/rock.js"></script>
<script src="script/weapons/paper.js"></script>
<script src="script/weapons/scissor.js"></script>
<script src="script/animate.js"></script>
<script src="script/result.js"></script>
<script src="script/weaponClick.js"></script>
<script src="script/script.js"></script>

<title>Gesällprov 2016</title>
</head>
<body>


	<h1>Gesällprov webbutveckling klient 2016</h1>
	<div id="container" class="container">

		<div id="weaponsArea" class="blockList">
		<ul>
			<li id="rock" class="weapon"><img src="img/rock.png" alt="Rock"></li>
			<li id="paper" class="weapon"><img src="img/paper.png" alt="Paper"></li>
			<li id="scissor" class="weapon"><img src="img/scissor.png" alt="Scissor"></li>
		</ul>
		</div>
	<div class="clear"></div>
	<div id="resultBlock" class="blockList">

		<div id="playerScreen" class="resultScreen">
			<h2 id="playerResult" class="resultTitle">Player</h2>
			<img id="playerChoice" class="weaponChoice" src="img/fraga.png" alt="Player weapon choice">
			<div class="clear"></div>
				<h2 id="playerWinCount" class="winCountTitle">You have won 0 times</h2>
		</div>
		<div id="computerScreen" class="resultScreen">

			<h2 id="computerResult" class="resultTitle">Computer</h2>
			<img id="computerChoice" class="weaponChoice" src="img/fraga2.png" alt="computer weapon choice">
			<div class="clear"></div>
				<h2 id="computerWinCount" class="winCountTitle">The computer have won 0 times</h2>
		</div>
		
	</div>
	<div class="clear"></div>
	<div id="stats">

		<h3 id="gameCount">0 games played</h3>
		<h3 id="drawCount">0 games ended with draw</h3>
		
	</div>
	<div class="clear"></div>


</div>
<footer>Skapad av Erik Boström 2016</footer>
</body>

</html>
