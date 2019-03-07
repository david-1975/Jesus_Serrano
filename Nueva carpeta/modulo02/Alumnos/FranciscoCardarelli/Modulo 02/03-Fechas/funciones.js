// JavaScript Document

function edad() {
	var dato = parseInt(document.getElementById("idCampo").value);
	var fecha = new Date();
	var anual = fecha.getFullYear();
	var edad = anual - dato;
	
	document.getElementById("demo").innerHTML = "Si naciste en el año " + dato + "," + " tienes " + edad + " años.";
	}
	
function anual() {
	var dato = parseInt(document.getElementById("idCampo1").value);
	var siguiente = dato + 1;
	var pasado = dato -1;
	
	document.getElementById("demo1").innerHTML = " Si el año seleccionado es el" + dato + " el año pasado fue el " + pasado + 
	" y el año que viene será el " + siguiente;
	}

function dma() {
	var dato = parseInt(document.getElementById("idCampo2").value);
	var dato1 = parseInt(document.getElementById("idCampo2a").value);
	var dato2 = parseInt(document.getElementById("idCampo2b").value);
			
	document.getElementById("demo2").innerHTML = "El formato de la fecha es: " + dato1 + "/" + dato + "/" + dato2;
	}

function hms() {
	var dato = parseInt(document.getElementById("idCampo3").value);
	var dato1 = parseInt(document.getElementById("idCampo3a").value);
	var dato2 = parseInt(document.getElementById("idCampo3b").value);
		
	document.getElementById("demo3").innerHTML = "El formato de la hora es: " + dato + ":" + dato1 + ":" + dato2;
	}

function punto5() {
	var fecha = new Date();
	var mes = fecha.getMonth();
	var mesNow = fecha.getMonth() +1;
	var mesN = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "Julio", "Agosto", "Septiembre", 
	"Octubre", "Noviembre", "Diciembre"];
	var dia = fecha.getDay();
	var diaN = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
	var hoy = fecha.getDate()
	var anual = fecha.getFullYear();
	var formato = "Hoy es: " + "<strong>" + diaN[dia] + ", " + hoy + " de " + mesN[mes] + " (" + "Mes: " + mesNow + ") del " + anual + "</strong>";
	
	document.getElementById("demo4").innerHTML = formato;
	}
	
function punto6() {
	var fecha = new Date();
	var dia = fecha.getDate();
	var mes = fecha.getMonth() +1;
	var anual = fecha.getFullYear();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();
	var formato = "Has iniciado sesión el día: " + "<strong>" + dia + "/" + mes + "/" + anual + " a las " + 
	hora + ":" + minutos + ":" + segundos + "." + "</strong>";
	
	document.getElementById("demo5").innerHTML = formato;
	document.getElementById("demo5").style.color = "green";
	}	
	
function punto7() {
	var fechaSist = new Date();
	var fechaDato = new Date(document.getElementById("idCampo4").value);  //formulario convertido en formato fecha (new Date)
	  //alert(fechaDato + typeof(fechaDato));
	var fechaModificada = new Date().getFullYear() + "-" + (fechaDato.getMonth()+1) + "-" + fechaDato.getDate();
	  //alert(fechaModificada);
	var convertirFechaDato = new Date(fechaModificada);
	  //alert(convertirFecha);	
	if (fechaSist > convertirFechaDato) {
		var resta = (fechaSist - convertirFechaDato);
	}
	else {
		var	resta = (convertirFechaDato - fechaSist);
	}
	  //alert(resta + " " + typeof(resta));
	var dias = ((((resta / 1000) / 60) / 60) / 24);
	  //alert(dias +" " + typeof(dias));
	var decimalDias = dias.toString().indexOf(".");
	  //alert(decimalDias + " " + typeof(decimalDias));
	var numeroFinal = dias.toString().substring(0,decimalDias);
	  //alert(decimalDias +" " + typeof(decimalDias));
	
	document.getElementById("demo6").innerHTML = "Faltan " + "<strong>" + numeroFinal  + "</strong>" + " días para tu cumpleaños.";
	document.getElementById("demo6").style.color = "green";
	}	

function punto8() {
	var fechaDato = document.getElementById("idCampo5").value;
	var newfechaDato = new Date(fechaDato);
	  //alert(newfechaDato + typeof(newfechaDato));
	var fechasist = new Date();
	if (fechasist > newfechaDato) {
		var resta = fechasist - newfechaDato; //Milisegundos - Number
	} else {
	alert ("Por favor introduce una fecha válida.");
	}
	  //alert(resta + " " + typeof(resta));
	var anos = (((((resta / 1000) / 60) / 60) / 24) / 365);
	  //alert(anos +" " + typeof(anos));
	var anosRedondeado = anos.toString().substring().indexOf(".");
	var extractAno = anos.toString().substring(0,anosRedondeado);
	
	var dias = ((((resta / 1000) / 60) / 60) / 24);
	var diasRedondeado = dias.toString().substring().indexOf(".");
	var extractDias = dias.toString().substring(0,diasRedondeado);
	
	var horas = (((resta / 1000) / 60) / 60);
	var horasRedondeado = horas.toString().substring().indexOf(".");
	var extractHora = horas.toString().substring(0,horasRedondeado);

	var minutos = ((resta / 1000) / 60);
	var minutosRedondeado = minutos.toString().substring().indexOf(".");
	var extractMinutos = minutos.toString().substring(0,minutosRedondeado);

	var segundos = (resta / 1000);
	var segundosRedondeado = segundos.toString().substring().indexOf(".");
	var extractSegundos = segundos.toString().substring(0,segundosRedondeado);
		  
	document.getElementById("demo7").innerHTML =
	"Has vivído " + extractAno + " años." + "<br>" + 
	"Has vivído " + extractDias + " días." + "<br>" + 
	"Has vivído " + extractHora + " horas." + "<br>" + 
	"Has vivído " + extractMinutos + " minutos." + "<br>" + 
	"Has vivído " + extractSegundos + " segundos.";
	}	
	
function punto9() {
	var fechaDato = document.getElementById("idCampo6").value;
	var convertirFecha = new Date(fechaDato);
	var trimestre;
	switch (convertirFecha.getMonth()) {
		case 0:
		case 1:
		case 2:
			trimestre = "Primer trimestre"; 
			break;
		case 3:
		case 4:
		case 5:
			trimestre = "Segundo trimestre"; 
			break;
		case 6:
		case 7:
		case 8:
			trimestre = "Tercer trimestre"; 
			break;
		case 9:
		case 10:
		case 11:
			trimestre = "Cuarto trimestre"; 
			break;
		}	
		
	document.getElementById("demo8").innerHTML = trimestre;
	document.getElementById("demo8").style.color = "green";
	}

function punto10() {
	var fecha = new Date(document.getElementById("idCampo7").value);
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	var signo = "";
	var imagen = "";	
		if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
			 signo = "Acuario";
			 imagen = "img/acuario01.jpg";
			} 
		else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
			 signo = "Piscis";
			 imagen = "img/piscis02.jpg";
			}
			else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
			 signo = "Aries";
			 imagen = "img/aries03.jpg";
			}
			else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
			 signo = "Tauro";
			 imagen = "img/tauro04.jpg";
			}
			else if ((mes == 5 && dia >=21) || (mes == 6 && dia <= 20)) {
			 signo = "Geminis";
			 imagen = "img/geminis05.jpg";
			}
			else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
			 signo = "Cancer";
			 imagen = "img/cancer06.jpg";
			}
			else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
			 signo = "Leo";
			 imagen = "img/leo07.jpg";
			}
			else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
			 signo = "Virgo";
			 imagen = "img/virgo08.jpg";
			}
			else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <=22)) {
			 signo = "Libra";
			 imagen = "img/libra09.jpg";
			}
			else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
			 signo = "Escorpio";
			 imagen = "img/escorpio10.jpg";
			}
			else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 20)) {
			 signo = "Sagitario";
			 imagen = "img/sagitario11.jpg";
			}
			else if ((mes == 12 && dia >=21) || (mes == 1 && dia <=20)) {
			 signo = "Capricornio";
			 imagen = "img/capricornio12.jpg";
			}
			else {
			 signo = "algo ha fallado";
			 imagen = "img/error00.jpg";
			}
	
	document.getElementById("demo9").innerHTML = signo;
	document.getElementById("imagen").src = imagen;
	
}