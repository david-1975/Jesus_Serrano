//Método getnewdate()
function nuevo(){
	var d = new Date();
	var n = d.get();
	alert (n);
}

//Método getFullYear()
function año(){
	var fecha = new Date();
	alert ("El año actual es : " + "\n" + fecha.getFullYear());

}

//Método getMonth()
function mes(){
	var fecha = new Date();
	var mes =fecha.getMonth()+1;
	var meses =["Enero","Febrero","Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	alert ("El mes actual es: " + mes + "\n" + "Su nombre es: " + meses[fecha.getMonth()]);
}

//Método getDate()
function dia(){
	var fecha = new Date();
	alert ("Hoy es el día: "+ "\n"+fecha.getDate());
}

//Método getHours()
function hora(){
	var hora = new Date();
	alert (hora.getHours());
}

//Método getMinutes()
function minutos(){
	var minutos = new Date();
	alert (minutos.getMinutes());
}

//Método getSeconds()
function segundos(){
	var minutos = new Date();
	alert (minutos.getSeconds());
}

//Método getMilliseconds()
function milisegundos(){
	var milise=new Date();
	alert (milise.getMilliseconds());	
}

//Método getTime()

//Método getDay
function dia(){
	var fecha=new Date();
	var diasemana=fecha.getDay();
	var dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
	alert("El día de la semana actual es: " +diasemana+"\n"+"Y corresponde aSu nombre es: "+ dias[fecha.getDay()]);
}