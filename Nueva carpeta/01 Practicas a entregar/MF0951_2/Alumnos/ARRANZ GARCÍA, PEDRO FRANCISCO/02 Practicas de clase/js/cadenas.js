// JavaScript Document

//Método length()
function longitud () {
	var frase = prompt("Introduce una frase");
	var largo=frase.length;
	alert ("la frase tiene: " + largo + " caracteres");
}

//Método charAt()
function posicion () {
	var frase = prompt("Introduce una frase");
	var posicion5=frase.charAt(5);
	alert ("El 5º caracter de la frase introducida es: " + posicion5 + ".");
}

//Método charCodeAt()
function posicioncode () {
	var frase = prompt("Introduce una frase");
	var posicion6=frase.charCodeAt(5);
	alert ("El 6º caracter de la frase introducida es (en unicode): " + posicion6 + ".");
}

//Método fromCharCode ()
function caractercode () {
	var codigo = prompt("Introduce un código unicode");
	var posicion=String.fromCharCode(codigo);
	alert ("El código unicode corresponde al caracter: " + posicion + ".");
}

//Método toUpperCase ()
function mayusculas () {
	var frase = prompt("Introduce una frase en letras minúsculas.");
	var mayusculas=frase.toUpperCase()	
	alert ("La frase que has introducido en minúsculas, en mayúsculas sería: " + mayusculas + ".");
}

//Método toLowerCase ()
function minusculas () {
	var frase = prompt("Introduce una frase en mayúsculas.");
	var minusculas=frase.toLowerCase()	
	alert ("La frase que has introducido en mayúsculas, en minúsculas sería: " + minusculas + ".");
}

//Método concat ()
function concatenar () {
	var frase1 = prompt("Introduce una frase.");
	var frase2 = prompt("Introduce otra frase.");
	var concat=frase1.concat(" " + frase2);	
	alert ("Si unimos las dos frases que has introducido, resulta esto: " + concat + ".");
}

//Método endsWith ()
function comprobarfinal () {
	var frase = prompt("Introduce una frase.");
	var comp_fin=frase.endsWith("lunes");	
	alert ("¿Termina la frase introducida con la palabra 'lunes'?" + comp_fin);
}

//Método indexOf ()
function indice () {
	var frase = prompt("Introduce una frase.");
	var busca = prompt("Introduce una cadena a buscar en la frase introducida.");
	var pos_indice = frase.indexOf(busca);	
	alert ("La cadena " + busca + " aparece en la posición " + pos_indice+ " de la frase.");
}

//Método LastIndexOf ()
function ultimoindice () {
	var frase = prompt("Introduce una frase.");
	var busca = prompt("Introduce una cadena a buscar en la frase introducida.");
	var pos_indice = frase.lastIndexOf(busca);	
	alert ("La cadena " + busca + " aparece por última vez en la posición " + pos_indice+ " de la frase.");
}

//Método LocaleCompare ()
function compara_local () {
	var palabra1 = prompt("Introduce una palabra.");
	var palabra2 = prompt("Introduce otra palabra.");
	var compara = palabra1.localeCompare(palabra2);	
	if (compara==-1) {
		alert (palabra1 + " está alfabéticamente por delante de " + palabra2);
	}
	else if (compara==1) { 
		alert (palabra1 + " está alfabéticamente por detrás de " + palabra2);}
	else {
		alert ("Las dos palabras que has introducido son iguales");}
}

//Método match ()
function busca_copias () {
	var frase1 = prompt("Introduce una frase.");
	var cadena = prompt("Introduce una cadena a buscar.");
	var exp = new RegExp(cadena, 'gi');
	var resultado = frase1.match(exp);	
	alert (resultado);
}

//Método repeat ()
function repetir () {
	var frase1 = prompt("Introduce una frase corta.");
	var resultado = (frase1+" ").repeat(3);	
	alert (resultado);
}

//Método replace ()
function reemplazar () {
	var frase1 = prompt("Introduce una frase corta con la palabra amor.");
	var res = frase1.replace("amor", "odio");
	alert (res);
}

//Método search ()
function buscar () {
	var frase1 = prompt("Introduce una frase.");
	var frase2 = prompt("Introduce una cadena a buscar.");
	var res = frase1.search(frase2);
	alert ("La cadena " + frase2 + " aparece en la posición " + res + " de la frase.");
}

//Método slice ()
function extraer () {
	var frase1 = prompt("Introduce una frase.");
	var pos1 = prompt("Introduce la posición inicial para la búsqueda.");
	var pos2 = prompt("Introduce la posición final para la búsqueda.");
	/*if pos2 < pos1 {
		 var pos2=prompt("La posición final debe ser mayor que la inicial. Introduce una nueva posición final");
	}
	else if pos1==null||pos2==null {
		var pos1 = prompt("Introduce una posición inicial para la búsqueda.");
		var pos2 = prompt("Introduce la posición final para la búsqueda.");
	}*/
	var res = frase1.slice(pos1, pos2);
	alert ("La cadena que empieza en la posición" + pos1 + " y termina en la posición " + pos2 + " es esta:" + res);
}

//Método slice ()
function dividir () {
	var frase1 = prompt("Introduce una frase.");
	var cadena = prompt("Introduce la cadena donde se hará la división de caracteres.");
	var res = frase1.split(cadena);
	alert (res);
}

//Método substr ()
function substr () {
var frase1 = prompt("Introduce una frase.");
	var pos1 = prompt("Introduce la posición inicial para la búsqueda.");
	var pos2 = prompt("Introduce la posición final para la búsqueda.");
	var res = frase1.substr(pos1, pos2);
	alert ("La cadena que empieza en la posición" + pos1 + " y termina en la posición " + pos2 + " es esta:" + res);
}

//Método substr ()
function substring () {
var frase1 = prompt("Introduce una frase.");
	var pos1 = prompt("Introduce la posición inicial para la búsqueda.");
	var pos2 = prompt("Introduce la posición final para la búsqueda.");
	var res = frase1.substring(pos1, pos2);
	alert ("La cadena que empieza en la posición" + pos1 + " y termina en la posición " + pos2 + " es esta:" + res);
}

//Método toString ()
function tostring () {
var frase1 = prompt("Introduce una frase.");
	var res = frase1.toString();
	alert (res);
}


//Método trim ()
function noblancos () {
var frase1 = prompt("Introduce una frase.");
	var res;
	if (frase1==="" || frase1==null || frase1==" ") {
		frase1 = prompt("Introduce algo, so vago");
		res = frase1.trim();
		alert (res);
	}
	else {
	res = frase1.trim();
    alert (res);
		 }
}