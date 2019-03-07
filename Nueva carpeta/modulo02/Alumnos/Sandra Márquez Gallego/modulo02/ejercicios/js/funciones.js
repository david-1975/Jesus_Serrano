// JavaScript Document

// Método length()
function longitud () {
	var frase = prompt ("Por favor, introduce una frase con al menos 3 palabras");
	var obtener = frase;
	var largo = obtener.length;
	alert ("La frase tiene: " + largo + " caracteres");
}

// Método charAt()
function posicion () {
	var palabra = prompt ("Por favor, introduce una palabra");
	var obtener = palabra.length;
	var total = obtener -1;
	var pos = prompt ("Por favor, introduce una posición de 0 al " + total);
	var str = palabra.charAt(pos);
	alert ("La posición del caracter de la palabra es: " + str);
}

// Método charCodeAt()
function caractercode () {
	var letra = prompt ("Por favor, introduce un caracter");
	var numero = letra.charCodeAt(0);
	alert ("El número de la letra " + letra + " es: " + numero);
}

// Método fromCharCode()
function codecaracter() {
	var numero = prompt ("Por favor, introduce un número del 32 al 126"); 
	var entero = parseInt(numero);
	var code = String.fromCharCode(entero);
	alert ("La letra con el número " + entero  + " es: " + code);
}

 // toUpperCase();
 function mayusculas () {
	 var texto = prompt ("Por favor, introduce una frase");
	 var convertir = texto.toUpperCase();
	 alert ("El texto convertido a mayúsculas es: " + convertir);
 }
	
// toLowerCase();
 function minusculas () {
	 var texto = prompt ("Por favor, introduce una frase en mayúsculas");
	 var convertir = texto.toLowerCase();
	 alert ("El texto convertido a minúsculas es: " + convertir);
 }

// concat();
function concatenar() {
	var palabra1= prompt ("Por favor, introduce tu nombre"); 
	var palabra2= prompt ("Por favor, introduce tu apellido"); 
	var union = palabra1.concat(" ", palabra2);
    alert ("tu nombre completo es " + union);
}

// Método endsWith( )
function termina() {
	var frase = prompt ("Por favor, introduce una frase que termine con un punto");
	var final = frase.endsWith(".");
	alert ("¿La frase termina con un punto? " + final );
}




function termina() {
	var palabra = prompt ("Por favor, escribe una frase terminada en un punto"); 
	var final = palabra.endsWith(".");
    alert ("¿La frase termina con un punto? " + final );
}

// Método includes( )
/*function incluye() {
	var frase = prompt ("Por favor, introduce un correo electrónico");
	var incluir = frase.includes("@");
    alert ("¿El correo electrónico contiene una arroba? " + incluir);
}*/

// Método includes( )
function incluye() {
  var frase = prompt ("Por favor, introduce una frase");
  var palabra = prompt ("Ahora, introduce una palabra que hayas escrito en la frase");
  var incluir = frase.includes(palabra);
alert ("¿La frase introducida incluye la palabra " + "\"" + palabra + "\"" + "? " + incluir + "\n" + "Compruébalo " + "\n\"" + frase + "\"");
}

// Método indexOf( )
function indiceDe() {
	var frase = prompt("Por favor, introduce una frase");
	var palabra = prompt("Ahora, introduce una palabra que hayas escrito en la frase");
	var obtener = palabra.length;  //5
    var indice = frase.indexOf(palabra); //4
	var total = (obtener-1) + indice;
  alert ("La primera vez que aparece la palabra " + "\"" + palabra + "\"\n" + "Empieza en la posición: " + indice + " y acaba en la posición: " + total + "\n" + "Compruébalo " + "\n\"" + frase + "\"");
}

// Método lastIndexOf( )
function ultimoindice() {
	var frase = prompt("Por favor, introduce una frase");
	var palabra = prompt("Introduce ahora, una palabra que hayas escrito en la frase");
	var obtener = palabra.length;
    var indice = frase.lastIndexOf(palabra); 
	var total = (obtener-1) + indice;
  alert ("La ultima vez que aparece la palabra " + "\"" + palabra + "\"\n" + "Empieza en la posición: " + indice + " y acaba en la posición: " + total + "\n" + "Compruébalo " + "\n\"" + frase + "\"");
}

// Método localeCompare()
function compare() {
	var palabra1 = prompt("Introduce una palabra");
	var palabra2 = prompt("Introduce otra palabra");
    var comparar = palabra1.localeCompare(palabra2); 

	if (comparar === 1) { 
	alert ("La palabra " + "\"" + palabra1 + "\"" + " está situada detrás de la palabra " + "\"" + palabra2 + "\"" + "\n" + "Siguiendo el orden lexicográfico (en orden alfabético)"   + " Compruébalo " + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWYZ" + "\"") }	
	
	else if (comparar === -1) { 
	alert ("La palabra " + "\"" + palabra1 + "\"" + " está situada antes de la palabra " + "\"" + palabra2 + "\"" + "\n" + "Siguiendo el orden lexicográfico (en orden alfabético). "   + " Compruébalo " + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWYZ" + "\"") }	
	
	else { alert ("La palabra " + "\"" + palabra1 + "\"" + " y la palabra " + "\"" + palabra2 + "\"" + " son iguales" + "\n" + " Compruébalo "    + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWYZ" + "\"") };
}

// Método match()
function comprobar () {
	var frase=prompt ("Por favor, introduce tu número de teléfono");
	var indice=frase.match(/[0-9]/g); //[A-Za-z0-9]
	alert ("El número de teléfono " +
	 "\"" + frase + "\"\n" + "Contiene estos números: " + "\"" + indice + "\"" + "\n" + " Compruébalo " + "\n\"" + frase + "\"");  	
}

// Método repeat()
function repetir () {
	var palabra=prompt ("Por favor, introduce tu país");
	var separador=prompt ("Por favor, introduce un separador");
	var veces=prompt ("Por favor, introduce un número de veces");
	var palabraseparado= palabra + separador;
	var indice= palabraseparado.repeat(veces);
	alert ("La palabra " + "\"" + palabra + "\"" + " va a ser repetida " + "\"" + veces + "\"" +  "veces" + "\n" + " Compruébalo " + "\n\"" + indice + "\"");
}
	

// Método replace()
function reemplazar () {
	var frase= "Mi color favorito es el rojo";
	alert (frase);
	var color=prompt ("Introduce ahora, tu color favorito");
	var indice = frase.replace ("rojo", color);
	alert  (indice);
	// var color1=prompt ("Por favor, introduce un color cualquiera");
	// alert (frase + " no es " + "\"" + color1 + "\"\n" + frase + " es " + "\"" + color2 + "\"");
	
}


// Método search()
function buscar () {
	var frase = prompt ("Introduce tu correo eléctronico");
	var busqueda = frase.search (/@/);
	var punto = frase.search (/\../);
	// var puntopordelante = frase.indexOf (".", busqueda);
	// var puntopordetras = frase.indexOf (".",);
	
	
	if (busqueda === -1) {
	alert ("No se ha escrito el caracter @");
	} else if (punto === -1) {
	alert ("No se ha escrito el caracter .");
	} else  { 
	alert ("El caracter \"@\" ha sido encontrado en la posición: " + busqueda + "\n" + "El caracter \".\" ha sido encontrado en la   posición : " + punto +"\n" + "Compruébalo: " + "\n\"" + frase); 
	}
		
}
		


// Método slice()
function extraer () {
	var frase = prompt ("Introduce tu correo eléctronico");
	var busqueda = frase.search (/@/);
	var punto = frase.search (/\../);
	var usuario= frase.slice (0, busqueda);
	var dominio= frase.slice (busqueda + 1 , punto);
	var extension= frase.slice (punto + 1);
	
	alert ("Tu correo es : " + frase + "\n" +
	"Tu usuario es : " + usuario + "\n" +
	"Tu dominio es : " + dominio + "\n" +
	"La extensión es : " + extension);
}


// Método split ()
function convertir() {
	var frase = prompt ("Introduce 5 colores separados por un espacio, punto o guión");
	var conversion = frase.split(" ") || frase.split(",") || frase.split(".")  || frase.split("-");          
	alert ("la matríz que se ha creado es la siguiente" + "\n" + "var array = {" + conversion + "}");
}

// Método startsWith ()
function comienzacon() {
	var frase = prompt ("Introduce una dirección web");
	var comienza = frase.startsWith("www") || frase.startsWith("http://");
	if (comienza === false) {
	alert ("La dirección especificada debe comenzar con " + "\"" + "http" + "\"" + " o con " + "\"" +"www" + "\"" + "\n" + "compuébalo" + "\n" + frase);
    } else {
	alert ("La dirección especificada está correctamente escrita: " + "\n" + "compuébalo" + "\n" + frase);		
	}
}

// Método substr ()
function subcad() {
	var frase1 = prompt ("Introduce tu nombre");
	var frase2 = prompt ("Introduce tu primer apellido");
	var frase3 = prompt ("Introduce tu segundo apellido");
	var recortar1 = frase1.substr (0,3);
	var recortar2 = frase2.substr (0,3);
	var recortar3 = frase3.substr (0,3);
	var subcad1= recortar1.toUpperCase();
	var subcad2= recortar2.toUpperCase();
	var subcad3= recortar3.toUpperCase();
	alert ( "Tu nombre abreviado es : " + "\n" + subcad1 + subcad2 + subcad3 );
	

}

//Método substring()
function subcadena() {
    var frase = prompt ("Introduce tu nombre y tus apellidos");
	var indice1 = frase.indexOf(" ");
	var recortar1 = frase.substring (0,indice1);
	
	var indice2 = frase.indexOf(" ",indice1+1);
	var recortar2 = frase.substring (indice1+1,indice2);
	
	var indice3 = frase.lastIndexOf(" ");
	var recortar3 = frase.substring (indice3+1);
	
    var primeraLetra1 = recortar1.substr(0,1);
	var primeraMayusculas1 = primeraLetra1.toUpperCase();
	var restoLetras1 = recortar1.substr(1);
	var restoMinusculas1 = restoLetras1.toLowerCase();
	var union1 = primeraMayusculas1.concat(restoMinusculas1);
	
	var primeraLetra2 = recortar2.substr(0,1);
	var primeraMayusculas2 = primeraLetra2.toUpperCase();
	var restoLetras2 = recortar2.substr(1);
	var restoMinusculas2 = restoLetras2.toLowerCase();
	var union2 = primeraMayusculas2.concat(restoMinusculas2);
		
	var primeraLetra3 = recortar3.substr(0,1);
	var primeraMayusculas3 = primeraLetra3.toUpperCase();
	var restoLetras3 = recortar3.substr(1);
	var restoMinusculas3 = restoLetras3.toLowerCase();
	var union3 = primeraMayusculas3.concat(restoMinusculas3);
	
	alert ("Tu nombre desglosado es: " + "\n" + "\"" + union1 + "\"" + "\n" +  "\"" + union2 + "\"" + "\n" + "\"" + union3 + "\"");
	
	}

//Método toString()
function acadena () {
	var paises = ["Japón", "Brasil", "Francia", "Mexico"];
	var cadena = paises.toString();
	alert ("La variable paises es de tipo: " + typeof(paises) + "\n" + "var paises = " + "[\"" + paises[0] + "\"," + "\"" + paises [1]  + "\"," + "\"" + paises [2] + "\"," + "\"" +  paises [3] + "\"];" + "\n" + "La variable cadena ahora es de tipo: " + typeof(cadena) + "\n" + "var paises = " + "\"" + paises + "\";");
	
}

//Método trim()
function sinEspacios () {
	var frase = prompt ("Escribe tu correo electrónico con espacios por delante y por detrás");
	var quitarEspacios = frase.trim();
	 alert ("La variable frase antes: " + "\"" + frase + "\"\n" + "La variable frase después: " + "\"" + quitarEspacios + "\"");

}