// JavaScript Document



//Método new Array()

function nuevaMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");
		
	var colores2 = new Array (color1, color2, color3);
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], que es de tipo: " + typeof(colores) + 
		  " y tiene " + colores.length + " valores" + "\n" +
		  "Y hemos generado la matriz con la var colores2 [" + colores2 + "], que es de tipo: " + typeof(colores2)+ "  y tiene " + colores2.length + " valores");
}

//concat()
function unirMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var color4 = prompt("Ahora introduce un nombre");
	var color5 = prompt("Introduce otro nombre");
	var color6 = prompt("Introduce un tercer nombre");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");
		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = ("\"" + color4 + "\","  +  "\"" + color5 + "\"," + "\"" +  color6 + "\"");
	
	var colores4 =  new Array (color4, color5, color6);
	
	var colores5 = colores2.concat(colores4)
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], y con los segundos datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color4 + ";\n" + 
		  "var color2= " + color5 + ";\n" + 
		  "var color3= " + color6 + ";\n" + " y hemos generado la matriz var nombres[" + colores3 + "] " +
		  "con colores.concat(nombres) unimos las dos matrices y queda [" + colores5 + "], que es de tipo: " + typeof(colores5)+ "  y tiene " + colores5.length + " valores");
}

//copyWithin()
function copiarenMatriz(){
	
}

//entries()
function objetosMatriz(){
	
}

//every()
function compruebaMatriz(){
	
}

//fill()
function llenaMatriz(){
	
}

//filter()
function creaMatriz(){
	var numero1 = prompt("Introduce un número");
	var numero2 = prompt("Introduce otro número");
	var numero3 = prompt("Introduce un tercer número");
	
	var numeros = ("\"" + numero1 + "\","  +  "\"" + numero2 + "\"," + "\"" +  numero3 + "\"");
		
	var numeros2 = new Array (numero1, numero2, numero3);
	
	var numeros3 = numeros2.filter(myFunction);

	function myFunction(value) {
	  return value < 3;
	}
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var numero1= " + numero1 + ";\n" + 
		  "var numero2= " + numero2 + ";\n" + 
		  "var numero3= " + numero3 + ";\n" + 
		  "Hemos generado la matriz con la var numeros [" + numeros + "], que es de tipo: "  + typeof(numeros2)+ "  y tiene " + numeros2.length + " valores." +  "\n"  + " Con numeros.filter(myFuction){ return value<3} mostramos los valores menores de 3 y quedaría: [" + numeros3 + "]");
}

//find()
function devuelvevalorMatriz(){
	
}

//findIndex()
function indiceMatriz(){
	
}

//forEach()								//hacer
function llamaMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "]");
}

//from()
function devuelveobjetoMatriz(){
	
}

//includes()
function determinaMatriz(){
	
}

//indexOf()
function buscaenMatriz(){
	
}

//isArray()
function esMatriz(){
	
}

//join()
function uneMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = colores2.join("*");
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], que es de tipo: " + typeof(colores2) + 
		  " y tiene " + colores2.length + " valores" + "\n" + 
		  "Con colores.join(\"*\") nos la muestra de esta manera: "+ colores3 + ", y es de tipo: " + typeof(colores3) );
}

//keys()
function iteradorMatriz(){
	
}

//lastIndexOf()
function buscaposicionMatriz(){
	
}

//length
function numeroelementosMatriz(){

	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");
		
	var colores2 = new Array (color1, color2, color3);
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], que es de tipo: "  + typeof(colores2)+ "  y tiene " + colores2.length + " valores");
}

//map()
function creaconMatriz(){
	var numero1 = prompt("Introduce un número");
	var numero2 = prompt("Introduce otro número");
	var numero3 = prompt("Introduce un tercer número");
	
	var numeros = ("\"" + numero1 + "\","  +  "\"" + numero2 + "\"," + "\"" +  numero3 + "\"");
		
	var numeros2 = new Array (numero1, numero2, numero3);
	
	var numeros3 = numeros2.map(myFunction);

	function myFunction(value) {
	  return value * 2;
	}
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var numero1= " + numero1 + ";\n" + 
		  "var numero2= " + numero2 + ";\n" + 
		  "var numero3= " + numero3 + ";\n" + 
		  "Hemos generado la matriz con la var numeros [" + numeros + "], que es de tipo: "  + typeof(numeros2)+ "  y tiene " + numeros2.length + " valores." +  "\n"  + " Con numeros.map(myFuction){ return value*2} multiplicamos los valores por 2 y quedaría: [" + numeros3 + "]");
	
}

//pop()
function eliminaultimoMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = colores2.pop();
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], que es de tipo: " + typeof(colores2) + 
		  " y tiene " + colores2.length + " valores" + "\n" + 
		  "Con colores.pop() eliminamos el último valor: " + colores3 + ", y la matriz quedaría: " + colores2 + ", y es de tipo: " + typeof(colores3) );
}

//push()
function anadeMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	colores2.push("magenta");
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], con colores.push(\"magenta\") añadimos un valor y quedaría: " + colores2 + ", es de tipo: " + typeof(colores2) + " y tiene " + colores2.length + " valores" + "\n" );
}

//reduce()
function reduceMatriz(){
	
}

//reduceRight()
function reducederechaMatriz(){
	
}

//reverse()
function invierteMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = colores2.reverse();
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], con colores.reverse() invertimos la matriz y quedaría: [" + colores3 + "], es de tipo: " + typeof(colores3) + " y tiene " + colores3.length + " valores" + "\n" );
}

//shift()
function eliminaprimeroMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = colores2.shift();
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], con colores.shitf() eliminamos " +  colores3 + " y quedaría: " + colores2 + ", es de tipo: " + typeof(colores2) + " y tiene " + colores2.length + " valores" + "\n" );
}

//slice()
function rebanadaMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");
		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = colores2.slice(1);
	//el primer valor indica la posicion de los elementos, el segundo cuantos eliminamos y después los elementos
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], con colores.slice(1) rebanamos la matriz y quedaría: " + colores3 + " que es de tipo: "  + typeof(colores3)+ "  y tiene " + colores3.length + " valores. ");
}

//some()
function compruebaMatriz(){
	
}

//sort()
function ordenaMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = colores2.sort();
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], con colores.sort() ordenamos la matriz y quedaría: [" + colores3 + "], es de tipo: " + typeof(colores3) + " y tiene " + colores3.length + " valores" + "\n" );
}

//splice()
function anadequitaMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");
		
	var colores2 = new Array (color1, color2, color3);
	
	colores2.splice(1,0,"magenta", "morado");
	//el primer valor indica la posicion de los elementos, el segundo cuantos eliminamos y después los elementos
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], con colores.splice(1,0,\"magenta\",\"morado\") generamos la matriz: " + colores2 + " que es de tipo: "  + typeof(colores2)+ "  y tiene " + colores2.length + " valores. Pero tambien podemos con colores.splice(1,1) eliminar "+ colores2.splice(2,1) + " un valor en la posicion 2 y quedaría: " + colores2 );
}

//toString()                                     //Deberia dar string pero da function
function astringMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	var colores3 = colores2.toString();
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], que es de tipo: " + typeof(colores2) + 
		  " y tiene " + colores2.length + " valores" + "\n" + 
		  "Con colores.toString() se muestra así: " + colores3 + ", y la convertimos en tipo: "+ typeof(colores3) );
}

//unshift()
function anadecomienzoMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = ("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");		
	var colores2 = new Array (color1, color2, color3);
	
	colores2.unshift("magenta");
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + 
		  "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + 
		  "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores [" + colores + "], con colores.shitf(\"magenta\") añadimos un valor y quedaría: " + colores2 + ", es de tipo: " + typeof(colores2) + " y tiene " + colores2.length + " valores" + "\n" );
}

//valueOf()
function returnMatriz(){
	
}
