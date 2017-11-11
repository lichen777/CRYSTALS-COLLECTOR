var game = {
    xtalValue: [],
    xtalImg : [ "assets/images/xtal0.png",
                "assets/images/xtal1.png",
                "assets/images/xtal2.png",
                "assets/images/xtal3.png"],
    wins : 0,
    loses : 0,
    targetNum : 12,
    score : 0,
    randomGenerate : function(start, end) {
        return Math.floor((Math.random() * end) + start);
    },
    startGame : function() {
        this.xtalValue = [];
        this.targetNum = this.randomGenerate(19, 120);
        this.score = 0;
        for(var i = 0; i < 4; i++) {
            this.xtalValue.push(this.randomGenerate(1, 12));
        }
        this.display();
    },
    playGame : function(input) {
        this.score += this.xtalValue[input];
        if (this.score == this.targetNum) {
            this.wins++;
            this.startGame();
        }
        else if (this.score > this.targetNum) {
            this.loses++;
            this.startGame();
        }
        this.display();
    },
    display : function() {
        $("#display").html("<p>Wins: " + game.wins + "</p>");
        $("#display").append("<p>Loses: " + game.loses + "</p>");
        $("#display").append("<p>Target: " + game.targetNum + "</p>");
        $("#display").append("<p>Score: " + game.score + "</p>");
    }
    
}

$(document).ready(function() {

    console.log(game.xtalValue);

    $("#start").on("click", function(){
        game.startGame();
        console.log(game.xtalValue);
        $(this).fadeOut();
    });

    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < game.xtalImg.length; i++) {

    // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>").addClass("xtalImage").attr("src", game.xtalImg[i]).attr("data-xtalIndex", i).css("width", "100px");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    // Each imageCrystal will be given a src link to the crystal image
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.

        $("#xtal").append(imageCrystal);
    }

    $(".xtalImage").on("click", function() {
        var index = ($(this).attr("data-xtalIndex"));
        console.log(this);
        console.log($(this));
        game.playGame(index);
    });

});



