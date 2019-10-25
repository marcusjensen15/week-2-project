$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    // var questionOneTotal = parseInt($("input#question1").val()) + parseInt($("input#question2").val()) + parseInt($("input#question3").val());
    // console.log(questionOneTotal);

    // var questionOneTotal = parseInt($("input:radio[id=question1]:checked").val()) + parseInt($("input:radio[id=question2]:checked").val());
    // console.log(questionOneTotal);

    // if ("input:radio[id=question1]:checked" = ON){
    //   var value1 = 5;
    //   }
    //   else {
    //     value1 = 0;
    //   }
    var value1 = $("input:radio[id=question1]:checked");

      console.log(value1);


// input:radio[name=operator]:checked"

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

//Create chain of if-else statements seeing if the box is checked for each option. If an option is selected, assign value, if else assign zero
//need to find out what the 'checked' radio button is evaluating as
