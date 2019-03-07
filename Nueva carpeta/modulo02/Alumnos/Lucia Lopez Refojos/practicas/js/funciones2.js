// JavaScript Document

// Método isFinite()

function esFinito() {
    var res = "";
    res = res + "¿Es finito 123?" + "<strong>" + isFinite(123) + "</strong><br>";
    res = res + "¿Es finito -123?" + "<strong>" + isFinite(-1.23) + "</strong><br>";
    res = res + "¿Es finito 5-2?" + "<strong>" + isFinite(5-2) + "</strong><br>";
    res = res + "¿Es finito 0?" + "<strong>" + isFinite(0) + "</strong><br>";
	res = res + "¿Es finito \"123\"?" + "<strong>" + isFinite("1.23") + "</strong><br>";
    res = res + "¿Es finito \"1.23\"?" + "<strong>" + isFinite("123") + "</strong><br>";
    res = res + "¿Es finito \"Hello\"?" + "<strong>" + isFinite("Hello") + "</strong><br>";
    res = res + "¿Es finito \"2005/12/12\"?" + "<strong>" + isFinite("2005/12/12") + "</strong><br>";
    res = res + "¿Es finito 0*0? " + "<strong>" + isFinite(0*0) + "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" + "\n" + res;
	document.getElementById("demo1").innerHTML =
	"<h3>Definición y uso</h3>" + 
	"<p>El método Number.isFinite () determina si un valor es un número finito.</p>" +
	"<p>Este método devuelve verdadero si el valor es el número de la, y equivale a un número finito. De lo contrario, devuelve falso.</p>" +
	 "<p>Number.isFinite () es diferente de lo global isFinite () función. La función isFinite mundial () convierte el valor probado en un número, a continuación, pone a prueba.</p>" + "<p>Number.isFinite () no convierte los valores a un número, y no volverá cierto para cualquier valor que no es del tipo Number.</p>";
}


// Método isInteger()

function esEntero() {
    var res = "";
    res = res + "¿Es un número entero 123?" + "<strong>" + Number.isInteger(123) + "</strong><br>";
    res = res + "¿Es un número entero -123?" + "<strong>" + Number.isInteger(-1.23) + "</strong><br>";
    res = res + "¿Es un número entero 5-2?" + "<strong>" + Number.isInteger(5-2) + "</strong><br>";
    res = res + "¿Es un número entero 0?" + "<strong>" + Number.isInteger(0) + "</strong><br>";
	res = res + "¿Es un número entero \"1.23\"?" + "<strong>" + Number.isInteger("1.23") + "</strong><br>";
    res = res + "¿Es un número entero \"123\"?" + "<strong>" + Number.isInteger("123") + "</strong><br>";
    res = res + "¿Es un número entero \"Hello\"?" + "<strong>" + Number.isInteger("Hello") + "</strong><br>";
    res = res + "¿Es un número entero \"2005/12/12\"?" + "<strong>" + Number.isInteger("2005/12/12") + "</strong><br>";
    res = res + "¿Es un número entero 0*0? " + "<strong>" + Number.isInteger(0*0) + "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" + "\n" + res;
	document.getElementById("demo1").innerHTML =
	"<h3>Definición y uso</h3>" + 
	"<p>El método Number.isInteger () determina si un valor un número entero.</p>" +
	"<p>Este método devuelve verdadero si el valor es el número de la, y un número entero (un número sin decimales). De lo contrario, devuelve falso.</p>";
	 }
	 
	 // Método isNaN()

function noEsUnNumero() {
    var res = "";
    res = res + "¿No es un número 123?" + "<strong>" + Number.isNaN(123) + "</strong><br>";
    res = res + "¿No es un número -123?" + "<strong>" + Number.isNaN(-1.23) + "</strong><br>";
    res = res + "¿No es un número 5-2?" + "<strong>" + Number.isNaN(5-2) + "</strong><br>";
    res = res + "¿No es un número 0?" + "<strong>" + Number.isNaN(0) + "</strong><br>";
	res = res + "¿No es un número \"1.23\"?" + "<strong>" + Number.isNaN("1.23") + "</strong><br>";
    res = res + "¿No es un número \"123\"?" + "<strong>" + Number.isNaN("123") + "</strong><br>";
    res = res + "¿No es un número \"Hello\"?" + "<strong>" + isNaN("Hello") + "</strong><br>";
    res = res + "¿No es un número \"2005/12/12\"?" + "<strong>" + Number.isNaN("2005/12/12") + "</strong><br>";
    res = res + "¿No es un número 0*0? " + "<strong>" + Number.isNaN(0*0) + "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" + "\n" + res;
	document.getElementById("demo1").innerHTML =
	"<h3>Definición y uso</h3>" + 
	"<p>El método Number.isNaN () determina si un valor es NaN (No-A-Number).</p>" +
	"<p>Este método devuelve verdadero si el valor es el número de la, y equivale a NaN. De lo contrario, devuelve falso.</p>" +
	"<p>Number.isNaN () es diferente de lo global isNaN () función. La función global isNaN () convierte el valor probado en un número, a continuación, pone a prueba.</p>" +
	"<p>umber.isNaN () no convierte los valores a un número, y no volverá cierto para cualquier valor que no es del tipo Number.</p>" +
	"<p>Consejo: En JavaScript, el valor NaN es considerado como un tipo de número.</p>";
	 }
	 

 // Método toExponential()

function aExponencial() {
    var res = "";
	var num1 = 456789;
	var num2 = 4.56789;
	var num3 = 0.00236587;
	var num4 = 0.128549;
	var num5 = 1.25878;
	
    res = res + "El número " + num1 + " en exponencial es: " + "<strong>" + num1.toExponential() + "</strong><br>";
    res = res + "El número " + num2 + " en exponencial es: " + "<strong>" + num2.toExponential() + "</strong><br>";
    res = res + "El número " + num3 + " en exponencial es: " + "<strong>" + num3.toExponential() + "</strong><br>";
    res = res + "El número " + num4 + " en exponencial es: " + "<strong>" + num4.toExponential() + "</strong><br>";
	res = res + "El número " + num1 + " en exponencial es: " + "<strong>" + num1.toExponential(2) + "</strong><br>";
    res = res + "El número " + num2 + " en exponencial es: " + "<strong>" + num1.toExponential(3) + "</strong><br>";
    res = res + "El número " + num3 + " en exponencial es: " + "<strong>" + num3.toExponential(4) + "</strong><br>";
    res = res + "El número " + num4 + " en exponencial es: " + "<strong>" + num4.toExponential(5) + "</strong><br>";
    res = res + "El número " + num5 + " en exponencial es: " + "<strong>" + num4.toExponential(6) + "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" + "\n" + res;
	document.getElementById("demo1").innerHTML =
	"<h3>Definición y uso</h3>" + 
	"<p>El método toExponential () convierte un número en una notación exponencial.</p>";
	 }

// Método toFixed ()

function aRedondear() {
    var res = "";
	var num = 4.5678925456784338;
	res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(1) + "</strong><br>";
    res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(2) + "</strong><br>";
    res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(3) + "</strong><br>";
    res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(4) + "</strong><br>";
	res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(5) + "</strong><br>";
    res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(6) + "</strong><br>";
    res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(7) + "</strong><br>";
    res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(8) + "</strong><br>";
    res = res + "El número " + num + " redondeado es: " + "<strong>" + num.toFixed(9) + "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" + "\n" + res;
	document.getElementById("demo1").innerHTML =
	"<h3>Definición y uso</h3>" + 
	"<p>El método toFixed () convierte un número en una cadena, manteniendo un número especificado de decimales.</p>" +
	"<p>Nota: si el número deseado de decimales son más altos que el número real, se añaden los nulos para crear la longitud deseada decimal.</p>";
	 }
	 
	 
	 // Método toPrecision (x)

function precision() {
var numero = 13.3714;
var a = numero.toPrecision();
var b = numero.toPrecision(1);
var c = numero.toPrecision(2);
var d = numero.toPrecision(3);
var e = numero.toPrecision(4);
var f = numero.toPrecision(5);
var g = numero.toPrecision(6);
var h = numero.toPrecision(7);
	
	document.getElementById("demo2").innerHTML = 
	"<h3>Resultado del uso</h3>" + "\n" +
	 "El valor de la variable a: "  + a + "<br>" +
	 "El valor de la variable b: " + b + "<br>" +
	 "El valor de la variable c: " + c + "<br>" +
	 "El valor de la variable d: " + d + "<br>" +
	 "El valor de la variable e: " + e + "<br>" +
	 "El valor de la variable f: " + f + "<br>" +
	 "El valor de la variable g: " + g + "<br>" +
	 "El valor de la variable h: "  + h + "<br>";
	 
	document.getElementById("demo1").innerHTML =
	
	"<h3>Definición y uso</h3>" + 
	"<p>El método toPrecision () formatea un número a una longitud especificada.</p>" +
	"<p>Se añaden un punto decimal y los nulos (si es necesario), para crear la longitud especificada.</p>";
	 }
	 
	 // Método toString()

function aCadena() {
	var numero = 15;
	var enDecimal = numero;
	var enCadena = numero.toString();
	var aBinario = numero.toString(2);
	var aOctal = numero.toString(8);
	var aHexadecimal = numero.toString(16);
	
	document.getElementById("demo2").innerHTML = 
	"<h3>Resultado del uso</h3>" + "\n" +
	"El valor de la variable enDecimal: "  + enDecimal + "<br>" +
	 "El valor de la variable enCadena: "  + "\"" + enCadena + "\"" + "<br>" +
	 "El valor de la variable aBinario: " + aBinario + "<br>" +
	 "El valor de la variable aOctal: " + aOctal + "<br>" +
	 "El valor de la variable aHexadecimal: " + aHexadecimal + "<br>";
	 
	 document.getElementById("demo1").innerHTML =
	 "<h3>Definición y uso</h3>" + 
	"<p>El método toString () convierte un número en una cadena.</p>";
	}


	 // Método valueOf()

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
	
	
	document.getElementById("demo2").innerHTML = 
	"<h3>Resultado del uso</h3>" + "\n" +
	"El valor de la variable arr es: "  + a + " y es de tipo: " + typeof(arr) + "<br>" +
	 "El valor de la variable obj es: "  + b + " y es de tipo: " + typeof(obj) + "<br>" +
	 "El valor de la variable cad es: " + c + " y es de tipo: " + typeof(cad) + "<br>" +
	 "El valor de la variable num es: " + d + " y es de tipo: " + typeof(num) + "<br>" +
	 "El valor de la variable bol es: " + e + " y es de tipo: " + typeof(bol) + "<br>";
	 
	 document.getElementById("demo1").innerHTML =
	 "<h3>Definición y uso</h3>" + 
	"<p>El método valueOf () devuelve el valor primitivo de un objeto de cadena.</p>" +
	"<p>Nota: Este método se suele llamar automáticamente por JavaScript detrás de las escenas, y no de forma explícita en el código.</p>";
	
	}
	
	