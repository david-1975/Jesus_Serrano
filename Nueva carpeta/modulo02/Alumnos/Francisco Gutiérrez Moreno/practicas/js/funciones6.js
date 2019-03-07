// JavaScript Document


function infoNavegador() {

// MOTOR NAVAGADOR
var motorNombre = navigator.appName;
if (motorNombre === "Netscape") {
	motorNombre = "Javascript";
	}
	
// NOMBRE NAVEGADOR
var navegador, agenteUsuario = navigator.userAgent;

if (agenteUsuario.indexOf("Firefox") > -1) 
{navegador = "Firefox";} 
else if ((agenteUsuario.indexOf("Opera") > -1) || (agenteUsuario.indexOf("OPR") > -1)) 
{navegador = "Opera";}
else if ((agenteUsuario.indexOf("Trident") > -1) ||(agenteUsuario.indexOf("MSIE") > -1)) 
{navegador = "I.Explorer";}
else if (agenteUsuario.indexOf("Edge") > -1) 
{navegador = "Edge";}
else if (agenteUsuario.indexOf("Chrome") > -1)  
{navegador = "Chrome";}
else if (agenteUsuario.indexOf("Safari") > -1) 
{navegador = "Safari";}
else {navegador = "Desconocido";}

	// alert("Estás usando: " + navegador);

// VERSIÓN NAVEGADOR
var version, agenteUsuario = navigator.userAgent;

if (agenteUsuario.indexOf("Firefox") > -1) {
	var indice1 = agenteUsuario.lastIndexOf("Firefox/");
	var version = agenteUsuario.substr(indice1,12);
	var localizar = version.search("/"); 
	var versionNav = version.slice(localizar+1,12);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:63.0) Gecko/20100101 Firefox/63.0
else if (agenteUsuario.indexOf("OPR") > -1) {
	var indice2 = agenteUsuario.lastIndexOf("OPR/");
	var version = agenteUsuario.substr(indice2,15);
	var localizar = version.search("/");  //3
	var versionNav = version.slice(localizar+1,8);	
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 OPR/56.0.3051.99
else if (agenteUsuario.indexOf("Edge") > -1) {
	var indice3 = agenteUsuario.lastIndexOf("Edge/");
	var version = agenteUsuario.substr(indice3,13);
	var localizar = version.search("/");  //4
	var versionNav = version.slice(localizar+1,9);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134

else if (agenteUsuario.indexOf("Chrome") > -1) {
	var indice4 = agenteUsuario.lastIndexOf("Chrome/");
	var version = agenteUsuario.substr(indice4,20);
	var localizar = version.search("/");  //7
	var versionNav = version.slice(localizar+1,11);
	}
 // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36

else if (agenteUsuario.indexOf("Safari") > -1) {
	var indice5 = agenteUsuario.lastIndexOf("Version/");
	var version = agenteUsuario.substr(indice5,13);
	var localizar = version.search("/");  //7
	var versionNav = version.slice(localizar+1,5);
	}
// Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
else if ((agenteUsuario.indexOf("Trident") > -1) ||(agenteUsuario.indexOf("MSIE") > -1)) {
	var indice6 = agenteUsuario.lastIndexOf("rv:");
	var version = agenteUsuario.substr(indice6,7);
	var localizar = version.search(":");  //2
	var versionNav = version.slice(localizar+1,13);
}
	// alert("Versión: " + versionNav);


//PROPIETARIO NAVEGADOR
var propietarioNav, propietario = navigator.userAgent;
	
if (propietario.indexOf("Firefox") > -1) {
	propietarioNav = "Fundación Mozilla";
} else if ((propietario.indexOf("Opera") > -1) || (propietario.indexOf("OPR") > -1)) {	    propietarioNav = "Opera Software";
} else if ((propietario.indexOf("Trident") > -1) ||(propietario.indexOf("MSIE") > -1)) {    propietarioNav = "Microsoft Corporation";
} else if (propietario.indexOf("Edge") > -1) {
    propietarioNav = "Microsoft Corporation";
} else if (propietario.indexOf("Chrome") > -1) {
	propietarioNav = "Google, Inc.";
} else if (propietario.indexOf("Safari") > -1) {
	propietarioNav = "Apple Computer, Inc.";
} else {
	propietarioNav = "Desconocido";
	}
	// alert("Propietario: " + propietarioNav);
	
// COOKIES ACTIVAS
var cookiesActivas = navigator.cookieEnabled; // true , false, undefined
if (cookiesActivas === true) {
	var cookiesActivas = "Si";
} else if (cookiesActivas === false) {
	var cookiesActivas = "No";
} else if (cookiesActivas === "undefined") {
	var cookiesActivas = "Indefinido";
} else if (cookiesActivas === "")  {
	var cookiesActivas = "Desconocido";
	}
	// alert("Cookies Activas: " + cookiesActivas);

// NAVEGADOR ONLINE
var navegadorOnline = navigator.onLine; // true , false, undefined
if (navegadorOnline === true) {
	var navegadorOnline = "Si";
} else if (navegadorOnline === false) {
	var navegadorOnline = "No";
} else if (navegadorOnline === "undefined") {
	var navegadorOnline = "Indefinido";
} else if (navegadorOnline === "")  {
	var navegadorOnline = "Desconocido";
	}
	// alert("Navegador Online " + navegadorOnline);

// JAVA ACTIVO
var javaActivo = navigator.javaEnabled(); // true , false, undefined
if (javaActivo === true) {
	var javaActivo = "Si";
} else if (javaActivo === false) {
	var javaActivo = "No";
} else if (javaActivo === "undefined") {
	var javaActivo = "Indefinido";
} else if (javaActivo === "")  {
	var javaActivo = "Desconocido";
	}
	// alert("Java Activo " + javaActivo);

// PLATAFORMA
var plataforma, plataformaNav= navigator.userAgent;

if ((plataformaNav.indexOf("Chrome") > -1) || (plataformaNav.indexOf("Edge") > -1) ||
    (plataformaNav.indexOf("OPR") > -1) || (plataformaNav.indexOf("Firefox") > -1)) {
	var indice7 = plataformaNav.lastIndexOf("Win64");
	var plataforma = plataformaNav.substr(indice7,5); 
	}
//	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
else if ((plataformaNav.indexOf("Safari") > -1) || 
         (plataformaNav.indexOf("Trident") > -1)|| 
		 (plataformaNav.indexOf("MSIE") > -1)) {
	var indice8 = plataformaNav.lastIndexOf("WOW64");
	var plataforma = "Win64"; 
	}
//Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2

	// alert("Plataforma " + plataforma);

//SISTEMA OPERATIVO
var sistemaOS, AgenteUser = navigator.userAgent;
	if (AgenteUser.indexOf("(Windows")) {
	var sistemaOS = "Windows";
} else if (AgenteUser.indexOf("(Apple")){
	var sistemaOS = "Apple";
} else if (AgenteUser.indexOf("(Linux")){
	var sistemaOS = "Linux";
} else if (AgenteUser.indexOf("iPhone")){
	var sistemaOS = "iPhone";
} else if (AgenteUser.indexOf("iPod")){
	var sistemaOS = "iPod";
} else if (AgenteUser.indexOf("iPad")){
	var sistemaOS = "iPad";
} else if (AgenteUser.indexOf("Android")){
	var sistemaOS = "Android";
} else {
	var sistemaOS = "Desconocido";
	}
	//alert ("Sistema Operativo: " + sistemaOS);
		

// MOSTRAR INFO NAVAGADOR
var txt = "";
txt += "<h3>Información Navegador</h3>";
txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>"; //window.navigator.appName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>"; //window.navigator.appCodeName
txt += "<p><b>Versión del Navegador: </b>" + versionNav + "</p>"; //window.navigator.appVersion
txt += "<p><b>Propietario: </b>" + propietarioNav + "</p>"; //window.navigator.vendor
txt += "<p><b>Navegador Lenguaje: </b>" + window.navigator.language + "</p>";
txt += "<p><b>Sistema Operativo: </b>" + sistemaOS + "</p>"; // window.navigator.platform
txt += "<p><b>Plataforma: </b>" + plataforma + "</p>"; // window.navigator.platform
txt += "<p><b>Navegador Online: </b>" + navegadorOnline + "</p>"; //window.navigator.onLine
txt += "<p><b>Java Activo: </b>" + javaActivo + "</p>"; //window.navigator.javaEnabled()
txt += "<p><b>Cookies Activas: </b>" + cookiesActivas + "</p>"; //window.navigator.cookieEnabled
txt += "<p><b>Plugins Activos: </b>" + window.navigator.plugins.length + "</p>";
txt += "<p><b>User-Agent header: </b>" + window.navigator.userAgent + "</p>";// UserAgent

document.getElementById("infoNav").innerHTML = txt;
	
}
function tamanoventana() {
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

 document.getElementById("infoventana").innerHTML = "El ancho de la ventana del navegador es:  " + w + "px. " + 
" y de alto:  " + h + "px.";
	}


//PANTALLA

// Ancho y alto de Pantalla total
function pantalla() { 
document.getElementById("divBom").innerHTML = 
"El ancho de la pantalla es: " + screen.width + ". " + "El alto de la pantalla es: " + screen.height;
}

// Ancho y Alto de la pantalla disponible
function pantallaDisponible() { 
document.getElementById("divBom").innerHTML = 
"El ancho de la pantalla disponible es: " + screen.availWidth  + ". " +  "El alto de la pantalla disponible es: " + screen.availHeight;
}
	
// Profundidad de colores y pixeles de la pantalla
function pantallaProfundidad() { 
document.getElementById("divBom").innerHTML = 
"La profundidad de color de la pantalla es: " + screen.colorDepth  + ". " +  "La profundidad de píxeles de la pantalla es: " + screen.pixelDepth;
}
function urlPagina() {
document.getElementById("infoPantalla").innerHTML = 
"La localización de la págna es :<br>" + window.location.href;
	}
function hostPagina() {
document.getElementById("infoPantalla").innerHTML = 
"El host de la págna es :<br>" + window.location.hostname;
	}
function pathPagina() {
document.getElementById("infoPantalla").innerHTML = 
"El path de la págna es :<br>" + window.location.pathname;
	}
	function protocolPagina() {
document.getElementById("infoPantalla").innerHTML = 
"El protocolo de la págna es :<br>" + window.location.protocol;
	}
	function asignaPagina() {
document.getElementById("infoPantalla").innerHTML = 
"El protocolo de la págna es :<br>" + window.location.assign;
	}
	function muestraPuerto() {
	document.getElementById("infoPantall").innerHTML = 
"The URL port number of the current page is: " + window.location.port;	
		}
	function paginaAtras() {
window.history.back()
	}
	function paginaAdelante() {
window.history.forward()	
		}	
	function alerta() {
    window.alert("Soy una caja de alerta")
		}
	function confirmacion() {
	window.confirm("Esto es un mensaje de confirmación")
    }
   
		}





//screen.width
//screen.height
//screen.availWidth
//screen.availHeight
//screen.colorDepth
//screen.pixelDepth
