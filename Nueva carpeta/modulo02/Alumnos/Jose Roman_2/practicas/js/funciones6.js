// JavaScript Document


function infoNavegador() {

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
	var version = agenteUsuario.substr(indice1,12); //Firefox/63.0
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
	var version = agenteUsuario.substr(indice3,13); //Edge/17.17134
	var localizar = version.search("/");  //4
	var versionNav = version.slice(localizar+1,9);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134

else if (agenteUsuario.indexOf("Chrome") > -1) {
	var indice4 = agenteUsuario.lastIndexOf("Chrome/");
	var version = agenteUsuario.substr(indice4,20);
	var localizar = version.search("/");  //7
	var versionNav = version.slice(localizar+1,11);
	// alert ("versión: " + version);
	}
 // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36

else if (agenteUsuario.indexOf("Safari") > -1) {
	var indice5 = agenteUsuario.lastIndexOf("Version/");
	var version = agenteUsuario.substr(indice5,13);
	var localizar = version.search("/");  //7
	var versionNav = version.slice(localizar+1,5);
	// alert ("versión: " + version);
	}
// Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
else if ((agenteUsuario.indexOf("Trident") > -1) ||(agenteUsuario.indexOf("MSIE") > -1)) {
	var indice6 = agenteUsuario.lastIndexOf("rv:");
	var version = agenteUsuario.substr(indice6,7); //rv:11.0
	var localizar = version.search(":");  //2
	var versionNav = version.slice(localizar+1,13);
	// alert ("versión: " + versionNav);
}


// MOTOR NAVAGADOR
var motorNombre = navigator.appName;
if (motorNombre === "Netscape") {
	motorNombre = "Javascript";
	}

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











	//alert ("Sistema Operativo: " + sBrowserPlatformOS);

// Mostrar infonavegador

var txt = "";
txt += "<h3>Información Navegador</h3>";
txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>"; //window.navigator.appName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>"; //window.navigator.appCodeName
txt += "<p><b>Navegador Versión: </b>" + versionNav + "</p>"; //window.navigator.appVersion
txt += "<p><b>Cookies Activadas: </b>" + cookiesActivas + "</p>"; //window.navigator.cookieEnabled
txt += "<p><b>Navegador Lenguaje: </b>" + window.navigator.language + "</p>";
txt += "<p><b>Navegador Online: </b>" + navegadorOnline + "</p>"; //window.navigator.onLine
txt += "<p><b>Plataforma: </b>" + window.navigator.platform + "</p>";
txt += "<p><b>Usuario-Agente header: </b>" + window.navigator.userAgent + "</p>";
txt += "<p><b>Java Activado: </b>" + javaActivo + "</p>"; //window.navigator.javaEnabled()
txt += "<p><b>Vendedor: </b>" + propietarioNav + "</p>"; //window.navigator.vendor
txt += "<p><b>Plugins Activos: </b>" + window.navigator.plugins.length + "</p>";

document.getElementById("infoNav").innerHTML = txt;
	
}

function tamanoVentana(){
	
var w = window.innerWidth || document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight || document.documentElement.clientHeight
|| document.body.clientHeight;

document.getElementById("infoVentana").innerHTML = "El tamaño del navegador es de ancho: " + w + "px, y de alto: " + h +"px.";
	
}




