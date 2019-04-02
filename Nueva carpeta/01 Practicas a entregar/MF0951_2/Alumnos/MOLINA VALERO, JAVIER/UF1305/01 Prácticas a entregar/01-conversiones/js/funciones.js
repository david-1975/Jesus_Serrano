// JavaScript Document
//volumen
function obtenerlitros(){
	var litros=parseInt(document.getElementById("number1").value);
	
	var decilitros=litros*10;
	var centilitros=litros*100;
	var mililitros=litros*1000;
	
	document.getElementById("etiqueta1").innerHTML='Número de litros: '+litros+"<br>"+
			litros+" litros son "+decilitros+" decilitros "+"<br>"+
			litros+" litros son "+centilitros+" centilitros "+"<br>"+
			litros+" litros son "+mililitros+" mililitros ";
}

//longitud
function obtenerlongitud(){
	var longitud=Number(document.getElementById("number2").value);
	var metros=longitud*1000;
	var centimetros=metros*100;
	var milimetros=centimetros*10;
	
	document.getElementById("etiqueta2").innerHTML='Para '+longitud+'Km'+' son '+metros+ 'm'+'<br>'+
													'Para '+metros+'m'+' son '+centimetros+'cm'+'<br>'+
													'Para '+centimetros+'cm'+' son '+milimetros+'mm';
		
}

//tiempo
function obtenerTiempo(){
	var dia=Number(document.getElementById("number3").value);
	var horas=dia*24;
	var minutos=horas*60;
	var segundos=minutos*60;
	
	document.getElementById("etiqueta3").innerHTML="Para "+dia+" días son "+horas+" horas <br>"+
													"Para "+horas+" horas son "+minutos+ " minutos <br>"+
													"Para "+minutos+" minutos son "+segundos+" segundos";
	
}

//temperatura
function obtenerTemperatura(){
	var grados=Number(document.getElementById("number4").value);
	var faren=(grados*1.8)+32;
	var kelvin=grados+273.15;
	
	document.getElementById("etiqueta4").innerHTML="Para "+grados+" grados centígrados son "+faren+" grados farenheit<br>"+
													"Para "+grados+" grados centígrados son "+kelvin+" grados Kelvin";
}

//peso
function obtenerPeso(){
	var toneladas=Number(document.getElementById("number5").value);
	var kg=toneladas*1000;
	var g=kg*1000;
	var mg=g*1000;
	
	document.getElementById("etiqueta5").innerHTML="Para "+toneladas+" toneladas son "+kg+"Kg<br>"+
													"Para "+kg+" kilogramos son "+g+"g<br>"+
													"Para "+g+" gramos son "+mg+"mg";
}

//pesaje
function obtenerPesaje(){
	var kg=Number(document.getElementById("number6").value);
	var piedras=kg*0.1575;
	var libras=kg*2.2046;
	var onzas=kg*35.274;
	var kilates=kg*5000;
	
	document.getElementById("etiqueta6").innerHTML=kg+" Kilogramos son "+piedras+" piedras <br>"+
													kg+"Kilogramos son "+libras+" libras <br>"+
													kg+"Kilogramos son "+onzas+" onzas<br>"+
													kg+"Kilogramos son "+kilates+" kilates";
}

//distancia
function obtenerDistancia(){
	var km=Number(document.getElementById("number7").value);
	var millas=km*0.621371;
	var yardas=km*1093.61;
	var pies=km*3280.84;
	var pulgadas=km*39370.1;
	
	document.getElementById("etiqueta7").innerHTML="Para "+km+" kilometros son "+millas+" millas<br>"+
													"Para "+km+" kilometros son "+yardas+" yardas<br>"+
													"Para "+km+" kilometros son "+pies+" pies<br>"+
													"Para "+km+" kilometros son "+pulgadas+" pulgadas";
}

//moneda
function obtenerMoneda(){
var euros=Number(document.getElementById("number8").value);
var dolar=euros*1.13;
var libras=euros*0.88;
var yen=euros*128.27;
var yuanes=euros*7.85;

document.getElementById("etiqueta8").innerHTML="Para "+euros+" euros son "+dolar+" dólares<br>"+
												"Para "+euros+" euros son "+libras+" libras<br>"+
												"Para "+euros+" euros son "+yen+" yenes<br>"+
												"Para "+euros+" euros son "+yuanes+" yuanes<br>";
}

//velocidad
function obtenerVelocidad(){
	var kmh=Number(document.getElementById("number9").value);
	var mh=kmh*0.621371;
	var nudos=kmh*0.539957;
	var ms=kmh*0.277778;
	var ps=kmh*0.911344;
	
	document.getElementById("etiqueta9").innerHTML="Para "+kmh+"Km/h son "+mh+" m/h<br>"+
													"Para "+kmh+"Km/h son "+nudos+" nudos<br>"+
													"Para "+kmh+"Km/h son "+ms+" m/s<br>"+
													"Para "+kmh+"Km/h son "+ps+" p/s<br>";
}

//áreas
function obtenerArea(){
	var kmCuadrado=Number(document.getElementById("number10").value);
	var hc=kmCuadrado*100;
	var acres=kmCuadrado*247.105;
	var millas=kmCuadrado*0.386102;
	
	document.getElementById("etiqueta10").innerHTML="Para "+kmCuadrado+" Km<sup>2</sup> son "+hc+" hectáreas<br>"+
													"Para "+kmCuadrado+" Km<sup>2</sup> son "+acres+" acres<br>"+
													"Para "+kmCuadrado+" Km<sup>2</sup> son "+millas+" millas cuadradas";
	
}