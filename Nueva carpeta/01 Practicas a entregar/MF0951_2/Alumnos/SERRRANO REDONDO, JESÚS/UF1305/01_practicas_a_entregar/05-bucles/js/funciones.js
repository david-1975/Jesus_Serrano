// JavaScript Document

//ejercicio 1
function dni(){
	if (document.getElementById("text1").value != "") {
		var documento = document.getElementById("text1").value;
		
		var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
		
		var docsinespacio = documento.trim(); //quitamos espacios de los lados, por si ha metido el usuario
		
		var sincomas = docsinespacio.replace(/\W/g, "").replace(/_/g, ""); //Elimina todo lo no alfanumerico y _
						
		//Hemos acotado el dato y eliminado espacios y signos intermedios
		var numero = sincomas.slice(0,sincomas.length-1); //Cogemos numero hasta el penultimo valor
		var letra = sincomas.substr(sincomas.length-1); //cogemos el ultimo valor
		
		var division = numero % 23; //Nos da el resto de la division de numero/23
		
		if (letras [division] === letra.toUpperCase()){ //lo pasamos a mayusculas por si el user lo mete en min
			var texto = "la letra de dni es correcta";
		}
		else{
			var texto = "La letra es incorrecta, debería ser " + letras [division];
		}						
		
		document.getElementById("etiqueta1").innerHTML= texto;
	}	
}
//ejercicio 2
function signozodiaco(){
		if (document.getElementById("date2").value != "") {
			var fecha = new Date(document.getElementById("date2").value);
			var dia = fecha.getDate; 
			var mes = fecha.getMonth +1; //sumamos 1 para darle igualdad a la realidad
			var signo = "";
			var imagen ="";
			if( (dia >= 21 && mes == 3) || (dia <= 20 && mes == 4 ){ //doble parentesis para doble condicion
				signo = "Aries";
				imagen = "../img/aries.jpg";
			}
			  else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
				signo="tauro";
				img= "../img/tauro.jpg";
			}
			else if ((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)) {
				signo= "géminis";
				img= "../img/geminis.jpg";
			}
			else if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)) {
				signo= "cáncer";
				img= "../img/cancer.jpg";
			}
			else if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {
				signo= "leo";
				img= "../img/leo.jpg";
			}
			else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
				signo= "virgo";
				img= "../img/virgo.jpg";
			}
			else if ((dia >= 24 && mes == 9) || (dia <= 22 && mes == 10)) {
				signo= "libra";
				img= "../img/libra.jpg";
			}
			else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)) {
				signo= "escorpio";
				img= "../img/escorpio.jpg";
			}
			else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
				signo= "sagitario";
				img= "../img/sagitario.jpg";
			}
			else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 01)) {
				signo= "capricornio";
				img= "../img/capricornio.jpg";
			}
			else if ((dia >= 20 && mes == 01) || (dia <= 19 && mes == 02)) {
				signo= "acuario";
				img= "../img/acuario.jpg";
			}
			else {
				signo= "piscis";
				img= "../img/piscis.jpg";
			}
		document.getElementById("etiqueta2").innerHTML=	signo + "<img src="+"'"+img+"'"+"width=100px height=100px>";
}
}
//ejercicio 3
function categoria(){
		if (document.getElementById("date3").value != "") {
			var fecha = new Date(document.getElementById('date3').value);
			var ano = fecha.getFullYear();
			var anoact = new Date().getFullYear();
			var resta = parseInt(anoact - ano);

			var categoria = "";

			switch (resta) {      //Prebenjamines = 5,6,7 años 

					case 0:
					case 1:
					case 2:
					case 3:
					case 4:	
						categoria = "No existe categoría " + resta + " años";
						break;	
					case 5:
					case 6:
					case 7:
						categoria = "Prebenjamin ";
						break;
					case 8:
					case 9:
						categoria = "Benjamin ";
						break;
					case 10:
					case 11:
						categoria = "Alevin ";
						break;
					case 12:
					case 13:
						categoria = "Infantil ";
						break;
					case 14:
					case 15:
						categoria = "Cadete ";
						break;
					case 16:
					case 17:
					case 18:
						categoria = "Juvenil ";
						break;
					default:
					categoria = "No existe la categoría de " + resta + " años";
					break;
			}
			
		document.getElementById("etiqueta3").innerHTML = categoria + ano; 
			}
		document.getElementById("etiqueta3").innerHTML=""	;
		}
}
//ejercicio 3
function categoria(){
		if (document.getElementById("date3").value != "") {
			var fecha = new Date(document.getElementById('date3').value);
			var ano = fecha.getFullYear();
			var anoSys = new Date().getFullYear();
			var resta = parseInt(anoSys - ano);
			if (resta >= 4) { 
				document.getElementById("etiqueta3").innerHTML = 
				"No tienes edad para competir"; 
			} else {

			var categoria = "";
			switch (resta) {
				case 5:
				case 6:
				case 7:
					categoria = "Prebenjamín";
					break;
				case 8:
				case 9:
					categoria = "Benjamín";
					break;
				case 10:
				case 11:
					categoria = "Alevín";
					break;
				case 12:
				case 13:
					categoria = "Infantil";
					break;
				case 14:
				case 15:
					categoria = "Cadete";
					break;
				case 16:
				case 17:
				case 18:
					categoria = "Juvenil";
					break;
				default:
					categoria = "No existe la categoría de " + resta + " años";
					break;
				}
			 document.getElementById("etiqueta3").innerHTML = "tu catergía es: " + categoria;
			}		
}	

//ejercicio 4

function fruteria(){
		if (document.getElementById("text4").value != "") {
			var entrada= (document.getElementById("text4").value);
			var frutas= entrada.split(" ");
			var lista= ""; //para hacer la lista se declara la variable de texto
			for (i = 0 ; i < frutas.length;i++) {
			lista += "<li>" + frutas[i] + "</li>";//+= se pone para añadir valores dentro de la lista en los distintos li
			document.getElementById('etiqueta4').innerHTML=lista;
    }
}	

//Ejercicio 5
function multiplicacion(){
		if (document.getElementById("numer5").value != "") {
			var y = document.getElementById("numer5").value;				
			var x = "";
			var resultado = "";						
			for( x = 1 ; x <= 10 ; x++){
				resultado += y + " x " + x + " = " + (x * y + "\n"); 			
				}
		document.getElementById("etiqueta5").innerHTML= "la tabla de multiplicar es: \n" +  resultado;
			}								
}
