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
	
	document.getElementById("infoVentana").innerHTML= "<h3>El ancho de la ventana es: " + w + 
	" píxeles. El alto de la ventana es: " + h + " píxeles.</h3>";
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
	document.getElementById("infoPantalla").innerHTML =	 window.location.assign("https://www.wikipedia.org");
}
function cargarPuerto() {
	document.getElementById("infoPantalla").innerHTML =	"El número de puerto es " + window.location.port;
}
//Historial
function irAtras() {
	window.history.back() 
}
function irAdelante() {
	window.history.forward()
}
function irHistorial(){
	window.history.go(-2); //Nos va a dos páginas hacia atrás, en positivo va hacia delante
}
function tamañoHistorial(){
	var x= window.history.length;
	alert ("El número de páginas en historial es " + x);
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

//Eventos de tiempo
function reloj(){
	var d = new Date();
	var time = d.toLocaleTimeString();
	document.getElementById("pruebaReloj").innerHTML = time;	
}

var myVar;	//Definimos la variable para las dos funciones
function intervalo(){	
	myVar = setInterval(myTimer, 1000);	//Marcamos el intervalo de ejecución de la función
	function myTimer() {		
		var fecha = new Date();
		var time = fecha.toLocaleTimeString();
		document.getElementById("pruebaReloj").innerHTML = time;
	}
}	
function parar(){
	clearInterval(myVar);	//Paramos el intervalo, al estar la variable fuera de las funciones nos permite interactuar, si la declaramos dentro de intervalo no podríamos
}


//Informacion Navegador

function infoNavegador(){	
	
	//motor navegador
	var motorNombre = window.navigator.appName;  //Si no añadimos window tambien funciona
	if (motorNombre === "Netscape"){
		motorNombre = "JavaScript";
	}
	
	
	//Nombre navegador
	var navegador;  //Siempre devuelve Mozilla
	var agenteUsuario1 = navigator.userAgent;
	if (agenteUsuario1.indexOf("Firefox") > -1){		//Muy importante el orden de búsqueda
		navegador = "Firefox";
	}
	else if ((agenteUsuario1.indexOf("Opera") > -1) || (agenteUsuario1.indexOf("OPR") > -1)){
		navegador = "Opera";
	}
	else if ((agenteUsuario1.indexOf("Trident") > -1) || (agenteUsuario1.indexOf("MSIE") > -1)){
		navegador = "I.Explorer";
	}
	else if (agenteUsuario1.indexOf("Edge") > -1){		
		navegador = "Edge";
	}		
	else if ((agenteUsuario1.indexOf("Chrome") > -1) && (agenteUsuario1.indexOf("Safari") > -1)){		
		navegador = "Chrome";
	}
	else if (agenteUsuario1.indexOf("Safari") > -1){		
		navegador = "Safari";
	}
	else { navegador = "desconocido";}
	
	
	//Version navegador
	var version = window.navigator.appVersion;//dependiendo del navegador devuelve algo así: 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36
	var agenteUsuario = navigator.userAgent; 
	if (agenteUsuario.indexOf("Firefox") > -1){
		var indice1 = agenteUsuario.lastIndexOf("Firefox/");
		var versionN = agenteUsuario.substr(indice1,12);
		var localizar = versionN.search("/");
		version = versionN.slice(localizar+1,12);
	}
	else if ((agenteUsuario1.indexOf("Opera") > -1) || (agenteUsuario1.indexOf("OPR") > -1)){
		var indice1 = agenteUsuario.lastIndexOf("OPR/");
		var versionN = agenteUsuario.substr(indice1,15);
		var localizar = versionN.search("/");
		version = versionN.slice(localizar+1,8);
	}
	else if ((agenteUsuario1.indexOf("Trident") > -1) || (agenteUsuario1.indexOf("MSIE") > -1)){
		var indice1 = agenteUsuario.lastIndexOf("Trident/");
		var versionN = agenteUsuario.substr(indice1,13);
		var localizar = versionN.search("/");
		version = versionN.slice(localizar+1,11);
	}
	else if (agenteUsuario1.indexOf("Edge") > -1){		
		var indice1 = agenteUsuario.lastIndexOf("Edge/");
		var versionN = agenteUsuario.substr(indice1,13);
		var localizar = versionN.search("/");
		version = versionN.slice(localizar+1,9);
	}		
	else if ((agenteUsuario1.indexOf("Chrome") > -1) && (agenteUsuario1.indexOf("Safari") > -1)){		
		var indice1 = agenteUsuario.lastIndexOf("Chrome/");
		var versionN = agenteUsuario.substr(indice1,20);
		var localizar = versionN.search("/");
		version = versionN.slice(localizar+1,11);
	}
	else if (agenteUsuario1.indexOf("Safari") > -1){		
		var indice1 = agenteUsuario.lastIndexOf("Safari/");
		var versionN = agenteUsuario.substr(indice1,12);
		var localizar = versionN.search("/");
		version = versionN.slice(localizar+1,12);
	}
	else { navegador = "desconocido";}
	
		
	//Propietario
	var propietario;
	var agenteUsuario1 = navigator.userAgent;
	if (agenteUsuario1.indexOf("Firefox") > -1){		//Muy importante el orden de búsqueda
		propietario = "Fundación Mozilla";
	}
	else if ((agenteUsuario1.indexOf("Opera") > -1) || (agenteUsuario1.indexOf("OPR") > -1)){
		propietario = "Opera Software";
	}
	else if ((agenteUsuario1.indexOf("Trident") > -1) || (agenteUsuario1.indexOf("MSIE") > -1)){
		propietario = "Microsoft Corporation";
	}
	else if (agenteUsuario1.indexOf("Edge") > -1){		
		propietario = "Microsoft Corporation";
	}		
	else if ((agenteUsuario1.indexOf("Chrome") > -1) && (agenteUsuario1.indexOf("Safari") > -1)){		
		propietario = "Google, Inc.";
	}
	else if (agenteUsuario1.indexOf("Safari") > -1){		
		propietario = "Apple Computer, Inc.";
	}
	else { propietario = "desconocido";}
	
	//Lenguaje navegador
	var lenguaje = window.navigator.language;
	
	//Sistema Operativo
	var so = "";
	var sistema = window.navigator.userAgent;
	
		if (sistema.indexOf("Windows")) {		//Buscamos los tipos de sistema operativo
			so = "Windows";
		} else if (sistema.indexOf("Apple")){
			so = "Apple";
		} else if (sistema.indexOf("Linux")){
			so = "Linux";
		} else if (sistema.indexOf("iPhone")){
			so = "iPhone";
		} else if (sistema.indexOf("iPod")){
			so = "iPod";
		} else if (sistema.indexOf("iPad")){
			so = "iPad";
		} else if (sistema.indexOf("Android")){
			so = "Android";
		} else {
			so = "Desconocido";
		}
	//Plataforma
	var plataforma = window.navigator.platform;
	var plataformaNav = window.navigator.userAgent;
	//	Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36
	if ((plataformaNav.indexOf("Chrome") > -1) ||  //Poniendo el -1 es por si no encuentra nada
		(plataformaNav.indexOf("Edge") > -1) ||
    	(plataformaNav.indexOf("OPR") > -1) || 
		(plataformaNav.indexOf("Firefox") > -1)) {
			var indice7 = plataformaNav.lastIndexOf("Win64");
			 plataforma = "Da " + window.navigator.platform + ", pero la real es <strong>" + plataformaNav.substr(indice7,5) + "</strong>"; 
	}
	//Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2
	else if ((plataformaNav.indexOf("Safari") > -1) || 
         (plataformaNav.indexOf("Trident") > -1)|| 
		 (plataformaNav.indexOf("MSIE") > -1)) {
		var indice8 = plataformaNav.lastIndexOf("WOW64");
		plataforma = "Win64"; 
	}	
	
	//Navegador Online
	var enlinea = window.navigator.onLine;
	if (enlinea === true){
		enlinea = "Si";
	}else if(enlinea === false){
		enlinea = "No";
	}else if(enlinea === undefined){  //Por si a caso sale algo que no conocemos
		enlinea = "Indefinido";
	}else {
		enlinea = "Desconocido";
	}

	//Java activo
	var javaActivo = window.navigator.javaEnabled();
	if (javaActivo === true){
		javaActivo = "Si";
	}else if(javaActivo === false){
		javaActivo = "No";
	}else if(javaActivo === undefined){  //Por si a caso sale algo que no conocemos
		javaActivo = "Indefinido";
	}else {
		javaActivo = "Desconocido";
	}
	
	//Cookies activo
	var cookies = window.navigator.cookieEnabled;
	if (cookies === true){
		cookies = "Si";
	}else if(cookies === false){
		cookies = "No";
	}else if(cookies === undefined){  //Por si a caso sale algo que no conocemos
		cookies = "Indefinido";
	}else {
		cookies = "Desconocido";
	}

	//Plugins activos
	var pluginsActivos= window.navigator.plugins.length; //Pasamos el tamaño
	
	//Agente usuario
	var agente = window.navigator.userAgent;
	
	//MOSTRAR
	var txt = "";
	txt += "<h3>Información Navegador</h3>";
	txt += "<p><b>Motor navegador: </b>" + motorNombre + "</p>";
	txt += "<p><b>Nombre navegador: </b>" + navegador + "</p>";
	txt += "<p><b>Versión navegador: </b>" + version + "</p>";
	txt += "<p><b>Propietario: </b>" + propietario + "</p>";
	txt += "<p><b>Lenguaje navegador: </b>" + lenguaje + "</p>";
	txt += "<p><b>Sistema Operativo: </b>" + so + "</p>";
	txt += "<p><b>Plataforma: </b>" + plataforma + "</p>";
	txt += "<p><b>Navegador Online: </b>" + enlinea + "</p>";
	txt += "<p><b>Java activo: </b>" + javaActivo + "</p>";
	txt += "<p><b>Cookies activas: </b>" + cookies + "</p>";
	txt += "<p><b>Plugins activos: </b>" + pluginsActivos + "</p>";
	txt += "<p><b>Agente usuario: </b>" + agente + "</p>";
	
	document.getElementById("infoNav").innerHTML = txt +		
		
	"El producto es " + navigator.product + "<br>" ; //Siempre devuelve Geccko	 
}

//Geolocalización

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
   document.getElementById("geolocalizacion").innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {	
	document.getElementById("geolocalizacion").innerHTML = 
		"<h3>Gelocalización</h3>Latitud: <strong>" + position.coords.latitude + "</strong><br>Longitud: <strong>" + position.coords.longitude + "</strong>"; 
}

//Cookies

//Crear cookie
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//Obtener cookie del documento
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
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
//Chequear cookies
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
var a = document.cookie;
alert (a);