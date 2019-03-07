// JavaScript Document

// Método split()
function convertir() {
	var colores = prompt ("Introduce 5 colores");
	var matriz = colores.split(" ");
	alert (matriz + "\n" + typeof(colores) + "\n" + typeof(matriz) + "\n");
	}

// Crear Array
//function matriz() {
//var color1 = prompt("introduce un color");
//var color2 = prompt("introduce otro color");
//var color3 = prompt("introduce un color más");
//var colores = ("\"" + color1 + "\"," + "\"" + color2 + "\"," + "\"" + color3 + "\"");
//var convertir = colores.split(","); 
//var array = new Array (colores);
//alert ("Colores introducidos: " + "\n" + "var color1 = " + color1 + ";\n" + "var color2 = " + color2  + ";\n" +  "var color3 = " + color3  + ";\n" + 
//	   "Se ha creado la matríz colores" + "\n" +
//	   "var colores = " + "[" + convertir + "];" + "\n" + 
//	   "La variable colores es de tipo: " + typeof(convertir) + "\n");
//	}

// Método toString()
function aCadena() { 
	var frutas = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.toString();
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena) + "\n");
}

// Método join()
function unirValores() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.join(" * ");
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena) + "\n");
}

// Método pop()
function eliminarFinal() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.pop();
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena) + "\n");
}

// Método push()
function anadirFinal() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.push(dato);
	alert (
	frutasoriginal + "\n" + frutas);
}

// Método shift()
function eliminaOrdena() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.shift();
	alert (frutasoriginal + "\n" + frutas);
}

// Método unshift()
function eliminaOrdena() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.unshift(dato);
	alert (frutasoriginal + "\n" + frutas);
}

	
