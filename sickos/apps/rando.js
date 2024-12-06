function generatePattern(){

	const gridContainer = document.getElementById("rando");
	gridContainer.innerHTML = "";
	const gridSize = 5;       //
	const cellSize = 9;      //
	const svgGrid = generateRandomGrid(gridSize, cellSize);
	
	function generateRandomGrid(size, cellSize) {
		const svgNS = "http://www.w3.org/2000/svg";
		const svg = document.createElementNS(svgNS, "svg");
		svg.setAttribute("width", size * cellSize);   // Set width to 5 * cell size
		svg.setAttribute("height", size * cellSize);  // Set height to 5 * cell size
		svg.setAttribute("xmlns", svgNS);
		svg.setAttribute("style", "border: 1px solid black; display: block;");
		for (let row = 0; row < size; row++) {
			for (let col = 0; col < size; col++) {
				const rect = document.createElementNS(svgNS, "rect");
				rect.setAttribute("x", col * cellSize);
				rect.setAttribute("y", row * cellSize);
				rect.setAttribute("width", cellSize);
				rect.setAttribute("height", cellSize);
				const isBlack = Math.random() > 0.5; // 50% chance for black
				rect.setAttribute("fill", isBlack ? "black" : "white");
				rect.setAttribute("stroke", "black");
				svg.appendChild(rect);
			}
		}
		return svg;
	}
	gridContainer.appendChild(svgGrid);		
}