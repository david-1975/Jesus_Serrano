// JavaScript Document
function longitud (){
	var frase = prompt("Por favor, introduce tu nombre");
	var largo = frase.length;
	alert ("Tu nombre tiene: " + largo + " caracteres"); 
	}

function posicion(){
	var palabra = prompt("Introduce una palabra");
    var largo = palabra.length;
	var numero= prompt("introduce un numero de 1 al " + largo);
	var numeroPosicion= palabra.charAt(numero-1);
	alert("El caracter, que se encuentra en la posición: " + numero + " es: " + numeroPosicion);
}	
    


function caracterInd (){
	var letra= prompt("introducen un caracter");
	var numero= letra.charCodeAt(0);
	alert("El numero correspondiente es : " + numero);
	
}

function codeCaracter(){
	var numero= prompt("Introduce un mumero del 32 al 126");
	var entero= parseInt(numero);
	var code=String.fromCharCode(entero);	
	//var tipo= typeof(entero);	para comprobar que introduce un numero 
	alert ("la letra con el numero " + entero + "es: " + code); 


	
}

function mayusculas(){
	var texto=prompt("Introduce un texto");
	var textoMay=texto.toUpperCase();
	alert("Este es tu texto en mayusculas" + textoMay);
	
	
}

function minusculas(){
	var texto=prompt("Introduce un texto");
	var textoMin=texto.toLowerCase();
	alert("Este es tu texto en mayusculas " + textoMin);
	
	
}

function concatenacion(){
	var palabra1 = prompt ("introduce tu nombre");
	var palabra2 = prompt ("introduce el apellido");
	var union = palabra1 .concat(palabra2);
	alert("tu eres " + union);
}

function termina(){
	var frase= prompt("introduce una frase que termine con un punto.");
	var final= frase.endsWith("·");
	alert("¿La frase terminada con un punto? " + final);
}

function especifico(){
	var frase= prompt("introduce una frase");
	var clave= frase.includes("casa");
	alert("La palabra clave es: " + clave);
}

function indice (){
	var frase= prompt("introduce un texto");
	var clave= frase.indexOf("a")
	alert("la primera posicion de la letra en la frase es: " + clave);
	
}