// JavaScript Document

// Método new Date()
function nuevafecha() {
	var fecha = new Date();
	alert ("La fecha actual es: " + "\n" + fecha);
}

// Método getFullYear()
function obtenFechaActual() {
	var fecha = new Date();
	var horaActual = fecha.getFullYear();
	alert ("Estamos en el año: " + "\n" + horaActual);
}

// Método getDate()
function obtenDia() {
	var fecha = new Date();
	var diaActual = fecha.getDate();
	alert ("Estamos en el día: " + "\n" + diaActual);
}

// Método getMonth()
function obtenMesActual() {
	var fecha = new Date();
	var mes = fecha.getMonth()+1;
	alert ("Estamos en el mes: " + "\n" + mes);
}

// Método getHours()
function obtenHoraActual() {
	var fecha = new Date();
	var hora = fecha.getHours();
	alert ("La hora actual es: " + "\n" + hora);
}

// Método getMinutes()
function obtenMinutos() {
	var fecha = new Date();
	var minutos = fecha.getMinutes();
	alert ("Los minutos actuales son: " + "\n" + minutos);
}

// Método getSeconds()
function obtenSegundos() {
	var fecha = new Date();
	var segundos = fecha.getSeconds();
	alert ("Los segundos actuales son: " + "\n" + segundos);
}

// Método getMilliseconds()
function obtenMiliSegundos() {
	var fecha = new Date();
	var miliSeg = fecha.getMilliseconds();
	alert ("Los milisegundos actuales son: " + "\n" + miliSeg);
}

// Método getTime()
function obtenTodosMiliSegundos() {
	var fecha = new Date();
	var miliSeg = fecha.getTime();
	alert ("Los milisegundos desde el 1 de Enero del 1970 son: " + "\n" + miliSeg);
}

// Método getDay()
function obtenDiaSemana() {
	var fecha = new Date();
	var dia = fecha.getDay();
	alert ("Hoy el el día " + "\n" + dia + "\n" + " de la semana.");
}
