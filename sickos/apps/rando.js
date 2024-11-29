function generatePattern(){

	const gridContainer = document.getElementById("rando");
	gridContainer.innerHTML = "";
	const gridSize = 5;       // 5x5 grid
	const cellSize = 9;      // 50x50 pixels for each square
	const svgGrid = generateRandomGrid(gridSize, cellSize);
	
	function generateRandomGrid(size, cellSize) {
		// SVG namespace
		const svgNS = "http://www.w3.org/2000/svg";

		// Create the SVG element
		const svg = document.createElementNS(svgNS, "svg");
		svg.setAttribute("width", size * cellSize);   // Set width to 5 * cell size
		svg.setAttribute("height", size * cellSize);  // Set height to 5 * cell size
		svg.setAttribute("xmlns", svgNS);
		svg.setAttribute("style", "border: 1px solid black; display: block;");

		// Loop through rows and columns to create the grid
		for (let row = 0; row < size; row++) {
			for (let col = 0; col < size; col++) {
				// Create a rectangle for each cell
				const rect = document.createElementNS(svgNS, "rect");
				rect.setAttribute("x", col * cellSize);
				rect.setAttribute("y", row * cellSize);
				rect.setAttribute("width", cellSize);
				rect.setAttribute("height", cellSize);

				// Randomly decide if the cell is black or white
				const isBlack = Math.random() > 0.5; // 50% chance for black
				rect.setAttribute("fill", isBlack ? "black" : "white");
				rect.setAttribute("stroke", "black"); // Optional: stroke for grid lines

				// Append the rectangle to the SVG
				svg.appendChild(rect);
			}
		}

		return svg;
	}

	// Append the SVG to the DOM
	gridContainer.appendChild(svgGrid);		
}