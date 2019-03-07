// JavaScript Document



//¿Cuántos  son X litros en decilitros, centilitos y mililitros?
//(1 litro = 10 decilitros), (1 litro = 100 centilitros), (1 litro = 1000 mililitros)</p>
function  fun1() {
	var dato = parseInt(document.getElementById("campo1").value);
	
	document.getElementById("idres1").innerHTML = dato + " litros son: " +
	dato * 10 + " decilitros, " + 
	dato * 100 + " centilitros, " +
	dato * 1000 + " mililitros";
}
//¿Cuántos son X kilómetros en metros, centímetros y milímetros?
//(1 km = 1000 metros), (1 metros = 100 centímetros), (1 centímetro = 10 milímetros)
function  fun2() {
	var dato = ParseInt(document.getElementById("campo2").value);
	
	document.getElementById("idres2").innerHTML = dato + " kilometros son son: " +
	dato * 1000 + " metros, " + 
	dato * 100000 + " centimetros, " +
	dato * 1000000 + " milimetros";
}
//¿Cuántas  son X días en horas, minutos y segundos?
//(1 día = 24 horas), (1 hora = 60 minutos), (1 minuto = 60 asegundos)
function  fun3() {
	var dato = parseInt(document.getElementById("campo3").value);
	
	document.getElementById("idres3").innerHTML = dato + " dias son: " +
	dato * 24 + " horas, " + 
	dato * 24 * 60 + " minutos, " +
	dato * 24 * 60 *60 + " segundos";
}
//¿Cuántos son X grados centígrados en grados fahrenheit y grados kelvin?
//(℉= ( ℃ * 1. 8 ) + 32 ), ( ℃ + 273.15 )</p>
function  fun4() {
	var dato = parseInt(document.getElementById("campo4").value);
	var dator =  ((dato * 9 / 5) + 32 );
	var datorr = ( dato + (273.15) );
	
	document.getElementById("idres4").innerHTML = dato + " grados centígrados son: " +
	dator + " fahrenheit, " + 
	datorr + " kelvin";
}
//¿Cuántos son X toneladas en kilogramos, gramos,  miligramos?
//(1 tl = 1000 kilogramos), (1kg = 1000gramos), (1g = 1000miligramos)
function  fun5() {
	var dato = parseInt(document.getElementById("campo5").value);
	
	document.getElementById("idres5").innerHTML = dato + " toneladas son: " +
	(dato * 1000) + " kilogramos, " + 
	(dato * 1000 * 1000) + " gramos, " +
	(dato * 1000 * 1000 * 1000) + " miligramos";
}
//¿Cuántos son X kilogramos en onzas, libras y piedras, quilates? 
//(1kg =0.1575 piedras), (1 kg = 2.2046 libras),(1kg = 35.274 onzas), (1 kg = 5000 kilates)
function  fun6() {
	var dato = parseInt(document.getElementById("campo6").value);
	
	document.getElementById("idres6").innerHTML = dato + " kilogramos son: " +
	(dato * 0.1575) + " piedras, " + 
	(dato * 2.2046) + " libras, " +
	(dato * 35.274) + " onzas, " +
	(dato * 5000) + " kilates";
}
//¿Cuántos son X kilómetros en millas, pies, yardas, pulgadas?
//(1 km = 0,621371 millas), (1 km = 1093,61 yardas), (1 km =3280,84 pies), (1 km = 39370,1 pulgadas)
function  fun7() {
	var dato = parseInt(document.getElementById("campo7").value);
	
	document.getElementById("idres7").innerHTML = dato + " km son: " +
	dato * 0.621371 + " millas, " + 
	dato * 1093.61 + " yardas, " +
	dato * 3280.84 + " pies, " +
	dato * 39370.1 + " pulgadas";
}
//¿Cuántos son X euros en dólares US, libras, yenes, yuanes?
//(1€ = 1,13 dólares), (1€=0,88 libras), (1€ = 128.27 yenes), (1€ = 7,85 yuanes)
function  fun8() {
	var dato = parseInt(document.getElementById("campo8").value);
	
	document.getElementById("idres8").innerHTML = dato + " euros son: " +
	dato * 1.13 + " dolares, " + 
	dato * 0.88 + " libras, " +
	dato * 128.27 + " yenes, " +
	dato * 7.85 + " yuanes";
}
//¿Cuántos son X kilómetros por hora en metros por segundo, millas por hora, nudos?
//(1km/h = 0,621371 millas/h), (1 km/h = 0,539957 nudos), (1km/h = 0,277778 metros/s), (1km/h = 0,911344 pies/s)
function  fun9() {
	var dato = parseInt(document.getElementById("campo9").value);
	
	document.getElementById("idres9").innerHTML = dato + " km\/h son: " +
	dato * 0.621371 + " millas\/h, " + 
	dato * 0.539957 + " nudos, " +
	dato * 0.277778 + " metros\/s, " +
	dato * 0.911344 + " pies\/s";
}
//  ¿Cuántos son X km cuadrados en hectareas, acres y millas cuadradas?
//  (1km2 = 100 hectáreas),  (1km2 = 247,105 acres), (1km2 = 0,386102 millas cuadradas)
function  fun10() {
	var dato = parseInt(document.getElementById("campo10").value);
	
	document.getElementById("idres10").innerHTML = dato + " km2 son: " +
	dato * 100 + " hectareas, " + 
	dato * 247.105 + " acres, " +
	dato * 0.386102 + " millas cuadradas";
}



	


