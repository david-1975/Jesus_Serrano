// JavaScript Document

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
alert ("El mes actual es el " + mes + " , es decir, " + meses[fecha.getMonth()] + ". Recordar que se enumera de 0 a 11.");
}

// Método getDate()
function cogerDia() {
var fecha = new Date();
var dia = fecha.getDate();
alert ("El día en el que estamos es: " + dia + "\n");
}

// Método getHours()
function cogerHoras() {
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
alert ("El día de la semana actual es " + diaSemana + " , es decir, " + dias[fecha.getDay()] + ". Recordar que se enumera de 0 a 6 y de Domingo a Sábado.");

}

