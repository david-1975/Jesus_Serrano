// JavaScript Document

// Metodo length() Longitud
function longitud() {
	var frase = prompt("introduce un texto");
	var obtener = frase;
	var largo = obtener.length ;
	alert ("La frase tiene: " + largo + " caracteres");
}
// Método charArt()
function posicion () {
	var palabra = prompt("Introduce una palabra");
	var obtener = palabra.length;
	var total = obtener - 1;
	var pos = prompt("introduce un número entre 0 y " + total);
	var str = palabra.charAt(pos);
	alert ("la posición " + pos + " de la palabra " + palabra + " es: " + str);		
}
// Método charCodeArt()
function valorAscii () {
	var caracter = prompt("Introduce un caracter ASCII");
	var n = caracter.charCodeAt(0);	
	alert ("El valor UNICODE del caracter ASCII " + caracter + " es: " + n);		
}
// Método charCodeArt()
function unicode2Ascii () {
	var numero = prompt("Introduce un número UNICODE entre 32 y 126");
//	var entero = numero.parseInt();	no se puede hacer asi ?????
	var entero = parseInt(numero);	//convierte caracteres numericos a numero entero
	alert (typeof(entero));	
	var caracter = String.fromCharCode(entero);
	alert ("El caracter ASCII para valor UNICODE " + numero + " es: " + caracter);		
}
function aMayusculas() {
	var texto = prompt("introduce un texto");
	var txtMayusculas = texto.toUpperCase();
	alert ("Texto original es: " + texto +  "\nTexto convertido es: " + txtMayusculas);		

}
function aMinusculas() {
	var texto = prompt("introduce un texto en mayusculas");
	var txtMinusculas = texto.toLowerCase();
	alert ("Texto original es: " + texto +  "\nTexto convertido es: " + txtMinusculas);		

	}
function unirCadenas() {
	var texto1 = prompt("introduce un texto");
	var texto2 = prompt("introduce otro texto");
	var texto3 = prompt("introduce otro texto mas");
	var txtFinal = texto1.concat(texto2, texto3);
	alert ("Texto original es: " + texto1 +  "\n" + texto2 + "\n" + texto3 + "\nTexto convertido es: " + txtFinal);		

	}
// endsWith busca el acracter/es de una cadena
function finalCadena() {
	var texto1 = prompt("introduce un texto");
	var textof = prompt("introduce cadena/texto fin cadena");
	var txtFinal = texto1.endsWith(textof);
	alert ("Texto original es: " + texto1 +  "\n verificamos que finaliza con: " + textof + "\n el resultado es: " + txtFinal);		
	}
// endsWith busca el acracter/es de una cadena

function enCadena() {
	var texto1 = prompt("introduce un texto");
	var textof = prompt("introduce cadena/texto a buscar");
	var posicion = prompt("introduce posicion desde la que buscar");
	var entero = parseInt(posicion);	//convierte caracteres numericos a numero entero
	var txtFinal = texto1.includes(textof, entero);
	alert ("Texto original es: \"" + 
		    texto1 + "\"\n" + " verificamos que contenga: \"" + 
		    textof + "\" a partir de la posición: " + 
		    posicion  + "\n" + " el resultado es: \"" + 
		    txtFinal + "\"");		
	}
// indexOf() busca la posicion en la que comienza la primera ocurrencia de una cadena
function iniCadena() {
	var texto1 = prompt("introduce un texto");
	var textof = prompt("introduce cadena/texto fin cadena");
	var posicion = texto1.indexOf(textof);//posicion en la que comienza la primera ocurrencia
	var longitud = parseInt(textof.length);//longitud de la cadena abuscar
	var posicionf = posicion + longitud;// calculo la posicion final de la cadena a buscar

	alert ("Texto original es: " + texto1 +  "\n la cadena a buscar es: " + textof + 
	"\n comienza en la posición: " + (posicion + 1) + " y finaliza en la posición " + posicionf);
	// (posicion + 1) para empezar a contar desde 1 y no desde 0
	}
// indexOf() busca la posicion en la que comienza la última ocurrencia de una cadena
function lastCadena() {
	var texto1 = prompt("introduce un texto");
	var textof = prompt("introduce cadena/texto fin cadena");
	var posicion = texto1.lastIndexOf(textof); //posicion en la que comienza la última ocurrencia
	var longitud = parseInt(textof.length); //longitud de la cadena abuscar
	var posicionf = posicion + longitud; // calculo la posicion final de la cadena a buscar

	alert ("Texto original es: " + texto1 +  "\n la cadena a buscar es: " + textof + 
	"\n comienza en la posición: " + (posicion + 1) + " y finaliza en la posición " + posicionf);
	// (posicion + 1) para empezar a contar desde 1 y no desde 0
	} 
// indexOf() compara 2 cadenas en la localizacion actual. (-1 delante) (0 son iguales)  (1 detras)
 
function comparaCadenas() {
	var posicionf = " ";
//	var texto1 = prompt("introduce cadena 1");
	var palabra1 = prompt("introduce palabra 1");
	var palabra2 = prompt("introduce palabra 2");
	var valor = palabra1.localeCompare(palabra2); //compara 2 cadenas
	if (valor == 1){
		posicionf = "detras";
		}
	else if (valor == 0){
			posicionf = "iguales";
			}
		else {
			posicionf = "delante";
			}
	alert ( "\n la primera cadena a comparar es: " + palabra1 + 
			"\n segunda cadena comparar es     : " + palabra2 + 
			"\n la primera cadena según orden alfabético es/esta con relación a la segunda: " + posicionf);
	} 
// match() busca una cadena que coincida con una expresion regular (RegExp) y devuelve las ocurrencias separadas por comas
function buscaOcurrenciaCadena() {
	var expr1 = /abc/; // ver como meter expresion en variable
	var expr2 = /3-6/; // ver como meter expresion en variable
	
	var texto1 = prompt("introduce un texto");
//	var ocurrencia1 = texto1.match(/[abc]/g);//longitud de la cadena abuscar
	var ocurrencia1 = texto1.match(/[abc]/g);//longitud de la cadena abuscar
	var ocurrencia2 = texto1.match(/[3-6]/g);//longitud de la cadena abuscar

	alert ("Texto original es: " + texto1 +  
			"\n la expresion regular a buscar es: " + expr1 + 
			"\n Las ocurrencias encontradas son :" + ocurrencia1 +
			"\n la expresion regular a buscar es: " + expr2 +
			"\n Las ocurrencias encontradas son :" + ocurrencia2
			);

	}
// repeat() repite cadena n veces
function repiteCadena() {
	var cadena = prompt("introduce una cadena"); // "españa"
	var separador = prompt("introduce separador"); // ", ole, ole, ole "
	var palabraseparador = cadena + separador;
	var veces = prompt("introduce numero de veces a ser repetido"); // 4
	var txtFinal = palabraseparador.repeat(veces); // "españa, ole, ole, ole "(*4)
	alert ("La cadena original es: " + cadena +  
		"\n La cadena de separación es " + separador + 
		"\n Las veces a repetir son: " + veces + 
		"\nTexto final es: \n" + txtFinal);		

	}
// replace() reemplaza cadena
function reemplazarCadena() {
	var texto1 = prompt("introduce un texto"); // "españa"
	var inicial = prompt("introduce cadena inicial"); // ", ole, ole, ole "
	var final = prompt("sustituir por:"); // 4
	var txtFinal = texto1.replace(inicial, final); // "españa, ole, ole, ole "(*4)
	alert ("El texto original es: " + texto1 +  
		"\n La cadena a sustituir es :" + inicial + 
		"\n sustituir por: " + final + 
		"\nTexto final es: \n" + txtFinal);		

	}
// search() Busca una cadena o expresion regular y devuelve su posición o -1
// modificar y utilizar indexOf() e lastIndexOf() no funciona del todo revisar
function validaArrobaPunto() {
	var texto1 = prompt("introduce un correo electrónico");
	var arroba = texto1.search(/@/);//posicion del caracter @ o -1
	var punto = texto1.search(/\./);//posicion del caracter @ o -1
	var arrobapunto = texto1.search(/[?*@??*\.?*]/);

	if(arrobapunto === -1) {
		alert ("El correo " + texto1 + " introducido es erroneo");
		}
	if(arroba === -1) {
		alert ("El correo " + texto1 + " introducido es erroneo (falta la \"@\")\n");
		}
	else if(punto === -1) {
		alert ("El correo " + texto1 + " introducido es erroneo (falta el \"\.\")\n");
		}	
		else {alert ("El correo " + texto1 + " introducido es correcto");
		}

	}
// slice() extrae partes de una cadena desde-hasta
function sliceCorreo() {
	var texto1 = prompt("introduce un correo electrónico");
	var arroba = texto1.search(/@/);//posicion del caracter @ o -1
	var punto = texto1.search(/\./);//posicion del caracter @ o -1
	var usuario = texto1.slice(0, arroba);
	var dominio = texto1.slice(arroba +1, punto);
	var extension = texto1.slice(punto +1);

	alert ("El correo completo es: " + texto1 +  
		"\n el usuario es: " + usuario + 
		"\n el dominio es: " + dominio +
		"\n la extension es: " + extension);		

	
	}
// split() Divide una cadena en un array de subcadenas
function splitCadena() {
	var texto1 = prompt("introduce 5 elementos");
	var listacadenas = texto1.split(" ") || 
					   texto1.split(",") || 
					   texto1.split(".") || 
					   texto1.split("-");//posicion del caracter @ o -1

	alert ("El texto inicial es: " + texto1 +  
		"\n el array final es: \n var array {" + listacadenas + 
		"}");		

	
	}
// startsWith(searchvalue, start) Comprueba si una cadena comienza con los caracteres de una cadena específica
function empiezaCon() {
	var pagina = prompt("introduce una página web : ");
//	var textof = prompt("introduce cadena/texto inicio cadena");
	var texto1 = "http";
	var texto2 = "www";
	var res1 = pagina.startsWith(texto1) || pagina.startsWith(texto2);
	
	
	if (res1 == false) {
			alert ("Texto original es: " + pagina +  
			"\n verificamos que comienza con: " + texto1 + 
			"\n el resultado es: " + texto1 + 
			" no encontrado al inicio de la pagina web");	
		}
	else {
			alert ("Texto original es: " + pagina +  
			"\n verificamos que comienza con: " + texto1 + 
			"\n o con: " + texto2 + 
			"\n el resultado es: correcto" );	
		}
	}
// substr(inicio, longitud) Extrae caracteres de una cadena comenzando en una posicion y la longitud
function subCad1() {
	var texto1 = prompt("introduce nombre: ");
	var texto2 = prompt("introduce apellido 1: ");
	var texto3 = prompt("introduce apellido 2: ");
	var textof1 = texto1.substr(0,3);//
	var textof2 = texto2.substr(0,3);//
	var textof3 = texto3.substr(0,3);//
	var textof123 = textof1 + textof2 + textof3;
	var textomay = textof123.toUpperCase();
	
	alert ("Nombre: " + texto1 + 
		"\n Apellido 1: " + texto2 + 
		"\n Apellido 2: " + texto3 + 
		"\n la abreviatura es: " + textof123 +
		"\n la abreviatura en mayusculas es: " + textomay);		

	
	}
// substring(inicio, fin) Extrae caracteres de una cadena entre 2 indices dados
function subCad2() {
	var texto = prompt("introduce nombre y apellidos: ");
	var var1 = texto.indexOf(" ",0);// busca 1er espacio desde el principio
	var texto1 = texto.substring(0,var1);// desde posicion 0 hasta var1
	
	var var2 = texto.indexOf(" ",var1+1);// busca 2do espacio desde el primer espacio+1
	var texto2 = texto.substring(var1+1,var2);//desde var1+1 hasta var2	
	
	var texto3 = texto.substring(var2+1);//desde var2+1 hasta fin

// alert con la primera letra en mayusculas y el resto de la palabra en minusculas	
	alert (" El texto introducido es : " + texto +
		"\n Nombre: " + "\"" + 
		texto1.substring(0,1).toUpperCase() + 
		texto1.substring(1).toLowerCase() + "\"" + 
		"\n Apellido 1: " + "\"" + 
		texto2.substring(0,1).toUpperCase() + 
		texto2.substring(1).toLowerCase() + "\"" + 
		"\n Apellido 2: " + "\"" + 
		texto3.substring(0,1).toUpperCase() + 
		texto3.substring(1).toLowerCase() + "\"");		

// otra forma de hacer el alert con la primera letra en mayusculas y el resto de la palabra en minusculas	
	alert (" El texto introducido es : " + texto +
		 "\n" + "convertido : \n" + 
		texto1.substring(0,1).toUpperCase().concat(texto1.substring(1).toLowerCase()," ",
		texto2.substring(0,1).toUpperCase(),texto2.substring(1).toLowerCase()," ",
		texto3.substring(0,1).toUpperCase(),texto3.substring(1).toLowerCase())
		);		
	}
// toString()
function matriz2Cad() {
	var paises = ["España","Alemania","Francia","Italia"];
	var cadena = paises.toString();
	alert("La variable paises es de tipo: " + typeof(paises) + "\n" +
	"var paises = " + "[\"" + paises[0] + "\"" +  
	                  "\"" + paises[1] + "\"" + 
					  "\"" + paises[2] + "\"" + 
					  "\"" + paises[3] + "\"];" + "\n" +
	"La variable cadena ahora es de tipo: " + typeof(cadena) + "\n" +
	"var paises = " + "\"" + paises + "\";");
		
	
	}
// slice() extrae partes de una cadena desde-hasta
function quitaEspacios() {
	var texto1 = prompt("introduce un correo electrónico con espacios por delante y por detras");
	var textof = texto1.trim();//

	alert ("El correo completo es: " + "\"" + texto1 +  
		"\n el usuario es: " + usuario + 
		"\n el dominio es: " + dominio +
		"\n la extension es: " + extension + "\"" + 
		"\n la variable frase despues: " + textof);		

	
	}
	