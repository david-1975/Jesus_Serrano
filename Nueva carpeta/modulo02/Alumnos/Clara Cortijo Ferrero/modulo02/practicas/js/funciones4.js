// JavaScript Document

// new Date
function nuevafecha(){
	var fecha = new Date();
	alert("La fecha es: " + fecha);
	
}


// getFullYear

function devuelveaño(){
	var fecha = new Date();
	var año = fecha.getFullYear();
	alert("Estamos en el año: " + año);
	
	
}
	
	

// getMonth

function devuelvemes(){
	var fecha = new Date();
	var mesnumero = fecha.getMonth()+1;
	var mes= fecha.getMonth();
	var mesletra=["Enero", "Febrero", "Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
	alert("Estamos en el mes: " + mes + " es decir: " + mesletra[mes]);
	
	
}


// getWeek

function devuelvesemana(){
	var fecha = new Date();
	var semana = fecha.getWeek();
	alert("Estamos en la semana: " + semana);
	
	
}



// getDay

function devuelvedia(){
	var fecha = new Date();
	var dia = fecha.getDay();
	var dialetra=["Lunes", "Martes","Miércoles", "Jueves", "Viernes","Sábado","Domingo"]
	alert("Estamos en el día " + dia + " de la semana, es decir en: " + dialetra[dia-1]);
	
	
}

// getHours

function devuelvehora(){
	var fecha = new Date();
	var hora = fecha.getHours();
	
	alert("Son las " + hora + " horas");
	
	
}


// getDate

function diadelmes(){
	var fecha = new Date();
	var diames = fecha.getDate();
	
	alert("Es el día "+ diames + " del mes");
	
	
}


// getMinutes

function minutos(){
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	
	alert("Son las " + hora + " horas, " + minutos + " minutos");
	
	
}


// getSeconds

function segundos(){
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();
	
	alert("Son las " + hora + " horas, " + minutos + " minutos, " + segundos + " segundos");
	
	
}



// getMilliseconds

function milisegundos(){
	var fecha = new Date();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();
	var miliseg = fecha.getMilliseconds();
	
	alert("Son las " + hora + " horas, " + minutos + " minutos, " + segundos + " segundos, " + miliseg + " milisegundos");
	
	
}


// getTime

function devuelvetiempo(){
	var fecha = new Date();
	var tiempo = fecha.getTime();

	
	alert("Han pasado " + tiempo + " milisegundos desde  la medianoche del 1 de Enero de 1970");
	
	
}


// getTimezoneOffset()

function offsetzonahoraria(){
	var fecha = new Date();
	var offset = fecha.getTimezoneOffset();

	
	alert("Hay " + offset + " minutos de diferencia entre el UTC y la hora local");
	
	
}


// Now

function ahora(){
	var fecha = new Date();
	var  datenow= Date.now();

	
	alert("Han pasado " + datenow + " milisegundos desde  la medianoche del 1 de Enero de 1970");
	
	
}
