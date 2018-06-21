var time = 5;
var q = 0;
var intervalId;
var correctAnswer = false;
var wins = 0;
var losses = 0;
var noSelection = 0;
var questionCounter = 0;
var firstTimeIn = true;

//--on window load
window.onload = function() {
    
    $("#start").html("<br><br><br><br><button type='button' class='btn btn-info btn-lg' id='btn-custom'>Start</button>");
    $("#start").click(playGame);
    
}

function playGame() {

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
        ["Gray",   //First answer to first question 
         "Chicken",   //First answer to second question 
         "Dog",   //First answer to third question... 
         "China",
         "November",
         "Birds",
         "Mexico",
         "116 years",
         "Red",
         "Fox, wolf, or coyote fur"],
        "answer2" : 
        ["Black",  //Second answer to first question 
         "Beef",  //Second answer to second question 
         "Pig",  //Second answer to third question...
         "U.S.A.",
         "October",
         "Fish",
         "Italy",
         "27 years",
         "Blue",
         "Squirrel, goat, or ox fur"],
        "answer3" : 
        ["Orange",   //Third answer to first question 
         "Duck",   //Third answer to second question 
         "Rodent",   //Third answer to third question...
         "Spain",
         "September",
         "Humans",
         "Greece",
         "100 years",
         "Purple",
         "Llama, camel, or alpaca fur"],
        "answer4" : 
        ["There is no actual box",  //Fourth answer to first question 
         "Fish",  //Fourth answer to second question 
         "Dinosaur",  //Third answer to third question...
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

    function resetInd() {
        time = 5;
        intervalId = undefined;
        correctAnswer = false;
    }

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {
        time--;
        $("#timeRemaining").html("<h2>" + time + "</h2>");
        if (time === 0) {
          checkAnswer();
        }
      }

    function stop() {
        clearInterval(intervalId);
        $("#timeRemaining").empty();
    }

    function clearScreen() {
        $("#timeRemaining").empty();
        $("#question").empty();
        $("#answer1").empty();
        $("#answer2").empty();
        $("#answer3").empty();
        $("#answer4").empty();
    }

      function populateQuestion() {
        $("#question").html("<h2>" + question[q] + "</h2>");
        $("#answer1").html("<button>" + answers.answer1[q] + "</button>");
        $("#answer2").html("<button>" + answers.answer2[q] + "</button>");
        $("#answer3").html("<button>" + answers.answer3[q] + "</button>");
        $("#answer4").html("<button>" + answers.answer4[q] + "</button>");
 
    }
      

      function checkAnswer() {
        stop()
        var buttonNum = $(this).attr("value");
        console.log("buttonNum: " + buttonNum);
        // buttonNum = parseInt( buttonNum);
        console.log("answers.answerKey[q]: " + answers.answerKey[q]);
        if(buttonNum == answers.answerKey[q]) {
            console.log("buttonNumInt == answerKeyInt");
            correctAnswer = true;
            }
        else {
            correctAnswer = false;
            }
        clearScreen();
        console.log("correctAnswer: " + correctAnswer);
        if(correctAnswer) {
            console.log("if correctAnswer");
            wins++;
            $("#timeRemaining").html("<h2>CORRECT!</h2>");
        }
        else if (time === 0) {
            console.log("noSelection");
            noSelection++;
            $("#timeRemaining").html("<h2>Time's up!</h2>");
        }
        else {
            console.log("not correctAnswer");
            losses++;
            $("#timeRemaining").html("<h2>WRONG!</h2>");
        }
        writeAnswer();
    }

    function writeAnswer() {
        var correctNumber = answers.answerKey[q];
        var answerDisplay = "<h2>" + question[q] + "</h2><br><h2>Answer: ";
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
         
        $("#question").html("<h2>" + answerDisplay + "</h2>");
        q++;
        
        setTimeout(fiveSecondDelay, 5000);

        function fiveSecondDelay(){
            resetInd();
            begin();
        }      
      }
      
      function begin() {
        run();
        $("#start").empty();
        $("#timeRemaining").html("<h2>" + time + "</h2>");
        populateQuestion();
        $(".selection").click(checkAnswer); 
      }

    // if (time == 5) {
    if (firstTimeIn) {
        firstTimeIn = false;
        begin()
    }
      
      

    
}
