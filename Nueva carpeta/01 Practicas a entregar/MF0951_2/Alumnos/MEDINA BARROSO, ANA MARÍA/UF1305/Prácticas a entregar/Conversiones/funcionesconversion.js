//Funciones para trabajar con arrays



function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function obtenerlitros(){
	var litros=Number(document.getElementById("number1").value); //Recoge valor de formulario
	var decilitros=litros*10;
	var centilitros=litros*100;
	var mililitros= litros*1000;
	
	document.getElementById("etiqueta1").innerHTML="<b>RESULTADO:</b><br>"+litros+ " litros, es igual a :<br>" + decilitros+" decilitros <br>"+ centilitros+" centilitros<br>"+ mililitros+" mililitros."
}

function obtenerlongitud(){
	var kilometros=Number(document.getElementById("number2").value); //Recoge valor de formulario
	var metros=kilometros*1000;
	var decimetros=kilometros*10000;
	var centimetros= kilometros*10000;
	
	document.getElementById("etiqueta2").innerHTML="<b>RESULTADO:</b><br>"+kilometros+ " kilometros, es igual a :<br>" + metros +" metros <br>"+ decimetros+" decimetros<br>"+ centimetros+" centimetros."
	
}

function obtenerTiempo(){
	var dias=Number(document.getElementById("number3").value); //Recoge valor de formulario
	var horas=dias*24;
	var minutos=horas*60;
	var segundos= minutos*60;
	
	document.getElementById("etiqueta3").innerHTML="<b>RESULTADO:</b><br>"+dias+ " dias, es igual a :<br>" + horas +" horas <br>"+ minutos+" minutos<br>"+ segundos+" segundos."
}

function obtenerTemperatura(){
	var temperatura=Number(document.getElementById("number4").value); //Recoge valor de formulario
	var farenh=(temperatura*1.8)+32;
	var kelvin=temperatura+273.15;
	
	
	document.getElementById("etiqueta4").innerHTML="<b>RESULTADO:</b><br>"+temperatura+ " ºC, es igual a :<br>" + farenh +" \ Farenheit <br>"+ kelvin+" \ Kelvin<br>";
}

function obtenerPeso(){
	var toneladas=Number(document.getElementById("number5").value); //Recoge valor de formulario
	var kilogramos=toneladas*1000;
	var gramos=kilogramos*1000;
	var miligramos= gramos*1000;
	
	document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+toneladas+ " toneladas, es igual a :<br>" + kilogramos +" kilos <br>"+ gramos+" gr<br>"+ miligramos+" miligramos."
}

function obtenerPesaje(){
	var kilos=Number(document.getElementById("number6").value); //Recoge valor de formulario
	var onzas=kilos*35.274;
	var libras=kilos*2.2046;
	var piedras= kilos*0.1575;
	var quilates= kilos*5000;
	
	document.getElementById("etiqueta6").innerHTML="<b>RESULTADO:</b><br>"+kilos+ " kilos, es igual a :<br>" + onzas +" Onzas <br>"+ libras+" Libras<br>"+ piedras+" Piedras.<br>"+quilates+"Quilates"	
}

function obtenerDistancia(){
	var kilometros=Number(document.getElementById("number7").value); //Recoge valor de formulario numérico
	var millas=kilometros*0.621371;
	var yardas=kilometros*1093.61;
	var pies= kilometros*3280.84;
	var pulgadas= kilometros*39370.1;
	
	
	document.getElementById("etiqueta7").innerHTML="<b>RESULTADO:</b><br>"+kilometros+ " kilometros, es igual a :<br>" + millas +" Millas <br>"+ yardas+" Yardas<br>"+ pies +" Pies<br>"+pulgadas+" Pulgadas"	
}

function obtenerMoneda(){
	var euros=Number(document.getElementById("number8").value); //Recoge valor de formulario
	var dolares=(euros*1.13).toFixed(2);
	var libras=(euros*0.88).toFixed(2);
	var yenes= (euros*128.27).toFixed(2);
	var yuanes= (euros*7.85).toFixed(2);
	
	
	document.getElementById("etiqueta8").innerHTML="<b>RESULTADO:</b><br>"+euros+ " Euros, es igual a :<br>" + dolares +" Dolares <br>"+ libras+" Libras<br>"+ yenes +" Yenes<br>"+yuanes+" Yuanes"	
}

function obtenerVelocidad() {
	var kilometros=Number(document.getElementById("number9").value); //Recoge valor de formulario
	var metros=kilometros*0.277778;
	var millas=kilometros*0.621371;
	var nudos= kilometros*0.539957;
		
	
	document.getElementById("etiqueta9").innerHTML="<b>RESULTADO:</b><br>"+kilometros+ " Km/h, es igual a :<br>" + metros +" m/sg <br>"+ millas+" Millas /hora<br>"+ nudos +" Nudos<br>";
	
}

function obtenerArea(){
	var kilometros=Number(document.getElementById("number10").value); //Recoge valor de formulario
	var hectareas=kilometros*100;
	var acres=kilometros*247.105;
	var millas= kilometros* 0.386102;
		
	
	document.getElementById("etiqueta10").innerHTML="<b>RESULTADO:</b><br>"+kilometros+ " Km<sup>2</sup>, es igual a :<br>" + hectareas +" hectáreas <br>"+ acres+" Acres <br>"+ millas +" Millas<br>";
}
