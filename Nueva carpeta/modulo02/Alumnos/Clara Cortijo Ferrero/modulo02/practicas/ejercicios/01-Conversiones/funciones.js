// JavaScript Document

function conv_litros() {
	var litro = parseFloat(document.getElementById("num_litros").value);
	
	var decilitros = litro * 10.0;
	var centilitros = litro * 100.0;
	var mililitros = litro *1000.0;
	
	document.getElementById("litros").innerHTML= "Has introducido: <strong>" + litro + "</strong> litros, que se corresponden con " + "<br><strong>" + decilitros + "</strong> decilitros" + "<br><strong>" + centilitros + "</strong> centilitros y, <br><strong>" + mililitros + "</strong> mililitros";
	
	}
	
	
function conv_longitud() {
	var km = parseFloat(document.getElementById("num_longitud").value);
	
	var metros = km * 1000.0;
	var centimetros = metros * 100.0;
	var milimetros = centimetros *10.0;
	
	document.getElementById("longitud").innerHTML= "Has introducido: <strong>" + km + "</strong> kilómetros, que se corresponden con " + "<br><strong>" + metros + "</strong> metros" + "<br><strong>" + centimetros + "</strong> centímetros y, <br><strong>" + milimetros + "</strong> milímetros";
	
	}
	
	
function conv_dia() {
	var dia = parseFloat(document.getElementById("num_dia").value);
	
	var hora = dia * 24.0;
	var minutos = hora * 60.0;
	var segundos = minutos *60.0;
	
	document.getElementById("dia").innerHTML= "Has introducido: <strong>" + dia + "</strong> días, que se corresponden con " + "<br><strong>" + hora + "</strong> horas" + "<br><strong>" + minutos + "</strong> minutos y, <br><strong>" + segundos + "</strong> segundos";
	
	}
	

function conv_temp() {
	var temp = parseFloat(document.getElementById("num_temp").value);
	
	var faren =  (temp * 1.8)+ 32.0;
	var kelvin = temp + 273.15;
	
	document.getElementById("temp").innerHTML= "Has introducido: <strong>" + temp + "</strong> grados Celsius, que se corresponden con " + "<br><strong>" + faren + "</strong> grados Farenheit, y " + "<br><strong>" + kelvin + "</strong> grados Kelvin";
	
	}
	
	
	
function conv_peso() {
	var toneladas = parseFloat(document.getElementById("num_peso").value);
	
	var kilogramos =  toneladas*1000.0;
	var gramos = kilogramos * 1000;
	var miligramos = gramos *1000;
	
	document.getElementById("peso").innerHTML= "Has introducido: <strong>" + toneladas + "</strong> toneladas, que se corresponden con " + "<br><strong>" + kilogramos + "</strong> kilogramos, " + "<br><strong>" + gramos + "</strong> gramos, y " + "<br><strong>" + miligramos + "</strong> miligramos";
	
	}
	
	
	
function conv_peso2() {
	var kilos = parseFloat(document.getElementById("num_peso2").value);
	
	var piedras =  kilos*0.1575;
	var libras = kilos*2.2046;
	var onzas = kilos*35.274;
	var quilates= kilos*5000;
	
	document.getElementById("peso2").innerHTML= "Has introducido: <strong>" + kilos + "</strong> kilos, que se corresponden con " + "<br><strong>" + piedras + "</strong> piedras, " + "<br><strong>" + libras + "</strong> libras, " + "<br><strong>" + onzas + "</strong> onzas, y <br><strong>" + quilates + "</strong> quilates";
	
	}
	
	
		
function conv_km() {
	var km = parseFloat(document.getElementById("num_km").value);
	
	var millas=  km*0.621371;
	var yardas = km*1093.61;
	var pies = km*3280.84;
	var pulgadas= km*39370.1;
	
	document.getElementById("km").innerHTML= "Has introducido: <strong>" + km + "</strong> kilómetros, que se corresponden con " + "<br><strong>" + millas + "</strong> millas, " + "<br><strong>" + yardas + "</strong> yardas, " + "<br><strong>" + pies + "</strong> pies, y <strong><br>" + pulgadas + "</strong> pulgadas";
	
	}
	
	
	
	
function conv_moneda() {
	var euros = parseFloat(document.getElementById("num_moneda").value);
	
	var dolares= euros*1.13;
	var libras = euros*0.88;
	var yenes = euros*128.27;
	var yuanes= euros*7.85;
	
	document.getElementById("moneda").innerHTML= "Has introducido: <strong>" + euros + "</strong> euros, que se corresponden con " + "<br><strong>" + dolares + "</strong> dolares US, " + "<br><strong>" + libras + "</strong> libras, " + "<br><strong>" + yenes + "</strong> yenes, y <strong><br>" + yuanes + "</strong> yuanes";
	
	}		
	
	
	
		
function conv_velocidad() {
	var kmh = parseFloat(document.getElementById("num_velocidad").value);
	
	var ms= kmh*0.277778;
	var millash = kmh*0.621371;
	var nudos = kmh*0.539957;
	var piess= kmh*0.911344;
	
	document.getElementById("velocidad").innerHTML= "Has introducido: <strong>" + kmh + "</strong> kilometros/h, que se corresponden con " + "<br><strong>" + ms + "</strong> metros/s, " + "<br><strong>" + millash + "</strong> millas/h, " + "<br><strong>" + nudos + "</strong> nudos, y <strong><br>" + piess + "</strong> pies/s";
	
	}	
	
	
	
	
	
function conv_area() {
	var kmq = parseFloat(document.getElementById("num_area").value);
	
	var hectareas= kmq*100;
	var acres = kmq*247.105;
	var millasq= kmq*0.386102;
	
	
	document.getElementById("area").innerHTML= "Has introducido: <strong>" + kmq + "</strong> km<sup>2</sup>, que se corresponden con " + "<br><strong>" + hectareas + "</strong> hectareas, " + "<br><strong>" + acres + "</strong> acres, y" + "<br><strong>" + millasq + "</strong> millas<sup>2</sup>";
	
	}	
