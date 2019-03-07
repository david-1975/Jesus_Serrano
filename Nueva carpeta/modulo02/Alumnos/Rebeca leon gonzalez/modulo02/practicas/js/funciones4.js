// JavaScript Document

//Método new Date ()

function nuevaFecha(){	
	var fecha = new Date();
	alert ("la fecha es : " +  "\n" + fecha);	
	}

//Método getFullYear ()

function cogerAno(){
	var fecha = new Date ();
	var coger = fecha.getFullYear();
	alert ("El año actual es : " + "\n" + coger);
	}
	
//Método getMonth()
/*function cogerMes(){
	var fecha = new Date ();
	var coger = fecha.getMonth() +1;
	alert ("El mes actual es : " + "\n" + coger);	
	}*/
	function cogerMes(){
	var fecha = new Date ();
	var cogerMes = fecha.getMonth() +1;
	var mes = ["Enero","Febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
		alert ("El mes actual es : " + "\n" + 
				cogerMes + "\n"+
				"El nombre del mes es : " + mes[fecha.getMonth()]);	
				
	}
	
//Método getDate()
function cogerDia(){
	var fecha = new Date ();
	var coger = fecha.getDate();
	alert ("El día actual es : " + "\n" + coger);
	}
//Método getHours()
function cogerHora(){
	var fecha = new Date ();
	var coger = fecha.getHours();
	alert ("El hora actual es : " + "\n" + coger);
	}
// Método getMinutes()
function cogerMinutos(){
	var fecha = new Date ();
	var coger = fecha.getMinutes();
	alert ("El hora actual es : " + "\n" + coger);
	}
	
//Método getSeconds()

	function cogerSegundo(){
	var fecha= new Date();
	var coger = fecha.getSeconds();
	alert("Los milisegundos actuales son : " + "\n" + coger);	
	}
//Metodo getMilliseconds()

function cogerMilisegundo(){
	var fecha= new Date();
	var coger = fecha.getMilliseconds();
	alert("Los milisegundos actuales son : " + "\n" + coger);
	
	}
//Método getTime()
	function cogerTiempo(){
		var fecha= new Date();
		var coger = fecha.getTime();
		alert("El tiempo actual es : " + "\n" + coger);
	
		}
	//Método getDay()
	function cogerDia(){
		var fecha= new Date();
		var coger = fecha.getDay();
		var semana= ["Domingo","Lunes", "Martes", "Miercoles","Jueves","Viernes","Sabado"];
		alert("El dia actual es : " + "\n" + 
				coger + "\n" +
				"Este dia de la semana es : " + "\n" + 
				 semana[fecha.getDay()]);

		}
