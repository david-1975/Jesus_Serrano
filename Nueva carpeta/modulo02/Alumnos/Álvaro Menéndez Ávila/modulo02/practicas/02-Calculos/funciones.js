// JavaScript Document

//Pulgadas
function pulgadas () {
var dato = document.getElementById("number").value;

var pulgada = dato * 2.54;

document.getElementById("pulgada").innerHTML = dato + " centímetro(s) son " + pulgada + " pulgadas.";
}

//Par/Impar
function parImpar() {
var dato = document.getElementById("number1").value;

	if ((dato % 2) === 0) {
		document.getElementById("parImpar").innerHTML = dato + " es un número <b>par</b>";
	} else {
		document.getElementById("parImpar").innerHTML = dato + " es un número <b>impar</b>";
	}
}

//Precio final
function precioFinal() {
var precio = parseInt(document.getElementById("precio").value);
var descuento = parseInt(document.getElementById("descuento").value);
var iva = parseInt(document.getElementById("iva").value);

var cantiMenosDescuent = precio - (precio * descuento / 100);
var precioFinal = cantiMenosDescuent + (cantiMenosDescuent * iva / 100);

document.getElementById("precioFinal").innerHTML = 
"Precio introducido: " + "<b>" +precio + "</b>" + "<br>" + 
"Descuento introducido: " + "<b>" + descuento + "</b>" + "<br>" + 
"IVA introducido: " + "<b>" + iva + "</b>" + "<br>" + 
"Cantidad total: " + "<b>" + precioFinal + "</b>"; 

}

//Gygabytes
function gygabytes () {
var dato = document.getElementById("number2").value;

var megabyte = dato * 1024;
var kilobyte = megabyte * 1024;
var byte = kilobyte * 1024;

document.getElementById("gygabyte").innerHTML = dato + " gygabyte(s) son " + "<br>" + megabyte + " megabytes" + "<br>" + kilobyte + " kilobytes" + "<br>" + byte + " bytes"; ;
}

//Días, semanas y meses
function dias () {
var dato = document.getElementById("number3").value;

var dias = dato * 365;
var semanas = dato * 52.142857142857146.toFixed();
var meses = dato * 12;

document.getElementById("dias").innerHTML = dato + " año(s) son " + "<br>" + dias + " dias" + "<br>" + semanas + " semanas" + "<br>" + meses + " meses";
}

//Velocidad
function velocidad () {
var dato = document.getElementById("number4").value;

var metro = (dato * 1000) / 3600;
var metroSeg = metro.toFixed(1);

document.getElementById("velocidad").innerHTML = dato + " kilómetro(s) por hora, son " + "<br>" + metroSeg + " metros por segundo";
}

//Desplazamiento
function desplazamiento () {
var dato = document.getElementById("number5").value;

var coste = dato * 0.5;

document.getElementById("desplazamiento").innerHTML = dato + " kilómetro(s) de recorrido, supondrá un coste total de " + "<br>" + coste + " euros.";
	
}

//Almacenamiento
function almacenamiento () {
var dato = parseInt(document.getElementById("number6").value);

var megabyte = dato / 1024;
var capacidad = 4.7 / megabyte;
var capacidadTotal = capacidad.toFixed();

document.getElementById("almacenamiento").innerHTML = "Se pueden almacenar " + capacidadTotal + " canciones canción de " + dato + " megabytes";
}

//Distancia
function distancias() {
var distancia = parseInt(document.getElementById("distancia").value);
var kilometros = parseInt(document.getElementById("kilometros").value);


var tiempoTotal = (distancia / kilometros);

document.getElementById("mostrar").innerHTML = "Un auto que recorre la distancia de " + distancia + " kilometros a " + kilometros + " kilómetros por hora" + "<br>" + " deberá tardar " + tiempoTotal + " hora(s)";

}

//Descarga
function descarga () {
var dato = parseInt(document.getElementById("number7").value);

var tiempoDescarga = (dato * 1) / 10;
var minutos = tiempoDescarga / 60;

document.getElementById("descarga").innerHTML = "Si tenemos una conexión que descarga 10mb por segundo..." + "<br>" + 
"Y ponemos a descargar un archivo que pesa " + dato + "<br>" +
"Tardará un tiempo estimado de " + tiempoDescarga + " segundos" + "<br>" +
minutos.toFixed(1) + " minutos.";


}