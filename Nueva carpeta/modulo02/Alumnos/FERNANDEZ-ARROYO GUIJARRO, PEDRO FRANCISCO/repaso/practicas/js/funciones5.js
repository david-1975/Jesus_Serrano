// JavaScript Document

function infoNav(){
var agente = navigator.userAgent;
var galleta = window.navigator.cookieEnabled;
var codnombre = window.navigator.appName;
var propietarionav = window.navigator.vendor;
var enlinea = window.navigator.onLine;
var javaon = window.navigator.javaEnabled;
var version1, indice, indice2, navegador, version;
var plataforma = "Win64";

if(galleta === true){galleta = "Si";}
else if(galleta === false){galleta = "No";}
	 else if(galleta === undefined){galleta = "Indefinido";}
	       else {galleta = "Desconocido";}

if(enlinea === true){enlinea = "Si";}
else if(enlinea === false){enlinea = "No";}
       else {enlinea = "Desconocido";}

if(javaon === true){javaon = "Si";}
else if(javaon === false){javaon = "No";}
       else {javaon = "Desconocido";}

if(codnombre === "Netscape"){codnombre = "JavaScript";}

if (agente.indexOf("Win64") > -1) {plataforma = "Win64";}
else if(agente.indexOf("WOW64") > -1){plataforma = "WOW64";}
else if(agente.indexOf("x86") > -1){plataforma = "Win32";}
else {plataforma = "Otras plataformas";} 

if(agente.indexOf("Firefox") > -1){
// Usuario-Agente Header: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:64.0) Gecko/20100101 Firefox/64.0 
	navegador = "Firefox" ;
	propietarionav = "Fundación Mozilla";
	
	indice = agente.lastIndexOf("Firefox/");
	version1 = agente.substring(indice); 
	indice2 = version1.indexOf("/");
	version = version1.substring(indice2 + 1); 
	
	alert(galleta);
	
	} else if (agente.indexOf("Chrome") > -1){
		navegador = "Google Chrome" ;
//		propietarionav = "Google Inc";// La variable tiene el dato real, no se modifica
		
		indice = agente.lastIndexOf("Chrome/");
		version1 = agente.substring(indice);
		indice2 = version1.indexOf("/");
		version = version1.substr(indice2+1, 6); 
	} else if((agente.indexOf("Opera") > -1) || (agente.indexOf("OPR") > -1)){
		navegador = "Opera" ;
		propietarionav = "Opera Software";
		
		indice = agente.lastIndexOf("OPR/");
		version1 = agente.substring(indice); 
		indice2 = version1.indexOf("/");
		version = version1.substr(indice2 + 1, 6); 
	} else if((agente.indexOf("Trident") > -1) || (agente.indexOf("MSIE") > -1)){
		navegador = "Microsoft Internet Explorer" ;
		propietarionav = "Microsoft Corporation";
		plataforma = ""
		
		indice = agente.lastIndexOf("rv:");
		version1 = agente.substring(indice); 
		indice2 = version1.indexOf(":");
		version = version1.substr(indice2 + 1, 4); 
	
	} else if(agente.indexOf("Edge") > -1){
		navegador = "Edge" ;
		propietarionav = "Microsoft Corporation";
	
		indice = agente.lastIndexOf("Edge/");
		version1 = agente.substring(indice); 
		indice2 = version1.indexOf("/");
		version = version1.substr(indice2 + 1, 8); 
	
	
	} else if(agente.indexOf("Safari") > -1){
		navegador = "Safari" ;
//		propietarionav = "Apple Computer, Inc.";// La variable tiene el dato real, no se modifica
		plataforma = ""
	
		indice = agente.lastIndexOf("Version/");
		version1 = agente.substring(indice); 
		indice2 = version1.indexOf("/");
		version = version1.substr(indice2 + 1, 5); 
	
	} else {
		navegador = "Desconocido" ;
	}



//Usuario-Agente Header: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36





alert("Estas usando: " + navegador);

var txt = "";
txt += "<h3>Información Navegador</3>";
txt += "<p><b>Motor Navegador: </b>" + codnombre + "</p>";//window.navigator.appName
txt += "<p><b>Nombre Navegador: </b>" + navegador + "</p>";//window.navigator.appCodeName
txt += "<p><b>Navegador Versión: </b>" + version + "</p>";//
txt += "<p><b>Cookies Activadas: </b>" + galleta + "</p>";//
txt += "<p><b>Navegador Lenguaje: </b>" + window.navigator.applanguage + "</p>";//
txt += "<p><b>Navegador Online: </b>" + enlinea + "</p>";//
txt += "<p><b>Plataforma: </b>" + plataforma + "</p>";//
txt += "<p><b>Usuario-Agente Header: </b>" + window.navigator.userAgent + "</p>";//
txt += "<p><b>Java Activado: </b>" + javaon + "</p>";//
txt += "<p><b>Propietario: </b>" + propietarionav + "</p>";//
txt += "<p><b>Plugins Activos: </b>" + window.navigator.plugins.length + "</p>";//

document.getElementById("divNav").innerHTML = txt;
/*var txt = "";
txt += "<h3>Información Navegador</3>";
txt += "<p><b>Nombre (motor): </b>" + window.navigator.appName + "</p>";
txt += "<p><b>Código Navegador: </b>" + window.navigator.appCodeName + "</p>";
txt += "<p><b>Navegador Versión: </b>" + window.navigator.appVersión + "</p>";
txt += "<p><b>Cookies Activadas: </b>" + window.navigator.cookieEnabled + "</p>";
txt += "<p><b>Navegador Lenguaje: </b>" + window.navigator.applanguage + "</p>";
txt += "<p><b>Navegador Online: </b>" + window.navigator.onLine + "</p>";
txt += "<p><b>Plataforma: </b>" + window.navigator.plataforma + "</p>";
txt += "<p><b>Usuario-Agente Header: </b>" + window.navigator.userAgent + "</p>";
txt += "<p><b>Java Activado: </b>" + window.navigator.javaEnabled + "</p>";
txt += "<p><b>Vendedor: </b>" + window.navigator.vendor + "</p>";
txt += "<p><b>Plugins Activos: </b>" + window.navigator.plugins.length + "</p>";

document.getElementById("divNav").innerHTML = txt;
*/
}




