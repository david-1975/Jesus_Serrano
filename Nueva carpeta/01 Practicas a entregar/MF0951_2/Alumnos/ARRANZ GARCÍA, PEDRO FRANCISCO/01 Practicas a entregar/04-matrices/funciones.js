// JavaScript Document

//EJERCICIO 1:
// Crea una función que, introduciendo 3 valores separados por comas o por espacios en blanco en un campo de formulario, cree una matriz que almacene estos //valores "Seat", "Audi", "Skoda" sin espacios en blanco. Mostrar la matriz como se muestra a continuación. <u>Representación //de  la matríz</u>: Grupo Volkswagen: Seat, Audi, Skoda.

function grupo() {
	var cadena = document.getElementById("text1").value;
	var reemplazo = cadena.replace(/,/g," ");
	var matriz = reemplazo.split(" ");
	
	document.getElementById('etiqueta1').innerHTML =
		"Grupo Volkswagen: " + matriz[0] + ", " + matriz[1] + ", " + matriz [2];				
}

//EJERCICIO 2:
//A partir del array creado anteriormente, crear una función que permita introducir &quot;Volkswagen&quot;, &quot;Bentley&quot;, &quot;Bugatti&quot; al //conjunto, y los sitúe detrás de los valores existentes sin espacios en blanco.  Mostrar la matriz como se muestra a continuación. <br>
//Representación de  la matríz Grupo Volkswagen: Seat, Audi, Skoda, Volkswagen, Bentley, Bugatti

function grupo2() {
	var grupo = ["Seat", "Audi", "Skoda"];
	var coches = document.getElementById("text2").value;
	var reemplazo = coches.replace(/,/g," ");
	var grupo2 = reemplazo.split(" ");
	var final = grupo.concat(grupo2);
	
	document.getElementById('etiqueta2').innerHTML =
		"Grupo Volkswagen: " + final[0] + ", " + final[1] + ", " + final [2] + ", " + final [3]+ ", " + final [4]+ ", " + final [5];				
}

//EJERCICIO 3:
//A partir del array creado anteriormente, crear una función que permita introducir al comienzo de la matriz los valores &quot;Ducati&quot;, //&quot;Lamborghini&quot;, &quot;Porsche&quot; sin espacios en blanco. Mostrar la matriz como se muestra a continuación.</strong><strong><br>
//</strong><em><u>Representación de  la matríz</u>: Grupo Volkswagen: Ducati, Lamborghini, Porsche, Seat, Audi, Skoda, Volkswagen, Bentley, Bugatti.</em>

function grupo3() {
	var grupo = ["Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
	var coches = document.getElementById("text3").value;
	var reemplazo = coches.replace(/,/g," ");
	var grupo2 = reemplazo.split(" ");
	var final = grupo2.concat(grupo);
	
	document.getElementById('etiqueta3').innerHTML =
		"Grupo Volkswagen: " + final[0] + ", " + final[1] + ", " + final [2] + ", " + final [3]+ ", " + final [4]+ ", " + final [5] +
	    ", " + final [6]+ ", " + final [7]+ ", " + final [8];				
}

//EJERCICIO 4:
//A partir del array creado anteriormente, crear una función que introduzca entre los valores del conjunto &quot;Seat&quot; y &quot;Audi&quot; los //valores &quot;Sacania&quot; y &quot;MAN&quot; sin espacios en blanco. <br>
//</strong><em><u>Representación de  la matríz</u>: Grupo Volkswagen: Ducati, Lamborghini, Porsche, Seat, Scania, MAN, Audi, Skoda, Volkswagen, Bentley, //Bugatti.</em></p>

function grupo4() {
	var grupo = ["Ducatti", "Lamborghini", "Porsche", "Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
	var coches = document.getElementById("text4").value;
	var reemplazo = coches.replace(/,/g," ");
	var grupo2 = reemplazo.split(" ");
	grupo.splice(4, 0, grupo2[0], grupo2[1]);
	
	document.getElementById('etiqueta4').innerHTML =
		"Grupo Volkswagen: " + grupo[0] + ", " + grupo[1] + ", " + grupo[2] + ", " + grupo[3]+ ", " + grupo[4]+ ", " + grupo[5] +
	    ", " + grupo[6]+ ", " + grupo[7]+ ", " + grupo[8] + ", " + grupo[9] + ", " + grupo[10];				
}

//EJERCICIO 5:
//Crea una función que, introduciendo los valores numéricos 8,7,2,5,4,3,6,1,0,9, construya un array y muestre la matriz con los valores ordenados //ascendentes, descendentes, aleatorios y la longitud total del array. Mostar la matriz debajo del campo del formulario según se muestra a continuación. //</strong><strong><br>
//</strong><em><u>Representación de  la matríz</u>:   Matriz original: 8,7,2,5,4,3,6,1,0,9. Ascendente: 0,1,2,3,4,5,6,7,8,9. Descendente: //9,8,7,6,5,4,3,2,1,0. Aleatorio: 1,9,2,7,3,6,4,5,0,8. Longitud: 10 </em></p>
function num() {
	var cadena = document.getElementById("text5").value;
	var reemplazo = cadena.replace(/,/g," ");
	var matriz = reemplazo.split(" ");
	var matriz2= matriz.slice();
	var matriz3= matriz.slice();
	var matriz4= matriz.slice();
	var ascendente = matriz2.sort(function(a, b){return a - b});
	var descendente = matriz3.sort(function(a, b){return b - a});
	var aleatorio = matriz4.sort(function(a, b){return 0.5 - Math.random()});
	var longitud = matriz.length;
	
	document.getElementById('etiqueta5').innerHTML =
		"Matriz original: " + matriz + "<br>" +  
	    "Ascendente: " + ascendente + "<br>" + 
		"Descendente: " + descendente + "<br>" + 
		"Aleatorio: " + aleatorio + "<br>" +
		"longitud: " + longitud;				
}