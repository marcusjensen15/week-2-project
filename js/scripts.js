// $(document).ready(function() {
//   $("form#quiz").submit(function(event) {
//
//
//     var value1 = parseInt($("#question1").val());
//     var value2 = parseInt($("#question2").val());
//     var value3 = parseInt($("#question3").val());
//     var value4 = parseInt($("#question4").val());
//     var value5 = parseInt($("#question5").val());
//     var total = value1 + value2 + value3 + value4 + value5;
//     var textResult;
//
//
//
//     console.log(total);
//
//
//   if (total <= 25){
//
//     textResult = "You should try out Javascript!";
//     console.log(textResult);
//   }else if(total > 25 && total <= 50){
//     textResult = "Check out Go!";
//     console.log(textResult);
//   }else if(total > 50 && total <= 70){
//     textResult="Python is the one for you!";
//     console.log(textResult);
//   }else if(total > 71 && total <= 80){
//     textResult="Try out ruby!";
//     console.log(textResult);
//   }else{
//     textResult="Have a go at C#!";
//     console.log(textResult);
//   }
//
//   $("#result").text(textResult).show();
//
//   event.preventDefault();
//   });
// });


// EVERYTHING ABOVE THIS LINE IS FUNCTIONAL CODE MEEITING ALL REQUIREMENTS

// Begining of experiemental section:





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

//add framework for doing the same thing with arrays, functions and loops
