// JavaScript Document

//var matrizGlobal = "";

//Array
function matrizCoches () {
var dato = document.getElementById("text").value;
var espacio = dato.indexOf(" ");
var espacio1 = dato.lastIndexOf(" ");
var coma = dato.indexOf(",");
var dato1 = "";
var dato2 = "";
var dato3 = "";
	
	if (coma > -1){
	dato1 = dato.substr(0, espacio-1);
	
	
	dato2 = dato.substring(espacio+1, espacio1-1);

	
	dato3 = dato.substr(espacio1+1);

	
	} else {
	
	dato1 = dato.substr(0, espacio);

	
	dato2 = dato.substring(espacio+1, espacio1);
	
	
	dato3 = dato.substr(espacio1+1);

	}

var matriz = new Array (dato1,dato2,dato3);



document.getElementById("resultado").innerHTML = "Grupo Volkswagen: " + matriz;
matrizGlobal = matriz + "";

}

//Array 2
function matrizCoches2 () {
var matriz1 = ["Seat", "Audi", "Skoda"];
var matriz2 = ["Volkswagen","Bentley","Bugatti"];
var matrizUnida = matriz1.concat(matriz2);



document.getElementById("resultado2").innerHTML = "Grupo Volkswagen: " +
"<ol>" +
"<li>" + matrizUnida[0] + "</li>" +
"<li>" + matrizUnida[1] + "</li>" +
"<li>" + matrizUnida[2] + "</li>" +
"<li>" + matrizUnida[3] + "</li>" +
"<li>" + matrizUnida[4] + "</li>" +
"<li>" + matrizUnida[5] + "</li>" +
"</ol>";
}

//Array 3
function matrizCoches3() {
var matriz = ["Seat","Audi","Skoda","Volkswagen","Bentley","Bugatti"];

var dato = document.getElementById("text3").value;
var espacio = dato.indexOf(" ");
var espacio1 = dato.lastIndexOf(" ");
var coma = dato.indexOf(",");
var dato1 = "";
var dato2 = "";
var dato3 = "";

if (coma > -1){
	dato1 = dato.substr(0, espacio-1);
	
	
	dato2 = dato.substring(espacio+1, espacio1-1);
	
	
	dato3 = dato.substr(espacio1+1);
	
	
	//matrizUnida = new Array (dato1,dato2,dato3);
	
	} else {
	
	dato1 = dato.substr(0, espacio);
	
	
	dato2 = dato.substring(espacio+1, espacio1);
	
	
	dato3 = dato.substr(espacio1+1);
	
	
	//matrizUnida = new Array (dato1,dato2,dato3);
	}

matriz.unshift(dato1,dato2,dato3);

document.getElementById("resultado3").innerHTML = 
"<table border=1px>" +
    "<tr>" +
    "<th colspan=\"9\">" + "Grupo Volkswagen: " + "</th>" +
    "</tr>" +
	
    "<tr>" +
		"<td>" + matriz[0] + "</td>" +
		"<td>" + matriz[1] + "</td>" +
		"<td>" + matriz[2] + "</td>" +	
		"<td>" + matriz[3] + "</td>" +
		"<td>" + matriz[4] + "</td>" +
		"<td>" + matriz[5] + "</td>" +
		"<td>" + matriz[6] + "</td>" +
		"<td>" + matriz[7] + "</td>" +
		"<td>" + matriz[8] + "</td>" +
    "</tr>" +
"</table>";

}

//Array 4
function matrizCoches4 () {
var matriz = ["Ducati","Lamborghini","Porsche","Seat","Audi","Skoda","Volkswagen","Bentley","Bugatti"];

var dato = document.getElementById("text4").value;
var dato2 = document.getElementById("text5").value;


matriz.splice(4, 0, dato, dato2);


document.getElementById("resultado4").innerHTML = "Grupo Volkswagen: " +
"<ul>" +
"<li>" + matriz[0] + "</li>" +
"<li>" + matriz[1] + "</li>" +
"<li>" + matriz[2] + "</li>" +
"<li>" + matriz[3] + "</li>" +
"<li>" + matriz[4] + "</li>" +
"<li>" + matriz[5] + "</li>" +
"<li>" + matriz[6] + "</li>" +
"<li>" + matriz[7] + "</li>" +
"<li>" + matriz[8] + "</li>" +
"<li>" + matriz[9] + "</li>" +
"<li>" + matriz[10] + "</li>" +
"<li>" + matriz[11] + "</li>" +
"</ul>";

}

//Array5
function matrizNumeros() {
/*var dato = document.getElementById("text6").value;

var coma = dato.indexOf(",");

alert (dato);

if (coma > -1){
	document.getElementById("resultado5").innerHTML = 
	"<span style='color:red'>" + 
	"Introduce los datos correctamente" + 
	"</span>";
	} else {
var espaciosPorComas = "\"" + dato.replace(/ /g, "\",\"") + "\"";
alert (espaciosPorComas);

var matriz = new Array (espaciosPorComas);
  (typeof(matriz) + matriz);*/

var matriz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	
	document.getElementById("resultado5").innerHTML = "El valor más bajo de la matríz es " + matriz[0] + "\n" +
	"el más alto " + matriz[9] + "\n" + 
	"y el total de valores es " + matriz[1] + matriz[0];

	//}
}

//Array6
function matrizNumeros2() {
var matriz = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var par = [];
var impar = [];

if ((matriz[0] % 2) === 0){
	par.push(matriz[0]);
} else {
	impar.push(matriz[0]);
}if ((matriz[1] % 2) === 0){
	par.push(matriz[1]);
} else {
	impar.push(matriz[1]);
}if ((matriz[2] % 2) === 0){
	par.push(matriz[2]);
} else {
	impar.push(matriz[2]);
}if ((matriz[3] % 2) === 0){
	par.push(matriz[3]);
} else {
	impar.push(matriz[3]);
}if ((matriz[4] % 2) === 0){
	par.push(matriz[4]);
} else {
	impar.push(matriz[4]);
}if ((matriz[5] % 2) === 0){
	par.push(matriz[5]);
} else {
	impar.push(matriz[5]);
}if ((matriz[6] % 2) === 0){
	par.push(matriz[6]);
} else {
	impar.push(matriz[6]);
}if ((matriz[7] % 2) === 0){
	par.push(matriz[7]);
} else {
	impar.push(matriz[7]);
}if ((matriz[8] % 2) === 0){
	par.push(matriz[8]);
} else {
	impar.push(matriz[8]);
}if ((matriz[9] % 2) === 0){
	par.push(matriz[9]);
} else {
	impar.push(matriz[9]);
}

document.getElementById("resultado6").innerHTML = "Números pares: " + par + "<br>" +
"Números impares: " + impar;
	
}

//Array7
function matrizNumeros3() {
var matriz = [5, 4, 8, 1, 0, 2, 7, 3, 9, 6];
var matriz2 = [5, 4, 8, 1, 0, 2, 7, 3, 9, 6];
var matriz3 = [5, 4, 8, 1, 0, 2, 7, 3, 9, 6];

var ordenado = matriz.sort();
var desordenado = matriz2.sort().reverse();

document.getElementById("resultado7").innerHTML = "Orden ascendente: " + ordenado + "<br>" +
"Orden descendente " + desordenado + "<br>" + 
"Aleatorio: " + matriz3;

}

//Array8
function object1() {
var dato = document.getElementById("text8").value;

if ((dato.length < 32) && (dato.length < 32)) {
	document.getElementById("resultado8").innerHTML = "Introduce los datos adecuadamente";
} else {
	var juan = dato.substr(0, 4);
	var cincuenta = dato.substr(11, 2);
	var casado = dato.substr(26, 32);
	
	var informacion = {nombre:juan, edad:cincuenta, estado:casado};
	
	document.getElementById("resultado8").innerHTML = "Nombre: " + informacion.nombre + ", edad: " + informacion.edad + ", estado: " + informacion.estado;
}

}

//Array9
function object3 () {
var informacion = {nombre:"juan", edad:"50", estado:"casado"};

var dato = document.getElementById("text9").value;
var dato2 = document.getElementById("text10").value;
var dato3 = document.getElementById("text11").value;

informacion.pais = dato;
informacion.idioma = dato2;
informacion.dni = dato3;


document.getElementById("resultado9").innerHTML = "Nombre: " + informacion.nombre + ", edad: " + informacion.edad + ", estado: " + informacion.estado + ", país: " + informacion.pais + " idioma: " + informacion.idioma + ", DNI: " + informacion.dni;

}

//Array10
function object4() {
var informacion = {nombre:"Juan", edad:"50", estado:"casado", pais:"España", idioma:"español", dni:"52125874N"};	
var dato = document.getElementById("text12").value;
var dato2 = document.getElementById("text13").value;
var dato3 = document.getElementById("text14").value;
var dato4 = document.getElementById("text15").value;
var dato5 = document.getElementById("text16").value;
var dato6 = document.getElementById("text17").value;

var informacion2 = {};

informacion2.nombre = dato;
informacion2.edad = dato2;
informacion2.estado = dato3;
informacion2.pais = dato4;
informacion2.idioma = dato5;
informacion2.dni = dato6;

document.getElementById("resultado10").innerHTML =
"<table border=1px>" +
    "<tr>" +
    "<th colspan=\"3\">" + "Información de empleados: " + "</th>" +
    "</tr>" +
	
    "<tr>" +
		"<td>" + "<b>Nombre</b>" + "</td>" +
		"<td>" + informacion.nombre + "</td>" +
		"<td>" + informacion2.nombre + "</td>" +
    "</tr>" +
	"<tr>" +
		"<td>" + "<b>Edad</b>" + "</td>" +
		"<td>" + informacion.edad + "</td>" +
		"<td>" + informacion2.edad + "</td>" +
    "</tr>" +
	"<tr>" +
		"<td>" + "<b>Estado</b>" + "</td>" +
		"<td>" + informacion.estado + "</td>" +
		"<td>" + informacion2.estado + "</td>" +
    "</tr>" +
	"<tr>" +
		"<td>" + "<b>País</b>" + "</td>" +
		"<td>" + informacion.pais + "</td>" +
		"<td>" + informacion2.pais + "</td>" +
    "</tr>" +
	"<tr>" +
		"<td>" + "<b>Idioma</b>" + "</td>" +
		"<td>" + informacion.idioma + "</td>" +
		"<td>" + informacion2.idioma + "</td>" +
    "</tr>" +
	"<tr>" +
		"<td>" + "<b>DNI</b>" + "</td>" +
		"<td>" + informacion.dni + "</td>" +
		"<td>" + informacion2.dni + "</td>" +
    "</tr>" +
"</table>";

}