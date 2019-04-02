// JavaScript Document
//new Array()
function matriz(){
	var color=prompt('Introduce un color');
	var colorDos=prompt('Introduce otro color');
	var colorTres=prompt('Introduce de nuevo otro color');
	
	var matriz=new Array("\""+color+"\"","\""+colorDos+"\"","\""+colorTres+"\"");
	alert('Se ha creado un Array con new Array que es: '+matriz+'\nCon sus variables'+'\nvar color='+color+'\nvar colorDos='+colorDos+'\nvar colorTres='+colorTres+'\nY es de tipo '+typeof(matriz)+'\nSu longitud es: '+matriz.length);
	var posicion= prompt("Escribe la posicion del array "+matriz+" que quieres que muestre");
	alert(matriz[posicion-1]);
}

//método push()
function anadir(){
	var fruta=prompt('Introduce una fruta');
	var frutaDos=prompt('Introduce otra fruta');
	var frutaTres=prompt('Introduce de nuevo otra fruta');
	
	var matriz=[fruta,frutaDos,frutaTres];
	alert('Tus frutas son: '+matriz+'\nSon '+matriz.length+' elementos'+'\nY es de tipo: '+typeof(matriz));
	
	var frutaCuatro=prompt('¿Quieres añadir una  más?: ');
	matriz.push(frutaCuatro);
	alert('Tus frutas son: '+matriz+'\nSon '+matriz.length+' elementos'+'\nY es de tipo: '+typeof(matriz));
}

//método concat()
function concatenar(){
	
	var fruta=prompt('Introduce una fruta');
	var frutaDos=prompt('Introduce otra fruta');
	var frutaTres=prompt('Introduce de nuevo otra fruta');
	
	
	var frutac=prompt('Introduce cuantas '+fruta+'s quieres');
	var frutaDosc=prompt('Introduce cuantas '+frutaDos+'s quieres');
	var frutaTresc=prompt('Introduce cuantas '+frutaTres+'s quieres');
	
	var frutas=[fruta,frutaDos,frutaTres];
	var cantidades=[frutac,frutaDosc,frutaTresc];
	
	alert('Se ha creado opr un lado un array con: '+frutas+'\nSon '+frutas.length+' elementos'+' y es de tipo '+typeof(frutas)+ 'Y otra array con el precio de cada una que son: '+cantidades+'\nSon '+cantidades.length+' elementos'+' y es de tipo '+typeof(cantidades)+'\nAl concatenarlo nos queda: '+frutas.concat(cantidades));
	
}

//propiedad constructor

function sintaxis(){
	var fruta=prompt('Introduce una fruta');
	var frutaDos=prompt('Introduce otra fruta');
	var frutaTres=prompt('Introduce de nuevo otra fruta');
	
	var matriz=[fruta,frutaDos,frutaTres];
	alert('Tus frutas son: '+matriz+'\nSon '+matriz.length+' elementos'+'\nY es de tipo: '+typeof(matriz)+'\nY el constructor nos indica que su sintaxis es: \n'+matriz.constructor);
	


}

//método toString()
function texto(){
	var numero=prompt('Introduce un número');
	var numeroDos=prompt('Introduce otro número');
	var numeros=[numero,numeroDos]
	alert('Los números introducidos son: '+numeros+'\nY es de tipo: '+typeof(numeros)+'\nAl dar a aceptar convertimos el tipo object en tipo cadena');
	var numeros=numeros.toString();
	alert('Ahora es de tipo: '+typeof(numeros));
	
}

//método join()
function textoDos(){
	var numero=prompt('Introduce un número');
	var numeroDos=prompt('Introduce otro número');
	var numeroTres=prompt('Introduce de nuevo otro número');
	var numeros=[numero,numeroDos,numeroTres]
	var caracter=prompt('Los números introducidos son: '+numeros+'\nY es de tipo: '+typeof(numeros)+'\nAl dar a aceptar convertimos el tipo object en tipo cadena y separamos el array con el caracter que introduzcas');
	var numeros=numeros.join(" "+caracter+" ");
	alert(numeros+' ahora es de tipo: '+typeof(numeros));
	
}

//método pop()
function eliminarUltimo(){
	var color=prompt('Introduce un color');
	var colorDos=prompt('Introduce otro color');
	var colorTres=prompt('Introduce de nuevo otro color');
	
	var matriz=new Array("\""+color+"\"","\""+colorDos+"\"","\""+colorTres+"\"");
	alert('Se ha creado un Array con new Array que es: '+matriz+'\nCon sus variables'+'\nvar color='+color+'\nvar colorDos='+colorDos+'\nvar colorTres='+colorTres+'\nY es de tipo '+typeof(matriz)+'\nSu longitud es: '+matriz.length);
	alert('Dale a aceptar si quieres que elimine el ultimo elemento');
	matriz.pop();
	alert('Ahora la matriz contiene: '+matriz+'\nSu longitud ahora es de: '+matriz.length);
	
}

//Método shift()
function eliminarPrimero(){
	var color=prompt('Introduce un color');
	var colorDos=prompt('Introduce otro color');
	var colorTres=prompt('Introduce de nuevo otro color');
	
	var matriz=new Array("\""+color+"\"","\""+colorDos+"\"","\""+colorTres+"\"");
	alert('Se ha creado un Array con new Array que es: '+matriz+'\nCon sus variables'+'\nvar color='+color+'\nvar colorDos='+colorDos+'\nvar colorTres='+colorTres+'\nY es de tipo '+typeof(matriz)+'\nSu longitud es: '+matriz.length);
	alert('Dale a aceptar si quieres que elimine el primer elemento');
	matriz.shift();
	alert('Ahora la matriz contiene: '+matriz+'\nSu longitud ahora es de: '+matriz.length);
	var posicion= prompt("Escribe la posicion del array "+matriz+" que quieres que muestre");
	alert(matriz[posicion-1]);
	
}

//Método unshift()
function anadirPrincipio(){
	var color=prompt('Introduce un color');
	var colorDos=prompt('Introduce otro color');
	var colorTres=prompt('Introduce de nuevo otro color');
	
	var matriz=new Array("\""+color+"\"","\""+colorDos+"\"","\""+colorTres+"\"");
	alert('Se ha creado un Array con new Array que es: '+matriz+'\nCon sus variables'+'\nvar color='+color+'\nvar colorDos='+colorDos+'\nvar colorTres='+colorTres+'\nY es de tipo '+typeof(matriz)+'\nSu longitud es: '+matriz.length);
	var nuevo=prompt('Introduce un nuevo color para introducirlo al principio');
	matriz.unshift(nuevo);
	alert('Se ha creado un Array con new Array que es: '+matriz+'\nCon sus variables'+'\nvar color='+nuevo+'\nvar color='+color+'\nvar colorDos='+colorDos+'\nvar colorTres='+colorTres+'\nY es de tipo '+typeof(matriz)+'\nSu longitud ahora es: '+matriz.length);
}

//método length
function anadirConlength(){
	var fruta=prompt('Introduce una fruta');
	var frutaDos=prompt('Introduce otra fruta');
	var frutaTres=prompt('Introduce de nuevo otra fruta');
	
	var matriz=[fruta,frutaDos,frutaTres];
	alert('Tus frutas son: '+matriz+'\nSon '+matriz.length+' elementos'+'\nY es de tipo: '+typeof(matriz));
	var nuevo=prompt('Introduce una nueva fruta para añadirla');
	matriz[matriz.length]=nuevo;
	
	alert('Tus frutas ahora son: '+matriz+'\nSon '+matriz.length+' elementos'+'\nY es de tipo: '+typeof(matriz));
	
	
}

//propiedad delete
function borrar(){
	var fruta=prompt('Introduce una fruta');
	var frutaDos=prompt('Introduce otra fruta');
	var frutaTres=prompt('Introduce de nuevo otra fruta');
	
	var matriz=[fruta,frutaDos,frutaTres];
	alert('Tus frutas son: '+matriz+'\nSon '+matriz.length+' elementos'+'\nY es de tipo: '+typeof(matriz));
	var quitar=prompt("Introduce la fruta que quieres eliminar de "+matriz);
	
	if(quitar===fruta){
		quitar=0;
	}else if  (quitar===frutaDos) {
		quitar=1;
	}else if(quitar===frutaTres){
		quitar=2;
	}
	
	
	var matriz=[fruta,frutaDos,frutaTres];
	delete matriz[quitar];
	
	
	alert(matriz);
	
	
}
//método splice()
function anadirConsplice(){
	var fruta=prompt('Introduce una fruta');
	var frutaDos=prompt('Introduce otra fruta');
	var frutaTres=prompt('Introduce de nuevo otra fruta');
	
	var matriz=[fruta,frutaDos,frutaTres];
	//alert("matriz es "+typeof(matriz));
	alert('Tus frutas son: '+matriz+'\nSon '+matriz.length+' elementos'+'\nY es de tipo: '+typeof(matriz));
	var anadir=prompt("Introduce frutas que quieras añadir");
	var sep=anadir.split(" ");
	
	
	//alert("sep "+sep+" "+typeof(sep)+" "+sep.length+" "+matriz);
	var posicion=prompt(matriz+"\nIndica la posición a partie de la cual se introducira");
	var eliminar=prompt(matriz+"\nIndica cuantos elementos a partir de la posicion quieres eliminar");
	var a=parseInt(posicion);
	var b=parseInt(eliminar);
	
	matriz.splice(a,b,sep);
	
	alert(matriz);
	
}

//método slice()
function rebanar(){
	var fruta=prompt('Introduce una fruta');
	var frutaDos=prompt('Introduce otra fruta');
	var frutaTres=prompt('Introduce de nuevo otra fruta');
	var matrizOriginal=[fruta,frutaDos,frutaTres];
	var matriz=[fruta,frutaDos,frutaTres];
	alert("Tus frutas son: "+matriz);
	var posicion=prompt('Introduce la posicion a partir de donde quieres que empiece a  rebanar\n'+matriz);
	var posicionHasta=prompt('Introduce la posicion hasta donde quieres que termine tu sección rebanada');
	var desde=parseInt(posicion);
	var hasta=parseInt(posicionHasta);
	var matrizDos=matriz.slice(desde,hasta);
	alert('El pack de frutas origina son: '+matrizOriginal+"\nY se ha modificado como: "+matrizDos);
}

//método sort()
function ordenar(){
	var mensaje=prompt("Introduce las frutas que quieras separadas por coma y espacio");
	var frutas=mensaje.split(", ");
	alert("Tus frutas son "+frutas +"\nContiene  "+frutas.length+" elementos"+"\nY es de tipo: "+typeof(frutas)+"\nAl dar a aceptar te lo ordeno alfabeticamente");
	alert("Ordenados alfabeticamente se queda como\n"+frutas.sort());
	var numero=parseInt(prompt("Introduce un número"));
	var numeroDos=parseInt(prompt("Introduce un segundo número"));
	var numeroTres=parseInt(prompt("Introduce un tercer número"));
	var numeroCuatro=parseInt(prompt("Introduce el último número"));
	var numeros=[numero,numeroDos,numeroTres,numeroCuatro];
	
	alert("Los números introducidos son: "+numeros+"\nSon de tipo: "+typeof(numeros)+"\nY contiene: "+numeros.length+" elementos"+"\nordenados de forma ascente se queda: ");
	numeros.sort(function(a,b){return a-b});
				 alert(numeros);
	numeros.sort(function(a,b){return b-a});
		alert("Y de forma descendente:\n"+numeros);
}

//método filter()
function filtro(){
	var edad=prompt("Introduce tu edad");
	var edadDos=prompt("Introduce la edad de tu hijo")
	var edadTres=prompt("Introduce la edad de tu pareja");
}
