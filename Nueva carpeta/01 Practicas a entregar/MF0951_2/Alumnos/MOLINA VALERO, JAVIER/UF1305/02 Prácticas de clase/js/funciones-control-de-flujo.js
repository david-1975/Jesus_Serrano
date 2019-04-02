// JavaScript Document
//if
function horaIf(){
	var fecha=new Date();
	var hora=fecha.getHours();
	
	if(hora>=7 && hora<=12){
		alert("Buenos días");
		}
	
	if(hora>=13 && hora<=18){
		alert("Buenas tardes");
		
	}
	if(hora>=19 && hora<=23){
		alert("Buenas noches");
	}
	if(hora>=0 && hora<=6){
		alert("Es de madrugada");
	}
}
//else
function horaElse(){
	/*var fecha=new Date();
	var hora=fecha.getHours();
		if(hora>=00 && hora<=12){
		alert("Es antes de mediodía");
	}else{
		alert("Es pasado mediodía");
	}*/
	
	var edad=parseInt(prompt("Introduce tu edad"));
	if(edad>=18){
		alert("Eres mayor de edad");
	}else{
		alert("Eres menor de edad");
	}

}


//else if()
function horaElseIf(){
	var fecha=new Date();
	var hora=fecha.getHours();
	
	if(hora>=7 && hora<=12){
		alert("Buenos días");
		}else if(hora>=13 && hora<=18){
		alert("Buenas tardes");
		}else if(hora>=19 && hora<=23){
		alert("Buenas noches");
		}else if(hora>=0 && hora<=6){
		alert("Es de madrugada");}
}

//switch
function switchCase(){
	var fecha=new Date();
	var hora=fecha.getHours();
	var diaSemana=fecha.getDay();
	var mes=fecha.getMonth();
	
	var diaLetra;
	switch(diaSemana){
		case  0:
			diaLetra="Domingo";
			break;
		case 1:
			diaLetra="Lunes";
			break;
		case 2:
			diaLetra="Martes";
			break;
		case 3:
			diaLetra="Miercoles";
			break;
		case 4:
			diaLetra="Jueves";
			break;
		case 5:
			diaLetra="Viernes";
			break;
		case 6:
			diaLetra="Sabado";
			break;
			
	}
	
	switch(mes){
		case 1:
		case 2:
		case 3:
			mes="primer trimestre";
			break;
		
		case 4:
		case 5:
		case 6:
			mes="segundo trimestre";
			break;
		
		case 7:
		case 8:
		case 9:
			mes="tercer trimestre";
			break;
		case 10:
		case 11:
		case 12:
			mes="cuarto trimestre";
			break;
	}
	
	alert("Hoy es "+diaLetra+" y estamos en el "+mes);
}

//for
function bucleFor(){
	
	var textoUno=""
	for(a=0;a<=10;a++){
		textoUno+=(a+" *5= "+a*5+"\n");
		
	}
	alert(textoUno);
	var colores=["rojo", "verde", "azul"];
	var texto="";
	for(i=0;i<colores.length;i++){
		
		texto+=colores[i]+"\n";
		
	}
	alert(texto);
}

//while

function mientrasWhile(){
	
	var i=0;
	var texto="";
	while(i<=10){
		
		texto+="El número i es: "+i+"\n";
		i++;
	}
	alert(texto);
	/*var numero=parseInt(prompt("Introduce un numero primo"));
	var numeros=new Number();
	var primo=numeros-numero;
	var dividir=numero/;
	alert(dividir);*/
}

//do while
function hacerMientrasDoWhile(){
	
	var texto="";
	i=0;
	do{
		texto+="El número de i es: "+i+"\n";
		i++;
	}while(i<=10);
	alert(texto);
}

//break
function romperBucle(){
	i=0;
	texto="";
	while(i<=10){
		i++;
		texto+="El valor de i es:"+i+"\n";
		if(i===5){break;}
		
	}
	alert(texto);
}
//continue
function continuarBucle(){
	var numero=parseInt(prompt("Introduce un número del 1 al 10 que no quieres que se muestre"));
	var i=-1;
	var texto="";
	
	
	while(i<=10){
		
		i++;
		if (i===numero){continue;}
		texto+="Muestro el valor de i hasta 10 menos el "+numero+": i="+i+"\n";
		
		
		
	}
	alert(texto);
	
}
	
	