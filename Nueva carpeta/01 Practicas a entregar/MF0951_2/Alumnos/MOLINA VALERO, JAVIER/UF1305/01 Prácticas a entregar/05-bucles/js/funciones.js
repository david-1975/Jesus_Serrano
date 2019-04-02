// JavaScript Document
//ejercicio1
function dni(){
	var dniUser=document.getElementById("text1").value;
	var letra=dniUser.substring(dniUser.length,dniUser.length-1).toUpperCase();
	var numero=Number(dniUser.substr(0,dniUser.length-1));
	
	var operacion=numero%23;
	var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
	var comprobar=letras[operacion];
	if(comprobar==letra){
	document.getElementById("etiqueta1").innerHTML="DNI correcto "+dniUser;
		}else{
			document.getElementById("etiqueta1").innerHTML="DNI incorrecto "+dniUser;
		} 
	
}

//Ejercicio2
function zodiaco(){
	var nacimiento=new Date(document.getElementById("date2").value);
	var dia=nacimiento.getDate();
	var mes= nacimiento.getMonth();
	var fechaActual=new Date();
	var anoActual=fechaActual.getFullYear();
	var comprobar=new Date(anoActual,mes,dia);
	//aries
	var fecha1=new Date(anoActual,2,21);
	var fecha2=new Date(anoActual,3,20);
	//tauro
	var fecha3=new Date(anoActual,3,21);
	var fecha4=new Date(anoActual,4,20);
	//geminis
	var fecha5=new Date(anoActual,4,21);
	var fecha6=new Date(anoActual,5,21);
	//cancer
	var fecha7=new Date(anoActual,5,22);
	var fecha8=new Date(anoActual,6,22);
	//leo
	var fecha9=new Date(anoActual,6,23);
	var fecha10=new Date(anoActual,7,23);
	//virgo
	var fecha11=new Date(anoActual,7,24);
	var fecha12=new Date(anoActual,8,23);
	//libra
	var fecha13=new Date(anoActual,8,24);
	var fecha14=new Date(anoActual,9,22);
	//escorpio
	var fecha15=new Date(anoActual,9,23);
	var fecha16=new Date(anoActual,10,22);
	//sagitario
	var fecha17=new Date(anoActual,10,23);
	var fecha18=new Date(anoActual,11,21);
	//capricornio
	var fecha19=new Date(anoActual,11,22);
	var fecha20=new Date(anoActual,0,19);
	//acuario
	var fecha21=new Date(anoActual,0,20);
	var fecha22=new Date(anoActual,1,19);
	//piscis
	var fecha23=new Date(anoActual,1,20);
	var fecha24=new Date(anoActual,2,20);
	
	var signo="";
	var imagen="";
	
	if(comprobar>=fecha1 && comprobar<=fecha2){
		signo="Eres aries";
		imagen="img/aries.jpg";
		alert("eres aries");
		
	}else if(comprobar>=fecha3 && comprobar<=fecha4){
		alert("Eres tauro");
		imagen="img/tauro.jpg";
		signo="Eres tauro";

	}else if(comprobar>=fecha5 && comprobar<=fecha6){
		alert("Eres géminis");
		imagen="img/geminis.jpg";
		signo="Eres géminis";
		
	}else if(comprobar>=fecha7 && comprobar<=fecha8){
		alert("Eres cáncer");
		imagen="img/cancer.jpg";
		signo="Eres cáncer";
		
	}else if(comprobar>=fecha9 && comprobar<=fecha10){
		alert("Eres leo");
		imagen="img/leo.jpg";
		signo="Eres leo";
		
	}else if(comprobar>=fecha11 && comprobar<=fecha12){
		alert("Eres virgo");
		imagen="img/virgo.jpg";
		signo="Eres virgo";
		
	}else if(comprobar>=fecha13 && comprobar<=fecha14){
		alert("Eres libra");
		imagen="img/libra.jpg";
		signo="Eres libra";
		
	}else if(comprobar>=fecha15 && comprobar<=fecha16){
		alert("Eres escorpio");
		imagen="img/escorpio.jpg";
		signo="Eres escorpio";
		
	}else if(comprobar>=fecha17 && comprobar<=fecha18){
		alert("Eres sagitario");
		imagen="img/sagitario.jpg";
		signo="Eres sagitario";
		
	}else if((dia>=22 && mes==11) || (dia<=19 && mes==00)){
		alert("Eres capricornio");
		imagen="img/capricornio.jpg";
		signo="Eres capricornio";
		
	}else if(comprobar>=fecha21 && comprobar<=fecha22){
		alert("Eres acuario");
		imagen="img/acuario.jpg";
		signo="Eres acuario";
		
	}else if(comprobar>=fecha23 && comprobar<=fecha24){
		alert("Eres piscis");
		imagen="img/piscis.jpg";
		signo="Eres piscis";
		
	}else{
		alert("No has introducido ningún valor");
	}
	document.getElementById("etiqueta2").innerHTML="Naciste un "+dia+"/"+(mes+1)+"<br><br>"+"<strong> "+
													signo+"</strong>"+"<br>"+
													"<img src="+"'"+imagen+"'"+"width='100' height='100'><br>"+signo;
	
	
}

//ejercicio3
function categoria(){
	var nacimiento=new Date(document.getElementById("date3").value);
	var fechaActual=new Date();
	var anoActual=fechaActual.getFullYear();
	var ano=fechaActual.getFullYear()-nacimiento.getFullYear();
	if (nacimiento.setFullYear(anoActual)>fechaActual){
		ano=ano-1;
	}
	
	
	
	var categoria="";
	switch(ano){
	case 0:
	case 1:
	case 2:
	case 3:
	case 4:
		
		categoria=" años y aún no tienes edad para pertenecer a alguna categoría";
		break;
	case 5:
	case 6:
	case 7:
		
		categoria=" años y perteneces a la categoría de Prebenjamines";
		break;
	case 8:
	case 9:
		
		categoria=" años y perteneces a la categoría de Benjamines";
		break;
	case 10:
	case 11:
		
		categoria=" años y perteneces a la categoría de Alevines";
		break;
	case 12:
	case 13:
		
		categoria=" años y perteneces a la categoría de Infantiles";
		break;
	case 14:
	case 15:
		
		categoria=" años y perteneces a la categoría de Cadetes";
		break;
	case 16:
	case 17:
	case 18:
	
		categoria=" años y perteneces a la categoría de Juveniles";
		break;
	case 19:
		
		categoria=" años y perteneces a la categoría de Aficionados";
		break;
	default:
		
		categoria=" años y perteneces a la categoría de Aficionados";
		break;
}
	document.getElementById("etiqueta3").innerHTML="Tienes "+ano+categoria;
	
}

//ejercicio 4
function frutas(){
	var frutas=document.getElementById("text4").value;
	var espacios;
	var buscarEspacio=frutas.search(/\s/g);
	var buscarComas=frutas.search(/,/g)
	
	if (buscarEspacio>-1&&buscarComas==-1){
		frutas.replace(/\s/g,",");
	}
	if(frutas.indexOf(",")>-1 && frutas.indexOf(", ")==-1){
		espacios=frutas.replace(/,/g," ");
	}
	if(frutas.indexOf(", ")>-1){
	espacios=frutas.replace(/,\s/g," ");
	}
	var separar=espacios.split(" ");
	var longitud=separar.length;
	var texto="";
	
var i;
for (i = 0; i < longitud; i++) {
  texto+="<li>" +separar[i]+ "</li>";
}
document.getElementById("etiqueta4").innerHTML = "<ul> Frutas"+texto+"</ul>";
}

//ejercicio5
function multiplicar(){
	var numero=new Number(document.getElementById("number5").value);
	var i;
	var texto="";
	for (i=0;i<=10;i++){
		texto+="<tr><td style='border:1px solid black'>"+numero+"x"+i+" = "+numero*i+"</td></tr>";
	}
	document.getElementById("etiqueta5").innerHTML="<table>"+texto+"</table>";
}
