// JavaScript Document


//reloj
function reloj(){
	var fecha=new Date();
	var ano=fecha.getFullYear();
	var mes=fecha.getMonth()+1;
	var dia=fecha.getDate();
	var hora=fecha.getHours();
	var minuto=fecha.getMinutes();
	var segundo=fecha.getSeconds();
	var diaSemana=fecha.getDay();
	
	document.getElementById("enlaceAno").innerHTML="Año: "+ano;
	
	if(mes<10){
		mes="0"+mes;
	}
	
	document.getElementById("enlaceMes").innerHTML="Mes: "+(mes );
	
	if(dia<10){
		dia="0"+dia;
	}
	
	document.getElementById("enlaceDia").innerHTML="Día: "+dia;
	
	if(hora<10){
		hora="0"+hora;
	}
	
	document.getElementById("enlaceHora").innerHTML="Hora: "+hora;
	var minutoLargo=minuto.length;
	
	if(minuto<10){
		minuto="0"+minuto;
	}
	
	document.getElementById("enlaceMin").innerHTML="Minuto: "+minuto;
	
	if(segundo<10){
		segundo="0"+segundo;
	}
	
	document.getElementById("enlaceSg").innerHTML="Segundo: "+segundo;
	
	var dias=["Domingo", "Lunes","Martes","Miércoles","Jueves", "Viernes","Sábado"];
	var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	
	document.getElementById("fechaLarga").innerHTML="Hoy es "+dias[diaSemana]+" "+dia+" de "+ meses[fecha.getMonth()]+ " del "+ano;
	
	setTimeout(reloj,1);
	
}





//Método new Date()
function nuevaFecha(){
	var fecha=new Date();
	alert("La fecha actual es:"+"\n"+fecha);
}

//Método getFullYear()
function nuevoAno(){
	
	var fecha=new Date();
	alert("El año actual es:"+"\n"+fecha.getFullYear());
}

//Método getMonth()
function conseguirMes(){
	var fecha=new Date();
	var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	alert("El mes actual según la máquina es : "+fecha.getMonth()+"\n"+"Y según nosotros es: "+meses[fecha.getMonth()]);
}

//getDate()
function conseguirDia(){
	 var fecha=new Date();
	alert("El día actual es:"+"\n"+fecha.getDate());
	
}
//Método getHours()
function conseguirHora(){
	var fecha=new Date();
	alert("La hora actual es:"+"\n"+fecha.getHours());				   
}

//Método getMinutes()
function conseguirMin(){
	var fecha=new Date();
	alert("Estamos en el minuto"+"\n"+fecha.getMinutes());
}

//Método getSeconds()
function conseguirSeg(){
	var fecha=new Date();
	alert("Estamos en el segundo"+"\n"+fecha.getSeconds());
}

//Método getMilliseconds()
function conseguirMseg(){
	var fecha=new Date();
	alert("Estamos en el milisegundo"+"\n"+fecha.getMilliseconds());
}

//Método getTime()
function msegDesde(){
	var fecha=new Date();
	alert("Estamos en el milisegundo desde 01/01/1970"+"\n"+fecha.getTime());
}

//Método getDay()
function diaDeSemana(){
	var fecha=new Date();
	var dSemana=["Domingo", "Lunes","Martes","Miercoles","Jueves", "Viernes","Sábado"];
	alert("El día de la semana según la máquina es: "+fecha.getDay()+"\n"+"Y según nosotros es: "+dSemana[fecha.getDay()]);
}
