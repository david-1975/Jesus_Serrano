//Método isFinite()

function reloj(){
	var fecha=new Date();
	var anio=fecha.getFullYear();
	var mes=fecha.getMonth();
	var dia=fecha.getDate();
	var hora=fecha.getHours();
	var minutos=fecha.getMinutes();
	var segundos=fecha.getSeconds();
	var diaSemana=fecha.getDay();
	
	document.getElementById("link1").innerHTML= "Año: " + anio;
	//if (mes<10){mes="0"+mes}
//	document.getElementById("link2").innerHTML= "Mes: " + (mes+1);
	if (mes<10){
		document.getElementById("link2").innerHTML= "Mes: 0" + (mes+1);
	}else{
		document.getElementById("link2").innerHTML= "Mes: " + (mes+1);
	}
	if (dia<10){
		document.getElementById("link3").innerHTML= "Dia: 0" + dia;
	}else{
		document.getElementById("link3").innerHTML= "Dia: " + dia;
	}
	if (hora<10){
		document.getElementById("link4").innerHTML= "Hora: 0" + hora;
	}else{
		document.getElementById("link4").innerHTML= "Hora: " + hora;
	}
	if (minutos<10){
		document.getElementById("link5").innerHTML= "Minutos: 0" + minutos;
	}else{
		document.getElementById("link5").innerHTML= "Minutos: " + minutos;
	}	
	if (segundos<10){
		document.getElementById("link6").innerHTML= "Segundos: 0" + segundos;
	}else{
		document.getElementById("link6").innerHTML= "Segundos: " + segundos;
	}
	
	var dias= ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses=["Enero", "Febrero", "Marzo", "Abril"]
	
	document.getElementById("fechalarga").innerHTML= "Hoy es : " +dias[diaSemana] +" "+ dia + " de "+ meses[mes] +" del "+ anio;
	
	setTimeout(reloj,1000);
}



function nuevaFecha() {
    var fecha = new Date();
	alert ("la fecha es:"+"\n"+fecha);
  
}
function extraeanio(){
	var fecha=new Date();
	var anio= fecha.getFullYear();
	alert ("Estamos en el año: "+ anio );
}

function extraeMes(){
	var fecha=new Date();
	var mes= fecha.getMonth();
	var meses=["Enero","Febrero","Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto","Septiembre", "octubre", "Noviembre", "Diciembre"]
	alert ("El mes actual es: "+mes +"\n"+"Su nombre es :" + meses[mes]);
}

function extraeDia(){
	var fecha=new Date()
	var dia= fecha.getDate();
	var dias= 30 - dia;
	alert("Quedan "+ dias +" dias para que termine el mes.");
}

function extraeHora(){
	var fecha=new Date()
	var hora= fecha.getHours();
	alert("Son las "+ hora +" horas");
}

function extraeMin(){
	var fecha=new Date()
	var hora= fecha.getHours();
	var minutos= fecha.getMinutes();
	alert("En "+ (60-minutos) +" minutos serán las " +(hora+1)+":00");
}

function extraeSeg(){
	var fecha=new Date()
	var hora= fecha.getHours();
	alert("Son las "+ hora +" horas");
}

function cerrar(){
	
  var dots = document.getElementById("contenedor");
  var btnText = document.getElementById("boton1");

  if (dots.style.display === "none") {
    dots.style.display = "block";
/*    btnText.innerHTML = "Cerrar"; 
    moreText.style.display = "none";*/
  } else {
    dots.style.display = "none";
/*    btnText.innerHTML = "Ejecutar"; 
    moreText.style.display = "inline";*/
  }
}

