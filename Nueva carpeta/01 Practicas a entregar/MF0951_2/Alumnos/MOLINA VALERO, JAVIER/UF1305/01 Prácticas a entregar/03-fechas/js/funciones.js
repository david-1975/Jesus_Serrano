// JavaScript Document
//ejercicio 1
function edad(){
	var ano=new Date((document.getElementById("date1").value));
	
	var fecha=new Date();
var susAnos=ano.getFullYear();
	var anoActual=fecha.getFullYear();
	var anoX=fecha.getFullYear()-ano.getFullYear();
	
	var edadMs=fecha-ano;
	var edadSg=edadMs/1000;
	var edadMin=edadSg/60;
	var edadHoras=edadMin/60;
	var edadDias=edadHoras/24;
	var edadAnos=edadDias/366.4898593865741;
	if(ano.setFullYear(anoActual)>fecha){
		
		anoX=anoX-1;
		
	}
	
	document.getElementById("etiqueta1").innerHTML="<ul>"+"<li>Actualmente tienes "+anoX+" años</li>"+
													"<li>Has vivido: "+edadDias+" días</li>"+
													"<li>Has vivido: "+edadHoras+" horas</li>"+
													"<li>Has vivido: "+edadMin+" minutos</li>"+"</ul>";
	console.log(fecha-ano+" "+edadAnos.toFixed(0));
}

//ejericio2
function dma(){

var dia=Number(document.getElementById("number2").value);
var mes=Number(document.getElementById("number3").value);
var ano=Number(document.getElementById("number4").value);
	var fecha=new Date(ano,mes,dia);
	var fechaActual=new Date();
	
	document.getElementById("etiqueta2").innerHTML=fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()+"<br>"+
													fechaActual.getHours()+"/"+fechaActual.getMinutes()+"/"+fechaActual.getSeconds();

console.log(fecha);
}

//ejercicio3
function fecha(){
	var fecha=new Date(document.getElementById("date3").value);
	var dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
	var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"+"Diciembre"]
	document.getElementById("etiqueta3").innerHTML="La fecha de tu nacimiento fue "+dias[fecha.getDay()]+", "+fecha.getDate()+
		" de "+meses[fecha.getMonth()]+" de "+fecha.getFullYear();
}

//ejercicio4
function usuario(){
	var usuario=document.getElementById("text4").value;
	var fecha=new Date();
	
	document.getElementById("etiqueta4").innerHTML="Hola "+usuario+", has iniciado sesión el día "+
		fecha.getDate()+"/"+fecha.getMonth()+"/"+fecha.getFullYear()+
		" a las "+fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
}

//ejercicio5
function cumple(){
	var nacimiento=new Date(document.getElementById("date5").value);
	var fecha=new Date();
	var anoActual=fecha.getFullYear();
	var diaCumple=nacimiento.getDate();
	var mesCumple=nacimiento.getMonth();
	var nacimientoB=new Date(anoActual,mesCumple,diaCumple);
	var faltaCumpleMs=nacimientoB-fecha;
	var faltaCumpleSg=faltaCumpleMs/1000;
	var faltaCumpleMin=faltaCumpleSg/60;
	var faltaCumpleHoras=faltaCumpleMin/60;
	var faltaCumpleDias=faltaCumpleHoras/24;
	var diasredondeado=parseInt(faltaCumpleDias.toFixed());

	
	
	if(diasredondeado==-1){
	
		document.getElementById("etiqueta5").innerHTML="Felicidades, hoy es tu cumlpeaños";
	}else if(diasredondeado<0){
		var anoMas=anoActual+1;
		var nacimientoC=new Date(anoMas,mesCumple,diaCumple);
		var faltaCumpleMsC=nacimientoC-fecha;
	var faltaCumpleSgC=faltaCumpleMsC/1000;
	var faltaCumpleMinC=faltaCumpleSgC/60;
	var faltaCumpleHorasC=faltaCumpleMinC/60;
	var faltaCumpleDiasC=faltaCumpleHorasC/24;
	var diasredondeadoC=parseInt(faltaCumpleDiasC.toFixed());
		
		document.getElementById("etiqueta5").innerHTML="Tu cumpleaños ya ha pasado, faltan "+diasredondeadoC+" días para tu próximo cumpleaños";
		
		}else{
			document.getElementById("etiqueta5").innerHTML="Faltan "+(diasredondeado+1)+" días para tu cumpleaños";
		}
	console.log(diasredondeado+" "+typeof(diasredondeado));

	
	
}