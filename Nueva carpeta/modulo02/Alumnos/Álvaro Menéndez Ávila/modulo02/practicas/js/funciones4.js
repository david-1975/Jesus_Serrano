// JavaScript Document

//Método new Date()
function nuevaFecha () {
var fecha = new Date ();
alert ("La fecha actual es:" + "\n" + fecha);	
}

//Método getFullYear()
function ano() {
	var fecha = new Date();
	var cogerAno =	fecha.getFullYear();
	alert ("El año actual es:" + "\n" + cogerAno);	
}

//Método getMonth()
/*function mes() {
	var fecha = new Date();
	var cogerMes =	fecha.getMonth();
	alert ("El mes actual es:" + "\n" + cogerMes);
}*/

function mes() {
	var fecha = new Date();	
	var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	alert ("El mes actual es:" + "\n" + meses[fecha.getMonth()]);
	
}

//Método getDate()
function fecha() {
	var fecha = new Date();
	var cogerFecha = fecha.getDate();
	alert ("El día del mes actual es:" + "\n" + cogerFecha);	
}

//Método getHours()
function horas() {
	var fecha = new Date();
	var cogerHora = fecha.getHours();
	alert ("La hora actual es:" + "\n" + cogerHora);	
}

//Método getMinutes()
function minutos() {
	var fecha = new Date();
	var cogerMinutos = fecha.getMinutes();
	alert ("Los minutos actuales son:" + "\n" + cogerMinutos);	
}

//Método getSeconds()
function segundos() {
	var fecha = new Date();
	var cogerSegundos = fecha.getSeconds();
	alert ("Los segundos actuales son:" + "\n" + cogerSegundos);	
}

//Método getMilliseconds()
function miliSegundos() {
	var fecha = new Date();
	var cogerMilisegundos = fecha.getMilliseconds();
	alert ("Los milisegundos actuales son:" + "\n" + cogerMilisegundos);	
}

//Método getTime()
function tiempo() {
	var fecha = new Date();
	var cogerTiempo = fecha.getTime();
	alert ("Los milisegundos actuales son:" + "\n" + cogerTiempo);	
}

//Método getDay()
/*function dia() {
	var fecha = new Date();
	var cogerDia = fecha.getDay();
	alert ("El día actual es:" + "\n" + cogerDia);
}*/	

function dia() {
	var fecha = new Date();
	var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
	alert ("El día actual es:" + "\n" + dias[fecha.getDay()]);
}

//Método getWeek()
function semanaAno() {
	var fecha = new Date();
	var cogerSemanaAno = fecha.getWeekYear();
	alert ("La semana actual del año es:" + "\n" + cogerSemanaAno);	
}
