var position = 0; 
var colors = ["Yellow", "Green", "Blue", "Purple", "Red", "Orange"]; 
// TODO: Could the asset filenames be stored in XML instead? Each entry would also contain a description of the image and its color.
// A loop would do the following:
// 1. Check that its value for color matches the current color selected in the wheel
// 2. If it is a color match (i.e. the asset should be displayed), then grab the filename to display it and description for alt and title text.
var data = {
	"Yellow": {
		"angle": -30,
		"hex": "ffff00",
		"files": ["leaf_yellow", "star", "rubber-ducky_yellow", "rubber-ducky_yellow", "nail-polish_yellow", "star", "leaf_yellow", "star"],
		"description": ["leaf", "star", "rubber ducky", "rubber ducky", "nail polish", "star", "leaf", "star"],
		"shapes": ["vertical", "square", "horizontal", "horizontal", "vertical", "square", "leaf_yellow", "square"]
	},
	"Green": {
		"angle": -90,
		"hex": "63bb45",
		"files": ["bow_green", "measuring-cup", "rubber-ducky_green", "hedgehog_green", "nail-polish_green", "measuring-cup", "snake-plant", "succulent"],
		"description": ["bow", "measuring cup", "rubber ducky", "hedgehog", "nail polish", "measuring cup", "snake plant", "succuluent"],
		"shapes": ["square", "horizontal", "horizontal", "horizontal", "vertical", "horizontal", "square", "square"]
	},
	"Blue": {
		"angle": -150,
		"hex": "0000ff",
		"files": ["glass-jar_blue", "hedgehog_blue", "wavy-glass-jar", "glass-bird", "nail-polish_blue", "hedgehog_blue", "piggy", "wavy-glass-jar"],
		"description": ["cylindrical glass jar", "hedgehog", "wavy glass jar", "glass bird", "nail polish", "hedgehog", "glass piggy", "wavy glass jar"],
		"shapes": ["vertical", "horizontal", "vertical", "square", "vertical", "horizontal", "square", "vertical"]
	},
	"Purple": {
		"angle": 150,
		"hex": "6f22b6",
		"files": ["amethyst-shard", "dumbbell", "glass-jar_purple", "amethyst-chunk", "nail-polish_purple", "coil", "amethyst-chunk", "dumbbell"],
		"description": ["amethyst shard", "dumbbell", "cylindrical glass jar", "amethyst chunk", "nail polish", "coil of fabric", "amethyst chunk", "dumbbell"],
		"shapes": ["horizontal", "horizontal", "vertical", "horizontal", "vertical", "square", "horizontal", "horizontal"]
	},
	"Red": {
		"angle": 90,
		"hex": "ff0000",
		"files": ["clip", "leaf_red", "vase", "bow_red", "nail-polish_red", "bow_red", "vase", "leaf_red"],
		"description": ["clip", "leaf", "vase", "bow", "nail polish", "bow", "vase", "leaf"],
		"shapes": ["horizontal", "square", "vertical", "square", "vertical", "square", "vertical", "square"]
	},
	"Orange": {
		"angle": 30,
		"hex": "ffa500",
		"files": ["leaf_orange", "citrine", "cat-dish", "leaf_orange", "nail-polish_orange", "leaf_orange", "leaf_orange", "citrine"]
		"description": ["leaf", "citrine", "cat-shaped dish", "leaf", "nail polish", "leaf", "leaf", "citrine"],
		"shapes": ["vertical", "square", "horizontal", "vertical", "vertical", "vertical", "vertical", "square"]
	},
}

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
	document.getElementById("title").innerHTML = colors[position];
	var images = document.getElementsByClassName('image-to-update');
	for (i = 0; i < 8; i++) { 
		console.log("Filename: " + data[color].files[i]);
		images[i].src = "images/" + data[color].files[i] + ".png";
		images[i].alt = color + " " + "data[color].description[i] + ".png";
		images[i].title = color + " " + "data[color].description[i] + ".png";
		// TODO: Set grid size based on image shape
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

