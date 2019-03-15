// JavaScript Document

//Método length
function longitud (){
	alert("length: Devuelve la longitud de una cadena.");
	var frase = prompt ("Introduzca una frase");	
	if (frase==""){
		longitud();
	}else{
		var obtener = frase;
	var largo = obtener.length;
	alert ("La frase tiene: " + largo + " caracteres");	
	}	
}

//Método charAt
function posicion (){
	alert("charAt(): Devuelve el carácter en el índice especificado (posición).");
	var frase = prompt("Mete una palabra");
	var obtener = frase.length;
	var obtenercorrecto = obtener - 1;
	var pos = prompt("Introduce una posición de 0 a " + obtenercorrecto);
	var solucion = frase.charAt(pos);
	alert ("En la posición introducida está el caracter " + solucion);
}

//Método charCodeAt   
function unicode (){
	alert("charCodeAt(): Devuelve el índice del caracter Unicode especificado.");
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
	alert("fromCharCode(): Convierte los valores Unicode en caracteres.");
	var numero = prompt("Introduce un número(si es del 32 al 126 nos dará un valor ASCII)");	
	var entero = parseInt(numero);//CONVIERTE EN NUMERO ENTERO LA CADENA RECIBIDA CON EL PROMPT PORQUE ES STRING
	var obtener = String.fromCharCode(entero);
	//var tipo = typeof(entero);
	// alert (tipo) nos diría si la variable es tipo string o número entero
	alert("El número que has introducido, en Unicode, tiene el valor " +  obtener );
}

//Método toUpperCase
function mayusculas(){
	alert("toUpperCase(): Convierte una cadena en mayúsculas.");
	var palabra = prompt("Introduce en minúsculas");
	var transformada = palabra.toUpperCase();
	alert("Mira! " + transformada + " Tachán!!!! te lo he pasado a mayúsculas!!!");
}

//Método toLowerCase
function minusculas(){
	alert("toLowerCase(): Convierte una cadena a minúsculas.");
	var palabra = prompt("Introduce en mayúsculas");
	var transformada = palabra.toLowerCase();
	alert("Mira! " + transformada + " Tachán!!!! te lo he pasado a minúsculas!!!, lo sé, impresiona menos que la anterior");
}

//Método concat				
function concatenar() {
	alert("concat(): Convierte dos o más cadenas en una nueva cadena concatenada.");
	var frase1 = prompt("Introduce una palabra");
	var frase2 = prompt("Introduce otra palabra");
	var transformada = frase1.concat(frase2);
	alert("Mira!!!: " + transformada + ". Te lo he puesto 'tojunto'");	
}

//Método endsWith
function terminacion() {
	alert("endsWith(): Comprueba si una cadena termina con una cadena/caracteres especificados.");
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
	alert("includes(): Comprueba si una cadena contiene la cadena/caracteres especificados.");
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
	alert("indexOf(): Devuelve la posición de la primera aparición encontrada de un valor especificado en una cadena.");
	var frase = prompt("Introduce una frase de más de una palabra");
	var peticion = prompt("Has introducido:" + frase + ". ¿La posición de qué palabra quieres conocer?");
	var resultado = frase.indexOf(peticion);
	alert("La palabra " + peticion + " está en la posición " + resultado);
}

//Método lastIndexOf      
function ultimapalabra(){
	alert("lastIndexOf(): Devuelve la posición de la última aparición encontrada de un valor especificado en una cadena.");
	var frase = prompt("Introduce una frase de más de una palabra, incluso alguna repetida");
	var peticion = prompt("Has introducido:" + frase + ". ¿La última posición de qué palabra quieres conocer?");	
	var resultado = frase.lastIndexOf(peticion);
	alert("La palabra " + peticion + " aparece por última vez en la posición " + resultado);
}

//Método localeCompare		 
function comparacion(){
	alert("localeCompare(): Compara dos cadenas en la localización actual.");
	var frase1 = prompt("Introduce una palabra");
	var frase2 = prompt("Introduce otra palabra");
	var compara = frase1.localeCompare(frase2);		
	if ( compara==-1){
		alert("\"" + frase1 + "\"" + " está antes de " + "\"" + frase2 + "\"" + " alfanuméricamente hablando.");
			}
	else if (compara ==0){
		alert("\"" + frase1 + "\"" + " está a la vez de "  + "\"" + frase2 + "\"" + " alfanuméricamente hablando.");
	}
	else{
		alert("\"" + frase1 + "\"" + " está después de "  + "\"" + frase2 + "\"" +" alfanuméricamente hablando.");
	}
}

//Método match            *********** FUNCIONA, PERO REVISAR EXPRESIONES REGULARES*************
function coincidencia(){
	alert("match(): Busca una cadena que coincida con una expresión regular y devuelve las coincidencias separadas por comas");
	var frase = prompt("Escribe lo que quieras");
	var peticion = prompt("Introduce letras o cadenas de letras a buscar");	
	var resultado = frase.match(peticion);
	alert("El texto " + frase + " tiene estas coincidencias " + resultado);	
}

//Método repeat
function repetir(){
	alert("repeat(): Devuelve una cadena nueva con un número especificado de copias de una cadena existente");
	var frase = prompt("Escribe lo que quieras");
	var peticion = prompt("Introduce el número de veces a repetirlo");
	var resultado = frase.repeat(peticion);
	alert(resultado);	
}

//Método replace				
function reemplazar(){
	alert("replace(): Busca una cadena con una expresión regular y devuelve una nueva cadena sustituyendo los valores especificados.");
	var frase = "Soy de ciudad";
	var peticion = prompt("De dónde eres");	
	var final = frase.replace("ciudad",peticion);
	alert(final);
}

//Método search
function buscar(){
	alert("search(): Busca una cadena para un valor especificado o una expresión regular y devuelve la posición de la coincidencia");
	var frase = prompt("Escribe lo que quieras");
	var busqueda = prompt("De " + frase + " introduce que palabra buscar");
	var resultado = frase.search(busqueda);
	alert("La palabra " + busqueda + " está en la posición " +resultado);
}

//Método slice     
function extraer(){
	alert("slice(): Extrae parte de una cadena y devuelve una nueva cadena con la parte extraída.");
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
	alert("split(): Divide una cadena en una matriz de subcadenas");
	var frase = prompt("Introduce varias palabras");
	var resultado = frase.split(" ");
	alert("La matriz es: " + resultado);
}

//Método startsWith
function comienzapor(){
	alert("startsWith(): Comprueba si una cadena empieza con una cadena/caracteres especificados.");
	var tf = prompt("Introduce un teléfono")
	var principio = tf.startsWith(9);
	if (principio==true){
		var resultado = "El número de teléfono introducido es fijo";
	}else {
		var resultado = "El número de teléfono es móvil o inexistente";
	}
	alert( resultado );
}

//Método substr
function substraer(){
	alert("substr(): Extrae partes de una cadena, comenzando en una posición especificada y la longitud de caracteres a mostrar.");
	var nombre = prompt("Introduce tu nombre");
	var apellido1 = prompt("Introduce su primer apellido");
	var apellido2 = prompt("Introduce su segundo apellido");
	var nombresub = nombre.substr(0,1);
	var ape1sub = apellido1.substr(0,1);
	var ape2sub = apellido2.substr(0,1);
	alert("Sus iniciales son " + nombresub.toUpperCase() + ape1sub.toUpperCase() + ape2sub.toUpperCase());	
}

//Método substring
function sacar(){
	alert("substring(): Extrae los caracteres de una cadena, entre dos índices especificados (posición).");
	var frase = prompt("Introduce una frase");
	var extracto = frase.substring(3,9);
	alert ("Un extracto de tu frase entre, los caracteres en posicion 3 y 9, es " + "\"" + extracto + "\"");
}

//Método toString
function acadena(){
	alert("toString(): Convierte un objeto en una cadena de caracteres.");
	var frase = ["calle", "avenida", "plaza"];
	alert("Tenemos la variable frase = ['calle', 'avenida', 'plaza']");
	var resultado = frase.toString();
	alert("La variable frase era de tipo: " + typeof(frase) + ". Y la hemos transformado a: " + typeof(resultado));
}

//Método trim
function espacios(){
	alert("trim(): Elimina el espacio en blanco de ambos extremos de una cadena");
	var frase = "     hola, buenos dias     ";
	var resultado = frase.trim();
	alert("Teniamos la variable= '        hola, buenos dias   ', y la hemos transformado a " + resultado);
}


