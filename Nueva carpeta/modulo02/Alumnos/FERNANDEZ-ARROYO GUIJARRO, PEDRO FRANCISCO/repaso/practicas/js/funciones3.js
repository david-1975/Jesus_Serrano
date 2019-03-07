// JavaScript Document



//Método split() tengo que probarlo en profundidad en casa. no me vale para nada a priori
function convertirSplit() {
var color1 = prompt("introduce tres colores");
var arrColores = color1.split(" ");

document.getElementById("demo2").innerHTML = arrColores ;
}
// Metodo toString()
function aCadena() {
var arrFrutas = ["manzana","pera","platano","naranja"];
var strFrutas = arrFrutas.toString();

document.getElementById("demo2").innerHTML = 
	"Definimos el array [\"manzana\",\"pera\",\"platano\",\"naranja\"]" + 
	 "y lo convertimos a string " + strFrutas;
}

function unirValores() {
var arrFrutas = ["manzana","pera","platano","naranja"];
var strFrutas = arrFrutas.join("*");

document.getElementById("demo2").innerHTML = 
	"Definimos el array <br> [\"manzana\",\"pera\",\"platano\",\"naranja\"]" + 
	 "<br><br> y lo convertimos a string separando por * <br>" + strFrutas;
}
function eliminaPop() {
var arrFrutas = ["manzana","pera","platano","naranja"];
var strFrutas = arrFrutas.pop();

document.getElementById("demo2").innerHTML = 
	"Definimos el array <br> [\"manzana\",\"pera\",\"platano\",\"naranja\"]" + 
	 "<br><br> y lo convertimos a string eliminando el último elemento: " +  strFrutas + "<br>" + arrFrutas;
}
//
function añadePush() {
var original  = ["manzana","pera","platano","naranja"];
var arrFrutas = original;
var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

arrFrutas.push(nueva);

document.getElementById("demo2").innerHTML = 
	"Definimos el array <br>" + original +
	 "<br><br> y un nuevo elemento: " +  nueva + "<br>" + arrFrutas;
}
function eliminaShift() {
var arrFrutas = ["manzana","pera","platano","naranja"];
var strFrutas = arrFrutas.shift();

document.getElementById("demo2").innerHTML = 
	"Definimos el array <br> [\"manzana\",\"pera\",\"platano\",\"naranja\"]" + 
	 "<br><br> y lo convertimos a string eliminando el primer elemento: " +  strFrutas + "<br>" + arrFrutas;
}
//
function añadeShift() {
var original  = ["manzana","pera","platano","naranja"];
var arrFrutas = original;
var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

arrFrutas.unshift(nueva);

document.getElementById("demo2").innerHTML = 
	"Definimos el array <br>" + original +
	 "<br><br> y un nuevo elemento: " +  nueva + "<br>" + arrFrutas;
}
//El splice() método se puede utilizar para añadir nuevos elementos a una matriz:
function añadeSplice() {
var original  = ["manzana","pera","platano","naranja"];
var arrFrutas = ["manzana","pera","platano","naranja"];
var nuevafruta = ["Lemon", "Kiwi"];
//var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

var nueva = arrFrutas.splice(2, 1, nuevafruta);

document.getElementById("demo2").innerHTML = 
	"Definimos el array <br>" + original +
	"<br>añadimos los elementos: " + nuevafruta +
	"<br><br> y un nuevo elemento: " + arrFrutas +  
	"<br>se han borrado los elementos:  " + nueva + "<br>";
}
//El concat() método crea una nueva matriz mediante la fusión (concatenar) matrices existentes:
function uneConcat() {
var cad1  = ["manzana","pera"];
var cad2 = ["platano","naranja"];
var cad3 = ["melon","kiwi"];
//var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

var nueva = cad1.concat(cad2,cad3);

document.getElementById("demo2").innerHTML = 
	"Definimos el array 1 <br>" + cad1 +
	"<br> definimos el array 2 <br>" + cad2 +
	"<br> definimos el array 3 <br>" + cad3 +
	 "<br><br> y la nueva cadena concatenada es: " + "<br>" + nueva;
}
//El sort() El método sort() ordena una matriz de forma ascendente
function ordena() {
var inicial  = ["kiwi","pera","naranja","platano","melon","manzana"];
var cad1  = ["kiwi","pera","naranja","platano","melon","manzana"];
//var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

var nueva = cad1.sort();

document.getElementById("demo2").innerHTML = 
	"Definimos el array 1 <br>" + inicial +
	 "<br><br> y la nueva cadena ordenada es: " + "<br>" + nueva;
}
//El método reverse() ordena una matriz de forma inversa (NO ALFABETICAMENTE)
function ordenarev() {
var inicial  = ["kiwi","pera","naranja","platano","melon","manzana"];
var cad1  = ["kiwi","pera","naranja","platano","melon","manzana"];
//var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

var nueva = cad1.reverse();

document.getElementById("demo2").innerHTML = 
	"Definimos el array 1 <br>" + inicial +
	 "<br><br> y la nueva cadena invertida es: " + "<br>" + nueva;
}

//El método slice() extrae una nueva matriz a partir del indice indicado
function extraeSlice() {
var cad1  = ["manzana","pera","platano","naranja","lima","melon"];

//var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

var nueva = cad1.slice(2);

document.getElementById("demo2").innerHTML = 
	"Definimos el array 1 <br>" + cad1 +
	 "<br><br> y la nueva cadena a partir del elemento 2 es: " + "<br>" + nueva;
}
//El método copyWithin(1,3) copia en la posicion(1) los elementos que estan apartir de la posicion(2)
function copiaWithin() {
var inicial  = ["manzana","pera","platano","naranja","lima","melon"];
var cad1  = ["manzana","pera","platano","naranja","lima","melon"];

//var nueva = prompt("tenemos: " + original + "\nintroduce otra fruta");

var nueva = cad1.copyWithin(3,0,2);

document.getElementById("demo2").innerHTML = 
	"El método copyWithin(3,0,2) copia en la posicion(3) los elementos que estan apartir de la posicion(0) que son (2)" +
	"<br><br>Definimos el array 1 <br>" + inicial +
	 "<br><br> y la nueva cadena es: " + "<br>" + nueva;
}
//
//document.getElementById("demo1").innerHTML = " ";
//document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" + "\n" +
//"El valor de la variable a es : " + typeof(a) + " " + a + " y arr es de tipo: " + typeof(arr) +
//"<br>" +
//"El valor de la variable b es : " + b + " y es de tipo: " + typeof(obj) +
//"<br>" + 
//"El valor de la variable c es: " + c + " y es de tipo: " + typeof(cad) +
//"<br>" + 
//"El valor de la variable d es: " + d + " y es de tipo: " + typeof(num) +
//"<br>" + 
//"El valor de la variable e es : " + e + " y es de tipo: " + typeof(bol) +
//"<br>";