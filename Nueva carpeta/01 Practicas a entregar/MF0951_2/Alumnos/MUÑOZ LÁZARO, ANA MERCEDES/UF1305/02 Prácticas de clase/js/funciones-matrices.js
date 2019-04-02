// JavaScript Document
//Metodo new Array------------------------------
function matriz() {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un color más");
					   
	var colores =("\"" + color1 +"\"," + "\"" + color2 +"\"," + "\"" + color3 +"\"");
	var array = new Array(color1,color2,color3);
	
		
	alert(colores);
	alert(array);
	alert(typeof(array));
	alert("Se han creado las variables: " + "\n" + "var color1 =" + color1 + "var color2 =" + color2 +"var color3 =" + color3 + ";\n" + "Se ha creado la matriz colores" + "\n" + "var colores = " + "[" + array + "];" + "\n" + array.length);}

//Funcion concat()
function unir() {
	var nombre = prompt("introduce tu nombre");
	var apellido = prompt("introduce tu apellido");
	var pais = prompt("introduce tu Nacionalidad");			   
	var datos =("\"" + nombre +"\"," + "\"" + apellido +"\"," + "\"" + pais +"\"");
	var array = new Array(nombre,apellido,pais);
	alert(array);
	var nombre1 = prompt("introduce tu nombre");
	var apellido1 = prompt("introduce tu apellido");
	var pais1 = prompt("introduce tu Nacionalidad");			   
	var datos1 =("\"" + nombre +"\"," + "\"" + apellido +"\"," + "\"" + pais +"\"");
	var array1 = new Array(nombre1,apellido1,pais1);
	alert(array1);
		
	var union = array.concat(array1)
	alert(union);
	alert(typeof(union));
	alert("Se han creado las variables: " + "\n" + "var nombre =" + nombre + "var apellido =" + apellido + "var pais =" + pais + ";\n" + "Se ha creado la matriz datos" + "\n" + "var datos = " + "[" + array + "];" + "\n" + "Número de elementos= "+ array.length +  "\n" + "var nombre1 =" + nombre1 + "var apellido1 =" + apellido1 +"var pais1 =" + pais1 + ";\n" + "Se ha creado la matriz datos1" + "\n" + "var datos1 = " + "[" + array1 + "];" + "\n" + "Número de elementos= " + array1.length +  "\n" + "La concatenación de las dos matrices es = " + "[" + union + "];" + "\n" + "Número de elementos total= " + union.length);}

//copyWithin()---------------
function copiar() {
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un color más");
					   
	var colores =("\"" + color1 +"\"," + "\"" + color2 +"\"," + "\"" + color3 +"\"");
	var array = new Array(color1,color2,color3);
	var final= array.copyWithin(2,1);
	alert(colores);
	alert(typeof(array));
	alert(final);
	alert(typeof(final));
	}

//Metodo entries()Hay que resolver la función
function emparejar(){
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un color más");
	var numero1 = parseInt(prompt("introduce un numero"));
	var numero2 = parseInt(prompt("introduce otro numero"));
	var numero3 = parseInt(prompt("introduce un numero más"));
	var array = new Array(numero1,numero2,numero3);
	var colores=new Array(color1,color2,color3);
	var final= array.entries();
	alert(final);
}
//Método every()----------------------------
function comprobar (){
	var color1 = prompt("introduce un color");
	var color2 = prompt("introduce otro color");
	var color3 = prompt("introduce un color más");
	var array = new Array(color1,color2,color3);
	var color4 = prompt("busca un color más");
    
	function chequear(color) {
    var color = color4;
	}
	alert(array.every(chequear));
	}

//Metodo filter()--------------------------
function filtrar(){
	var numero1 = parseInt(prompt("introduce un numero"));
	var numero2 = parseInt(prompt("introduce otro numero"));
	var numero3 = parseInt(prompt("introduce un numero más"));
	var array = new Array(numero1,numero2,numero3);
	var numero4 = parseInt(prompt("introduce un numero limite"));
	
	function chequear(array) {
    return array >= numero4;
	}

	alert(array.filter(chequear));
}

//Metodo join()---------------------
	function enlazar(){
	var frutas1= prompt("Escribe el nombre e una fruta");
	var frutas2 = prompt("introduce otro fruta");
	var frutas3 = prompt("introduce una fruta más");
	var fruits = new Array(frutas1,frutas2,frutas3);
	var separador = fruits.join(" & ");
	alert(separador);
		  }
//Metodo map()---------------------------
	function llamar(){
	var numero1 = parseInt(prompt("introduce un numero"));
	var numero2 = parseInt(prompt("introduce otro numero"));
	var numero3 = parseInt(prompt("introduce un numero más"));
	var array = new Array(numero1,numero2,numero3);
	var numero4 = parseInt(prompt("introduce un numero para multiplicar la función"));
		function aplicar(array){
		return array = array*numero4;
		}
		
	alert(array.map(aplicar));
	}
//Metodo push()-------------------
function anadir (){
	var frutas1= prompt("Escribe el nombre e una fruta");
	var frutas2 = prompt("introduce otro fruta");
	var frutas3 = prompt("introduce una fruta más");
	var fruits = new Array(frutas1,frutas2,frutas3);
	var frutas4=prompt("¿Quieres añadir otra fruta?");
	alert(fruits.push(frutas4));
}