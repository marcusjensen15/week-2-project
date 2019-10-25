$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var questionOneTotal = parseInt($("input#question1").val()) + parseInt($("input#question2").val()) + parseInt($("input#question3").val());
    console.log(questionOneTotal);





  event.preventDefault();
  });
});





// Project Requirements:
//
// -Collect input from user via radial buttons on form submit. Assign a value to each user input;
// -Create variables for each user input;
// -Create a variable that serves as a 'counter'. To contain the user's final score.
// -Create a function to calculate the user's final score.
// -Use branching to determine which language is best for that user based on their score.
// -Show result of score based on user input.
