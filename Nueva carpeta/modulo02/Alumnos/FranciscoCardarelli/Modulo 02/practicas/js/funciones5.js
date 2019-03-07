// JavaScript Document 5

// Estructura if
function horaSi() {
var fecha = new Date();
var hora = fecha.getHours();
var mensaje = "Buenos Días";
	if (hora < 15) {
	mensaje = "Son más de las 15";
	}
	alert (mensaje);
}

// Estructura else
function horaElse() {
var hora = new Date().getHours();
	if (hora > 12) {
	alert ("Buenas tardes, son más de las 12");
	}
	else {
	alert ("Buenos días, son menos de las 12");
	}
}

// Estructura else if
function horaElseIf() {
var hora = new Date().getHours();
	if (hora >= 8 && hora < 15) {
	alert ("Buenos días, son menos de las 15");
	}
	else if (hora >= 15 && hora <= 23) {
	alert ("Buenas tardes, son más de las 15 y menos de las 23");
	}
	else {
	alert ("Buenas noches, son las 00 y menos de las 8");
	}
}

// Estructura switch
function onOff() {
	var dia;
	switch (new Date().getDay()) {
		case 0:	dia = "Domingo";
			break;
		case 1:	dia = "Lunes";
			break;
		case 2:	dia = "Martes";
			break;
		case 3:	dia = "Miércoles";
			break;
		case 4:	dia = "Jueves";
			break;
		case 5:	dia = "Viernes";
			break;
		case 6:	dia = "Sábado";
			break;
		default: dia = "El día introducido no es valido";
		}
/*	alert ("Hoy es " + dia);	
}
// Estructura switch
function onOff() {*/
	var mes;
	switch (new Date().getMonth()) {
		case 0:	mes = "Enero";
			break;
		case 1:	mes = "Febrero";
			break;
		case 2:	mes = "Marzo";
			break;
		case 3:	mes = "Abril";
			break;
		case 4:	mes = "Mayo";
			break;
		case 5:	mes = "Junio";
			break;
		case 6:	mes = "Julio";
			break;
		case 7:	mes = "Agosto";
			break;
		case 8:	mes = "Septiembre";
			break;
		case 9:	mes = "Octubre";
			break;
		case 10: mes = "Noviembre";
			break;
		case 11: mes = "Diciembre";
			break;
		default: mes = "El mes introducido no es valido";
		}
		
		var trimestre;
	switch (new Date().getMonth()) {
		case 0:
		case 1:
		case 2:	trimestre = "1er. trimestre";
			break;
		case 3:
		case 4:
		case 5:	trimestre = "2do. trimestre";
			break;
		case 6:
		case 7:
		case 8:	trimestre = "3er. trimestre";
			break;
		case 9:
		case 10:
		case 11: trimestre = "4to. trimestre";
			break;
		default: mes = "El trimestre introducido no es valido";
		}
	alert ("Hoy es un: " + dia + " " + "del mes de: " + mes.slice(0,3) + ". " + "Del " + trimestre);	
}

//Estructura for
function bucleFor() {
	var colores = ["Amarillo", "Azul", "Rojo", "Verde", "Naranja",];
	var texto = "";
	for (var i = 0; i < colores.length; i++) {
		texto += colores[i] + "\n";
		}
	alert ("Los valores de la matriz son: " + "\n" + texto);
}
//Estructura while
function buclewhile() {
	//var colores = ["Amarillo", "Azul", "Rojo", "Verde", "Naranja", "Amarillo", "Azul", "Rojo", "Verde", "Naranja"];
	var texto = "";
	var i = 0;
	while (i < 6) {
		texto += "\n El color es: " + i;
		i++;
		}
	alert (texto);
}