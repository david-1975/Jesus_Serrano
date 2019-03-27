// JavaScript Document

//ejercicio 1
function edad(){
	if (document.getElementById("date1").value != "") {
		var dato = document.getElementById("date1").value;
		var nacimiento = new Date(dato); //Convertimos lo recibido en fecha
		var fecha = new Date();	
		var edad = fecha.getFullYear() - nacimiento.getFullYear(); //restamos de la fecha actual en años la recibida, aunque da el año general
		
		
		var diamilisegundo = 24*60*60*1000;
		var horamilisegundo = 60*60*1000;
		var minutomilisegundo = 60*1000;
		var segundomilisegundo = 1000;
		
		var dias = (fecha - nacimiento)/diamilisegundo;
		var horas = (fecha - nacimiento)/horamilisegundo;
		var minutos = (fecha - nacimiento)/minutomilisegundo;
		var segundos = (fecha - nacimiento)/segundomilisegundo;
		
		document.getElementById("etiqueta1").innerHTML= 
			"Has nacido el " + dato + "<ul>" + 
			"<li>" + "Tu edad es: " +  edad + " años." + "</li>" + 
			"<li>" + "Has vivido un total de " + Math.trunc(dias) +" dias" + "</li>" +// sin decimales
			"<li>" + "Has vivido un total de " + Math.trunc(horas) +" horas" + "</li>" +
			"<li>" + "Has vivido un total de " + Math.trunc(minutos) +" minutos" + "</li>" +
			"<li>" + "Has vivido un total de " + Math.trunc(segundos) +" segundos" + "</li>" + "</ul>";	
	}
}

//ejercicio 2
function fecha(){
	if (document.getElementById("number2").value != "" || document.getElementById("number3").value != "" || document.getElementById("number4").value != "") {
		var dia = document.getElementById("number2").value;
		var mes = document.getElementById("number3").value;
		var ano = document.getElementById("number4").value;
		
		var fechasolucion = new Date(ano,mes,dia);		
		
		var diac = fechasolucion.getDate();
		var mesc = fechasolucion.getMonth();
		var anoc = fechasolucion.getFullYear();
		
		var actual = new Date();
		var hora = actual.getHours();
		var minuto = actual.getMinutes();
		var segundo = actual.getSeconds();
		
		document.getElementById("etiqueta2").innerHTML=
			"La fecha introducida es " + diac + "/" + mesc + "/" + anoc + "<br>" + 
			"y la hora actual es " + hora + ":" + minuto + ":" + segundo;
	}
}

//ejercicio 3
function fechalarga(){
	if (document.getElementById("date3").value != "") {
		var fecha = new Date(document.getElementById("date3").value);
		var ano = fecha.getFullYear();
		var dia = fecha.getDate();		
		var diaSemana = fecha.getDay();
		
		var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
		
		document.getElementById("etiqueta3").innerHTML = "La fecha es " + dias[diaSemana] + ", " + dia + " de " +
		meses[fecha.getMonth()] + " del año " + ano;		
	}
}	

//ejercicio 4
function sesion(){
	if (document.getElementById("text4").value != "" || document.getElementById("password4").value != "" ) {
		
		var nombre = document.getElementById("text4").value;
		
		var fecha = new Date();
		var ano = fecha.getFullYear();
		var mes = fecha.getMonth();
		var dia = fecha.getDate();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		var segundo = fecha.getSeconds();

		document.getElementById("idres6").innerHTML = "Hola " + nombre + "Has iniciado sesión el día " + 
		dia + "\/" + mes +  "\/" + ano + " a las " + 
		hora + ":" + minuto + ":" + segundo;
	
	}
}


//Ejercicio 5


