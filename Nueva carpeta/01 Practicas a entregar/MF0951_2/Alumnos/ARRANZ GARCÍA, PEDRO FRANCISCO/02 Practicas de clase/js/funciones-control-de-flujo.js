// JavaScript Document

//Estructura if
function horaIf () {
	if (new Date().getHours() < 14) {
		alert ("Buenos días");}
	alert ("Buenas tardes");
}

//Estructura else
function horaElse () {
	if (new Date().getHours() < 14) {
		alert ("Buenos días");}
	else {
	alert ("Buenas tardes");}
}

//Estructura else if
function horaElseIf() {
	if (new Date().getHours() >= 8 && new Date().getHours() <= 14) {
		alert ("Buenos días");}
	else if (new Date().getHours() >= 14 && new Date().getHours() <= 21) {
	alert ("Buenas tardes");}
	else {
	alert ("Buenas noches");}
}

//Estructura Switch
function switchCase() {
	switch (new Date().getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
    day = "Martes";
    break;
  case 3:
    day = "Miércoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case  6:
    day = "Sábado";
}
	alert ("Hoy es " + day);			
}

//Estructura For
function bucleFor() {
	var nombres = ["Beth", "Juan", "Pedro", "Joaquín", "Lope", "Ana"];
	var text = "";
	var i;
	for (i = 0; i < nombres.length; i++) {
  	text += nombres[i] + "\n";
	alert (text);}
}

//Estructura While
function mientrasWhile() {
var i = prompt("Introduce el número de repeticiones");
var a=1;
while (a <= i) {
  text = "<br>The number is " + a;
  a++;
alert(text);
}
}

//Estructura doWhile
function hacerMientrasDoWhile() {
var respuesta = "HELSINKI"; 	 	 
var acierto = false; 	 	 
for (var contador = 0; contador < 3 && acierto === false; contador++) {	 	 
 var respUsuario = prompt("Capital de Finlandia: ");	 	 
 if (respUsuario.toUpperCase() === respuesta) { 	 	 
 var acierto = true; 	 	 
 alert("Enhorabuena, has acertado");	 	 
 }	 	 
}	 	 
if (!acierto) {alert("Lo sentimos, has consumido tus 3 intentos")};
}

//Estructura Break
function romperBucle() {
	var text = "";
	var para = prompt("Escribe el número de iteraciones a realizar");
	var i;
	for(i = 0; i < para; i++)
	{
		if(i === para)
		{
			break;
		}
		alert(text += + i);
	}
	alert("Se para al llegar a " + para + " iteraciones.");	
}

//Estructura Continue
function continuarBucle() {
	var loop = 1;
	for(loop=1; loop<=10; loop++){
		if(loop===7){
			continue;
		}
		alert(loop + " ");
	}
	alert("Hemos salido del bucle");
}