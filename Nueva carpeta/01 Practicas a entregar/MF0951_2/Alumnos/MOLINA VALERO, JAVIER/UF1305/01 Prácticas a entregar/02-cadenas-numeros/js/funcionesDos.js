// JavaScript Document
//calculo
function sueldo(){
	
	var bruto=Number(document.getElementById("number1").value);
	if (bruto==" "){alert("Introduce tu salario");return false;
}else{
	var brutoMensual=bruto/14;
	var ss=(brutoMensual*6.4)/100;
	var irpf=(brutoMensual*15)/100;
	var sueldo=brutoMensual-(irpf+ss);
	
	document.getElementById("etiqueta1").innerHTML="Sueldo bruto anual= "+bruto.toFixed(2)+" €<br>"+
												  "Sueldo bruto mensual= "+brutoMensual.toFixed(2)+" €<br>"+
												  "Descuento por Seguridad Social mensual= "+ss.toFixed(2)+" €<br>"+
												  "Descuento por IRPF mensual= "+irpf.toFixed(2)+" €<br>"+
												  "Sueldo mensual limpio= "+sueldo.toFixed(2)+" €";
}
	}

//precio final
function precioFinal(){
	
	var precio=Number(document.getElementById("number2").value);
	while(precio==" "){alert("Introduce el precio");return false;}
	var precioImpuesto=precio+((precio*21)/100);
	var descuento=(precio*20)/100;
	var precioFinal=precioImpuesto-descuento;
	
	document.getElementById("etiqueta2").innerHTML="Precio con 21% de impuesto= "+precioImpuesto+" €<br>"+
													"Se le descuenta "+descuento+" € por la oferta<br>"+
													"Queda un preciofinal de "+precioFinal+" €";
}

//descarga
function descarga(){
	var megabytes=Number(document.getElementById("number3").value);
	if (megabytes==" "){alert("Introduce cuantos megabytes tiene el archivo");return false;}
	var tiempoSg=(megabytes*8)/10;
	var tiempoMin=tiempoSg/60;
	
	document.getElementById("etiqueta3").innerHTML="Tiempo estimado de descarga en segundos(para una velocidad de 10mbps):"+tiempoSg.toFixed(2)+" sg<br>"+
													"Tiempo estimado de descarga en minutos (para una velocidad de 10mbps): "+tiempoMin.toFixed(2)+" min";
	
}
//Analisis
function analisis(){
	
	var frase=document.getElementById("number4").value;
	if(frase===""||frase==" "){alert("Escribe una frase");return false;}
	var mayusculas=frase.toUpperCase();
	var minusculas=frase.toLowerCase();
	var matriz=frase.split(" ");
	
	matriz.reverse();
	
	
	
	
	document.getElementById("etiqueta4").innerHTML='Cita: '+'"'+frase+'"<br>'+
													'CITA: '+'"'+mayusculas+'"<br>'+
													'Cita: '+'"'+minusculas+'"<br>'+
													'Cita: '+'"'+matriz+'"';
	
}

//comparativa
function comparativa(){
	var palabras=Number(document.getElementById("number5").value);
	
	var texto=palabras.toString();
	var matriz=texto.split("");
	if(palabras==" "){alert("Escribe tres números");return false;
					 }else if(matriz.length<3){alert("Escribe hasta conseguir tres números");return false;
					}else if(matriz.length>3){alert("No escribas más de tres números");return false;}
	
	var a=matriz[0];
	var b=matriz[1];
	var c=matriz[2];
	
	var mayor=Number();
	if(a>b && a>c){
		var mayor=a;
	}else if(b>a && b>c){
		var mayor=b;
	}else{
		var mayor=c;
	}
	
	var menor=Number();
	if(a<b && a<c){
		var menor=a;
	}else if(b<a && b<c){
		var menor=b;
	}else{
		var menor=c;
	}
	
	var numeroUno=Number(a);
	var numeroDos=Number(b);
	var numeroTres=Number(c);
	var suma=numeroUno+numeroDos+numeroTres;
	/*var cadenas=numerosDos.sort(function(a,b){return a-b});*/
				 
	
	document.getElementById("etiqueta5").innerHTML="<ul><li>Los numeros introducidos separados por comas son: "+matriz+"</li>"+
		"<li>El número mayor es: "+mayor+"</li>"+
		"<li>El número menor es: "+menor+"</li>"+
		"<li>El resultado de sumar todos los números es: "+suma+"</li>"+"</ul>";
	
	
}