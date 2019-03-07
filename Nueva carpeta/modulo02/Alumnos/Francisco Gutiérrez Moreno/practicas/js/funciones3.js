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
// Método splice()
function anadirValores() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.splice(2,2,);
	alert ("Con los paámetros que tenemos en ésta función (2,2)..." + "\n" + "Las frutas originales eran:  " + frutasoriginal
	 + "\n" + "Quedan: " + frutas + "\n" + "Se han eliminado: " + cadena);
}
// Método concat()
function concatenar () {
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3); 
alert (arr1 + "\n" + arr2 + "\n" + arr3 + "\n" + "Todos mis chicos: " + myChildren);
}
// Método slice()
function rebanada() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.slice(1,3);
	alert ("Con los parámetros que tenemos en ésta función frutas.slice(1,3)..." + "\n" + 
	"Las frutas originales eran:  " + frutasoriginal +
	"\n" + "La nueva matriz creada es: " + cadena);
}
// Método sort()
function ordenar() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var cadena = frutas.sort();
	alert ("Con los parámetros que tenemos en ésta función frutas.sort()..." + "\n" + 
	"Las frutas originales eran:  " + frutasoriginal +
	"\n" + "La nueva matriz creada es: " + cadena);
}
// Método reverse()
function invertir() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var frutasoriginal = ["manzana","pera","naranja","fresa"];
	var caden3=frutas.reverse();
	alert ("Con los parámetros que tenemos en ésta función frutas.reverse()..." + "\n" + 
	"Las frutas originales eran:  " + frutasoriginal + " Si quisiéramos ordenar una martriz de forma inversa y alfanumérica, debemos utilizar, primero el método sort y despues el método reverse (caden3 = frutas.sort().reverse() )" +
	"\n" + "La nueva matriz creada es: " + frutas);
}
	
	
	

	
