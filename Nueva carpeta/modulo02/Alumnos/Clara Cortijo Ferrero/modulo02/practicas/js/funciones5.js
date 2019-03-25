// JavaScript Document

//Estructura if
function horaif(){

var fecha = new Date();
var hora= fecha.getHours();
var mensaje ="Buenos días";
//var hora = new Date().getHours();

if (hora>=12) {
	
	mensaje="Son más de las 12";
	
	}
	
	alert(mensaje);
	
}


//Estructura if else

function horaelse(){

var fecha = new Date();
var hora= fecha.getHours();

if(hora>=12){
	alert("Son más de las 12")
		
	}
	
	else{
		alert("Son menos de las 12")
		
		
		}
		
}



// else if
function horaelseif(){

var fecha = new Date();
var hora= fecha.getHours();


if(hora>=8 && hora<15){
	alert("Buenos días")
	
	
	} 
	
	
	else if(hora>=15 && hora<21){
		alert("Buenas tardes")
		
		
		
		} else{
			alert("Buenas noches")
			
			
			}
			
}


// else if
function horaelseif4(){

var fecha = new Date();
var hora= fecha.getHours();


if(hora>=0 && hora<7){
	alert("Buena madrugada")
	
	
	} 
	
	
	else if(hora>=7 && hora<14){
		alert("Buenos días")
		
		
		
		} 
		
		else if(hora>=14 && hora<20){
		alert("Buenas tardes")
		
		
		
		} 
		
		
		else{
			alert("Buenas noches")
			
			
			}
			
}



// switch

function interruptor(){
var dia;
switch(new Date().getDay()) {
	case 0:
	
	dia="Domingo";
	break;
	
	case 1:
	dia="Lunes";
	break;
	
	case 2:
	dia="Martes";
	break;
	
	case 3:
	dia="Miércoles";
	break;
	case 4:
	dia="Jueves";
	break;	
	case 5:
	dia="Viernes";
	break;
	
	case 6:
	dia="Sábado";
	
	}
	
	
	var mes;
	switch(new Date().getMonth()) {
	case 0:
	
	mes="Enero";
	break;
	
	case 1:
	mes="Febrero";
	break;
	
	case 2:
	mes="Marzo";
	break;
	
	case 3:
	mes="Abril";
	break;
	case 4:
	mes="Mayo";
	break;	
	case 5:
	mes="Junio";
	break;
	
	case 6:
	mes="Julio";
	break;
	
	case 7:
	mes="Agosto";
	break;
	case 8:
	mes="Septiembre";
	break;
	
	case 9:
	mes="Octubre";
	break;
	case 10:
	mes="Noviembre";
	break;
	
	case 11:
	mes="Diciembre";
	break;
	
	default: 
	mes = "Ese número no corresponde a ningún mes";
	
		
	
	}
	
	
	
	
	
	
	alert("Hoy es " + dia.slice(0,3) + " del mes de " + mes)
	}
	
	
	
	
// switch mes

function interruptormes(){
var mes;
switch(new Date().getMonth()) {
	case 0:
	
	mes="Enero";
	break;
	
	case 1:
	mes="Febrero";
	break;
	
	case 2:
	mes="Marzo";
	break;
	
	case 3:
	mes="Abril";
	break;
	case 4:
	mes="Mayo";
	break;	
	case 5:
	mes="Junio";
	break;
	
	case 6:
	mes="Julio";
	break;
	
	case 7:
	mes="Agosto";
	break;
	case 8:
	mes="Septiembre";
	break;
	
	case 9:
	mes="Octubre";
	break;
	case 10:
	mes="Noviembre";
	break;
	
	case 11:
	mes="Diciembre";
	
		
	
	}
	alert("Estamos en el mes de " + mes)
	}
	
	
	
	
//for






function bucle(){
	
var colores = ["Rojo", "Verde","Azul","Amarillo","Naranja","Morado","Violeta", "Blanco","Marrón","Negro","Gris"]
var i;
texto="";
for(i=0;i<colores.length;i++){
	texto = texto + colores[i] + "\n";
	
	
	
	
	
	}
	
	alert("Los colores son: " + "\n"+ texto);
	}
	
	
	
	
function mientras(){
	
var i = 0;
var texto="";
while(i<10){
	texto = texto +"\n" + "El número es " + i;
	i++;
	
	
	}
	
	alert(texto);
	}
	
	
	
	
function hacerMientrasDoWhile(){	
	var i = 0;
	var texto="";

	do {
		texto = texto +"\n El número es: " + i;
		i++;
		}

	while(i<10){
		alert(texto);
		}	

	}
	
	
	
	
