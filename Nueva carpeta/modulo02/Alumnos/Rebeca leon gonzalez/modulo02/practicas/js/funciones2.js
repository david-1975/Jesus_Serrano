
//Método isFinite();

function esFinito() {
	
    var res = "";
    res = res + "¿ Es finito 123 ? " + "<strong>" + isFinite(123) + "</strong><br>";
    res = res + "¿ Es finito -1.23 ? "+ "<strong>" + isFinite(-1.23) + "</strong><br>";
    res = res + "¿ Es finito 5-2 ? "+ "<strong>" +isFinite(5-2) + "</strong><br>";
    res = res +  "¿ Es finito 0 ? "+ "<strong>" +isFinite(0) + "</strong><br>";
    res = res +  "¿ Es finito 1.23 ? "+ "<strong>" +isFinite(1.23) + "</strong><br>";
	res = res +  "¿ Es finito \"123\" ? "+ "<strong>" +isFinite("123") + "</strong><br>";
    res = res +  "¿ Es finito \"hola\" ? "+ "<strong>" +isFinite("hola") + "</strong><br>";
    res = res + "¿ Es finito \"2005/12/12\" ? "+ "<strong>"+isFinite("2005/12/12") + "</strong><br>";
    res = res + "¿ Es finito 0*0 ? " + "<strong>" + isFinite(0*0) +  "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resutado del uso </h3>"+ "\n"+res;
	document.getElementById("demo1").innerHTML=
	"<h3>Definición y uso</h3>" + 
"<p>El método Number.isFinite () determina si un valor es un número finito.</p>" + 

"<p>Este método devuelve verdadero si el valor es del tipo Número y equivale a un número finito. De lo contrario, devuelve falso.</p>" +

"<p>Number.isFinite () es diferente de la función global isFinite () . La función global isFinite () convierte el valor probado en un número y luego lo prueba.</p>"  +

"<p>Number.isFinite () no convierte los valores a un Número, y no devolverá verdadero para ningún valor que no sea del tipo Número.</p>";
	
}

//Método isInteger()

function esEntero() {
	
    var res = "";
    res = res + "¿ Es entero 123 ? " + "<strong>" + Number.isInteger(123) + "</strong><br>";
    res = res + "¿ Es entero -1.23 ? "+ "<strong>" + Number.isInteger(-1.23) + "</strong><br>";
    res = res + "¿ Es entero 5-2 ? "+ "<strong>" + Number.isInteger(5-2) + "</strong><br>";
    res = res +  "¿ Es entero 0 ? "+ "<strong>" + Number.isInteger(0) + "</strong><br>";
    res = res +  "¿ Es entero 1.23 ? "+ "<strong>" + Number.isInteger(1.23) + "</strong><br>";
	res = res +  "¿ Es entero \"123\" ? "+ "<strong>" + Number.isInteger("123") + "</strong><br>";
    res = res +  "¿ Es entero \"hola\" ? "+ "<strong>" + Number.isInteger("hola") + "</strong><br>";
    res = res + "¿ Es entero \"2005/12/12\" ? "+ "<strong>"+ Number.isInteger("2005/12/12") + "</strong><br>";
    res = res + "¿ Es entero 0*0 ? " + "<strong>" + Number.isInteger(0*0) +  "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resutado del uso </h3>"+ "\n" +res;
	document.getElementById("demo1").innerHTML= "<h3>Definición y uso</h3>"+
	"<p>El método Number.isInteger () determina si un valor es un entero.</p>"+
"<p>Este método devuelve verdadero si el valor es del tipo Número y un entero (un número sin decimales). De lo contrario, devuelve falso.</p>";
}

//Método isNaN();

function noEsUnNumero() {
	
    var res = "";
    res = res + "¿ No es un numero 123*321 ? " + "<strong>" + isNaN(123*321) + "</strong><br>";
    res = res + "¿  No es un numero -1.23 ? "+ "<strong>" + isNaN(-1.23) + "</strong><br>";
    res = res + "¿  No es un numero 5-2 ? "+ "<strong>" + isNaN(5-2) + "</strong><br>";
    res = res +  "¿  No es un numero 0 ? "+ "<strong>" + isNaN(0) + "</strong><br>";
    res = res +  "¿  No es un numero 1.23 ? "+ "<strong>" + isNaN(1.23) + "</strong><br>";
	res = res +  "¿  No es un numero \"123\" ? "+ "<strong>" + isNaN("123") + "</strong><br>";
    res = res +  "¿  No es un numero\"hola\" ? "+ "<strong>" + isNaN("hola") + "</strong><br>";
    res = res + "¿  No es un numero \"2005/12/12\" ? "+ "<strong>"+ isNaN("2005/12/12") + "</strong><br>";
    res = res + "¿  No es un numero 0*0 ? " + "<strong>" + isNaN(0*0) +  "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resutado del uso </h3>"+ "\n" +res;
	document.getElementById("demo1").innerHTML= "<h3>Definición y uso</h3>"+
"<p>El método Number.isNaN () determina si un valor es NaN (Not-A-Number).</p>"+

"<p>Este método devuelve verdadero si el valor es del tipo Número y equivale a NaN. De lo contrario, devuelve falso.</p>"+

"<p>Number.isNaN () es diferente de la función global isNaN () . La función global isNaN () convierte el valor probado en un Número y luego lo prueba.</p>"+

"<p>Number.isNaN () no convierte los valores a un Número, y no devolverá verdadero para ningún valor que no sea del tipo Número.</p>"+

"<p>Consejo: En JavaScript, el valor NaN se considera un tipo de número.</p>";
}

//Método toExponential(x)

function aExponencial(){
	
	 var res = "";
	 var num1 = 456789;
	 var num2 = 4.56789;
	 var num3 = 0.006455;
	 var num4 = 0.124700085;
	 
    res = res + "El número" + num1 + " en exponencial es: "  + "<strong>" + num1.toExponential() + "</strong><br>";	
    res = res + "El número" + num2 + " en exponencial es: "  + "<strong>" + num2.toExponential() + "</strong><br>";
	res = res + "El número" + num3 + " en exponencial es: "  + "<strong>" + num3.toExponential() + "</strong><br>";
	res = res + "El número" + num4 + " en exponencial es: "  + "<strong>" + num4.toExponential() + "</strong><br>";
	res = res + "El número" + num1 + " en exponencial es: "  + "<strong>" + num1.toExponential(2) + "</strong><br>";
	res = res + "El número" + num2 + " en exponencial es: "  + "<strong>" + num2.toExponential(3) + "</strong><br>";
	res = res + "El número" + num3 + " en exponencial es: "  + "<strong>" + num3.toExponential(4) + "</strong><br>"; 
	res = res + "El número" + num4 + " en exponencial es: "  + "<strong>" + num4.toExponential(5) + "</strong><br>";	
	res = res + "El número" + num4 + " en exponencial es: "  + "<strong>" + num4.toExponential(6) + "</strong><br>";
   

    document.getElementById("demo2").innerHTML = "<h3>Resutado del uso </h3>"+ "\n" + res;
	document.getElementById("demo1").innerHTML= "<h3>Definición y uso</h3>"+
"<p>El método toExponential () convierte un número en una notación exponencial.</p>";
	}
	
	//Método toFixed(x)

function aredondear(){
	
	 var res = "";
	 var num = 5.1234567890;
	 
	 
    res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(0) + "</strong><br>";	
    res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(1) + "</strong><br>";
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(2) + "</strong><br>";
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(3) + "</strong><br>";
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(4) + "</strong><br>";
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(5) + "</strong><br>";
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(6) + "</strong><br>"; 
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(7) + "</strong><br>";	
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(8) + "</strong><br>";
	res = res + "El número" + num + " redondeado es: "  + "<strong>" + num.toFixed(9) + "</strong><br>";
   

    document.getElementById("demo2").innerHTML = "<h3>Resutado del uso </h3>"+ "\n" + res;
	document.getElementById("demo1").innerHTML= "<h3>Definición y uso</h3>"+
"<p>El método toFixed () convierte un número en una cadena, manteniendo un número específico de decimales.</p>"+

"<p>Nota: si el número de decimales deseado es mayor que el número real, se agregan nulos para crear la longitud decimal deseada.</p>";
	}
	
//Método toPrecision(x)

function precision(){
	var numero = 3.1415;
	
	var a = numero.toPrecision();
	var b = numero.toPrecision(1);
	var c = numero.toPrecision(2);
	var d = numero.toPrecision(3);
	var e = numero.toPrecision(4);
	var f = numero.toPrecision(5);
	var g = numero.toPrecision(6);
	var h = numero.toPrecision(7);
	var i = numero.toPrecision(8);
	
document.getElementById("demo2").innerHTML = 
	"<h3>Resutado del uso </h3>"+ "\n" + 
	"El valor de la variable a: " + a + "<br>" +
	"El valor de la variable b: " +  b + "<br>" +
	"El valor de la variable c: " +  c + "<br>" + 
	"El valor de la variable d: " +  d + "<br>" + 
	"El valor de la variable e: " +  e + "<br>" + 
	 "El valor de la variable f: " + f + "<br>" + 
	"El valor de la variable g: " +  g + "<br>" + 
	"El valor de la variable h: " +  h + "<br>" + 
	"El valor de la variable i: " +  i + "<br>";

document.getElementById("demo1").innerHTML= "<h3>Definición y uso</h3>"+
	
	"<p>El método toPrecision () formatea un número a una longitud específica.</p>" +
	"<p>Se agregan un punto decimal y nulos (si es necesario), para crear la longitud especificada.</p>";
	
	}
	
// Método toString()

function aCadena(){
	var numero = 15;
	var enCadena = numero.toString();
	var aBinario = numero.toString(2);
	var aOctal = numero.toString(8); 
	var aHexadecimal = numero.toString(16);
	
	document.getElementById("demo2").innerHTML=
	 "<h3>Resutado del uso </h3>"+ "\n" + 
	"El valor de la variable enCadena: " + "\"" + enCadena + "\"" + "<br>" +
	"El valor de la variable aBinario: " + aBinario + "<br>" +
	"El valor de la variable aOctario: " + aOctal+ "<br>" +
	"El valor de la variable aHexadecimal: " + aHexadecimal + "<br>";
	
	document.getElementById("demo1").innerHTML= "<h3>Definición y uso</h3>" +	
	"<p>El método toString () convierte un número en una cadena.</p>";
	
	}
	
//Método valueOf( )
function valorDe(){
	
	var arr = [10,20,30];
	var obj = {num:10 , num2:20 , num3:30};
	var cad = "Hola";
	var num = 10;
	var bol = (10<20);
	
	
	var a = arr.valueOf();
	var b = obj.valueOf();
	var c = cad.valueOf();
	var d = num.valueOf();
	var e = bol.valueOf();
	
	document.getElementById("demo2").innerHTML= "<h3>Definición y uso</h3>" + "\n" +
	"El valor de la variable arr es : " + a + " y es de tipo : "  + typeof(arr) + "<br>" + 
	"El valor de la variable obj es : " + b + " y es de tipo : " + typeof(obj) + "<br>" + 
	"El valor de la variable cad es :  " + c + " y es de tipo : "  + typeof(cad) + "<br>" + 
	"El valor de la variable num es : " + d + " y es de tipo : "  + typeof(num) + "<br>" + 
	"El valor de la variable bol es : " + e + " y es de tipo : "  + typeof(bol) + "<br>" ;
	
	 
	document.getElementById("demo1").innerHTML= "<h3>Definición y uso</h3>" +	
	"<p>El método toString () convierte un número en una cadena.</p>";
	
	}
	
	
