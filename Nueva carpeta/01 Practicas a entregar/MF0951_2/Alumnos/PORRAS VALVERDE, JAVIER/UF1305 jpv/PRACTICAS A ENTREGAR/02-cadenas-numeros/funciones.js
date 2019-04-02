// JavaScript Document
function sueldoNeto(){
	
	
	var sueldoBrutoAnual = Number(document.getElementById("number1").value);
	var sueldoBrutoMensual = sueldoBrutoAnual / 14 ;
	var ss = (sueldoBrutoMensual * 6.4) / 100 ;
	var irpf = (sueldoBrutoMensual * 15) / 100 ;	
	var sueldoNetoMensual = sueldoBrutoMensual - (irpf + ss);
	var neto= sueldoNetoMensual.toFixed(2);
	

	document.getElementById("etiqueta1").innerHTML=
	"El sueldo neto mensual de :" + sueldoBrutoAnual + " € " + " són : " + neto + " € ";   
	
	
}

function pvp(){
	
	var pvp = Number(document.getElementById("number2").value);
	
	var descuento = (pvp*20)/100 ;
	var pvpDes = pvp - descuento;
	var iva = pvpDes * 21 /100 ;
	var pvpDesIva = (pvp - descuento) - iva ;
	var oferta = pvp - descuento - iva ;
	 
	document.getElementById("etiqueta2").innerHTML=
	
	"El precio sin descuentos es de : " + pvp + " € " + "<br>" +
	"Con el 20 % de descuento se queda en  : " + pvpDes + " € " + "Te ahorras : " + descuento + " € " + "<br>" +
	"Con el 21 % de descuento del iva se queda en  :  " + (pvpDes - iva) + " € " + "Te ahorras : " + iva + " € " + "más" + "<br>" +	
	
	"El precio oferta se queda en "	+ oferta + " € " ;
		
		
}

function tiempoDescarga(){
	
	
	var megabytes = Number(document.getElementById("number3").value);
	
	var byte = megabytes * 1024;
	var bits = byte * 8 ;
	var segundos = bits / (1024*10);
	var minutos = segundos / 60 ;
	var minSeg = minutos.toFixed(2);
	 
	
	
	document.getElementById("etiqueta3").innerHTML=
		/*megabytes + " peso archivo en bit " + "<br>" + 
	    bytesAbits + " peso en bit" + "<br>" +*/
		"El tiempo de descarga para : " + megabytes + " Megabytes sera de :  " + minSeg + " minutos y  segundos " ;
		 
	    
}

function analisis1(){ 
	
	var frase =document.getElementById("text4").value;	
		
	var comillas = frase.toString();
	
	var may = frase. toUpperCase ();	
	var min = frase.toLowerCase(); 	
	var fraseMatriz = frase.split(" ");
	var reverse = fraseMatriz.reverse();
	
	
	document.getElementById("etiqueta4").innerHTML= 
		
		"'" + comillas + "'" + "<br>" +
		may + "<br>" +
		min + "<br>" +
		reverse + "<br>" +
		" cita " + frase + " cita ";		
}

function analisis2(){
	
	var valores = document.getElementById("text5").value;
	var cadena = valores.trim();
	
	var localizar1 = cadena.indexOf(" "); //1
	var cortar1 = Number(cadena.slice(0,localizar1));
	var localizar2 = cadena.lastIndexOf(" "); //3
	var cortar2 = Number(cadena.slice(localizar2));
	var localizar3 = cadena.lastIndexOf(" "); //3
	var cortar3 = Number(cadena.slice(localizar1,localizar2));
	
var cortar = "";
	if (cortar1 > cortar2 && cortar1 > cortar3) { var cortar = cortar1; } 
	else if (cortar2 > cortar1 && cortar2 > cortar3) { var cortar =  cortar2; } 
	else { var cortar = cortar3; }
	
var menor = ""; 	
   if(cortar1 < cortar2 && cortar1 < cortar3 ){var menor = cortar1;}
	else if (cortar2 < cortar1 && cortar2 < cortar3){var menor = cortar2;}
	else {var menor = cortar3;}
	
var medio = "";
	if (cortar1 < cortar2 && cortar1 > cortar3 ){ var medio = cortar1; }
	else if (cortar2 < cortar1 && cortar2 > cortar3 ){ var medio = cortar2; }
	else { var medio =  cortar3; } 
	
var suma =  cortar + menor + medio;
	
	document.getElementById("etiqueta5").innerHTML =
		" El numero mayor es : " + cortar + "<br>" +
		" El número menor es : " + menor  + "<br>" +
		" El número del medio es : " + medio  + "<br>" +
		" La suma de los tre numeros es : " + suma;
		
	
}
