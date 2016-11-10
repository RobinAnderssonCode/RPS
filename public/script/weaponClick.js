/*Denna funktion definerar vad som händer när användaren klickar på ett vapen.*/


//definerar vad som händer när användaren klickar på något av vapnen.
var weaponClick = function() {
    $("#rock").on("click", function() {
        playerOne = "rock";
        playerOneImg = "img/rock.png";
        sendWeapon(playerOne);
    });
    $("#paper").on("click", function() {
        playerOne = "paper";
        playerOneImg = "img/paper.png";
        sendWeapon(playerOne);
    });
    $("#scissor").on("click", function() {
        playerOne = "scissor";
        playerOneImg = "img/scissor.png";
        sendWeapon(playerOne);
    });

    function sendWeapon(w) {
        socket.emit('get weapon', playerOne);
    }

    $(".weapon").on("click", function() {
        $(".weaponChoice").css("display", "none");
        $(".weaponChoice").fadeIn(2000);
        $(".resultScreen").removeClass("winnerScreen loserScreen drawScreen thinkingScreen").toggleClass("thinkingScreen", true);
        //skapar ett random nummer och väljer sedan ett vapen till datorn
        $("#playerResult").text("You choose " + playerOne);
        $("#computerResult").text("Thinking");
        gameCount++;
        //var drawCount = gameCount - (winCount + loseCount);
        computerNr = Math.random();

        if (computerNr < 0.33) {
            playerTwo = "rock";
            playerTwoImg = "img/rock.png"
        } else if (computerNr < 0.66) {
            playerTwo = "paper";
            playerTwoImg = "img/paper.png"
        } else {
            playerTwo = "scissor";
            playerTwoImg = "img/scissor.png"
        }

        //Kollar vad användaren har valt för vapen 
        //och kör sedan vapen funktionen med datorns val som egenskap
        //Koden för dessa objekt ligger i sparata filer under mappen weapons
        if (playerOne == "rock") {
            var rockWeapon = new Rock(playerTwo);
        } else if (playerOne == "paper") {
            var paperWeapon = new Paper(playerTwo);
        } else if (playerOne == "scissor") {
            var scissorWeapon = new Scissor(playerTwo);
        } else {
            result = "No weapon chosen by player one";
        }; //avslutar funktionen som körs när man klickar på en .weapon knapp

        //animerar bilder vid val av vapen.
        var AnimateResult = new Animate(playerOneImg, playerTwoImg, weaponClick);

        //skriver ut resultatet i konsolen för att förenkla tester
        //console.log(result);
        //lägger till valet av vapen i två separata array för. 
        playerMoves.push(playerOne);
        computerMoves.push(playerTwo);
    }); //stänger weapon.click funktionen 

}; //stänger weaponClick funktionen
