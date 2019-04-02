// JavaScript Document

// EJERCICIO 1
// Crear una función que tras introducir una fecha de nacimiento en un campo de formulario calcule la edad. Calcular también, cuántos, días, horas, minutos // ha vivido esa persona a partir de su fecha de nacimiento. Mostrar el resultado en forma de lista desordenada debajo del campo de formulario.

function edad() {
	var fecha = new Date(document.getElementById("date1").value);
	var anoUser = fecha.getFullYear();
	var anoActual= new Date().getFullYear();
	var resta = (anoActual - anoUser);
	var restaTotal = (new Date()-fecha);
	var diasVida = (((restaTotal/1000)/3600)/24);
	var horasVida= ((restaTotal/1000/3600));
	var minutosVida=((restaTotal/1000/60));
	// var anosVida = diasVida/365; * algoritmo anterior *
	var anonuevo = fecha.setFullYear(anoActual);
	if ( anonuevo > new Date() ) {
		resta= resta -1;
	}
	
	document.getElementById('etiqueta1').innerHTML = 
		
		"<ul>" + "<li>" + "Tienes: " + resta + " años" + "</li>" +
		"<li>" + "Has vivido " + parseInt(diasVida) + " días" + "</li>" +
		"<li>" + parseInt(horasVida)+ " horas" + "</li>" +
		"<li>" + "y " + parseInt(minutosVida) + " minutos" + "</li>";
}

// EJERCICIO 2
// Crear una función que recoja el valor de 3 campos de formulario, día, mes y  año, y forme una fecha con ellos (formato fecha). Muestra  la fecha debajo // del campo de formulario en formato dd/mm/aaaa; junto a la hora, minutos y segundos actuales del sistema en formato hh/mm/ss
// Mostrar el resultado con saltos de línea.

function formato() {
	var dia = document.getElementById("number2").value;
	var mes = document.getElementById("number3").value;
	mes=(mes-1);
	var ano = document.getElementById("number4").value;
	var fecha_ant = new Date(ano, mes, dia);
	var fecha = new Date();
	var hora= fecha.getHours();
	var minuto = fecha.getMinutes();
	var segundo = fecha.getSeconds();
	
	
	document.getElementById('etiqueta2').innerHTML = 
		"Fecha introducida: " + fecha_ant + "<br>" +
		"Fecha introducida en el formato indicado: " + dia + "/" + (mes+1) + "/" + ano + "<br>" +
		"Hora actual: " + hora + "/" + minuto + "/" + segundo;
}

// EJERCICIO 3
// Crear una función que al introducir una fecha en un campo de formulario muestre la fecha en este formato: "Hoy es martes, 11 de Noviembre de 2018

function fechalarga() {
	var fecha = new Date(document.getElementById("date3").value);
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var diaSemana = fecha.getDay();
	var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	
	
	document.getElementById('etiqueta3').innerHTML = 
		"Has introducido el: " + dias[diaSemana] + ", " + dia + " de " + meses[mes] + " de " + ano;
}

// EJERCICIO 4
// Hola usuario, has iniciado sesión el día 13/11/2018 a las 15:30:25. 

function bienvenida() {
	var usuario = document.getElementById("text4").value;
	var fecha = new Date();
	var ano = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var hora= fecha.getHours();
	var minuto = fecha.getMinutes();
	var segundo = fecha.getSeconds();

	
	
	document.getElementById('etiqueta4').innerHTML = 
		"Hola " + usuario  + " has iniciado sesión el día " +  dia + "/" + (mes+1) + "/" + ano + " a las " +
		hora + "/" + minuto + "/" + segundo;
}

// EJERCICIO 5
// Crear una función que introduciendo la fecha de nacimiento en un campo de formulario calcule los días que faltan para su cumpleaños a partir de la  
// fecha introducida. Si el cumpleaños ya ha pasado, mostrar los días que han transcurrido desde su último cumpleaños y los días restantes que faltan // para el siguiente cumpleaños, y si el cumpleaños no ha llegado aún, mostrar sólo los días restantes. 

function calculoCumple() {
	var nacim = new Date(document.getElementById("date5").value);
	var fecha = new Date();
	var anoActual= new Date().getFullYear();
	var anoActualN= Number(anoActual);
	var anoMasUno=anoActualN+1;
	var cumple = nacim.setFullYear(anoActual);
	var resta = (cumple - fecha);
	var diascumple= (((resta/1000)/3600)/24);
	var haceDias=Math.round(-diascumple);
	
	if (diascumple<0) {
		document.getElementById('etiqueta5').innerHTML = 
		"Tu cumpleaños ya ha sido este año, en concreto hace " + haceDias + " días" + "<br>" +
		"Tu próximo cumpleaños es en " + anoMasUno + ", dentro de " + (365-haceDias) + " días"	;
	}
	
	else {document.getElementById('etiqueta5').innerHTML = 
		"Quedan " + Math.round(diascumple) + " días para tu cumpleaños";}
}
