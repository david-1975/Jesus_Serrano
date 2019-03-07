// JavaScript Document

//Estructura if
function si () {
	alert ("Si la hora actual es menor que las 12:00, la consola te dará los buenos días.");
	var hora = new Date().getHours();
	var mensaje = "Buenos días";
	if (hora >= 12) {
		mensaje = "Son más de las 12";
	}
	alert (mensaje);
}

//Estructura else
function sino () {
	alert ("Si la hora actual es menor que las 12:00, la consola te dará los buenos días. De lo contrario, te dará las buenas tardes");
	var hora = new Date().getHours();
	if (hora <= 12) {
	  	alert ("Buenos días");
	} else {
		alert ("Buenas tardes");
	}
}

//Estructura else
/*function sinoelse () {
	alert ("Si la hora actual es menor que las 12:00, la consola te dará los buenos días. Si la hora actual está comprendida entre las 12:00 y las 18:00, la consola te dará las buenas tardes. Si no se reunen ninguna de las siguientes condiciones, te dará las buenas noches");
	var hora = new Date().getHours();
	if (hora > 5 && hora < 12) {
	  	alert ("Buenos días");
	} else if (hora >= 12 && hora <= 18) {
		alert ("Buenas tardes");
	} else {
		alert ("Buenas noches");
	}
}*/

//Estructura else
function sinoelse () {
	alert ("Si la hora actual está comprendida entre las 5:00-12:00, la consola te dará los buenos días." +"\n" + "Si la hora actual está comprendida entre las 12:00-18:00, la consola te dará las buenas tardes." + "\n" + "Si la hora actual está comprendida entre las 18:00-23:00, la consola te dará las buenas noches");
	var hora = new Date().getHours();
	if (hora > 5 && hora < 12) {
	  	alert ("Buenos días");
	} else if (hora >= 12 && hora <= 18) {
		alert ("Buenas tardes");
	} else if (hora > 18 && hora <= 23) {
		alert ("Buenas noches");
	} else {
		alert ("Es de madrugada");
	}
}

//Estructura switch
function interruptor(){
	var dia;
	var mes;
	switch (new Date().getDay()) {
		//Cada caso puede ser nombrado con número, texto, booleano, etc... si el dato que devuelve la expresión corresponde con uno de los casos, éste último se aplicará, por ejemplo en este switch estás recibiendo el número del día (0-6), si hoy es martes, la máquina devlverá un 3, por lo tanto se aplicará al caso nombrado como 3. Por otro lado, 2 o 3 casos pueden reunir UNA SOLA condición. Los casos no admiten operadores
		
		case 0: dia = "Domingo".slice(0, 3); break;
		
		case 1: dia = "Lunes".slice(0, 3); break;
		
		case 2: dia = "Martes".slice(0, 3); break;
		
		case 3: dia = "Miércoles".slice(0, 3); break;
		
		case 4: dia = "Jueves".slice(0, 3); break;
		
		case 5: dia = "Viernes".slice(0, 3); break;
			
		case 6: dia = "Sábado".slice(0, 3); break;
		
		default: dia = "No ha habido coincidencias";
		
	}
	alert ("Hoy es día " + dia);
	
	switch (new Date().getMonth()){
		
		case 0: mes = "Enero"; break;
		
		case 1: mes = "Febrero"; break;
		
		case 2: mes = "Marzo"; break;
		
		case 3: mes = "Abril"; break;
		
		case 4: mes = "Mayo"; break;
		
		case 5: mes = "Junio"; break;
		
		case 6: mes = "Julio"; break;
		
		case 7: mes = "Agosto"; break;
		
		case 8: mes = "Septiembre"; break;
		
		case 9: mes = "Octubre"; break;
		
		case 10: mes = "Noviembre"; break;
		
		case 11: mes = "Diciembre"; break;
		
		default: mes = "No ha habido coincidencias";
		
	}
	alert ("Estamos en el mes de " + mes);
}

//Estructura for
function para() {
var frutas = ["Pera", "Manzana", "Piña", "Limón", "Mango"];
var texto = "";
var i;
// for (inicialización; condición; próximo valor)
	for (i = 0; i < frutas.length; i++) {
		texto += frutas[i] + "\n";
	}
alert (texto);
}

//Estructura while
function mientras() {
var text = "";
var i = 0;
while (i <= 10) {
	text += "\n El número es " + i;
	i++
	}
alert (text);	
}

//Estructura do while
function mientras() {
var text = "";
var i = 0;
do {
	text += "\n El número es " + i;
	i++
	}
while (i <= 20);
alert (text);	
}