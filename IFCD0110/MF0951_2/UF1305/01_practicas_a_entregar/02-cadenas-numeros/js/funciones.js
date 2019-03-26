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
			var hours = Math.floor( tiempo / 3600 );  
			var minutos = Math.floor( (tiempo % 3600) / 60 );
			var segundos = tiempo % 60;

			var resultado = hours + " horas, " + minutos + " minutos y " + parseInt(segundos);  
			
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

//function frases(){
//	if (document.getElementById("number4").value != "") {
//		var frase = document.getElementById("number4").value;
//		
//		var comillas = ;
//		var mayusculas = toUpperCase(frase.str(""));
//		var minusculas = toLowerCase(frase);
//		var alreves = ;
//		var cita = ;
//		var todos = ;
//	
//		document.getElementById('etiqueta4').innerHTML= 
//			"Tu frase introducida es: " + frase + "<br>" +
//			"Tu frase intrecomillada es: " + comillas + "<br>" +
//			"Tu frase en mayúsculas es: " + mayusculas + "<br>" +
//			"Tu frase en minúsculas es: " + minusculas + "<br>" +
//			"Tu frase al revés es: " + alreves +  "<br>" +
//			"Tu frase encitada es " + cita + "<br>" +
//			"Tu frase con todo es: " + todos;
//	}	
//}
	

//Ejercicio 5
function numeros(){
	if (document.getElementById("number5").value != "") {
	
		document.getElementById('etiqueta5').innerHTML="";
	}
}

//Ejercicio 6
function palabras(){
	if (document.getElementById("number6").value != "") {
		
		document.getElementById('etiqueta6').innerHTML="";
	}	
}

//Ejercicio 7
function datos(){
	if (document.getElementById("number7").value != "") {
		
		document.getElementById('etiqueta6').innerHTML="";
	}	
}

//Ejercicio 8
function orden(){
	if (document.getElementById("number8").value != "") {
		
		document.getElementById('etiqueta8').innerHTML="";
	}	
}

//Ejercicio 9
function correo(){
	if (document.getElementById("number9").value != "") {
		
		document.getElementById('etiqueta9').innerHTML="";
	}	
}

//Ejercicio 10
function multiplicar(){
	if (document.getElementById("number10").value != "") {
	
		document.getElementById('etiqueta10').innerHTML="";
	}	
}
	



	
	
	
	