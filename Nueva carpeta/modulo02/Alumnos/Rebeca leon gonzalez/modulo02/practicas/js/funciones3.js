// JavaScript Document

//Método split()

function convertir(){
	var colores = prompt ("Introduce 5 colores");
	var matriz = colores.split(" ");
	alert (matriz + "\n" + typeof(colores) + "\n" + typeof(matriz) + "\n" );
	}
	
	//Método toString()
	
	function aCadena (){
		var frutas =   ["manzana","pera","naranja","fresa"];
		var cadena = frutas.toString();
		alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n"+ typeof(cadena) + "\n");
		
	}
	//Método join()
	
	function unirValores (){
		var frutas =   ["manzana","pera","naranja","fresa"];
		var cadena = frutas.join(" * ");
		alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n"+ typeof(cadena) + "\n");
		
	}
	
	//Método pop()
	function eliminar (){
		var frutas =   ["manzana","pera","naranja","fresa"];
		var cadena = frutas.pop( );
		alert (frutas + "\n" + typeof(frutas) + "\n" + cadena + "\n"+ typeof(cadena) + "\n");
		
	}
	
	//Método push()
	
	function añadir (){
		var frutas =  ["manzana","pera","naranja","fresa"];
		var frutasoriginal =  ["manzana","pera","naranja","fresa"];
		var dato = prompt ("Introduce una fruta nueva");
		var cadena = frutas.push(dato);
		alert (frutasoriginal  + "\n" + frutas);
		
		}
		
	//Método shift()
	
	function eliminarprimero(){
		var frutas =  ["manzana","pera","naranja","fresa"];
		var frutasoriginal =  ["manzana","pera","naranja","fresa"];
		var cadena = frutas.shift();
		alert (frutasoriginal  + "\n" + frutas);		
		
		}
	
	//Método unshift () 
	
	function añadeprimero (){
		var frutas =  ["manzana","pera","naranja","fresa"];
		var frutasoriginal =  ["manzana","pera","naranja","fresa"];
		var dato = prompt ("Introduce una fruta nueva");
		var cadena = frutas.unshift(dato);
		alert (frutasoriginal  + "\n" + frutas);
		
		}
	//Método splice ()
	
	function anadirValores (){
		
		var frutas =  ["manzana","pera","naranja","fresa"];	
		var frutasoriginal = ["manzana","pera","naranja","fresa"];	
		alert (["manzana","pera","naranja","fresa"]);		
		var fruta1=prompt ("Añade una nueva fruta");
		var fruta2=prompt ("Añade una otra fruta");		
		var cadena = frutas.splice(3,0,fruta1,fruta2);
		alert (frutasoriginal + "\n" + frutas);
		}
	// Método concat()
	
	function concatenar(){
	var nombres = ["rebeca","Maria"];	
	var nombre2= ["alberto","juanito","oscar", "miguel"];
	var apellidos = ["leon", "gonzalez"];
	var todo = nombres.concat(apellidos,nombre2);
	alert ("Los nombres de chicas son: "+ " [ " + nombres + " ]\n" + 
			"Los nombres de  chicos son : " + " [ " +nombre2 + " ]\n" +
			"Los apellidos de ambos son : " + " [ " +apellidos + " ]\n" +
			"Todo unido es : " + " [ " + todo + " ]\n");
	}
	
	//Método slice()
	
	function rebanar(){
	var frutas = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var frutasoriginal = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var sacar = frutas.slice(1,3);
	alert (" [ " +frutasoriginal + " ]\n" +
			"Se a extraido la posicion 1 y 3 que son : " + "\n"+
			 " [ " + sacar + " ]\n" );
	
	
	}
	
	//Método sort()
	
	function ordenarAscendente(){
		var nombres = ["Pepe" , "Pedro" , "Rebeca" , "María" , "Alberto"];
		var nombres2 = ["Pepe" , "Pedro" , "Rebeca" , "María" , "Alberto"];
		var nombreOriginal = ["Pepe" , "Pedro" , "Rebeca" , "María" , "Alberto"];
		var cadena = nombres.sort();
		var descendente = nombres2.sort().reverse();
		alert (nombreOriginal + "\n" + cadena + "\n" +  descendente); 
		
		}
	
	// Método reverse()
	function ordenarDescendente(){
		var nombres = ["Pepe" , "Pedro" , "Rebeca" , "María" , "Alberto"];
		var nombres2 = ["Pepe" , "Pedro" , "Rebeca" , "María" , "Alberto"];
		var nombreOriginal = ["Pepe" , "Pedro" , "Rebeca" , "María" , "Alberto"];
		var cadena = nombres.sort();
		var descendente = nombres2.sort().reverse();
		alert (nombreOriginal + "\n" + cadena + "\n" +  descendente); 
		
		}
		
	


	