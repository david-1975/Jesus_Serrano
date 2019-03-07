// JavaScript Document
function litros(){
var dato = parseInt(document.getElementById("number").value);//para que nos convierta en  un numero entero.
var decilitro=dato*10;
var centilitro=dato*100; 
var mililitros= dato*1000;

document.getElementById("final").innerHTML= 
dato + " litros es igual a:"+ "<br>" + decilitro +" decilitros " +"<br>"+ centilitro + "centilitros" + "<br>"+ mililitros + "mililitros";

}

function kilometro(){
	
var dato = parseInt(document.getElementById("numero").value);
var metros = dato * 1000;
var centimetros = dato * 100000;
var milimetros = dato * 1e+6;

document.getElementById("kilometro").innerHTML=
dato + " " + "kilometros  son : " + "<br>" + metros + " Metros " + "." + centimetros + " Centímetros " + "." +  milimetros + "  Milímetros " + ".";
}


//dias
function horasDia(){
var dato = parseInt(document.getElementById("numero2").value);
var horas= dato * 24;
var minutos= dato * 24 * 60;
var segundos = dato * 24 * 60 * 60;

document.getElementById("diaHora").innerHTML=
dato + " " + "días son : " + "<br>" + horas + " horas " + "." + "<br>" +  minutos + " minutos " + "."  + "<br>" +  segundos + " segundos " + ".";
}


// Grados 
function grados(){
	var dato = parseInt(document.getElementById("numero3").value);
	var faren = (dato * 1.8)+32;
	var kelvin = dato + 273.15;
	
	document.getElementById("grados").innerHTML=
	dato + " " + "grados centígrados son : " + "<br>" + 
	faren + " Fahrenheit " + "." + "<br>" + 
	kelvin + " Kelvin " + ".";		
	}

function peso(){
	var dato = parseInt(document.getElementById("numero5").value);
	var kilogramos = dato * 1000 ;
	var gramos = kilogramos * 1000;
	var miligramos =  gramos * 1000;
	
	document.getElementById("peso").innerHTML=
	dato + " toneladas son: " + "<br>" + kilogramos + " kilogramos" + "<br>" + 
	gramos + " gramos " + "<br>" + 
	miligramos + " miligramos.";
	
	}
	
	
	function pesaje(){
	var dato = parseInt(document.getElementById("numero6").value);

	var onzas = dato * 0.1575  ;
	var libras  = dato *  2.2046;
	var piedras = dato * 35.274 ;
	var quilates = dato * 5000 ;
	
	document.getElementById("pesaje").innerHTML=
	dato + " kilogramos son: " + "<br>" + 
	onzas + " onzas " + "." + "<br>" +
	libras + " libras "  + "." + "<br>" + 
	piedras + " piedras " + "." + "<br>" +  
	quilates + " quilates " + ".";
	
	}
	
	function distancia(){
	var dato = parseInt(document.getElementById("numero7").value);

	var millas = dato * 0.621371;
	var pies  = dato *  1093.61;
	var yardas = dato * 3280.84 ;
	var pulgadas = dato * 39370.1;
	
	document.getElementById("distancia").innerHTML=
	dato + " kilogramos son: " + "<br>" + 
	millas + " millas " + "." + "<br>" +
	pies + " pies " + "." + "<br>" +
	yardas + " yardas " + "." + "<br>" + 
	pulgadas +  " pulgadas " + ".";
	}
	
	function moneda(){
	var dato = parseInt(document.getElementById("numero8").value);
	
	var dolar = dato * 1.13 ;
	var libra  = dato *  0.88;
	var yenes = dato * 128.27 ;
	var yuanes = dato * 7.85 ;
	
	document.getElementById("moneda").innerHTML=
	dato + " Euros son: " + "<br>" + 
	dolar + " dólares" + "." + "<br>" +
	libra + " libras" + "." + "<br>" +
    yenes + " yenes"  + "." + "<br>" +
	yuanes + " yuanes" + "." + "<br>";
	}
	
	function velocidad(){
	var dato = parseInt(document.getElementById("numero9").value);
	
	var millas = dato * 0.621371 ;
	var nudos  = dato * 0.539957;
	var metros = dato * 0.277778;
	var pies = dato * 0.911344 ;
	
	
	document.getElementById("velocidad").innerHTML=
	dato + " Kilómetrtos son: " + "<br>" + 
	millas + " millas" + "." + "<br>" +
	nudos + " nudos" + "." + "<br>" +
	metros + " metros" + "." + "<br>" +
	pies + " pies" + ".";
	}
	
	
	function area(){
	var dato = parseInt(document.getElementById("numero10").value);
	
	var hectarea = dato * 100 ;
	var acres = dato * 247.105;
	var millas = dato * 0.386102;
	
	document.getElementById("area").innerHTML=
	dato + " Kilómetrtos cuadrados son: " + "<br>" + 
	hectarea + " hectareas" + "." + "<br>" +
	acres + " acres" + "." + "<br>" +
	millas + " millas" + ".";	
	}