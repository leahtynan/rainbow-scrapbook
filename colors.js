var currentColor = 0; 
var colors = ["Yellow", "Green", "Blue", "Purple", "Red", "Orange"]; // Colors that will be cycled through


function changeColor(direction) {
// *** Cycles through the color wheel one unit, direction dependent on whether left or right arrow is pressed ***
	if (direction == "left") {
	// TODO: Grab color slice's degree of rotation from JSON 
	//document.getElementById("color-wheel").style.transform = "rotate(-30deg)";
		if (currentColor == 0) {
			currentColor = 5;
		} else {
			currentColor--;
		}
	}
	else if (direction == "right") {
	// TODO: Grab color slice's degree of rotation from JSON 
	//document.getElementById("color-wheel").style.transform = "rotate(30deg)";
		if (currentColor == 5) {
			currentColor = 0;
		} else {
			currentColor++;
		}
	}
	console.log("The new color is: " + colors[currentColor]);
	// TODO: Update the color of the arrows and the title text
	// TODO: Change background color to the one specified in JSON
	// TODO: Update title text to be the name of the new color
	for (i = 0; i < 10; i++) { 
		// TODO: Load all the images, using filenames stored for the new color in JSON
    }
}

var leftArrow = document.getElementById("left-arrow"); 
leftArrow.addEventListener("click", function () { 
  changeColor("left");
});

var rightArrow = document.getElementById("right-arrow"); 
rightArrow.addEventListener("click", function () { 
  changeColor("right");
});

