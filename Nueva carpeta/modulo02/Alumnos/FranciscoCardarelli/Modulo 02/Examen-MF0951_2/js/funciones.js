// JavaScript Document

//ejercicio1
function fechas() {
	var dato = document.getElementById("idCampo").value;
	//alert(dato);
	var fechaDato = new Date(dato);
	//alert(fechaDato);
	var fechaNow = new Date();
	//alert(fechaNow);
	var anual = fechaDato.getFullYear();
	if (dato === "") {
		document.getElementById("demo").innerHTML = "<span style=\"color:blue\">" + 
		"No has introducido ninguna fecha" + "</span>";
		} 
		else if (anual > 2018){
		document.getElementById("demo").innerHTML = "<span style=\"color:red\">" + 
		"Introduce una fecha anterior a la actual" + "</span>";
		}
		else {
		var convertFecha = new Date (dato).getTime();
		var fechaSis = new Date().getTime();
		var resta = fechaSis - convertFecha ;
		var segundos = (resta / 1000);
		var minutos = (segundos / 60);		
		var horas = (minutos / 60);		
		var dias = (horas / 24).toString();
		var decimal = dias.indexOf(".");
		var redondo = dias.substr(0,decimal);
	
	document.getElementById("demo").innerHTML = "Faltan: " + "<stron>" + redondo + "</stron>"  + " días.";
	document.getElementById("demo").style.color = "green";
	}	
	var fechaRedonda = 
	document.getElementById("demo").innerHTML = "Faltan " + restaFecha + " días.";
	
	}
	
//Ejercicio 2	
function ejercicio2() {
	var dato2 = document.getElementById("idCampo2").value;
	//alert(dato2); //2018-11-15
	if (dato2 === "") {
		document.getElementById("demo2").innerHTML = "<span style=\"color:red\">" + 
		"Por favor introduce una fecha" + "</span>";
		} 
		else {
	var fecha2 = new Date(dato2);
	//alert(fecha2); // Thu Nov 15 2018 01:00:00 GMT+0100 (hora estándar de Europa central)
	var mesNow = fecha2.getMonth();
	//alert(mesNow); //10
	var mesName = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	
	var diaNow = fecha2.getDate();
	//alert(diaNow);
	var diaW = fecha2.getDay();
	var diaName = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
	
	var anual = fecha2.getFullYear();
		}
	document.getElementById("demo2").innerHTML = "La fecha es: " + "<strong>" + diaName[diaW] + ", " + diaNow + " de " + mesName[mesNow] + ", " + anual + "</strong>";
	document.getElementById("demo2").style.color = "green";
	}
	
//Ejercicio 3
function ejercicio3() {
	var dato3 = document.getElementById("idCampo3").value; //alert (dato3);
	var espacio = dato3.indexOf(" ");
	if (espacio > -1) {
		alert("Por favor no introducir espacios, solo comas.");
		}
		else {
		var	coma = dato3.indexOf(",");
		var coma1 = dato3.lastIndexOf(",");
		var fruta = dato3.substr(0,coma);
		var fruta1 = dato3.substring(coma+1, coma1);
		var fruta2 = dato3.substr(coma1+1);
		}
	document.getElementById("demo3").innerHTML = "Tus frutas son: "+ "<ul>" + "<li>" + fruta + "</li>" + "<li>" + fruta1 + "</li>" + "<li>" + fruta2 + "</li>" + "</ul>";
}
	
	//Ejercicio 4
function ejercicio4() {
	var dato4 = document.getElementById("idCampo4").value;
	//alert (dato4);
	var sesionNow = new Date()
	var dia = sesionNow.getDay()
	var mes = sesionNow.getMonth()
	var ano = sesionNow.getFullYear()
	var hora = sesionNow.getHours()
	var minuto = sesionNow.getMinutes()
	var segundo = sesionNow.getSeconds()
	
	document.getElementById("demo4").innerHTML = "La fecha introducida es: " + dato4 + "<br>" + "Has iniciado sesión el día: " + "<strong>" + 
	dia + "/" + mes + "/" + ano + " a las " + hora + ":" + minuto + ":" + segundo + "</strong>";
	}
	
//Ejercicio 5
function ejercicio5() {
	var dato5 = parseInt(document.getElementById("idCampo5").value);
	var descuento = dato5 - (dato5 * 20 / 100);
	var total = descuento + (descuento * 21 / 100);
	var impuesto = (dato5 * 21 / 100);
	
	document.getElementById("demo5").innerHTML = "<strong>" + "Subtotal = " + dato5 + " €" + "<br>" + 
	"Con descuento del 20% = " + descuento + " € " + "<br>" + 
	"Más el 21% del IVA = " + impuesto + " € " + "<br>" + 
	"Total = " + total + " €" + "<strong>";
	}

//Ejercicio 6
function ejercicio6() {
	var fecha = new Date(document.getElementById("idCampo6").value);
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	var signo = "";
	var imagen = "";	
		if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 18)) {
			 signo = "Acuario";
			 imagen = "img/aquarius.jpg";
			} 
		else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
			 signo = "Piscis";
			 imagen = "img/pisces.jpg";
			}
			else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
			 signo = "Aries";
			 imagen = "img/aries.jpg";
			}
			else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
			 signo = "Tauro";
			 imagen = "img/taurus.jpg";
			}
			else if ((mes == 5 && dia >=21) || (mes == 6 && dia <= 20)) {
			 signo = "Geminis";
			 imagen = "img/gemini.jpg";
			}
			else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
			 signo = "Cancer";
			 imagen = "img/cancer.jpg";
			}
			else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
			 signo = "Leo";
			 imagen = "img/leo.jpg";
			}
			else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
			 signo = "Virgo";
			 imagen = "img/virgo.jpg";
			}
			else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <=22)) {
			 signo = "Libra";
			 imagen = "img/libra.jpg";
			}
			else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
			 signo = "Escorpio";
			 imagen = "img/scorpio.jpg";
			}
			else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 20)) {
			 signo = "Sagitario";
			 imagen = "img/sagittarius.jpg";
			}
			else if ((mes == 12 && dia >=21) || (mes == 1 && dia <=20)) {
			 signo = "Capricornio";
			 imagen = "img/capricorn.jpg";
			}
			else {
			 signo = "algo ha fallado";
			 imagen = "img/error00.jpg";
			}
	
	document.getElementById("demo6").innerHTML = signo;
	document.getElementById("imagen").src = imagen;	
}

//Ejercicio 7
function ejercicio7() {
	var dato7 = document.getElementById("idCampo7").value;
	//alert(dato7);
	var x0 = dato7 * 0;
	var x1 = dato7 * 1;
	var x2 = dato7 * 2;
	var x3 = dato7 * 3;
	var x4 = dato7 * 4;
	var x5 = dato7 * 5;
	var x6 = dato7 * 6;
	var x7 = dato7 * 7;
	var x8 = dato7 * 8;
	var x9 = dato7 * 9;
	if (dato7 > 10) {alert("El número es mayor a 10")}
		
	document.getElementById("demo7").innerHTML = "<strong>" + "Tabla del "+ dato7 + "</strong>" + "<br>" + "<br>" + 
		dato7 + " x 0 = " + x0 + "<br>" + 
		dato7 + " x 1 = " + x1 + "<br>" + 
		dato7 + " x 2 = " + x2 + "<br>" + 
		dato7 + " x 3 = " + x3 + "<br>" + 
		dato7 + " x 4 = " + x4 + "<br>" + 
		dato7 + " x 5 = " + x5 + "<br>" +
		dato7 + " x 6 = " + x6 + "<br>" +
		dato7 + " x 7 = " + x7 + "<br>" +
		dato7 + " x 8 = " + x8 + "<br>" +
		dato7 + " x 9= " + x9 + "<br>";
	}		
	/*	
//Ejercicio 8
function ejercicio8() {
	var dato8 = document.getElementById("idCampo8").value;
	//alert(dato8);
	var newFecha = new Date(dato8);
	//alert(newFecha);
	var categoria;
	switch (newFecha.getFullYear()) 
		case 0: 2011;
		case 1: 2010;
		case 2: 2009;
			categoria = "Prebenjamines"; 
			break;
		case 3: 2008;
		case 4: 2007;
			categoria = "Benjamines"; 
			break;
		case 5: 2006;
		case 6: 2005;
			categoria = "infantiles";¡¡
			break;
		case 7: 2004;
		case 8: 2003;
		case 9: 2002;
			categoria = "Cadetes"; 
			break;
		case 10: 2001;
		case 11: 2000;
			categoria = "Juvenil"; 
			break;
		default = "El numero introducido no es correcto";
			
	document.getElementById("demo8").innerHTML = "Tu edad corresponde con la sigueinte categoria: " + categoria;
	document.getElementById("demo8").style.color = "green";
	}

*/
//Ejercicio 9
function ejercicio9() {
	var nombre = prompt("Por favor introduce tu nombre");
	var apellido = prompt("Por favor introduce tu apallido");
	var telef = prompt("Por favor introduce tu teléfono");
	var email = prompt("Por favor introduce tu email");
	var fnacimiento = prompt("Por favor introduce tu fecha de nacimiento");
	var edad1 = prompt("Por favor introduce tu edad");
	
	document.getElementById("demo9").innerHTML =
	"<table>" +
	"<tbody>" +
	"<tr>" +
	"<th>Nombre</th>" +
	"<th>Apellido</th>" +
	"<th>Teléfono</th>" +
	"<th>Email</th>" +
	"<th>Fecha</th>" +
	"<th>Edad</th>" +
	"</tr>" +
	"<tr>" +
	"<td>" + nombre + "</td>" +
	"<td>" + apellido + "</td>" +
	"<td>" + telef + "</td>" +
	"<td>" + email + "</td>" +
	"<td>" + fnacimiento + "</td>" +
	"<td>" + edad1 + "</td>" +
	"</tr>" +
	"</tbody>" +
	"</table>";
}

//Ejercicio 10
function ejercicio10() {
	window.confirm("Aceptar las políticas de cookies del sitio web para continuar");
	
}




