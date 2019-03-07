// JavaScript Document

// Método split()

function convertir() {
	var colores = prompt ("Introduce 3 colores");
	var matriz = colores.split(" ");
	alert (matriz + "\n" + typeof(colores) + "\n" + typeof(matriz));
	}
	
	/*var color1 = prompt ("Introduce un color");
	var color2 = prompt ("Introduce un color");
	var color3 = prompt ("Introduce un color");
	var colores = color1*/
	
	// Método toString ()

function aCadena() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.toString();
	alert (frutas + "\n" + typeof(frutas) + "\n" + typeof(cadena));
	}
	
	// Método join()
	
	function unirValores() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.join(" * ");
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena));
	}
	
		// Método pop()
	
	function eliminarFinal() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.pop();
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena));
	}
	
		// Método push()
	
	function añadirFinal() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.push(dato);
	alert (frutasoriginal + "\n" + frutas);
	}
	
		// Método shift()
	
	function eliminaOrdena() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.shift();
	alert (frutasoriginal + "\n" + frutas);
	}
	
			// Método unshift()
	
	function anadeOrdena() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.unshift(dato);
	alert (frutasoriginal + "\n" + frutas);
	}
	
	// Método splice()
	
	function anadeValores() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	alert (["manzana","pera","naranja","fresa"]);
	var fruta1 = prompt ("Introduce una fruta nueva");
	var fruta2 = prompt ("Introduce una fruta nueva");
	var cadena = frutas.splice(2, 0, fruta1, fruta2);
	alert (frutasoriginal + "\n" + frutas);
	}
	
	
	//Método concat()
	
		function concatenar() {
	var nombres = ["Carlos","Lucía"];
	var masNombres = ["Paula","Inés"];
	var otrosNombres = ["Mari","Siro"];
	var totalNombres = nombres.concat(masNombres, otrosNombres); 
	alert (totalNombres);
	}
	
	//Método slice()
	
function rebanar() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.slice(1,3);
	alert (frutasoriginal + "\n" + cadena);
	}
	
	//Método sort()
	
	function ordenarAscendente() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var frutasOrdenadas = frutas.sort();
	alert (frutasoriginal + "\n" +frutasOrdenadas);
	}
	
		//Método reverse()
	
	function ordenarDescendente() {
	var frutas = ["kiwi","piña","coco","mango"];
	var frutasoriginal = ["kiwi","piña","coco","mango"];
	var frutasOrdenadas = frutas.reverse();
	alert (frutasoriginal + "\n" +frutasOrdenadas);
	}
	
	
	