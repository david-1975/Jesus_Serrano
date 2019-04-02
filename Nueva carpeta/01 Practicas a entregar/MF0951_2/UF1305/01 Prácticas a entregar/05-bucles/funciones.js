// JavaScript Document
function nif() {

	var dni = document.getElementById('text1').value;
	var numero = dni.substr(0,dni.length-1);
	var letra = dni.substr(dni.length-1,1).toUpperCase();
	var numeroDni = numero % 23;
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letraArray = letras[numeroDni];
	if (letra === letraArray){
		document.getElementById('etiqueta1').innerHTML = 
			"La letra es correcta";
	} else {
		document.getElementById('etiqueta1').innerHTML = 
		"La letra es incorrecta";
	}
}


function signoZodiaco() {
	var fecha = new Date(document.getElementById('date2').value);
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	
	var signo = "";
	var imagen = "";
	if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
		signo = "Aries";
		imagen = "img/aries.jpg";
	} else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
		signo = "Tauro";
		imagen = "img/tauro.jpg";
	} else if ((dia >= 21 && mes == 5) || (dia <= 21 && mes == 6)) {
		signo = "Géminis";
		imagen = "img/geminis.jpg";
	} else if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
		signo = "Géminis";
		imagen = "img/geminis.jpg";
	} else if ((dia >= 21 && mes == 6) || (dia <= 22 && mes == 7)) {
		signo = "Cáncer";
		imagen = "img/cancer.jpg";
	} else if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {
		signo = "Leo";
		imagen = "img/leo.jpg";
	} else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
		signo = "Virgo";
		imagen = "img/virgo.jpg";
	} else if ((dia >= 24 && mes == 9) || (dia <= 22 && mes == 10)) {
		signo = "Libra";
		imagen = "img/libra.jpg";
	} else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)) {
		signo = "Escorpio";
		imagen = "img/escorpio.jpg";
	} else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
		signo = "Sagitario";
		imagen = "img/sagitario.jpg";
	} else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)) {
		signo = "Capricornio";
		imagen = "img/capricornio.jpg";
	} else if ((dia >= 20 && mes == 1) || (dia <= 19 && mes == 2)) {
		signo = "Acuario";
		imagen = "img/acuario.jpg";
	} else if ((dia >= 20 && mes == 1) || (dia <= 19 && mes == 2)) {
		signo = "Piscis";
		imagen = "img/piscis.jpg";
	} else {signo = "No has introducido una fecha válida"};
	
	document.getElementById('etiqueta2').innerHTML =
	"Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres "+ signo +" </strong>" + "<br>" + 
	"<img src=" + "'" + imagen + "'" + " width='100'" + " height='100'" + " alt=''" + signo + "/>";
	
}

function mostarCategoria() {
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
	



