//Método split()
function convertir (){
	var colores = prompt ("Escribe 3 colores");
	var matriz = colores.split(" ");
	alert (matriz + "\n" + typeof(colores) + "\n" + typeof(matriz));

}

//Método toString()
function aCadena (){
	var frutas = ["piña", "platano", "granada", "fresa"];
	var cadena= frutas.toString();
	alert (frutas + "\n" + typeof(frutas)+ "\n" + cadena + "\n" + typeof(cadena));
}

//Método join()
function unirValores (){
	var frutas =["piña", "platano", "granada", "fresa"];
	var cadena = frutas.join("*");
	alert (frutas + "\n" + typeof(frutas)+ "\n" + cadena + "\n" + typeof(cadena));
}

//Método pop()
	function eliminaUlti (){
	var frutas =["piña", "platano", "granada", "fresa"];
	var cadena = frutas.pop();
	alert (frutas + "\n" + typeof(frutas)+ "\n" + cadena + "\n" + typeof(cadena));
}

//Método push()
	function añadeUlti (){
	var frutas =["piña", "platano", "granada", "fresa"];
	var frutasoriginal =["piña", "platano", "granada", "fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.push(dato);
	alert (frutasoriginal + "\n" + frutas);
}

//Método shift()
	function eliminaOrdena() {
	var frutas  =["piña", "platano", "granada", "fresa"];
	var frutasoriginal  =["piña", "platano", "granada", "fresa"];
	var cadena = frutas.shift();
	alert (frutasoriginal + "\n" + frutas);
}

//Método unshift()
	function añadeOrdena() {
	var frutas  =["piña", "platano", "granada", "fresa"];
	var frutasoriginal  =["piña", "platano", "granada", "fresa"];
	var dato = prompt ("Introduce una fruta nueva");
	var cadena = frutas.unshift(dato);
	alert (frutasoriginal + "\n" + frutas);
}

//Método splice()
	function añadirValores() {
		var frutas  =["piña", "platano", "granada", "fresa"];
		var frutasoriginal  =["piña", "platano", "granada", "fresa"];
		var cadena = frutas.splice(2,0, "sandia", "frambuesa");
		alert ("El Array original es: " + frutasoriginal + "\n" + "EL Array nuevo es: " + frutas);
}

//Método concat()
	function concatenar() {
		var nombres1  =["Sid", "Tony"];
		var nombres2  =["Kira","Sandra"];
		var nombres3 =["Dayanara","Jhon"];
		alert ("Los nombres de los mayores son: " + nombres1 + "\n"+ 
		"Los nombres de las menores son: " + nombres2 + "\n"+ 
		"Los que no conocemos son: " + nombres3 + "\n"+
		"Son: " + nombres1.concat(nombres2, nombres3));		
}


//Método slice()
	function rebanar() {
		var frutas  =["piña", "frambuesa", "mora",  "platano"];
		var rojos =frutas.slice(1,3);
		
		alert ("Las frutas son: " + frutas + "\n"+ 
		"Y los frutos rojo son:  " + rojos);		
}

//Método sort()
	function ordena() {
		var frutas  =["piña", "frambuesa", "albaricoque",  "platano"];
		var ordenadas= frutas.sort();	
		alert ("piña, frambuesa, albaricoque,  platano" + "\n"+ 
		"Ordenadas por orden alfabético: " + ordenadas
		);		
}

//Método reverse()
	function inverso() {
		var frutas  =["piña", "frambuesa", "albaricoque",  "platano"];
		var ordenadas= frutas.reverse();	
		alert ("piña, frambuesa, albaricoque,  platano" + "\n"+ 
		"Orden invertido: " + ordenadas
		);		
}

function ordenInverso() {
		var frutas  =["piña", "frambuesa", "albaricoque",  "zarzamora"];
		frutas.sort();
		frutas.reverse();
			
		alert (frutas.reverse() + "\n" + 
		frutas.reverse()
		);		
}