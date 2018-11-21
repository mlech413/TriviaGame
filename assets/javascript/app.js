var timeAmt = 30;
var delayAmt = 5400;
var time = timeAmt;
var q = 0;
var intervalId;
var correctAnswer = false;
var wins = 0;
var losses = 0;
var notSelected = 0;
var questionCounter = 0;

//--on window load
window.onload = function() {
    
    $("#start").html("<br><br><br><br><button type='button' class='btn btn-info btn-lg' id='btn-custom'>Start</button>");
    $("#start").click(playGame);
    
}

function playGame() {
    console.log("*****PLAYGAME******");

    var question = [
        "What color are aircraft black boxes?",         //First question 
        "What is the main ingredient of Bombay Duck?",  //Second question
        "What kind of animal is a prairie dog?",        //Third question...
        "Where did Spanish flu originate?",
        "In which month does the German festival of Oktoberfest mostly take place?",
        "After which animal are the Canary Islands named?",
        "In which country was the Caesar salad invented in?",
        "How long did the 100 years war last?",
        "What color is blueberry jam?",
        "What is a camel hair brush made from?"
    ];

    var answers = {
        "answer1" : 
        ["Gray",    //First answer to first question 
         "Chicken", //First answer to second question 
         "Dog",     //First answer to third question... 
         "China",
         "November",
         "Birds",
         "Mexico",
         "116 years",
         "Red",
         "Fox, wolf, or coyote fur"],
        "answer2" : 
        ["Black",   //Second answer to first question 
         "Beef",    //Second answer to second question 
         "Pig",     //Second answer to third question...
         "U.S.A.",
         "October",
         "Fish",
         "Italy",
         "27 years",
         "Blue",
         "Squirrel, goat, or ox fur"],
        "answer3" : 
        ["Orange",  //Third answer to first question 
         "Duck",    //Third answer to second question 
         "Rodent",  //Third answer to third question...
         "Spain",
         "September",
         "Humans",
         "Greece",
         "100 years",
         "Purple",
         "Llama, camel, or alpaca fur"],
        "answer4" : 
        ["There is no actual box",  //Fourth answer to first question 
         "Fish",                    //Fourth answer to second question 
         "Dinosaur",                //Third answer to third question...
         "Unknown",
         "January",
         "Dogs",
         "U.S.A.",
         "100 days",
         "Black",
         "Rabbit, racoon, or possum fur"],
         "answerKey" :
         [ 3,  //Answer key identifying correct answer to first question 
           4,  //Answer key identifying correct answer to second question 
           3,  //Answer key identifying correct answer to third question...
           2,
           1,
           4,
           1,
           1,
           3,
           2 ]
    };


  
    //begin function:
    function begin(){
        $("#start").empty();
        console.log("  q (start) =" + q + "     QQQQQQ");
        //clear screen
        clearScreen();
        //populate questions and answers
        populateQuestion();
        //run clock
        runClock();
          
    }

    function resetInd() {
        console.log("resetInd()");
        time = timeAmt;
        clearInterval(intervalId);
        correctAnswer = false;
    }

    function clearScreen() {
        console.log("clearScreen()");
        $("#timeRemaining").empty();
        $("#question").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#answer4").empty();
    }

    function populateQuestion() {
        console.log("populateQuestion()");
        console.log("*****" + question[q]);
        $("#question").html("<h2>" + question[q] + "</h2>");
        $("#answer1").html("<button>" + answers.answer1[q] + "</button>");
        $("#answer2").html("<button>" + answers.answer2[q] + "</button>");
        $("#answer3").html("<button>" + answers.answer3[q] + "</button>");
        $("#answer4").html("<button>" + answers.answer4[q] + "</button>");
    }

    function runClock() {
        console.log("runClock()");
        $("#timeRemaining").html("<h2>" + time + "</h2>");
        console.log("time=" + time);
        intervalId = setInterval(decrement, 1000);
        // decrement();
    }

    function decrement() {
        // console.log("decrement()");
        time--;
        $("#timeRemaining").html("<h2>" + time + "</h2>");
        // console.log("time=" + time);

        //--stop and perform logic if time runs out
        if(time<=0){
            // console.log("time<=0");
            $("#timeRemaining").html("<h2>" + time + "</h2>");
            //stop clock
            stop();
            //no selection logic
            noSelection();
            //write answer
            writeAnswer();
            //5 sec function
            setTimeout(delay, delayAmt);
            // delay();
        }

    }

    function stop() {
        console.log("stop()");
        console.log("intervalID=" + intervalId);  
        clearInterval(intervalId);
        $("#timeRemaining").empty();
    }

    function noSelection() {
            console.log("NO SELECTION");
            clearScreen();
            notSelected++;
            console.log("wins=" + wins);
            console.log("losses=" + losses);
            console.log("notSelected=" + notSelected);
            $("#timeRemaining").html("<h2>Time's up!</h2>"); 
    }

    function checkAnswer() {
        console.log("checkAnswer()");
        //stop clock
        stop();
        clearScreen();
        var buttonNum = $(this).attr("value");
        console.log("$(this).attr('value')=" + $(this).attr("value"));
        console.log("buttonNum: " + buttonNum);
        console.log("answers.answerKey[q]: " + answers.answerKey[q]);
        if(buttonNum == answers.answerKey[q]) {
            console.log("WIN");
            wins++;
            console.log("wins=" + wins);
            console.log("losses=" + losses);
            console.log("notSelected=" + notSelected);
            $("#timeRemaining").html("<h2 style='color:lightgreen'>CORRECT!</h2>");
        }
        else {
            console.log("LOSS");
            losses++;
            console.log("wins=" + wins);
            console.log("losses=" + losses);
            console.log("notSelected=" + notSelected);
            $("#timeRemaining").html("<h2 style='color:red'>WRONG!</h2>");
        }
        //write answer
        writeAnswer();
        //5 sec function
        setTimeout(delay, delayAmt);
        return;
    }

     function writeAnswer() {
        console.log("writeAnswer()");
        console.log("answers.answerKey[q]=" + answers.answerKey[q]);
        var correctNumber = answers.answerKey[q];
        var answerDisplay = "<h2>" + question[q] + "</h2><br><h2>Answer: ";
        console.log("correctNumber=" + correctNumber);
        if (correctNumber == 1) {
            answerDisplay = answerDisplay + answers.answer1[q] + "</h2>";
        }
        else if (correctNumber == 2) {
            answerDisplay = answerDisplay + answers.answer2[q] + "</h2>";
        }
        else if (correctNumber == 3) {
            answerDisplay = answerDisplay + answers.answer3[q] + "</h2>";
        }
        else if (correctNumber == 4) {
            answerDisplay = answerDisplay + answers.answer4[q] + "</h2>";
        }
        var imageNum = q;
        imageNum++;
        answerDisplay = answerDisplay + "<img src='assets/images/" + imageNum + ".gif'>"
        console.log("   **" + answerDisplay);
        $("#question").html(answerDisplay);
        
    }

    function delay(){
        console.log("delay()");
        resetInd();
        clearScreen();
        q++;
        console.log("  q++ (end) =" + q + "     QQQQQQ");
        console.log("question.length=" + question.length);
        if(q<question.length) {
            console.log("q<question.length")
            begin();
        }
        else {
            gameOver();
        }
    
    }

    function gameOver() {
        console.log("gameOver()");
        clearScreen();
        $("#timeRemaining").html("<h2>Game Over!</h2>");
        $("#question").html("<h2>Wins: " + wins + "</h2>" +
                            "<h2>Losses: " + losses + "</h2>" + 
                            "<h2>Not selected: " + notSelected + "</h2>");
        $("#start").html("<br><button type='button' class='btn btn-info btn-lg' id='btn-custom'>Play Again</button><br><br><br>");
        resetInd();

        }      
    
    q = 0;
    clearInterval(intervalId);
    wins = 0;
    losses = 0;
    notSelected = 0;
    begin();
    $(".selection").click(checkAnswer);
    clearInterval(intervalId);


}

   