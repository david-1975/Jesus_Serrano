// JavaScript Document
//Método splice()
function convertir() {
	var colores = prompt ("Por favor introduce cinco colores");
	var matriz = colores.split(" ");
	alert (matriz + "\n" + typeof(colores) + "\n" + typeof(matriz) + "\n");
	}
	//Método toString()
	function aCadena() {
	var frutas = ["manzanas", "peras", "naranjas", "fresas"];
	var cadena = frutas.toString();
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena) + "\n");
		}
	//Método join()
	function unirvalores() {
	var frutas = ["manzanas", "peras", "naranjas", "fresas"];
	var cadena = frutas.join(" * ");
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena) + "\n");
		}
	//Método pop()
	function eliminar () {
	var frutas = ["manzanas", "peras", "naranjas", "fresas"];
	var cadena = frutas.pop();
	alert (frutas + "\n" + cadena + "\n" );
		}
	//Método push()
	function anadir () {
	var frutas = ["manzanas ", "peras ", "naranjas ", "fresas "];
	alert ("Tenemos ya: " + frutas.toString());
	var elemento = prompt ("Por favor, añade el nombre de una fruta nueva");
	var cadena = frutas.push(elemento);
	alert (frutas + "\n" +  "Has añadido: " + elemento + "\n" );
		}
	//Método shift()
	function eliminar () {
		var frutas = ["manzanas", "peras", "naranjas", "fresas"];
	var cadena = frutas.shift();
	alert (frutas + "\n" + cadena + "\n" );
		}
		//Método unshift()
	function anadir () {
	var frutas = ["manzanas", " peras ", " naranjas", " fresas"];
	alert ("Tenemos ya: " + frutas.toString());
	var elemento = prompt ("Por favor, añade el nombre de una fruta nueva");
	var frutanueva = frutas.unshift(elemento);
	alert (frutanueva + "\n" + "Antes sólo había " + frutas);
		}
		
		
		
	


