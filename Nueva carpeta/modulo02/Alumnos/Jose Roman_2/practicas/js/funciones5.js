// JavaScript Document

//CONDICIONES


function horaIf() {
var hora = new Date();
 
 var mensaje = "Buenos dias";
  if (hora <18){
	  mensaje = "Buenos días"
		alert(mensaje);
	}
}
 // Estructura if else
 
 function horaelse() {
 var hora = new Date().getHours();	 
 if (hora>=12) {
	 alert("Son más de las 12"+"\n"+hora);
	 } else {
		alert("Son menos de las 12"+"\n"+hora);	 
	 }
 }
 
 // estructura else if
 
 function horaElseif(){
	  var hora = new Date().getHours();	 
 /*if (hora >=8 && hora <15) {
	 alert("buenos días"+"\n"+hora);
	 } else if(hora>=15 && hora<=23){
		alert("Buenas tardes"+"\n"+hora);	 
	 } else {
		 alert("Buenas noches"+"\n"+hora);
		 }*/
		 
		 if (hora >=0 && hora <6) {
	 alert("buenas madrugada"+"\n"+hora);
	 } else if(hora>=7 && hora<=12){
		alert("Buenos días"+"\n"+hora);	
		 }else if(hora>=13 && hora<=23){
			alert("Buenas tardes"+"\n"+hora); 
			 } else {
				 alert("Buenas noches"+"\n"+hora);
		 }
 }
 
 // estructura expresión Switch
 
 function switchCase(){
	 
/*	var dia ="";
	
	 switch(new Date().getDay()){
	 case 0:
		 dia= "Domingo";
	 break;
	 case 1:
		 dia= "Lunes";
	 break;
	 case 2:
		 dia= "Martes";
	 break;
	 case 3:
		 dia= "Miercoles";
	 break;
	 case 4:
		 dia= "Jueves";
	 break;
	 case 5:
		 dia= "Viernes";
	 break;
	 case 6:
		 dia= "Sabado";}
	
	 alert("Hoy es : "+dia);
	 
	 
	 
 }*/
 var mes ="";
	
	 switch(new Date().getMonth()){
	 case 0:
		 mes= "Enero".slice(0,3);
	 break;
	 case 1: mes= "Febrero".slice(0,3);
		 
	 break;
	 case 2:
		 mes= "Marzo".slice(0,3);
	 break;
	 case 3:
		 mes= "Abril".slice(0,3);
	 break;
	 case 4:
		 mes= "Mayo".slice(0,3);
	 break;
	 case 5:
		 mes= "Junio".slice(0,3);
	 break;
	 case 6:
		 mes= "Julio".slice(0,3);
	 break;
	 case 7:
		 mes= "Agosto".slice(0,3);
	 break;
	 case 8:
		 mes= "Septiembre".slice(0,3);
	 break;
	 case 9:
		 mes= "Octubre".slice(0,3);
	 break;
	 case 10:
		 mes= "Noviembre".slice(0,3);
	 break;
	 case 11:
		 mes= "Diciembre".slice(0,3);
		break; 
	 default: 
	 mes ="Introduce un numero del 0 al 11";
	 }
	
	 alert("El mes es : "+mes);
	 
	 
	 
 }
 // Estructura for
 function bucleFor(){
	 
	 var coches = ["BMW", "Volvo", "Saab", "Ford","Audi"];
	 var texto = "";
		
		for (var i = 0; i < coches.length; i++) {
   		 texto +=coches[i] + "\n";
	}
	alert("Valores del array "+"\n"+texto);
}
// Estructura while
 function bucleWhile(){
	 
	 var text = "";
		var i = 0;
		while (i < 10) {
    	text += "\n El numero es "+ i;
   			 i++;
	}
	alert(text);
}
// Estructura while
 function bucleDoWhile(){
	 
	 var text = "";
		var i = 0;
		while (i < 10) {
    	do{text += "\n El numero es "+ i;
   			 i++;
	} while (i < 10);
	alert(text);
}
 }

 