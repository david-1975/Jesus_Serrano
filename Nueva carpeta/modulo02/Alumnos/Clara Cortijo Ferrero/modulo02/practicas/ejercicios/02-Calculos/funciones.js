// JavaScript Document


function fun_primo() {
	
	var numero = parseInt(document.getElementById("num_primo").value);
	
	var divisible=[];
	var cont=0;
	for (var i=2; i<numero;i++) {
		
	  if (numero%i==0){
		  
		  divisible[cont]=false;
		  //alert("No es primo");
		  cont= cont+1;
		  
		  }
		
		else {
			divisible[cont]=true;
			cont = cont + 1;
			//alert("Es primo");		
			}
	}
		
	alert(divisible);
	
	
	if (divisible.includes(false)) {
		alert("No es primo");
		}
		
		
	else {
		alert("Es primo");
		}

		
}
	


function fun_primo2() {
	
	var numero = parseInt(document.getElementById("num_primo").value);

	for (var i=2; i<numero;i++) {
		
	  if (numero%i==0){ 
	  
	  return alert("No es primo, se puede dividir por " + i);
	  break; 
		  }
		  
	}
		
	alert("Es primo");
	
}
	







function conv_pantalla() {
	var pulgadas = parseFloat(document.getElementById("num_pantalla").value);
	
	var centimetros = pulgadas * 2.54;

	
	document.getElementById("pantalla").innerHTML= "<div class=\"white\">Has introducido <strong>"+ pulgadas + "</strong> pulgadas." + "<br><br>"+"<strong>"+ pulgadas + "</strong> pulgadas = " + "<strong>" + centimetros + "</strong> centimetros</div>";
	
	}
	
	
	

function conv_impar() {
	var numero = parseFloat(document.getElementById("num_impar").value);
	
	var resto = numero % 2;
	
	if (resto === 0) {	
	document.getElementById("impar").innerHTML= "<div class=\"white\">Has introducido el número <strong>"+ numero + "</strong>." + "<br><br>"+"Este número es <strong>par</strong>, su resto al dividir por dos es " + resto + "<\div>";}
	
	else {document.getElementById("impar").innerHTML= "<div class=\"white\">Has introducido el número <strong>"+ numero + "</strong>." + "<br><br>"+"Este número es <strong>impar</strong>, su resto al dividir por dos es distinto de 0" + "<\div>";}

	
}



	

function conv_precio() {
	var precio = parseFloat(document.getElementById("num_precio").value);
	var descuento = parseFloat(document.getElementById("num_descuento").value);
	var iva = parseFloat(document.getElementById("num_iva").value);
	
	var precio_final = precio * (1-(descuento*0.01)) * (1 + (iva*0.01)); 
	

	document.getElementById("precio").innerHTML= "<div class=\"white\">El precio con IVA de este artículo sería <strong>"+ (precio*(1+(iva*0.01))).toFixed(2)+ "</strong> euros, pero al tener un descuento del <strong>" + descuento + "%</strong>, se quedaría en un precio final de: <strong>" + precio_final.toFixed(2) +"</strong> euros</div>";
	
	
}





function conv_byte() {
	var giga = parseFloat(document.getElementById("num_byte").value);
	
	var mega = giga *1024;
	var kilobyte = mega *1024;
	var byte = kilobyte * 1024;
	var bit = byte *8;

	
	document.getElementById("byte").innerHTML= "<div class=\"white\">Has introducido <strong>"+ giga + "</strong> gigabytes." + "<br><br>"+"<strong>"+ giga + "</strong> gigabytes = <br>" + "<strong>" + mega + "</strong> megabytes <br>" + "<strong>" + kilobyte + "</strong> kilobytes <br>" + "<strong>" + byte + "</strong> bytes <br>"+ "<strong>" + bit + "</strong> bits</div>";
	
	}
	
	

function conv_year() {
	var years = parseFloat(document.getElementById("num_year").value);
	
	var dias = years*365;
	var semanas = years*52.142857142857146;
	var meses = years*12;


	
	document.getElementById("year").innerHTML= "<div class=\"white\">Has introducido <strong>"+ years + "</strong> años." + "<br><br>"+" En <strong>"+ years + "</strong> años hay " + "<strong>" + dias + "</strong> dias, " + "<strong>" + semanas.toFixed(2) + "</strong> semanas (¡redondeando!) y " + "<strong>" + meses + "</strong> meses </div>";
	
	}
	
	
	

function conv_circu() {
	var diametro = parseFloat(document.getElementById("num_circu").value);
	
	var area = Math.PI * Math.pow((diametro/2),2);
	
    


	
	document.getElementById("circulo").innerHTML= "<div class=\"white\">Has introducido un diámetro de <strong>"+ diametro + "</strong> cm." + "<br><br>"+" El área del círculo es de <strong>"+ area.toFixed(4) + "</strong> cm<sup>2</sup></div>";
	
	}
	
  
   
   
function conv_rect() {
	var base = parseFloat(document.getElementById("num_rect_base").value);
	var altura = parseFloat(document.getElementById("num_rect_altura").value);
	
	
	var area = base * altura;



	
	document.getElementById("rectangulo").innerHTML= "<div class=\"white\">Has introducido una base de de <strong>"+ base + "</strong> m, y una altura de <strong>" + altura + "</strong> m." + "<br><br>"+" El área del rectángulo es de <strong>"+ area + "</strong> m<sup>2</sup></div>";
	
	}
	
  
function conv_trian() {
	var base = parseFloat(document.getElementById("num_trian_base").value);
	var altura = parseFloat(document.getElementById("num_trian_altura").value);
	
	
	var area = (base * altura)/2;
	
	document.getElementById("triangulo").innerHTML= "<div class=\"white\">Has introducido una base de <strong>"+ base + "</strong> m, y una altura de <strong>" + altura + "</strong> m." + "<br><br>"+" El área del triángulo es de <strong>"+ area + "</strong> m<sup>2</sup></div>";
	
	}
	

function conv_tiempo() {
	var distancia = parseFloat(document.getElementById("num_dist").value);
	var velocidad = parseFloat(document.getElementById("num_velo").value);
	
	
	var tiempo = distancia/velocidad;



	
	document.getElementById("tiempo").innerHTML= "<div class=\"white\">Has introducido una distancia <strong>"+ distancia + "</strong> km, y una velocidad de <strong>" + velocidad + "</strong> km/h." + "<br><br>"+" Vas a tardar <strong>"+ tiempo + "</strong> horas en recorrerla, es decir <strong>" + tiempo*60 + "</strong> minutos. ¡¡Ánimo que puedes!!</div>";
	
	}
	


function conv_descarga() {
	var size = parseFloat(document.getElementById("num_descarga").value);
	
	var tiempo = size /(10.0/8.0);
	var vel_megabyteps = 10.0/8.0;
	

	
	document.getElementById("descarga").innerHTML= "<div class=\"white\">Tu archivo tiene un tamaño de <strong>"+ size + " megabytes</strong>, y la velocidad de descarga es de <strong>10 megabit por segundo</strong>, que equivaldría a <strong>" + vel_megabyteps + " megabyte por segundo.</strong>" + "<br><br>"+"Eso significa que vas a tardar <strong>"+ tiempo + " segundos</strong> en descargarla.</div>";
	
	}
	
	
	
function conv_sueldo() {
	var anual_bruto = parseFloat(document.getElementById("num_sueldo").value);
	
	var mensual_bruto = anual_bruto/14.0;
	var mensual_neto = mensual_bruto * (1-6.4/100) * (1-15/100);
	var texto="";
	

	if (mensual_neto<1000) {
		texto="Tu sueldo será menor de 1000 euros, ve ahorrando para la jubilación :P";


	}
	
	else if ((mensual_neto>1000) && (mensual_neto<=3000)) {
		texto="Tu sueldo está entre 1000 y 3000 euros, no está tan mal";

	}

	else if (mensual_neto>3000) {
		texto="Tu sueldo es mayor de 3000 euros, ¡¡qué genial!!";

	}


	document.getElementById("sueldo").innerHTML= "<div class=\"white\">Has introducido un salario bruto anual total de <strong>"+ anual_bruto + " euros</strong>, lo que equivale a un salario bruto mensual de <strong>"+ mensual_bruto.toFixed(2)+ " euros </strong>, distribuído en <strong>14 pagas</strong>. <br> De ahí se deducirá la contribución a la seguridad social de un <b>6.4%</b> y un <b>15%</b> de IRPF, quedándote un <strong>salario neto mensual</strong> de <strong>" + mensual_neto.toFixed(2) + " euros.</strong><br><br><strong>" + texto +"</strong></div>";
	
	}
	

function conv_ciclista() {
	var kmh = parseFloat(document.getElementById("num_ciclista").value);
	
	var ms = kmh*(1000/3600);
	
	

	
	document.getElementById("ciclista").innerHTML= "<div class=\"white\">Has introducido una velocidad de <strong>"+ kmh + " km/h</strong>, lo que equivale a una velocidad de <strong>" + ms.toFixed(2) + " m/s</strong></div>";
	
	}
	


function conv_coste() {
	var km = parseFloat(document.getElementById("num_coste").value);
	
	var coste_desplazamiento =km*0.5;
	
	

	
	document.getElementById("coste").innerHTML= "<div class=\"white\">El trabajador ha recorrido <strong>"+ km + " km</strong>, lo que equivale a un coste por desplazamiento de <strong>" + coste_desplazamiento.toFixed(2) + " euros</strong></div>";
	
	}
	


function conv_canciones() {
	var tamanio = parseFloat(document.getElementById("num_canciones").value);
	
	var num =4.7*1024 /tamanio;
	
	

	
	document.getElementById("canciones").innerHTML= "<div class=\"white\">Has introducido un tamaño de <strong>"+ tamanio + " megabytes por canción</strong>.<br>En un disco de 4.7 gigabytes podrás guardar un total de <strong>" + num.toFixed(0) + " canciones.</strong></div>";
	
	}
	
