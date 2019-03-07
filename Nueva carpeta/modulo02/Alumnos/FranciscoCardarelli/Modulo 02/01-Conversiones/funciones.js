// JavaScript Document

function litros() {
	var dato = document.getElementById("idCampo").value;
	var decilitro = dato * 10;
	var centilitro = dato * 100;
	var mililitro = dato * 1000;

	document.getElementById ("demo").innerHTML = dato + " Litros. Son: " + 
	decilitro + " Decilitros, " + centilitro +" Centilitros, " + mililitro + " Mililitros.";
	}
	
function longitud() {
	var dato = document.getElementById("idCampo1").value;
	var metros = dato * 1000;
	var centímetros = dato * 10000;
	var milímetros = dato * 100000;

	document.getElementById ("demo1").innerHTML = dato + " Kilometros. Son: " + 
	metros + " Metros, " + centímetros +" Centimetros, " + milímetros + " Milimetros.";
	}
	
function tiempo() {
	var dato = document.getElementById("idCampo2").value;
	var horas = dato * 24;
	var minutos = dato * 1440;
	var segundos = dato * 86400;

	document.getElementById("demo2").innerHTML = dato + " Días. Son: " + horas + " Horas, " + 
	minutos +" Minutos, " + segundos + " Segundos.";
	}

function temperatura() {
	var dato = parseInt(document.getElementById("idCampo3").value);
	var fahrenheit = dato * 1.8 + 32
	var kelvin = dato + 273.15
	
	document.getElementById("demo3").innerHTML = dato + " Grados centigrados. Son: " + 
	fahrenheit + " Grados Fahrenheit, y " + kelvin + " Grados Kelvin";
	}

function peso() {
	var dato = document.getElementById("idCampo4").value;
	var kilogramos = dato * 1000;
	var gramos = dato * 1000000; 
	var miligramos = dato * 1000000000;
	
	document.getElementById("demo4").innerHTML = dato + " Toneladas. Son: " + 
	kilogramos + " Kilogramos, " + gramos + " Gramos, " + miligramos + " Miligramos."
	}
	
function pesaje() {
	var dato = document.getElementById("idCampo5").value;
	var piedras = dato * 0.1575;
	var libras = dato * 2.2046; 
	var onzas = dato * 35.274;
	var kilates = dato * 5000;
	
	document.getElementById("demo5").innerHTML = dato + " Toneladas. Son: " + 
	piedras + " Piedras, " + libras + " Libras, " + onzas + " Onzas, " + kilates + "Kilates.";
	}
	
function distancia() {
	var dato = document.getElementById("idCampo6").value;
	var millas = dato * 0.621371;
	var yardas = dato * 1093.61; 
	var pies = dato * 3280.84;
	var pulgadas = dato * 39370.1;
	
	document.getElementById("demo6").innerHTML = dato + " Kilometros. Son: " + 
	millas + " Millas, " + yardas + " Yardas, " + pies + " Pies, " + pulgadas + "Pulgadas.";
	}

function monedas() {
	var dato = document.getElementById("idCampo7").value;
	var dólares = dato * 1.13;
	var libras = dato * 0.88; 
	var yen = dato * 128.27;
	var yuanes = dato * 7.85;
	
	document.getElementById("demo7").innerHTML = dato + " Euros. Son: " + 
	dólares + " Dólares, " + libras + " Libras, " + yen + " Yen, " + yuanes + " Yuanes.";
	}
	
function velocidad() {
	var dato = document.getElementById("idCampo8").value;
	var metrosh = dato * 0.621371;
	var nudos = dato * 0.539957; 
	var metross = dato * 0.277778;
	var piess = dato * 0.911344;
	
	document.getElementById("demo8").innerHTML = dato + " kilómetros por hora. Son: " + 
	metrosh + " Metros/h, " + nudos + " Nudos, " + metross + " Metros/s, " + piess + " Pies/s.";
	}
	
	function area() {
	var dato = document.getElementById("idCampo9").value;
	var hectareas = dato * 100;
	var acres = dato * 247.105; 
	var millas4 = dato * 0.386102;
		
	document.getElementById("demo9").innerHTML = dato + " kilómetros cuadrados. Son: " + 
	hectareas + " Hectáreas, " + acres + " Acres, " + millas4 + " Millas cuadradas.";
	}	
	
	
	
	