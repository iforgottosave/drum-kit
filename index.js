// Detecting button press

var drumButtonNum = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtonNum; i++) {

	document.querySelectorAll(".drum")[i].addEventListener("click",
		function () {
			var buttonInnerHtml = this.innerHTML;
			makeSound(buttonInnerHtml);
			buttonAnimation(buttonInnerHtml);
		});
}

// Detecting keyboard press

document.addEventListener("keydown", function (event) {

	// passes `event` as a param into above func
	// to eliminate deprecation warning in
	// makeSound(event.key);
	makeSound(event.key);

	buttonAnimation(event.key);

});

function makeSound(key) {

	switch (key) {

		case "w":
			var drumTom1 = new Audio("sound/tom1.mp3");
			drumTom1.play();
			break;
		case "a":
			var drumTom2 = new Audio("sound/tom2.mp3");
			drumTom2.play();
			break;
		case "s":
			var drumTom3 = new Audio("sound/tom3.mp3");
			drumTom3.play();
			break;
		case "d":
			var drumTom4 = new Audio("sound/tom4.mp3");
			drumTom4.play();
			break;
		case "j":
			var drumSnare = new Audio("sound/snare.mp3");
			drumSnare.play();
			break;
		case "k":
			var drumKick = new Audio("sound/kick.mp3");
			drumKick.play();
			break;
		case "l":
			var drumCrash = new Audio("sound/crash.mp3");
			drumCrash.play();
			break;

		default: console.log(buttonInnerHtml)

	}
}

function buttonAnimation(currentKey) {

	var activeButton = document.querySelector("." + currentKey);

	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}