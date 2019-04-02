// JavaScript Document

// EJERCICIO 1
// (Seguridad Social = 6,4%), (IRPF = 15%), (pagas = 14), (fórmula: sueldo mensual - (IRPF + Seguridad Social).
function sueldo() {
	var bruto = Number(document.getElementById("number1").value);
	
	var mes = (bruto/14);
	var ss = (mes*6.4)/100;
	var irpf = (mes*15)/100;
	var salario = mes-ss-irpf;
	
	while (bruto==""){
		bruto = Number(prompt("introduce un número"));
		mes = (bruto/14);
		ss = (mes*6.4)/100;
		irpf = (mes*15)/100;
		salario = mes-ss-irpf;
	}
	document.getElementById('etiqueta1').innerHTML = 
		"Sueldo bruto mensual: " + Math.trunc(mes) + " €" +"<br>" +
		"Seguridad Social: " + Math.trunc(ss) + " €" +"<br>" +
		"IRPF: " + Math.trunc(irpf) + " €" +"<br>" +
		"<b>" + "Sueldo neto mensual: " + Math.trunc(salario) + " €" + "</b>";
}

// EJERCICIO 2
// (Ejemplo: precio = 50€, Descuento -20%, Impuesto +21%).
function preciofinal() {
	var precio = Number(document.getElementById("number2").value);
	
	var impuesto = (precio*21)/100;
	var descuento = (precio*20)/100;
	var a_pagar = precio+impuesto-descuento;
	
	while (precio==""){
		precio = Number(prompt("introduce un número"));
		impuesto = (precio*21)/100;
		descuento = (precio*20)/100;
		a_pagar = precio+impuesto-descuento;
	}
	document.getElementById('etiqueta2').innerHTML = 
		"Precio del producto: " + Math.trunc(precio) + " €" +"<br>" +
		"Impuestos (21%) " + Math.trunc(impuesto) + " €" +"<br>" +
		"Descuento (-20%): " + Math.trunc(descuento) + " €" +"<br>" +
		"<b>" + "Total a pagar: " + Math.trunc(a_pagar) + " €" + "</b>";
}

//EJERCICIO 3
//calcule en tiempo de descarga de archivo de X megabytes a una velocidad de  10 mbps (Megabit por segundo). 
//Fórmula: tamaño de archivo / tasa de transferencia = tiempo en segundos)  (1*1024*8) / 10) = 819,2 segundos; 819,2 / 60 = 13,65 minutos y segundos. (Almacenamiento  1024 byte, transferencia 1000 bps).
function tiempodescarga() {
	var peso = Number(document.getElementById("number3").value);
	var tiempo = (peso*1024*8)/10;
	var tiempo2 = tiempo/60;
	
	while (peso==""){
		peso = Number(prompt("introduce un número"));
		tiempo = (peso*1024*8)/10;
		tiempo2 = tiempo/60;
	}
	
	document.getElementById('etiqueta3').innerHTML = 
		"Tamaño del archivo: " + peso + " megabytes" +"<br>" +
		"Tasa de transferencia: 10 megabit por segundo" +"<br>" +
		"Tiempo de transferencia " + Math.trunc(tiempo2) + " minutos";
}

//EJERCICIO 4
//Crear una función que, al introducir una frase, muestre la frase entre comillas, en mayúsculas, en minúsculas, al revés y con la palabra "Cita:" al //comienzo de la frase. Representar el resultado con saltos de línea.
function frases() {
	var frase = document.getElementById("number4").value;
	var minusculas=frase.toLowerCase();
	var mayusculas=frase.toUpperCase();
	var res = frase.split(" ");
	var invertir = res.reverse();
	
	while (frase==""){
		frase = prompt("introduce una frase");
		minusculas=frase.toLowerCase();
		mayusculas=frase.toUpperCase();
		res = frase.split(" ");
		invertir = res.reverse();
	}
	
	document.getElementById('etiqueta4').innerHTML = 
		'"'+frase+'"' + "<br>" +
		mayusculas + "<br>" +
		minusculas + "<br>" +
		invertir + "<br>" +
		"Cita: " + frase + "<br>";
}

//EJERCICIO 5
//Crear  una función, que introduciendo 3 valores numéricos compare cual es el número  mayor, el menor, y muestre el  resultado  de sumar los números. 
function comparar() {
	var frase = document.getElementById("number5").value;
	var res = frase.split(" ");
	res.sort(function(a, b){return a-b});
	var primero = res[0];
	var medio = res[1];
	var ultimo = res[res.length - 1];
	var uno = Number(primero);
	var dos = Number(medio);
	var tres = Number (ultimo);

	while (frase==""){
		frase = prompt("introduce tres números");
		res = frase.split(" ");
		res.sort(function(a, b){return a-b});
		primero = res[0];
		medio = res[1];
		ultimo = res[res.length - 1];
		uno = Number(primero);
		dos = Number(medio);
		tres = Number (ultimo);
	}
	
	document.getElementById("etiqueta5").innerHTML = res + "<br>" +
		"<ul>" + "<li>" + "El valor menor es: " + primero + "</li>" +
		"<li>" + "El valor mayor es: " + ultimo + "</li>" +
		"<li>" + "La suma de los tres valores introducidos es: " + (uno+dos+tres)  + "</li>" + "</ul>";
}

