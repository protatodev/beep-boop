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
    for(i = 0; i <= numberConverted; i++) {
      displayOutput(i);
    }
  }

}

/*
Display a running time console that shows the elapse time since the last submission.
*/
var timer = null;

function startTimer() {
  var seconds = 0;
  var minutes = 0;

  timer = setInterval(function() {
    seconds++;

    // Display the result in the element with id="outputFooter"
    document.getElementById("outputFooter").innerHTML = "Last updated: " + parseInt(seconds / 60) + "m " + (seconds % 60) + "s " + "ago.";

  }, 1000);

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

// Clear all form and output fields
function clearFields() {
  var form = document.getElementById("entryForm");
  clearInterval(timer);
  $("p#output").html("");
  $("#outputFooter").html("");
  form.reset();
}

// Create message showing the last number entered
function createMessage(number) {
  $("span#message").text(number);
  $(".pre-hidden").hide().fadeIn(1500);
}


$(document).ready(function() {

  $("#entryForm").submit(function(event) {
    event.preventDefault();
    var number = ($("input#numberInput").val());
    clearFields();
    scramble(number);
    startTimer();
    createMessage(number)
  });

});
