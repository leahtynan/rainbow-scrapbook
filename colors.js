var position = 0; 
var colors = ["Yellow", "Green", "Blue", "Purple", "Red", "Orange"]; 
var data = {
	"Yellow": {
		"angle": -30,
		"hex": "ffff00",
		"files": ["leaf_yellow", "star", "rubber-ducky_yellow", "rubber-ducky_yellow", "nail-polish_yellow", "star", "leaf_yellow", "star"]
		// TODO: Add alt text for each picture
		// TODO: Note whether image is horizontal, vertical, or square, and generate the appropriate Masonry classes accordingly
	},
	"Green": {
		"angle": -90,
		"hex": "63bb45",
		"files": ["bow_green", "measuring-cup", "rubber-ducky_green", "hedgehog_green", "nail-polish_green", "measuring-cup", "snake-plant", "succulent"]
	},
	"Blue": {
		"angle": -150,
		"hex": "0000ff",
		"files": ["glass-jar_blue", "hedgehog_blue", "wavy-glass-jar", "glass-bird", "nail-polish_blue", "hedgehog_blue", "piggy", "wavy-glass-jar"]
	},
	"Purple": {
		"angle": 150,
		"hex": "6f22b6",
		"files": ["amethyst-shard", "dumbbell", "glass-jar_purple", "amethyst-chunk", "nail-polish_purple", "coil", "amethyst-chunk", "dumbbell"]
	},
	"Red": {
		"angle": 90,
		"hex": "ff0000",
		"files": ["clip", "leaf_red", "vase", "bow_red", "nail-polish_red", "bow_red", "vase", "leaf_red"]
	},
	"Orange": {
		"angle": 30,
		"hex": "ffa500",
		"files": ["leaf_orange", "citrine", "cat-dish", "leaf_orange", "nail-polish_orange", "leaf_orange", "leaf_orange", "citrine"]
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
		// TODO: Add alt text
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

