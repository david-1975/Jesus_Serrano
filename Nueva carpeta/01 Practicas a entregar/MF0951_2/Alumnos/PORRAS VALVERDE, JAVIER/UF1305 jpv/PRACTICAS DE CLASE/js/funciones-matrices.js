// JavaScript Document
function matriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce un color");
	var color3 = prompt("Introduce un color mas");
	
	var colores = ("\"" + color1 + "\"," +
				   "\"" + color2 + "\"," +
				   "\"" + color3 + "\"," );
	
	var crearMatriz = new Array(color1,color2,color3);
				   
	alert ("Se ha creado la variable color1 : " + color1 + "\n" +
		   "Se ha creado la variable color2 : " + color2 + "\n" + 
		   "Se ha creado la variable color3 : " + color3 + "\n" +
		   "Se ha creado la matríz colores : " + "[" + colores + "]" + "\n" +
		   "La matriz es del tipo " + typeof (crearMatriz) + "\n" +
	       "la matriz contiene " + crearMatriz.length + " valores."
	);
}

function cadenaAmatriz (){
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	var frutas = [ fruta1,fruta2,fruta3 ];
	 alert("matriz frutas = " + "[" + frutas + "]");
	var cadenaFrutas = frutas.toString() ;
	alert("La matriz frutas es ahora una cadena = " + cadenaFrutas);
	
}

function separadorMatriz (){
	
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	var frutas = [ fruta1,fruta2,fruta3 ];
	 alert("matriz frutas = " + "[" + frutas + "]");
	var caracter = prompt("introduce un caracter separador : ");
	var cadenaFrutas = frutas.join(caracter) ;
	alert("La matriz frutas es ahora una cadena con separadores especificos = " + cadenaFrutas);
	
	
}

function delElmMat(){
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	var frutas = [ fruta1,fruta2,fruta3 ];
	alert("De estas frutas tenemos que eliminar la ultima.");
	var fpop = frutas.pop();
	alert("Estas son las frutas que te quedan : " + frutas);
	
}

function andElmMat(){
	
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	var frutas = new Array(fruta1,fruta2,fruta3);
	
	var elgUnaMas = prompt("Elige una fruta mas que aparecera al final : ");
	
	var frutaMas = frutas.push(elgUnaMas);
	
	alert("Estas son todas las elegidas : " + frutas);
}

function del1ElmMat (){
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	var frutas = new Array(fruta1,fruta2,fruta3);
	
	alert("Estas son tus frutas : " + frutas);
	var elimina1Fruta = frutas.shift();
	alert("Estas son las que te quedan : " + frutas);
	
	
}

function andElmInc (){
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	var frutas = new Array(fruta1,fruta2,fruta3);
	
	var elgUnaMas = prompt("Elige una fruta mas que aparecera en primer lugar : ");
	
	var frutaMas = frutas.unshift(elgUnaMas);
	
	alert("Estas son todas las tus preferidas : " + frutas);
}
 function andElmat2 (){
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	var frutas = new Array(fruta1,fruta2,fruta3);
	var unafrutamas = prompt("añade una fruta mas");
	frutas[frutas.length] = unafrutamas;
	/*var total  = frutas;     es redundante*/
	alert("Este es el total de tus frutas : " + frutas );
	 
	
 }
function andEndElmat(){
	var fruta1 = prompt("Introduce un nombre de fruta :");
	var fruta2 = prompt("Introduce otro nombre de fruta :");
	var fruta3 = prompt("Introduce una mas :");
	
	
	var frutas = new Array(fruta1,fruta2,fruta3);
	
	var eliminaUna = prompt("Descarta la que menos te guste de todas : ");
	var frutaEliminada = frutas.indexOf(eliminaUna); 
	var eligeUnaZumo = prompt("Elige una que sirva para zumo : "); 
	frutas.splice(frutaEliminada,1 ,eligeUnaZumo );
	alert("Estas son las que quedarian : " + frutas);
		
}

function fusMat(){
	var frutas1 = prompt("Introduce una fruta : ");
	var frutas2 = prompt("introduce otra fruta : ");
	var frutas3 = prompt("introduce la ultima fruta : ");
	
	var frutas = new Array(frutas1,frutas2,frutas3);
	
	var bebida1 = prompt("introduce una bebida : ");
	var bebida2 = prompt("introduce otra bebida : ");
	var bebida3 = prompt("introduce otra bebida más : ");
	
	var bebidas = [bebida1,bebida2,bebida3];
	
	var frutaBeb = frutas.concat(bebidas);
	
	alert("Este es el conjunto de tu cesta : " + "\n"  + frutaBeb + "\n " + "compruebalo : " + "\n" +
	frutas + " " + bebidas );
	
	
	
}

function delEmtMat1(){
	
	var coche1 = prompt("Elige una marca de coches : ");
	var coche2 = prompt("Elige otra marca de coches : ");
	var coche3 = prompt("Elige una mas : ");
	
	var coches = [coche1,coche2,coche3];
	
	var descarte = prompt("descarta uno de los anteriores : " + coches );
	var of = coches.indexOf(descarte);
	alert("esto es " + of);
	
	/*var coches2 = coches.slice(of);
	alert("has eliminado : " + coches2);*/
	
}
