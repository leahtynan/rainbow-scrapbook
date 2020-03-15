var position = 0; // The default position in the color wheel is Yellow
var maxNumberItems = 7; // Green is the color with the most number of items (as of March 14, 2020)
var colors = ["Yellow", "Green", "Blue", "Purple", "Red", "Orange"]; 
// TODO: Could the asset filenames be stored in XML instead? Each entry would also contain a description of the image and its color.
// A loop would do the following:
// 1. Check that its value for color matches the current color selected in the wheel
// 2. If it is a color match (i.e. the asset should be displayed), then grab the filename to display it and description for alt and title text.
var data = {
	"Yellow": {
		"angle": -30,
		"hex": "ffff00",
		"files": ["leaf_yellow", "star", "rubber-ducky_yellow", "nail-polish_yellow"],
		"description": ["leaf", "star", "rubber ducky", "rubber ducky"],
		"shapes": ["vertical", "square", "square", "vertical"]
	},
	"Green": {
		"angle": -90,
		"hex": "63bb45",
		"files": ["bow_green", "measuring-cup", "rubber-ducky_green", "hedgehog_green", "nail-polish_green", "snake-plant", "succulent"],
		"description": ["bow", "measuring cup", "rubber ducky", "hedgehog", "nail polish", "measuring cup", "snake plant", "succuluent"],
		"shapes": ["square", "horizontal", "square", "horizontal", "vertical", "square", "square"]
	},
	"Blue": {
		"angle": -150,
		"hex": "0000ff",
		"files": ["blue-bottle", "hedgehog_blue", "wavy-glass-jar", "glass-bird", "nail-polish_blue", "piggy"],
		"description": ["cylindrical glass jar", "hedgehog", "wavy glass jar", "glass bird", "nail polish", "glass piggy"],
		"shapes": ["vertical", "horizontal", "vertical", "horizontal", "vertical", "square"]
	},
	"Purple": {
		"angle": 150,
		"hex": "6f22b6",
		"files": ["amethyst-shard", "dumbbell", "glass-jar_purple", "amethyst-chunk", "nail-polish_purple", "coil"],
		"description": ["amethyst shard", "dumbbell", "cylindrical glass jar", "amethyst chunk", "nail polish", "coil of fabric"],
		"shapes": ["vertical", "horizontal", "square", "horizontal", "vertical", "square"]
	},
	"Red": {
		"angle": 90,
		"hex": "ff0000",
		"files": ["clip", "leaf_red", "vase", "bow_red", "nail-polish_red"],
		"description": ["clip", "leaf", "vase", "bow", "nail polish"],
		"shapes": ["square", "square", "vertical", "square", "vertical"]
	},
	"Orange": {
		"angle": 30,
		"hex": "ffa500",
		"files": ["leaf_orange", "citrine", "cat-dish", "nail-polish_orange"],
		"description": ["leaf", "citrine", "cat-shaped dish", "nail polish"],
		"shapes": ["square", "square", "horizontal", "vertical"]
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
	var images = document.getElementsByClassName('image-to-update'); // The images
	var items = document.getElementsByClassName('item'); // The frames that hold the images
	var numberItems = data[color].files.length;
	// 1. Fill in images for items in this color's set
	for (i = 0; i < numberItems; i++) { 
		// TODO: Need to load this data for Yellow when the page is opened
		images[i].src = "images/" + data[color].files[i] + ".png";
		images[i].alt = color + " " + data[color].description[i];
		images[i].title = color + " " + data[color].description[i];
		var shape = data[color].shapes[i];
		clearPreviousShape(items[i]);
		// If the item's shape is not square, add additional classes to set those propo
		if (shape == "vertical" || shape == "horizontal") {
			items[i].classList.add(shape);
		}
    }
	// 2. Keep all others blank
	if (numberItems < maxNumberItems) {
		var difference = maxNumberItems - numberItems;
		for (i = numberItems; i < maxNumberItems; i++) {
			images[i].src = "images/blank.png";
			images[i].alt = "Empty image";
			images[i].title = "Empty image";
			clearPreviousShape(items[i]);
			items[i].classList.add("invisible"); 
		}
		
	}
}

function clearPreviousShape(item) {
	if (item.classList.length > 1) {
		var classToRemove = item.classList[1];
		item.classList.remove(classToRemove);
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

