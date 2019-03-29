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
function zodiaco(){
		if (document.getElementById("date2").value != "") {
			var fecha = new Date(document.getElementById("date2").value);
			var dia = fecha.getDate; 
			var mes = fecha.getMonth +1; //sumamos 1 para darle igualdad a la realidad
			var signo = "";
			var imagen ="";
			if( (dia >= 21 && mes == 3) || (dia <= 20 && mes == 4 ){ //doble parentesis para doble condicion
				signo = "Aries";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 4) || (dia <= 20 && mes == 5 ){
				signo = "Tauro";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 5) || (dia <= 20 && mes == 6 ){
				signo = "Géminis";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 6) || (dia <= 20 && mes == 7 ){
				signo = "Cáncer";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 7) || (dia <= 20 && mes == 8 ){
				signo = "Leo";
				imagen = "img/aries.jpg";
			}			
			else if(dia >= 21 && mes == 8) || (dia <= 20 && mes == 9 ){
				signo = "Virgo";
				imagen = "img/aries.jpg";
			}			
			else if(dia >= 21 && mes == 9) || (dia <= 20 && mes == 10 ){
				signo = "Libra";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 10) || (dia <= 20 && mes == 11 ){
				signo = "Escorpio";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 11) || (dia <= 20 && mes == 12 ){
				signo = "Sagitario";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 12) || (dia <= 20 && mes == 1 ){
				signo = "Capricornio";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 1) || (dia <= 20 && mes == 2 ){
				signo = "Acuario";
				imagen = "img/aries.jpg";
			}
			else if(dia >= 21 && mes == 2) || (dia <= 20 && mes == 3 ){
				signo = "Piscis";
				imagen = "img/aries.jpg";
			}
		document.getElementById("etiqueta2").innerHTML=	signo + " <img src=" + "'" + imagen + "'" + "width=100px height100px>";
		}
}

//ejercicio 3
function categoria(){
		if (document.getElementById("date3").value != "") {

		document.getElementById("etiqueta3").innerHTML=""	;
		}
}

//ejercicio 4

function fruteria(){
		if (document.getElementById("text4").value != "") {

		document.getElementById("etiqueta4").innerHTML=	"";
		}
}

//Ejercicio 5
function multiplicacion(){
		if (document.getElementById("numer5").value != "") {

		document.getElementById("etiqueta5").innerHTML=	"";
		}
}
