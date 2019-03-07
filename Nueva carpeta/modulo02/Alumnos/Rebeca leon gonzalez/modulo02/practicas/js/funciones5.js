// JavaScript Document

// Estructura if
function horaIf(){
var fecha = new Date();
var hora = fecha.getHours();
var mensaje = "Buenos días";
if(hora >= 12){
	mensaje = "Son mas de las 12";
	
	}
	alert(mensaje);
}
 // Estructura if else
 
function horaElse(){
	 
var hora = new Date().getHours();

 if( hora >=12){ //al reunirse la condicion de los parentesis hace el primer alert. y sino el segundo alert.
	 alert ("buenas tardes");
	 } else{
	alert ("buenos dias"); 
		 }
 
}

//Extructura else if

function horaElseIf(){
var hora = new Date().getHours();
if( hora >0 && hora <= 6){
		alert ("Es de madrugada");
	} 
	else if( hora >= 7 && hora <= 12){
			alert("Buenas días");
			}
			else if( hora >=13 && hora <= 18){
					alert ("Buenas tardes");
					}
					else{
						alert ("Buenas noches");
						}
			
	}

//Extructura switch
/*function switchCase(){
var dia;
switch(new Date().getDay()){ // Aqui me da el numero de dia 
	case 0: // todos las case tienen que ser numero aqui. porque en el switch nos da numero si fuese texto los casos serian textos
	dia="Domingo";
	break;
	case 1:
	dia="Lunes";
	break;
	case 2:
	dia="Martes";
	break;
	case 3:
	dia="Miercoles";
	break;
	case 4:
	dia="Jueves";
	break;
	case 5:
	dia="Viernes";
	break;
	case 6:
	dia="Sabado";
	}
	alert ("Hoy es " + dia);
}*/
function switchCase(){
var mes;
switch(new Date().getMonth()){ 
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
case 8:                           //los case se pueden agrupar case1 case2 case3 mes=primer trimestre
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
	
default: // si no es ningun caso anterior entonces este. 
	mes= "El número no equivale a ningún mes";
	}
	alert ("Estamos en el mes 11 que es : "+ "\n" + mes.slice(0,3));
}

// Estructura del for. for(valor inicial;condición a resolver; proximo valor para no entrar en bucle)
function bucleFor(){
var coches = ["ford","renault","opel","chevrolet","seat"];
var texto = "";
var i;
for(i = 0; i < coches.length; i++){
	texto+=coches[i] + "\n" ; //no puede quedarse coche[]solo porque da error hay que unirle otra variable sin nada"" texto y coche seune
	}
	alert("valores del array coches son :"+ "\n" + texto);
}

//Extructura while 

function mientrasWhile(){
	var text = "";
	var i = 0;
while (i < 10){
	text += "\n" + "El número es :" + i; i++;
	}
	alert (text);	
	
	}
	
	//Extructura Dowhile 

function mientrasDoWhile(){
	var text = "";
	var i = 0;
	do 	{
	text += "\n" + "El número es :" + i; i++;
	}
	while (i < 10);
	alert (text);	
	
	}
	