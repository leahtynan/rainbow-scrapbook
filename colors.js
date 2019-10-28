var position = 0; 
var colors = ["Yellow", "Green", "Blue", "Purple", "Red", "Orange"]; 
var data = {
	"Yellow": {
		"angle": -30,
		"hex": "ffff00",
		"files": ["a", "b", "c", "d"]
	},
	"Green": {
		"angle": -90,
		"hex": "63bb45",
		"files": ["a", "b", "c", "d"]
	},
	"Blue": {
		"angle": -150,
		"hex": "0000ff",
		"files": ["a", "b", "c", "d"]
	},
	"Purple": {
		"angle": 150,
		"hex": "6f22b6",
		"files": ["a", "b", "c", "d"]
	},
	"Red": {
		"angle": 90,
		"hex": "ff0000",
		"files": ["a", "b", "c", "d"]
	},
	"Orange": {
		"angle": 30,
		"hex": "ffa500",
		"files": ["a", "b", "c", "d"]
	},
}

// TODO: Set up all the CSS for the default color (yellow) on page load

function changeColor(direction) {
// *** Cycles through the color wheel one unit, direction dependent on whether left or right arrow is pressed ***
	if (direction == "left") {
		if (position == 0) {
			position = 5;
		} else {
			position--;
		}
	}
	else if (direction == "right") {
		if (position == 5) {
			position = 0;
		} else {
			position++;
		}
	}
	var color = colors[position];
	var prevColor = colors[position - 1];
	var nextColor = colors[position + 1]
	document.body.style.backgroundColor = data[color].hex;
	document.getElementById("color-wheel").style = "transform: rotate(" + data[color].angle + "deg)";
	document.getElementById("left-arrow").style.borderRight = "22px solid #" + data[prevColor].hex;
	document.getElementById("right-arrow").style.borderLeft = "22px solid #" + data[nextColor].hex;
	document.getElementById("title").innerHTML = colors[position];
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

