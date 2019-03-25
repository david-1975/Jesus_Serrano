// JavaScript Document

//volumen

function obtenerlitros(){
	var litros = parseInt(document.getElementById("number1").value);
	
	var decilitros = litros * 10;
	var centilitros = litros *100;
	var mililitros = litros *1000;
	
	document.getElementById('etiqueta1').innerHTML=
		"Número de litros: " + "<strong>" + litros + "</strong>" + "<br>" +
		"<strong>" + litros + "</strong>" + " litros son " + "<strong>" + decilitros + "</strong>" + 
		" decilitros" + "<br>" +
		"<strong>" + litros + "</strong>" + " litros son " + "<strong>" +  centilitros + "</strong>" + 
		" centilitros" + "<br>" +
		"<strong>" + litros + "</strong>" + " litros son " + "<strong>" + mililitros + "</strong>" + " mililitros";
}

//longitud

function obtenerlongitud(){
	var longitud = parseInt(document.getElementById("number2").value);
	
	var decimetros = longitud * 10;
	var centimetros = longitud * 100;
	var milimetros = longitud * 1000;
	
	document.getElementById("etiqueta2").innerHTML=
		"Longitud introducida: " + "<strong>" + longitud + "</strong>"  + " metros son: " + "<br>" +
		"<strong>" + decimetros + "</strong>" + " decimetros" + "<br>" +
		"<strong>" + centimetros + "</strong>" + " centimetros" + "<br>" +
		"<strong>" + milimetros + "</strong>" + " milimetros";
}

//tiempo

function obtenerTiempo(){
	var dia = parseInt(document.getElementById("number3").value);
	
	var hora = dia * 24;
	var minuto = hora * 60;
	var segundo = minuto * 60;
	
	document.getElementById("etiqueta3").innerHTML=
		"Has escogido " + "<strong>" + dia + "</strong>" + " días, que son: " + "<br>" +
		"<strong>" + hora + "</strong>" + " horas" + "<br>" +
		"<strong>" + minuto + "</strong>" + " minutos" + "<br>" +
		"<strong>" + segundo + "</strong>" + " segundos";	
}

//temperatura

function obtenerTemperatura(){
	var grados = parseInt(document.getElementById("number4").value);
	
	var farenheit = ( grados * 1.8 ) + 32;
	var kelvin = ( grados + 273.15 );
	
	document.getElementById("etiqueta4").innerHTML=
		"Has escogido " + "<strong>" + grados + "</strong>" + "</strong>" + " ºCentrigrados, que son: " + "<br>" +
		"<strong>" + parseInt(farenheit) + "</strong>" + " ºFarenheit" + "<br>" +    //Le añado el parseInt para que no salgan decimales
		"<strong>" + parseInt(kelvin) + "</strong>" + " ºKelvin";	
}

//peso

function obtenerPeso(){
	var toneladas = parseInt(document.getElementById("number5").value);
	
	var kilos = toneladas * 1000;
	var gramos = toneladas * 1000000;
	var miligramos = toneladas * 1000000000;
	
	document.getElementById("etiqueta5").innerHTML=
		"Has escogido " + "<strong>" + toneladas + "</strong>" + " toneladas, que son: " + "<br>" +
		"<strong>" + kilos + "</strong>" + " kilos" + "<br>" +
		"<strong>" + gramos + "</strong>" + " gramos" + "<br>" +
		"<strong>" + miligramos + "</strong>" + " miligramos";		
}

//pesaje

function obtenerPesaje(){
	var peso = parseInt(document.getElementById("number6").value);
	
	var onzas = peso * 35.274;
	var libras = peso * 2.2046;
	var piedras = peso * 0.1575;
	var kilates = peso * 5000;
	
	document.getElementById("etiqueta6").innerHTML=
		"Has escogido " + "<strong>" + peso + "</strong>" + " kilos, que son: " + "<br>" +
		"<strong>" + parseInt(onzas) + "</strong>" + " onzas" + "<br>" +
		"<strong>" + parseInt(libras) + "</strong>" + " libras" + "<br>" +
		"<strong>" + parseInt(piedras) + "</strong>" + " piedras" + "<br>" +
		"<strong>" + parseInt(kilates) + "</strong>" + " kilates";		
}

//distancia
function obtenerDistancia(){
	var km = parseInt(document.getElementById("number7").value);
	
	var millas = km * 0.621371;
	var pies = km * 3280.84;
	var yardas = km *  1093.61 ;	
	var pulgadas = km *  39370.1;	
	
	document.getElementById("etiqueta7").innerHTML=
		"Has escogido " + "<strong>" + km + "</strong>" + " kilometros, que son: " + "<br>" +
		"<strong>" + parseInt(millas) + "</strong>" + " millas" + "<br>" +
		"<strong>" + parseInt(pies) + "</strong>" + " pies" + "<br>" +
		"<strong>" + parseInt(yardas) + "</strong>" + " yardas" + "<br>" +
		"<strong>" + parseInt(pulgadas) + "</strong>" + " pulgadas";		
}

//moneda
function obtenerMoneda(){
	var euro = parseInt(document.getElementById("number8").value);
	
	var dolar = euro * 1.13;
	var libras = euro * 0.88;
	var yenes = euro * 128.27;
	var yuanes = euro * 7.85;
	
	document.getElementById("etiqueta8").innerHTML=
		"Has escogido " + "<strong>" + euro + "</strong>" + " euros, que son: " + "<br>" +
		"<strong>" + parseInt(dolar) + "</strong>" + " dolares" + "<br>" +
		"<strong>" + parseInt(libras) + "</strong>" + " libras" + "<br>" +
		"<strong>" + parseInt(yenes) + "</strong>" + " yenes" + "<br>" +
		"<strong>" + parseInt(yuanes) + "</strong>" + " yuanes";		
}

//velocidad
function obtenerVelocidad(){
	var km = parseInt(document.getElementById("number9").value);
	
	var ms = km * 35.274;
	var millas = km * 2.2046;
	var nudos = km * 0.1575;
		
	document.getElementById("etiqueta9").innerHTML=
		"Has escogido " + "<strong>" + km + "</strong>" + " km/h, que son: " + "<br>" +
		"<strong>" + parseInt(ms) + "</strong>" + " m/s" + "<br>" +
		"<strong>" + parseInt(millas) + "</strong>" + " milla/s" + "<br>" +	
		"<strong>" + parseInt(nudos) + "</strong>" + " nudos/s";		
}

//areas
function obtenerArea(){
	var km = parseInt(document.getElementById("number10").value);
	
	var hc = km * 100;
	var acres = km * 247.105;
	var millas = km * 0.386102;	
	
	document.getElementById("etiqueta10").innerHTML=
		"Has escogido " + "<strong>" + km + "</strong>" + " km/h, que son: " + "<br>" +
		"<strong>" + parseInt(hc) + "</strong>" + " hectáreas" + "<br>" +
		"<strong>" + parseInt(acres) + "</strong>" + " acres" + "<br>" +	
		"<strong>" + parseInt(millas) + "</strong>" + " millas cuadradas";			
}
