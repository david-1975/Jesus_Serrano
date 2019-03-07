// JavaScript Document

//Método split ()
function convertir () {
	var color1 = prompt ("Por favor introduce 4 colores");
	
	var colores = color1.split(" ");
	alert (colores + typeof(colores) + color1 + typeof(color1));	
}

//Método toString ()
function aFrutas () {
	var frutas = ["manzana", "pera", "naranja", "fresa"];
	var cadena = frutas.toString();
	alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n" + typeof(cadena) + "\n");	
}

//Método join()
function union () {
	var frutas = ["manzana", "pera", "naranja", "fresa"];
	var cadena = frutas.join(" * ");
	alert (frutas + "\n" + typeof(frutas) + "\n" +  cadena + "\n" + typeof(cadena) + "\n");
}

//Método pop()
function eliminarFinal() {
	var frutas = ["manzana", "pera", "naranja", "fresa"];
	var cadena = frutas.pop();
    alert (frutas + "\n" + typeof(frutas) + "\n" +  cadena + "\n" + typeof(cadena) + "\n");
}

//Método push()
function anadirFinal() {
	var frutasOriginal = ["manzana", "mera", "naranja", "fresa"];
	alert (frutasOriginal);
	var frutas = ["manzana", "pera", "naranja", "fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.push(dato);

	alert ("La matriz " + "\n" + frutasOriginal + "\n" + "Ahora contiene un nuevo valor: " + "\n" + frutas);
}

//Método shift()
function eliminaOrdenar() {
	var frutas = ["Manzana", "Pera", "Naranja", "Fresa"];
	var frutasOriginal = ["Manzana", "Pera", "Naranja", "Fresa"];
	var cadena = frutas.shift();
	alert (frutasOriginal + "\n" + frutas);
}

//Método unshift()
function anadeOrdena() {
	var frutasOriginal = ["Manzana", "Pera", "Naranja", "Fresa"];
	alert (frutasOriginal);
	var frutas = ["manzana", "pera", "naranja", "fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.unshift(dato.toLowerCase());
	alert (frutasOriginal + "\n" + frutas);
}

// Método splice()
function empalme() {
	var frutas = ["Manzana", "Pera", "Naranja", "Fresa"];
	var frutasOriginal = ["Manzana", "Pera", "Naranja", "Fresa"];
	var cadena = frutas.splice(2, 0, "Limón", "Kiwi");
	//El primer valor es la posición del valor en el cual quieres empezar a añadir, el segundo te da la opción de reemplazar o no la posición actual, o posiciones siguientes dependiendo del número.
	alert ("La matriz \"Frutas\" " + "\n" + frutasOriginal + "\n" + "Ahora contiene nuevos valores: " + "\n" + frutas);
}

//Método concat()
function concatenar () {
	var frutas = ["kiwi", "plátano", "mango"];
	var verduras = ["lechuga", "tomate", "alcachofa"];
	var cadena = frutas.concat(verduras);
	alert ("La matriz \"Frutas\":" + "\n" + frutas + "\n" + "Y la matriz \"Verduras\":" + "\n" + verduras + "\n" + "Se han concatenado para formar:" + "\n" + cadena);
}

//Método slice()
function rebanada () {
	var frutas = ["Manzana", "Pera", "Naranja", "Fresa"];
	var cadena = frutas.slice(0,2);
	//Puedes introducir una segunda posición. Los valores comprendidos entre la posición a y b (0 y 2) serán extraídos.
	alert ("La matriz \"Frutas\"" + "\n" + frutas + "\n" + "Se han extraído los siguientes valores:" + "\n" + cadena);
}

//Método sort()
function ordenar () {	
	var frutas = ["Manzana", "Pera", "Naranja", "Fresa"];
	var frutasOriginal = ["Manzana", "Pera", "Naranja", "Fresa"];
	var ordenado = frutas.sort();
	alert ("La matriz \"Frutas\"" + "\n" + frutasOriginal + "\n" + "Se ha ordenado de forma ascendente:" + "\n" + frutas);
}

//Método reverse()
function reverso () {
	var frutas = ["Manzana", "Pera", "Naranja", "Fresa"];
	var frutasOriginal = ["Manzana", "Pera", "Naranja", "Fresa"];
	var ordenado = frutas.reverse();
	alert ("La matriz \"Frutas\"" + "\n" + frutasOriginal + "\n" + "Se ha ordenado de forma inversa:" + "\n" + frutas);
	//De querer ordenarlo alfabéticamente de forma descendente, en lugar de ascendente, deberás combinar sort() con reverse()
	ordenado.sort().reverse();
	alert ("La matriz \"Frutas\" ahora está ordenada alfabéticamente de forma descendente" + "\n" + ordenado);
}