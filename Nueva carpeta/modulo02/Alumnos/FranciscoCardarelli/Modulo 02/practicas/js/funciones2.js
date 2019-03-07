// JavaScript Document


//Método isFinite()
function esFinito() {
    var res = "";
    res = res + "¿Es finito 123? " + "<strong>" + isFinite(123) + "</strong><br>";
    res = res + "¿Es finito -1.23? " + "<strong>" + isFinite(-1.23) + "</strong><br>";
    res = res + "¿Es finito 5-2? " + "<strong>" + isFinite(5-2) + "</strong><br>";
    res = res + "¿Es finito 1.23? " + "<strong>" + isFinite(1.23) + "</strong><br>";
    res = res + "¿Es finito \"123\"? " + "<strong>" + isFinite("123") + "</strong><br>";
    res = res + "¿Es finito \"Hello\"? " + "<strong>" + isFinite("Hello") + "</strong><br>";
    res = res + "¿Es finito \"2005/12/12\"? " + "<strong>" + isFinite("2005/12/12") + "</strong><br>";
    res = res + "¿Es finito 0*0? " + "<strong>" + isFinite(0*0) + "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Results and use</h3>" + "\n" + res;
    document.getElementById("demo1").innerHTML = "<h3>Definition and Usage</h3>" + 
	"<p>The Number.isFinite() method determines whether a value is a finite number.</p>" +
	"<p>This method returns true if the value is of the type Number, and equates to a finite number. Otherwise it returns false.</p>";
}

//Método isNaN()
function esEntero() {
    var res = "";
    res = res + "¿No es un número 123? " + "<strong>" + Number.isNaN(123) + "</strong><br>";
    res = res + "¿No es un número -1.23? " + "<strong>" + Number.isNaN(-1.23) + "</strong><br>";
    res = res + "¿No es un número 5-2? " + "<strong>" + Number.isNaN(5-2) + "</strong><br>";
    res = res + "¿No es un número 1.23? " + "<strong>" + Number.isNaN(1.23) + "</strong><br>";
	res = res + "¿No es un número \"123\"? " + "<strong>" + Number.isNaN("123") + "</strong><br>";
	res = res + "¿No es un número \"Hello\"? " + "<strong>" + Number.isNaN("Hello") + "</strong><br>";
	res = res + "¿No es un número \"2005/12/12\"? " + "<strong>" + Number.isNaN("2005/12/12") + "</strong><br>";
	res = res + "¿No es un número 0*0? " + "<strong>" + Number.isNaN(0*0) + "</strong><br>";

	document.getElementById("demo2").innerHTML = "<h3>Results and use</h3>" + "\n" + res;
}

//Método is	NaN()
function NoEsUnNumero() {
    var res = "";
    res = res + "¿No es 123 un número? " + "<strong>" + isNaN(123) + "</strong><br>";
    res = res + "¿Es -1.23 es un número? " + "<strong>" + isNaN(-1.23) + "</strong><br>";
    res = res + "¿Es un número 5-2? " + "<strong>" + Number.isNaN(5-2) + "</strong><br>";
    res = res + "¿Es un número 1.23? " + "<strong>" + Number.isNaN(1.23) + "</strong><br>";
	res = res + "¿Es un número \"123\"? " + "<strong>" + Number.isNaN("123") + "</strong><br>";
	res = res + "¿Es un número \"Hello\"? " + "<strong>" + Number.isNaN("Hello") + "</strong><br>";
	res = res + "¿Es un número \"2005/12/12\"? " + "<strong>" + Number.isNaN("2005/12/12") + "</strong><br>";
	res = res + "¿Es un número 0*0? " + "<strong>" + Number.isNaN(0*0) + "</strong><br>";

	document.getElementById("demo2").innerHTML = "<h3>Results and use</h3>" + "\n" + res;
}

//Método toExponential()
function aExponencial() {
    var num = 456789;
	/*var num2 = 4.56789;
	var nun3 = 0.006455;
	var num4 = 0.1234700085;*/
    res = " El número " + num + " " + "en exponencial es: " + "<strong>" + num.toExponential() + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = "<h3>Results and use</h3>" + "\n" + res;
}

//Método toFixed()
function aRedondear() {
    var num = 5.123456789;
    res = "El número " + num + " " +"redondeado es : " + "<strong>" + num.toFixed(0) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = "<h3>Results and use</h3>" + "\n" + res;
}

//Método toPrecision()
function aPreciso() {
    var numero = 3.1416;
    var a = numero.toPrecision();
    var a = numero.toPrecision(1);
    var b = numero.toPrecision(2);
    var c = numero.toPrecision(3);
    var d = numero.toPrecision(4);
    var e = numero.toPrecision(5);
    var f = numero.toPrecision(6);
    var g = numero.toPrecision(7);
    var h = numero.toPrecision(8);
    var i = numero.toPrecision(9);

	document.getElementById("demo2").innerHTML = 
	"<h3>Results and use</h3>" + "\n" + 
	"Esl valor de la variable a es: " + a + "<br>" + 
	"Esl valor de la variable b es: " + b + "<br>" + 
	"Esl valor de la variable c es: " + c + "<br>" + 
	"Esl valor de la variable d es: " +	d + "<br>" + 
	"Esl valor de la variable e es: " +	e + "<br>" +  
	"Esl valor de la variable f es: " +	f + "<br>" + 
	"Esl valor de la variable g es: " +	g + "<br>" +
	"Esl valor de la variable h es: " + h + "<br>" + 
	"Esl valor de la variable i es: " + i + "<br>";
    document.getElementById("demo1").innerHTML = "<h3>Definition and Usage</h3>" + 
	"<p>The Number.isFinite() method determines whether a value is a finite number.</p>" +
	"<p>This method returns true if the value is of the type Number, and equates to a finite number. Otherwise it returns false.</p>";
}

//Método toString()
function aObjeto() {
	var numero = 15;
	var enDecimal = numero;
	var enCadena = numero.toString();
	var aBinario = numero.toString(2);
	var aOctal = numero.toString(8);
	var aHexadecimal = numero.toString(16);

	document.getElementById("demo2").innerHTML = "<h3>Results and use</h3>" + "\n" + 
	"El valor del número 15 en Decimal es: " + enDecimal + "<br>" + 
	"El valor del número 15 en Cadena es: " + enCadena + "<br>" + 
	"El valor del número 15 en Binario es: " + aBinario + "<br>" + 
	"El valor del número 15 en Octal es: " + aOctal + "<br>" + 
	"El valor del número 15 en Hexadecimal es: " + aHexadecimal + "<br>";
	
    document.getElementById("demo1").innerHTML = "<h3>Definition and Usage</h3>";
}

//Método valueOf()
function elValor() {
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
		
	document.getElementById("demo2").innerHTML = "<h3>Results and use</h3>" + "\n" + 
	'El valor de la variable "a" es: ' + a + " " + "de tipo: " + typeof(arr) + "<br>" + 
	'La variable "b" es: ' + b + " " + "de tipo: " + typeof(obj) + "<br>" + 
	'El valor de la variable "c" es: ' + c + " " + "de tipo: " + typeof(cad) + "<br>" + 
	'El valor de la variable "d" es: ' + d + " " + "de tipo: " + typeof(num) + "<br>" + 
	'El valor de la variable "e" es: ' + e + " " + "de tipo: " + typeof(bol) + "<br>"; 
	
    document.getElementById("demo1").innerHTML = "<h3>Definition and Usage</h3>";
	
}