// Back End Function(s)

/*
@scramble: take a number and return conditional output depending on the digits entered.
@number: string representing the number inputted by the user.
*/
function scramble(number) {
  var numberConverted = parseInt(number);
  var numArray = number.split("");

  if(numberConverted % 3 === 0) {
    displayError();
  } else if(number.indexOf("1") > -1) {
    for(i = 0; i < numArray.length; i++) {
      if(numArray[i] == "1") {
        displayBoop();
      }
    }
  } else if(number.indexOf("0") > -1) {
    for(i = 0; i < numArray.length; i++) {
      if(numArray[i] == "0") {
        displayBeep();
      }
    }
  } else {
    for(i = 0; i < numberConverted; i++) {
      displayOutput(i);
    }
  }

}

// Front End Function(s)
// Display default error message if input is divisible by 3
function displayError() {
  $("p#output").text("I'm sorry, Dave. I'm afraid I can't do that.");
}

// Display "beep!" for each "0" entered by the user
function displayBeep() {
  $("p#output").append("Beep! ");
}

// Display "boop!" for each "1" entered by the user
function displayBoop() {
  $("p#output").append("Boop! ");
}

// Display a range from 0 to @number if all above conditions
// fail.
function displayOutput(number) {
  $("p#output").append(number + " ");
}


$(document).ready(function() {

  $("#entryForm").submit(function(event) {
    event.preventDefault();
    var number = ($("input#numberInput").val());
    scramble(number);
  });

});
