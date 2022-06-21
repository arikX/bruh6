
// Detecting Button Press

var numberOfButtons = document.querySelectorAll(".drum").length; // This targets all of the elements that have a selector of .drum, the .length shows the code how many elementes we've got tha have a class of drum and that number helps us determine when to stop looping

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {  // This looks through our document, looking for all of the selectors that have the class .drum, and then selecting each individual from this array using [i] to add an event listener to it

  var buttonInnerHTML = this.innerHTML; // That's the button that's triggered the event. So if a button was pressed, and then it checks the innerHTML of the button that was pressed, and then it is sent to makeSound, in order to play the relevant sound
  makeSound(buttonInnerHTML); // The inner HTML of the button that got presed, i.e which button was pressed

buttonAnimation(buttonInnerHTML);

});
}


// Detecting Keyboard press

document.addEventListener("keydown", function(event) { // This makes it so the event listener is added into the entire web page so that the entire web page is listening for keyboard presses. The event parameter lets us tap into the event that triggered the key press event, that contains the property .key, which tells us which keybord key was pressed

makeSound(event.key) // If a keydown was detected from the previous line, then it sends the event.key (the key property) of the event, from here it is sent to the function makeSound(key) in order to make the sound that we want for that key

buttonAnimation(event.key);

});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default: console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) { // Finds the active button based on the current key that got pressed

var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed"); // Adds the pressed class to the button to give it a shadow background

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100); // After a wait of 0.1 second, removes that class from the class list

}
