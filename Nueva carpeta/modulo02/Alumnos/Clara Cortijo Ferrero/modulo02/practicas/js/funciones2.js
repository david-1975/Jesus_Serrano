// JavaScript Document


//método isFinite()
function esFinito() {
    var res = "";
    res = res + "¿Es finito 123? "+ "<strong>" + Number.isFinite(123) +"</strong><br>";
    res = res + "¿Es finito -1.23? "+ "<strong>" + Number.isFinite(-1.23) +"</strong><br>";
    res = res + "¿Es finito 5-2? "+ "<strong>" + Number.isFinite(5-2)+"</strong><br>" ;
    res = res + "¿Es finito 0? "+ "<strong>" + Number.isFinite(0)+"</strong><br>";
	res = res + "¿Es finito 1.23? "+ "<strong>" + Number.isFinite(1.23) +"</strong><br>";
    res = res + "¿Es finito \"123\"? "+ "<strong>" + Number.isFinite("123") +"</strong><br>";
    res = res + "¿Es finito \"Hello\"? "+ "<strong>" + Number.isFinite("Hello") +"</strong><br>";
    res = res + "¿Es finito \"2005/12/12\"? "+ "<strong>" + Number.isFinite("2005/12/12") +"</strong><br>";
    //res = res + "¿Es finito Infinity? "+ "<strong>" +Number.isFinite(Infinity) +"</strong><br>";
    //res = res + "¿Es finito -Infinity? "+ "<strong>" +Number.isFinite(-Infinity)+"</strong><br>";
    res = res + "¿Es finito 0/0? "+ "<strong>" + Number.isFinite(0 / 0) +"</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"\n" + res;
	
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>" + "<p>El método Number.isFinite () determina si un valor es un número finito.</p>" + "<p>Este método devuelve verdadero si el valor introducido es de tipo número y equivale a un número finito. De lo contrario, devuelve falso.</p>"+"<p>Number.isFinite () es diferente de la función global isFinite(). La función global isFinite() convierte el valor probado en un número, a continuación, pone a prueba.</p>"+"<p>Number.isFinite() no convierte los valores a un número, y no devolverá \"verdadero\" para cualquier valor que no sea de tipo Number.</p>";
}


//método isInteger()
function esEntero() {
    var res = "";
    res = res + "¿Es entero 123? "+ "<strong>" + Number.isInteger(123) +"</strong><br>";
    res = res + "¿Es entero -1.23? "+ "<strong>" + Number.isInteger(-1.23) +"</strong><br>";
    res = res + "¿Es entero 5-2? "+ "<strong>" + Number.isInteger(5-2)+"</strong><br>" ;
    res = res + "¿Es entero 0? "+ "<strong>" + Number.isInteger(0)+"</strong><br>";
	res = res + "¿Es entero 1.23? "+ "<strong>" + Number.isInteger(1.23) +"</strong><br>";
    res = res + "¿Es entero \"123\"? "+ "<strong>" + Number.isInteger("123") +"</strong><br>";
    res = res + "¿Es entero \"Hello\"? "+ "<strong>" + Number.isInteger("Hello") +"</strong><br>";
    res = res + "¿Es entero \"2005/12/12\"? "+ "<strong>" + Number.isInteger("2005/12/12") +"</strong><br>";
    //res = res + "¿Es entero Infinity? "+ "<strong>" +Number.isInteger(Infinity) +"</strong><br>";
    //res = res + "¿Es entero -Infinity? "+ "<strong>" +Number.isInteger(-Infinity)+"</strong><br>";
    res = res + "¿Es entero 0/0? "+ "<strong>" + Number.isInteger(0/0) + "</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"\n" + res;
	
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>" + "<p>El método Number.isInteger () determina si un valor un número entero.</p>" + "<p>Este método devuelve verdadero si el valor introducido es tipo número, y además un número entero (un número sin decimales). De lo contrario, devuelve falso.</p>";
	
}



//método isNaN()

function esnotanum() {
    var res = "";
    res = res + "¿Es NaN 123? "+ "<strong>" + isNaN(123) +"</strong><br>";
    res = res + "¿Es NaN -1.23? "+ "<strong>" + isNaN(-1.23) +"</strong><br>";
    res = res + "¿Es NaN 5-2? "+ "<strong>" + isNaN(5-2)+"</strong><br>" ;
    res = res + "¿Es NaN 0? "+ "<strong>" + isNaN(0)+"</strong><br>";
	res = res + "¿Es NaN 1.23? "+ "<strong>" + isNaN(1.23) +"</strong><br>";
    res = res + "¿Es NaN \"123\"? "+ "<strong>" + isNaN("123") +"</strong><br>";
    res = res + "¿Es NaN \"Hello\"? "+ "<strong>" + isNaN("Hello") +"</strong><br>";
    res = res + "¿Es NaN \"2005/12/12\"? "+ "<strong>" + isNaN("2005/12/12") +"</strong><br>";
    //res = res + "¿Es NaN Infinity? "+ "<strong>" +Number.isNaN(Infinity) +"</strong><br>";
    //res = res + "¿Es NaN -Infinity? "+ "<strong>" +Number.isNaN(-Infinity)+"</strong><br>";
    res = res + "¿Es NaN 0/0? "+ "<strong>" + isNaN(NaN) +"</strong><br>";

    document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"\n" + res;
	
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>" + "<p>El método Number.isNaN () determina si un valor es NaN (Not-A-Number).</p>" + "<p>Este método devuelve verdadero si el valor es de tipo número, y equivale a NaN. De lo contrario, devuelve falso.</p>" + "<p>Number.isNaN () es diferente de la función global isNaN(). La función global isNaN () convierte el valor probado en un número, y a continuación, pone a prueba.</p>" + "<p>Number.isNaN () no convierte los valores a un número, y no volverá verdadero para cualquier valor que no sea del tipo Number.</p>"+"<p>Consejo: En JavaScript, el valor NaN es considerado como un tipo de número.</p>";
	
}


//metodo toExponential

function aexponencial() {
	var res = "";
	var num1=456789; var num2=4.56789; var num3=0.006455;var num4=0.124700085;
	res = res + "¿El número " + num1 + " en exponencial es: "+ "<strong>" + num1.toExponential() + "</strong><br>";
	res = res + "¿El número " + num2 + " en exponencial es: "+ "<strong>" + num2.toExponential() + "</strong><br>";
	res = res + "¿El número " + num3 + " en exponencial es: "+ "<strong>" + num3.toExponential() + "</strong><br>";
	res = res + "¿El número " + num4 + " en exponencial es: "+ "<strong>" + num4.toExponential() + "</strong><br>";
	

	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>" + "<p>El método toExponential () convierte un número en una notación exponencial.</p>";
	
	}
	
	
//metodo toFixed

function afijo() {
	var res = "";
	var num1=456789; var num2=4.56789; var num3=0.006455;var num4=0.124700085;
	res = res + "¿El número " + num1 + " en con dos decimales: "+ "<strong>" + num1.toFixed(2) + "</strong><br>";
	res = res + "¿El número " + num2 + " en con dos decimales: "+ "<strong>" + num2.toFixed(2) + "</strong><br>";
	res = res + "¿El número " + num3 + " en con dos decimales: "+ "<strong>" + num3.toFixed(2) + "</strong><br>";
	res = res + "¿El número " + num4 + " en con dos decimales: "+ "<strong>" + num4.toFixed(2) + "</strong><br>";
	var num5=1.23456789;
	res = res + "¿El número " + num5 + " en con dos decimales: "+ "<strong>" + num5.toFixed(1) + "</strong><br>";
	res = res + "¿El número " + num5 + " en con dos decimales: "+ "<strong>" + num5.toFixed(2) + "</strong><br>";
	res = res + "¿El número " + num5 + " en con dos decimales: "+ "<strong>" + num5.toFixed(3) + "</strong><br>";
	res = res + "¿El número " + num5 + " en con dos decimales: "+ "<strong>" + num5.toFixed(4) + "</strong><br>";
	res = res + "¿El número " + num5 + " en con dos decimales: "+ "<strong>" + num5.toFixed(5) + "</strong><br>";
	
	res = res + "¿El número " + num5 + " en con dos decimales: "+ "<strong>" + num5.toFixed(6) + "</strong><br>";
	res = res + "¿El número " + num5 + " en con dos decimales: "+ "<strong>" + num5.toFixed(7) + "</strong><br>";
	

	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>" + "<p>El método toFixed () convierte un número en una cadena, manteniendo un número especificado de decimales.</p>" + "<p><strong>Nota:</strong> si el número deseado de decimales son más altos que el número real, se añaden los nulos para crear la longitud deseada decimal.</p>";
	
	}
	
	

//metodo toPrecision

function precision() {
	var res="";
	var num=3.141592;
	res = res + "El número pi tal y como lo has introducido: " + "<strong>" + num.toPrecision() + "</strong><br>";
	res = res + "El número pi con una cifra: " + "<strong>" + num.toPrecision(1) + "</strong><br>";
	res = res + "El número pi con dos cifras: " + "<strong>" + num.toPrecision(2) + "</strong><br>";
	res = res + "El número pi con tres cifras: " + "<strong>" + num.toPrecision(3) + "</strong><br>";
	res = res + "El número pi con cuatro cifras: " + "<strong>" + num.toPrecision(4) + "</strong><br>";
	res = res + "El número pi con cinco cifras: " + "<strong>" + num.toPrecision(5) + "</strong><br>";
	res = res + "El número pi con seis cifras: " + "<strong>" + num.toPrecision(6) + "</strong><br>";
	res = res + "El número pi con siete cifras: " + "<strong>" + num.toPrecision(7) + "</strong><br>";
	
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>"+ "<p>El método toPrecision() formatea un número a una longitud especificada.</p>" + "<p>El punto decimal y los ceros son añadidos (si es necesario) para crear la longitud especificada.</p>";
	
	}
	
	

//metodo toPrecision

function precision() {
	var res="";
	var num=3.141592;
	res = res + "El número pi tal y como lo has introducido: " + "<strong>" + num.toPrecision() + "</strong><br>";
	res = res + "El número pi con una cifra: " + "<strong>" + num.toPrecision(1) + "</strong><br>";
	res = res + "El número pi con dos cifras: " + "<strong>" + num.toPrecision(2) + "</strong><br>";
	res = res + "El número pi con tres cifras: " + "<strong>" + num.toPrecision(3) + "</strong><br>";
	res = res + "El número pi con cuatro cifras: " + "<strong>" + num.toPrecision(4) + "</strong><br>";
	res = res + "El número pi con cinco cifras: " + "<strong>" + num.toPrecision(5) + "</strong><br>";
	res = res + "El número pi con seis cifras: " + "<strong>" + num.toPrecision(6) + "</strong><br>";
	res = res + "El número pi con siete cifras: " + "<strong>" + num.toPrecision(7) + "</strong><br>";
	
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"\n" + res;
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>"+ "<p>El método toPrecision() formatea un número a una longitud especificada.</p>" + "<p>El punto decimal y los ceros son añadidos (si es necesario) para crear la longitud especificada.</p>";
	
	}
	
	
//metodo toString(radix)

function astring() {
	var num=15;
	var cadena = num.toString();
	var decimal = num.toString(10);
	var binario = num.toString(2);
	var octal = num.toString(8);
	var hexadecimal = num.toString(16);
	
	
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"<br>" + "Cadena: " +cadena + " typeof = "+ typeof(cadena) + "<br>" + "Decimal: " + decimal + "<br>"+
	"Binario: " + binario + "<br>" + "Octal: " + octal + "<br>" + "Hexadecimal: " + hexadecimal;
	
	
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>" + "<p>El método toString() convierte un número en una cadena.</p>" + "<p><strong>Opcional:</strong> Se puede expresar en diferentes bases indicando el número de la base entre los parentesis. Debe ser un entero entre 2 y 36.</p><ul><li>2 - Base Binaria</li><li>8 - Base Octal</li><li>10 - Base Decimal</li><li>16 - Base Hexadecimal</li></ul>";
	
	}
	
	
	
	
	
	
//metodo valueOf()

function valorde() {
	var mat=[10,20,30];
	var objeto= {num1:10,num2:20,num3:30};
	var cad = "Hola";
	var num= 10;
	var bol = (10<20);

	
	
	document.getElementById("demo2").innerHTML = "<h3>Resultado del uso</h3>" +"<br>" + "El valor de la variable matriz es: " +mat.valueOf() + " y es de tipo "+typeof(mat) + "<br>" + "El valor de la variable objeto es: " + objeto.valueOf() + " y es de tipo "+typeof(objeto) + "<br>"+
	"El valor de la variable cadena es: " + cad.valueOf() +" y es de tipo "+typeof(cad) + "<br>" + "El valor de la variable número es: " + num.valueOf() +" y es de tipo "+typeof(num) + "<br>" + "El valor de la variable booleano es: " + bol.valueOf() +" y es de tipo "+typeof(bol);
	
	
	document.getElementById("demo1").innerHTML ="<h3>Definición y uso</h3>" + "<p>El método valueOf() devuelve el valor de un número, cadena, objeto etc.</p>";
	
	}
