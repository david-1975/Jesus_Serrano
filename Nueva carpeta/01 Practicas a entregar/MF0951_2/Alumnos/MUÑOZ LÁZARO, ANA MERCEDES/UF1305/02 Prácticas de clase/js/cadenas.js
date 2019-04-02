// JavaScript Document
//Metodo length
function longitud (){
		var frase= prompt("Por favor, introduce una frase de al menos 3 palabras");
		var obtener= frase;
	  var largo= obtener.length;
	  alert("La frase tiene: " + largo + " caracteres");
					}
//Metodo charAt
function posicion(){
	var palabra= prompt("Por favor, escribe una palabra");
	var largo= palabra.length; //esto nos da un número
	var numero= prompt("Por favor introduce un número entre el 0 y el "+ largo);
	var numeroPosicion= palabra.charAt(numero-1);
	alert("El cararter que se encuentra en la posición " + numero + " es " + numeroPosicion);
}
//Metodo charCodeAt()----------------------------------------
function caractercode(){
	var caracter= prompt("Por favor, escribe un caracter");
	var numero= caracter.charCodeAt(0);
	alert("El código unicode del caracter " + caracter + " es " + numero);
}
//Metodo fromCharCode()-----------------------------------------
function caracterunicode(){
	var numero= prompt("Por favor, introduce un número del 32 al 126");// se pone el número 33
	var entero= parseInt(numero);// parseInt convierte el tipo a número
	//var tipo= typeof(entero); para comprobar 
	//alert(tipo);  //para comprobar que lo convierte a número---------------
	var code= String.fromCharCode(entero); 
	alert("El número " + numero + " corresponde al caracter " + code);  
	
	}

//Método toUpperCase()----------------------------------------
function mayusculas(){
	var palabra= prompt("Escribe una frase en minúsculas");
	var frase= palabra.toUpperCase();
	alert(frase);
	
}
//Método toLowerCase()----------------------------------------
function minusculas(){
	var palabra= prompt("Escribe una frase en mayusculas");
	var frase= palabra.toLowerCase();
	alert(frase);
	
}
//Método concat()----------------------------------------
function concatenar(){
	var nombre= prompt("Por favor, escribe tu nombre");
	var apellido= prompt("Por favor, escribe tu apellido");
	var datos= nombre.concat(" " + apellido);
	alert("Tu nombre completo es " + datos);
	
}
//Metodo endsWith()-------------------------------------
function terminacion (){
	var frase=prompt( "Escribe una frase que termine en punto");
	var final= frase.endsWith(".");
	alert("¿La frase termina con un punto? " + final);
}

//Metodo includes()---------------------------------------
function incluido (){
	var frase= prompt("Escribe tu correo");
	var final= frase.includes("@");
	alert("¿Esta bien escrito tu correo? " + final);
	
}
//Método indexOf()--------------------------------------------
function indexposicion () {
	var frase= prompt("Escribe tu correo electrónico");
	var posicion= frase.indexOf('@');
	alert("El nombre del dominio tiene un ancho de : "+ posicion + " caracteres" );
}
//Método lastindexOf()----------------------------------------
function indexposicionult() {
	var frase= prompt("Escribe una frase");
	var posicion= frase.lastIndexOf('a');
	alert("La última a escrita ocupa el lugar "+ posicion );
}
//Metodo localeCompare()-----------------------------------
function comparardos(){
	var frase= prompt("introduce tu contraseña");
	var comprueba= prompt("repite tu contraseña");
	var final= frase.localeCompare(comprueba);
	alert(final);
}
//Metodo match()-------------------------------------------
function separacomas(){
	var telefono= prompt("Por favor, escribe tu telefono con nueve cifras");
	var indice= telefono.match(/[0-9]/g);
	alert("El número de teléfono " + telefono + " contiene estos números " + indice);
}
//Metodo repeat()-----------------------------------
function repetir (){
	var frase= prompt(" Por favor, saluda");
	var final= frase.repeat (3);
	alert(final);
}
//Metodo replace()--------------------------------------------
function remplazar (){
	var frase= "Mi color favorito es el pistacho";
	var color= prompt("¿Cual es tu color favorito?");
	var final= frase.replace("pistacho",color);
	alert(final); 
}
//Método search()--------------------------------------------
function buscar () {
	var frase= prompt("escribe tu correo electronico");
	var busqueda= frase.search(/@/);
	var punto =frase.search(/\./);
	if (busqueda === -1){
		alert("No has escrito el correo corectamente, falta la @");	}
	else if (punto=== -1){
		alert("No has escrito el correo corectamente, falta el punto");}
	else{alert("La @ está en la posición: "+ busqueda );}
	}


//Método slice()----------------------------------------
function extraer() {
	var frase= prompt("escribe tu correo electronico");
	var busqueda= frase.search(/@/);
	var punto =frase.search(/\./);
	var final= frase.slice(-punto+1,-busqueda+1);
	alert("El nombre de tu servidor es "+ final);
}
//Método split()-------------------------------------------
function dividir(){
	var frase= prompt("Escribe tu nombre y apellidos");
	var final= frase.split("");
	alert(final);
					  
}
//Metodo startsWith()----------------------------------------------
function empieza (){
	var frase=prompt( "Escribe una frase que empiece en punto");
	var final= frase.startsWith(/\./);
	alert("¿La frase empieza con un punto? " + final);
} // no funciona comprobar

//Método substr()----------------------------------------------
function sumaextraer() {
	var frase= prompt("escribe tu correo electronico");
	var busqueda= frase.search(/@/);
	var punto =frase.search(/\./);
	var dominio= frase.substring(busqueda+1,punto+1);
	var suma= dominio.length;
	var final=frase.substr(busqueda+1,suma);
	alert("El nombre de tu servidor es "+ final);
}
//Método substring()----------------------------------------------
function subextraer() {
	var frase= prompt("escribe tu correo electronico");
	var busqueda= frase.search(/@/);
	var punto =frase.search(/\./);
	var final= frase.substring(busqueda+1,punto+1);
	alert("El nombre de tu servidor es "+ final);
} // es igual que slice pero no admite valores negativos.
