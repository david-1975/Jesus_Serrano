// JavaScript Document

//Nacimiento
function nacimiento () {
var fecha = parseInt(document.getElementById("number").value);
var fechaActual = new Date().getFullYear();

var resultado = fechaActual - fecha;

document.getElementById("nacimiento").innerHTML = "Usted tiene " + resultado + " años.";
}

//Año posterior, anterior y actual
function calculoAnos () {
var fecha = parseInt(document.getElementById("number1").value);

var anterior = fecha - 1;
var posterior = fecha + 1;

document.getElementById("calculo").innerHTML = "El año introducido es " + fecha + "<br>" + "El año anterior es " + anterior + "<br>" + "El año posterior es " + posterior;	
}

//Fecha Entera
function fechaTotal () {
var dia = parseInt(document.getElementById("dia").value);
var mes = parseInt(document.getElementById("mes").value);
var ano = parseInt(document.getElementById("ano").value);
	

if ((dia <= 31) && (mes <= 12) && (ano >= 1900)){
	
	document.getElementById("fechaTotal").innerHTML = dia + "/" + mes + "/" + ano;
	} else {
		
		document.getElementById("fechaTotal").innerHTML = "Has introducido una fecha errónea";
		}
}

//Horas, minutos y segundos
function horas () {
var hora = parseInt(document.getElementById("hora").value);
var minuto = parseInt(document.getElementById("minuto").value);
var segundo = parseInt(document.getElementById("segundo").value);

if ((hora <= 23) && (minuto <= 59) && (segundo <= 59)){
	
	document.getElementById("horaActual").innerHTML = hora + ":" + minuto + ":" + segundo;
	} else {
		
		document.getElementById("horaActual").innerHTML = "Has introducido unos datos erróneos";
		}
}

//Día y fecha actual
function ahoraEs () {
var dia = parseInt(document.getElementById("dia2").value);
var mes = parseInt(document.getElementById("mes2").value);
var ano = parseInt(document.getElementById("ano2").value);
var fecha = mes + "/" + dia + "/" + ano;


var meses = ["", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
var semana = new Date(fecha).getDay();

if ((dia <= 31) && (mes <= 12) && (ano >= 1900)){
	
	document.getElementById("ahoraEs").innerHTML = "Hoy es " + dias[semana] + " " + dia + " de " + meses[mes] + " de " + ano;
	} else {
		
		document.getElementById("ahoraEs").innerHTML = "Has introducido una fecha errónea";
		}
}

//Inicio de sesión
function inicioSesion () {
var fecha = new Date();
var dia = fecha.getDate();
var mes = fecha.getMonth() + 1;
var ano = fecha.getFullYear();

var horas = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

document.getElementById("inicio").innerHTML = "Has iniciado sesión el día " + dia + "/" + mes + "/" + ano + ", a las " + horas + ":" + minutos + ":" + segundos + ".";

}

//Días restantes para tu cumpleaños
function cumpleanos () {
var fecha = new Date();

var dia = parseInt(document.getElementById("diacumple").value);
var mes = parseInt(document.getElementById("mescumple").value);
var ano = parseInt(document.getElementById("anocumple").value);

var mesActual = fecha.getMonth()+1;
var diaActual = fecha.getDate();

var total1 = "";
var total2 = "";

if (dia < diaActual) {
	total1 = diaActual - dia;
} else if (dia > diaActual) {
	total1 = dia - diaActual;
}



if (mes < mesActual) {
	total2 = mesActual - mes;
} else if (mes > mesActual) {
	total2 = mes - mesActual;
}
else{ total2 = 0;
}

document.getElementById("fechaRestante").innerHTML = "Quedan " + total2 + " meses y " + total1 + " días para tu cumpleaños";
}

//Tiempo vivido
function tiempoVivido () {
	
/*var dia = parseInt(document.getElementById("dia3").value);
var mes = parseInt(document.getElementById("mes3").value);
var ano = parseInt(document.getElementById("ano3").value);
var fecha = mes + "/" + dia + "/" + ano;
var fecha1 = "";
if ((dia <= 31) && (mes <= 12) && (ano >= 1970)){
	fecha1 = new Date(fecha).getTime();
	var fecha2 = new Date();

	alert(fecha2);
		
	var segundos = fecha1 / 1000;
	var minutos = segundos / 60;
	var horas = minutos / 60;
	var dias = (horas / 24).toFixed(0);
	
	document.getElementById("tiempoVivido").innerHTML = "Desde el día de tu nacimiento han pasado " + segundos + " segundos" + "<br>" + minutos + " minutos " + "<br>" + horas + " horas" + "<br>" + dias + " días";
	} else {
		alert("Introduzca una fecha válida");
		}*/
		

	var dia = parseInt(document.getElementById("dia3").value);
	var mes = parseInt(document.getElementById("mes3").value);
	var ano = parseInt(document.getElementById("ano3").value);	
	
if ((dia <= 31) && (mes <= 12) && (ano >= 1970)){
	var fecha = ano + "-" + mes + "-" + dia;
	var convertirFecha = new Date (fecha).getTime();
	var fechaSistema = new Date().getTime();
	
} else {
	alert("Introduzca una fecha válida");
}
	
var resta = "";
	
if (fechaSistema > convertirFecha) {
	resta = fechaSistema - convertirFecha;
} else {
	resta = convertirFecha - fechaSistema;
}
	var segundos = (resta / 1000).toString();
		var punto = segundos.indexOf(".");
		var redondeo = segundos.substr(0,punto);
	
	var minutos = (segundos / 60).toString();
		var punto1 = minutos.indexOf(".");
		var redondeo1 = minutos.substr(0,punto1);
		
	var horas = (minutos / 60).toString();
		var punto2 = horas.indexOf(".");
		var redondeo2 = horas.substr(0,punto2);
		
	var dias = (horas / 24).toString();
		var punto3 = dias.indexOf(".");
		var redondeo3 = dias.substr(0,punto3);
	
	var semanas = (dias / 7).toString();
		var punto4 = semanas.indexOf(".");
		var redondeo4 = semanas.substr(0,punto4);
	
	document.getElementById("tiempoVivido").innerHTML =
	"Has vivido " + "<b>" + redondeo + "</b>" + " segundos" + "<br>" +
	"Has vivido " + "<b>" + redondeo1 +"</b>" + " minutos " + "<br>" +
	"Has vivido " + "<b>" + redondeo2 +"</b>" + " horas" + "<br>" +
	"Has vivido " + "<b>" + redondeo3 +"</b>" + " días" + "<br>" +
	"Has vivido " + "<b>" + redondeo4 +"</b>" + " semanas" + "<br>";
}

//Trimestre
function trimestre () {
var dia = parseInt(document.getElementById("dia4").value);
var mes = parseInt(document.getElementById("mes4").value);
var ano = parseInt(document.getElementById("ano4").value);

var estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];
if ((dia <= 31) && (mes <= 12)){
	switch (mes) {
		case 12:
		case 1:
		case 2:
			document.getElementById("trimestre").innerHTML = "La estación actual es " + estaciones[0];
			break;
		case 3:
		case 4:
		case 5:
			document.getElementById("trimestre").innerHTML = "La estación actual es " + estaciones[1];
			break;
		case 6:
		case 7:
		case 8:
			document.getElementById("trimestre").innerHTML = "La estación actual es " + estaciones[2];
			break;
		case 9:
		case 10:
		case 11:
			document.getElementById("trimestre").innerHTML = "La estación actual es " + estaciones[3];
			break;
		default: document.getElementById("trimestre").innerHTML = "La fecha introducida no existe";
		}
	} else { alert (" La fecha introducida no existe");}
}

//Zodiaco
function zodiaco () {
var dia = parseInt(document.getElementById("dia5").value);
var mes = parseInt(document.getElementById("mes5").value);
var ano = parseInt(document.getElementById("ano5").value);


var signos = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio",  "Acuario", "Piscis"];

if ((dia >= 21) && (mes === 3) || ((dia <= 20) && mes === 4)){
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[0];
}
else if ((dia >= 21) && (mes === 4) || ((dia <= 20) && mes === 5)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[1];
}
 else if ((dia >= 21) && (mes === 5) || ((dia <= 21) && mes === 6)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[2];
}
 else if ((dia >= 22) && (mes === 6) || ((dia <= 22) && mes === 7)) {		
 	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[3];
} 
 else if ((dia >= 23) && (mes === 7) || ((dia <= 23) && mes === 8)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[4];
}
 else if ((dia >= 24) && (mes === 8) || ((dia <= 23) && mes === 9)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[5];	 
}
 else if ((dia >= 24) && (mes === 9) || ((dia <= 22) && mes === 10)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[6];	 
}
 else if ((dia >= 23) && (mes === 10) || ((dia <= 22) && mes === 11)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[7];	 	 
}
 else if ((dia >= 23) && (mes === 11) || ((dia <= 21) && mes === 12)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[8];	 	 	 
}
 else if ((dia >= 22) && (mes === 12) || ((dia <= 19) && mes === 1)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[9];	 	 	 
}
 else if ((dia >= 20) && (mes === 1) || ((dia <= 19) && mes === 2)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[10];	 	 	 
}
 else if ((dia >= 20) && (mes === 2) || ((dia <= 20) && mes === 3)) {
	document.getElementById("zodiaco").innerHTML = "Tu símbolo del zodiaco es " + signos[10];	 	 	 
}
 else {
	document.getElementById("zodiaco").innerHTML = "La fecha que has introducido es incorrecta";
}

}