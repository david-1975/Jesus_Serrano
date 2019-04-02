// JavaScript Document
//hay que hacer que el boton de onclick si no se mete valor de error. Sin hacer

//Ejercicio 1 Cálculo 
function sueldo(){
	var brutoanual = Number(document.getElementById("number1").value);
	var ssocial = brutoanual * 0.064;
	var ssocialm= ssocial/14;
	var irpf = brutoanual * 0.15;
	var irpfm = irpf/14;
	var sueldom = (brutoanual -(ssocial+irpf)) / 14;
	var final = sueldom.toFixed(2);
	document.getElementById('etiqueta1').innerHTML=
		"Sueldo bruto anual " + "<b>"+ brutoanual +"</b>" + "<br>" 
		+ "<b>" + ssocialm + "</b>" + " Seguridad social mensual " + "<b>" + ssocial + "</b>" 
		+ " Seguridad social anual 6,4%" + "<br>" 
		+ "<b>" + irpf+"</b>" + "</b>" +" IRPF 15% " + "<b>"+ "<br>" 
		+ final +"</b>" + " Sueldo mensual por 14 pagas. ";
}

//Ejercicio 2 Cálculo 
function precio(){
	var pvp = Number(document.getElementById("number2").value);
	var descuento = pvp * 0.2;
	var iva= pvp * 0.21;
	var neto = pvp -(descuento+iva);
	var final= pvp - descuento;
	var pvpf = final.toFixed(2);
	document.getElementById('etiqueta2').innerHTML=
		"PVP " + "<b>"+ pvp +"</b>" + "<br>" 
		+ "<b>" + descuento + "</b>" + " Dto 20% " + "<br>"
		+ "<b>" + iva + "</b>" + " IVA 21%" + "<br>" 
		+ "<b>" + neto +"</b>" + " NETO " +"<br>" 
		+ "<b>" + pvpf +"</b>" + " Precio final. ";
}

//Ejercicio 3 Cálculo -------------------------
function tiempo(){
	var archivo= Number(document.getElementById("number3").value);
	var mbps= archivo*8;
	var time= mbps/10;
	var timem = time/60;
	var finalt= timem.toFixed(2);
	document.getElementById("etiqueta3").innerHTML= finalt +" minutos.";
}

//Ejercicio 4 Análisis ---------------------------
function analisis(){
	var frase = document.getElementById("number4").value;
	//var frase1= new Array(frase);
	var mayusculas = frase.toUpperCase();
	var minusculas = frase.toLowerCase();
	var ordenar= frase.split("").reverse();
	var ordenarpalabras= frase.split(" ").reverse();
	
		
	document.getElementById("etiqueta4").innerHTML= 
		"&quot"  + frase + "&quot" + "<br>" +
		mayusculas + "<br>" +
		minusculas + "<br>" +
		ordenar + "<br>" +
		ordenarpalabras;
}

//Ejercicio 5 Comparativa---------------------------
function comparativa(){
		var num = document.getElementById("number5").value;
		var primero = num.indexOf(" ");
		var ultimo = num.lastIndexOf(" ");
		var a= Number(num.slice(0,primero));
		var b = Number(num.slice(primero,ultimo));
		var c = Number(num.slice(ultimo,));
		
		if (a>b && a>c){ document.getElementById("etiqueta5").innerHTML= a + "Mayor";}
	else if(b>a && b>c){ document.getElementById("etiqueta5").innerHTML= b + "Mayor";}
	else {document.getElementById("etiqueta5").innerHTML= c + "Mayor";}
		
			}