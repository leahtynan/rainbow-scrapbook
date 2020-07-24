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

setUpImageArray();

function setUpImageArray() {
	// Set up a 2D array to store images for each color:
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
		images[colorNumber][itemNumber] = imageToLoad;
		if(imagesLoaded == numberImages) {
			console.log("Everything loaded!");
			// Load the images in the set for the color yellow
			updateItemSet(0); 
			// Hide the preloader and show the grid of images
			preloader.style.display = "none";
			grid.style.display = "block";
		}
	}		
}

function updateItemSet(colorNumber) {
	for(i = 0; i < 6; i++) {
		updateImage(colorNumber, i);
	}
}

function updateImage(colorNumber, itemNumber) {
	var imageToUpdate = imagesToUpdate[itemNumber];
	var containerToUpdate = imageContainers[itemNumber];
	imageToUpdate.src = images[colorNumber][itemNumber].src;
	imageToUpdate.alt = images[colorNumber][itemNumber].alt;
	imageToUpdate.title = images[colorNumber][itemNumber].title;
	containerToUpdate.className = "";
	containerToUpdate.classList.add("item");
	var shape = data[(colors[colorNumber])].shapes[itemNumber];
    containerToUpdate.classList.add(shape);
}