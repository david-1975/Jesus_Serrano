// JavaScript Document

//EJERCICIO 1
//Crear una función que, al introducir el número de DNI compruebe si la letra introducida es correcta. 
//La fórmula para comprobar la letra es el resto de la división entre 23 del número del DNI. (numero % 23) 
//var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function nif() {
	var dni = document.getElementById("text1").value;
	var numero = dni.substr(0,dni.length-1);
	var letra = dni.substr(dni.length-1,dni.length);
	var letraMayus =letra.toUpperCase();
	var numeroDni=numero % 23;
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letrasArray = letras[numeroDni];
	if (letraMayus===letrasArray) {
		
		document.getElementById("etiqueta1").innerHTML = "El formato del DNI es correcto.";
	} else {
		document.getElementById("etiqueta1").innerHTML = "La letra no coincide con el número del DNI.";
	}
}

//EJERCICIO 2:
//Crear una función que muestre el signo del zodiaco según la fecha de  nacimiento introducida por el usuario. </strong><br>
//El resultado debe de mostrar un texto y una  imagen del correspondiente signo del zodiaco.</p>
//<p><strong>Aries</strong> (Fecha: Del 21 de marzo al 20 de abril) | <strong>Tauro</strong> (Fecha: Del 21 de abril al 20 de  mayo) <br>
  //<strong>Géminis</strong> (Fecha: Del 21 de mayo al 21  de junio) | <strong>Cáncer</strong> (Fecha: Del 22 de  junio al 22 de julio) <br>
  //<strong>Leo</strong> (Fecha: Del 23 de julio al 23 de  agosto) | <strong>Virgo</strong> (Fecha: Del 24 de  agosto al 23 de septiembre)<br>
  //<strong>Libra</strong> (Fecha: Del 24 de septiembre  al 22 de octubre) | <strong>Escorpio</strong> (Fecha:  Del 23 de octubre al 22 de noviembre)<br>
  //<strong>Sagitario</strong> (Fecha: Del 23 de  noviembre al 21 de diciembre) |<strong>Capricornio</strong> (Fecha: Del 22 de diciembre al 19 de //enero)
  //<strong>Acuario</strong> (Fecha: Del 20 de enero al  19 de febrero) | <strong>Piscis</strong> (Fecha: Del  20 de febrero al 20 de marzo) </p>

function signo() {
	var fecha = new Date(document.getElementById("date2").value);
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	var signo ="";
	var imagen ="";
	if ((dia >= 21 && mes === 3) || (dia <020 && mes === 4)) {
		signo ="Aries";
		imagen = "img/aries.jpg";
	}
	
	else if ((dia >= 21 && mes === 4) || (dia <020 && mes === 5)) {
		signo ="Tauro";
		imagen = "img/tauro.jpg";
	}
	

	else if ((dia >= 22 && mes === 5) || (dia <022 && mes === 6)) {
		signo ="Géminis";
		imagen = "img/geminis.jpg";
	}

	else if ((dia >= 22 && mes === 6) || (dia <023 && mes === 7)) {
		signo ="Cáncer";
		imagen = "img/cancer.jpg";
	}

		else if ((dia >= 23 && mes === 7) || (dia <024 && mes === 8)) {
		signo ="Leo";
		imagen = "img/leo.jpg";
	}
	
	else if ((dia >= 24 && mes === 8) || (dia <024 && mes === 9)) {
		signo ="Virgo";
		imagen = "img/virgo.jpg";
	}
	
	else if ((dia >= 24 && mes === 9) || (dia <023 && mes === 10)) {
		signo ="Libra";
		imagen = "img/libra.jpg";
	}
	
	else if ((dia >= 23 && mes === 10) || (dia <023 && mes === 11)) {
		signo ="Escorpio";
		imagen = "img/escorpio.jpg";
	}
	
	else if ((dia >= 23 && mes === 11) || (dia <022 && mes === 12)) {
		signo ="Sagitario";
		imagen = "img/sagitario.jpg";
	}
	
	else if ((dia >= 23 && mes === 12) || (dia <020 && mes === 1)) {
		signo ="Capricornio";
		imagen = "img/capricornio.jpg";
	}
	
	else if ((dia >= 20 && mes === 1) || (dia <020 && mes === 2)) {
		signo ="Acuario";
		imagen = "img/Acuario.jpg";
	}
	
	else if ((dia >= 20 && mes === 2) || (dia <021 && mes === 3)) {
		signo ="Piscis";
		imagen = "img/piscis.jpg";
	}
	
	else {
		document.getElementById('etiqueta2').innerHTML = 
		"Mira que eres raro."
	}
																									   
																									   
	document.getElementById('etiqueta2').innerHTML = 
		"Eres " + signo + "<br>" +
		"<img src=" + "'" + imagen + "'" + "width=100px height=100px>";
}


//EJERCICIO 3:
// Si la fecha es menor o no válida  deberá de mostrar un mensaje indicando el problema.</p>
//Prebenjamines = 5,6,7 años<br>
//Benjamines = 8,9 años<br>
//Alevines = 10,11 años<br>
//Infantiles= 12,13 años<br>
//Cadetes = 14,15 años<br>
//Juveniles = 16,17,18 años<br>
//Aficionados +   de 18 años.</p>

function futbol() {
	var fecha = new Date(document.getElementById("date3").value);
	var anoUser = fecha.getFullYear();
	var anoActual= new Date().getFullYear();
	var edad = (anoActual - anoUser);
	var anonuevo = fecha.setFullYear(anoActual);
	var texto;
	if ( anonuevo > new Date() ) {
		edad= edad -1;}
	switch (edad) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
			texto = "Eres demasiado pequeño para jugar al fútbol.";
			break;
		case 5:
		case 6:
		case 7:
			texto = "Eres prebenjamín.";
			break;
		case 8:
		case 9:
			texto = "Eres benjamín.";
			break;
		case 10:
		case 11:
			texto = "Eres alevín.";
			break;
		case 12:
		case 13:
			texto = "Eres infantil.";
			break;
		case 14:
		case 15:
			texto = "Eres cadete.";
			break;
		case 16:
		case 17:
		case 18:	
			texto = "Eres juvenil.";
			break;
		default: 
    		texto = "Eres aficionado.";
	}
	
	document.getElementById('etiqueta3').innerHTML = texto;
}

//EJERCICIO 4:
// <strong>Crear una función que solicite varios nombre de frutas al usuario y cree un array con ellas.</strong><br>
//Mostar todos los valores del array en forma  de lista desordenada HTML. <br>
//var frutas = [plátano, naranja, manzana, pera, mango, fresa, kiwi];<br>

	function frutas() {
	var cadena = document.getElementById("text4").value;
	//var reemplazo = cadena.replace(/,/g," ");
	var matriz = cadena.split(" ");
	var longitud = matriz.length;
		//alert(longitud);
	var lista="";
	var x;
		for (x=0; x<longitud; x++){
			lista += "<li>" + matriz[x] + "</li>"; 
		}
	document.getElementById("etiqueta4").innerHTML = "<ul>" + lista + "</ul>";
}

//EJERCICIO 5:

	function tabla() {
	var numero = document.getElementById("number5").value;
	var multi="";
	var x;
		for (x=1; x<=10; x++){
			var y=(x*numero);
			multi += "<tr>" + "<td>" + numero + "x" + x + " = " + y + "</td>" + "</tr>"; 
		}
	document.getElementById("etiqueta5").innerHTML = "<br><table style='border:1px solid black'><tbody><tr><td><strong>Tabla de multiplicar</strong></td></tr>" + multi + "</tbody> </table>";
}