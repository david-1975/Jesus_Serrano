

//Método isFinite()
function esFinito() {
   	var res = "";
	res = res + "¿El número 123 es finito? " + "<strong>" + Number.isFinite(123) + "</strong><br>";


	res = res + "¿El número -1.23 es finito? " + "<strong>" + Number.isFinite(-1.23) + "</strong><br>";
	
	
	res = res + "¿El número 5-2 es finito? " + "<strong>" + Number.isFinite(5-2) + "</strong><br>";
	
	
	res = res + "¿El número 0 es finito? " + "<strong>" + Number.isFinite(0) + "</strong><br>";
	
	
	res = res + "¿El número 1.23 es finito? " + "<strong>" + Number.isFinite(1.23) + "</strong><br>";
	
	
	res = res + "¿El número '123' es finito? " + "<strong>" + Number.isFinite('123') + "</strong><br>";
	
	
	res = res + "¿El número 'Hello' es finito? " + "<strong>" + Number.isFinite('Hello') + "</strong><br>";
	
	
	res = res + "¿El número '2005/12/12' es finito? " + "<strong>" + Number.isFinite('2005/12/12') + "</strong><br>";
	
	res = res + "¿El número \"100\"-10 es finito? " + "<strong>" + Number.isFinite("100"-10) + "</strong><br>";
	
document.getElementById("demo2").innerHTML = res;
  
document.getElementById("demo1").innerHTML = 
"<p>El método Number.isFinite() determina si un valor es un número finito. Este método devuelve verdadero si el valor del número es equivale a un número finito, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isFinite() es diferente a la función global isFinite(). La función global isFinite() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método Number.isFinite() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. Ambas funciones al ejecutarse devuelven un valor booleano, true (verdadero) o false (falso).</p>";
}

//Método isInteger()
function esEntero() {
		var res = "";
	res = res + "¿El número 123 es entero? " + "<strong>" + Number.isInteger(123) + "</strong><br>";


	res = res + "¿El número -1.23 es entero? " + "<strong>" + Number.isInteger(-1.23) + "</strong><br>";
	
	
	res = res + "¿El número 5-2 es entero? " + "<strong>" + Number.isInteger(5-2) + "</strong><br>";
	
	
	res = res + "¿El número 0 es entero? " + "<strong>" + Number.isInteger(0) + "</strong><br>";
	
	
	res = res + "¿El número 1.23 es entero? " + "<strong>" + Number.isInteger(1.23) + "</strong><br>";
	
	
	res = res + "¿El número '123' es entero? " + "<strong>" + Number.isInteger('123') + "</strong><br>";
	
	
	res = res + "¿El número 'Hello' es entero? " + "<strong>" + Number.isInteger('Hello') + "</strong><br>";
	
	
	res = res + "¿El número '2005/12/12' es entero? " + "<strong>" + Number.isInteger('2005/12/12') + "</strong><br>";
	
	res = res + "¿El número \"0/0\" es entero? " + "<strong>" + Number.isInteger(0/0) + "</strong><br>";
	
	res = res + "¿El número \"10\"+20 es entero? " + "<strong>" + Number.isInteger("10"*20) + "</strong><br>";

	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
"<p>El método Number.isInteger() determina si un valor es un número entero. Este método devuelve verdadero si el valor del número es equivale a un número entero, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isInteger() es diferente a la función global Number(). La función global Number() convierte el argumento objeto a un número que representa el valor del objeto. El método Number.isInteger() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. El método Number.isInteger() devuelve un valor booleano, true o false. Si el valor es NaN o infinito, devuelve false.</p>";
}

//Método isNaN()
function noEsNumero() {
		var res = "";
	res = res + "¿El número 123 no es numero? " + "<strong>" + isNaN(123) + "</strong><br>";


	res = res + "¿El número -1.23 no es numero? " + "<strong>" + isNaN(-1.23) + "</strong><br>";
	
	
	res = res + "¿El número 5-2 no es numero? " + "<strong>" + isNaN(5-2) + "</strong><br>";
	
	
	res = res + "¿El número 0 no es numero? " + "<strong>" + isNaN(0) + "</strong><br>";
	
	
	res = res + "¿El número 1.23 no es numero? " + "<strong>" + isNaN(1.23) + "</strong><br>";
	
	
	res = res + "¿El número '123' no es numero? " + "<strong>" + isNaN('123') + "</strong><br>";
	
	
	res = res + "¿El número 'Hello' no es numero? " + "<strong>" + isNaN('Hello') + "</strong><br>";
	
	
	res = res + "¿El número '2005/12/12' no es numero? " + "<strong>" + isNaN('2005/12/12') + "</strong><br>";
	
	res = res + "¿El número \"100\"-10 no es numero? " + "<strong>" + isNaN("100"*10) + "</strong><br>";

	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 

"<p>El método Number.isNaN() determina si un valor es NaN (No-A-Number). Este método devuelve verdadero si el valor no es equivale a un número, de lo contrario, devuelve falso.</p>" +
"<p>El método Number.isNaN() es diferente a la función global isNaN(). La función global isNaN() convierte el valor probado en un número, y a continuación, lo pone a prueba. El método Number.isNaN() no convierte los valores a un número, y no devolverá verdadero si el valor no es de tipo Number. El valor NaN es considerado como un tipo de número.</p>";
}


//Método toExponential(x)
function aExponencial() {
	var res = "";
	var num= 1234567890;

	res = res +  "El número " + num +  " en exponencial con 1 dígito es : " + "<strong>" + num.toExponential(1) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 2 dígitos es : " + "<strong>" + num.toExponential(2) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 3 dígitos es : " + "<strong>" + num.toExponential(3) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 4 dígitos es : " + "<strong>" + num.toExponential(4) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 5 dígitos es : " + "<strong>" + num.toExponential(5) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 6 dígitos es : " + "<strong>" + num.toExponential(6) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 7 dígitos es : " + "<strong>" + num.toExponential(7) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 8 dígitos es : " + "<strong>" + num.toExponential(8) + "</strong><br>";
	res = res +  "El número " + num +  " en exponencial con 9 dígitos es : " + "<strong>" + num.toExponential(9) + "</strong><br>";
	
    
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 
	"<p>El método number.toExponential(x) convierte un número en exponencial. Este método devuelve una cadena (string) que representa el objeto de tipo Number en notación exponencial.</p>" +
	"<p>Como opcional, se puede indicar dentro del paréntesis de la función toExponential() el número de dígitos que se utilizarán para representar el número en exponencial, los número van del 0 al 20." +
	"Si no se especifica nungún valor dentro del paréntesis se utilizaran por defecto tantos dígitos decimales como hagan falta para acomodar el número.</p>";
}

//Método toFixed(x)
function aFijar() {
	 var res = "";
	 var num= 5.1234567890; 
	res = res +  "El número " + num +  " con 0 decimales es : " + "<strong>" + num.toFixed(0) + "</strong><br>";
    res = res +  "El número " + num +  " con 1 decimales es : " + "<strong>" + num.toFixed(1) + "</strong><br>";
	res = res +  "El número " + num +  " con 2 decimales es : " + "<strong>" + num.toFixed(2) + "</strong><br>";
	res = res +  "El número " + num +  " con 3 decimales es : " + "<strong>" + num.toFixed(3) + "</strong><br>";
	res = res +  "El número " + num +  " con 4 decimales es : " + "<strong>" + num.toFixed(4) + "</strong><br>";
	res = res +  "El número " + num +  " con 5 decimales es : " + "<strong>" + num.toFixed(5) + "</strong><br>";
	res = res +  "El número " + num +  " con 6 decimales es : " + "<strong>" + num.toFixed(6) + "</strong><br>";
	res = res +  "El número " + num +  " con 7 decimales es : " + "<strong>" + num.toFixed(7) + "</strong><br>";
	res = res +  "El número " + num +  " con 8 decimales es : " + "<strong>" + num.toFixed(8) + "</strong><br>";
	res = res +  "El número " + num +  " con 9 decimales es : " + "<strong>" + num.toFixed(9) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toFixed () devuelve una cadena, que representa un número, con el número exacto de decimales. Dentro del paréntesis se indica el número de dígitos que se utilizarán para representar los decimales.</p>" +
	"Si el número deseado de decimales es más alto que el número real, la función toFixed(), añadirá ceros para crear la longitud deseada decimal. Si el valor de los decimales es 0 o se deja en blanco, se mostrará sólo la parte entera del número. Si el número de decimales es mayor que 1e+21, este método, simplemente, llama a la función Number.prototype.toString() y devuelve una cadena en notación exponencial.</p>";
}

//Método .toPrecision(x)
function aPrecision() {
	var res = "";
	var num = 3.1234567890;   
	
    res = res + "El número " + num + " formateado con 1 es : " + "<strong>" + num.toPrecision(1) + "</strong><br>";

	res = res + "El número " + num + " formateado con 2 es : " + "<strong>" + num.toPrecision(2) + "</strong><br>";
	res = res + "El número " + num + " formateado con 3 es : " + "<strong>" + num.toPrecision(3) + "</strong><br>";
	res = res + "El número " + num + " formateado con 4 es : " + "<strong>" + num.toPrecision(4) + "</strong><br>";
	res = res + "El número " + num + " formateado con 5 es : " + "<strong>" + num.toPrecision(5) + "</strong><br>";
	res = res + "El número " + num + " formateado con 6 es : " + "<strong>" + num.toPrecision(6) + "</strong><br>";
	res = res + "El número " + num + " formateado con 7 es : " + "<strong>" + num.toPrecision(7) + "</strong><br>";
	res = res + "El número " + num + " formateado con 8 es : " + "<strong>" + num.toPrecision(8) + "</strong><br>";
	res = res + "El número " + num + " formateado con 9 es : " + "<strong>" + num.toPrecision(9) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = res;
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toPrecision(precision) devuelve una cadena que representa un objeto Number según la precisión especificada. Dentro del paréntesis se indica el parámetro precisión, que es el número de dígitos que se utilizarán para representar el número.</p>" +
	"<p>Si el número de la precisión, es más alto que el número real, la función toPrecision(), añadirá ceros para crear la longitud deseada. Si el parámetro precision es omitido se mostrará el número tal cual. Si el parámetro precision es un valor no entero, el valor es redondeado al entero más cercano.</p>";
}
	

//Método .toString(x)
function aCadena() {
	var res = "";
	var num = 1234;
	
	res = res + "El número " + num + " convertido a cadena sin base " + "<strong>" + 
	num.toString() + "</strong>" + " de tipo " + typeof(num.toString()) + "<br>";
	res = res + "El número " + num + " convertido a cadena en base 2 es " + "<strong>" +
	num.toString(2) + "</strong> (binario) <br>";
	res = res + "El número " + num + " convertido a cadena en base 3 es " + "<strong>" + 
	num.toString(3) + "</strong> (ternario) <br>";
	res = res + "El número " + num + " convertido a cadena en base 5 es " + "<strong>" + 
	num.toString(5) + "</strong> (quinario) <br>";
	res = res + "El número " + num + " convertido a cadena en base 8 es " + "<strong>" + 
	num.toString(8) + "</strong> (octal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 10 es " + "<strong>" + 
	num.toString(10) + "</strong> (decimal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 12 es " + "<strong>" + 
	num.toString(12) + "</strong> (duodecimal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 16 es " + "<strong>" + 
	num.toString(16) + "</strong> (hexadecimal) <br>";
	res = res + "El número " + num + " convertido a cadena en base 32 es " + "<strong>" + 
	num.toString(32) + "</strong> (base32) <br>";
	res = res + "El número " + num + " convertido a cadena en base 36 es " + "<strong>" + 
	num.toString(36) + "</strong> (base32) <br>";

	document.getElementById("demo2").innerHTML = res; 
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.toString(base) convierte un número en una cadena, usando diferentes bases. Dentro del paréntesis se indica el parámetro base, que es la base de representación numérica de dígitos que se utilizará para representar el número.</p>" +
	"<p>Como opcional, se puede indicar qué base utilizar para representar un valor numérico. Debe ser un número entero entre 2 y 36. Si no se especifica la base, JavaScript asume la base predefinida, que es 10, formato decimal. </p>" +
	"<p>Por ejemplo, el método number.toString() representa un número en base 2 como binario, en base 8 como Octal y en base 16 como hexadecimal.</p>";
}

//Método valueOf()
function valorDe() {
    var res = "";
	var num = 15;
	var num1 = "15";
	var num2 = (15 === 15);
    var num3 = [15];
	var num4 = {edad: 15};
	var num5 = num.toString(16) ;
	var num6 = new Date("2018-11-15").getDate();
	
	res = res + "El número " + num + " su valor primitivo es " + "<strong>" + 
	num.valueOf() + "</strong>" + " y es de tipo " + typeof(num) + ".<br>";
	res = res + "El número " + "\"" + 15 + "\"" + " su valor primitivo es " + "<strong>" + 
	num1.valueOf() + "</strong>" + " y es de tipo " + typeof(num1) + ".<br>";
	res = res + "El número " + "(15 == 15)" + " su valor primitivo es " + "<strong>" + 
	num2.valueOf() + "</strong>" + " y es de tipo " + typeof(num2) + ".<br>";
	res = res + "El número " + "[15]" + " su valor primitivo es " + "<strong>" + 
	num3.valueOf() + "</strong>" + " y es de tipo " + typeof(num3) + ".<br>";
	res = res + "El número " + "{edad: 15}" + " su valor primitivo es " + "<strong>" + 
	num4.edad.valueOf() + "</strong>" + " y es de tipo " + typeof(num4) + ".<br>";
	res = res + "El número "  + "hexadecimal 15" +  " su valor primitivo es " + "<strong>" + 
	num5.valueOf() + "</strong>" + " y es de tipo " + typeof(num5) + ".<br>";
	res = res + "El número " + "2018-11-15" + " su valor primitivo es " + "<strong>" + 
	num6.valueOf() + "</strong>" + " y es de tipo " + typeof(num6) + ".<br>";
	
	document.getElementById("demo2").innerHTML = res; 
	document.getElementById("demo1").innerHTML = 	
	"<p>El método number.valueOf() devuelve el valor primitivo de una variable. Dentro del paréntesis no se indica parámetro alguno, Por delante del método se escribe el nombre del dato a evaluar. Puede ser, variable, objeto, array, string, number o función.</p>" +
	"<p>Este método no cambia el valor original, sólo devuelve el valor simple de un número. Si un objeto no tiene un valor, valueOf devuelve el objeto en sí.</p>";
}


var numObj = new Number(10);
console.log(typeof numObj); // objeto

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // número
// Max_Value de PI
/*function calculaCircunferencia(radio) {
  return 2 * Math.PI * radio;

calculaCircunferencia(1);  // 6.283185307179586
document.getElementById("demo").innerHTML = calculaCircunferencia(1);
}*/
function constructor() {
var num = 134.5;
var str = "string";
var boo = (num === str);	
document.getElementById("demo").innerHTML = "La propiedad constructor devuelve la función constructora de un número: " + "<br>" + num.constructor + "<br>" + str.constructor + "<br>" + boo.constructor;
/*document.getElementById("demo").innerHTML =
"<p>En JavaScript, la propiedad constructor devuelve la función constructora de un objeto.<br>" 
"El valor de retorno es una referencia a la función, no el nombre de la función:<br>"
"JavaScript números de los rendimientos propiedad constructor Número function () {[código nativo]}<br>"
"JavaScript encadena los rendimientos propiedad constructor función String () {[código nativo]}<br>
"JavaScript Booleans la propiedad constructor rendimientos función booleana () {[código nativo]}<br>";*/
}

function maximoValor() {
	var valorPi = Math.PI;
	var maxNumero = Number.MAX_VALUE;
    document.getElementById("demo").innerHTML = "El máximo valor del número PI es: " + valorPi + " y es de tipo: " + typeof(valorPi) + "<br>" + " El valor máximo de un número en Javascript es " + maxNumero + " y es de tipo " + typeof(maxNumero) + "<b>" + "Los números más grandes que la propiedad Number.MAX_VALUE se representan como infinito.";
	//document.getElementById("demo").innerHTML = Number.MAX_VALUE;
}