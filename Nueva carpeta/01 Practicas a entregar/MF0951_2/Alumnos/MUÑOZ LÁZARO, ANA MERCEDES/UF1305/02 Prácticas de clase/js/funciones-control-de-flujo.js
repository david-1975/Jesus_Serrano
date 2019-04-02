// JavaScript Document
//Estructura if-----------------------
function horaIf(){
	var fecha= new Date();
	var hora= fecha.getHours();
	var mensaje= "";
	if (hora >=7 && hora <=12) {
		mensaje = "Buenos días";
	}
	if (hora >12 && hora <=18) {
		mensaje = "Buenas tardes";
	}
	if (hora >18 && hora <=23) {
		mensaje = "Buenas noches";
	}
	if (hora >0 && hora <7) {
		mensaje = "Dulces sueños";
	}
	alert(mensaje);
}

//Estructura else--------------
function horaElse(){
	var fecha= new Date();
	var hora= fecha.getHours();
	var mensaje= "";
	if (hora <=12) {
		mensaje = "Buenos días";
	}
	else {
		mensaje = "Buenas tardes";
	}
	alert(mensaje);
}

//Estructura Else if --------------
function horaElseIf() {
	var fecha= new Date();
	var hora= fecha.getHours();
	var mensaje= "";
	if (hora >=7 && hora <=12) {
		mensaje = "Buenos días";
	}
	else if (hora >12 && hora <=18) {
		mensaje = "Buenas tardes";
	}
	else if (hora >18 && hora <=23) {
		mensaje = "Buenas noches";
	}
	else {
		mensaje = "Dulces sueños";
	}
	alert(mensaje);
}
//Estructura switch--------------------------------
 function switchCase(){
	 var dia;
	 switch(new Date().getDay()){
		 case 0: dia = "Domingo".slice(0,3);
		 break;
	case 1: day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
alert(day);	 
 }

//Estructura repetitiva for----------------
function bucleFor(){
	var dias=["Lunes","Martes","Miercoles","Jueves","viernes","Sábado","Domingo"];
	var text = "";
	var i;
	for (i=0; i < dias.length; i++) {text += dias[i] + "\n";}
alert(text);
}


//Estructura repeitiva while ---------------------
function mientrasWhile() {
	var text = "";
	var i = 0;
	while (i < 10) {
  	text += "El número es " + i++ +"\n";}
	alert (text);
	//var numero = prompt("introduce un numero";);
//	var calcula = new Array(typeof(número));----Para crear la tabla de multiplicar sin hacer
}
//Estructura do while -----------------------
function hacerMientrasDoWhile() {
	//var cars = [1,2, "BMW", "Volvo", "Saab", "Ford"];para otro ejemplo
	var i = 0;
	var text = "";
	do { text += "\n El número es: "+ i; i++;}
while (i < 8);  
	alert (text);
}

//Sentencias saltar y continuar  break------------------
function romperBucle() {
	var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "Los números son: " + i + "\n";
	}
	alert (text)
}
//Sentencias saltar y continua metodo continue---------------
function continuarBucle(){
	var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "Los números son: " + i + "\n";
	}
	alert (text)
}
