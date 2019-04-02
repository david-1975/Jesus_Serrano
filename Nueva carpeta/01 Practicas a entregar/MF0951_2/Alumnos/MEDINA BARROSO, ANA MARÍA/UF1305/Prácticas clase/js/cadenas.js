// JavaScript Document
//function miFuncion() {
//document.getElementById('demo3').innerHTML = "Párrafo cambiado.";
//document.getElementById('demo3').style.color = "blue";
//}

function longitud() {
	var texto = prompt('Introduce un texto de al menos 3 palabras');
	var salida = texto.length;
	window.alert('La longitud de este texto es: '+ salida)
}
function caracter() {
	var texto = prompt('Introduce un texto');
	var longitud = texto.length
	var posicion = prompt ('Introduce el número del carácter a mostrar (entre 1 y ' +longitud + ' )' )
	var resultado = texto.charAt(posicion-1);
	window.alert('El cáracter que está en la posición ' + posicion + ' es: ' + resultado );
}
function caractercode() {
	var texto = prompt('Introduce un texto');
	var posicion = prompt ('Introduce el número del carácter (mostraré su código):')
	var resultado = texto.charCodeAt(posicion);
	window.alert('El cáracter que está en la posición ' + posicion + ' es: ' + resultado );
}

function codigoacaracter() {
	var codigo=prompt('Introduce un número y te diré que carácter es :');
	var resultado=String.fromCharCode(codigo);
	window.alert('El número ' + codigo + ' corresponde al caracter : ' + resultado);
}

function mayusculas() {
	var texto = prompt('Introduce un texto (lo convertiré a mayúsculas): ');
	window.alert(texto.toUpperCase());
}

function minusculas() {
	var texto = prompt('Introduce un texto en mayúsculas(lo convertiré a minusculas): ');
	window.alert(texto.toLowerCase());
}
	
function unir() {
	var texto = prompt('Introduce una palabra : ');
	var texto2 = prompt('Introduce otra palabra : ');
	window.alert(texto.concat(' ' + texto2));
}

function terminacion() {
	var texto = prompt('Introduce un texto : ');
	var texto2 = prompt('Introduce una palabra (¡Vamos a ver si es la última que has tecleado !) : ');
	window.alert(texto.endsWith(texto2));
	//Hacer un if para true o false que indique que palabra ha introducido
}
function incluido(){
	var texto = prompt('Introduce un texto : ');
	var texto2 = prompt('Introduce una palabra (¡Vamos a ver si la has tecleado !) : ');
	window.alert(texto.includes(texto2));
}
function primera(){
	var texto = prompt('Introduce un texto con palabras repetidas: ');
	var buscar = prompt('Introduce la palabra a buscar');
	var resultado= texto.indexOf(buscar);
	window.alert(resultado);	
	}

function ultima(){
	var texto = prompt('Introduce un texto con palabras repetidas: ');
	var buscar = prompt('Introduce la palabra a buscar');
	var resultado= texto.lastIndexOf(buscar);
	window.alert(resultado);	
	}
function repite() {
	var texto = prompt('Introduce una palabra');
	var texto2= texto + " ";
	var repetir = prompt ('¿Cuantas veces quieres que la repita?:');
	var resultado= texto2.repeat(repetir);
	window.alert(resultado);	
}
function reemplaza() {
	var texto = "Hola AMIGO"
	var nombre = prompt('Hola AMIGO \n Cual es tu nombre? ');
	var resultado = texto.replace("AMIGO", nombre);
	window.alert(resultado);
	}
function busca(){
	var texto = "\"PRIMERA PARTE. EL CASTILLO DE IF " +"\n" +"Capítulo primero. Marsella. La llegada" + "\n" + "El 24 de febrero de 1815, el vigía de Nuestra Señora de la Guarda dio la señal de que se hallaba a la vista el bergantín El Faraón procedente de Esmirna, Trieste y Nápoles. Como suele hacerse en tales casos, salió inmediatamente en su busca un práctico, que pasó por delante del castillo de If y subió a bordo del buque entre la isla de Rión y el cabo Mongión. En un instante, y también como de costumbre, se llenó de curiosos la plataforma del castillo de San Juan, porque en Marsella se daba gran importancia a la llegada de un buque y sobre todo si le sucedía lo que al Faraón, cuyo casco había salido de los astilleros de la antigua Focia y pertenecía a un naviero de la ciudad.\"";
	var palabra = prompt("\n ESCRIBE LA PALABRA QUE QUIERES BUSCAR EN ESTE TEXTO  \n Y TE DARÉ SU POSICIÓN \n" + texto);
	var resultado = texto.search(palabra);
	alert("La palabra "+ palabra + " está en la posición " +resultado);
}

function cortar() {
	var texto = prompt('Introduce tu correo electrónico:');
	var tamaño= texto.length;
	var arroba= texto.search("@");
	var punto= texto.search(/\./);
	var usuario = texto.slice(0, arroba);
	var dominio = texto.slice(arroba+1, punto);
	var extension = texto.slice(punto+1, tamaño);
	alert("Tu correo es : " + texto+ "\n" +
		 "Tu usaurio es : " + usuario + "\n" + 
		 "El dominio es : " + dominio + "\n" +
		 "Y la extensión es : " + extension );
	}

function divide(){
	var texto = prompt('Introduce un texto:');
	var resultado = texto.split(" ");
	alert("Estas son las palabras que has escrito: "+ "\n"+ resultado );
	}

function comienza(){
	var texto = prompt('Escribe Hola :');
	var resultado = texto.startsWith("Hola");
	if (resultado===true){
		alert("Muy bien");
	}else {
		alert("No has escrito Hola");
	}
	var texto = prompt('Escribe Adios :');
	var resultado = texto.startsWith("Adios");
	if (resultado===true){
		alert("Muy bien");
	}else {
		alert("No has escrito Adios");
	}
}

function substrae(){
	var correo = prompt('Escribe tu correo :');
	var tamaño= correo.length;
	var punto= correo.search(/\./);
	var posicion = tamaño-punto;
	alert(posicion);
	var part1 = nombre.substr(-length,-posicion);
	alert(part1)
	var part2 = apellido1.substr(0,3);
	var part3 = apellido2.substr(0,3);
	confirm("Tu nombre de usuario será :" +part1+part2+part3+"\n"+
		   "Estas de acuerdo?");
}
function substrae2(){
	var nombre = prompt('Escribe tu nombre :');
	var apellido1 = prompt('Escribe tu primer apellido :');
	var apellido2 = prompt('Escribe tu segundo apellido :');
	var part1 = nombre.substring(0,3);
	var part2 = apellido1.substring(0,3);
	var part3 = apellido2.substring(0,3);
	confirm("Tu nombre de usuario será :" +part1+part2+part3+"\n"+
		   "Estas de acuerdo?");
}
function borraespacio(){
	var texto = "           Este texto tiene muchos espacios en blanco                 ";
	alert(texto)
	var resultado=texto.trim();
	alert("Hemos quitado los espacios en blanco del principio y del final :"+ "\n"+ resultado);
}
function busca2(){
	var texto="\"La lluvia en una villa de Sevilla es una pura maravilla\""
	var resultado = texto.match(/villa/g);
	alert("Del texto : " +texto + "\n" +
		  "la cadena \"villa\" se repite: " +resultado);
}