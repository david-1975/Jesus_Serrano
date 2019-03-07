// JavaScript Document

function conv_pantalla() {
	var pulgadas = parseFloat(document.getElementById("num_pantalla").value);
	
	var centimetros = pulgadas * 2.54;

	
	document.getElementById("pantalla").innerHTML= "Has introducido <strong>"+ pulgadas + "</strong> pulgadas." + "<br><br>"+"<strong>"+ pulgadas + "</strong> pulgadas = " + "<strong>" + centimetros + "</strong> centimetros";
	
	}
	
	
	

function conv_impar() {
	var numero = parseFloat(document.getElementById("num_impar").value);
	
	var resto = numero % 2;
	
	if (resto === 0) {	
	document.getElementById("impar").innerHTML= "Has introducido el número <strong>"+ numero + "</strong>." + "<br><br>"+"Este número es <strong>par</strong>, su resto al dividir por dos es " + resto;}
	
	else {document.getElementById("impar").innerHTML= "Has introducido el número <strong>"+ numero + "</strong>." + "<br><br>"+"Este número es <strong>impar</strong>, su resto al dividir por dos es " + resto;}

	
}



	

function conv_precio() {
	var precio = parseFloat(document.getElementById("num_precio").value);
	var descuento = parseFloat(document.getElementById("num_descuento").value);
	var iva = parseFloat(document.getElementById("num_iva").value);
	
	var precio_final = precio * (1-(descuento*0.01)) * (1 + (iva*0.01)); 
	

	document.getElementById("precio").innerHTML= "El precio con IVA de este artículo sería <strong>"+ (precio*(1+(iva*0.01))).toFixed(2)+ "</strong> euros, pero al tener un descuento del <strong>" + descuento + "%</strong>, se quedaría en un precio final de: <strong>" + precio_final.toFixed(2) +"</strong> euros";
	
	
}





function conv_byte() {
	var giga = parseFloat(document.getElementById("num_byte").value);
	
	var mega = giga *1024;
	var kilobyte = mega *1024;
	var byte = kilobyte * 1024;
	var bit = byte *8;

	
	document.getElementById("byte").innerHTML= "Has introducido <strong>"+ giga + "</strong> gigabytes." + "<br><br>"+"<strong>"+ giga + "</strong> gigabytes = <br>" + "<strong>" + mega + "</strong> megabytes <br>" + "<strong>" + kilobyte + "</strong> kilobytes <br>" + "<strong>" + byte + "</strong> bytes <br>"+ "<strong>" + bit + "</strong> bits";
	
	}
	
	

function conv_year() {
	var years = parseFloat(document.getElementById("num_year").value);
	
	var dias = years*365;
	var semanas = years*52.142857142857146;
	var meses = years*12;


	
	document.getElementById("year").innerHTML= "Has introducido <strong>"+ years + "</strong> años." + "<br><br>"+" En <strong>"+ years + "</strong> años hay " + "<strong>" + dias + "</strong> dias, " + "<strong>" + semanas.toFixed(2) + "</strong> semanas  y " + "<strong>" + meses + "</strong> meses ";
	
	}
	
	
	
/* function conv_primo() {
	var numero = parseFloat(document.getElementById("num_primo").value);
	var i;

	
	for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {	
	document.getElementById("primo").innerHTML= "Has introducido el número <strong>"+ numero + "</strong>." + "<br><br>"+"Este número no es <strong>primo</strong>, es divisible por " + i;}
	
	else {document.getElementById("primo").innerHTML= "Has introducido el número <strong>"+ numero + "</strong>." + "<br><br>"+"Este númer sí es <strong>primo</strong>";}
  

}
} */
function conv_area() {
	var diametro = parseFloat(document.getElementById("num_cir").value);
		var area = Math.PI*Math.pow(diametro/2,2);
	
	document.getElementById("circulo").innerHTML= "Has introducido <strong>"+ diametro + "</strong> cm."+"El área de un círculo de radio "+diametro+ " es "+area.toFixed(4)+" cm<sup>2</sup>";
	
	}
	function conv_area_cua() {
		
		var base = parseInt(document.getElementById("num_cua").value);
		
		var altura = parseInt(document.getElementById("num_cua2").value);
		alert(altura);
		var area = (base * altura)
		alert(area);
		document.getElementById("cuadrado").innerHTML= "Has introducido <strong>"+ base+ " y "+altura+ "</strong>"+". El área del cuadrado/rectangulo "+ " es "+area.toFixed(2)+" m<sup>2</sup>";
		
		}
		function conv_area_tri() {
		
			var base = parseInt(document.getElementById("num_tri").value);
			
			var altura = parseInt(document.getElementById("num_tri2").value);
			var area = ((base * altura)/2)
			
			document.getElementById("triangulo").innerHTML= "Has introducido <strong>"+ base+ " y "+altura+ "</strong>"+". El área del triángulo "+ " es "+area.toFixed(2)+" m<sup>2</sup>";
			
			}	

		function distancia()	{

			var veloz= parseInt(document.getElementById("num_dis").value);
			var dista= parseInt(document.getElementById("num_dis2").value);
			var tiempo = ((dista/veloz));

			document.getElementById("distancia").innerHTML= "Has introducido <strong>"+ veloz+ " y "+dista+ "</strong>"+". El tiempo"+ " es de "+tiempo.toFixed(2)+" horas";
		}

		function tasa()	{

			var dato= parseInt(document.getElementById("num_h").value);
			var descarga =(dato/10); 
			

			document.getElementById("datos").innerHTML= "Has introducido <strong>"+ dato+ "</strong>"+". El tiempo"+ " es de "+tiempo.toFixed(2)+" horas";
		}
  
   // Fechas javascript

   function edad()	{
	var hoy = new Date();
    var cumpleanos = new Date(fecha);
	var edad = hoy.getFullYear() - cumpleanos.getFullYear();
	alert(hoy+cumpleanos)
    //var m = hoy.getMonth() - cumpleanos.getMonth();

    //if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      //  edad--;
    
// document.getElementById("edad").innerHTML= "Has introducido <strong>"+ veloz+ " y "+dista+ "</strong>"+". El tiempo"+ " es de "+tiempo.toFixed(2)+" horas";
}
    

   
	