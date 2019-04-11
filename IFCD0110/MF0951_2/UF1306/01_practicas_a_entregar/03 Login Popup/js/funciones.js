// JavaScript Document
function formu(){
	document.getElementById("formulario").style.display = "block";
	document.getElementById("todo").style.display = "block";
}

function cerrar(){
	document.getElementById("formulario").style.display = "none";
	document.getElementById("todo").style.display = "none";
}
//USUARIOS REGISTRADOS
var usuario1 = {user:"juan", password:"1234", pin: 147}; 
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};

//Formulario USER
function iniciar(){
var userForm = document.getElementById("usuario").value;
var passForm = document.getElementById("password").value;
if(userForm = usuario1.user || userForm = usuario2.user || userForm = usuario3.user){
	alert("Primer paso ok");
	if( passForm = usuario1.password ||  passForm = usuario2.password || passForm = usuario3.password ){
		alert("Bienvenido!!!");
	}
	else{
		document.getElementById("errorpass").style.display = "block";
	}
}
else{
	document.getElementById("erroruser").style.display = "block";
}
}

//Recordar usuario
function remember(){
	document.getElementById("mostrarContra").style.display = "none";
	document.getElementById("enviar").style.display = "none";
	document.getElementById("mostrarPin").style.display = "block";
	document.getElementById("enviarPin").style.display = "block";
	document.getElementById("volver").style.display = "block";
	document.getElementById("olvidar").style.display = "none";
}


function volver(){
	document.getElementById("mostrarContra").style.display = "block";
	document.getElementById("enviar").style.display = "block";
	document.getElementById("mostrarPin").style.display = "none";
	document.getElementById("enviarPin").style.display = "none";
	document.getElementById("volver").style.display = "none";
	document.getElementById("olvidar").style.display = "block";
}

