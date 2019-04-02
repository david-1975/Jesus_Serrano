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
		var matriz = new Array ("Seat", "Audi", "Skoda");
		var sinespaciosaloslados = palabras.trim();		//Elimino los espacios a los lados
		var sincomas = sinespaciosaloslados.replace(/,/g, " ");		//Elimino las comas para la búsqueda
		
		var busqueda1 = sincomas.indexOf(" ");  //Búsqueda hasta primer espacio
		var busqueda2 = sincomas.lastIndexOf(" ");		//Búsqueda último espacio
		
		var a = sincomas.slice(0, busqueda1);
		var b = sincomas.slice(busqueda1 +1, busqueda2);
		var c = sincomas.slice(busqueda2+1);
		
		matriz.push(a,b,c); //AÑADE AL FINAL
		
		document.getElementById("etiqueta2").innerHTML= "La matriz creada es: " + matriz[0] + ", " + matriz[1] + ", " + matriz[2] + ", " + matriz[3] + ", " + matriz[4] + ", " + matriz[5] + ".";
	}	
}

//ejercicio 3
function tercera(){
	if (document.getElementById("text3").value != "") {
		var palabras = document.getElementById("text3").value;
		var matriz = new Array ("Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti");
		var sinespaciosaloslados = palabras.trim();		//Elimino los espacios a los lados
		var sincomas = sinespaciosaloslados.replace(/,/g, " ");		//Elimino las comas para la búsqueda
		
		var busqueda1 = sincomas.indexOf(" ");  //Búsqueda hasta primer espacio
		var busqueda2 = sincomas.lastIndexOf(" ");		//Búsqueda último espacio
		
		var a = sincomas.slice(0, busqueda1);
		var b = sincomas.slice(busqueda1 +1, busqueda2);
		var c = sincomas.slice(busqueda2+1);
		
		matriz.unshift(a,b,c);  //AÑADE AL PRINCIPIO
		
		document.getElementById("etiqueta3").innerHTML= "La matriz creada es: " + matriz[0] + ", " + matriz[1] + ", " + matriz[2] + ", " + matriz[3] + ", " + matriz[4] + ", " + matriz[5] + ", " + matriz[6] + ", " + matriz[7] + ", " + matriz[8] + ".";
	}	
}

//ejercicio 4
function cuarta(){
	if (document.getElementById("text4").value != "") {
		var palabras = document.getElementById("text4").value;
		var matriz = new Array ("Ducati", "Lamborghini", "Porsche", "Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti");
		var sinespaciosaloslados = palabras.trim();		//Elimino los espacios a los lados
		var sincomas = sinespaciosaloslados.replace(/,/g, " ");		//Elimino las comas para la búsqueda
		
		var busqueda1 = sincomas.indexOf(" ");  //Búsqueda hasta primer espacio
				
		var a = sincomas.slice(0, busqueda1);
		var b = sincomas.slice(busqueda1 +1);
		
		matriz.splice(3,0,a,b);  //AÑADE EN LA POSICION DESEADA
		
		document.getElementById("etiqueta4").innerHTML= "La matriz creada es: " + matriz[0] + ", " + matriz[1] + ", " + matriz[2] + ", " + matriz[3] + ", " + matriz[4] + ", " + matriz[5] + ", " + matriz[6] + ", " + matriz[7] + ", " + matriz[8]+ ", " + matriz[9]+ ", " + matriz[10] + ".";
	}	
}

//Ejercicio 5
function quinta(){
	if (document.getElementById("text5").value != "") {
		var numeros = document.getElementById("text5").value;
		var sinespaciosaloslados = numeros.trim();	
		var sincomas = sinespaciosaloslados.replace(/,/g, " ");
						
		//var matriz1 = Array.from(sincomas.replace(/\s/g, ''));
		//var matriz = Array.from(sincomas.replace(/\s/g, ''));
		
		var matriz1 = sincomas.split();
		var matriz = sincomas.split();
					
		var desor = matriz.sort(function() {return Math.random() - 0.5});    //SACADO DE LA WEB, NADA MAS SENCILLO?
	
		document.getElementById("etiqueta5").innerHTML=			
			"Representacion de la matriz original: " + matriz1 + "<br>" +
			"Ascendente: " + matriz1.sort() + "<br>" +
			"Descendente: " + matriz1.reverse()  + "<br>" +
			"Aleatorio: " + desor + "<br>" +
			"longitud de la matriz: " + matriz.length;
	}
}
