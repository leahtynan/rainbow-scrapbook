var images;
var imagesLoaded = 0;
var imageContainers = document.getElementsByClassName("item");
var imagesToUpdate = document.getElementsByClassName("image-to-update");
var numberColors = 6;
var numberItemsPerColor = 6;
var numberImages = numberColors * numberItemsPerColor;
var preloader = document.getElementById("preloader"); // Set this to showing when the page loads
var itemsGrid = document.getElementById("grid"); // This is the grid that holds the pictures, don't show until photos have loaded
// ^ It will be set to display: none when the page loads

// Note: The order of colors is:
// 0: Yellow - this is the color that shows when the page loads
// 1: Green
// 2: Blue
// 3: Purple
// 4: Red
// 5: Orange

// TODO: Show a loading message/animation until image loading is complete
setUpImageArray();

function setUpImageArray() {
	// 1. Set up a 2D array to store images for each color:
	// - The 1st level of the array array is for colors
	// - The 2nd level of the array is for the items belonging to each color
	images = new Array(numberColors);
	for(i = 0; i < numberItemsPerColor; i++) {
	  images[i] = Array(numberItemsPerColor);
	}
	for(i = 0; i < numberColors; i++) {
		for(j = 0; j < numberItemsPerColor; j++) {
			load(i, j);
		}
	}
}


function load(colorNumber, itemNumber) { 
	var imageToLoad = new Image();
	var color = colors[colorNumber];
	imageToLoad.src = "images/"+ data[color].files[itemNumber] + ".png";	
	imageToLoad.alt = color + " " + data[color].description[itemNumber];
	imageToLoad.title = color + " " + data[color].description[itemNumber];
	imageToLoad.onload = function() {
		imagesLoaded++;
		//console.log("Loaded: " + color + " " + data[color].description[itemNumber]);
		images[colorNumber][itemNumber] = imageToLoad;
		if(imagesLoaded == numberImages) {
			// Load the images in the set for the color yellow
			updateItemSet(0);
			// Hide the preloader and show the grid of images
			preloader.style.display = "none";
			grid.style.display = "block";
		}
	}		
}

function updateItemSet(colorNumber) {
	console.log("Updating image set.........");
	console.log(imagesToUpdate.length);
	console.log(imagesToUpdate);
	console.log(imagesToUpdate[0]);
	console.log(imagesToUpdate[1]);
	console.log(imagesToUpdate[2]);
	console.log(imagesToUpdate[3]);
	console.log(imagesToUpdate[4]);
	console.log(imagesToUpdate[5]);
	// for(i = 0; i < 6; i++) {
	// 	console.log(i + "---------");
	// 	var imageToRemove = imagesToUpdate[i]; // The image UI in the DOM
	// 	imageToRemove.parentNode.removeChild(imageToRemove);
	// 	var newImage = images[colorNumber][i]; // The data for the image to be loaded as UI
	// 	imageContainers[i].appendChild(newImage);
	// }
	// var imageToRemove0 = imagesToUpdate[0]; // The image UI in the DOM
	// imageToRemove0.parentNode.removeChild(imageToRemove0);
	// var newImage0 = images[colorNumber][0]; // The data for the image to be loaded as UI
	// imageContainers[0].appendChild(newImage0);
	var imageToRemove5 = imagesToUpdate[5]; // The image UI in the DOM
	console.log(imageToRemove5);
	imageToRemove5.parentNode.removeChild(imageToRemove5);
	var newImage5 = images[colorNumber][5]; // The data for the image to be loaded as UI
	imageContainers[5].appendChild(newImage5);
}