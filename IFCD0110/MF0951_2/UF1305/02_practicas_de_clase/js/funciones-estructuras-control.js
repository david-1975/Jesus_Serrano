// JavaScript Document

//if
function horaIf(){
	var hoy = new Date();
	var hora = hoy.getHours();
	var mensaje = "";
	if(hora<=12 && hora>8){
		 mensaje = "Hemos ejecutado esta condición:\nvar hoy = new Date();\nvar hora = hoy.getHours();\n		 if(hora<=12 && hora>8){\n alert(\"Buenos días\");\n}";		
		
		alert("Buenos días");
	   }
	
	if(hora<=18 && hora>12){
		mensaje = "Hemos ejecutado esta condición:\nvar hoy = new Date();\nvar hora = hoy.getHours();\n if(hora<=18 && hora>12){\n alert(\"Buenas tardes\");\n}";	
		
	   alert("Buenas tardes");
	   }
	if(hora<=23 && hora>18){
		 mensaje = "Hemos ejecutado esta condición:\nvar hoy = new Date();\nvar hora = hoy.getHours();\n if(hora<=23 && hora>18){\n alert(\"Buenas tardes\");\n}";	
		
	   alert("Buenas noches");
	   }
	if(hora<=8 && hora>23){
		 mensaje = "Hemos ejecutado esta condición:\nvar hoy = new Date();\nvar hora = hoy.getHours();\n if(hora<=8 && hora>23){\n alert(\"A dormir!\");\n}";	
		
	   alert("A dormir!");
	   }
	alert(mensaje);
}

//if else
function horaElse(){
	var hoy = new Date();
	var hora = hoy.getHours();
	var mensaje = "";
	if( hora < 12){
		mensaje = "Es a.m. Antes del mediodía";
	}
	else{
		mensaje = "Es p.m. Posterior al mediodía";
	}
	alert(mensaje);	
}

//if, else if, else
function horaElseIf(){
	var hoy = new Date();
	var hora = hoy.getHours();
	var mensaje = "";
	if (hora >= 6 && hora< 14){
		mensaje = "Turno de mañana";
	}
	else if(hora >=14 && hora<22){
		mensaje = "Turno de tarde";
	}
	else{
		mensaje = "Turno de noche";
	}
	alert(mensaje);
}

//switch

function switchCase(){
	var hoy = new Date();
	var dia;
switch(hoy.getDay()) {
	case 0:	dia="Domingo";
	break;
	
	case 1:	dia="Lunes";
	break;
	
	case 2:	dia="Martes";
	break;
	
	case 3:	dia="Miércoles";
	break;
		
	case 4:	dia="Jueves";
	break;	
		
	case 5:	dia="Viernes";
	break;
	
	case 6:	dia="Sábado";	
	}
	alert("Hoy es " + dia);
}

//for

function bucleFor(){
	//var colores = ["Rojo", "Naranja","Amarillo","Verde","Cian","Azul", "Violeta"];
//	var x;
//	var texto="";
//	for(x=0;x<colores.length;x++){  //marcamos inicio, final y qué se ejecuta al final de la condición
//		texto += colores[x] + "\n";	//esto es lo mismo que texto=texto+colores[i]
//		}
//	alert("Los colores del arcoiris son: " + "\n"+ texto);			
//}

	var y = prompt("introduce un número y te daré su tabla de multiplicar");	
	var z = parseInt(y);
	var a = isNaN(z);
	var x;
	var resultado ="";	
	if (a === false){		
		for(x=1;x<=10;x++){
			resultado += y + " x " + x + " = " + (x * z + "\n"); 			
		}
		alert ("la tabla de multiplicar es: \n" +  resultado);
	}
	else{
		alert("No has introducido un número");
		bucleFor();		
	}	
}

//while

function mientrasWhile(){
	var x = 0;
	var texto="";
	while (x<10) {
		texto = texto +"\n" + "El número es " + x;
		x++;
	}	
	alert(texto);
}

//while do

function hacerMientrasDoWhile(){	
	var x = 0;
	var texto="";
	do {	
		texto = texto +"\n El número es: " + x;
		x++;
		}
	while (x<=10){
		alert(texto);
	}
}