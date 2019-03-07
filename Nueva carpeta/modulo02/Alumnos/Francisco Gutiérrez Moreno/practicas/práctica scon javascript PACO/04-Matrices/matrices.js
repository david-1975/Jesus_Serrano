// JavaScript Document
function crearArray() {
var valores = document.getElementById("coches").value;
alert (valores + " " + typeof(valores));
var crearMatriz = new Array(valores);
document.getElementById("etiqueta1").innerHTML = crearMatriz;
}

function arrayampliado() {
var valores2 = document.getElementById("coches2").value;
alert (valores2 +  " " + typeof(valores2));
var valores3 = document.getElementById("coches3").value;
var valores4 = document.getElementById("coches4").value;
var valores5 = document.getElementById("coches5").value;
var valores6 = document.getElementById("coches6").value;
var valores7 = document.getElementById("coches7").value;
var matrizfinal = valores2.concat(valores3, valores4, valores5, valores6, valores7);
alert (matrizfinal+ " " + typeof (matrizfinal));
document.getElementById("etiqueta2").innerHTML = matrizfinal;

document.getElementById("marca1").innerHTML = valores2;
document.getElementById("marca2").innerHTML = valores3;
document.getElementById("marca3").innerHTML = valores4;
document.getElementById("marca4").innerHTML = valores5;
document.getElementById("marca5").innerHTML = valores6;
document.getElementById("marca6").innerHTML = valores7;

}
 '<ol>
 <li id="marca1"></li>
 <li id="marca2"></li>
 <li id="marca3"></li>
 <li id="marca4"></li>
 <li id="marca5"></li>
 <li id="marca6"></li>
 </ol>'
function parrafo5() {
	var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var sumatotal = numeros[0]+numeros[1]+numeros[2]+numeros[3]+numeros[4]+numeros[5]+numeros[6]+numeros[7]+
	numeros[8]+numeros[9];
	alert(sumatotal + typeof(sumatotal));
	document.getElementById("demo58").innerHTML = "Valor mas bajo es: " + numeros[0] + "<br>" +
	"Valor mas alto es: " + numeros[9]+ "<br>" + "Valor de suma total es: " + sumatotal;
	//alert (numerosordenados + typeof(numerosordenados));
	}


