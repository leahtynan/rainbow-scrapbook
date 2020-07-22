var images;
var imagesLoaded = 0;
var imageContainers = document.getElementsByClassName("item");
var imagesToUpdate = document.getElementsByClassName("image-to-update");
var numberColors = 6;
var numberItemsPerColor = 6;
var numberImages = numberColors * numberItemsPerColor;

// Note: The order of colors is:
// 0: Yellow
// 1: Green
// 2: Blue
// 3: Purple
// 4: Red
// 5: Orange

// TODO: Show a loading message/animation until image loading is complete
console.log(images);
setUpImageArray();
console.log(images);

function setUpImageArray() {
	// 1. Set up a 2D array to store images for each color:
	// - The 1st level of the array array is for colors
	// - The 2nd level of the array is for the items belonging to each color
	images = new Array(numberColors);
	for(i = 0; i < numberItemsPerColor; i++) {
	  images[i] = Array(numberItemsPerColor);
	}
	console.log("Images...");
	console.log(images);
	load(images);
}


function load(images) { 
	console.log("Loading images...");
	for(i = 0; i < numberColors; i++) {
		console.log("-- Color: " + colors[i]);
		var color = colors[i];
		console.log("TEST: " + data[color].angle);
		for(j = 0; j < numberItemsPerColor; j++) {
			var imageToLoad = new Image();
			imageToLoad.src = "images/"+ data[color].files[j] + ".png";	
			imageToLoad.alt = colors + " " + data[color].description[i];
			imageToLoad.title = color + " " + data[color].description[i];
			imageToLoad.onload = function() {
				imagesLoaded++;
				console.log("Loaded: " + color + " " + data[color].description[i]);
				images.push(imageToLoad);
				if(imagesLoaded == numberImages) {
					console.log("Loading complete!");
					// TODO: Load the color yellow 
					// Hide the preloader
				}
			}
		}
		
	}
}

// TODO: When the color changes, remove all the images for that color and load ones for the next color
// function animate(frame) {
// 	var imageToRemove = document.getElementById("animation-frame");
// 	imageToRemove.parentNode.removeChild(imageToRemove);
// 	var newImage = images[frame - 1];
// 	animationContainer.appendChild(newImage);
// }
function updateItemSet(colorNumber) {
	for(i = 0; i < imagesToUpdate.length; i++) {
		var imageToRemove = imagesToUpdate[i];
		imageToRemove.parentNode.removeChild(imageToRemove);
		// or imageContainers[i].removeChild(imageToRemove)?
		var newImage = images[colorNumber][i];
		imageContainers[i].appendChild(newImage);
	}
	
}