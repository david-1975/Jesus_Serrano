// JavaScript Document
function edad(){
	
	var fechaUser = new Date(document.getElementById("date1").value);
	var fechaActual = new Date();
	
	var mesUser = fechaUser.getMonth();
	var diaUser = fechaUser.getDate();
	
	var mesActual = fechaActual.getMonth();
	var diaActual = fechaActual.getDate();
	
	var edadUser = "";
	if ((mesUser >= mesActual) && (diaUser >= diaActual)) {
		edadUser = fechaActual.getFullYear() - fechaUser.getFullYear();
	document.getElementById("etiqueta1").innerHTML = edadUser-1 + " Tu cumple no ha llegado aún";
	} else if ((mesUser <= mesActual) && (diaUser <= diaActual)) { 
		edadUser = fechaActual.getFullYear() - fechaUser.getFullYear();
	document.getElementById("etiqueta1").innerHTML = edadUser + " Tu cumple ya ha pasado";
	} else {
		edadUser = fechaActual.getFullYear() - fechaUser.getFullYear();
	document.getElementById("etiqueta1").innerHTML = edadUser + " Felicidades hoy es tu cunple ";
	}
	
}

function formatoFecha(){
	var dia = Number(document.getElementById("number2").value);
	//alert(dia);
	var mes =Number(document.getElementById("number3").value);
	//alert(mes);
	var ano = Number(document.getElementById("number4").value);
    //alert (ano);
	var fechAct = new Date();
	//alert (fechAct);
	var hora = fechAct.getHours();
	var minutos = fechAct.getMinutes();
	var segundos = fechAct.getSeconds();
    //alert (segundos);
	
	document.getElementById("etiqueta2").innerHTML=" La fecha introducida es : " + dia + "/" + mes + "/" + ano + "<br>" +
	                                               " La hora actual es : " + hora + "/" + minutos  + "/" + segundos ; 
}

function fechaLarga (){
	var fecha = new Date(document.getElementById("date3").value);
	var año = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var diasemana = fecha.getDay();
	

	  var nombreDia = new Array(7);
	  nombreDia[0] = "Lunes";
	  nombreDia[1] = "Martes";
	  nombreDia[2] = "Miercoles";
	  nombreDia[3] = "Jueves";
	  nombreDia[4] = "Viernes";
	  nombreDia[5] = "Sabado";
	  nombreDia[6] = "Domingo";
	  var d = nombreDia [diasemana];
	  
	
	var nombreMes = new Array(12);
	  nombreMes[0] = "Enero";
	  nombreMes[1] = "Febrero";
	  nombreMes[2] = "Marzo";
	  nombreMes[3] = "Abril";
	  nombreMes[4] = "Mayo";
	  nombreMes[5] = "Junio";
	  nombreMes[6] = "Julio";
	  nombreMes[7] = "Agosto";
	  nombreMes[8] = "Septiembre";
	  nombreMes[9] = "Octubre";
	  nombreMes[10] = "Noviembre";
	  nombreMes[11] = "Diciembre";
	 var m = nombreMes [mes]; 
	



	
	
	
	document.getElementById("etiqueta3").innerHTML=
		"Hoy es " + " " + d + ", " + dia + " de " + m + " de " + año ;
	
	
}

function inicioSesion (){
	
	var usuario = document.getElementById("text4").value;
	//alert(usuario);
	var contraseña = document.getElementById("password4").value;
	//alert(contraseña);
	var fechaAct = new Date(); 
	var ano = fechaAct.getFullYear();
	//alert(ano);
	var mes = fechaAct.getMonth();
	var dia = fechaAct.getDate();
	var hora = fechaAct.getHours();
	var minutos = fechaAct.getMinutes();
	var segundos = fechaAct.getSeconds();
	//alert(segundos);
	document.getElementById("etiqueta4").innerHTML=
		"Hola " + "<strong> <em>" + usuario + "</em> </strong>" + ", " + " has iniciado sesión el día : " + dia + "/" + mes + "/" + ano + " a las " + hora + ":" + minutos + ":" + segundos ;
	
	
	}

function cumpleaños(){
	
	 var fechaUser = new Date(document.getElementById("date5").value);	
	 var fechaAct = new Date();
	
	var anoUser = fechaUser.getFullYear();
	var mesUser = fechaUser.getMonth();
	var diaUser = fechaUser.getDate();
	var horaUser = fechaUser.getHours();
	var minutosUser = fechaUser.getMinutes();
	var segundosUser = fechaUser.getSeconds();
	
	var añoAct = fechaAct.getFullYear();
	var mesAct = fechaAct.getMonth();
	var diaAct = fechaAct.getDate();
	var horaAct = fechaAct.getHours();
	var minutosAct = fechaAct.getMinutes();
	var segundosAct = fechaAct.getSeconds();
	
	
	
	
}