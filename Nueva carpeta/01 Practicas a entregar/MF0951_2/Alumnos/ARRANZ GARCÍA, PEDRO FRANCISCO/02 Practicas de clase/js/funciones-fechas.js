// JavaScript Document

function reloj() {
	var fecha = new Date();
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth()+1;
	var dia = fecha.getDate();
	var hora= fecha.getHours();
	var minuto = fecha.getMinutes();
	var segundo = fecha.getSeconds();
	var diaSemana = fecha.getDay();
	
	
	if (dia <10) {dia = "0" + dia;}
	document.getElementById("link1").innerHTML =
		"Día: " + dia;
	if (mes <10) {mes = "0" + mes;}
	document.getElementById("link2").innerHTML =
		"Mes: " + mes;
	document.getElementById("link3").innerHTML =
		"Año: " + ano;
	if (hora <10) {hora = "0" + hora;}
	document.getElementById("link4").innerHTML =
		"Hora: " + hora;
	if (minuto <10) {minuto = "0" + minuto;}
	document.getElementById("link5").innerHTML =
		"Minutos: " + minuto;
	if (segundo <10) {segundo = "0" + segundo;}
	document.getElementById("link6").innerHTML =
		"Segundos: " + segundo;	
	
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	document.getElementById("fechalarga").innerHTML = "Hoy es " + dias[diaSemana] + " " + dia + " de " + meses[fecha.getMonth()] + " de " + ano;
	setTimeout(reloj, 1000);
}

// Método new Date()
function nuevaFecha() {
var fecha = new Date ();
alert ("la fecha es :" + "\n" + fecha);
}

// Método getFullYear()
function cogerAno() {
var fecha = new Date();
var ano = fecha.getFullYear();
alert ("El año actual es :" + "\n" + ano);
}

// Método getMonth()
function cogerMes() {
var fecha = new Date();
var mes = fecha.getMonth();
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
alert ("El mes actual es :" + mes + "\n" + "Su nombre es " + meses[fecha.getMonth()]);
}

// Método getDate()
function cogerDia() {
var fecha = new Date();
var dia = fecha.getDate();
alert ("El día en el que estamos es: " + dia + "\n");
}

// Método getHours()
function cogerHora() {
var fecha = new Date();
var horas = fecha.getHours();
alert ("Los minutos actuales son: " + horas);
}

// Método getHours()
function cogerMinutos() {
var fecha = new Date();
var minutos = fecha.getMinutes();
alert ("Los minutos actuales son: " + minutos);
}

// Método getSeconds()
function cogerSegundos() {
var fecha = new Date();
var segundos = fecha.getSeconds();
alert ("Los minutos actuales son: " + segundos);
}

// Método getSeconds()
function cogerSegundos() {
var fecha = new Date();
var segundos = fecha.getSeconds();
alert ("Los minutos actuales son: " + segundos);
}

// Método getSeconds()
function cogerMilisegundos() {
var fecha = new Date();
var milisegundos = fecha.getMilliseconds();
alert ("Los minutos actuales son: " + milisegundos);
}

// Método getTime()
function cogerTiempo() {
var fecha = new Date();
var tiempo = fecha.getTime();
alert ("Los minutos actuales son: " + tiempo);
}

// Método getDay()
function cogerDiaSemana() {
var fecha = new Date();
var diaSemana = fecha.getDay();
var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
alert ("El día de la semana actual es: " + diaSemana + "\n" + "Su nombre es " + dias[fecha.getDay()]);
}

// Método getWeek()
function cogerSemana() {
var fecha = new Date();
var semana = fecha.getWeek();
alert ("Los minutos actuales son: " + semana);
}