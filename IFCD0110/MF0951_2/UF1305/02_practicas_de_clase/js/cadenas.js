// JavaScript Document

//Método length
function longitud (){
	var frase = prompt ("Introduzca una frase");
	var obtener = frase;
	var largo = obtener.length;
	alert ("La frase tiene: " + largo + " caracteres");
}

//Método charAt
function posicion (){
	var frase = prompt("Mete una palabra");
	var obtener = frase.length;
	var obtenercorrecto = obtener - 1;
	var pos = prompt("Introduce una posición de 0 a " + obtenercorrecto);
	var solucion = frase.charAt(pos);
	alert ("En la posición introducida está el caracter " + solucion);
}

//Método charCodeAt   
function unicode (){
	var frase = prompt("Mete una palabra");
	var obtener = frase.length;
	var obtenercorrecto = obtener - 1;
	var pos = prompt("Introduce una posición de 0 a " + obtenercorrecto);
	var solucion = frase.charCodeAt(pos);
	var caracter = frase.charAt(pos);
	alert("En la posición introducida está el caracter '" + caracter + "' y en Unicode tiene el valor " + solucion);
}

//Método fromCharCode   
function unicodeTransformer(){
	var numero = prompt("Introduce un número(si es del 32 al 126 nos dará un valor ASCII)");	
	var entero = parseInt(numero);//CONVIERTE EN NUMERO ENTERO LA CADENA RECIBIDA CON EL PROMPT PORQUE ES STRING
	var obtener = String.fromCharCode(entero);
	//var tipo = typeof(entero);
	// alert (tipo) nos diría si la variable es tipo string o número entero
	alert("El número que has introducido, en Unicode, tiene el valor " +  obtener );
}

//Método toUpperCase
function mayusculas(){
	var palabra = prompt("Introduce en minúsculas");
	var transformada = palabra.toUpperCase();
	alert("Mira! " + transformada + " Tachán!!!! te lo he pasado a mayúsculas!!!");
}

//Método toLowerCase
function minusculas(){
	var palabra = prompt("Introduce en mayúsculas");
	var transformada = palabra.toLowerCase();
	alert("Mira! " + transformada + " Tachán!!!! te lo he pasado a minúsculas!!!, lo sé, impresiona menos que la anterior");
}

//Método concat				
function concatenar() {
	var frase1 = prompt("Introduce una palabra");
	var frase2 = prompt("Introduce otra palabra");
	var transformada = frase1.concat(frase2);
	alert("Mira!!!: " + transformada + ". Te lo he puesto 'tojunto'");	
}

//Método endsWith
function terminacion() {
	var frase = prompt("Introduce una frase de más de una palabra");
	var peticion = prompt("Has introducido:" + frase + ". Esa frase, ¿Con qué palabra acaba?");
	var resultado = frase.endsWith(peticion);
	if (resultado == true){
		var respuesta = "Muy bien, la frase acaba en " + peticion;
	}else{
		var respuesta = "Fíjate bien!!! que lo has puesto mal";		
	}
	alert(respuesta);	
}

//Método includes
function incluye(){
	var frase = prompt("Introduce una frase de más de una palabra");
	var peticion = prompt("Has introducido:" + frase + ". Introduce una palabra de tu frase");
	var resultado = frase.includes(peticion);
	if (resultado == true){
		var respuesta = "Muy bien, la frase tiene la palabra " + peticion;
	}else{
		var respuesta = "Fíjate bien!!! que lo has puesto mal";		
	}
	alert(respuesta);	
}

//Método indexOf 
function aparicion(){
	var frase = prompt("Introduce una frase de más de una palabra");
	var peticion = prompt("Has introducido:" + frase + ". ¿La posición de qué palabra quieres conocer?");
	var resultado = frase.indexOf(peticion);
	alert("La palabra " + peticion + " está en la posición " + resultado);
}

//Método lastIndexOf      ***********NO TIRA PELELE*************
function ultimapalabra(){
	var frase = prompt("Introduce una frase de más de una palabra, incluso alguna repetida");
	var peticion = prompt("Has introducido:" + frase + ". ¿La última posición de qué palabra quieres conocer?");
	var peticionnumero = parseInt(peticion);
	var resultado = frase.lastIndexOfndexOf(peticionnumero);
	alert("La palabra " + peticion + " aparece por última vez en la posición " + resultado);
}

//Método localeCompare		 ***********NO TIRA PELELE y ademas bloquea las demas*************
//function comparacion(){
//	var frase1 = prompt("Introduce una palabra");
//	var frase2 = prompt("Introduce otra palabra");
//	var resultado = frase1.localeCompare(frase2);	
//	alert(resultado);	
//}

//Método match                 ***********TREVISAR EXPRESIONES REGULARES*************
function coincidencia(){
	var frase = prompt("Escribe lo que quieras");
	var peticion = prompt("Introduce letras o cadenas de letras a buscar");
	
	var resultado = frase.match(peticion);
	alert("El texto " + frase + " tiene estas coincidencias " + resultado);
	
}

//Método repeat
function repetir(){
	var frase = prompt("Escribe lo que quieras");
	var peticion = prompt("Introduce el número de veces a repetirlo");
	var resultado = frase.repeat(peticion);
	alert(resultado);	
}

//Método replace				
function reemplazar(){
	var frase = "Soy de ciudad";
	var peticion = prompt("De dónde eres");	
	var final = frase.replace("ciudad",peticion);
	alert(final);
}

//Método search
function buscar(){
	var frase = prompt("Escribe lo que quieras");
	var busqueda = prompt("De " + frase + " introduce que palabra buscar");
	var resultado = frase.search(busqueda);
	alert("La palabra " + busqueda + " está en la posición " +resultado);
}

//Método slice     
function extraer(){
	var frase = prompt ("Introduce tu correo electrónico");
    var busqueda = frase.search(/@/);
	var punto = frase.search(/\./); 
	var usuario = frase.slice(0,busqueda);
	var dominio = frase.slice(busqueda +1, punto);
	var extension = frase.slice(punto +1);
	alert ("Tu correo es : " + frase + "\n" + 
		   "Tu usuario es: " + usuario + "\n" +
		   "El dominio es: " + dominio + "\n" + 
		   "La extensión es: " + extension);
	}

//Método split
function matriz(){
	var frase = prompt("Introduce varias palabras");
	var resultado = frase.split(" ");
	alert("La matriz es: " + resultado);
}

//Método startsWith
function comienzapor(){
	
	
}

//Método substr
function substraer(){
	
	
}

//Método substring



//Método toString



//Método trim