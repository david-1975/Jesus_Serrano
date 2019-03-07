// JavaScript Document

// Estructura If
/*function horaif() {
var fecha = new Date();
var hora = fecha.getHours();
if (hora < 18) {
	alert ("Buenos días tía María");
	}*/
// Estructura if()  	
function horaif() {
var fecha = new Date();
var hora = fecha.getHours();
var mensaje = ("Son mas de las 12");
if (hora >= 12) {
	alert (mensaje);
	}
}
// Estructura if()  else ()
function horaifelse() {
var hora = new Date().getHours();
if ( hora <= 12) {
	alert ("Buenos dias tía María");
	} else {
		alert ("Buenas tardes aquelarre");
	}
}
// Estructura if() else if() else ()
function horaifelseelse() {
var hora = new Date().getHours();
if ( hora >= 8 && hora <= 15) {
	alert ("Buenos dias tía María");
	} else if (hora > 15 &&  hora <= 24) {
		alert ("Buenas tardes aquelarre");
	}
	else  {
		alert ("Buenas noches cara troche");
		}
}
// Estructura if() else if() else if () else ()
function horaifelseelseelse() {
var hora = new Date().getHours();
if ( hora >= 0 && hora <= 6) {
	alert ("Juerga afterhours");
	} else if (hora > 6 &&  hora <= 13) {
		alert ("Duerme la resaca");
	}  else if (hora > 13 &&  hora <= 20) {
		alert ("Queda con los amigotes");
	}
	else  {
		alert ("Vuelta a empezar");
		}
}
// Estructura iswitch
/*function quediaeshoy() {
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
}
alert ("El día de hoy es: " + dia );
	}*/
	function enquemesestamos() {
	var mes = prompt ("Introduce un número del 1 al 12");
	var mesInt = parseInt(mes);
	switch (mesInt) {
    case 1:
        mes = "Enero";
        break;
	 case 2:
        mes = "Febrero";
        break;
	 case 3:
        mes = "Marzo";
        break;
	 case 4:
        mes = "Abril";
        break;
	 case 5:
        mes = "Mayo";
        break;
	 case 6:
        mes = "Junio";
        break;
	 case 7:
        mes = "Julio";
        break;
	 case 8:
        mes = "Agosto";
        break;
	 case 9:
        mes = "Septiembre";
        break;
	 case 10:
        mes = "Octubre";
        break;
	 case 11:
        mes = "Noviembre";
        break;
	 case 12:
        mes = "Diciembre";
		break;
     default: 
	 mes = "No has introducido ninguno de los valores comprendidos entre 1 y 12";
	}
	alert ("El mes que has introducido es: " + mes);
	}
// Estructura for ()
function mientras() {
var text = "";
var i = 0;
while (i < 10 ) {
    text += " \n Este número es: " + i; i++ ;
}
alert ( " Los números son: " +  text);
	}
	
	

	
	