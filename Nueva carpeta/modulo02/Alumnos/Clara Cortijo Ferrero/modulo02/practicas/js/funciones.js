// JavaScript Document

//Método length()

function longitud() {
	var frase = prompt("Introduce una frase con al menos 3 palabras:") ;
	var obtener = frase;
	var largo = obtener.length;
    alert("La frase tiene: " + largo + " caracteres");
	
	}
	
	
//Método charAt()

function posicion() {
	var palabra = prompt("Introduce una palabra, cojones ya:");
	var obtener = palabra.length;
	var total = obtener -1;
	var pos = prompt("Por favor, introduce una posición de 0 al " + total);
	var str = palabra.charAt(pos);
	alert("Esa posición corresponde a la letra: " + palabra[pos]);
		
	
	}
	
	
	
//Método charCodeAt()

function ascii() {
	var letra = prompt("Introduce un caracter, por favor:");
	alert("El código ascii de ese caracter es: " + letra.charCodeAt());
		
	
	}
	
	
	
//Método fromCharCode()

function codecaracter() {
	var numero = prompt("Introduce un número del 32 al 126:");
	var numentero = parseInt(numero);
	//alert(typeof(numentero));
	var code = String.fromCharCode(numentero);
	alert("El caracter de ese Unicode es: " + code);
	
		
	
	}
	
	
	
// toUpperCase();

function mayusculas() {
	var texto = prompt('Introduce un texto para pasarlo a mayúsculas:')
	var textomayus = texto.toUpperCase();
	alert(textomayus);
	
	
	}
	
	
	
	
// toLowerCase();

function minusculas() {
	var texto = prompt('Introduce un texto en mayúsculas:')
	var textominus = texto.toLowerCase();
	alert(textominus);
	
	
	}
	
	
	
// concat();

function concatenar() {
	var texto1 = prompt('Introduce la primera cadena:')
	var texto2 = prompt('Introduce la segunda cadena:')
	var texto3 = texto1.concat(" ",texto2);
	alert(texto3);
	
	
	}
	
	
	
	
	
// endsWith();

function terminacon() {
    var frase = prompt("Por favor, introduce una frase que termine con un punto");
	var final = frase.endsWith(".");
	alert("¿Termina la frase con un punto? " + final);
	
	
	}
	
	
//includes()
/*	function incluye() {
    var correo = prompt("Por favor, introduce un correo electrónico");
	var incluir = correo.includes("@");
	alert("¿Tiene arroba? " + incluir);
	
	
	}*/
	
	
	
//metodo includes()

function incluye() {
	
	var frase = prompt("Por favor, introduce una frase");
	var palabra = prompt("Ahora, introduce una palabra que hayas escrito en la frase");
	var incluir = frase.includes(palabra);
	alert("¿La frase introducida incluye la palabra " + "\"" + palabra + "\"" + "?: "+ incluir +"\n" 
	+ "Compruébalo:" + "\n \""+frase + "\"");
	
}



//metodo indexOf()

function indicede() {
	
	var frase = prompt("Por favor, introduce una frase");
	var palabra = prompt("Ahora, introduce la palabra cuyo índice quieres conocer");
	var indice = frase.indexOf(palabra);
	var longitud = palabra.length;
	var final = indice + (longitud-1);
	alert("La palabra " + "\"" + palabra + "\"\n" + "empieza en la posición: "+ indice + " y acaba en la posición: " 
	+ final + "\n" + "Comprúebalo:" + "\""+ frase + "\"");
	
}



//metodo lastindexOf()

function ultimoindicede() {
	
	var frase = prompt("Por favor, introduce una frase");
	var palabra = prompt("Ahora, introduce la palabra cuyo índice quieres conocer");
	var indice = frase.lastIndexOf(palabra);
	var longitud = palabra.length;
	var final = indice + (longitud-1);
	alert("La palabra " + "\"" + palabra + "\"\n" + "empieza en la posición: "+ indice + " y acaba en la posición: " 
	+ final + "\n" + "Comprúebalo:" + "\""+ frase + "\"");
	
}


//metodo localeCompare()

function comparar() {
	
	var palabra1 = prompt("Introduce una palabra");
	var palabra2 = prompt("Ahora, introduce otra palabra");
	var indice = palabra1.localeCompare(palabra2);
	if (indice === 1) { alert("La palabra" + "\"" + palabra1 + "\"" + 
	 "está situada alfabéticamente detrás de la palabra " + "\"" + palabra2 + "\"" + "\n" + 
	 "Compruébalo:"+"\n"+" 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")}
	 
	 else if (indice === -1){alert("La palabra" + "\"" + palabra1 + "\"" + 
	 "está situada alfabéticamente antes de la palabra " + "\"" + palabra2 + "\""+ "\n" + 
	 "Compruébalo:"+"\n"+" 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")}
	
     else {alert("La palabra" + "\"" + palabra1 + "\"" + 
	 "y la palabra " + "\"" + palabra2 + "\"" + "son iguales.")}
}





// Expresion 

//^[a-z0-9!#$%&'*+/=?^_`{|}--]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}--]+)*@

//metodo match

function coincidencia(){
	var frase = prompt("Por favor, introduce tu número de teléfono");
	var indice = frase.match(/[ab+c]/g); //[A-Za-z0-9]
	alert("El número de teléfono" + "\"" + frase +"\"\n" + "Contiene estos números:" +
	indice + "\n" + "Compruébalo:" + "\n\"" + frase + "\"");
	
	}
	
	
	
//metodo repeat	
	
function repetir(){
	var pais = prompt("Por favor, introduce tu país");
	var separador = prompt("Por favor, introduce un separador");
	var veces = prompt("Por favor, introduce un número de veces");
	
	var paisseparador = pais + separador;
	var repeticion = paisseparador.repeat(veces);
	alert("La palabra " + "\""+ pais + "\""+ " va a ser repetida "+ veces+ " veces"+ "\n" + repeticion);
	

}
	
	
	
//metodo replace

function reemplazar() {
	var frase = prompt("Introduce una frase con un color feo");
	var color1 =prompt("Introduce el color que has introducido");
	var color2=prompt("Introduce el nuevo color, tu favorito");
	var fraserem =frase.replace(color1,color2);
	
    alert("La frase inicial era: " + frase + "\n"+ "La frase reemplazada es: " + fraserem);
	
	}
	
	
	
//metodo search

function buscar(){
	var ce = prompt("Introduce tu correo electronico");
	var busqueda = ce.search(/@/);
	//var punto = ce.search(/\./);
	var puntodelante = ce.indexOf(".",busqueda);
	//var puntodetras = ce.lastIndexOf(".",busqueda);
	//var arrobapunto = ce.search(/[?*@??*\.?*]/);
	
	if (busqueda === -1) { alert("Falta el carácter @");
		}
		
	else if (puntodelante === -1) {alert("Falta el carácter .");}
	
	else {alert("La @ está en la posición: " + busqueda + "\n"+ "y el punto está en la posición: " + puntodelante + 
	"\n" + "El correo introducido es correcto, compruébalo: " +"\n" + ce);}
		
	
	
	}
	
	
//metodo slice

function extraer(){
	var ce = prompt("Introduce tu correo electronico");
	var busqueda = ce.search(/@/);
	//var punto = ce.search(/\./);
	var punto = ce.indexOf(".",busqueda);
    var usuario =  ce.slice(0,busqueda);
	var dominio = ce.slice(busqueda+1,punto);
	var extension = ce.slice(punto+1);
	
alert("Tu correo es: " + ce + "\n" +
"Tu usuario es: " + usuario + "\n" +
"Tu dominio es: " + dominio + "\n" + 
"La extensión es: " + extension);	
	
	}
	

//metodo split

function cortar(){
	var frase = prompt("Introduce 5 colores separados por un espacio, punto o guión");
	var convertir = frase.split(" ") || frase.split(", ") || frase.split(".") || frase.split("-");
	alert("La matriz que se ha creado es la siguiente" + "\n" + "var array = [" + convertir + "]");
	}
	
	
	
	
//metodo startsWith

function comienzacon(){

	var frase = prompt("Por favor, introduce una dirección web");
	var comienza = frase.startsWith("www") || frase.startsWith("http");
	alert("¿Empieza la frase con http o www? " + comienza);
	
	if (comienza === false) {
		alert("Revisa la dirección, no empieza por " + "\""+ "www" +"\""+ " ni "+"\""+" http"+"\""+"\n"+"Compruébalo:"+
		"\n"+frase)
		}
		
		else {alert("La dirección está correctamente escrita." + "\n"+ "Compruébalo:" + "\n"+frase)};
	
	
	}
	
	
//metodo substr()

function extraestring() {
	var frase1 = prompt("Por favor, introduce tu nombre");
	var frase2 = prompt("Por favor, introduce tu primer apellido");
	var frase3 = prompt("Por favor, introduce tu segundo apellido");
	
	var subfrase1 = frase1.substr(0,3);
	var subfrase2 = frase2.substr(0,3);
	var subfrase3 = frase3.substr(0,3);
	
	var sub1mayus = subfrase1.toUpperCase();
	var sub2mayus = subfrase2.toUpperCase();
	var sub3mayus = subfrase3.toUpperCase();
	
	alert("Tu nombre abreviado es: " + "\n" + "\""+sub1mayus+"\"" + "\""+sub2mayus+"\"" +"\""+ sub3mayus+"\"");
	

	
	}
	
	
//metodo substring

function subcadena() {
	var frase=prompt("Introduce tu nombre y tus apellidos");
	
	//var pripunto = frase.indexOf(" ");
	//var ultpunto = frase.lastIndexOf(" ");
	//var nombre = frase.substring(0,pripunto);
	//var apellido1 = frase.substring(pripunto+1,ultpunto+1);
	//var apellido2 =frase.substring(ultpunto+1); 
	
	var pripunto = frase.indexOf(" ");
    var ultpunto = frase.indexOf(" ",pripunto+1);
	var nombre = frase.substring(0,pripunto);
	var apellido1 = frase.substring(pripunto+1,ultpunto);
	var apellido2 =frase.substring(ultpunto+1); 
	
	/*alert("Nombre: " + "\""+nombre +"\""+ "\n" + "Primer apellido: " + "\""+ apellido1+"\"" + "\n" + "Segundo apellido: "+ "\""+apellido2+"\"");*/
	
	//var priletnom = (nombre.substr(0,1)).toUpperCase();
	//var restonom = nombre.substr(1);
	//var priletape1 = (apellido1.substr(0,1)).toUpperCase();
	//var restoape1 = apellido1.substr(1);
	//var priletape2 = (apellido2.substr(0,1)).toUpperCase();
	//var restoape2 = apellido2.substr(1);
	//alert(priletnom+restonom+"\n"+priletape1+restoape1+"\n"+priletape2+restoape2);
	
	var priletnom = (nombre.substr(0,1)).toUpperCase();
	var nombrenew =priletnom.concat((nombre.substr(1)).toLowerCase());
	var priletape1 = (apellido1.substr(0,1)).toUpperCase();
	var ape1new = priletape1.concat((apellido1.substr(1)).toLowerCase());
	var priletape2 = (apellido2.substr(0,1)).toUpperCase();
	var ape2new = priletape2.concat((apellido2.substr(1)).toLowerCase());
	
	//alert(nombre+"\n"+apellido1+"\n"+apellido2);
	alert(nombrenew+"\n"+ape1new+"\n"+ape2new);
	
	
	}
	
	
	
//metodo toString

function acadena(){
	var paises = ["España","Alemania","Francia","Italia"];
	var cadena = paises.toString();
	
	alert("La variable países es de tipo: " + typeof(paises) + "\n" + "var paises ="+"[\""+paises[0]+"\","+
	"\""+paises[1]+"\","+ "\""+paises[2]+"\","+"\""+paises[3]+"\"];"+ "\n"+ "\n"+
	
	"La variable cadena ahora es de tipo: "+typeof(cadena)+"\n"+"var cadena ="+"\""+cadena+"\";");
	
	

	
	}
	
	
	
//metodo trim

function sinespacios(){
	var frase=prompt("Introduce tu email con espacios por delante y por detrás")
	var quitarespacios=frase.trim();
	
	alert("La frase antes: " + "\"" + frase + "\"\n" + 
	"La frase ahora: " + "\""+ quitarespacios + "\"");
	
	}
