// JavaScript Document



//if() control de flujo
function  pruebaif1() {
//	var fecha = new Date();
//	var hora = fecha.getHours();
	var hora = prompt("introduce la hora hh:");
	var saludo = "";
	if(hora > 23 || hora < 0 || isNaN(hora)) {
		saludo = "Hora erronea, dices que";
	} else if(hora < 12 && hora >= 6) {
		saludo = "Buenos días,";
	} else if(hora >= 21 || hora < 6 ) {
			saludo = "Buenas noches,";		
			} else if(hora >= 12 && hora < 21) {
				saludo = "Buenas tardes ";
				} 
	document.getElementById("demo2").innerHTML = saludo + " son las " + hora + " horas.<br>";
}

// switch() evalua una expresion y ejecuta segun el resultado new Date().getDay()
function pruebaswitch1() {
//	let diaN = new Date().getDay();
	var diaX = ""; 
	var diaS = prompt("introduce el numero de un día de la semana (0-6):");
	var diaN = parseInt(diaS);
//	switch(diaN.parseInt(diaS)) {
	switch(diaN) {
		case 0:	
			diaX = "Domingo";
			break;
		case 1:	
			diaX = "Lunes";
			break;
		case 2:	
			diaX = "Martes";
			break;
		case 03:	
			diaX = "Miercoles";
			break;
		case 4:	
			diaX = "Jueves";
			break;
		case 5:	
			diaX = "Viernes";
			break;
		case 6:	
			diaX = "Sábado";
			break;
		default:
			diaX = "Erroneo";			
		}
	document.getElementById("demo2").innerHTML = "El día de la semana es " + 
		diaX + " \(" + diaX.slice(0,3).toUpperCase() + "\)";

	}
	
//for() control de flujo
function  pruebafor1() {
//	var fecha = new Date();
//	var hora = fecha.getHours();

	var strNum = prompt("introduce el numero a multiplicar:");
	var numero = parseInt(strNum);
	var i = 0;
	var tabla = "";
	for (i=0; i<11; i++) {
		tabla = tabla.concat(numero," * ",i," = ",(numero * i),"<br>");
		}
	document.getElementById("demo2").innerHTML = tabla + "<br>";
}
//for() control de flujo
function  pruebafor2() {
	var colores = ["rojo", "verde", "azul", "amarillo", "cyan"];
	var i= 0;
	var tabla = "";
	for (i=0; i<colores.length; i++) {
		tabla = tabla.concat(colores[i],"<br>");
		}
	document.getElementById("demo2").innerHTML = "El array es: <br>" + 
		colores + "<br><br>" + 
		"Los elementos del array son: <br>" + 
		tabla + "<br>";
}
//for() control de flujo
function  pruebawhile1() {
	var colores = ["rojo", "verde", "azul", "amarillo", "cyan"];
	var i= 0;
	var tabla = "";
	while (i<colores.length) {
		tabla = tabla.concat(colores[i],"<br>");
		i++;
		}
	document.getElementById("demo2").innerHTML = "El array es: <br>" + 
		colores + "<br><br>" + 
		"Los elementos del array son: <br>" + 
		tabla + "<br>";
}
//for() control de flujo
function  pruebadowhile1() {
	var colores = ["rojo", "verde", "azul", "amarillo", "cyan"];
	var i= 0;
	var tabla = "";
	do  {
		tabla = tabla.concat(colores[i],"<br>");
		i++;
		} while (i<colores.length)
	document.getElementById("demo2").innerHTML = "El array es: <br>" + 
		colores + "<br><br>" + 
		"Los elementos del array son: <br>" + 
		tabla + "<br>";
}

	
//var color1 = prompt("introduce tres colores");
//var arrColores = color1.split(" ");


