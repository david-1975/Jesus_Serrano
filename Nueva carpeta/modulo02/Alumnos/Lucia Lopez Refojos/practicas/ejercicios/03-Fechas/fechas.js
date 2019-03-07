// JavaScript Document

// Año de nacimiento y calcular la edad

function nacimiento() {
	var dato = parseInt (document.getElementById ("number1").value);
	var fecha = new Date();
	var ano = fecha.getFullYear();

	var edad = ano - dato;

	document.getElementById ("nacimiento").innerHTML = 

	"Tu edad es " + edad + " " + "años";

		}

// Mostrar el año anterior, el año introducido y el año posterior

function anos () {
	var dato = parseInt (document.getElementById ("number2").value);
	var anterior = dato-1;
	var posterior = dato+1;

	document.getElementById ("anos").innerHTML =

	" Estás en el año " + " " + dato + "." + "<br>"+ "El año anterior fue: " +
	 + anterior + "." + "<br>" + "El año posterior será: " + posterior + ".";

}

// Mostar la fecha en este formato "dd/mm/aaaa"

function fechaCompleta () {
	var datoDia = parseInt (document.getElementById ("number3").value);
	if (datoDia < 0 || datoDia > 31) {
	alert (" Por favor introduce una cifra entre 1 y 31");
	}
	var datoMes = parseInt (document.getElementById ("number4").value);
	if (datoMes < 0 || datoMes > 12) {
		alert (" Por favor introduce una cifra entre 1 y 12");
		}
	var datoAno = parseInt (document.getElementById ("number5").value);

	document.getElementById ("fechaCompleta").innerHTML =

	" La hora que has introducido es " + datoDia + "/" + datoMes + "/" + datoAno + ".";

}

// Hora, minutos y segundos, mostar la hora

function horaCompleta () {
	var datoHora = parseInt (document.getElementById ("number6").value);
	if (datoHora < 0 || datoHora > 23) {
		alert (" Por favor introduce una cifra entre 1 y 23");
		}
	var datoMinutos = parseInt (document.getElementById ("number7").value);
	if (datoMinutos < 0 || datoMinutos > 60) {
		alert (" Por favor introduce una cifra entre 1 y 60");
		}
	var datoSegundos = parseInt (document.getElementById ("number8").value);
	if (datoSegundos < 0 || datoSegundos > 60) {
		alert (" Por favor introduce una cifra entre 1 y 60");
		}

	document.getElementById ("horaCompleta").innerHTML =

	" La fecha que has introducido es " + datoHora + ":" + datoMinutos + ":" + datoSegundos + ".";

}

// Introducir una fecha larga

function fechaLarga () {
	
var dat1 = parseInt (document.getElementById ("number9").value);
var dat2 = parseInt (document.getElementById ("number10").value);
var dat3 = parseInt (document.getElementById ("number11").value);

var mes = dat1;
var dia = dat2;
var ano = dat3;
var fechaOk = mes + "/" + dia + "/" + ano;

//alert (fechaOk);

var x = new Date (fechaOk);

var diaSemana = x.getDay();
var diaMes = x.getDate();
var mesNombre = x.getMonth();
var anoNumero = x.getFullYear();

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre","Diciembre"];
//alert (meses);
var nombreMes = meses [mesNombre];
//alert (nombreMes);

var semanas = ["Domingo","Lunes","Martes","Miercóles","Jueves","Viernes","Sábado"];
//alert (semanas);
var nombreSemana = semanas [diaSemana];
//alert (nombreSemana);

document.getElementById ("fechaLarga").innerHTML = " Hoy es " + nombreSemana + "," + diaMes + " de " + nombreMes + " de " + anoNumero + ".";

}

// Fecha y hora actual en este formato

function fechaFormato () {
	var date = new Date ();
// alert (dato);

var diaMes = date.getDate();
//alert (diaMes);
var mesNombre = date.getMonth();
var anoNumero = date.getFullYear();

var horas = date.getHours();
var minutos = date.getMinutes();
var segundos = date.getSeconds();
	

document.getElementById ("fechaFormato").innerHTML = " Has iniciado sesión el día " + diaMes + "/" + mesNombre + "/" + anoNumero + " a las " +
horas + ":" + minutos + ":" + segundos;

	}

// Días que faltan para tu cumpleaños

/*function diasQueFaltan () {

	var fechaUser = new Date (document.getElementById ("date1").value);
	// alert (fechaUser + " " + typeof(fechaUser)); Sat Dec 13 1969 01:00:00 GMT+0100 (hora estándar de Europa central) object
	
	var fechaAhora = new Date ();
	// alert(fechaAhora + " " + typeof(fechaAhora)); Thu Nov 15 2018 16:47:25 GMT+0100 (hora estándar de Europa central) object

	if (fechaAhora > fechaUser) {
	var resta = (fechaAhora - fechaUser);
	} else {
	var resta = (fechaUser - fechaAhora);
	}
	// alert(resta); lo devuelve en milisegundos 1543939201022

	var dias = ((((resta/1000)/60)/60)/24); // lo convertimos a días
	// alert(dias + " " + typeof(dias)); //17869.66149777778 dias desde que nací

	var decimalesDias = dias.toString().indexOf(".");
	//alert(decimalesDias + " " + typeof(decimalesDias));

	var numeroFinal = dias.toString().substring(0,decimalesDias);

	document.getElementById("diasQueFaltan").innerHTML = " Faltan "	+ 
	numeroFinal + " días para mi cumpleaños ";

}
*/

function diasQueFaltan () {
//var fechaUser = document.getElementById ("date1").value; // Da la fecha en formato string
var fechaUser = new Date (document.getElementById ("date1").value); //object

var fechaUserModificada = new Date().getFullYear() + "-" + (fechaUser.getMonth()+1) + "-" + (fechaUser.getDate()+1);

var convertirFechaUser = new Date(fechaUserModificada);

var fechaAhora = new Date ();

if (fechaAhora > convertirFechaUser) {
	var resta = (fechaAhora - convertirFechaUser);
	} else {
	var resta = (convertirFechaUser - fechaAhora);
	}

var dias = ((((resta/1000)/60)/60)/24); 
	

var decimalesDias = dias.toString().indexOf(".");


var numeroFinal = dias.toString().substring(0,decimalesDias);

document.getElementById("diasQueFaltan").innerHTML = " Faltan "	+ numeroFinal + " días para mi cumpleaños ";

}



//Cuantos días, horas, minutos y segundos ha vivido una persona

function diasVividos () {

var fechaUser = document.getElementById ("date2").value;
//alert (fechaUser + " " + typeof(fechaUser)); //nos da un string

var nuevaFechaUser = new Date(fechaUser);
//alert (nuevaFechaUser + " " + typeof(nuevaFechaUser)); //nos da un dato object

var fechaSistema = new Date();
//alert (fechaSistema + " " + typeof(fechaSistema)); //nos da un dato object

if (fechaSistema > nuevaFechaUser) {
	var resta = fechaSistema - nuevaFechaUser;
} else {
	// var resta =  nuevaFechaUser - fechaSistema;
	alert ("Por favor introduce una fecha válida");
}

var anos = (((((resta/1000)/60)/60)/24)/365); // años String
// alert ("años " + anos +typeof(anos));
var anosRedondeados = anos.toString().indexOf(".");
var extraerAno = anos.toString().substring(0,anosRedondeados);

var dias = ((((resta/1000)/60)/60)/24); // dias String
var diasRedondeados = dias.toString().indexOf(".");
var extraerDias = dias.toString().substring(0,diasRedondeados);

var horas = (((resta/1000)/60)/60); // horas String
var horasRedondeados = horas.toString().indexOf(".");
var extraerHoras = horas.toString().substring(0,horasRedondeados);

var minutos = ((resta/1000)/60); // minutos String
var minutosRedondeados = minutos.toString().indexOf(".");
var extraerminutos = minutos.toString().substring(0,minutosRedondeados);

var segundos = (resta/1000); // segundos String
var segundosRedondeados = segundos.toString().indexOf(".");
var extraersegundos = segundos.toString().substring(0,segundosRedondeados);

document.getElementById("diasVividos").innerHTML = 
" Has vivido "	+ extraerAno + " años " + "<br>" + 
" Has vivido "	+ extraerDias + " días " + "<br>" +
" Has vivido "	+ extraerHoras + " horas " + "<br>"+
" Has vivido "	+ extraerminutos + " minutos " + "<br>" +
" Has vivido "	+ extraersegundos + " segundos ";
}

//  Trimestre

function trimestres () {

	var fechaUser = document.getElementById("date3").value;
	//alert(fechaUser);
	var convertirFecha = new Date(fechaUser);

	var mes;

switch (convertirFecha.getMonth()) {
    case 0:
    case 1:
    case 2:
        mes = "Primer trimestre";
        break;
    case 3:
    case 4:
    case 5:
        mes = "Segundo trimestre";
        break;
    case 6:
	case 7:
    case 8:
        mes = "Tercer trimestre";
		break;
	case 9:
	case 10:
	case 11:
			mes = "Cuarto trimestre";
			break;

}
document.getElementById("trimestres").innerHTML = mes;
}

// Signo del zodiaco

/*Acuario (Enero 21 – Febrero 18)
Piscis (Febrero 19 – Marzo 20)
Aries (Marzo 21 –Abril 20)
Tauro (Abril 21 – Mayo 20)
Géminis (Mayo 21 – Junio 20)
Cáncer (Junio 21 – Julio 22)
Leo (Julio 23–Agosto 22)
Virgo (Agosto 23 – Septiembre 22)
Libra (Septiembre 23 – Octubre 22)
Escorpio (Octubre 23 – Noviembre 21)
Sagitario (Noviembre 22 – Diciembre 20)
Capricornio (Diciembre 21 – Enero 20)*/

function zodiaco () {
	
var fechaUser = new Date (document.getElementById ("date4").value);
var dia = fechaUser.getDate();
var mes = fechaUser.getMonth()+1;
var signo = "";
var imagen = "";

if ((mes == 2) && (dia >=21 ) ||  (mes == 2) && (dia <= 18 )) { 
	var signo = "Acuario";
	var imagen = "aquarius.jpg";
	} else if ((mes == 2) && (dia >=19 ) ||  (mes == 3) && (dia <= 20 )) {
		var signo = "Piscis";
		var imagen = "piscis.jpg";
		} else if ((mes == 3) && (dia >=21 ) ||  (mes == 4) && (dia <= 20 )) {
		var signo = "Aries";
		var imagen = "aries.jpg";
		} else if ((mes == 4) && (dia >=21 ) ||  (mes == 5) && (dia <= 20 )) {
		var signo = "Tauro";
		var imagen = "taurus.jpg";
		} else if ((mes == 5) && (dia >=21 ) ||  (mes == 6) && (dia <= 20 )) {
		var signo = "Géminis";
		var imagen = "gemini.jpg";
		} else if ((mes == 6) && (dia >=21 ) ||  (mes == 7) && (dia <= 22 )) {
		var signo = "Cáncer";
		var imagen = "cancer.jpg";
		} else if ((mes == 7) && (dia >=23 ) ||  (mes == 8) && (dia <= 22 )) {
		var signo = "Leo";
		var imagen = "leo.jpg";
		} else if ((mes == 8) && (dia >=23 ) ||  (mes == 9) && (dia <= 22 )) {
		var signo = "Virgo";
		var imagen = "virgo.jpg";
		} else if ((mes == 9) && (dia >=23 ) ||  (mes == 10) && (dia <= 22 )) {
		var signo = "Libra";
		var imagen = "libra.jpg";
		} else if ((mes == 10) && (dia >=23 ) ||  (mes == 11) && (dia <= 21 )) {
		var signo = "Escorpio";
		var imagen = "scorpio.jpg";
		} else if ((mes == 11) && (dia >=22 ) ||  (mes == 12) && (dia <= 20 )) {
		var signo = "Sagitario";
		var imagen = "sagittarius.jpg";
		} else if ((mes == 12) && (dia >=21 ) ||  (mes == 1) && (dia <= 20 )) {
		var signo = "Capricornio";
		var imagen = "capricorn.jpg";
		} else {
			var signo = " Error en la fecha "
			}

document.getElementById("zodiaco").innerHTML = " Tu signo zodiacal es: " + signo;
//document.getElementById("imgZodiaco").innerHTML = imagen;
document.getElementById("imgZodiaco").src= imagen;
}
                                