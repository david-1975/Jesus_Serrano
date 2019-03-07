// JavaScript Document


function infoNavegador() {
	
//Nombre del Navegador
var navegador, agenteUsuario = navigator.userAgent;

if (agenteUsuario.indexOf("Firefox")>-1) {navegador = "Firefox";}
else if ((agenteUsuario.indexOf("Opera")>-1)||(agenteUsuario.indexOf("OPR")>-1)) {navegador = "Opera";}
else if ((agenteUsuario.indexOf("Trident")>-1)||(agenteUsuario.indexOf("MSIE")>-1)) {navegador = "I.Explorer";}
else if (agenteUsuario.indexOf("Edge")>-1) {navegador = "M.Edge";}
else if (agenteUsuario.indexOf("Chrome")>-1) {navegador = "G.Chrome";}
else if (agenteUsuario.indexOf("Safari")>-1) {navegador = "A.Safari";}
else {navegador = "Desconocido";}


//alert("Estás usando: " + navegador);

//Versión del Navegador
var version, agenteUsuario = navigator.userAgent;

if(agenteUsuario.indexOf("Firefox")>-1) {
	var indice1 = agenteUsuario.lastIndexOf("Firefox/");
	var version = agenteUsuario.substring(indice1); //Firefox/62.0
	var localizar = version.search("/"); //es el puesto 7
	var versionNav = version.slice(localizar+1,12);
	//alert ("Versión : " + version);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0
else if (agenteUsuario.indexOf("OPR")>-1) {
	var indice2 = agenteUsuario.lastIndexOf("OPR/");
	var version = agenteUsuario.substr(indice2,15);
	var localizar = version.search("/"); //es el puesto 7
	var versionNav = version.slice(localizar+1,13);
	//alert ("Versión : " + version);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 OPR/56.0.3051.99
else if (agenteUsuario.indexOf("Edge")>-1) {
	var indice3 = agenteUsuario.lastIndexOf("Edge/");
	var version = agenteUsuario.substr(indice3,13);
	var localizar = version.search("/"); 
	var versionNav = version.slice(localizar+1,13);
	//alert ("Versión : " + version);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134

else if (agenteUsuario.indexOf("Chrome")>-1) {
	var indice4 = agenteUsuario.lastIndexOf("Chrome/");
	var version = agenteUsuario.substr(indice4,20);
	var localizar = version.search("/"); 
	var versionNav = version.slice(localizar+1,20);
	//alert ("Versión : " + version);
	}
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36

else if (agenteUsuario.indexOf("Safari")>-1) {
	var indice5 = agenteUsuario.lastIndexOf("Version/");
	var version = agenteUsuario.substr(indice5,13);
	var localizar = version.search("/"); //es el puesto 7
	var versionNav = version.slice(localizar+1,13);
	//alert ("Versión : " + version);
	}
//Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2

else if (agenteUsuario.indexOf("Trident")>-1) {
	var indice6 = agenteUsuario.lastIndexOf("rv:");
	var version = agenteUsuario.substr(indice6,7); //rv:11.0
	var localizar = version.search(":"); //es el puesto 2
	var versionNav = version.slice(localizar+1,7);
	//alert ("Versión : " + versionNav);
	}
//Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko
/*else if () {}
else {}*/

//Motor Navegador

var motorNombre = navigator.appName;

if (motorNombre === "Netscape") {
	motorNombre = "JavaScript";
	}


//Propietario o vendor

var propietarioNav, propietario = navigator.userAgent;

if (propietario.indexOf("Firefox")>-1) {
	propietarioNav = "Fundación Mozilla";
	}
else if ((propietario.indexOf("Opera")>-1)||(propietario.indexOf("OPR")>-1)) {
	propietarioNav = "Opera Software";
	}
else if ((propietario.indexOf("Trident")>-1)||(propietario.indexOf("MSIE")>-1)) {
	propietarioNav = "Microsoft Corporation";
	}
else if (propietario.indexOf("Edge")>-1) {
	propietarioNav = "Microsoft Corporation";
	}
else if (propietario.indexOf("Chrome")>-1) {
	propietarioNav = "Google, Inc";
	}
else if (agenteUsuario.indexOf("Safari")>-1) {
	propietarioNav = "Apple Computer, Inc.";
	}
else {navegador = "Desconocido";}

//Cookies

var cookiesActivas = navigator.cookieEnabled;  // true, false, indefinido

if (cookiesActivas === true) {
	var cookiesActivas = "Sí";
	}
else if (cookiesActivas === false) {
	var cookiesActivas = "No";
	}
else if (cookiesActivas === "undefined") {
	var cookiesActivas = "Indefinida";
	}
	
else if (cookiesActivas === "") {
	var cookiesActivas = "Desconocido";
	}
	
//Navegador Online

var navOnline = navigator.onLine;   // true, false, indefinido

if (navOnline === true) {
	var navOnline = "Sí";
	}
else if (navOnline === false) {
	var navOnline = "No";
	}
else if (navOnline === "undefined") {
	var navOnline = "Indefinida";
	}
	
else if (navOnline === "") {
	var navOnline = "Desconocido";
	}

//Java activo

var javaActivo = navigator.javaEnabled() ;  // true, false, indefinido

if (javaActivo === true) {
	var javaActivo = "Sí";
	}
else if (javaActivo === false) {
	var javaActivo = "No";
	}
else if (javaActivo === "undefined") {
	var javaActivo = "Indefinida";
	}
	
else if (javaActivo === "") {
	var javaActivo = "Desconocido";
	}
	
//Plataforma

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

// else if () {}








	
var txt = "";
txt += "<h3>Información Navegador</h3>";
txt += "<p><b>Motor Navegador: </b>" + motorNombre + "</p>";   //window.navigator.appName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>"; //window.navigator.appCodeName
txt += "<p><b>Navegador versión: </b>" + versionNav + "</p>"; //window.navigator.appVersion
txt += "<p><b>Cookies activadas: </b>" + cookiesActivas + "</p>"; //window.navigator.cookieEnabled
txt += "<p><b>Navegador lenguaje: </b>" + window.navigator.language + "</p>";
txt += "<p><b>Navegador online: </b>" + navOnline + "</p>"; //window.navigator.online
txt += "<p><b>Plataforma: </b>" + plataforma + "</p>"; //window.navigator.platform
txt += "<p><b>Usuario agente header: </b>" + window.navigator.userAgent + "</p>";
txt += "<p><b>Java activado: </b>" + javaActivo + "</p>"; //window.navigator.javaEnabled() 
txt += "<p><b>Vendedor: </b>" + propietarioNav + "</p>"; // window.navigator.vendor
txt += "<p><b>Plugins activos: </b>" + window.navigator.plugins + "</p>";

document.getElementById("infoNav").innerHTML = txt;

}


 