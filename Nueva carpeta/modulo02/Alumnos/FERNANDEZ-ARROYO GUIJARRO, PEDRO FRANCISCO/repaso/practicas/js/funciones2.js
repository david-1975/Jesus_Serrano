// JavaScript Document


//The Number.isFinite() Comprobar si un valor es un número finito:
function esFinito() {
    var res = "";
    res = res + "Es finito 123? " + "<strong>" + isFinite(123) + "</strong><br>";
    res = res + "Es finito -1.23? " + isFinite(-1.23) + "<br>";
    res = res + "Es finito 5-2? " + isFinite(5-2) + "<br>";
    res = res + "Es finito 0? " + isFinite(0) + "<br>";
    res = res + "Es finito \'123\'? " + isFinite('123') + "<br>";
    res = res + "Es finito \'Hello\'? " + isFinite('Hello') + "<br>";
    res = res + "Es finito \'2005\/12\/12\'? " + isFinite('2005/12/12') + "<br>";
    res = res + "Es finito Infinity? " + isFinite(Infinity) + "<br>";
    res = res + "Es finito -Infinity? " + isFinite(-Infinity) + "<br>";
    res = res + "Es finito 0 \/ 0? " + isFinite(0 / 0) + "<br>";

	var res1 = `El método Number\.isFinite () determina si un valor es un número finito\.<br>
Este método devuelve verdadero si el valor es el número de la, y equivale a un número finito. De lo contrario, devuelve falso.<br>
Number.isFinite () es diferente de lo global isFinite () función. La función isFinite mundial () 
convierte el valor probado en un número, a continuación, pone a prueba.<br>
Number.isFinite () no convierte los valores a un número, y no volverá cierto 
para cualquier valor que no es del tipo Number.`;
    document.getElementById("demo2").innerHTML = res;
    document.getElementById("demo1").innerHTML = res1;
}

function esEntero() {
    var res = "";
    res = res + "Es entero 123? " + "<strong>" + Number.isInteger(123) + "</strong><br>";
    res = res + "Es entero -1.23? " + Number.isInteger(-1.23) + "<br>";
    res = res + "Es entero 5-2? " + Number.isInteger(5-2) + "<br>";
    res = res + "Es entero 0? " + Number.isInteger(0) + "<br>";
    res = res + "Es entero \'123\'? " + Number.isInteger('123') + "<br>";
    res = res + "Es entero \'Hello\'? " + Number.isInteger('Hello') + "<br>";
    res = res + "Es entero \'2005\/12\/12\'? " + Number.isInteger('2005/12/12') + "<br>";
    res = res + "Es entero Infinity? " + Number.isInteger(Infinity) + "<br>";
    res = res + "Es entero -Infinity? " + Number.isInteger(-Infinity) + "<br>";
    res = res + "Es entero 0 \/ 0? " + Number.isInteger(0 / 0) + "<br>";

	var res1 = `El método Number.isInteger () determina si un valor un número entero.<br><br>
Este método devuelve verdadero si el valor es el número de la, y un número entero (un número sin decimales). <br><br>
De lo contrario, devuelve falso.`;
    document.getElementById("demo2").innerHTML = res;
    document.getElementById("demo1").innerHTML = res1;
}

function esNumero() {
    var res = "";
    res = res + "No es entero 123? " + "<strong>" +  isNaN(123) + "</strong><br>";
    res = res + "No es entero -1.23? " +  isNaN(-1.23) + "<br>";
    res = res + "No es entero 5-2? " +  isNaN(5-2) + "<br>";
    res = res + "No es entero 0? " +  isNaN(0) + "<br>";
    res = res + "No es entero \'123\'? " +  isNaN('123') + "<br>";
    res = res + "No es entero \'Hello\'? " +  isNaN('Hello') + "<br>";
    res = res + "No es entero \'2005\/12\/12\'? " +  isNaN('2005/12/12') + "<br>";
    res = res + "No es entero Infinity? " +  isNaN(Infinity) + "<br>";
    res = res + "No es entero -Infinity? " +  isNaN(-Infinity) + "<br>";
    res = res + "No es entero 0 \/ 0? " +  isNaN(0 / 0) + "<br>";

	var res1 = `El método  isNaN () determina si un valor es NaN (No-A-Number).

Este método devuelve verdadero si el valor es el número de la, y equivale a NaN. De lo contrario, devuelve falso.<br><br>
Number.isNaN () es diferente de lo global isNaN () función. La función global isNaN () convierte el valor probado en un número, a continuación, pone a prueba.<br><br>
Number.isNaN () no convierte los valores a un número, y no volverá cierto para cualquier valor que no es del tipo Number.<br><br>
Consejo: En JavaScript, el valor NaN es considerado como un tipo de número.`;
    document.getElementById("demo2").innerHTML = res;
    document.getElementById("demo1").innerHTML = res1;
}

function aExponencial() {
    var res = 0;
	var num = 5.56789;
	var num1 = 45676;
	var num2 = 872666;
	var num3 = 0.345345;
	
    res = res + "El número " + num + " en notación exponencial es : ? " + "<strong>" +  num.toExponential() + "</strong><br>";
    res = res + "El número " + num1 + " en notación exponencial es : ? " + "<strong>" +  num1.toExponential() + "</strong><br>";
    res = res + "El número " + num2 + " en notación exponencial es : ? " + "<strong>" +  num2.toExponential() + "</strong><br>";
    res = res + "El número " + num3 + " en notación exponencial es : ? " + "<strong>" +  num3.toExponential() + "</strong><br>";
    res = res + "El número " + num + " en notación exponencial(3) es : ? " + "<strong>" +  num.toExponential(3) + "</strong><br>";
    res = res + "El número " + num1 + " en notación exponencial(2) es : ? " + "<strong>" +  num1.toExponential(2) + "</strong><br>";
    res = res + "El número " + num2 + " en notación exponencial(2) es : ? " + "<strong>" +  num2.toExponential(2) + "</strong><br>";
    res = res + "El número " + num3 + " en notación exponencial(1) es : ? " + "<strong>" +  num3.toExponential(1) + "</strong><br>";

	var res1 = `El método toExponential () convierte un número en una notación exponencial.<br>`;
    document.getElementById("demo2").innerHTML = res;
    document.getElementById("demo1").innerHTML = res1;
}

function redondea() {
    var res = 0;
	var num = 5.56789;
	var num1 = 456.76;
	var num2 = 87.2666;
	var num3 = 0.345345;
	
    res = res + "El número " + num + " redondeado(fixed) es : ? " + "<strong>" +  num.toFixed() + "</strong><br>";
    res = res + "El número " + num1 + " redondeado(fixed) es : ? " + "<strong>" +  num1.toFixed() + "</strong><br>";
    res = res + "El número " + num2 + " redondeado(fixed) es : ? " + "<strong>" +  num2.toFixed() + "</strong><br>";
    res = res + "El número " + num3 + " redondeado(fixed) es : ? " + "<strong>" +  num3.toFixed() + "</strong><br>";

	var res1 = `El método numero.toFixed () redondea número.<br>`;
    document.getElementById("demo2").innerHTML = res;
    document.getElementById("demo1").innerHTML = res1;
}
//
function digPrecision() {
 	var	res = "";
	var num = 9.656;
	
    res = res + "El número " + num + " con todos los dígitos solicitados es : ? " + "<strong>" +  num.toPrecision() + "</strong><br>";
    res = res + "El número " + num + " con (2) dígitos solicitados es : " + "<strong>" +  num.toPrecision(2) + "</strong><br>";
    res = res + "El número " + num + " con (4) dígitos solicitados es : " + "<strong>" +  num.toPrecision(4) + "</strong><br>";
    res = res + "El número " + num + " con (6) dígitos solicitados es : " + "<strong>" +  num.toPrecision(6) + "</strong><br>";

	var res1 = `El método numero.Precision(digitos) Extrae el numero con los digitos solicitados.<br>`;
	
    document.getElementById("demo2").innerHTML = res;
    document.getElementById("demo1").innerHTML = res1;
}
//
function toCadena() {
 	var	res = "";
	var num = 123;
	
    res = res + "El número " + num + " como num.toString() devuelve la cadena: ? " + 
				"<strong>" +  num.toString() + "</strong><br>";
    res = res + "El número " + num + " como (123).toString() devuelve la cadena: " + 
				"<strong>" +  (123).toString() + "</strong><br>";
    res = res + "El número " + num + " como (100 + 23).toString() devuelve la cadena: " + 
				"<strong>" +  (100 + 23).toString() + "</strong><br>";
    res = res + "El número " + num + " como num.toString() devuelve la cadena: " + 
				"<strong>" +  num.toString() + "</strong><br>";
	res = res + "El número " + num + " como num.toString() devuelve : ? " + 
				"<strong>" + num.toString() + "</strong><br>";
    res = res + "El número " + num + " como (123).toString(2) devuelve en binario: " + 
				"<strong>" +  (123).toString(2) + "</strong><br>";
    res = res + "El número " + num + " como (100 + 23).toString(8) devuelve en octal: " + 
				"<strong>" +  (100 + 23).toString(8) + "</strong><br>";
    res = res + "El número " + num + " como num.toString(16) devuelve en exadecimal: " + 
				"<strong>" +  num.toString(16) + "</strong><br>";

	var res1 = `numero.toString(parm) devuelve un número como una cadena.<br>
	Como parametros podemos utilizar los siguientes valores:<br>
		- cadena = void<br>
		- binario = 2<br>
		- octal = 8<br>
		- exadecimal = 16`;
	
    document.getElementById("demo2").innerHTML = res;
    document.getElementById("demo1").innerHTML = res1;
}
//
//Método valueOf() tengo que probarlo en profundidad en casa. no me vale para nada a priori
function valorDe() {
var arr = [10,20,30];
var obj = {num1:10,num2:20,num3:30};
var cad = "Hola";
var num = 10;
var bol = (10<20);


var a = arr.valueOf();
var b = obj.valueOf();
var c = cad.valueOf();
var d = num.valueOf();
var e = bol.valueOf();


document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" + "\n" +
"El valor de la variable a es : " + typeof(a) + " " + a + " y arr es de tipo: " + typeof(arr) +
"<br>" +
"El valor de la variable b es : " + b + " y es de tipo: " + typeof(obj) +
"<br>" + 
"El valor de la variable c es: " + c + " y es de tipo: " + typeof(cad) +
"<br>" + 
"El valor de la variable d es: " + d + " y es de tipo: " + typeof(num) +
"<br>" + 
"El valor de la variable e es : " + e + " y es de tipo: " + typeof(bol) +
"<br>";


document.getElementById("demo1").innerHTML = " ";

}
