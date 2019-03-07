// JavaScript Document

// Estructura if
/*var fecha = new Date();
var hora = fecha.getHours();
 
if(hora >= 7 && hora <= 12) {
  alert ("Buenos días");
}
if(hora >= 13 && hora <= 18) {
  alert ("Buenas tardes");
}
if(hora >= 18 && hora <= 23) {
  alert ("Buenas noches");
}
if(hora >= 0 && hora < 7) {
alert ("Es de madrugada");
}*/

// Estructura if
function horaIf() {
var fecha = new Date();
var hora = fecha.getHours();
var mensaje = "Son más de las 12";	
if (hora >= 12) {
    mensaje = "Buenos Días";
}
	alert (mensaje);
}

// Estructura else
function horaElse() {
var fecha = new Date();
var hora = fecha.getHours();
if (hora >= 12) {
	alert ("Buenos días");
	} else {
	alert ("Buenas tardes");
		}
}

// Estrucutra else if
/*if (hora >=8 && hora < 15) {
	alert ("Buenos días");
	} else if (hora >= 15 && hora <= 23) {
		alert ("Buenas tardes");
		} else {
			alert ("Buenas noches");
			}*/

// Estrucutra else if		
function horaElseIf() {		
var hora = new Date().getHours();
if (hora >= 7 && hora <= 12) {
	alert ("Buenos días");
	} else if (hora >= 13 && hora <= 18) {
		alert ("Buenas tardes");
		} else if (hora > 18 && hora <= 23) {
			alert ("Buenas noches");
			} else {
				alert ("Es de madrugada");
				}
}
// Estructura switch
function switchCase() {
var dia;
switch (new Date().getDay()) {
	case 0:
	dia = "Domingo";
		break;
	case 1:
	dia = "Lunes";
		break;
	case 2:
	dia = "Martes";
		break;
	case 3:
	dia = "Miércoles";
		break;
	case 4:
	dia = "Jueves";
		break;
	case 5:
	dia = "Viernes";
		break;
	case 6:
	dia = "Sábado";
		break;
	default: 
	dia = "El número no equivales a ninmgún mes";
	}
	alert ("Hoy es " + dia);
}

/*// Estructura switch
function switchCase() {
var dia;
switch (new Date().getMonth()) {
    case 0:
        dia = "Enero".slice(0,3);
        break;
    case 1:
        dia = "Febrero".slice(0,3);
        break;
    case 2:
        dia = "Marzo".slice(0,3);
        break;
    case 3:
        dia = "Abril".slice(0,3);
        break;
    case 4:
        dia = "Mayo".slice(0,3);
        break;
    case 5:
        dia = "Junio".slice(0,3);
        break;
    case 6:
        dia = "Julio".slice(0,3);
		break;
	case 7:
        dia = "Agosto".slice(0,3);
		break;
	case 8:
        dia = "Septiembre".slice(0,3);
		break;
	case 9:
        dia = "Octubre".slice(0,3);
		break;
	case 10:
        dia = "Noviembre".slice(0,3);
		break;
	case 11:
        dia = "Dicimebre".slice(0,3);
		break;
	default: 
		dia = "El número no equivales a ninmgún mes";
}
alert ("El mes es " + dia);
}*/

var colores = ["Rojo", "verde", "azul", "amarillo", "violeta"];
var texto = "";
var i;
for (i = 0; i < colores.length(); i++) {
	texto += colores[i] + "\n";
	}





// Estructura for
function bucleFor() {
var coches = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var texto = "";
var i;
for (i = 0; i < coches.length; i++) {
    texto += coches[i] + "\n";
}
alert ("valores del array " + "\n" + texto);
}







//Estructura while
function mientrasWhile() {
var text = "";
var i = 0;
while (i < 10) {
    text += "\n El número es " + i;
    i++;
}
alert (text);
}

//Estructura do while
function hacerMientrasDoWhile() {
var text = "";
var i = 0;
do {
    text += "\n El número es " + i;
    i++;
}
while (i < 10);
alert (text);
}

//Sentencia break
function romperBucle() {
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 5) { break; }
    text += "El número es " + i + "\n";
}
alert (text);
	}

//Sentencia continue
function continuarBucle() {
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i < 5) { continue; }
    text += "El número es " + i + "\n";
}
alert(text);
}