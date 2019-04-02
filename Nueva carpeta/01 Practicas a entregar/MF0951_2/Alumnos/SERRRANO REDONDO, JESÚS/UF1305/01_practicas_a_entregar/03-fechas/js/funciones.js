// JavaScript Document

//ejercicio 1
function edad(){
	if (document.getElementById("date1").value != "") {
		var dato = document.getElementById("date1").value;
		var nacimiento = new Date(dato); //Convertimos lo recibido en fecha
		var fecha = new Date();	
		//restamos de la fecha actual en años la recibida, aunque da el año general y hay que condicionar
		if( fecha.getMonth() >= nacimiento.getMonth() && fecha.getDate() >= nacimiento.getDate()){
			var edad = fecha.getFullYear() - nacimiento.getFullYear(); 
		}
		else{
			var edad = fecha.getFullYear() - nacimiento.getFullYear() -1;
		}
		
		var diamilisegundo = 24*60*60*1000;
		var horamilisegundo = 60*60*1000;
		var minutomilisegundo = 60*1000;
		var segundomilisegundo = 1000;
		
		var dias = (fecha - nacimiento)/diamilisegundo;
		var horas = (fecha - nacimiento)/horamilisegundo;
		var minutos = (fecha - nacimiento)/minutomilisegundo;
		var segundos = (fecha - nacimiento)/segundomilisegundo;
		
		document.getElementById("etiqueta1").innerHTML= 
			"<br>" +"Has nacido el " + nacimiento.getDate() + "/" + (nacimiento.getMonth()+1) + "/" + 
			nacimiento.getFullYear() + "<ul>" + 
			"<li>" + "Tu edad es: " + "<strong>" + edad + "</strong>" + " años." + "</li>" + 
			"<li>" + "Has vivido un total de " + "<strong>" + Math.trunc(dias) + "</strong>" +" dias" + "</li>" +   // sin decimales
			"<li>" + "Has vivido un total de " + "<strong>" + Math.trunc(horas) + "</strong>" +" horas" + "</li>" +
			"<li>" + "Has vivido un total de " + "<strong>" + Math.trunc(minutos) + "</strong>" +" minutos" + 
			"</li>" +
			"<li>" + "Has vivido un total de " + "<strong>" + Math.trunc(segundos) + "</strong>" +" segundos" + 
			"</li>" + "</ul>";	
		document.getElementById("etiqueta1").style.color = "blue";
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
			"<br>" +"La fecha introducida es " + "<strong>" +  diac + "</strong>" + "/" + "<strong>" +  mesc + "</strong>" + "/" + "<strong>" +  anoc + "</strong>" + "<br>" + 
			"y la hora actual es " + "<strong>" +  hora + "</strong>" + ":" + "<strong>" +  minuto + "</strong>" + ":" + "<strong>" +  segundo + "</strong>";
		document.getElementById("etiqueta2").style.color = "blue";
	}
}

//ejercicio 3
function fechalarga(){
	if (document.getElementById("date3").value != "") {
		var fecha = new Date(document.getElementById("date3").value); //convertimos a fecha directamente
		var ano = fecha.getFullYear();
		var dia = fecha.getDate();		
		var diaSemana = fecha.getDay();
		
		var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
		var dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
		
		document.getElementById("etiqueta3").innerHTML = "<br>" + "La fecha es " + dias[diaSemana] + ", " + dia + 
			" de " +	meses[fecha.getMonth()] + " del año " + ano;	
		document.getElementById("etiqueta3").style.color = "blue";
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

		document.getElementById("etiqueta4").innerHTML = "<br>" + "Hola " + "<strong>" + nombre + "</strong>" + 
			" has iniciado sesión el día " + dia + "\/" + mes +  "\/" + ano + " a las " + hora + ":" + minuto + 
			":" + segundo;	
		document.getElementById("etiqueta4").style.color = "blue";
	}
}
//Ejercicio 5
function cumple(){
	if (document.getElementById("date5").value != "") {
		var cumple = new Date(document.getElementById("date5").value);
		var actual = new Date();
				
		var diacumple = cumple.getDate();
		var mescumple = cumple.getMonth();
		
		var cumpleactual = new Date (2019, mescumple, diacumple); //Igualamos el cumpleaños
		var cumpleproximo = new Date (2020, mescumple, diacumple); //Tambien se podria con setFullYear(2020)
		var diamilisegundo = 24*60*60*1000;
		
		var diaactual = actual.getDate();
		var mesactual = actual.getMonth(); 
				
		if( mesactual > mescumple){					//El cumpleaños ya ha pasado el mes 
			var meses = mesactual - mescumple;
			var dias = Math.trunc((cumpleproximo - actual)/ diamilisegundo);
			
			if( diaactual > diacumple){
				var resultado = diaactual - diacumple;				
				var nota = "Has cumplido los años hace "  + "<strong>" + meses + "</strong>" + " meses y " + "<strong>" + resultado + "</strong>" + " dias. Te faltan " + "<strong>" + dias + "</strong>" + " dias para tu próximo cumpleaños";
			}
			else if ( diaactual < diacumple ){
				var resultado = diacumple - diaactual;
				var nota = "Has cumplido los años hace " + "<strong>" + meses + "</strong>" + " meses y " + "<strong>" + resultado + "</strong>" + " dias. Te faltan " + "<strong>" + dias + "</strong>" + " dias para tu próximo cumpleaños";
			}
			else{
				var nota = "Has cumplido los años hace "  + "<strong>" + meses + "</strong>" + " meses justos. Te faltan " + "<strong>" + dias + "</strong>" + " dias para tu próximo cumpleaños";
			}				
		}
		else if ( mesactual < mescumple ){			//Aun no ha llegado el mes del cumpleaños
			var meses = mescumple - mesactual-1;
			var dias = Math.trunc((cumpleactual - actual) / diamilisegundo);
				if ( diaactual > diacumple ){	//Aun no ha llegado el dia de cumpleaños					
					var nota = "Faltan para tu cumpleaños " + "<strong>" + dias + "</strong>" + " dias.";
				}
				else if ( diaactual < diacumple ){
					var nota = "Faltan para tu cumpleaños " + "<strong>" + dias + "</strong>" + " dias.";
				}
				else{
					var nota = "Faltan para tu cumpleaños " + "<strong>" + dias + "</strong>" + " dias, o lo que es lo mismo " + "<strong>" + meses + "</strong>" + " meses justos.";
				}					
		}
		else{										//Es el mes del cumpleaños
			var dias = Math.trunc((cumpleproximo - actual)/ diamilisegundo);
			if(diaactual > diacumple){				
				var resultado = diaactual - diacumple;
				var nota = "Has cumplido los años hace " + "<strong>" + resultado + "</strong>" + " dias. Te faltan " + "<strong>" + parseInt(dias) + "</strong>" + " para tu próximo cumpleaños";
			}
			else if(diaactual < diacumple){
				var resultado = diacumple - diaactual;
				var nota = "Te faltan " + "<strong>" + resultado + "</strong>" + " dias para tu cumpleaños";
			}
			else{
				var nota = "Feliz cumpleaños!!!";
			}			
		}
		document.getElementById("etiqueta5").innerHTML = "<br>" + nota;
		document.getElementById("etiqueta5").style.color = "blue";
	}
}