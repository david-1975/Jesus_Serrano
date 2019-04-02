//Funciones para trabajar con arrays

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

//function obtenerlitros(){
//	var litros=Number(document.getElementById("number1").value); //Recoge valor de formulario
//	var decilitros=litros*10;
//	var centilitros=litros*100;
//	var mililitros= litros*1000;
//	
//	document.getElementById("etiqueta1").innerHTML="<b>RESULTADO:</b><br>"+litros+ " litros, es igual a :<br>" + decilitros+" decilitros <br>"+ centilitros+" centilitros<br>"+ mililitros+" mililitros."
//}

function sueldoneto(){
	var sueldo=Number(document.getElementById("number1").value); //Recoge valor de formulario
	var segsoc=((sueldo*6.4/100)/14);
	var irpf=(sueldo*15/100)/14;
	var sueldoneto=((sueldo/14)-(segsoc+irpf)).toFixed(2);
	document.getElementById("etiqueta1").innerHTML="<b>RESULTADO:</b><br>Con un sueldo bruto de "+sueldo+ " € la nómina  será de :<br>" + sueldoneto +" €/mes<br>Después de descontar <br>"+ segsoc.toFixed(2)+" € de Seguridad Social y<br>"+irpf.toFixed(2)+" € de IRPF";
}

function preciofinal(){
	var precio=Number(document.getElementById("number2").value); //Recoge valor de formulario
	var descuento=precio*20/100;
	var iva=(precio-descuento)*21/100;
	var preciofinal=precio-descuento+iva;
	
	
	document.getElementById("etiqueta2").innerHTML="<b>RESULTADO:</b><br>Precio inicial del producto: "+precio+ " € <br>Descuento aplicable :" +descuento+ "€ = " +(precio-descuento)+"€<br>+IVA :"+iva+" € ="+ (precio-descuento+iva)+" €<br><strong>Precio final=" +(precio-descuento+iva)+" €</strong>" ;
}

function tiempodescarga(){
	var peso=Number(document.getElementById("number3").value);
	var bits=peso*8;
	var tiemposg=bits/10;
	var minutos=(tiemposg/60).toFixed(2);
	prueba=parseFloat(minutos);
	minutos=parseInt(minutos);
	var seg=(prueba-minutos);
	var segundos=seg.toString();
	segundos=segundos.slice(2, 4);

	document.getElementById("etiqueta3").innerHTML="<b>RESULTADO:</b><br>El tiempo total de transferencia es de "+ minutos +" minutos "+ segundos + " segundos";
}

function frase(){
	var frase=document.getElementById("number4").value;
	
		
	document.getElementById("etiqueta4").innerHTML="<b>RESULTADO:</b><br>"+"&quot"+frase+"&quot<br>"+frase.toUpperCase()+"<br>"+frase.toLowerCase()+"<br>"+"<strong>Cita: </strong>"+frase+"<br>";
	
	var res = frase.split(" ");
	document.getElementById("etiqueta4").innerHTML+=res.reverse();
}

function compara(){
	var frase=document.getElementById("number5").value;
	var valores = frase.split(" ");
	var a=Number(valores[0]);
	var b=Number(valores[1]);
	var c=Number(valores[2]);
	
	
	if (a>b && a>c){
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+ a+ " es el Mayor";
	}else if(b>a && b>c){
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+ b+ " es el Mayor";
	}else {
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+ c+ " es el Mayor";
	}
}
	