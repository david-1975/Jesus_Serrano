// JavaScript Document

//Crear Array
function matriz () {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce un segundo color");
	var color3 = prompt("introduce un tercer color");
	var contador = 0;
	
	while (color1==="" || color2==="" || color3==="") {
		
		if (color1==="") {
			color1 = prompt("No has introducido nada. Debes introducir un primer color.");
			if (color1==="") {
				contador = contador +1;}
		}
		
		if (color2==="") {
			color2 = prompt("No has introducido nada. Debes introducir un segundo color.");
			if (color2==="") {
				contador = contador +1;}
		}
		
		if (color3==="") {
			color3 = prompt("No has introducido nada. Debes introducir un tercer color.");
			if (color3==="") {
				contador = contador +1;}
		}
		
		if (contador === 3) {
			alert ("Has agotado el número de oportunidades. ¡Hazlo mejor la próxima vez!");
			return false;
		}
	}
	
	var colores = ("\"" + color1 + "\"," +
				   "\"" + color2 + "\"," + 
				   "\"" + color3 + "\"");
	
	var crearMatriz = new Array (color1, color2, color3);
	
		
	alert ("Se han creado las variables: " + color1 + " " + color2 + " " + color3 + "\n"
	+ "La variable array es de tipo " + typeof(crearMatriz) + "\n"
	+ " La variable contiene " + crearMatriz.length + " valores.");
}

//Split ()
function join() {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un tercer color");
	var color4 = prompt("introduce un último color");
	
	var crearMatriz = new Array (color1, color2, color3, color4);
	
		
	alert (crearMatriz.join(" * "));
}

//Pop ()
function pop() {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un último color");
	
	var crearMatriz = new Array (color1, color2, color3);
	
	alert ("Hemos creado esta matriz: " + crearMatriz);	
	alert ("Hemos eliminado el último elemento de la matriz, " + crearMatriz.pop() + ", y ahora la matriz es: " + crearMatriz);
}

//Push ()
function push() {
	var coche1 = prompt("introduce una marca de coches");
	var coche2 = prompt("introduce otra marca");
	
	var crearMatriz = new Array (coche1, coche2);
	
	alert ("Hemos creado esta matriz: " + crearMatriz);
	var coche3 = prompt("introduce otra marca para añadirla al array");
	crearMatriz.push(coche3);
	alert ("Hemos añadido " + coche3 + " a la matriz, y ahora queda así " + crearMatriz);
}

//shift ()
function shift() {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un último color");
	
	var crearMatriz = new Array (color1, color2, color3);
	
	alert ("Hemos creado esta matriz: " + crearMatriz);	
	alert ("Hemos eliminado el primer elemento de la matriz, " + crearMatriz.shift() + ", y ahora la matriz es: " + crearMatriz);
}

//splice ()
function splice() {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un último color");
	
	var crearMatriz = new Array (color1, color2, color3);
	var crearMatriz2 = new Array (color1, color2, color3);
	
	alert ("Hemos creado esta matriz: " + crearMatriz);	
	var pos = prompt("Introduce la posición para eliminar");
	var num = prompt("Introduce el número de elementos a eliminar");
	var pos_n = Number(pos);
	var num_n = Number(num);
	var color4 = prompt("introduce un color a añadir");
	var color5 = prompt("introduce un último color a añadir");
	crearMatriz2.splice(pos_n, num_n, color4, color5);
	alert ("La matriz original es " + crearMatriz);
	alert ("La matriz resultante es " + crearMatriz2);
}

//splice ()
function concat() {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un último color");
	
	var crearMatriz = new Array (color1, color2, color3);
	
	var nombre1 = prompt("introduce un nombre");
	var nombre2 = prompt("introduce otro nombre");
	var nombre3 = prompt("introduce un último nombre");
	
	var crearMatriz2 = new Array (nombre1, nombre2, nombre3);
	
	var concatenacion = crearMatriz.concat(crearMatriz2)
	
	alert ("La primera matriz es: " + crearMatriz + "\n"
		  + "La segunda matriz es: " + crearMatriz2 + "\n"
		  + "La unión de las dos es: " + concatenacion);
}

//Sort ()
function sort() {
	var color1 = prompt("introduce una palabra");
	var color2 = prompt("introduce otra palabra");
	var color3 = prompt("introduce una tercera palabra");
	
	var crearMatriz = new Array (color1, color2, color3);
	var ordenado = crearMatriz.sort();
	
	alert ("Has introducido estas palabras: " + color1 +"," + color2 + "," + color3 + "\n"
		  + "Y aquí están ordenadas alfabéticamente: " + ordenado);
}
