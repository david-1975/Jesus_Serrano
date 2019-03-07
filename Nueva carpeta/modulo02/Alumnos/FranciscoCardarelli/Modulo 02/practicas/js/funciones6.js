// JavaScript Document 5



function infoNavegador() {

//nombre del navegador
var navegador, agenteUsuario = navigator.userAgent;	
	if (agenteUsuario.indexOf("Firefox") > -1)
	{navegador = "Firefox";}
	else if ((agenteUsuario.indexOf("Opera") > -1) || (agenteUsuario.indexOf("OPR") > -1))
	{navegador = "Opera";}	
	else if ((agenteUsuario.indexOf("Trident") > -1) || (agenteUsuario.indexOf("MSIE") > -1))
	{navegador = "Internet Explorer";}	
	else if (agenteUsuario.indexOf("Edge") > -1)
	{navegador = "Edge";}	
	else if (agenteUsuario.indexOf("Chrome") > -1)
	{navegador = "Chrome";}	
	else if (agenteUsuario.indexOf("Safari") > -1)
	{navegador = "Safari";}	
	else {Desconocido;}
	//alert ("Estás usando el navegador: " + navegador);	

//Version del navegador
var version, agenteUsuario = navigator.userAgent;
	if (agenteUsuario.indexOf("Firefox") > -1) {
		var indice1 = agenteUsuario.lastIndexOf("Firefox/");
		var version = agenteUsuario.substr(indice1,12);
		var localizar = version.search("/"); // 7 Desde "/" (Barra) hazta el final
		var versionNav = version.slice(localizar+1,12);
	}
// Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0
	else if (agenteUsuario.indexOf("OPR") > -1) {
		var indice2 = agenteUsuario.lastIndexOf("OPR/");
		var version = agenteUsuario.substr(indice2,15);
		var localizar = version.search("/"); // 7 Desde "/" (Barra) hazta el final
		var versionNav = version.slice(localizar+1,8);
	}
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36 OPR/56.0.3051.99
	else if (agenteUsuario.indexOf("Edge") > -1) {
		var indice3 = agenteUsuario.lastIndexOf("Edge/");
		var version = agenteUsuario.substr(indice3,15);
		var localizar = version.search("/"); // 7 Desde "/" (Barra) hazta el final
		var versionNav = version.slice(localizar+1,10);
	}
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134
	else if (agenteUsuario.indexOf("Chrome") > -1) {
		var indice4 = agenteUsuario.lastIndexOf("Chrome/");
		var version = agenteUsuario.substr(indice4,20);
		var localizar = version.search("/"); // 7 Desde "/" (Barra) al final
		var versionNav = version.slice(localizar+1,11);
		//alert("Version: " + version);
	}
	else if (agenteUsuario.indexOf("Safari") > -1) {
		var indice5 = agenteUsuario.lastIndexOf("Version/");
		var version = agenteUsuario.substr(indice5,13); // Version/5.1.7
		var localizar = version.search("/"); // 7 Desde "/" (Barra) hazta el final
		var versionNav = version.slice(localizar+1,13);
	}
//Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
	else if ((agenteUsuario.indexOf("Trident") > -1) || (agenteUsuario.indexOf("MSIE") > -1)) {
		var indice6 = agenteUsuario.lastIndexOf("rv:"); 		
		var version = agenteUsuario.substr(indice6,7);
		var localizar = version.search(":");
		var versionNav = version.slice(localizar+1,3);
		//alert ("Version: " + versionNav);
	}
	else {Desconocido;}

//Motor del navegador
var motorNavName = navigator.appName; 
	if (motorNavName === "Netscape") {
		motorNavName = "JavaScript";
	//alert (motorName)
		}

//Proveedor (vendor)
var proveedorNav, navVendor = navigator.userAgent;
	if (agenteUsuario.indexOf("Firefox") > -1) {
		proveedorNav = "Fundación Mozilla";
		//alert(proveedorNav)
		}
	else if ((agenteUsuario.indexOf("Opera") > -1) || (agenteUsuario.indexOf("OPR") > -1)) {
		proveedorNav = "Opera Software";
		}
	else if ((agenteUsuario.indexOf("Trident") > -1) || (agenteUsuario.indexOf("MSIE") > -1)) {
		proveedorNav = "Microsoft Corporation";
		}
			else if (agenteUsuario.indexOf("Edge") > -1) {
		proveedorNav = "Microsoft Corporation";
		}
	else if (agenteUsuario.indexOf("Chrome") > -1) {
		proveedorNav = "Google Inc.";
		}
	else if (agenteUsuario.indexOf("Safari") > -1) {
		proveedorNav = "Apple Inc.";
		}
	else {Desconocido;}

//Plataforma (platform)
var proveedorNav, navVendor = navigator.userAgent;

var txt = "";
txt += "<h3>Información Navegador</h3>";
txt += "<p><b>Motor del Navegador: </b>" + motorNavName + "</p>"; //navigator.appName  
txt += "<p><b>Nombre del Navegador: </b>" + navegador + "</p>"; //navigator.appCodeName
txt += "<p><b>Versión de Navegador: </b>" + versionNav + "</p>"; //navigator.appVersion
txt += "<p><b>Cookies Activadas: </b>" + navigator.cokieEnabled + "</p>";
txt += "<p><b>Lenguaje: </b>" + navigator.language + "</p>";
txt += "<p><b>Navegador Online: </b>" + navigator.onLine + "</p>";
txt += "<p><b>Plataforma: </b>" + navigator.platform + "</p>";
txt += "<p><b>Usuario-Agente header: </b>" + navigator.userAgent + "</p>";
txt += "<p><b>Java Activado: </b>" + navigator.javaEnabled() + "</p>";
txt += "<p><b>Proveedor: </b>" + proveedorNav + "</p>"; //navigator.vendor
txt += "<p><b>Plugins Activos: </b>" + navigator.length + "</p>";

document.getElementById("infoNav").innerHTML = txt;
}