// JavaScript Document

function horaIf() {
	var fecha = new Date();
	var hora = fecha.getHours();
	var mensaje="" ;
	
	/*if (hora >= 12) {
		mensaje += "Buenos tardes";
		alert(mensaje);
	}*/
	if (hora >= 7 && hora <= 12) {
		mensaje = "buenos días";
	}
    if (hora >= 13 && hora <= 18) {
		mensaje = "buenas tardes";
	}
    if (hora >= 18 && hora <= 23) {
		mensaje = "buenas noches";
	}
    if (hora >= 0 && hora < 7) {
		mensaje = "estamos de madrugada";
	}
	alert(mensaje);

}

function horaElse(){
	var fecha = new Date();
	var hora = fecha.getHours();
	
	if (hora >=7 && hora <= 12) {		
		alert("buenos dias");
	}
	else { 
		alert("buenas tardes");
	}
}

function horaElseIf(){
	var hora= new Date().getHours();

	if (hora < 12) {
	  mensaje = "buenos dias";
	} 
	else if (hora < 20) {
	  mensaje = "buenos tardes";
	} 
	else {
		mensaje = "buenas noches";
	}
	  alert(mensaje);

}
function switchCase(){
	
	var diaSemana = new Date().getDay();
	
	alert("numero de dia " + diaSemana);
	
	switch (diaSemana){       /*metodo encadenado  switch( new date().getDay();){} */
		case 0 :
			diaSemana="domingo";
			break;
		case 1 :
			diaSemana="lunes";
			break;
		case 2 :
			diaSemana="martes";
			break;
		case 3 :
			diaSemana="miercoles";
			break;	
		case 4 :
			diaSemana="jueves";
			break;
		case 5 :
			diaSemana="viernes";
			break;
		case 6 :
			diaSemana="sabado";
					
	}
	alert("Corresponde a :" + diaSemana);
}


function bucleFor(){
	
	var frutas = [ "pera","melon","mandarina","limon","manzana","piña"];
	var text ="";
	var i;
       for (i = 0; i < frutas.length; i++) {
         text +=( i  + " "+ frutas[i] + "\n");
            }
	alert(text);
}

function mientrasWhile(){
	
var text = "";
var i = 0;
while (i < 10) {
  text += "numero"+" " + i + " " + "\n";
  i++;	
    }
	alert( text );
}

function hacerMientrasDoWhile(){

	var text = ""
	var i = 0;

	do {
	  text += "numero"+" " + i + " " + "\n";
	  i++; 
	}
	while (i < 10);
	alert(text);
}


function romperBucle(){
	var text = "";
	var i;
	for (i = 0; i < 10; i++) {
	  if (i === 5) { break; }
	  text += "numeros < 5 " + " " + " son el : " + i + "\n";
	}
	alert(text);
}

function continuarBucle(){
	
	var text = "";
	var text1 = "";
	var i;
	for (i = 5; i < 10; i++) {
	  if (i === 5) { continue; }
	  	  text1 += "salta condicion < 5 " + " " + " son el : " + i + "\n";
	     }
	for (i = 0; i < 10; i++) {
	  if (i === 5) { break; }
	  text += "numeros < 5 " + " " + " son el : " + i + "\n";
	}
	alert(text + text1);
}