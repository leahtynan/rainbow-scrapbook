var position = 0; 
var colors = ["Yellow", "Green", "Blue", "Purple", "Red", "Orange"]; 
var data = {
	"Yellow": {
		"angle": -30,
		"hex": "ffff00",
		"files": ["leaf_yellow", "star", "leaf_yellow", "star", "leaf_yellow", "star", "leaf_yellow", "star"]
	},
	"Green": {
		"angle": -90,
		"hex": "63bb45",
		"files": ["hedgehog_green", "measuring-cup", "rubber-ducky_green", "hedgehog_green", "measuring-cup", "rubber-ducky_green", "hedgehog_green", "measuring-cup"]
	},
	"Blue": {
		"angle": -150,
		"hex": "0000ff",
		"files": ["hedgehog_blue", "hedgehog_blue", "hedgehog_blue", "hedgehog_blue", "hedgehog_blue", "hedgehog_blue", "hedgehog_blue", "hedgehog_blue"]
	},
	"Purple": {
		"angle": 150,
		"hex": "6f22b6",
		"files": ["coil", "dumbbell", "amethyst-chunk", "amethyst-chunk", "coil", "amethyst-shard", "amethyst-shard", "dumbbell"]
	},
	"Red": {
		"angle": 90,
		"hex": "ff0000",
		"files": ["vase", "leaf_red", "vase", "leaf_red", "vase", "leaf_red", "vase", "leaf_red"]
	},
	"Orange": {
		"angle": 30,
		"hex": "ffa500",
		"files": ["leaf_orange", "citrine", "leaf_orange", "leaf_orange", "leaf_orange", "citrine", "leaf_orange", "citrine"]
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

