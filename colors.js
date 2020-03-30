// *** Global Variables ***
var position = 0; // The default position in the color wheel is Yellow (#0), Green is #1, Blue is #2...
var maxNumberItems = 6; // Green is the color with the most number of items (as of March 14, 2020)
var colors = ["Yellow", "Green", "Blue", "Purple", "Red", "Orange"]; 

// *** Data About Objects in Scrapbook, Per Color ***
var data = {
	"Yellow": {
		"angle": -30,
		"hex": "ffff00",
		"files": ["leaf_yellow", "star", "rubber-ducky_yellow", "goldfish", "nail-polish_yellow", "goose"],
		"description": ["leaf", "star", "rubber ducky", "goose", "nail polish", "goldfish"],
		"shapes": ["vertical", "square", "square", "square", "vertical", "square"]
	},
	"Green": {
		"angle": -90,
		"hex": "63bb45",
		"files": ["bow_green", "rubber-ducky_green", "hedgehog_green", "nail-polish_green", "snake-plant", "measuring-cup"],
		"description": ["bow", "rubber ducky", "hedgehog", "nail polish", "measuring cup", "snake plant", "measuring cup"],
		"shapes": ["square", "square", "horizontal", "vertical", "square", "horizontal"]
	},
	"Blue": {
		"angle": -150,
		"hex": "0000ff",
		"files": ["mug", "hedgehog_blue", "wavy-glass-jar", "glass-bird", "nail-polish_blue", "piggy"],
		"description": ["mug", "hedgehog", "wavy glass jar", "glass bird", "nail polish", "glass piggy"],
		"shapes": ["square", "horizontal", "vertical", "horizontal", "vertical", "square"]
	},
	"Purple": {
		"angle": 150,
		"hex": "6f22b6",
		"files": ["amethyst-shard", "dumbbell", "bow_purple", "amethyst-chunk", "nail-polish_purple", "coil"],
		"description": ["amethyst shard", "dumbbell", "bow", "amethyst chunk", "nail polish", "coil of fabric"],
		"shapes": ["vertical", "horizontal", "square", "horizontal", "vertical", "square"]
	},
	"Red": {
		"angle": 90,
		"hex": "ff0000",
		"files": ["clip_red", "leaf_red", "vase", "bow_red", "nail-polish_red", "bear"],
		"description": ["clip", "leaf", "vase", "bow", "nail polish", "bear"],
		"shapes": ["square", "square", "vertical", "square", "vertical", "square"]
	},
	"Orange": {
		"angle": 30,
		"hex": "ffa500",
		"files": ["leaf_orange", "citrine", "cat-dish", "nail-polish_orange", "terracotta", "bunny"],
		"description": ["leaf", "citrine", "cat-shaped dish", "nail polish", "bear", "bunny"],
		"shapes": ["square", "square", "horizontal", "vertical", "square", "vertical"]
	},
}
// TODO: Could the asset filenames be stored in XML instead? Each entry would also contain a description of the image and its color.
// A loop would do the following:
// 1. Check that its value for color matches the current color selected in the wheel
// 2. If it is a color match (i.e. the asset should be displayed), then grab the filename to display it and description for alt and title text.

// *** Color Wheel Turn Feedback ***
function changeColor(direction) {
// Cycles through the color wheel one unit, direction dependent on whether left or right arrow is pressed 
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
	// 2. Set any remaining pictures to blank
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

// *** Listeners ***
var leftArrow = document.getElementById("left-arrow"); 
leftArrow.addEventListener("click", function () { 
  changeColor("left");
});

var rightArrow = document.getElementById("right-arrow"); 
rightArrow.addEventListener("click", function () { 
  changeColor("right");
});

