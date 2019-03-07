// JavaScript Document

// Método new Date()

function nuevaFecha() {
	var fecha = new Date();
	alert ("La fecha es :" + "\n" + fecha);
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
	var mes = fecha.getMonth()+1;
	alert ("El mes actual es :" + "\n" + mes);
	}
	

	
// Método getDate()

function cogerDia() {
	var fecha = new Date();
	var dia = fecha.getDate();
	alert ("El día actual es :" + "\n" + dia);
	}
	
// Método getHours()

function cogerHoras() {
	var fecha = new Date();
	var horas = fecha.getHours();
	alert ("La hora actual es :" + "\n" + horas);
	}
	
// Método getMinutes()

function cogerMinutos() {
	var fecha = new Date();
	var minutos = fecha.getMinutes();
	alert ("Los minutos actuales es :" + "\n" + minutos);
	}
	
// Método getSeconds()

function cogerSegundos() {
	var fecha = new Date();
	var segundos = fecha.getSeconds();
	alert ("Los segundos actuales es :" + "\n" + segundos);
	}
	
// Método getMilliseconds()

function cogerMilisegundos() {
	var fecha = new Date();
	var milisegundos = fecha.getMilliseconds();
	alert ("Los milisegundos actuales es :" + "\n" + milisegundos);
	}
	
// Método getTime()

function cogerTiempo() {
	var fecha = new Date();
	var tiempo = fecha.getTime();
	alert ("El número de milisegundos transcurridos desde 1 de enero de 1970 es :" + "\n" + tiempo);
	}
	
	// Método getDay()

function diaSemana() {
	var fecha = new Date();
	var semanaDia = fecha.getDay();
	var semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
	alert ("El día de la semana es :" + "\n" + semanaDia + "\n" + semana [fecha.getDay()]);
	}
	

	

