// JavaScript Document

//Pantalla
function pantalla(){
	 document.getElementById("divBom").innerHTML= "El ancho de la pantalla es: " + screen.width + 
		" píxeles. El alto de la pantalla es: " + screen.height + " píxeles.";
}

function pantallaDisponible(){
	document.getElementById("divBom").innerHTML= "El ancho de la pantalla disponible es: " + screen.availWidth + 
		" píxeles. El alto de la pantalla disponible es: " + screen.availHeight + " píxeles.";
}



function pantallaProfundidad(){
	document.getElementById("divBom").innerHTML= "La profuncidad de color de la pantalla es: " + screen.colorDepth + 
		" píxeles. La profundidad de píxeles de la pantalla es: " + screen.pixelDepth + " .";
}

//Ventana
function tamanoVentana(){
	var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	var h = window.innerHeight	|| document.documentElement.clientHeight || document.body.clientHeight;
	
	document.getElementById("infoVentana").innerHTML= "El ancho de la ventana es: " + w + 
	" píxeles. El alto de la ventana es: " + h + " píxeles.";
}

function urlPagina() {
	document.getElementById("infoPantalla").innerHTML =	"La localización de la página es " + window.location.href;
}
function dominioPagina() {
	document.getElementById("infoPantalla").innerHTML =	"El dominio de la página es " + window.location.hostname;
}
function rutaPagina() {
	document.getElementById("infoPantalla").innerHTML =	"La ruta de la página es " + window.location.pathname;
}
function protocoloPagina() {
	document.getElementById("infoPantalla").innerHTML =	"El protocolo de la página es " + window.location.protocol;
}	
function cargarPagina() {
	document.getElementById("infoPantalla").innerHTML =	"El número de puerto es " + window.location.assign("https://www.wikipedia.org");
}

//Historial
function irAtras() {
	window.history.back() //Si en el parentesis le ponemos valor ira a la x página hacia atrás, o delante si es negativo. Igual con el forward
}
function irAdelante() {
	window.history.forward()
}

//Ventanas emergentes
function alerta(){
	window.alert("Alerta!!!!");
}
function confirmar(){
	window.confirm("Mensaje de confirmación");
}
function introducir(){
	window.prompt("Venta de introducción" , "Pon algo"); 
}


