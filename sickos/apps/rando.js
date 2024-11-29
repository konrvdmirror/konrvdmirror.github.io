// Configuration
const canvasSize = 45; // Size of the canvas and square (50x50 pixels)
const cellSize = 9; // Size of each cell in the square
const inputString = "■ "; // Characters for the pattern

// Set up canvas
const canvas = document.getElementById("rando");
canvas.width = canvasSize;
canvas.height = canvasSize;
const ctx = canvas.getContext("2d", {alpha: false});

// Function to generate and draw the pattern
function generatePattern() {
	ctx.clearRect(0, 0, canvasSize, canvasSize);
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvasSize, canvasSize);

	ctx.font = `${cellSize * 0.8}px Arial`;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillStyle = "white";

	for (let y = 0; y < canvasSize; y += cellSize) {
		for (let x = 0; x < canvasSize; x += cellSize) {
			const randomChar = inputString[Math.floor(Math.random() * inputString.length)];
			const posX = x + cellSize / 2;
			const posY = y + cellSize / 2;
			ctx.fillText(randomChar, posX, posY);
		}
	}
}
// Draw the square with the random pattern
generatePattern(inputString);