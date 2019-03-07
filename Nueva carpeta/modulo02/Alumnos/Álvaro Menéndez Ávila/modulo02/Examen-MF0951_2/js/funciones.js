//Integrar componentes software en páginas web

//Ejercicio 1
function fechaActual(){
var dato = document.getElementById('date').value;
var dato2 = new Date(dato);
var ano = dato2.getFullYear();
if  (dato === ""){
    document.getElementById("resultado").innerHTML = "<span style=\"color:blue\">" + "No has introducido ninguna fecha" + "</span>";
	
	} else if (ano > 2018){
		document.getElementById("resultado").innerHTML = "<span style=\"color:red\">" + "Introduce una fecha anterior a la actual" + "</span>";
	} else {
			
	var convertirFecha = new Date (dato).getTime();
	var fechaSistema = new Date().getTime();
	
	var resta = fechaSistema - convertirFecha ;
	
	var segundos = (resta / 1000);
	var minutos = (segundos / 60);		
	var horas = (minutos / 60);		
	var dias = (horas / 24).toString();
		var punto3 = dias.indexOf(".");
		var redondeo3 = dias.substr(0,punto3);
	
	document.getElementById("resultado").innerHTML = "Entre la fecha actual y la fecha introducida hay: " + redondeo3 + " días.";
	}

}
//Ejercicio 2
function fechaActual2() {
var dato = new Date(document.getElementById('date2').value);
var diaSemana = dato.getDay();
var diaMes = dato.getDate();
var mes = dato.getMonth(); 
var ano = dato.getFullYear();

var dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

document.getElementById("resultado2").innerHTML = "<b>" + dias[diaSemana] + ", " + diaMes + " " + meses[mes] + ", " + ano + "</b>";
}

//Ejercicio 3
function frutas () {
var dato = document.getElementById('text').value;
var espacio = dato.indexOf(" "); 

if (espacio > -1){
	document.getElementById("resultado3").innerHTML = "<span style=\"color:red\">" + "Introduzca de nuevo los datos sin espacios, por favor." + "</span>";
	}else{
var	coma1 = dato.indexOf(",");
var coma2 = dato.lastIndexOf(",");
var fruta1 = dato.substr(0,coma1);
var fruta2 = dato.substring(coma1+1, coma2);
var fruta3 = dato.substr(coma2+1);

alert(fruta1);
alert(fruta2);
alert(fruta3);

document.getElementById("resultado3").innerHTML =
"<ul>" +
"<li>" + fruta1 + "</li>" +
"<li>" + fruta2 + "</li>" +
"<li>" + fruta3 + "</li>" +
"</ul>";
	}
}

//Ejercicio 4
function fechaActual3 () {
var dato = new Date(document.getElementById('date3').value);
var fechaActual = new Date();

var diaMes = dato.getDate();
var mes = dato.getMonth(); 
var ano = dato.getFullYear();

var minutos = fechaActual.getMinutes();
var horas = fechaActual.getHours();
var segundos = fechaActual.getSeconds();

document.getElementById("resultado4").innerHTML ="<b>Has iniciado sesión el día " +  diaMes + "/" + mes + "/" + ano + " a las " + horas + ":" + minutos + ":" + segundos + "</b>";

}

//Ejercicio 5
function precio () {
var dato = parseInt(document.getElementById('number').value);
var descuento = 20;
var iva = 21;

var operacion1 = ((dato * descuento) / 100);

var operacion2 = ((dato * iva) / 100);

var resultado = ((dato + operacion2) - operacion1);


document.getElementById("resultado5").innerHTML = "<b> Subtotal = " + dato.toFixed(2) + "€" + "<br>" +
"Descuento 20% = " + operacion1.toFixed(2) + "€" + "<br>" +
"IVA 21% = " + operacion2.toFixed(2) + "€" + "<br>" +
"Total = " + resultado.toFixed(2) + "€ </b>";
}

//Ejercicio 6
function zodiaco () {
var dato = new Date(document.getElementById('date4').value);

var dia = dato.getDate();
var mes = dato.getMonth()+1;

var signos = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio",  "Acuario", "Piscis"];

if ((dia >= 21) && (mes === 3) || ((dia <= 20) && mes === 4)){
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/aries.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[0] + "</h3>" + "</div>";
	
}
else if ((dia >= 21) && (mes === 4) || ((dia <= 20) && mes === 5)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/taurus.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[1] + "</h3>" + "</div>";
}
 else if ((dia >= 21) && (mes === 5) || ((dia <= 21) && mes === 6)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/gemini.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[2] + "</h3>" + "</div>";
}
 else if ((dia >= 22) && (mes === 6) || ((dia <= 22) && mes === 7)) {		
 	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/cancer.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[3] + "</h3>" + "</div>";
} 
 else if ((dia >= 23) && (mes === 7) || ((dia <= 23) && mes === 8)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/leo.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[4] + "</h3>" + "</div>";
}
 else if ((dia >= 24) && (mes === 8) || ((dia <= 23) && mes === 9)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/virgo.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[5] + "</h3>" + "</div>"; 
}
 else if ((dia >= 24) && (mes === 9) || ((dia <= 22) && mes === 10)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/libra.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[6] + "</h3>" + "</div>";	 
}
 else if ((dia >= 23) && (mes === 10) || ((dia <= 22) && mes === 11)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/scorpio.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[7] + "</h3>" + "</div>";	 
}
 else if ((dia >= 23) && (mes === 11) || ((dia <= 21) && mes === 12)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/sagittarius.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[8] + "</h3>" + "</div>";	 	 	 
}
 else if ((dia >= 22) && (mes === 12) || ((dia <= 19) && mes === 1)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/capricorn.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[9] + "</h3>" + "</div>";	 	 	 
}
 else if ((dia >= 20) && (mes === 1) || ((dia <= 19) && mes === 2)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/aquarius.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[10] + "</h3>" + "</div>";	 	 	 
}
 else if ((dia >= 20) && (mes === 2) || ((dia <= 20) && mes === 3)) {
	document.getElementById("resultado6").innerHTML = "<div>" + "<h3>Tu símbolo del zodiaco es</h3> " + "<br>" + 
	"<img src=\"img/pisces.jpg\" width='100' height='100'/>" + "<br>" +
	"<h3>" + signos[11] + "</h3>" + "</div>";	 	 	 
}
 else {
	document.getElementById("resultado6").innerHTML = "La fecha que has introducido es incorrecta";
}
	
}

//Ejercicio 7
function multiplicar() {
var dato = parseInt(document.getElementById('number2').value);
if (dato > 10){
	document.getElementById("resultado7").innerHTML = "<span style=\"color:red\">" + "Introduzca un número del 1 al 10 por favor." + "</span>";	
}
switch (dato){
	case 1:
		document.getElementById("resultado7").innerHTML = 
		"1x0= " + dato * 0 + "<br>" +
		"1x1= " + dato * 1 + "<br>" +
		"1x2= " + dato * 2 + "<br>" +
		"1x3= " + dato * 3 + "<br>" +
		"1x4= " + dato * 4 + "<br>" +
		"1x5= " + dato * 5 + "<br>" +
		"1x6= " + dato * 6 + "<br>" + 
		"1x7= " + dato * 7 + "<br>" +
		"1x8= " + dato * 8 + "<br>" +
		"1x9= " + dato * 9 + "<br>" +
		"1x10= " + dato * 10;
		break;
	case 2:
		document.getElementById("resultado7").innerHTML = 
		"2x0= " + dato * 0 + "<br>" +
		"2x1= " + dato * 1 + "<br>" +
		"2x2= " + dato * 2 + "<br>" +
		"2x3= " + dato * 3 + "<br>" +
		"2x4= " + dato * 4 + "<br>" +
		"2x5= " + dato * 5 + "<br>" +
		"2x6= " + dato * 6 + "<br>" + 
		"2x7= " + dato * 7 + "<br>" +
		"2x8= " + dato * 8 + "<br>" +
		"2x9= " + dato * 9 + "<br>" +
		"2x10= " + dato * 10;
		break;
	case 3:
		document.getElementById("resultado7").innerHTML = 
		"3x0= " + dato * 0 + "<br>" +
		"3x1= " + dato * 1 + "<br>" +
		"3x2= " + dato * 2 + "<br>" +
		"3x3= " + dato * 3 + "<br>" +
		"3x4= " + dato * 4 + "<br>" +
		"3x5= " + dato * 5 + "<br>" +
		"3x6= " + dato * 6 + "<br>" + 
		"3x7= " + dato * 7 + "<br>" +
		"3x8= " + dato * 8 + "<br>" +
		"3x9= " + dato * 9 + "<br>" +
		"3x10= " + dato * 10;
		break;
	case 4:
		document.getElementById("resultado7").innerHTML = 
		"4x0= " + dato * 0 + "<br>" +
		"4x1= " + dato * 1 + "<br>" +
		"4x2= " + dato * 2 + "<br>" +
		"4x3= " + dato * 3 + "<br>" +
		"4x4= " + dato * 4 + "<br>" +
		"4x5= " + dato * 5 + "<br>" +
		"4x6= " + dato * 6 + "<br>" + 
		"4x7= " + dato * 7 + "<br>" +
		"4x8= " + dato * 8 + "<br>" +
		"4x9= " + dato * 9 + "<br>" +
		"4x10= " + dato * 10;
		break;
	case 5:
		document.getElementById("resultado7").innerHTML = 
		"5x0= " + dato * 0 + "<br>" +
		"5x1= " + dato * 1 + "<br>" +
		"5x2= " + dato * 2 + "<br>" +
		"5x3= " + dato * 3 + "<br>" +
		"5x4= " + dato * 4 + "<br>" +
		"5x5= " + dato * 5 + "<br>" +
		"5x6= " + dato * 6 + "<br>" + 
		"5x7= " + dato * 7 + "<br>" +
		"5x8= " + dato * 8 + "<br>" +
		"5x9= " + dato * 9 + "<br>" +
		"5x10= " + dato * 10;
		break;
	case 6:
		document.getElementById("resultado7").innerHTML = 
		"6x0= " + dato * 0 + "<br>" +
		"6x1= " + dato * 1 + "<br>" +
		"6x2= " + dato * 2 + "<br>" +
		"6x3= " + dato * 3 + "<br>" +
		"6x4= " + dato * 4 + "<br>" +
		"6x5= " + dato * 5 + "<br>" +
		"6x6= " + dato * 6 + "<br>" + 
		"6x7= " + dato * 7 + "<br>" +
		"6x8= " + dato * 8 + "<br>" +
		"6x9= " + dato * 9 + "<br>" +
		"6x10= " + dato * 10;
		break;
	case 7:
		document.getElementById("resultado7").innerHTML = 
		"7x0= " + dato * 0 + "<br>" +
		"7x1= " + dato * 1 + "<br>" +
		"7x2= " + dato * 2 + "<br>" +
		"7x3= " + dato * 3 + "<br>" +
		"7x4= " + dato * 4 + "<br>" +
		"7x5= " + dato * 5 + "<br>" +
		"7x6= " + dato * 6 + "<br>" + 
		"7x7= " + dato * 7 + "<br>" +
		"7x8= " + dato * 8 + "<br>" +
		"7x9= " + dato * 9 + "<br>" +
		"7x10= " + dato * 10;
		break;
	case 8:
		document.getElementById("resultado7").innerHTML = 
		"8x0= " + dato * 0 + "<br>" +
		"8x1= " + dato * 1 + "<br>" +
		"8x2= " + dato * 2 + "<br>" +
		"8x3= " + dato * 3 + "<br>" +
		"8x4= " + dato * 4 + "<br>" +
		"8x5= " + dato * 5 + "<br>" +
		"8x6= " + dato * 6 + "<br>" + 
		"8x7= " + dato * 7 + "<br>" +
		"8x8= " + dato * 8 + "<br>" +
		"8x9= " + dato * 9 + "<br>" +
		"8x10= " + dato * 10;
		break;
	case 9:
		document.getElementById("resultado7").innerHTML = 
		"9x0= " + dato * 0 + "<br>" +
		"9x1= " + dato * 1 + "<br>" +
		"9x2= " + dato * 2 + "<br>" +
		"9x3= " + dato * 3 + "<br>" +
		"9x4= " + dato * 4 + "<br>" +
		"9x5= " + dato * 5 + "<br>" +
		"9x6= " + dato * 6 + "<br>" + 
		"9x7= " + dato * 7 + "<br>" +
		"9x8= " + dato * 8 + "<br>" +
		"9x9= " + dato * 9 + "<br>" +
		"9x10= " + dato * 10;
		break;
	case 10:
		document.getElementById("resultado7").innerHTML = 
		"10x0= " + dato * 0 + "<br>" +
		"10x1= " + dato * 1 + "<br>" +
		"10x2= " + dato * 2 + "<br>" +
		"10x3= " + dato * 3 + "<br>" +
		"10x4= " + dato * 4 + "<br>" +
		"10x5= " + dato * 5 + "<br>" +
		"10x6= " + dato * 6 + "<br>" + 
		"10x7= " + dato * 7 + "<br>" +
		"10x8= " + dato * 8 + "<br>" +
		"10x9= " + dato * 9 + "<br>" +
		"10x10= " + dato * 10;
		break;
	}
}

//Ejercicio 8
function juveniles () {
var dato = new Date(document.getElementById('date5').value);
var ano = dato.getFullYear();

if ((ano < 2000) && (ano > 2018)){
	document.getElementById("resultado8").innerHTML = "<span style=\"color:red\">" + "Introduzca un año superior al 2000, por favor." + "</span>";
}

var anoActual = new Date().getFullYear();

var resultado = anoActual - ano;

switch (resultado){
	case 5:
	case 6:
	case 7:
	document.getElementById("resultado8").innerHTML = "Su hijo pertenece a la categoría deportiva <b>Prebenjamines</b>";
	break;
	case 8:
	case 9:
	document.getElementById("resultado8").innerHTML = "Su hijo pertenece a la categoría deportiva <b>Benjamines</b>";
	break;
	
	case 10:
	case 11:
	document.getElementById("resultado8").innerHTML = "Su hijo pertenece a la categoría deportiva <b>Alevines</b>";
	break;
	
	case 12:
	case 13:
	document.getElementById("resultado8").innerHTML = "Su hijo pertenece a la categoría deportiva <b>Infantiles</b>";
	break;
	
	case 14:
	case 15:
	document.getElementById("resultado8").innerHTML = "Su hijo pertenece a la categoría deportiva <b>Cadetes</b>";
	break;
	
	case 15:
	case 17:
	case 18:
	document.getElementById("resultado8").innerHTML = "Su hijo pertenece a la categoría deportiva <b>Alevines</b>";
	break;
	
	default:
	document.getElementById("resultado8").innerHTML = "Su hijo es demasiado jóven para participar</b>";
	break;	
	}
}

//Ejercicio 9
function datosTabla () {
var nombre = prompt("Por favor introduzca su nombre");	
var apellidos = prompt("Por favor introduzca su apellido");	
var telefono = prompt("Por favor introduzca su número de teléfono");	
var email = prompt("Por favor introduzca su correo electrónico");	
var fecha = prompt("Por favor introduzca la fecha actual");	
var edad = prompt("Por favor introduzca su edad");	

document.getElementById("resultado9").innerHTML =
"<table border=\"2\">" +
    "<tr>" +
      "<th>Nombre</th>" +
      "<th>Apellidos</th>" +
      "<th>Teléfono</th>" +
      "<th>Email</th>" +
      "<th>Fecha</th>" +
      "<th>Edad</th>" +
    "</tr>" +
    "<tr>" +
      "<td>" + nombre + "</td>" +
"<td>" + apellidos + "</td>" +
"<td>" + telefono + "</td>" + 
"<td>" + email + "</td>" + 
"<td>" + fecha + "</td>" +
"<td>" + edad + "</td>" +   
     
    "</tr>" +
"</table>";

}

//Ejercicio 10
function alerta () {
window.confirm("Según el apartado 2 del artículo 22 de la LSSI le informamos que utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación" + "\n" + "Al continuar con la navegación entendemos que se acepta nuestra Política de Cookies.");
}