// JavaScript Document
//Ejercicio 1 (if else)(Array).Comprueba la letra del DNI
function nif(){
	var dni = document.getElementById('text1').value;
	var numero = dni.substr(0,dni.length-1);
	var letra = dni.substr(dni.length-1,1).toUpperCase();
	var numeroDni = numero%23;
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letraArray = letras[numeroDni];
	if(letra === letraArray){
		document.getElementById('etiqueta1').innerHTML = "La letra " + letra + " es correcta.";
	} else {
		document.getElementById('etiqueta1').innerHTML = "La letra " + letra + " es incorrecta.";
	}
	
}

//Ejercicio 1 (else if)(Array)-------------------
function signoZodiaco(){
	var nacimiento = new Date(document.getElementById("date2").value);
	var dia = nacimiento.getDate();
	var mes = nacimiento.getMonth()+1;
	var signo = "";
	var imagen = "";
	if((dia >= 21 &&  mes == 3) || (dia <= 20 &&  mes == 4)) {
		signo = "Aries";
		imagen = "img/aries.jpg";
	} 
	
	else if ((dia >= 21 &&  mes == 4) || (dia <= 20 &&  mes == 5)) {
		signo = "Tauro";
		imagen = "img/tauro.jpg";
	} 
	else if ((dia >= 21 &&  mes == 5) || (dia <= 21 &&  mes == 6)) {
		signo = "Geminis";
		imagen = "img/geminis.jpg";
	} 
	else if ((dia >= 22 &&  mes == 6) || (dia <= 22 &&  mes == 7)) {
		signo = "Cáncer";
		imagen = "img/cancer.jpg";
	} 
	else if ((dia >= 23 &&  mes == 7) || (dia <= 23 &&  mes == 8)) {
	signo = "Leo";
	imagen = "img/leo.jpg";
	} else if ((dia >= 24 &&  mes == 8) || (dia <= 23 &&  mes == 9)) {
		signo = "Virgo";
		imagen = "img/virgo.jpg";
	} 
	else if ((dia >= 24 &&  mes == 9) || (dia <= 22 &&  mes == 10)) {
		signo = "Libra";
		imagen = "img/libra.jpg";
	} 
	else if ((dia >= 23 &&  mes == 10) || (dia <= 22 &&  mes == 11)) {
		signo = "Escorpio";
		imagen = "img/escorpio.jpg";
	} 
	else if ((dia >= 23 &&  mes == 11) || (dia <= 21 &&  mes == 12)) {
		signo = "Sagitario";
		imagen = "img/sagitario.jpg";
	} 
	else if ((dia >= 22 &&  mes == 12) || (dia <= 19 &&  mes == 1)) {
		signo = "Capricornio";
		imagen = "img/capricornio.jpg";
	}  
	else if ((dia >= 20 &&  mes == 1) || (dia <= 19 &&  mes == 2)) {
		signo = "Acuario";
		imagen = "img/acuario.jpg";
	}  
	else  if ((dia >= 20 &&  mes == 2) || (dia <= 20 &&  mes == 3)){
		signo = "Piscis";
		imagen = "img/piscis.jpg";
	}
	else { " Error, no has introducido bien la fecha"}
	
	document.getElementById('etiqueta2').innerHTML =  "Naciste un día" + dia + "<br>" + "<img src=" + "'" + imagen + "'" + "width=100px height=100px>" + "<br>" + "Eres del signo de " + signo;
}

//Ejercicio 3 (swicth) (Array)------------------
function categoria(){
	var fecha= new Date(document.getElementById("date3").value);
	var anousuario= fecha.getFullYear();
	var anoActual = new Date().getFullYear();
	var resta =(anoActual - anousuario);
	
	var categoria = "";
	switch (resta ) {
		case 0 :
		case 1:
		case 2:
		case 3:
		case 4:
			categoria = "no tiene categoria";
			break;
		case 5:
		case 6:
		case 7:
			categoria = "Prebenjamin";
			break;
		case 8:
		case 9:
			categoria = "Benjamin";
			break;
		case 10:
		case 11:
			categoria = "Alevin";
			break;
		case 12:
		case 13:
			categoria ="Infantil";
			break;
		case 14 :
		case 15 :
			categoria ="Cadete";
			break;
		case 16:
		case 17:
		case 18:
			categoria = "Juvenil";
			break;
			default:
			categoria = "Aficionado";
	}
	document.getElementById("etiqueta3").innerHTML= "Pertenece a la categoría de: " + categoria;
}
//Ejercico 4 (for)(Array)---------------------
// Hay que presentarlo como lista desordenada----------
function listaFrutas() {
	var fruta = document.getElementById("text4").value;
	var frutas = fruta.split(" ");
		var texto ="" 
	var i;
	alert(frutas);
for (i = 0; i < frutas.length; i++) {
texto += frutas[i] + "<br>";

document.getElementById("etiqueta4").innerHTML = texto;}
}



//Ejercicio 5 (for) (Array)Tabla de multiplicar--------------
//Hay que presntarlo como tabla-----------------
function tablaMultiplicar(){
	var numero = Number(document.getElementById("number5").value);
	var i= 0;
	var texto= "";
	
	while(i<=10) {
		
		texto +=numero + " x " + i +" = "+ (i* numero) +"<br>"; i++;	
	}

	document.getElementById("etiqueta5").innerHTML = "Tabla de Muliplicar del número " + numero +"<br>"+ texto;
}