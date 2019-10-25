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

$(document).ready(function() {
  $("form#quiz").submit(function(event) {


    var value1 = parseInt($("#question1").val());
    var value2 = parseInt($("#question2").val());
    var value3 = parseInt($("#question3").val());
    var value4 = parseInt($("#question4").val());
    var value5 = parseInt($("#question5").val());
    var arrayAnswers = [value1,value2,value3,value4,value5];
    var total = 0;
    var textResult;

    for(i=0; i < arrayAnswers.length; i++){

      total += arrayAnswers[i];
    }



    console.log(total);


  if (total <= 25){

    textResult = "You should try out Javascript!";
    console.log(textResult);
  }else if(total > 25 && total <= 50){
    textResult = "Check out Go!";
    console.log(textResult);
  }else if(total > 50 && total <= 70){
    textResult="Python is the one for you!";
    console.log(textResult);
  }else if(total > 71 && total <= 80){
    textResult="Try out ruby!";
    console.log(textResult);
  }else{
    textResult="Have a go at C#!";
    console.log(textResult);
  }





  nameDisplay();

  $("#result").text(textResult).show();

  event.preventDefault();
  });

});

function nameDisplay(){
  var name = $("#name").val();
  name = name.split("");
  name = name.reverse();
  name = name.toString();
  name = name.replace(/,/g,"");
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  $("#nameResult").text("Your name backwards is "+name +"." +" You should feel really good about that!").show();


}

function hide(){
  $("#nameResult").text("Your name backwards is "+name +"." +" You should feel really good about that!").toggle();

  $("#result").toggle();

}














// Project Requirements:
//
// -Collect input from user via radial buttons on form submit. Assign a value to each user input;
// -Create variables for each user input;
// -Create a variable that serves as a 'counter'. To contain the user's final score.
// -Create a function to calculate the user's final score.
// -Use branching to determine which language is best for that user based on their score.
// -Show result of score based on user input.
//
// Create chain of if-else statements seeing if the box is checked for each option. If an option is selected, ///assign value, if else assign zero
// need to find out what the 'checked' radio button is evaluating as
//
// add framework for doing the same thing with arrays, functions and loops


//write a function that will take the persons name, spell it backwards, and present it to them

// In HTML, create an area where the user can input their name.
// Take name as string, convert to array.
// Use array method to flip string backwards
// Convert back to string
// Present name with silly message

//above complete. Looking into next weeks lesson to see if anything else I can incorporate
//will create button to hide result and play again!

//markdown file complete, staging for final commit
