$( document ).ready(function() {

    if(userScore===targetScore ) {
        alert("Congrtats! you won the game");
        winTotal++;
        $("#win-total").text(winTotal);
    }

    // if userScore > targetscore
        // alert('game lost')
        // update loss++



    //GLOBAL  VARIABLES

    //=============================================
    var crystal={
        blue:
        {
            name: "Blue",
            value: 0 
        },
        green: {
            name: "Green",
            value: 0
        },
        red:{
            name: "Red",
            value: 0
        },
        orange:{
            name: "Orange",
            value: 0
        }
        

    }

    var targetScore= 1;
    var userScore = 0;
    var winTotal= 0;
    var lossTotal= 0;

    //FUNCTIONS
    //=============================================


    var getRandom=function(min,max){
        return Math.floor(Math.random() * (max-min+1)) +min;
    }

    var checkWin = function() {
        if(userScore===targetScore ) {
            alert("Congrtats! you won the game");
            winTotal++;
            $("#win-total").text(winTotal);
            resetGame();
        } 
        
        if(userScore > targetScore) {
            alert("Sorry you lost")
            lossTotal++;
            $("#loss-total").text(lossTotal);
            resetGame();

        }  
    }

    var resetGame = function() {
        targetScore = 1;
        userScore = 0;
        $("#target-score").text(targetScore);
        $("#user-score").text(userScore);
        startGame();
    }

    var startGame=function(){
        userScore =0;
        targetScore=getRandom(50,100);
        console.log("TARGET SCORE: " +targetScore);
        crystal.blue.value=getRandom(1,10);
        crystal.green.value=getRandom(1,10);
        crystal.orange.value=getRandom(1,10);
        crystal.red.value=getRandom(1,10);
        console.log("BLUE CRYSTAL: " +crystal.blue.value);
        console.log("GREEN CRYSTAL: " +crystal.green.value);
        console.log("ORANGE CRYSTAL: " +crystal.orange.value);
        console.log("RED CRYSTAL: " +crystal.red.value);

        // var targetScore = document.getElementById("target-score")
        $("#target-score").text(targetScore);
        $("#user-score").text(userScore);
        $("#win-total").text(winTotal);
        $("#loss-total").text(lossTotal);

        $("#crystal-1").on("click", function() {
            userScore += crystal.blue.value;
            $("#user-score").text(userScore);
            checkWin();
        });
        
        $("#crystal-2").on("click", function() {
            userScore += crystal.green.value;
            $("#user-score").text(userScore);
            checkWin();

        });

        $("#crystal-3").on("click", function() {
            userScore += crystal.orange.value;
            $("#user-score").text(userScore);
            checkWin();

        });

        $("#crystal-4").on("click", function() {
            userScore += crystal.red.value;
            $("#user-score").text(userScore);
            checkWin();

        });

    }

    




    //MAIN PROCESS
    //==============================================
        startGame()

});
