// JavaScript Document

function infoNav(){
	
var navegador, agenteUsuario = navigator.userAgent;	
	
	
//NOMBRE NAVEGADOR	
if(agenteUsuario.indexOf("Firefox")>-1) {
	navegador ="Firefox";
	
	}

else if((agenteUsuario.indexOf("Opera")>-1) || (agenteUsuario.indexOf("OPR") >-1)){
	navegador = "Opera";
	}
else if((agenteUsuario.indexOf("Trident")>-1) || (agenteUsuario.indexOf("MSIE") >-1)){
	navegador="I.Explorer";
	}
else if(agenteUsuario.indexOf("Edge")>-1){
	
	navegador="Microsoft Edge";
	}
else if(agenteUsuario.indexOf("Chrome")>-1){
	navegador="Chrome";
	}
else if(agenteUsuario.indexOf("Safari")>-1){
	navegador="Safari";
	}
else{navegador = "Desconocido";}
	
//alert("Estás usando: " + navegador);	



//VERSION NAVEGADOR
var version, agenteUsuario = navigator.userAgent;
if(agenteUsuario.indexOf("Firefox")>-1){
	var indice1 = agenteUsuario.lastIndexOf("Firefox/");
	
	var version = agenteUsuario.substring(indice1);
	
	var localizar = version.search("/");
	var versionNav = version.slice(localizar+1);
	
	alert("version :" + versionNav);
	
	
	

	
//Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0
	}
else if((agenteUsuario.indexOf("Opera")>-1) || (agenteUsuario.indexOf("OPR") >-1)){
	var indice2 = agenteUsuario.lastIndexOf("OPR/");
	var version = agenteUsuario.substring(indice2);
	
	var localizar = version.search("/");
	var versionNav = version.slice(localizar+1);
	
	alert("version :" + versionNav);
	


//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 OPR/56.0.3051.99
	
	}

else if((agenteUsuario.indexOf("Trident")>-1) || (agenteUsuario.indexOf("MSIE") >-1)){
	
	var indice3 = agenteUsuario.lastIndexOf("rv:");
	var version = agenteUsuario.substr(indice3,7);
	var localizar = version.search(":");
	var versionNav = version.slice(localizar+1);
	
	alert("version :" + versionNav);
//Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
	}
else if(agenteUsuario.indexOf("Edge")>-1){
	
	
	var indice4 = agenteUsuario.lastIndexOf("Edge/");
	var version = agenteUsuario.substr(indice4,6);
	
	var localizar = version.search("/");
	var versionNav = version.slice(localizar+1);
	
	alert("version :" + versionNav);
	

	
	
	}
else if(agenteUsuario.indexOf("Chrome")>-1){
	var indice5 = agenteUsuario.lastIndexOf("Chrome/");
	var version = agenteUsuario.substr(indice5,20);
	
	var localizar = version.search("/");
	var versionNav = version.slice(localizar+1,11);
	
	alert("version :" + versionNav);
	


	//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
	
	
	}
else if(agenteUsuario.indexOf("Safari")>-1){
	var indice6 = agenteUsuario.lastIndexOf("Version/");
	var version = agenteUsuario.substr(indice6,13);
	var localizar = version.search("/");
	var versionNav = version.slice(localizar+1);
	
	alert("version :" + versionNav);
	


	//Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
	
	}
else{navegador = "Desconocido";}


//MOTOR NAVEGADOR

var motorNav, motorNombre=navigator.appName;
if (motorNombre ==="Netscape"){
	motorNombre ="Javascript";
	}


//PROPIETARIO NAVEGADOR
var propietarioNav, propietario =navigator.userAgent;
if (propietario.indexOf("Firefox")>-1) {
	
	propietarioNav="Fundación Mozilla";
	}
	
else if((propietario.indexOf("Opera")>-1) || (propietario.indexOf("OPR") >-1)){
	propietarioNav="Opera Software";
	}	
	
	
else if((propietario.indexOf("Trident")>-1) || (propietario.indexOf("MSIE") >-1)){
	propietarioNav="Microsoft Corporation";
	}
else if(propietario.indexOf("Edge")>-1){
	
	propietarioNav="Microsoft Corporation";
	}
else if(propietario.indexOf("Chrome")>-1){
	propietarioNav="Google Inc.";
	}
else if(propietario.indexOf("Safari")>-1){
	propietarioNav="Apple Computer Inc.";
	}
else{propietarioNav = "Desconocido";}


//COOKIES ACTIVAS
var cookiesActivas =navigator.cookieEnabled; //true, false

if (cookiesActivas === true) {
	var cookiesActivas =  "Sí";
}
else if (cookiesActivas === false) {
	var cookiesActivas =  "No";
	}
	
else if (cookiesActivas === "undefined") {
	var cookiesActivas =  "Indefinido";
	}	
else if (cookiesActivas === "") {
	var cookiesActivas =  "Desconocido";
	}	
		
		
		
	//navegadoronline
var navegadoronline =navigator.onLine; //true, false

if (navegadoronline === true) {
	var navegadoronline =  "Sí";
}
else if (navegadoronline === false) {
	var navegadoronline =  "No";
	}
	
else if (navegadoronline === "undefined") {
	var navegadoronline =  "Indefinido";
	}	
else if (navegadoronline === "") {
	var navegadoronline =  "Desconocido";
	}	
		
	
//JAVA ACTIVO
var javaActivo =navigator.javaEnabled(); //true, false

if (javaActivo === true) {
	var javaActivo =  "Sí";
}
else if (javaActivo === false) {
	var javaActivo =  "No";
	}
	
else if (javaActivo === "undefined") {
	var javaActivo =  "Indefinido";
	}	
else if (javaActivo === "") {
	var javaActivo =  "Desconocido";
	}	
		
//PLATAFORMA

var plataforma, plataformaNav =navigator.userAgent;
if ((plataformaNav.indexOf("Chrome")>-1) || (plataformaNav.indexOf("Edge")>-1) || (plataformaNav.indexOf("OPR")>-1) || (plataformaNav.indexOf("Firefox")>-1)) {
	var indice7 = plataformaNav.lastIndexOf("Win64");
	var plataforma =plataformaNav.substr(indice7,5);	
	}
	
	
else if ((plataformaNav.indexOf("Safari")>-1) || (plataformaNav.indexOf("Trident")>-1) || (plataformaNav.indexOf("MSIE")>-1) ) {
	var indice8 = plataformaNav.lastIndexOf("WOW64");
	var plataforma = "Win64"; //plataformaNav.substr(indice8,5);	
	}
	alert(plataforma);
	
	
	
var txt="";
txt += "<h3>Información del navegador</h3>";
txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>"; //navigator.appName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>"; //navigator.appCodeName
txt += "<p><b>Navegador Versión: </b>" + versionNav + "</p>"; //navigator.appVersion
txt += "<p><b>Cookies Activadas: </b>" + cookiesActivas + "</p>"; //navigator.cookieEnabled
txt += "<p><b>Navegador Lenguaje: </b>" + navigator.language + "</p>";
txt += "<p><b>Navegador Online: </b>" + navegadoronline + "</p>";//navigator.onLine
txt += "<p><b>Plataforma: </b>" + plataforma  + "</p>";//navigator.platform
txt += "<p><b>Usuario-Agente header: </b>" + navigator.userAgent + "</p>";
txt += "<p><b>Java Activado: </b>" + javaActivo + "</p>";//navigator.javaEnabled()
txt += "<p><b>Vendedor: </b>" + propietarioNav+ "</p>";//navigator.vendor
txt += "<p><b>Plugins Activos: </b>" + navigator.plugins.length + "</p>";



document.getElementById("infoNav").innerHTML=txt;

}