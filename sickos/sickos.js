	//Funciones de ventanas
	//ABRIR VENTANA
	let wcounter = 0;
	function spawnWindow(w) {
		let window = document.getElementById(w);
		let windows = document.getElementsByClassName("window");
		let topbars = document.getElementsByClassName("w-topbar");
		window.style.visibility = "visible";
		for (var i = 0; i < windows.length; i++){
			windows[i].style.borderColor = "var(--secondary-color)";
			topbars[i].style.background = "var(--secondary-color)";
		}
		wcounter++;
		window.style.zIndex = wcounter;
		if (wcounter == 99) { wcounter=0; }
		window.style.borderColor = "";
		window.getElementsByClassName("w-topbar")[0].style.background = "";
		
	}
	
	//CERRAR VENTANA
	function closeWindow(w) {
		let window = document.getElementById(w);

		window.style.visibility = "hidden";
		window.style.left = "";
		window.style.top = "";
		minimizeWindow(w, null);
	}
	//MINIMIZAR VENTANA
	function minimizeWindow(w,oc) {
		let window = document.getElementById(w);
		let windowContent = window.getElementsByClassName("w-content");
		let windowState = window.getElementsByClassName("min-bt")[0].innerHTML;
		
		if (windowState === "-" && oc === "clicked"){
			window.style.height = "27px";
			windowContent[0].style.visibility = "hidden";
			window.getElementsByClassName("min-bt")[0].innerHTML = "+";
			
		}
		else {
			window.style.height = "";
			windowContent[0].style.visibility = "";
			window.getElementsByClassName("min-bt")[0].innerHTML = "-";	
		}
	}
	
	//Hacer ventanas arrastrables
	let elements = document.getElementsByClassName("window");
	let x = 0, y = 0;

	for (let i = 0; i < elements.length; i++) {
		elements[i].onmousedown = function(e) {
				x = e.pageX;
				y = e.pageY;
				spawnWindow(elements[i].id);
				document.onmousemove = function(e) {
				elements[i].style.left = (elements[i].offsetLeft + e.pageX - x) + 'px';
				elements[i].style.top = (elements[i].offsetTop + e.pageY - y) + 'px';
				x = e.pageX;
				y = e.pageY;
			}
			elements[i].onmouseup = function() {
				document.onmousemove = null;
				elements[i].onmouseup = null;
			}
		}
	}
	
	//Define hora y la muestra en launcher
	function updateTime() {
		var now = new Date();
		var options = { 
			day: 'numeric', 
			month: 'numeric', 
			year: 'numeric', 
			hour: 'numeric', 
			minute: 'numeric', 
			hour12: false };
		var time = now.toLocaleTimeString("es-cl", options);
		document.getElementById("clock").innerHTML = time;			
	}
	setInterval(updateTime, 1000);
	
	//Organiza ventanas visibles
	function getPosition( element ) {
		var rect = element.getBoundingClientRect();
		return { y: rect.top };
	} 
	function sortWindows() {
		let elements = document.getElementsByClassName("window");
		let onlyvisible = [];
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].style.visibility !== 'hidden') {
				onlyvisible.push(elements[i]);
			}
		}
		onlyvisible[0].style.left = "10px";
		onlyvisible[0].style.top = "60px";
		for (var i = 1; i < onlyvisible.length; i++) {
			var pos = getPosition(onlyvisible[i-1]);
			var tam = onlyvisible[i-1].offsetHeight;
			onlyvisible[i].style.top = (pos.y+tam+10)+"px";
			onlyvisible[i].style.left = "10px";
		}
		
	}
	//APLICACIONES
	//WEB BROWSER
	let urlbar = document.getElementById("www-urlbar");
	let browser = document.getElementById("www-browser");
	urlbar.value = "";
	browser.setAttribute("src", "/");
	patience = 3;
	document.querySelector('#www-urlbar').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		alert("Entering..."+urlbar.value);
		if (urlbar.value === "mirror.labs") {
			patience=patience-1;
			if (patience==0){
				alert("WHAT THE FUCK BRO?! Why are you so crazy about them? Here, look at this and figure it out yourself. Just...stay quiet. Ok?");
				patience=3;
			} else {
				alert("Oh, those guys. Yeah they are kinda shady but as long as I get paid it's fine, nomesayin?!");
			}
		} else if (urlbar.value === "exit") {
			if (patience==0){
				alert("Bro, seriously? Are you like...retarded or something?");
				patience=3;
			} else {
				alert("Yooooo, bro thinks am terminal, nawww bro that's not how it works haha, like just close the window haha");
				patience=patience-1;
			}
		} else {
			browser.setAttribute("src", urlbar.value);
		}
		console.log(patience);
	}
	});
	
	//RANDO:GENERADOR DE PATRONES
	let canvasSize = 45;
	let cellSize = 9;
	let inputString = "■ ";

	let canvas = document.getElementById("rando");
	canvas.width = canvasSize;
	canvas.height = canvasSize;
	let ctx = canvas.getContext("2d");

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
				let randomChar = inputString[Math.floor(Math.random() * inputString.length)];
				let posX = x + cellSize / 2;
				let posY = y + cellSize / 2;
				ctx.fillText(randomChar, posX, posY);
			}
		}
	}
	generatePattern(inputString);
	
	
	