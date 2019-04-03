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
	var navegador = window.navigator.appCodeName;
	
	//Version navegador
	var version = window.navigator.appVersion;
	
	//Propietario
	var propietaro = "Google Inc";
	
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
	txt += "<p><b>Propietario: </b>" + propietaro + "</p>";
	txt += "<p><b>Lenguaje navegador: </b>" + lenguaje + "</p>";
	txt += "<p><b>Sistema Operativo: </b>" + so + "</p>";
	txt += "<p><b>Plataforma: </b>" + plataforma + "</p>";
	txt += "<p><b>Navegador Online: </b>" + enlinea + "</p>";
	txt += "<p><b>Java activo: </b>" + javaActivo + "</p>";
	txt += "<p><b>Cookies activas: </b>" + cookies + "</p>";
	txt += "<p><b>Plugins activos: </b>" + pluginsActivos + "</p>";
	txt += "<p><b>Agente usuario: </b>" + agente + "</p>";
	
	document.getElementById("infoNav").innerHTML = txt +		
		
	"El producto es " + navigator.product + "<br>" ;
	 
}