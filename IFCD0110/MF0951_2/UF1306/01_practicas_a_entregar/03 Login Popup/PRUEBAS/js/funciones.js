// JavaScript Document

//Boton login de la pagina abre el formulario
function formu(){
	document.getElementById("formulario").style.display = "block";
	document.getElementById("todo").style.display = "block";			//FALTA TRANSICION
}

//Salir del login
function cerrar(){
	document.getElementById("formulario").style.display = "none";
	document.getElementById("todo").style.display = "none";
}

//COMPROBACION DE USUARIO
function verUsuario(){
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 		
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};

	var userForm = document.getElementById("usuario").value;

	if( userForm.search(" ") != -1 ){ 														//que no tenga espacios
		document.getElementById("erroruser").style.display = "block";
		document.getElementById("erroruser").innerHTML="Por favor, introduzca su usuario";
	}
	else{
		if (userForm != usuario1.user && userForm != usuario2.user && userForm != usuario3.user) {
			document.getElementById("erroruser").style.display = "block";
		}
		else{
			document.getElementById("erroruser").style.display = "none";	
		}
	}
}	

//COMPROBACION DE PASSWORD
/* function iniciar(){
var usuario1 = {user:"juan", password:"1234", pin: 147}; 		
var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
var usuario3 = {user:"jose", password:"1324", pin: 369};
var userForm = document.getElementById("usuario").value;
var passForm = document.getElementById("password").value;


if( userForm.search(" ") != -1 ){ 														//que no tenga espacios
	document.getElementById("erroruser").style.display = "block";
	document.getElementById("erroruser").innerHTML="Por favor, introduzca su usuario";
}
else{
	if (userForm != usuario1.user && userForm != usuario2.user && userForm != usuario3.user) {
		document.getElementById("erroruser").style.display = "block";
	}
	else{
		document.getElementById("erroruser").style.display = "none";	
		if (passForm !== usuario1.password || 
			passForm !== usuario2.password || 
			passForm !== usuario3.password) {
			document.getElementById("errorpass").style.display = "block";
		}
		else if((userForm === usuario1.user && passForm === usuario1.password)|| // si TODO CORRECTO
			(userForm === usuario2.user && passForm === usuario2.password)||
			(userForm === usuario3.user && passForm === usuario3.password)){
			document.getElementById("errorpass").style.display = "none";
			cerrar();
			alert("Mision cumplida");
			document.getElementById("usuarioFinal").innerHTML = "Bienvenido " + "<strong>" + userForm + "</strong>";	
		}
		else{	//SI EL USUARIO DE USUARIOX Y EL PASSWORD ES DE USUARIOY
			document.getElementById("errorpass").innerHTML = "Los datos no son coincidentes";
			document.getElementById("errorpass").style.display = "block";
		}	
	}
} */

//COMPROBACION DE PIN
function iniciarPin(){
	var usuario1 = {user:"juan", password:"1234", pin: 147}; 		
	var usuario2 = {user:"pedro", password:"4321", pin: 258}; 
	var usuario3 = {user:"jose", password:"1324", pin: 369};
	var userForm = document.getElementById("usuario").value;
	var pinForm = document.getElementById("pin").value;	
	
	if( userForm.search(" ") != -1 ){ 														//que no tenga espacios
		document.getElementById("erroruser").style.display = "block";
		document.getElementById("erroruser").innerHTML="Por favor, introduzca su usuario";
	}
	else{
		if (userForm != usuario1.user && userForm != usuario2.user && userForm != usuario3.user) {
			document.getElementById("erroruser").style.display = "block";
		}
		else{
			document.getElementById("erroruser").style.display = "none";	
			if (pinForm != usuario1.pin || 
				pinForm != usuario2.pin || 
				pinForm != usuario3.pin) {
				document.getElementById("errorpin").style.display = "block";
			}
			else if(userForm === usuario1.user && pinForm === usuario1.pin){
				document.getElementById("errorpin").innerHTML="El password es " + "<strong>" + usuario1.password + "</strong>";
			}
			else if	(userForm === usuario2.user && pinForm === usuario2.pin){
				document.getElementById("errorpin").innerHTML="El password es " + "<strong>" + usuario2.password + "</strong>";
			 }
			else if	(userForm === usuario3.user && pinForm === usuario3.pin){
				document.getElementById("errorpin").innerHTML="El password es " + "<strong>" + usuario3.password + "</strong>";
			}
			else{	//SI EL USUARIO DE USUARIOX Y EL PASSWORD ES DE USUARIOY
				document.getElementById("errorpin").innerHTML = "Los datos no son coincidentes";
				document.getElementById("errorpin").style.display = "block";
			}	
		}
	}
}


//Recordar usuario
function remember(){						//Aparecen los campos PIN
	document.getElementById("mostrarContra").style.display = "none";
	document.getElementById("enviar").style.display = "none";
	document.getElementById("mostrarPin").style.display = "block";
	document.getElementById("enviarPin").style.display = "block";
	document.getElementById("volver").style.display = "block";
	document.getElementById("olvidar").style.display = "none";
}

function volver(){							//Aparecen los campos PASSWORD
	document.getElementById("mostrarContra").style.display = "block";
	document.getElementById("enviar").style.display = "block";
	document.getElementById("mostrarPin").style.display = "none";
	document.getElementById("enviarPin").style.display = "none";
	document.getElementById("volver").style.display = "none";
	document.getElementById("olvidar").style.display = "block";
}

//Checkbox
function verPass(){						//VER CONTRASEÑA
var box =  document.getElementById("visor");
var boxPin = document.getElementById("visorPin");

if (box.checked === true){
    document.getElementById("password").type= "text";
	document.getElementById("pin").type= "text";
  } else {
   	document.getElementById("password").type= "password";	
	document.getElementById("pin").type= "password";
  }
}