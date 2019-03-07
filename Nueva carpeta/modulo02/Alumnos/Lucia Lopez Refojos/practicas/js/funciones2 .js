

//Método isFinite()
function esFinito() {
    var res = "";
    res = res +  "Es finito 123: " + "<strong>" + Number.isFinite(123) + "</strong><br>";
    res = res + "Es finito -1.23: " + "<strong>" + Number.isFinite(-1.23) + "</strong><br>";
    res = res + "Es finito 5-2: " + "<strong>" + Number.isFinite(5-2) + "</strong><br>";
    res = res + "Es finito 0: " + "<strong>" + Number.isFinite(0)+ "</strong><br>";
	res = res + "Es finito 1.23: " + "<strong>" + Number.isFinite(1.23)  + "</strong><br>";
    res = res + "Es finito \"123\": " + "<strong>" + Number.isFinite('123') + "</strong><br>";
    res = res + "Es finito \"Hello\": " + "<strong>" + Number.isFinite('Hello') + "</strong><br>";
    res = res + "Es finito \"2005/12/12\": " + "<strong>" + Number.isFinite('2005/12/12')  + "</strong><br>";
    res = res + "Es finito \"0 * 0\": " + "<strong>" + Number.isFinite(0*0) + "</strong><br>";
   
document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" +"\n" + res;
  
document.getElementById("demo1").innerHTML = "<h3>Definición y uso </h3>" + "\n" + "<p>El método Number.isFinite () determina si un valor es un número finito. Este método devuelve verdadero si el valor es el número de la, y equivale a un número finito. </p><p>De lo contrario, devuelve falso. Number.isFinite () es diferente de lo global isFinite () función. La función isFinite mundial () convierte el valor probado en un número, a continuación, pone a prueba. Number.isFinite () no convierte los valores a un número, y no volverá cierto para cualquier valor que no es del tipo Number.</p>";
}

//Método isInteger()
function esEntero() {
    var res = "";
    res = res +  "Es entero 123: " + "<strong>" + Number.isInteger(123) + "</strong><br>";
    res = res + "Es entero -1.23: " + "<strong>" + Number.isInteger(-1.23) + "</strong><br>";
    res = res + "Es entero 5-2: " + "<strong>" + Number.isInteger(5-2) + "</strong><br>";
    res = res + "Es entero 0: " + "<strong>" + Number.isInteger(0)+ "</strong><br>";
	res = res + "Es entero 1.23: " + "<strong>" + Number.isInteger(1.23)  + "</strong><br>";
    res = res + "Es entero \"123\": " + "<strong>" + Number.isInteger('123') + "</strong><br>";
    res = res + "Es entero \"Hello\": " + "<strong>" + Number.isInteger('Hello') + "</strong><br>";
    res = res + "Es entero \"2005/12/12\": " + "<strong>" + Number.isInteger('2005/12/12')  + "</strong><br>";
    res = res + "Es entero \"0 * 0\": " + "<strong>" + Number.isInteger(0*0) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML = "<h3>Definición y uso </h3>" +"\n" + "<p>El método Number.isInteger () determina si un valor un número entero.</p><p>Este método devuelve verdadero si el valor es el número de la, y un número entero (un número sin decimales).</p> <p>De lo contrario, devuelve falso.</p>";
}

//Método isNaN()
function noesNumero() {
	 var res = "";
    res = res +  "No es un número 123: " + "<strong>" +isNaN(123) + "</strong><br>";
    res = res + "No es un número -1.23: " + "<strong>" + isNaN(-1.23) + "</strong><br>";
    res = res + "No es un número 5-2: " + "<strong>" + isNaN(5-2) + "</strong><br>";
    res = res + "No es un número 0: " + "<strong>" + isNaN(0)+ "</strong><br>";
	res = res + "No es un número 1.23: " + "<strong>" + isNaN(1.23)  + "</strong><br>";
    res = res + "No es un número \"123\": " + "<strong>" +isNaN('123') + "</strong><br>";
    res = res + "No es un número \"Hello\": " + "<strong>" + isNaN('Hello') + "</strong><br>";
    res = res + "No es un número \"2005/12/12\": " + "<strong>" + isNaN('2005/12/12')  + "</strong><br>";
    res = res + "No es un número \"0 * 0\": " + "<strong>" + isNaN(0*0) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML = "<h3>Definición y uso </h3>" +"\n" + "<p>El método Number.isNaN () determina si un valor es NaN (No-A-Number). Este método devuelve verdadero si el valor es el número de la, y equivale a NaN. De lo contrario, devuelve falso. Number.isNaN () es diferente de lo global isNaN () función. La función global isNaN () convierte el valor probado en un número, a continuación, pone a prueba.Number.isNaN () no convierte los valores a un número, y no volverá cierto para cualquier valor que no es del tipo Number.</p><p>Consejo: En JavaScript, el valor NaN es considerado como un tipo de número.</p>";
}

//Método toExponential(x)
function aExponencial() {
	 var res = "";
	 var num1= 5.56789; var num2= 4.56789;  
	 var num3= 3.56789;  var num4= 45.6789;  
	 var num5= 2.5679;  var num6= 0.56889;
    res = res +  "El número" + num1 +  " en exponencial es : " + "<strong>" + num1.toExponential() + "</strong><br>";
	res = res +  "El número" + num2 +  " en exponencial es : " + "<strong>" + num2.toExponential() + "</strong><br>";
	res = res +  "El número" + num3 +  " en exponencial es : " + "<strong>" + num3.toExponential() + "</strong><br>";
	res = res +  "El número" + num4 +  " en exponencial es : " + "<strong>" + num4.toExponential() + "</strong><br>";
	res = res +  "El número" + num5 +  " en exponencial es : " + "<strong>" + num5.toExponential() + "</strong><br>";
	res = res +  "El número" + num6 +  " en exponencial es : " + "<strong>" + num6.toExponential() + "</strong><br>";
	
	res = res +  "El número" + num1 +  " en exponencial es : " + "<strong>" + num1.toExponential(2) + "</strong><br>";
	res = res +  "El número" + num2 +  " en exponencial es : " + "<strong>" + num2.toExponential(3) + "</strong><br>";
	res = res +  "El número" + num3 +  " en exponencial es : " + "<strong>" + num3.toExponential(1) + "</strong><br>";
	res = res +  "El número" + num4 +  " en exponencial es : " + "<strong>" + num4.toExponential(3) + "</strong><br>";
	res = res +  "El número" + num5 +  " en exponencial es : " + "<strong>" + num5.toExponential(7) + "</strong><br>";
	res = res +  "El número" + num6 +  " en exponencial es : " + "<strong>" + num6.toExponential(4) + "</strong><br>";
	
    
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML = "<h3>El método toExponential</h3> ()<p> convierte un número en una notación exponencial.</p>";
}

//Método toFixed(x)
function aRedondear() {
	 var res = "";
	 var num= 5.56789; 
    res = res +  "El número es redondeado" + num +  " en exponencial es : " + "<strong>" + num.toFixed(1) + "</strong><br>";
	res = res +  "El número es redondeado" + num +  " en exponencial es : " + "<strong>" + num.toFixed(2) + "</strong><br>";
	res = res +  "El número es redondeado" + num +  " en exponencial es : " + "<strong>" + num.toFixed(3) + "</strong><br>";
	res = res +  "El número es redondeado" + num +  " en exponencial es : " + "<strong>" + num.toFixed(4) + "</strong><br>";
	res = res +  "El número es redondeado" + num +  " en exponencial es : " + "<strong>" + num.toFixed(5) + "</strong><br>";
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML = "<h3>El método toExponential</h3> ()<p> convierte un número en una notación exponencial.</p>";
}

//Método .toPrecision(x)
function precision() {
	var num= 3.1416; 
	var a = num.toPrecision();
	var b = num.toPrecision(1);
	var c = num.toPrecision(2);
	var d = num.toPrecision(3);
	var e = num.toPrecision(4);
   
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" + "\n" +
	"El valor de la  variable a: "+ a + "<br>" + 
	"El valor de la  variable b: "+ b + "<br>" + 
	"El valor de la  variable c: "+ c + "<br>" + 
	"El valor de la  variable d: "+ d + "<br>" + 
	"El valor de la  variable e: "+ e + "<br>" ; 
	  
	document.getElementById("demo1").innerHTML = 
	"<h3>El método toExponential</h3> ()<p> convierte un número en una notación exponencial.</p>";
}
	

//Método .toString(x)
function aCadena() {
	var numero = 15;
	var enDecimal= numero;
	var enCadena= numero.toString();
	var aBinario= numero.toString(2);
	var aOctal= numero.toString(8);
	var aHexadecimal= numero.toString(16);


	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso </h3>" + "\n" +
	"El número 15 su valor en decimal es : " + enDecimal + "<br>" + 
	"El número 15 su valor en cadena es : " + "\"" + enCadena + "\"" + "<br>" + 
	"El número 15 su valor en binario es : "+ aBinario + "<br>" + 
	"El número 15 su valor en octadecimal es: "+ aOctal + "<br>" + 
	"El número 15 su valor en hexadecimal es "+ aHexadecimal + "<br>";
	
	
	document.getElementById("demo1").innerHTML = 
	"<h3>El método toExponential</h3> ()<p> convierte un número en una notación exponencial.</p>";

}