// JavaScript Document

// Metodo length()
function longitud () {
	var frase = prompt ("Por favor, introduce una frase con al menos 3 palabras.");
	var obtener = frase;
	var largo = obtener.length;
	alert ("La frase tiene: " + largo + " " + "caracteres");	
}
// Metodo charAt()
function posicion () {
	var palabra = prompt ("Por favor, introduce una palabra.");
	var obtener = palabra.length;
	var total = obtener -1;
	var pos = prompt ("Por favor, introduce una posición del 0 al " + total);
	var str = palabra.charAt(pos);
	alert ("La posición del caracter de la palabra es: " + str);	
}
// Metodo charCodeAt()
function caractcode () {
	var letra = prompt ("Por favor, introduce un carácter.");
	var numero = letra.charCodeAt(0)
	alert ("El código del caracter es: " + numero );
}
// Metodo fromCharCode()
function entrecode () {
	var numero = prompt ("Por favor, introduce un número del 32 al 126.");
	var entero = parseInt(numero);
	var code = String.fromCharCode(entero);
	alert ("La letra con el número " + entero + " es: " + code);
}
// Metodo toUpperCase()
function mayusculas () {
	var texto = prompt ("Por favor, introduce una frase.");
	var convertir = texto.toUpperCase();
	alert ("Tu texto convertido a mayúsculas: " + convertir);
}
// Metodo toUpperCase()
function minusculas () {
	var texto = prompt ("Por favor, introduce una frase.");
	var convertir = texto.toLowerCase();
	alert ("Tu texto convertido a minúsculas: " + convertir);
}
// Metodo concat()
function concatenado () {
	var text1 = "Hola ";
	var text2 = "Francisco Javier";
	var concatenar = text1.concat(text2);
	alert ("Tus textos concatenados son: " + concatenar);
}
// Metodo endsWith()
function terminaen () {
	var frase = prompt ("Por favor, introduce una frase que termine con un punto.");
	var final = frase.endsWith(".");
	alert ("¿Tu frase termina en con un punto?: " + final);
}

// Metodo includes()
/*function incluye () {
	var frase = prompt ("Por favor, introduce tu correo electrónico.");
	var incluir = frase.includes("@");
	alert ("¿El correo introducido contiene su arroba?: " + incluir);
}*/

// Metodo includes()
function incluye () {
	var frase = prompt ("Por favor, introduce una frase.");
	var palabra = prompt ("Ahora introduce una palabra que hayas escrito en la frase anterior.");
	var incluir = frase.includes(palabra);
	alert ("¿La frase incluye la palabra " + "\"" + palabra + "\"" + "? " + incluir + "\n" + "Copruebalo " + "\n\"" + frase + "\"");
}

// Metodo indexOf()
function indicede () {
	var frase = prompt ("Por favor, introduce una frase.");
	var palabra = prompt ("Ahora introduce una palabra que hayas escrito en la frase anterior.");
	var obtener = palabra.length;
	var indice = frase.indexOf(palabra);
	var total = (obtener-1) + indice;
	alert ("La primera vez que apararece la palabra" + "\"" + palabra + "\"\n" + "Empieza en la posición: " + indice + " y acaba en el puesto: " + total + "\n" + "Compruébalo " + "\n\"" + frase + "\"");
}


// Metodo lastIndexOf()
function ultimodicede () {
	var frase = prompt ("Por favor, introduce una frase.");
	var palabra = prompt ("Ahora introduce una palabra que hayas escrito en la frase anterior.");
	var obtener = palabra.length;
	var indice = frase.lastIndexOf(palabra);
	var total = (obtener-1) + indice;
	alert ("La última vez que apararece la palabra" + "\"" + palabra + "\"\n" + "Empieza en la posición: " + indice + " y acaba en el puesto: " + total + "\n" + "Compruébalo " + "\n\"" + frase + "\"");
}

// Metodo localeCompare()
function comparar () {
	var palabra1 = prompt ("Ahora introduce una palabra.");
	var palabra2 = prompt ("Ahora introduce otra palabra.");
	var comparando = palabra1.localeCompare(palabra2);
	
	if (comparando === 1) { alert ("La palabra " + "\"" + palabra1 + "\"" +
	 "está situada despues de la palabra " + "\"" + palabra2 + "\"\n" + 
	 "siguiendo el orden lexicográfico (orden alfabético) " + "\n" + 
	 "Compruebalo " + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" + "\"\n");
	}
	else if (comparando === -1) { alert ("La palabra " + "\"" + palabra1 + "\"" + 
	"está situada antes de la palabra " + "\"" + palabra2 + "\"\n" + 
	"siguiendo el orden lexicográfico (orden alfabético) " + "\n" +  
	"Compruébalo" + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" + "\"\n");
	}
	else { alert ("La palabra " + "\"" + palabra1 + "\"" + "y la palabra " + "\"" + 
	palabra2 + "\"" + "son iguales" + "\n" + 
	"Compruébalo " + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ" + "\"\n");	
	}
}
// Metodo match()
function iguala () {
	var frase = prompt("Por favor, introduce tu número de teléfono");
	var indice = frase.match(/[0-9]/g);
	alert ("El número de teléfono " + "\"" + frase + "\"\n" + "Contiene estos números: " + "\"" + indice + "\"" + "\n" + "Compruébalo " + "\n\"" + frase + "\"");
	}
// Metodo repeat()
function repetir () {
	var palabra = prompt("Por favor, introduce tu país.");
	var separador = prompt("Por favor, introduce un separador.");
	var veces = prompt("Por favor, introduce un numero de veces.");
	var palabraseparada = palabra + separador;
	var indice = palabraseparada.repeat(veces);
	alert ("La palabra " + "\"" + palabra + "\"\n" + "se repetirá: " + "\"" + veces + "\"" + "veces" + "\n" + "Compruébalo " + "\n\"" + indice + "\"");
	}
// Metodo replace()
function reemplazar	 () {
	var frase = "Mi color favorito es: rojo";
	var color2 = prompt("Por favor, introduce tu color favorito.");
	var indice = frase.replace("rojo", color2);
	alert (indice);
}
// Metodo search()
function buscar	 () {
	var  frase = prompt("Por favor, introduce tu correo eletrónico.");
	var buscando = frase.search(/@/);
	var punto = frase.search(/\./);
	
	//var arrobapunto = frase.search(/[?*@??*\.?/*);
	
	if (buscando === -1) {
		alert ("No has ecrito el carácter @");
		}
	else if (punto === -1) {
		alert ("No has escrito el carácter .");
		}
	else {
		alert ("El carácter \"@\" ha sido localizado en la posición: " + buscando + "\n" +
		 "El carácter \".\" ha sido encontrado el posición: " + punto + "\n" + "Copruébalo " + "\n\"" + frase );
		}
}
// Metodo slice()
function extraer() {
	var frase = prompt("Por favor, introduce tu correo eletrónico.");
	var buscando = frase.search(/@/);
	var punto = frase.search(/\./);
	var usuario = frase.slice(0,buscando);
	var	dominio = frase.slice(buscando +1, punto);
	var extension = frase.slice(punto +1);
	alert ("Tu correo es: " + frase + "\n" + 
		   "Tu ususario es: " + usuario + "\n" + 
		   "El dominio es: " + dominio + "\n" +
		   "La extensión es: " + extension);
}
// Metodo split()
function convertir() {
	var frase = prompt ("Introduce 5 colores separados por un espacio, punto o guión");
	var conversion = frase.split(" ") || frase.split(", ") || frase.split(".") || frase.split("-");
	alert ("la matríz que se ha creado es la siguiente" + "\n" + "var array = {" + conversion + "}");
}
// Metodo startsWith()
function comienzacon() {
	var frase = prompt ("Introduce una dirección web");
	var comienza = frase.startsWith("www") || frase.startsWith("http");
		if (comienza === false) {
			alert("La dirección especificada debe comenzar con " + "\"" + "http" + "\"" + "o con " + "\"" + "www" + "\"" + "\n" + "compruébalo" + "\n" + frase);
		}
		else {
			alert("La dirección especificada está correctamente escrita: " + "\n" + "compruébalo" + "\n" + frase)
			}
}
// Metodo substr()
function subcad() {
	var frase1 = prompt("Introduce tu nombre");
	var frase2 = prompt("Introduce tu apellido");
	var frase3 = prompt("Introduce tu segundo apellido");
	var recortar1 = frase1.substr(0,3);
	var recortar2 = frase2.substr(0,3);
	var recortar3 = frase3.substr(0,3);
	var subcad1 = recortar1.toUpperCase();
	var subcad2 = recortar2.toUpperCase();
	var subcad3 = recortar3.toUpperCase();
	alert("Tu nombre abreviado es: " + "\n" + subcad1 + "-" + subcad2 + "-" + subcad3);	
	}
	
// Metodo substring()
function subcadena() {
	var frase = prompt ("Introduce tu nombre y tus apellidos");
	var indice1 = frase.indexOf(" ");
	var recortar1 = frase.substring(0,indice1);
	
	var indice2 = frase.indexOf(" ",indice1+1);
	var recortar2 = frase.substring(indice1+1,indice2 );

	var recortar3 = frase.substring(indice2+1);
	
	/*var altas1 = recortar1.toUpperCase();
	var altas2 = recortar2.toUpperCase();
	var altas3 = recortar3.toUpperCase();*/

	var primeletra1 = recortar1.substr(0,1);
	var primealta1 = primeletra1.toUpperCase();
	var otrasletras1 = recortar1.substr(1);
	var otrasbajas1 = otrasletras1.toLowerCase();
	var union1 = primealta1.concat(otrasbajas1);
	
	var primeletra2 = recortar2.substr(0,1);
	var primealta2 = primeletra2.toUpperCase();
	var otrasletras2 = recortar2.substr(1);
	var otrasbajas2 = otrasletras2.toLowerCase();
	var union2 = primealta2.concat(otrasbajas2);
	
	var primeletra3 = recortar3.substr(0,1);
	var primealta3 = primeletra3.toUpperCase();
	var otrasletras3 = recortar3.substr(1);
	var otrasbajas3 = otrasletras3.toLowerCase();
	var union3 = primealta3.concat(otrasbajas3);
	
	alert ("Por favor revisa tus datos." + "\n" + "Nombre: " + union1 + "." + "\n" + "Apellido: " + union2 + "." + "\n" + "Segundo Apellido: " + union3 + ".");
}	
	/*alert ("Tu nombre completo es: " + "\n" + altas1 + "\n" + altas2 + "\n" + altas3);*/

// Metodo toString()	
function acadena() {
	var paises = ["España","Alemania","Francia","Italia"];
	var cadena = paises.toString();
	
	alert ("La variable paises es de tipo: " + typeof(paises) + "\n" + "var paises = " + " [\"" + paises[0] + "\"," + "\"" + paises[1] + "\"," + "\"" + paises[2] + "\"," + "\"" + paises[3] "\"];" + "\n" + "La Variable cadena es de tipo: " + typeof(cadena) + "\n" + "var paises = " + "\"" + paises + "\";");
	
	}
	
// Metodo trim()
function sinEspacios() {
	var frase = prompt("Introduce tu correo electronico con espacios por delante y por detras");
	var quitarEspacios = frase.trim()
	
	alert ("La variable frase antes: " + 
	}