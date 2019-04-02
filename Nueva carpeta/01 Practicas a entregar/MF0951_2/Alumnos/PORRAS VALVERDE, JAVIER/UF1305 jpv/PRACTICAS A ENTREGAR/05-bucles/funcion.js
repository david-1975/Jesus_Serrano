// JavaScript Document
function nif(){
    var dni = document.getElementById("text1").value;
/*    alert(dni);
*/	var numero = dni.substr(0,dni.length-1);/*sacamos el numero solo del dni del 0 hasta...con lenght -1 porque lenght cuenta desde 1*/
/*	alert(numero);
*/	var letra = dni.substr(dni.length-1,1).toUpperCase();
	var numeroDni = numero %23;
/*	alert(numeroDni);
*/	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var letrArray = letras[numeroDni];	
/*	alert(letrArray);
*/	if (letra===letrArray){
		document.getElementById("etiqueta1").innerHTML=
		"La letra introducida es correcta ";}
		else {
			document.getElementById("etiqueta1").innerHTML=
				"La letra introducida es incorrecta";		}
		
	
	
}

function signoZodiaco (){
	
	var fecha =new Date(document.getElementById("date2").value) ;
	var dia = fecha.getDate() ;
	var mes = fecha.getMonth()+1 ;
	
	var imagen = "";
	var signo = "";
	
	if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) { signo = "Aries" ; imagen="img/aries.jpg";}	
	
	else if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {signo = "Tauro" ; imagen="img/tauro.jpg";}	
	else if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {signo = "Geminis" ; imagen = "img/geminis.jpg"}
	else if ((dia >= 22 && mes == 6) || (dia <= 21 && mes == 7)) {signo = "cancer" ; imagen = "img/cancer.jpg";}
	else if ((dia >= 23 && mes == 7) || (dia <= 23 && mes == 8)) {signo = "leo" ; imagen = "img/leo.jpg";}
	
	else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {signo = "virgo" ; imagen = "img/virgo.jpg";}
		
	else if ((dia >= 24 && mes == 9) || (dia <= 22 && mes == 10)) {signo = "libra" ; imagen = "img/libra.jpg";}
	
	else if ((dia >= 23 && mes == 10) || (dia <= 22 && mes == 11)) {signo = "escorpio" ; imagen = "img/escorpio.jpg";}
	
	else if ((dia >= 23 && mes == 11) || (dia <= 222 && mes == 12)) {signo = "sagitario" ; imagen = "img/sagitario.jpg";}
	
	else if ((dia >= 22 && mes == 12) || (dia <= 19 && mes == 1)) {signo = "capricornio" ; imagen = "img/capricornio.jpg";}
	
	else if ((dia >= 20 && mes == 1) || (dia <= 19 && mes == 2)) {signo = "acuario" ; imagen = "img/acuario.jpg";}
	
	else if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) {signo = "piscis" ; imagen = "img/piscis.jpg";}
	
	else {"Eres de raticulín ";}
	
	
	
	document.getElementById("etiqueta2").innerHTML=
		
		"Naciste un " + dia + "/" + mes + " <br> <strong> Tu signo es : </strong>  " + signo +
		
		"<img src= " + "'" + imagen + "'" + " width= 100px height=100px > " ;	
	
}


function futbol(){
	
	var fechaUser = new Date(document.getElementById("date3").value);
	var anoUser = fechaUser.getFullYear();
	var fechaAct = new Date().getFullYear();
	var resta = parseInt(fechaAct - anoUser );
						 
	var categoria = "" ;
	
	switch (resta) {
			
		  case 5:			
		  case 6:		    
		  case 7:
		   categoria = "prebenjamin";
		  break;
			
		  case 8:			
		  case 9:
			categoria = "benjamines";
			break;
			
		  case 10:			 
		  case 11:
			categoria = "alevines";
			break;
			
		  case 12:				
		  case 13:
			categoria = "infantiles";
			break;
			
		  case 14:			
		  case 15:
			categoria = "cadetes";
			break;
			
		  case 16:
		  case 17:			
		  case 18:
		    categoria = "juveniles";
		    break;
		  case 19:
			categoria=  "aficionados";
			break;
		  default:
		    categoria = "No hay catergoria de " + resta + anoUser ;
			break;			
	}
	document.getElementById("etiqueta3").innerHTML =
		"La categoria a la que pertenece es : " + "<strong>" +categoria + "</stron>";
}


function frutas(){
	var fruta = document.getElementById("text4").value;
	var espBlanco = fruta.search(" ");
	alert(espBlanco);
	var isert = fruta.replace(",");
	alert(isert);
	
	var frutArray = fruta.split(" ");
	alert(frutArray);
	
	
	
	var esmatriz = frutArray.isArray();
	alert("es" + esmatriz);
	var elemento = frutArray.length();
	alert(elemento);
	var x = frutArray[2];
	alert("fruta numero dos es : " + x);
	
	/*document.getElementById("etiqueta4").innerHTML=
		"<ul>"
	       "<li>" frutarray[1] "</li>"
		   "<li>" frutArray[2] "</li>"
		   "<li>" frutArray[3] "</li>"
	     "</ul>"
		   
	*/
	
	
}