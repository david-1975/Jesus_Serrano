// JavaScript Document


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
	
		
	document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres "+ signo +" </strong>" + "<br>" + "<img id ='pru' src='' width=100px height=100px>";
		
		
			
				

}	
	/* switch(mes){
		case 1:
			if (dia>=21)
			signo = "Acuario";
			imagen = "aquarius.jpg";
		case 2:


			default:
			signo = "Algo ha fallado" */

	
	
	
   // ARRAY 

   function crearArray(){

	var valores = document.getElementById("text").value;
	//alert(valores);
	var crearMatriz = new Array(valores);

	//alert(crearMatriz+typeof(crearMatriz));
	var cars = valores.split(" ", 3);
	alert(cars);
	document.getElementById("primero").innerHTML= "Grupo Volswagen: "+ cars;
   }


   function crearArray2(){
	var cars = ["Seat", "Audi", "Skoda"];
	var valores = document.getElementById("text2").value;

	//alert(cars+valores+" "+typeof(cars)+" "+typeof(valores));
	var newArray = valores.split(" ");
	//alert(cars+" "+newArray+" "+typeof(newArray));
	
	cars.push(...newArray);// añado 3 puntos para que coja los coches como 3 objetos
	
	//alert(cars+typeof(cars));
	
	

	document.getElementById("segundo").innerHTML= "<strong>Grupo Volswagen: </strong>"+"<br>"+ 
	"<ol>"+	
	"<tr>"+cars[0]+"</tr>" +
	"<li>"+cars[1]+"</li>" +
	"<li>"+cars[2]+"</li>" +
	"<li>"+cars[3]+"</li>" +
	"<li>"+cars[4]+"</li>" +
	"<li>"+cars[5]+"</li>" +
	"</ol>";
	 
	
   }
   function crearArray3(){
	var cars = ["Seat", "Audi", "Skoda","Volkswagen", "Bentley", "Bugatti"]
	var valores = document.getElementById("text3").value;
	var newArray = valores.split(",");
	cars.unshift(...newArray)
	//alert(newArray);
	
	//alert(cars);
	
	document.getElementById("tercero").innerHTML= "<strong>Grupo Volswagen: </strong>"+"<br>"+ 
	"<ol>"+	
	"<li>"+cars[0]+"</li>" +
	"<li>"+cars[1]+"</li>" +
	"<li>"+cars[2]+"</li>" +
	"<li>"+cars[3]+"</li>" +
	"<li>"+cars[4]+"</li>" +
	"<li>"+cars[5]+"</li>" +
	"<li>"+cars[6]+"</li>" +
	"<li>"+cars[7]+"</li>" +
	"<li>"+cars[8]+"</li>" +
	"</ol>";
   }
   function crearArray4(){
	var cars = ["Ducati", "Lamborghini", "Porsche","Seat", "Audi", "Skoda","Volkswagen", "Bentley", "Bugatti"]
	var valores = document.getElementById("text4").value;
	var newArray = valores.split(",");
	
	cars.splice(4, 0, "Scania", "Man")
	alert(newArray);
	
	alert(cars);
	
	document.getElementById("cuarto").innerHTML= "<strong>Grupo Volswagen: </strong>"+"<br>"+ 
	"<ul>"+	
	"<li>"+cars[0]+"</li>" +
	"<li>"+cars[1]+"</li>" +
	"<li>"+cars[2]+"</li>" +
	"<li>"+cars[3]+"</li>" +
	"<li>"+cars[4]+"</li>" +
	"<li>"+cars[5]+"</li>" +
	"<li>"+cars[6]+"</li>" +
	"<li>"+cars[7]+"</li>" +
	"<li>"+cars[8]+"</li>" +
	"<li>"+cars[9]+"</li>" +
	"<li>"+cars[10]+"</li>" +
	
	"</ul>";
   }
   function crearArray5(){
	//var valores = document.getElementById("text5").value;
	var numeroArray = [0,1,2,3,4,5,6,7,8,9];
	//alert(numeroArray+typeof(numeroArray));
	
	var orden = numeroArray.sort(function(a, b){return a - b});
	//alert(orden);
	
	
	var total = numeroArray.length;
	document.getElementById("quinto").innerHTML= "<strong>El valor más bajo es : </strong>"+orden[0]+"<br>"+
	"<strong>El valor más  alto es : </strong>"+orden[total-1]+"<br>"+
	"El total de valores son: "+total;
   }

   function crearArray6(){
	var numeroArray = [9,1,4,3,2,5,0,7,8,6];
	//alert(numeroArray+typeof(numeroArray));
	
	var orden = numeroArray.sort(function(a, b){return a - b});
	//alert(orden);
	var alto = orden.slice().sort(function(a, b){return b-a});
	
	//alert(orden+" "+alto);
	var total = numeroArray.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("sexto").innerHTML= "<strong>Ascendente : </strong>"+orden+"<br>"+
	"<strong>Descendente : </strong>"+alto+"<br>"+
	"Aleatorio: "+total;
   }
   var persona = {
    person:"Juan",
    estado:"casado",
    edad:50
    
};

   function crearArray7(){
	var person = prompt("Por favor introduce tu nombre");
	var estado = prompt("Introduce tu estado civil");
	var edad = prompt("Por favor introduce tu edad");
	var valores = document.getElementById("text7").value;
	alert(person+estado+edad+typeof(person)+typeof(estado)+typeof(edad));
	//alert(valores+typeof(valores))
	//var numeroArray = ["Juan tiene 50 años y está casado"];
	//alert(numeroArray+typeof(numeroArray));
   
	document.getElementById("septimo").innerHTML= "<strong>Representación del objeto : </strong>"


}