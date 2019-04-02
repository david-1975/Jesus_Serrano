// JavaScript Document
//Ejercicio 1---------
function obtenerlitros(){
	var litros = Number(document.getElementById("number1").value);
	var decilitros = litros * 10;
	var centilitros = litros* 100;
	var mililitros = litros * 1000;
	document.getElementById('etiqueta1').innerHTML=
		"Número de litros " + "<b>"+ litros +"</b>" + "<br>" + "<b>"+ litros + "</b>" + "litros son " + "<b>" + decilitros +"</b>" + 
		"</b>" +" decilitros " + "<b>"+ centilitros +"</b>" + " centilitros " + "<b>"+ mililitros +"</b>" +
		" mililitros.";
}
//Ejercicio 2 longitud-------------
function obtenerlongitud(){
	var kilometros = Number(document.getElementById("number2").value);
	var metros= kilometros * 1000;
	var centimetros = kilometros * 100000;
	var milimetros = kilometros * 10000000;
	
	document.getElementById("etiqueta2").innerHTML=
		"Número de Kilómetros " + kilometros + "<br>" + 
		kilometros + " Kilómetros son " + metros + " metros " + 
		centimetros + " centímetros " + 
		milimetros + " milimetros";
}

//Ejercico 3 tiempo-------------

function obtenerTiempo(){
	var dia = Number(document.getElementById("number3").value);
	var horas=dia * 24;
	var minutos = horas * 60;
	var segundos = minutos * 60;
	
	document.getElementById("etiqueta3").innerHTML=
		"Número de días " + dia + "<br>" + 
		dia + " días son " + horas + " horas " + 
		minutos + " minutos " + 
		segundos + " segundos";
}
//Ejercico 4 temperatura-------------

function obtenerTemperatura(){
	var centigrados = Number(document.getElementById("number4").value);
	var faren = (centigrados * 1.8) + 32;
	var kelvin = centigrados + 273.15;
	
	
	document.getElementById("etiqueta4").innerHTML=
		"Número de grados Centígrados " + centigrados + "<br>" + 
		centigrados + " grados Centígrados son " + faren + " grados Farenheit " + "ó " + 
		kelvin + " grados Kelvin ";
}

//Ejercicio 5 peso-------------
function obtenerPeso(){
	var tonelada = Number(document.getElementById("number5").value);
	var kilo = tonelada * 1000;
	var gramo= kilo * 1000;
	var miligramo = gramo * 1000;
	
	
	document.getElementById("etiqueta5").innerHTML=
		"Número de Toneladas " + tonelada+ "<br>" + 
		tonelada + " Toneladas son " + kilo + " kilos " + 
		gramo + " gramos " + 
		miligramo + " miligramos";
}

//Ejercicio 6 pesaje-------------
function obtenerPesaje(){
	var kilo = Number(document.getElementById("number6").value);
	var onzas = kilo * 35.274;
	var libras = kilo * 2.2046;
	var piedras = kilo * 0.1575;
	var quilates = kilo * 5000;
	
	
	document.getElementById("etiqueta6").innerHTML=
		"Número de kilogramos " + kilo+ "<br>" + 
		kilo + " Kilogramos equivalen a: " + onzas + " onzas " + 
		libras + " libras " + 
		piedras + " piedras " + quilates + "quilates";
}
//Ejercicio 7 distancia -------------
function obtenerDistancia(){
	var kilometro = Number(document.getElementById("number7").value);
	var millas= kilometro * 0.621371;
	var yardas = kilometro * 1093.61;
	var pies = kilometro * 3280.84;
	var pulgadas = kilometro * 39370.1;
	
	document.getElementById("etiqueta7").innerHTML=
		"Número de Kilómetros " + kilometro + "<br>" + 
		kilometro + " Kilómetros equivalen a: " + millas + " millas, " + 
		yardas + " yardas, " + 
		pies + " pies, "; +
		pulgadas + " pulgadas.";
}
//Ejercicio 8 Monedas -------------
function obtenerMoneda(){
	var euro = Number(document.getElementById("number8").value);
	var dolar = euro * 1.13;
	var libra = euro * 0.88;
	var yenes = euro * 128.27;
	var yuanes = euro * 7.85;
	
	document.getElementById("etiqueta8").innerHTML=
		"Euros " + euro + "<br>" + 
		euro + " Euros equivalen a: " + dolar + " dolar, " + 
		libra + " libra, " + 
		yenes + " yenes, "; +
		yuanes + " yuanes.";
}
//Ejercicio 9 distancia -------------
function obtenerVelocidad(){
	var kilometroh = Number(document.getElementById("number9").value);
	var metrosseg= kilometroh * 0.277778;
	var millash = kilometroh * 0.621371;
	var nudos = kilometroh * 0.539957;
	
	document.getElementById("etiqueta9").innerHTML=
		"Número de Kilómetros/hora " + kilometroh + "<br>" + 
		kilometroh + " Kilómetros/hora equivalena a: " + metrosseg + " metros por segundo, "+ millash + " millas por hora, " + 
		nudos + " nudos. ";
}
//Ejercicio 10 distancia -------------
function obtenerArea(){
	var kilometro2 = Number(document.getElementById("number10").value);
	var hectareas= kilometro2 * 100;
	var acres = kilometro2 * 247.105;
	var millas2 = kilometro2 * 0.386102;
	
	document.getElementById("etiqueta10").innerHTML=
		"Número de Kilómetros2 " + kilometro2 + "<br>" + 
		kilometro2 + " Kilómetros2 equivalena a: " + hectareas + " hectareas, "+ acres + " acres, " + 
		millas2 + " millas2. ";
}
