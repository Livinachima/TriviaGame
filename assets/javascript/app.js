$(document).ready(function() {
   var questionCounter = 0;
   var selecterAnswer;
   var theClock;
   var counter = 0;
   var score = 0;
   var findAnswers;

 //create questions and Answers
//counter is the way we are logging what questions to loop through.  the counter starts at 0 and as each answer is chosen the number is incremented by 1 to get the next question in the question array


   var questions = [{
   question: ["What was the name of the second Indiana Jones movie, released in 1984?"],
   choices: ["Raiders of the lost Ark", "Indiana Jones and the Temple of Doom", 'Indiana Jones and the Last Crusade'],
   answer: 1,
   correct: "Indiana Jones and the Temple of Doom"
  }, {
   question: ["Who stars in the transporter?"],
   choices: ["Bruce Willis", "Jason Statham", 'Sean Connery', 'Tom Cruise'],
   answer: 1,
   correct: "Jason Statham"
  }, {
   question: ["Which movie features Bruce Willis as John McClane, a New York police officer, taking on a gang of criminals in a Los Angeles skyscraper on Christmas Eve?"],
   choices: ["16 Blocks", "RED", 'The Fifth Element', 'Die Hard'],
   answer: 3,
   correct: "Die Hard"
  }, {
   question: ["Who is the star in Jack Reacher?"],
   choices: ["Tom Cruise", "Ben Affleck", 'Matt Damon', 'Jamie Foxx'],
   answer: 0,
   correct: "Tom Cruise"
  }, {
   question: ["In which year were the Academy Awards, or Oscars, first presented?"],
   choices: ["1930", "1966", '1929', '.1909'],
   answer: 2,
   correct: "1929"
  }, {
   question: ["What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?"],
   choices: ["Frodo Baggins", "Bilbo Baggins", 'Gandalf', 'Aragorn'],
   answer: 0,
   correct: "Frodo Baggins"
  }, {
   question: ["Which actress plays Katniss Everdeen in the Hunger Games movies?"],
   choices: ["Natalie Dormer", "Jennifer Lawrence", 'Julianne Moore', 'Elizabeth Banks'],
   answer: 1,
   correct: "Jennifer Lawrence"
  }, {
   question: ["When was the 1st Fast n Furious created?"],
   choices: ["2005", "2011", '2001', '2003'],
   answer: 2,
   correct: "2001"
  }, {
   question: ["What is the name of the kingdom where the 2013 animated movie Frozen is set?"],
   choices: ["Dignitaries", "Arendelle", 'Norwegian', 'kingdom of God'],
   answer: 1,
   correct: "Arendelle"
  }, {
   question: ["Which English director was responsible for the epic movie Gladiator in 2000?"],
   choices: ["Russell Crowe", "Joaquin phoenix", 'Ridley Scott', 'Connie Nielsen'],
   answer: 2,
   correct: "Ridley Scott"
  }, ];

  var $questionText = $('#question').hide();
  var $answerButtons = $('#answerBtn').hide();
  var $instructions = $('#instructions');
  var $testQuestion = $('#testQuestion').hide();
  var $Time = $('#playTime');

  var $changeBtn = $('#changeBtn');
  $changeBtn.hide();

   $changeBtn.click(function(event) {
    $('#answerBtn').removeClass('btn-flat disabled').addClass('btn red waves-effect');
    counter++;
    gameEnd();
    changeQuestion();
    testQuestion();
    console.log('clicked Me!');
    console.log(counter);
  });

   //creates each trivia question & answers
	function createQuestion() {
		timer.run();

	// this hides the buttons we aren't using
	};
var $startGameBtn = $('#startGameBtn').click(function(event) {
    $startGameBtn.hide('slow/1000/fast', function() {});
    $instructions.hide('slow/1000/fast', function() {});
    $changeBtn.show('slow/1000/fast', function() {});
    $questionText.show('slow/1000/fast', function() {});
    $answerButtons.show('slow/1000/fast', function() {});
    $testQuestion.show('slow/1000/fast', function() {});
    Timer();

  });

   (function populateDom() {
    $('#testQuestion').text("");
    $('#question').text(questions[counter].question);
    for (var i = 0; i < questions[counter].choices.length; i++) {
      var populateButtons = $('#answerBtn')[i];
      $(populateButtons).text(questions[counter].choices[i]);
    }
    findAnswers = questions[counter].correct;
  })();

  function changeQuestion() {
    for (var i = 0; i < questions[counter].question.length; i++) {
      var populateQuestions = $('#question');
      $(populateQuestions).text(questions[counter].question[i]);
    }

    for (var j = 0; j < questions[counter].choices.length; j++) {
      var populateButtons = $('#answerBtn')[j];
      $(populateButtons).text(questions[counter].choices[j]);
    }
    findAnswers = questions[counter].correct;
  }

  var pause = false;
  var Timer = function() {
  var time = 60;

    var gameTimer = setInterval(function() {
      time--;
      $Time.text(time);
      console.log(time);

   if (time === 0 || pause === true) {
         clearInterval(gameTimer);
         checkScore();
        console.log('Timer has ended!');
      }

      if(time <= 20){
        
      }
    }, 1000);
  };

    function scoreUpdate(){
    score += 10;
    $('#playScore').text(score);
  }

  function testQuestion(){
    $('#testQuestion').text(counter + 1);
  }

  $('#0').click(function(event) {

    if ($('#0').text() === findAnswers){
      scoreUpdate();
      gameEnd();

      $('#answerBtn').attr('class', 'btn-flat disabled');
      console.log(score);
    }else{
      $('#answerBtn').attr('class', 'btn-flat disabled');
    }

  });

    $('#1').click(function(event){

      if ($('#1').text() === findAnswers){
        scoreUpdate();
        gameEnd();

        $('#answerBtn').attr('class', 'btn-flat disabled');
        console.log(score);
      }else{
        $('#answerBtn').attr('class', 'btn-flat disabled');

      }

    });

      $('#2').click(function(event) {

        if ($('#2').text() === findAnswers){
          scoreUpdate();
          gameEnd();

          $('#answerBtn').attr('class', 'btn-flat disabled');
          console.log(score);
        }else{
          $('#answerBtn').attr('class', 'btn-flat disabled');
        }

      });

        $('#3').click(function(event) {

          if ($('#3').text() === findAnswers){
            scoreUpdate();
            gameEnd();
            $('#answerBtn').attr('class', 'btn-flat disabled');
            console.log(score);
          }else{
            $('#answerBtn').attr('class', 'btn-flat disabled');
          }

        });
        //Checks to see if all the questions where answered correctly.
        function checkScore(){
          if($('#playScore').text() >= 100){
            alert('You won!');
          }else if ($('#playScore').text() < 100) {
            pause = true;
            alert('You lost!');
          }

        }
        // Ends game when questions end.
        function gameEnd(){
          if(counter > 9){
            $changeBtn.hide('slow/1000/fast', function() {});
            $('#answerBtn').attr('class', 'btn-flat disabled');
            pause = true;
            checkScore();
          }
        }
});