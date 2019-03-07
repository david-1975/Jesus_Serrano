// JavaScript Document
//convertir a pulgadas
function pulgadas() {
var dato = parseInt(document.getElementById("number1").value);
var centimetros = dato * 2.54;

document.getElementById("demo1").innerHTML = dato + " pulgadas son " + centimetros + " centímetros."; 

}
//sueldoneto
function sueldoneto() {
	var dato = parseInt(document.getElementById("number2").value);
	var segsocial = dato * 6.5 /100;
	var irpf = dato * 15/100;
	var sueldonet = dato - segsocial - irpf;
	var sueldomensual = sueldonet / 14;
	var sueldomensual = sueldomensual.toFixed(2);
	
	document.getElementById("demo3").innerHTML = dato  +  " euros menos seguridad social y menos I.R.P.F. " +
	"<br>" + "es igual a: " + sueldonet + " euros.... ahora vas y lo cascass!!  " + 
	 "<br>" + "... y pringaillo....tu sueldo mensual es:  " + sueldomensual + " en 14 pagas...deprimente...";
	}
	//preciofinal
function preciofinal() {
	var dato = parseInt(document.getElementById("number3").value);
	var descuento = parseInt(document.getElementById("number4").value);
	var iva = parseInt(document.getElementById("number5").value);
	var descuentos =dato*descuento/100;
	var ivas = dato*iva/100;
	
	preciototal = dato - descuentos + ivas;
	preciototal = preciototal.toFixed(2);
	document.getElementById("demo4").innerHTML = "El precio total quitando el descuento y añadiendo el I.V.A. es de:  " + preciototal + "€";
	}
	//Número de bits
/*Byte y bit) 
Calcular cuántos son X gigabytes en megabyte, kilobytes, bytes y bit.
(1 Gigabytes = 1024 Megabytes), (1Megabytes = 1024 Kilobytes), (1Kilobytes = 1024 Bytes), (1Bytes = 8 bit */
function memoria () {
	
	var gigabytes =parseInt (document.getElementbyId("number7").value) ;
	var totalbits = (gigabytes*1024*1024*1024*8) ;
	var totalbytes = (totalbits/8);
	var totalkilobytes = (totalbytes/1024);
	var totalmegabytes = (totalkilobytes/1024);

	/*if (megabytes % 8==0 ) {alert("numero de gigas correcto ");
	} tambien (kilobytes % 8 == 0) {alert("numero de megas correcto ")
	else (bytes % 8==0) {alert("numero de kilobytes correcto")};*/
	
	document.getElementById("demo5").innerHTML = " Nmero total de bits:  " + totalbits + <br>
	" Numero total de bytes:  " +  totalbytes + <br> + "Numero total de kilobytes:  " +  totalkilobytes + 
	<br> + "Numero total de megabytes:  " + totalmegabytes;
	
	
	
	}
