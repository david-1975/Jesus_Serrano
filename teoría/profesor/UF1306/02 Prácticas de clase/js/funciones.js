// JavaScript Document
//VENTANA 
// Ancho y alto de Pantalla total
function tamanoVentana() {
var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var x = document.getElementById("infoVentana");
x.innerHTML = 
	"<h3>" + "La ventana del navegador es de ancho: " + w + "px, y de alto: " + h + "px." + "</h3>";
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

// INFORMACIÓN DE LA URL DE LA PÁGINA WEB
function urlPagina() {
document.getElementById("infoPantalla").innerHTML =
"La localización de la página es " + window.location.href;
}
function dominioPagina() {
document.getElementById("infoPantalla").innerHTML =
"El dominio de la página es " + window.location.hostname;
}
function rutaPagina() {
document.getElementById("infoPantalla").innerHTML =
"La ruta de la página es " + window.location.pathname;
}
function protocoloPagina() {
document.getElementById("infoPantalla").innerHTML =
"El protocolo de la página es " + window.location.protocol;
}
function cargarPagina() {
document.getElementById("infoPantalla").innerHTML =
"El número de puerto es " + window.location.assign("https://www.wikipedia.org");
}
function puertoPagina() {
document.getElementById("infoPantalla").innerHTML =
"El número de puerto es " + window.location.port;
}

//HISTORY 
function irAtras() {
    window.history.back()
}
function irAdelante() {
    window.history.forward()
}
function irA() {
    window.history.go(-2);
}

// MENSAJES EMERGENTES
function alerta() {
window.alert("Esto es un mensaje de alerta");
}
function confirmar() { 
window.confirm("Esto es un mensaje de confirmación");
}
function introducir() {
window.prompt("A la espera de órdenes","introduzca su nombre");
}

// TEMPORIZADOR

function temporizador() {
  var fecha = new Date();
  var hora = fecha.toLocaleTimeString();
	alert("Hora Actual: " + hora);
}

// SICRONIZACIÓN

function intervalo() {
  var d = new Date();
  var time = d.toLocaleTimeString();
	alert("Hora Actual: " + time);
}

//INFORMACIÓN NAVEGADOR

function infoNavegador() {
	
// MOTOR NAVEGADOR
var motorNombre = navigator.appName;
if (motorNombre === "Netscape") {
	motorNombre = "Javascript";
	}
// NOMBRE NAVEGADOR
var navegador = window.navigator.appCodeName;	
// VERSION NAVEGADOR
var versionNav = window.navigator.appVersion;		
// VERSION NAVEGADOR
var propietario = propietarioNav;	
//LENGUIAJE
var lenguaje = window.navigator.language;
	
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
else if ((agenteUsuario.indexOf("Chrome") > -1) &&(agenteUsuario.indexOf("Safari") > -1)) 
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
	//Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; InfoPath.3; rv:11.0) like Gecko

	
	// alert("Versión: " + versionNav);


//PROPIETARIO NAVEGADOR
var propietarioNav, propietario = navigator.userAgent;
	
if (propietario.indexOf("Firefox") > -1) {
	propietarioNav = "Fundación Mozilla";
} else if ((propietario.indexOf("Opera") > -1) || (propietario.indexOf("OPR") > -1)) {	    
	propietarioNav = "Opera Software";
} else if ((propietario.indexOf("Trident") > -1) ||(propietario.indexOf("MSIE") > -1)) {    
	propietarioNav = "Microsoft Corporation";
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
	
//SISTEMA OPERATIVO
var sistemaOS = "";
var agentUser = window.navigator.userAgent;

if (agentUser.indexOf("(Windows")) {
	var sistemaOS = "Windows";
} else if (agentUser.indexOf("(Apple")){
	var sistemaOS = "Apple";
} else if (agentUser.indexOf("(Linux")){
	var sistemaOS = "Linux";
} else if (agentUser.indexOf("iPhone")){
	var sistemaOS = "iPhone";
} else if (agentUser.indexOf("iPod")){
	var sistemaOS = "iPod";
} else if (agentUser.indexOf("iPad")){
	var sistemaOS = "iPad";
} else if (agentUser.indexOf("Android")){
	var sistemaOS = "Android";
} else {
	var sistemaOS = "Desconocido";
	}

//PLATAFORMA
var plataforma = window.navigator.platform;
var agentUser = window.navigator.userAgent;
	
if ((agentUser.indexOf("Chrome") > -1) ||
	(agentUser.indexOf("Edge") > -1) ||
    (agentUser.indexOf("OPR") > -1) || 
	(agentUser.indexOf("Firefox") > -1)) {
	var indice7 = agentUser.lastIndexOf("Win64");
	var plataforma = agentUser.substr(indice7,5); 
	}
//	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
else if ((agentUser.indexOf("Safari") > -1) || 
         (agentUser.indexOf("Trident") > -1)|| 
		 (agentUser.indexOf("MSIE") > -1)) {
	var indice8 = agentUser.lastIndexOf("WOW64");
	var plataforma = "Win64"; 
	}
//Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2

	//NAVEGADOR ONLINE
var navegadorOnline = window.navigator.onLine; // true , false, undefined
if (navegadorOnline === true) {
	var navegadorOnline = "Si";
} else if (navegadorOnline === false) {
	var navegadorOnline = "No";
} else if (navegadorOnline === undefined) {
	var navegadorOnline = "Indefinido";
} else if (navegadorOnline === "")  {
	var navegadorOnline = "Desconocido";
	}
	
	// JAVA ACTIVO
var javaActivo = window.navigator.javaEnabled(); // true , false, undefined
if (javaActivo === true) {
	var javaActivo = "Si";
} else if (javaActivo === false) {
	var javaActivo = "No";
} else if (javaActivo === undefined) {
	var javaActivo = "Indefinido";
} else if (javaActivo === "")  {
	var javaActivo = "Desconocido";
	}
	
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
var pluginsActivos = window.navigator.plugins.length;
var agenteUsuario = window.navigator.userAgent;
//var	motorNavegador = window.navigator.product;

// MOSTRAR INFO NAVAGADOR
var txt = "";
txt += "<h3>Información Navegador</h3>";
//window.navigator.appName
txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>";
//window.navigator.appCodeName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>";	
//window.navigator.appVersion
txt += "<p><b>Versión del Navegador: </b>" + versionNav + "</p>"; 
txt += "<p><b>Propietario: </b>" + propietarioNav + "</p>"; 
//window.navigator.language;
txt += "<p><b>Lenguaje: </b>" + lenguaje + "</p>"; 
//window.navigator.language;
txt += "<p><b>Sistema Operativo: </b>" + sistemaOS + "</p>"; 
txt += "<p><b>Plataforma: </b>" + plataforma + "</p>"; 
//window.navigator.onLine
txt += "<p><b>Navegador Online: </b>" + navegadorOnline + "</p>"; //window.navigator.javaEnabled()
txt += "<p><b>Java Activo: </b>" + javaActivo + "</p>"; 
	//window.navigator.cookieEnabled
txt += "<p><b>Cookies Activas: </b>" + cookiesActivas + "</p>"; 
txt += "<p><b>Plugins Activos: </b>" + pluginsActivos + "</p>";
txt += "<p><b>User-Agent header: </b>" + agenteUsuario + "</p>";// UserAgent
	
	
document.getElementById("infoNav").innerHTML = txt;

}

//GEOLOCALIZACIÓN
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("geolocalizacion").innerHTML = 
		"La Geolocalización no es soportada por este navegador.";
  }
}

function showPosition(position) {
  document.getElementById("geolocalizacion").innerHTML = 
	  "<h3>" + "Geolocalización de tu navegador: " + "Latitud: " + position.coords.latitude + ", Longitud: " + position.coords.longitude + "</h3>";
}

//COOKIES
//Crear una cookie del documento
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Obtener la cookie del documento
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
//Comprobar cookie
function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}



//COOKIES
//Crear una cookie
function crearCookie(clave, valor, diasexpiracion) {
    var d = new Date();
    d.setTime(d.getTime() + (diasexpiracion*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = clave + "=" + valor + "; " + expires;
}
//Obtener una cookie
function obtenerCookie(clave) {
    var name = clave + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
//Comprobar si una cookie ha sido creada
function comprobarCookie(clave) {
    var clave = obtenerCookie(clave);
    if (clave!="") {
        // La cookie existe.
    }else{
        // La cookie no existe.
    }
}





//Crear una cookie
document.cookie="username=Mario; expires=Mon, 2 Feb 2015 11:30:00 UTC";
//Borrar un cookie (Poner fecha pasada)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

var galleta = document.cookie;
alert(document.getElementById("galleta").innerHTML = galleta);

//location.reload() 





