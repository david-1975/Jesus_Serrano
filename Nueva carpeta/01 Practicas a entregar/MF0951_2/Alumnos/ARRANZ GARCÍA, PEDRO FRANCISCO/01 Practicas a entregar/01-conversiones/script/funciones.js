// JavaScript Document

// EJERCICIO 1
function obtenerlitros() {
	var litros = Number(document.getElementById("number1").value);
	
	var decilitros = litros*10;
	var centilitros = litros * 100;
	var mililitros = litros * 1000;
	
	document.getElementById('do1').style.display = 'block';
	document.getElementById('etiqueta1').innerHTML = 
		"Número de libros " + litros + "<br>" +
		litros + " litros son " + decilitros + " decilitros" + "<br>" +
		litros + " litros son " + centilitros + " centilitros" + "<br>" +
		litros + " litros son " + mililitros + " mililitros";
}

// EJERCICIO 2
function obtenerlongitud() {
	var kms = Number(document.getElementById("number2").value);
	
	var metros = kms*1000;
	var centimetros = metros * 100;
	var milimetros = centimetros * 10;
	
	document.getElementById('do2').style.display = 'block';
	document.getElementById('etiqueta2').innerHTML = 
		"Número de kilómetros " + kms + "<br>" +
		kms + " kilómetros son " + metros + " metros" + "<br>" +
		metros + " metros son " + centimetros + " centímetros" + "<br>" +
		centimetros + " centimetros son " + milimetros + " milimetros";
}

// EJERCICIO 3
function obtenerTiempo() {
	var dias = Number(document.getElementById("number3").value);
	
	var horas = dias*24;
	var minutos = horas * 60;
	var segundos = minutos * 60;
	
	document.getElementById('do3').style.display = 'block';
	document.getElementById('etiqueta3').innerHTML = 
		"Número de días " + dias + "<br>" +
		dias + " días son " + horas + " horas" + "<br>" +
		dias + " días son " + minutos + " minutos" + "<br>" +
		dias + " días son " + segundos + " segundos";
}

// EJERCICIO 4
function obtenerTemperatura() {
	var cent = Number(document.getElementById("number4").value);
	
	var far = (cent*1.8)+32;
	var kelvin = cent * 273.15;
	
	document.getElementById('do4').style.display = 'block';
	document.getElementById('etiqueta4').innerHTML = 
		cent + "grados centígrados" + "<br>" +
		"son " + far + " grados Fahrenheit" + "<br>" +
		"y " + kelvin + " grados Kelvin";
}

// EJERCICIO 5
function obtenerPeso() {
	var tons = Number(document.getElementById("number5").value);
	
	var kilos = tons * 1000;
	var gramos = kilos * 1000;
	var miligramos = gramos * 1000;
	
	document.getElementById('do5').style.display = 'block';
	document.getElementById('etiqueta5').innerHTML = 
		tons + " toneladas" + "<br>" +
		"son " + kilos + " kilos" + "<br>" +
		"son " + gramos + " gramos" + "<br>" +
		"y " + miligramos + " miligramos";
}

// EJERCICIO 6
// (1kg = 0.1575 piedras), (1 kg = 2.2046 libras),(1kg = 35.274 onzas), (1 kg = 5000 kilates)
function obtenerPesaje() {
	var kilos = Number(document.getElementById("number6").value);
	
	var piedras = kilos * 0.1575;
	var libras = kilos * 2.2046;
	var onzas = kilos * 35.274;
	var kilates = kilos * 5000;
	
	document.getElementById('do6').style.display = 'block';
	document.getElementById('etiqueta6').innerHTML = 
		kilos + "kilos" + "<br>" +
		"son " + piedras + " piedras" + "<br>" +
		"son " + libras + " libras" + "<br>" +
		"son " + onzas + " onzas" + "<br>" +
		"y " + kilates + " kilates";
}

// EJERCICIO 7
// (1 km = 0,621371 millas), (1 km = 1093,61 yardas), (1 km =3280,84 pies), (1 km = 39370,1 pulgadas
function obtenerDistancia() {
	var km = Number(document.getElementById("number7").value);
	
	var millas = km * 0.621371;
	var yardas = km * 1093.61;
	var pies = km * 3280.84;
	var pulgadas = km * 39370.1 ;
	
	document.getElementById('do7').style.display = 'block';
	document.getElementById('etiqueta7').innerHTML = 
		km + "kilómetros" + "<br>" +
		"son " + millas + " millas" + "<br>" +
		"son " + yardas + " yardas" + "<br>" +
		"son " + pies + " pies" + "<br>" +
		"y " + pulgadas + " pulgadas";
}

// EJERCICIO 8
// (1€ = 1,13 dólares), (1€=0,88 libras), (1€ = 128.27 yenes), (1€ = 7,85 yuanes)
function obtenerMoneda() {
	var euros = Number(document.getElementById("number8").value);
	
	var dolares = euros * 1.13;
	var libras = euros * 0.88;
	var yenes = euros * 128.27;
	var yuanes = euros * 7.85;
	
	document.getElementById('do8').style.display = 'block';
	document.getElementById('etiqueta8').innerHTML = 
		euros + "euros" + "<br>" +
		"son " + dolares + " dolares" + "<br>" +
		"son " + libras + " libras" + "<br>" +
		"son " + yenes + " yenes" + "<br>" +
		"y " + yuanes + " yuanes";
}

// EJERCICIO 9
function obtenerVelocidad() {
	var km_h = Number(document.getElementById("number9").value);
	
	var ms = km_h * 0.277778;
	var mh = km_h * 0.621371;
	var nudos = km_h * 0.5399566368704161;
	
	document.getElementById('do9').style.display = 'block';
	document.getElementById('etiqueta9').innerHTML = 
		km_h + " kilómetros por hora" + "<br>" +
		"son " + ms + " metros por segundo" + "<br>" +
		"son " + mh + " millas por hora" + "<br>" +
		"y " + nudos + " nudos";
}

// EJERCICIO 10
// (1km2 = 100 hectáreas),  (1km2 = 247,105 acres), (1km2 = 0,386102 millas cuadradas)
function obtenerArea() {
	var km2 = Number(document.getElementById("number10").value);
	
	var hectareas = km2 * 100;
	var acres = km2 * 247.105 ;
	var millascuadradas = km2 * 0.386102;
	
	document.getElementById('do10').style.display = 'block';
	document.getElementById('etiqueta10').innerHTML = 
		km2 + " kilómetros cuadrados" + "<br>" +
		"son " + hectareas + " hectáreas" + "<br>" +
		"son " + acres + " acres" + "<br>" +
		"y " + millascuadradas + " millas cuadradas";
}