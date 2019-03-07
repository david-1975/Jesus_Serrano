// JavaScript Document

// Método length()
function longitud () {
	var frase = prompt ("Introduce una frase cn al menos 3 palabras");
	var obtener = frase;
	var largo = obtener.length;
	alert ("la frase tiene: " + largo + " caracteres");
}

// Método charAt()
function posicion () {
	var palabra = prompt ("Introduce una palabra");
	var obtener = palabra.length;
	var total = obtener -1;
	var pos = prompt ("Por favor, introduce una posición del 0 al " + total);
	var str = palabra.charAt(pos);
	alert ("La posición del carácter de la palabra es: " + str);
}

// Método charCodeAt()
function caractercode () {
	var letra = prompt ("Por favor introduce una letra");
	var caracter = letra.charCodeAt(0);
	alert ("El código del caracter introducido es: " + caracter);	
}

// Método fromCharCode()
function codecaracter () {
	var code = prompt ("Por favor introduce un valor entre 32 y 126");
	var entero = parseInt(code);
	if ((entero > 126) || (entero < 32)){
		alert ("Número inválido");
		}
		else {
		var numero = String.fromCharCode(entero);
		}
	alert ("El carácter que corresponde a " + entero + " es: " + numero);
}

// Método toUpperCase ()
function mayusculas () {
	var texto = prompt ("Escribe un texto en minúsculas");
	var mayusculas = texto.toUpperCase();
	alert (mayusculas);
}

// Método toLowerCase ()
function minusculas () {
	var texto = prompt ("Escribe un texto en mayúsculas");
	var minusculas = texto.toLowerCase();
	alert (minusculas);
}

// Método concat ()
function concatenar () {
	var nombre = prompt ("Introduce tu nombre");
	var apellido = prompt ("Ahora introduce tu apellido");
	var completo = nombre.concat(" ", apellido);
	alert ("Su nombre completo es: " + completo);
}

// Método endsWitch ()
function  terminar () {
	var frase = prompt ("Introduce una frase que termine con un punto");
	var final = frase.endsWith(".");
	alert ("¿La frase termina con un punto? " + final );
}

// Método includes ()
/*function includes () {
	var frase = prompt ("Introduce una frase que contenga la palabra manzana");
	var final = frase.includes("manzana");
	alert ("¿La frase contiene la palabra \"manzana\"? " + final);
}*/

// Método includes ()
function includes () {
	var frase = prompt ("Introduce una frase");
	var palabra = prompt ("Ahora, introduce una palabra que hayas escrito en la frase");
	var incluir = frase.includes(palabra);
	alert ("¿La frase introducida incluye la palabra " + "\"" + palabra + "\"" + "? " + incluir + "\n" + "Compruébalo " + "\n" + "\"" + frase + "\"");
}

// Método indexOf()
function indiceDe () {
	var frase = prompt ("Introduce una frase");
	var palabra = prompt ("Introduce ahora, una palabra que hayas escrito en la frase");
	var obtener = palabra.length;
	var indice = frase.indexOf(palabra);
	var total = obtener + indice -1;
	alert ("La palabra " + palabra + " empieza en la posición " + indice + " y acaba en la posición " + total + "\n" + "Compruébalo " + "\n" + frase);
}

// LastindexOf ()
function ultimoIndiceDe () {
	var frase = prompt ("Introduce una frase");
	var palabra = prompt ("Introduce ahora, una palabra que hayas escrito en la frase");
	var obtener = palabra.length;
	var indice = frase.lastIndexOf(palabra);
	var total = (obtener -1) + indice;
	alert ("La vez que aparece la palabra " + "\"" + palabra + "\"" + " empieza en la posición " + indice + " y acaba en la posición " + total + "\n" + "Compruébalo " + "\n" + frase);
}

// localeCompare ()
function comparar () {
	var palabra1 = prompt ("Introduce una palabra");
	var palabra2 = prompt ("Introduce ahora otra palabra");
	var local = palabra1.localeCompare(palabra2);
	
	if (local === 1) { alert ("La palabra " + "\"" + palabra1 + "\"" + " está situada después de la palabra " + "\"" + palabra2 + "\"" + "\n" + "Siguiendo el orden lexicográfico (en orden alfabético) " + "\n" + "Compruébalo " + "\n\"" + "123456789ABCDEFGHIJKLMNÑOPKRSTUVWXYZ" + "\"" + "\n"); }
	
	else if (local === -1) { alert ("La palabra " + "\"" + palabra1 + "\"" + " está situada antes de la palabra " + "\"" + palabra2 + "\"" + "\n" + "Siguiendo el orden lexicográfico (en orden alfabético) " + "\n" + "Compruébalo " + "\n\"" + "123456789ABCDEFGHIJKLMNÑOPKRSTUVWXYZ" + "\"" + "\n"); }
	
	else { alert ("La palabra " + "\"" + palabra1 + "\"" + " es igual as la palabra " + "\"" + palabra2 + "\"" + "\n" + "Siguiendo el orden lexicográfico (en orden alfabético) " + "\n" + "Compruébalo " + "\n\"" + "123456789ABCDEFGHIJKLMNÑOPKRSTUVWXYZ" + "\"" + "\n"); }
}

// Match ()
function comprobar () {
	var frase = prompt("Introduce tu número de teléfono");
	var indice = frase.match(/[0-9]/g); //[A-Za-z0-9]
	alert ("El número de teléfono" + "\"" + frase + "\"\n" + "Contiene estos números: " + "\"" + indice + "\"" + "\n\"" + frase + "\"");
}

// Repeat ()
function repetir () {
	var palabra = prompt ("Introduce tu país");
	var separador = prompt ("Ahora introduce un separador");
	var veces = prompt ("Ahora introduce un número de veces");
	
	var palabraSeparador = palabra + separador;
	
	var indice = palabraSeparador.repeat(veces);
	alert ("La palabra " + "\"" + palabra + "\"" + " va a ser repetida " + "\"" + veces + "\"" + "\n" + "Compruébalo " + "\n\"" + indice + "\"");	
}

// Replace ()
function reemplazar () {
	var frase = "Mi color favorito es Rojo";
	var color1 = prompt ("Introduce un color cualquiera");
	var color2 = prompt ("Ahora, introduce tu color favorito");
	var indice = frase.replace(color1, color2)
	alert (frase + "no es " + "\"" + color1 + "\"\n" + frase + "es " + "\"" + color2 + "\"");
}

// Método search ()
function buscar() {
	var frase = prompt ("Introduce tu correo electrónico");
    var busqueda = frase.search(/@/);
	var punto = frase.search(/\./);
//  var arrobapunto = frase.search(/[?*@??*\.?*]/);
	
    if (busqueda === -1) {
	alert ("No has escrito el caracter @");
	} else if (punto === -1) { 
	alert ("No has escrito el caracter .");
	} else { 
	alert ("El caracter \"@\" ha sido encontrado en la posición: " + 
	busqueda + "\n" + "El caracter \".\" ha sido encontrado en la posición: "     + punto + "\n" + "Compruébalo " + "\n\"" + frase);
		   }
	}

// Método slice ()
function extraer() {
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

// Método split ()
function convertir() {
var frase = prompt ("Introduce 5 colores separados por un espacio, punto o guión");
var conversion = frase.split(" ") || frase.split(", ") || frase.split(".")  || frase.split("-");
alert ("la matríz que se ha creado es la siguiente" + "\n" + "var array = {" + conversion + "};");
}

// Método startWith ()
function comienzaCon () {
	var frase = prompt ("Introduce una dirección web");
	var comienzo = frase.startsWith("www") || frase.startsWith("http");
	
	if (comienzo === false){
		alert ("La dirección especificada debe comenzar con " + "\"" + "http" + "\"" + " o con " + "\"" + "www" + "\"" + "\n" + "Compruébalo" + "\n" + frase);
	}
	else { 
	alert ("La dirección especificada está correctamente escrita: " + "\n" + "Compruébalo" + "\n" + frase);
	}
}

// Método substr ()
function subCad () {
	var frase1 = prompt ("Introduce tu nombre");
	var frase2 = prompt ("Introduce tu primer apellido");
	var frase3 = prompt ("introduce tu segundo apellido");
	var recortar1 = frase1.substr(0, 3);
	var recortar2 = frase2.substr(0, 3);
	var recortar3 = frase3.substr(0, 3);
	var subcad1 = recortar1.toUpperCase();
	var subcad2 = recortar2.toUpperCase();
	var subcad3 = recortar3.toUpperCase();
	alert ("Tu nombre abreviado es: " + "\n" + subcad1 + " " + subcad2 + " " + subcad3);
}

// Método substring ()
function subCadena () {
	var frase = prompt ("Introduce tu nombre y apellidos");
	var indice1 = frase.indexOf(" ");
	var recortar1 = frase.substring(0, indice1);
	
	var indice2 = frase.indexOf(" ", indice1+1);
	var recortar2 = frase.substring(indice1+1, indice2);
	
	
	var indice3 = frase.lastIndexOf(" ");
	var recortar3 = frase.substring(indice2+1);
	//alert ("\"" + recortar1 + "\"" + "\n" + "\"" + recortar2 + "\"" + "\n" + "\"" +recortar3 + "\"");
	
	var primeraLetra1 = recortar1.substr(0, 1);
	var primeraMayusculas1 = primeraLetra1.toUpperCase();
	var restoLetras1 = recortar1.substr(1);
	var restoMinusculas1 = restoLetras1.toLowerCase();
	var union1 = primeraMayusculas1.concat(restoMinusculas1);
	
	var primeraLetra2 = recortar2.substr(0, 1);
	var primeraMayusculas2 = primeraLetra2.toUpperCase();
	var restoLetras2 = recortar2.substr(1);
	var restoMinusculas2 = restoLetras2.toLowerCase();
	var union2 = primeraMayusculas2.concat(restoMinusculas2);
	
	var primeraLetra3 = recortar3.substr(0, 1);
	var primeraMayusculas3 = primeraLetra3.toUpperCase();
	var restoLetras3 = recortar3.substr(1);
	var restoMinusculas3 = restoLetras3.toLowerCase();
	var union3 = primeraMayusculas3.concat(restoMinusculas3);
	
	alert ("\"" + union1 + "\"" + "\n" + "\"" + union2 + "\"" + "\n" + "\"" + union3 + "\"");
	
}

// Método toString ()
function aCadena () {
	var paises = ["España", "Alemania", "Francia", "Italia"];
	var cadena = paises.toString();
	
	alert ("La variable países es de tipo: " + typeof(paises) + "\n" + "var paises = " + "[\"" + paises[0] + "\"," + "\"" + paises[1] + "\"," + "\"" +	paises[2] + "\"," + "\"" + paises[3] + "\"];" + "\n" + 
	
	"La variable cadena ahora es de tipo: " + typeof(cadena) + "\n" + "var paises = " + "\"" + paises + "\";");
}

// Método trim ()
function sinEspacios() {
var frase = prompt ("Introduce tu correo electrónico con espacios por delante y por detrás");
var quitarEspacios = frase.trim();

alert ("La variable frase antes: " + "\"" + frase + "\"\n" +
	   "La variable frase después: " + "\"" + quitarEspacios + "\"");
}