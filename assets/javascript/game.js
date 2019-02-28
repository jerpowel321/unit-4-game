
var wins = 0;
var losses = 0;
var pinkGem
var redGem
var yellowGem
var greenGem
var computerNumber 
var userScore = 0;


$(document).ready(function() {
    assignValues()
    displayScore()

    $("#pink").on("click", function() {
    userScore = userScore + pinkGem
    $("#myScore").text(userScore);
    userTotal()
    })

    $("#red").on("click", function() {
    userScore = userScore +(redGem);
    $("#myScore").text(userScore);
    userTotal()
    })

    $("#yellow").on("click", function() {
    userScore = userScore + (yellowGem);
    $("#myScore").text(userScore);
    userTotal()
    })
   
    $("#green").on("click", function() {
    userScore = userScore +(greenGem);
    $("#myScore").text(userScore);
    userTotal()
    })

    function assignValues(){
        computerNumber = Math.floor(Math.random() * 120) + 19;
        console.log (computerNumber);
        $("#computer-Number").text("" + computerNumber+ ""); 
        pinkGem = Math.floor(Math.random() * 12) + 1;
        console.log (pinkGem);
        redGem = Math.floor(Math.random() * 12) + 1;
        console.log (redGem);
        yellowGem = Math.floor(Math.random() * 12) + 1;
        console.log (yellowGem);
        greenGem = Math.floor(Math.random() * 12) + 1;
        console.log (greenGem);
        userScore = 0;
    };
    
    function displayScore(){
    $("#winsTotal").text("Wins:  "+ wins ); 
    $("#lossesTotal").text("Losses:  "+ losses);
    }  

    function userTotal(){
    if (userScore > computerNumber){
        losses ++
        displayScore()
        assignValues()
        $("#myScore").text("" + userScore + "");
    }
    else if (userScore === computerNumber){
        wins ++
        displayScore()
        assignValues()
        $("#myScore").text(userScore);
    }
    else {
        $("#myScore").text(userScore);
    }
   
    }
/*if (pinkGem === redGem || pinkGem === yellowGem || pinkGem === greenGem || redGem === yellowGem || 
    redGem === greenGem || yellowGem === greenGem) {
        assignValues()
    }; */

})