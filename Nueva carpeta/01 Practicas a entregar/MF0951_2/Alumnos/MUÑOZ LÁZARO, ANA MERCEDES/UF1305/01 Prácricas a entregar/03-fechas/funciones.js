// JavaScript Document
// Ejercicio 1 ---------------------
function nacimiento(){
	var fecha = new Date(document.getElementById("date1").value);
	var anousuario= fecha.getFullYear();
	var anoActual = new Date().getFullYear();
	var resta= (anoActual - anousuario);
	var fechaActual = new Date();
	var mlseg = (fechaActual - fecha);
	var seg= mlseg / 1000;
	var min= seg / 60;
	var hora= min / 60;	
	var dias= hora /24;
	
	
		
	document.getElementById("etiqueta1").innerHTML= "Tu edad es: " + resta + "años"
	+ "<br>" + " Han pasado " + dias.toFixed(2) + " días," + "<br>" +
		hora.toFixed(2) + " horas, " + "<br>" +
		min.toFixed(2) + " minutos, " + "<br>" +
		"y " + seg.toFixed(2) + " segundos."; 
}

//Ejercicio 2 --------------------------
function formatoFecha(){
	var diai = Number(document.getElementById("number2").value);
	var mesi = Number(document.getElementById("number3").value);
	var anoi = Number(document.getElementById("number4").value);
	var fecha = new Date(anoi,mesi,diai);
	var fechasistema = new Date()
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var hora = fechasistema.getHours();
	var minuto= fechasistema.getMinutes();
	var segundos= fechasistema.getSeconds();
	var diaSemana= fecha.getDay();
	
	document.getElementById("etiqueta2").innerHTML= 
	"&quot" + dia + "/" + mes + "/" + ano + "&quot" + "<br>" +
	"&quot" + hora + "/" + minuto + "/" + segundos + "&quot";	
}
		
//Ejercicio 3 Fecha Larga------------------------------------
function fechaLarga(){ 
	var fecha = new Date(document.getElementById("date3").value);
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var diaSemana=fecha.getDay();
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	
	
	document.getElementById("etiqueta3").innerHTML=
	"&quot" +"Hoy es " + dias[diaSemana] + ", "+ dia + " de " + meses[mes] +" de " + ano +"&quot";
	
}

//Ejercicio 4 Inicio de sesión-----------------------------------
function inicioSesion (){
	var usuario = document.getElementById("text4").value;
	var contrasena = document.getElementById("password4").value;
	var fecha = new Date();
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth()+1;
	var dia = fecha.getDate();
	var hora = fecha.getHours();
	var minuto= fecha.getMinutes();
	var segundos= fecha.getSeconds();
	
	document.getElementById("etiqueta4").innerHTML= 
	"&quot" + "Hola " + usuario + " con la contraseña " + contrasena + " has iniciado la sesión el día " + dia + "/" + mes + "/" + ano + "&quot" + "<br>" +
	"a las " + hora + ":" + minuto + ":" + segundos + "&quot";	
	
}

//Ejercicio 5. Días que faltan----------------------
function diasFaltan(){
	var fecha = new Date(document.getElementById("date5").value);
    var actual = new Date();
	fecha.setFullYear(actual.getFullYear());
	var dias ="";
	var texto ="";
	if(fecha > actual) { 
		dias = (((((fecha - actual)/ 1000)/60)/60)/24);
		texto = "Te quedan ";
		}
		else if (fecha < actual) {
		dias = (((((actual - fecha)/ 1000)/60)/60)/24);
		texto= "Tu cumpleaños fue hace ";}
	
		else { //Falta que diga felicidades-----------------
		dias < 1;		
		texto= "Felicidades";}
		alert(dias);
	
	document.getElementById("etiqueta5").innerHTML= texto + dias.toFixed(0) + " días.";
}
