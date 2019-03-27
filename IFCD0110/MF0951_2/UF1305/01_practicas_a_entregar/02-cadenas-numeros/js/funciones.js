// JavaScript Document

//ejercicio 1

function sueldo(){
	if (document.getElementById("number1").value != "") {
		var bruto = parseInt(document.getElementById("number1").value);

		var mensual = bruto / 14;

		var ss = mensual * 0.064;
		var irpf = mensual * 0.15;

		var mesneto = mensual - (ss + irpf);

		document.getElementById('etiqueta1').innerHTML= "El salario mensual neto de " + bruto + 
			"€ brutos anuales es " + mesneto.toFixed(2) + "€.";	
	}
} 

//ejercicio 2

function ticket(){
	if (document.getElementById("number2").value != "") {
		var precio = parseInt(document.getElementById("number2").value);

		var descuento = precio * 0.20; 
		var descontado = precio -descuento;
		var iva = descontado * 0.21 ;
		var total = descontado - iva;

		document.getElementById('etiqueta2').innerHTML= "Factura: " + "<br>" + "Producto............. " + precio + "€" + "<br>" +
			"descuento 20%.. -" + descuento.toFixed(2) + "€" + "<br>" + "IVA.................... " + 
			iva.toFixed(2) + "€" + "<br>" + "Total factura..... " + "<strong>" + total.toFixed(2) + "€" + "</strong>";
	}
}

//ejercicio 3

function descarga (){
	if (document.getElementById("number3").value != "") {
		var tamaño = parseInt(document.getElementById("number3").value);
		
		var bits = tamaño * 8;
		var tiempo = bits / 10;		
				
		if(tiempo > 3600){
			var horas = Math.floor( tiempo / 3600 );  //saca las horas
			var minutos = Math.floor( (tiempo % 3600) / 60 );  //saca los minutos
			var segundos = tiempo % 60;        //saca los segundos

			var resultado = horas + " horas, " + minutos + " minutos y " + parseInt(segundos);  
			
			document.getElementById('etiqueta3').innerHTML= "Tu archivo de "+ tamaño + " MBytes se descargará en" + "<br>" + resultado + " segundos.";
		}
		else if(tiempo > 60 && tiempo < 3599){
			var minutos = Math.floor( tiempo / 60 );
			var segundos = tiempo % 60;

			var resultado = minutos + " minutos y " + parseInt(segundos); 
			
			document.getElementById('etiqueta3').innerHTML= "Tu archivo de "+ tamaño + " MBytes se descargará en " + "<br>"  + resultado + " segundos.";
		}
		else{
			document.getElementById('etiqueta3').innerHTML= "Tu archivo de "+ tamaño + " MBytes se descargará en  "+ "<br>"  + tiempo + " segundos.";
		}		
	}
}
	
//ejercicio 4

function frases(){
	if (document.getElementById("number4").value != "") {
		var frase = document.getElementById("number4").value;
		
		
		var comillas = "\"" + frase + "\"";
		var mayusculas = frase.toUpperCase();
		var minusculas = frase.toLowerCase();
		
		var matriz = frase.split(" ");
		var alreves = matriz.reverse();
		var completo  = alreves.toString().replace(/,/g, " ");	//búsqueda para cambiar las comas por espacios	
		var cita = "Cita: " + frase;		
	
		document.getElementById('etiqueta4').innerHTML= 
			"Tu frase introducida es: " + frase + "<br>" +
			"Tu frase intrecomillada es: " + comillas + "<br>" +
			"Tu frase en mayúsculas es: " + mayusculas + "<br>" +
			"Tu frase en minúsculas es: " + minusculas + "<br>" +
			"Tu frase al revés es: " + completo +  "<br>" +
			"Tu frase encitada es: " + cita + "<br>";			
	}	
}	

//Ejercicio 5
function numeros(){
	if (document.getElementById("number5").value != "") {
		var numeros = document.getElementById("number5").value;				
		
		var busqueda1 = numeros.indexOf(" ");
		var busqueda2 = numeros.lastIndexOf(" ");
		
		var numero1 = parseInt(numeros.slice(0, busqueda1));
		var numero2 = parseInt(numeros.slice(busqueda1 +1, busqueda2));
		var numero3 = parseInt(numeros.slice(busqueda2+1));
		
		var matriz = new Array (numero1, numero2, numero3);
		
		if(numero1 > numero2 && numero1 > numero3){
			var mensaje = numero1;
			if(numero2 > numero3){
				var mensaje2 = numero3;
			}
			else if(numero2 < numero3){
				 var mensaje2 = numero2;
			}
			else{
				var mensaje2 = numero2 + "y" + numero3;
			}
		}
		else if(numero2 > numero1 && numero2 > numero3){
			var mensaje = numero2;
			if(numero1>numero3){
				var mensaje2=numero3;
			}
			else if( numero1 < numero3 ){
				var mensaje2=numero1;
			}
			else{
				var mensaje2 = numero1 + "y" + numero3;
			}
		}
		else if(numero3 > numero1 && numero3 > numero2){
			var mensaje = numero3;
			if(numero2 > numero1){
				var mensaje2 = numero1;
			}
			else if(numero2<numero1){
				var mensaje2 = numero2;
			}
			else{
				var mensaje2 = numero1 + "y" + numero2;
			}
		}		
		else if(numero1 == numero2 && numero1 > numero3){
			var mensaje = numero1 + " y " + numero2;
			var mensaje2 = numero3;
		}
		else if(numero2 == numero3 && numero2 > numero1){
			var mensaje = numero2 + " y " + numero3;
			var mensaje2 = numero1;
		}
		else if(numero1 == numero3 && numero1 > numero2){
			var mensaje = numero1 + " y " + numero3;
			var mensaje2 = numero2;		
		}
		else {
			var mensaje = "Todos son iguales";
			var mensaje2 = "Todos son iguales";
		}
		
		var suma = matriz[0] + matriz[1] + matriz[2];
				
		document.getElementById('etiqueta5').innerHTML= "Resultados:" + "<ul>" +
			"<li>" + "Has introducido los siguientes números: " + numero1 + " " +  numero2 + " " + numero3 + 
			"</li>" +
			"<li>" + "El número más alto introducido es el " + "<strong>" + mensaje + "</strong>"+ "</li>" + 
			"<li>" + "El número más bajo introducido es el " + "<strong>" + mensaje2 + "</strong>"+ "</li>" + 
			"<li>" + "La suma de los valores es " + "<strong>" + suma + "</strong>" + "</li>" + "</ul>";
	}
}

