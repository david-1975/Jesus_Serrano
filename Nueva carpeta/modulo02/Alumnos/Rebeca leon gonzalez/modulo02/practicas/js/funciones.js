// JavaScript Document

// Método length( ) //Longitud
function longitud (){
	var frase = prompt ("Por favor, intruduce una frase con al menos 3 palabras");
	var obtener = frase;
	var largo = obtener.length;
	alert ("La frase tiene: " + largo + " caracteres");	
	
	} 
	
// Método charAt()//

function posicion (){
	var palabra = prompt ("Por favor, introduce una palabra");
	var obtener = palabra.length; //tengo que restar 1 a esa palabra porque empieza a contar por 0
	var total = obtener -1;
	var pos = prompt ("Por favor, introduce una posición de 0 al " + total);
	var resultado = palabra.charAt(pos);
	alert ("La posición del carácter de la palabra es: " + resultado);	
	}
	
// Método charCodeAt()

function caractercode (){
	var letra = prompt ("Por favor, introduce un caracter");
	var numero = letra.charCodeAt(0);
	alert ("El número de la letra " + letra + "es: " + numero);
	
	}
	
// Método fromCharCode()

function codecaracter (){
var numero = prompt ("Por favor, introduce un número del 32 al 126");
var entero = parseInt(numero); // para convertir la variable en un numero entero
var code = String.fromCharCode(entero);// me dice ese numero que codigo ASCII es 
//alert (typeof (entero)); // para saber si es texto o numero 
alert ("La letra con el número " + entero + "es: " + code);

}

//toUpperCase();

function mayusculas (){
	var texto = prompt ("Por favor, introduce una frase");
	var convertir = texto.toUpperCase();
	alert ("El texto convertido a mayúsculas " + convertir);
	}
	
//toLowerCase();

function minusculas () {
	var texto = prompt ("Por favor, introduce una frase en mayúsculas");
	var convertir = texto.toLowerCase();
	alert ("El texto convertido en minúsculas " + convertir);
	
	}	

//concat ();

function concatenar (){
	var nombre = prompt ("Por favor, introduce tu nombre ");
	var apellido = prompt ("Por favor, introduce tu apellido ");
	var union = nombre.concat(" ", apellido);
	alert ("El nombre completo es : " + union);
	
	}
// Método endsWith ();

function termina(){
	var frase = prompt ("Por favor, intoduce una frase que termine con un punto");
	var final = frase.endsWith(".");
	alert ("¿La frase termina con un punto? " + final);
	
	}	
// Método includes ();
/*function incluye(){
	 var frase = prompt ("Por favor, introduce tu correo electronico");
	var final = frase.includes ("@");
	alert ("El correo introducido es: " + final);
	}*/
// Método includes ();
function incluye(){
	 var frase = prompt ("Por favor, introduce una frase");
	 var palabra = prompt ("Ahora introduce una palabra que hayas escrito en la frase");
	 var incluir = frase.includes(palabra);
	 alert ("¿la frase introducida incluye la palabra " + "\"" + palabra + "\"" + "? "  + incluir + "\n" + "Compruébalo" + "\n\"" + frase + "\"" );
	 
}

//Metodo indexOf();

function indiceDe (){
 var frase = prompt ("Por favor, introduce una frase");
 var palabra = prompt ("Ahora ,una palabra que hayas escrito en la frase");	  
 var indice = frase.indexOf(palabra);
 
 var obtener = palabra.length; //5
 var indice = frase.indexOf(palabra); //4
 var total = (obtener -1) + indice ; //9
 alert ("La primera vez que aparece la palabra " + "\"" + palabra + "\"\n" + " Empieza en la posición : " + indice + " y acaba en la posición : " + total + "\n" + "Compruébalo" +  "\n\"" + frase + "\""); 
}
//Método lastIndexOf();

function ultimoindice(){
 var frase = prompt ("Por favor, introduce una frase");
 var palabra = prompt ("Ahora ,una palabra que hayas escrito en la frase");	  
 var indice = frase.lastIndexOf(palabra);
 
 var obtener = palabra.length; //5
 var indice = frase.lastIndexOf(palabra); //4
 var total = (obtener -1) + indice ; //9
 
 alert ("La última vez que aparece la palabra " + "\"" + palabra + "\"\n" + " Empieza en la posición : " + indice + " y acaba en la posición : " + total + "\n" + "Compruébalo" +  "\n\"" + frase + "\""); 
}

// Método localeCompare();
function comparar(){

var palabra1 = prompt ("Introduce una palabra");
var palabra2 = prompt ("Introduce otra palabra");
var compara = palabra1.localeCompare(palabra2);
//alert (compara);
if (compara === 1) {
	alert ("La palabra" + "\"" + palabra1 + "\"" + " está situada detrás de la palabra " + "\"" + palabra2 + "\"" + "\n" + " siguiendo el orden lexicográfico (en orden alfábetico)" + "\n" + "Compruébalo" + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTVWXYZ" + "\"\n"); }
	
else if (compara === -1) {
	alert ("La palabra" + "\"" + palabra1 + "\"" + " está situada antes de la palabra " + "\"" + palabra2 + "\"" + "\n" + " siguiendo el orden lexicográfico (en orden alfábetico)" + "\n" + "Compruébalo" + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTVWXYZ" + "\"\n"); }
	
	else {	alert ("La palabra" + "\"" + palabra1 + "\"" + " y la palabra " + "\"" + palabra2 + "\""+ "son iguales" + "\n" + "Compruébalo" + "\n\"" + "0123456789ABCDEFGHIJKLMNÑOPQRSTVWXYZ" + "\"\n"); }
	
	}
	
	
// Método match ();
function comprobar(){
	var frase = prompt ("Por favor, introduce tu número de teléfono");
	var indice = frase.match(/[abc]/g); // [A-Za-z0-9]
	alert ("El número de teléfono " + "\"" + frase + "\"\n" + "Contiene estos números: " + "\"" + indice + "\"" + "\n" + "Compruébalo" + "\n\"" + frase + "\"" );
	
	}	
	
//Método repeat ();

function repetir(){
	var palabra = prompt ("Por favor, introduce tu país");
	var separador = prompt ("Por favor, introduce un separador");
	var veces = prompt ("Por favor, introduce un número de veces");
	
	var palabraseparador = palabra + separador;
	
	var indice = palabraseparador.repeat(veces);
	
	alert ("La palabra" + "\"" + palabra + "\"" + "va a ser repetida" + "\"" + veces + "\"" + " veces " + "\n" + "Compruébalo" + "\n\"" + indice + "\"");
	
	
	}
	
//Método replace();
/*function reemplazar(){
	var frase = "Mi color favorito ";
	var color1 = prompt ("Por favor, introduce un color cualquiera");
	var color2 = prompt ("Por favor, introduce tu color favorito");
	var indice = frase.replace(color1,color2);
	alert (frase + " no es " + "\"" + color1 + "\"\n" + frase + " es " + "\"" + color2 + "\"");
	}*/
	
function reemplazar (){
	var frase = "Mi color favorito es rosa";
	alert (frase);
	var color = prompt ("introduce tu color favorito");
	var indice = frase.replace("rosa", color);
	alert (indice);
	
	}
	
	//Método search ();
	
	function buscar (){
		var frase = prompt ( "introduce tu correo electrónico");
		var busqueda = frase.search(/@/);
		var punto = frase.search(/\./);
		//var arrobapunto = frase.search(/[?*@??*\.?*]/);
	 	
	 	if (busqueda === -1){
		alert ("No has escrito el caracter @");			
			}				
		else if ( punto === -1){
		alert ("No has escrito el caracter .");	
			}
		else {
		alert("El caracter \"@\" ha sido encontrado en la posición : " + busqueda + "\n" + " El caracter \".\" ha sido encontrado en la posición : " + punto + "\n" + "Compruébalo" + "\n\"" + frase );	
			}
					
		}
		
		//Método slice();
		
		function extraer(){
		var frase = prompt ( "introduce tu correo electrónico");
		var busqueda = frase.search(/@/);
		var punto = frase.search(/\./);
		var usuario = frase.slice(0 , busqueda);
		var dominio = frase.slice( busqueda +1 , punto);
		var extension = frase.slice( punto +1);
		alert ("Tu correo es :  " + frase + "\n" +
		    	"Tu usuario es : " + usuario + "\n" +
				"Tu dominio es : " + dominio + "\n" +
				"La extensión es : " + extension );
		
		}
		
		// Método split ();
		
		
		function convertir(){
			var frase = prompt ("Introduce 5 colores separados por un espacio , punto o guión");
			var conversion = frase.split(" ")|| frase.split(",")|| frase.split(".") || frase.split("-");
			alert ("la matríz que se ha creado es la siguiente" + "\n" + "var array = {" + conversion + "}" );
			
			}
		
				
	//Método startsWith();
	
	function comienzacon (){
		var frase = prompt ("Introduce una dirección web");
		var comienza = frase.startsWith("www") || frase.startsWith ("http");
		alert (comienza);
		
		if (comienza === false){
			alert ("La dirección especificada debe comenzar con " + "\"" + "http" + "\"" + " o con " + "\"" + "www" + "\""  + "\n" +  		         "compruébalo" + "\n" + frase);			
			}
		else {
			alert ("La dirección especificada está correctamente escrita : " + "\n" + "Compruébalo" + "\n" + frase);
			}		
		
		}		
		
	//Método substr( );
	
	function subcad (){
		var frase1 = prompt ("Introduce tu nombre");
		var frase2 = prompt ("Introduce tu primer apellido");
		var frase3 = prompt ("Introduce tu segundo apellido");
		var recortar1= frase1.substr(0 , 3);
		var recortar2 = frase2.substr(0 , 3);
		var recortar3 = frase3.substr(0 , 3);
		var subcad1 = recortar1.toUpperCase ();
		var subcad2 = recortar2.toUpperCase ();
		var subcad3 = recortar3.toUpperCase ();
		alert ("Tu nombre abreviado es: " + "\n" + subcad1 + subcad2 + subcad3);
		
		}
	
	//Método substring ();
	
	function subcadena (){
		var frase = prompt ("Introduce tu nombre y tus apellidos");
		var indice1 = frase.indexOf(" ");
		var recortar1 = frase.substring(0 ,indice1);
		
		var indice2 = frase.indexOf(" " ,indice1+1);
		var recortar2 = frase.substring(indice1+1,indice2+1);
				
		//var indice3 = frase.lastIndexOf(" ");
		//var indice3 = frase.indexOf();
		var recortar3 = frase.substring(indice2+1);//le digo la posicion a recortar me pide desde donde.
		
		var subcadena1 = recortar1.toUpperCase();
		var subcadena2 = recortar2.toUpperCase();
		var subcadena3 = recortar3.toUpperCase();
		
		var letra1 = recortar1.substr(0,1).toUpperCase();
		var resto1 = recortar1.substring(1).toLowerCase();
		var union1 = letra1.concat(resto1);
		
		var letra2 = recortar2.substr(0,1).toUpperCase();
		var resto2 = recortar2.substring(1).toLowerCase();
		var union2 = letra2.concat(resto2);
		
		var letra3 = recortar3.substr(0,1).toUpperCase();
		var resto3 = recortar3.substring(1).toLowerCase();
		var union3 = letra3.concat(resto3);
		
		/*var strPrimeraLetra1 = recortar1.substr(0,1);
		var primeraMayusculas1= strPrimeraLetra1.toUpperCase();
		var restoLetras1 = recortar1.substr(1);
		var restoMinusculas1 = restoLetras1.toLowerCase();
		var union1 = primeraMayusculas1.concat(restoMinusculas1);
		
		
		var strPrimeraLetra2 = recortar2.substr(0,1);
		var primeraMayusculas2= strPrimeraLetra2.toUpperCase();
		var restoLetras2 = recortar2.substr(1);
		var restoMinusculas2 = restoLetras2.toLowerCase();
		var union2 = primeraMayusculas2.concat(restoMinusculas2);
		
		
		var strPrimeraLetra3 = recortar3.substr(0,1);
		var primeraMayusculas3= strPrimeraLetra3.toUpperCase();
		var restoLetras3 = recortar3.substr(1);
		var restoMinusculas3 = restoLetras3.toLowerCase();
		var union3 = primeraMayusculas3.concat(restoMinusculas3);*/
		alert ("Tu nombre desglosado es : "+ "\n" + union1 + "\n" + union2 + "\n" + union3);
		
		
		
	
		
		
		//alert (recortar1 + "\n"+ recortar2 + "\n" + recortar3);
		 
/*		alert ("Tu nombre desglosado es: " + "\n" + "\"" + subcadena1 + "\"" + "\n" + "\""+ subcadena2 +"\"" + "\n" + "\""+ subcadena3 + "\"");
*/				
		}	
		
	//Método toString();
	
	function acadena(){
		
		var paises = ["España", "Francia", "Italia", "Alemania"];
		var cadena = paises.toString();
		
		alert("La variable países es de tipo : " + typeof(paises) + "\n" + "var paises = " + "[\"" + paises [0] + "\"," + "\"" + paises[1] + "\"," + "\"" + paises[3] + "\"];" + "\n" + "La variable cadena ahora es de tipo: " + typeof( cadena) + "\n" + "var países = " + "\"" + paises + "\";"); 
		

		}
		
	// Método trim();
	
	function sinEspacios(){
		var frase = prompt ("Introduce tu correo electrónico con espacios por delante yi por detrás");
		var quitarEspacios = frase.trim();
		
		alert ("La variable frase antes : " + "\"" + frase + "\"\n" + "La variable frase  después : " + quitarEspacios + "\"");
		
		}