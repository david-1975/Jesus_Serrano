// JavaScript Document



//Calcular cuántos centímetros son X pulgadas de una pantalla. 
//(1 pulgada = 2,54 centímetros)</p>
function  fun1() {
	var dato = parseInt(document.getElementById("campo1").value);
	
	document.getElementById("idres1").innerHTML = dato + " pulgadas pantalla son: " +
	dato * 2.54 + " centimetros, ";
}
//  Comprobar si un número es par o impar</strong></span>.
//(número % = 0) 
function  fun2() {
	var dato = parseInt(document.getElementById("campo2").value) ;
	var parimpar;
	
	if (dato  % 2 === 0){parimpar = "par";
		}
	else {	parimpar = "impar";
		}
	document.getElementById("idres2").innerHTML = " El número " + dato +
	" es: " + parimpar; 
}
//  Calcular el precio final de un producto introduciendo un precio, un descuento y el impuesto (IVA) a pagar.
//(ejemplo: precio = 50€, Descuento -20%, Impuesto +21%)
function  fun3() {
	var dato = parseInt(document.getElementById("campo3").value);
	var dato2 = parseInt(document.getElementById("campo3_2").value);
	var dato3 = parseInt(document.getElementById("campo3_3").value);
	var datoiva = dato * dato2 / 100;
	var datodes = dato * dato3 / 100;
	var datof = dato + datoiva - datodes;
	document.getElementById("idres3").innerHTML = "El precio final es: " +
	datof + " Euros";
	}
//  Calcular cuántos son X gigabytes en megabyte, kilobytes, bytes y bit.
//(1 Gigabytes = 1024 Megabytes), (1Megabytes = 1024 Kilobytes), (1Kilobytes = 1024 Bytes), (1Bytes = 8 bit)
function  fun4() {
	var dato = parseInt(document.getElementById("campo4").value);
	
	document.getElementById("idres4").innerHTML = dato + " Gigabytes son: " +
	(dato * 1024) + " Megabytes, " + 
	(dato * 1024 * 1024) + " Kilobytes, " + 
	(dato * 1024 * 1024 * 1024) + " Bytes, " + 
	(dato * 1024 * 1024 * 1024 * 8) + " bits";
}
//  Calcular cuántos días, semanas y meses hay en X años.
//(1 año = 365 días), (1 año = 52.142857142857146 semanas), (1 año = 12 meses)
function  fun5() {
	var dato = parseInt(document.getElementById("campo5").value);
	
	document.getElementById("idres5").innerHTML = dato + " años son: " +
	(dato * 365) + " dias, " + 
	(dato * 52.142857142857146) + " semanas, " +
	(dato * 12) + " meses";
}
//Realizar un función que compruebe si un número es primo o no<br>
// (un número es primo cuando es divisible entre 2 y entre el mismo y el resto es 0)-----pedro----
function  fun6() {
	var dato = parseInt(document.getElementById("campo6").value);
	var primo;
	
	if (dato  % dato === 0 && dato  % 2 === 0){primo = " es primo";
		}
	else {	primo = "no es primo";
		}

	document.getElementById("idres6").innerHTML = " Falta la función para calcularlo" ; 

}
//  Calcular el área de un circulo de X diámetro en centímetros
//  fórmula área por diámetro: (área = PI*(diámetro * 2 / 4); fórmula área por radio: (área = PI*radio2); (PI= 3.1416)
function  fun7() {
	var dato = parseInt(document.getElementById("campo7").value);
	
	document.getElementById("idres7").innerHTML = dato + " cm. de diametro: " +
	3.1416 * ((dato * dato) / 4) + " de area. " ; 
}
//Calcular el área de un cuadrado o rectángulo de X metros de lado y X metros de alto.
//fórmula área cuadrado = base *altura= m2) (ejemplo área = 3 m x 3 m = 9 m2)
function  fun8() {
	var dato = parseInt(document.getElementById("campo8").value);
	var dato2 = parseInt(document.getElementById("campo8_2").value);
	
	document.getElementById("idres8").innerHTML = "Lado 1: " + dato + "m, Lado 2: " + dato2 + "m, Area: " +
	dato * dato2 + " m2";
}
//Calcular el área de un triángulo de X metros de lado y X metros de altura.
//fórmula área triángulo = (base *altura)/2 = m2) (ejemplo área = (3 m * 3 h) / 2 = 4,2 m2)
function  fun9() {
	var dato = parseInt(document.getElementById("campo9").value);
	var dato2 = parseInt(document.getElementById("campo9_2").value);
	
	document.getElementById("idres9").innerHTML = "Base: " + dato + "m, Altura: " + dato2 + "m, Area: " +
	dato * dato2 / 2 + " m2";
}
//Calcular el tiempo que se necesita para recorrer X distancia en kilómetros circulando a X km/h.
//(1 km = 1000 metros), (1 km/h = 0,277778 metros/s) (ejemplo: 1 km = distancia / velocidad * segundos (3600)
function  fun10() {
	var dato = parseInt(document.getElementById("campo10").value);
	var dato2 = parseInt(document.getElementById("campo10_2").value);
	
	document.getElementById("idres10").innerHTML = "Distancia: " + dato + 
	"km, Velocidad: " + dato2 + "km\/h, Tiempo: " +
	(dato / dato2) * 3600 + "s " ;
}

//Calcular cuánto tiempo (horas y minutos) tardaría en descargar un archivo de X gigabytes 
//con un ancho de banda de 10 mbp/s 10 mbps = 10 megabit por segundo), (1 minuto = 60 segundos)  
//(ej: 1Gb = 1000 Mb / 10 mbp/s = 100 segundos)</p>
function  fun11() {
	var dato = parseInt(document.getElementById("campo11").value);
	var tsegundos = dato * 1000 / 10;  //total segundos
	var tminutos = tsegundos / 60 ;    // total minutos
	var thoras = tminutos / 60 ;	   // total horas
	
	var horas = parseInt(Math.trunc(thoras));
	var minutos = parseInt(Math.trunc(tminutos - (horas * 60)));
	var segundos = tsegundos - (horas * 60 * 60) - (minutos * 60);
	
	document.getElementById("idres11").innerHTML = dato + "Gb. tardarán en descargarse " + 
	horas + " horas, " +
	minutos + " minutos, " +
	segundos + " segundos" ;
	}


	


