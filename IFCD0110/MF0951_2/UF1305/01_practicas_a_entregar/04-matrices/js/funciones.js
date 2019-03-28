// JavaScript Document

//ejercicio 1
function primera(){
	if (document.getElementById("text1").value != "") {
		
		var palabras = document.getElementById("text1").value;
		var sinespaciosaloslados = palabras.trim();		//Elimino los espacios a los lados
		var sincomas = sinespaciosaloslados.replace(/,/g, " ");		//Elimino las comas para la búsqueda
		
		var busqueda1 = sincomas.indexOf(" ");  //Búsqueda hasta primer espacio
		var busqueda2 = sincomas.lastIndexOf(" ");		//Búsqueda último espacio
		
		var a = sincomas.slice(0, busqueda1);
		var b = sincomas.slice(busqueda1 +1, busqueda2);
		var c = sincomas.slice(busqueda2+1);
		
		var matriz = new Array (a,b.trim(),c);   //Por si usuario mete espacios intermedios añado trim
						
		document.getElementById("etiqueta1").innerHTML= "La matriz creada es: " + matriz[0] + ", " + matriz[1] + ", " + matriz[2] + ".";
	}
}
//ejercicio 2
function segunda(){
	if (document.getElementById("text2").value != "") {
		var palabras = document.getElementById("text2").value;
		var matriz = new Array (Seat, Audi, Skoda);
		
		
		document.getElementById("etiqueta2").innerHTML= ;
	}	
}


//ejercicio 3


//ejercicio 4

//Ejercicio 5