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
			var dia = fecha.getDate(); 
			var mes = fecha.getMonth() +1; //sumamos 1 para darle igualdad a la realidad
			var signo;
			var img;
			if( (dia >= 21 && mes == 3) || (dia <= 20 && mes == 4 )){ //doble parentesis para doble condicion
				signo = "Aries";
				img = "img/aries.jpg";
			}
			  else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
				signo="Tauro";
				img= "img/tauro.jpg";
			}
			else if ((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)) {
				signo= "Géminis";
				img= "img/geminis.jpg";
			}
			else if ((dia >= 22 && mes == 6) || (dia <= 22 && mes == 7)) {
				signo= "Cáncer";
				img= "img/cancer.jpg";
			}
			else if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {
				signo= "Leo";
				img= "img/leo.jpg";
			}
			else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
				signo= "Virgo";
				img= "img/virgo.jpg";
			}
			else if ((dia >= 24 && mes == 9) || (dia <= 22 && mes == 10)) {
				signo= "Libra";
				img= "img/libra.jpg";
			}
			else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)) {
				signo= "Escorpio";
				img= "img/escorpio.jpg";
			}
			else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
				signo= "Sagitario";
				img= "img/sagitario.jpg";
			}
			else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 01)) {
				signo= "Capricornio";
				img= "img/capricornio.jpg";
			}
			else if ((dia >= 20 && mes == 01) || (dia <= 19 && mes == 02)) {
				signo= "Acuario";
				img= "img/acuario.jpg";
			}
			else if ((dia >= 20 && mes === 2) || (dia <021 && mes === 3)) {
				signo ="Piscis";
				img = "img/piscis.jpg";
			}
			else {
				signo= "Hay algo mal";
			}
		document.getElementById("etiqueta2").innerHTML=	signo + "<img src=" + "'" + img + "'" + "width=100px height=100px>";
}
}
//ejercicio 3
function categoria(){
		if (document.getElementById("date3").value != "") {
			var fecha = new Date(document.getElementById('date3').value);
			var fechaActual = new Date();
			
			var edad = (fechaActual.getFullYear() - fecha.getFullYear());

			var resultado = " ";

			switch (edad) {
				case 5:
				case 6:
				case 7:
				   resultado = "Prebenjamin";
				   break;
				case 8:
				case 9:
				   resultado = "Benjamin";
				   break;
				case 10:
				case 11:
				   resultado = "Alevin";
				   break;
				case 12:
				case 13:
				   resultado = "Infantil";
				   break;
				case 14:
				case 15:
				   resultado = "Cadete";
				   break;
				case 16:
				case 17:
				case 18:
				   resultado = "Juvenil";
				   break;
				default: 
				   break;
			}
				if (edad > 18) {
					resultado = "Aficionado, si eres profesional eres un sortudo";
				}
				else if (edad < 5) {
					resultado = "No tienes la edad aún";
				}	

			document.getElementById("etiqueta3").innerHTML = "Tienes " + edad + " años" + "<br>" + "Tu categoría es " + resultado;
		}
}

//ejercicio 4

function fruteria(){
		if (document.getElementById("text4").value != "") {
			var entrada = (document.getElementById("text4").value);
			var frutas = entrada.split(" ");
			var lista = ""; //para hacer la lista se declara la variable de texto
			var i;
			for (i = 0 ; i < frutas.length ; i++) {
			lista += "<li>" + frutas[i] + "</li>";//+= se pone para añadir valores dentro de la lista en los distintos li
			}
			document.getElementById('etiqueta4').innerHTML= 
				"Has generado el array frutas con los siguientes elementos: " + 
				"<ul>" + lista + "</ul>";
		}
}	

//Ejercicio 5
function multiplicacion(){
		if (document.getElementById("number5").value != "") {
			var y = document.getElementById("number5").value;				
			var x = "";
			var resultado = "";						
			for( x = 1 ; x <= 10 ; x++){
				resultado += "<tr>" + "<td>" + y + " x " + x + " = " + (x * y) + 
					"</td>" + "</tr>";  			
				}
		document.getElementById("etiqueta5").innerHTML= 
		"<table style='border:1px solid grey'><tbody><tr><th>La tabla de multiplicar es: </th></tr>" +  resultado + "</tbody> </table>";
}
}