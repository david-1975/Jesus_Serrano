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


	
	document.getElementById("year").innerHTML= "Has introducido <strong>"+ years + "</strong> años." + "<br><br>"+" En <strong>"+ years + "</strong> años hay " + "<strong>" + dias + "</strong> dias, " + "<strong>" + semanas.toFixed(2) + "</strong> semanas (¡redondeando!) y " + "<strong>" + meses + "</strong> meses ";
	
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
		var area = (base * altura)
		
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
  
   //   --- FECHAS -------

   function calcularEdad()	{

	var año = parseInt(document.getElementById("num_edad").value);
	//alert(año);
	var fecha =new Date().getFullYear();
	var edad = fecha - año;
	       
 document.getElementById("cumple").innerHTML= "Has introducido<strong>"+año+"</strong>"+"Tienes  "+edad+ " años" ;
}

function calcularAño()	{

	var año= parseInt(document.getElementById("num_año").value);
	var anterior = año-1;
	var posterior = año+1;
	       
 document.getElementById("año").innerHTML= "Has introducido<strong>"+año+"</strong>"+"El años anterior es "+anterior+ " y el posterior es "+posterior ;
}
    
function calcularFecha()	{

	var dia = parseInt(document.getElementById("num_dia").value);
	var mes = parseInt(document.getElementById("num_mes").value);
	var año = parseInt(document.getElementById("num_año2").value);
	if(dia < 10) { dia  = '0' + dia ; }
	if(mes< 10) { mes = '0' + mes; }
	
		       
 document.getElementById("fecha").innerHTML= "La fecha es<strong>"+dia+" / "+mes+" / "+año+"</strong>" ;
}
   
function calcularHora()	{

	var hora = parseInt(document.getElementById("num_h").value);
	var min = parseInt(document.getElementById("num_m").value);
	var seg = parseInt(document.getElementById("num_s").value);
	if(hora < 10) { hora = '0' + hora; }
	if(min< 10) { min = '0' + min; }
	if(seg< 10) { seg = '0' + seg; }
		       
 document.getElementById("hora").innerHTML= "Son las<strong>"+hora+" : "+min+" : "+seg+"</strong>" ;
}

function calcularFormato()	{

	var dat = (document.getElementById("num_fe").value);
	var dato = new Date(dat);
	var dia = dato.getDate();
	var mes = dato.getMonth()+1;
	var año = dato.getFullYear();
	var  dia_s = dato.getDay();
	
	
	
		switch ((dia_s)) {
			case 0:
				day = "Domingo";
				break;
			case 1:
				day = "Lunes";
				break;
			case 2:
				day = "Martes";
				break;
			case 3:
				day = "Miércoles";
				break;
			case 4:
				day = "Jueves";
				break;
			case 5:
				day = "Viernes";
				break;
			case 6:
				day = "Sábado";
		}
		switch((mes)-1){
			case 0:
			month = "Enero";
				break;
			case 1:
			month = "Febrero";
				break;
			case 2:
			month = "Marzo";
				break;
			case 3:
			month= "Abril";
				break;
			case 4:
			month = "Mayo";
				break;
			case 5:
			month = "Junio";
				break;
			case 6:
			month = "Julio";
				break;
			case 7:
			month = "Agosto";
				break;
			case 8:
			month = "Septiembre";
				break;
			case 9:
			month = "Octubre";
				break;
			case 10:
			month = "Noviembre";
				break;
				case 11:
			month = "Diciembre";
				

		}
		
			       
 document.getElementById("formato").innerHTML= "<strong>Hoy es "+day+" , "+dia+" de "+month+" de "+año+"</strong>" ;
}

function calcularFormatoActual()	{

	 
	var dato = new Date();
	var dia = dato.getDate();
	var mes = dato.getMonth()+1;
	var año = dato.getFullYear();
	var hora = dato.getHours();
	var min = dato.getMinutes() ;
	var seg = dato.getSeconds() ; 
	
	if(hora < 10) { hora = '0' + hora; }
	if(min< 10) { min = '0' + min; }
	if(seg< 10) { seg = '0' + seg; }
			       
 document.getElementById("formato1").innerHTML= "Has iniciado sesión el<strong>"+dia+"/"+mes+"/"+año+"</strong>"+" a las "+hora+":"+min+":"+seg;
 } 
// DIAS CUMPLEAÑOS

function diasCumple()	{
	/*var factual =new Date(document.getElementById("num_cum").value);
	alert(factual);
	var	fnac = new Date ();
	alert(fnac) ; 
	var cumple = (factual-fnac);
	alert(cumple)
	var dias = ((((cumple/1000)/60)/60)/24);
	alert(dias);
	alert(cumple+dias+typeof(cumple)+typeof(dias));*/
	var fechaUser = new Date( document.getElementById("num_cum").value);
	
	var fechaSistema = new  Date();  

	var resta= (fechaUser - fechaSistema);
	if (fechaSistema > fechaUser){

			var dias = ((((resta / 1000) / 60)/60) / 24);// dias - number
	alert(dias+" "+typeof(dias));
	var decimalesDia = dias.toString().indexOf(".");
	//alert(decimalesDia+" "+typeof(decimalesDia));
	var numeroFinal = dias.toString().substring(0, decimalesDia);
	alert(numeroFinal+" "+typeof(numeroFinal));

 document.getElementById("cumpleaños").innerHTML = "Faltan <strong>"+(365+numeroFinal)+"</strong>" ;

	}else{

		document.getElementById("cumpleaños").innerHTML = "Faltan <strong>"+(numeroFinal)+"</strong>" ;	
		
	}
	
	


}

// VIDA

 function vida()	{
	var fechaUser = document.getElementById("num_v").value;// String
	//alert(fechaUser);
	var nuevaFechaUser = new Date(fechaUser);
	//alert(nuevaFechaUser);//object
	var fechaSistema = new Date();
	//alert(fechaSistema+typeof(fechaSistema));//object

	if (fechaSistema > nuevaFechaUser) {
		var resta = fechaSistema - nuevaFechaUser;// number

		var años = (((((resta/1000)/60)/60)/24 )/365);// años- string
	//alert ("años"+ años+" "+typeof(años));
	var añosR = años.toString().indexOf(".");
	var captarAño = años.toString().substring(0, añosR);
	//alert(captarAño);

	var dias = ((((resta/1000)/60)/60)/24 );// años- string
	//alert ("dias"+ dias+" "+typeof(dias));
	var diasR = dias.toString().indexOf(".");
	var captarDia = dias.toString().substring(0, diasR);
	//alert(captarDia);

	var horas = (((resta/1000)/60)/60);// años- string
	//alert ("horas"+ horas+" "+typeof(horas));
	var horasR = horas.toString().indexOf(".");
	var captarHora = horas.toString().substring(0, horasR);
	//alert(captarHora);
	var min = ((resta/1000)/60);// años- string
	//alert ("horas"+ horas+" "+typeof(horas));
	var minR = min.toString().indexOf(".");
	var captarMin = min.toString().substring(0, minR);
		//alert(captarHora);
	var seg = (resta/1000);// años- string
	//alert ("horas"+ horas+" "+typeof(horas));
	var segR = seg.toString().indexOf(".");
	var captarSeg = seg.toString().substring(0, segR);
	


 document.getElementById("vida").innerHTML=
  "<strong>Has vivido :"+"</strong>"+captarAño+" años"+"<br>"+
  "<strong>Has vivido :"+"</strong>"+captarDia+" días"+"<br>"+
  "<strong>Has vivido :"+"</strong>"+captarHora+" horas"+"<br>"+
  "<strong>Has vivido :"+"</strong>"+captarMin+" minutos"+"<br>"+
  "<strong>Has vivido :"+"</strong>"+captarSeg+" segundos"+"<br>" ;
	}
	
	
	else{
		document.getElementById("vida").innerHTML= "Por favor introduce la fecha válida";
	}
	
}
// TRIMESTRE

function trimestre(){

	var fechaUser = document.getElementById("num_t").value;
	var con_Fecha = new Date(fechaUser);
	var mes ;
	
    switch (con_Fecha.getMonth()+1) {
        case 1:
        case 2:
        case 3:
			mes = "Primer Trimestre";
           
            break;
        case 4:
        case 5:
		case 6:
			mes = "Segundo Trimestre";
			break;
        case 7:
        case 8:
		case 9:
			mes = "Tercer Trimestre";
			break;
		case 10:
		case 11:
		case 12:
			mes = "Cuarto Trimestre";
			default:
			mes = "Fallo algo"
    }
	document.getElementById("trimestre").innerHTML= "<strong>Estás en el</strong>"+mes;
}

// ZODIACO
function zodiaco()	{
	var fecha = new Date(document.getElementById("num_z").value);
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	//alert(mes+" "+typeof(mes));

	var signo = "" ;
	var imagen = "" ;
	

	if((mes == 1 && dia >= 22 )|| (mes == 2 && dia <= 18)) {
		var signo = "Acuario";
		var imagen = "aquuarius.jpg";
		alert(mes);
	}else if ((mes ==2 && dia >= 19 )||(mes == 3 && dia <=23)){
		var signo = "Piscis";
		var imagen = "pisces.jpg";
	}else if ((mes ==3 && dia >= 24 )||(mes == 4 && dia <=21)){
		var signo = "Aries";
		var imagen = "aries.jpg";
	}else if ((mes == 4 && dia >= 22 )||(mes == 5 && dia <=21)){
		var signo = "Tauro";
		var imagen = "taurus.jpg";
	}else if ((mes == 5 && dia >= 22 )||(mes == 6 && dia <=21)){
		var signo = "Géminis";
		var imagen = "gemini.jpg";
	}else if ((mes == 6 && dia >= 22 )||(mes == 7 && dia <=21)){
		var signo = "Cáncer";
		var imagen = "cancer.jpg";
	}else if ((mes == 7 && dia >= 22 )||(mes == 8 && dia <=23)){
		var signo = "Leo";
		var imagen = "leo.jpg";
	}else if ((mes == 8 && dia >= 24 )||(mes == 9 && dia <=21)){
		var signo = "Virgo";
		var imagen = "virgo.jpg";
	}else if ((mes == 9 && dia >= 22 )||(mes == 10 && dia <=21)){
		var signo = "Libra";
		var imagen = "libra.jpg";
	}else if ((mes == 10 && dia >= 22 )||(mes == 11 && dia <=22)){
		var signo = "Escorpio";
		var imagen = "scorpio.jpg";
	}else if ((mes == 11 && dia >= 23 )||(mes == 12 && dia <=21)){
		var signo = "Sagitario";
		var imagen = "sagittarius.jpg";
	}else if ((mes == 12 && dia >= 22 )||(mes == 1 && dia <=21)){
		var signo = "Capricornio";
		var imagen = "capricorn.jpg";
	}

	/* switch(mes){
		case 1:
			if (dia>=21)
			signo = "Acuario";
			imagen = "aquarius.jpg";
		case 2:


			default:
			signo = "Algo ha fallado" */

	
	
		       
	document.getElementById("zodiaco").innerHTML= "Eres de signo <strong>"+signo+"</strong>" ;
	document.getElementById("imagen").src = imagen;
   }

   // ARRAY 

   function crearArray(){

	var valores = document.getElementById("text1").value;
	var crearMatriz = new Array(valores);
	document.getElementById("primero").innerHTML= "Grupo Volswagen: "+ crearMatriz;
   }