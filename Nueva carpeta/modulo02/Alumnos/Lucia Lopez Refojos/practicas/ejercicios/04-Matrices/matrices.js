// JavaScript Document

// Valores "Seat", "Audi", "Skoda" sin espacios en blanco

function crearArray() {
var coches = document.getElementById ("text1").value;
// var coches = prompt ("Introduce 3 marcas de coches del Grupo Volkswagen: ");
var crearMatriz = new Array (coches);
// alert ("Grupo Volkswagen: " + crearMatriz);
var quitarEspacioBlanco = coches.replace(/ /g , ",");
document.getElementById ("crearArray").innerHTML = "Grupo Volkswagen: " + quitarEspacioBlanco;

}

// Función que permita introducir "Volkswagen", "Bentley", "Bugatti" al conjunto

function pushArray() {
var añadeDatos = document.getElementById ("text2").value; 
var reemplazar = añadeDatos.replace(/ /g, ",");
var coches = ["Seat","Audi","Skoda"];
coches.push(reemplazar);
document.getElementById ("pushArray").innerHTML = "Grupo Volkswagen: " + coches;
}
	
	/*var grupoVolkswagen = [" Seat ", " Audi ", " Skoda "];
	salida = "<table>"+"<tr>"+"<th>"+"Grupo Volkswagen"+"</th>"+</tr>+
	"<tr>" + <td> + grupoVolkswagen[0] +</td> + <tr> +
	....+ </table>;*/


// Función que permita introducir al comienzo de la matríz los valores "Ducati", "Lamborghini", "Porsche"

function unshiftArray() {
var inicioDatos  = document.getElementById ("text3").value;
var reemplazar = inicioDatos.replace(/ /g, ",");
var coches2 = ["Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
coches2.unshift(reemplazar);
document.getElementById ("unshiftArray").innerHTML = "Grupo Volkswagen: " + coches2;
}


// Función que introduzca entre los valores del conjunto


function splicetArray() {
	var introduceDatos  = document.getElementById ("text4").value;
	var reemplazar = introduceDatos.replace(/ /g, ",");
	var coches3 = ["Ducati", "Lamborghini", "Porsche","Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
	coches3.splice(4,0,"Scania", "MAN");
	document.getElementById ("splicetArray").innerHTML = "Grupo Volkswagen: " + coches3;
}

// Construye un array, y muestre el valor más bajo, el más alto y el total de valores

function valornum() {

	var principalArray = [0,1,2,3,4,5,6,7,8,9];
	
	var array1 = [0,1,2,3,5,4,6,7,8,9];
	var ascendente = array1.sort();

	var array2 = [0,3,1,2,4,5,6,7,8,9];
	var descendente = array2.sort().reverse();
	
	var array3 = [0,1,2,3,4,5,6,7,8,9];
	var largo = array3.length;

	document.getElementById ("valornum").innerHTML = 
	"El valor más bajo es: " + 	ascendente[0] + "<br>" + 
	"El valor más alto es: " + 	descendente[0] + "<br>" + 
	"El total de los valores es: " + largo;
}


// Muestre valores impares y pares

/*function parimpar() {

	var principalArray = [0,1,2,3,4,5,6,7,8,9];
//alert (typeof principalArray);

var convertirNum = Number(principalArray.substring(1));

alert (typeof convertirNum);*/



// Muestre los valores ordenados ascendente, descendente y aleatoiros

function orden() {
var principalArray = [0,1,2,3,4,5,6,7,8,9];

var array4 = [0,1,9,7,4,5,6,3,8,2];
var ordenado = array4.sort();
//alert (ordenado);





}





































