// module pattern
// iife

(() => {
	// put variables (connections to the web page / DOM) at the top
	// constant -> something that will never change / can't be redefined
	const puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
				dropZoneContainer = document.querySelector(".puzzle-board"),
				dragImages = document.querySelectorAll(".puzzle-image"),
				dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function dragStart() {
		console.log('started draggin');
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('dragged over me');
	}

	function dropped(event) {
		event.preventDefault();
		console.log('dropped somethin on me');
	}

	// this function runs when the bottom nav buttons are clicked
	// it changes the bg image of the drop zone div using the style property
	function changeBGImage() {
		// get the custom data attribute from the clicked button
		let currentImage = this.dataset.imageref;

		// `` is NOT a quote. it's a JavaScript template string
		dropZoneContainer.style.backgroundImage = `url(images/backGround${currentImage}.jpg)`;


		// this is an intermediate way to do the same something
		// dropZoneContainer.style.backgroundImage = `url(images/backGround${this.dataset.imageref}.jpg)`;
		// debugger;
	}

	// event handling at the bottom
	puzzleSelectors.forEach(button => button.addEventListener("click", changeBGImage));
	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
	
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})

	// emulate a click on the first bottom button and run the bg image function
	changeBGImage.call(puzzleSelectors[0]);
})();
