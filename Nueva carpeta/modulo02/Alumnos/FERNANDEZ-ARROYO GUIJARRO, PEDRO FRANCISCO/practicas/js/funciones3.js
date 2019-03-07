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