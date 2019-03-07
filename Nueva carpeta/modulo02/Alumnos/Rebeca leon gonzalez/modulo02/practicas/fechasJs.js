// JavaScript Document
//edad

function fechaedad(){
var dato = parseInt(document.getElementById("numero").value);	
var fecha = new Date();
var edad= fecha.getFullYear();
var edadano = edad - dato;

document.getElementById("edad1").innerHTML=
edadano + " Años tienes de edad";

}

function fechas(){
	var dato = parseInt(document.getElementById("numero1").value);
	var fecha= dato - 1;
	var fecha2= dato +1;
	
	document.getElementById("fechas2").innerHTML=
	" El año introducido es : " + "<br>" + 
	dato + "." + "<br>"+
	" El año anterior es : " + "<br>"+
	fecha + "." + "<br>"+
	" El año siguiente es : " + "<br>"+
	fecha2 + ".";
	}
	
function dias(){
	var dato = parseInt(document.getElementById("numero2").value);
if (dato < 1 || dato > 31) {
	alert ("por favor, introduce un valor entre 1 y 31");
}
	var dato1 = parseInt(document.getElementById("numero3").value);
if(dato1 < 1 || dato1 > 12){
	alert("por favor, introduce un valor entre 1 y 12");
	}
	
	var dato2 = parseInt(document.getElementById("numero4").value);
if(dato2 > 2018 ){
	alert("Por favor, introduce un año correcto ");
	}
	

document.getElementById("fechas3").innerHTML= // tiene quie ir mes/dia/año para que sea  correcto.
	" El día , mes y año introducido son : " + dato1 + "/" + dato  + "/" + dato2 + ".";
	
}
function horas(){
var dato = parseInt(document.getElementById("numero5").value);
if (dato < 0 || dato > 23) {
	alert ("por favor, introduce un valor entre 0 y 23");
}
	var dato1 = parseInt(document.getElementById("numero6").value);
if(dato1 < 0 || dato1 > 60){
	alert("por favor, introduce un valor entre 0 y 60");
	}
	
	var dato2 = parseInt(document.getElementById("numero7").value);
if(dato2 < 0 || dato2 > 60 ){
	alert("Por favor, introduce un valor entre 0 y 60");
	}
	

document.getElementById("fechas4").innerHTML=
	" La hora  , los minutos  y los segundos introducidos son : " + dato + ":" + dato1  + ":" + dato2 + ".";
	
}
function fechadia(){
	var dato= document.getElementById("fecha").value;
	var fechaActual=new Date(dato);
	alert("fecha" + fechaActual);
	var dia = fechaActual.getDate();
	var mes = ["Enero","Febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
	var cogerMes = mes[fechaActual.getMonth()+ 1];
	alert("mes" + cogerMes);
	var semana= ["Domingo","Lunes", "Martes", "Miercoles","Jueves","Viernes","Sabado"];
	var cogerSema= semana[fechaActual.getDay()];
	alert("dia" + cogerSema);
	var cogerAno= fechaActual.getFullYear();
	alert("año" + cogerAno);
	
	document.getElementById("fechadia2").innerHTML=
	"\"" + " Hoy es " + cogerSema + "," + dia + " de " + cogerMes + " de " + cogerAno + "\"" + "."; 
	
	
	
	}
	
	//fecha y hora actual
	function horaFecha(){
	var dato = new Date();
	var dia= dato.getDate();
	var mes = ["Enero","Febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
	var cogerMes = mes[dato.getMonth()+1];
	var ano = dato.getFullYear();
	var hora= dato.getHours();
	var minut= dato.getMinutes();
	var segun= dato.getSeconds();
	
	document.getElementById("horaActu").innerHTML=
	"\"" + " Has iniciado sesión el día " + dia + " / " + dato.getMonth() + " / " + ano + " a las " + hora + " : " + minut + " : " + segun + "\"" + ".";
	document.getElementById("horaActu").style.backgroundColor="#AFEAF7";
	}
	
	/*function fechaCump(){
		var dato1 = new Date(document.getElementById("fecha1").value);
		alert(dato1);
		var dia= dato1.getDate();
		var mes = dato1.getMonth();
		var dato2 = new Date();
		var diaUser= dato2.getDate();
		var mesUser = dato2.getMonth();
		
		var difDias = (dato2.getDate() - dato1.getDate());
		var difMeses = (dato2.getMonth() - dato1.getMonth());
		
		document.getElementById("cumple").innerHTML = "Faltan " + difDias + " días y " + difMeses + " meses para tu cumpleaños";
	}
	
	function fechaCump2(){
		var dato= new Date(document.getElementById("fecha2").value);
		alert(dato);
		var dato1= dato.getDate();
		var dato2=dato.getHours();
		var dato3= dato.getMinutes();
		var dato4= dato.getSeconds();
		
		var actual=new Date();
		var actual1= actual.getDate();
		var actual2=actual.getHours();
		var actual3= actual.getMinutes();
		var actual4= actual.getSeconds();
		
		var dia=(dato.getDate() - actual.getDate());
		var hora=(dato1.getDate() - actual1.getDate());
		var minuto=(dato2.getDate() - actual2.getDate());
		var segundo=(dato3.getDate() - actual3.getDate());
		
			document.getElementById("cumplean").innerHTML = "Faltan " + difDias + " días y " + difMeses + " meses para tu cumpleaños";
	}
	*/

function diasQueFaltan(){
	var fechaUser= new Date(document.getElementById("fecha1").value);//1980/11/15 aqui convierto el string de arriba a fecha con el new date.Modifico la fecha
	//alert(fechaUser + " " + typeof(fechaUser));
	var fechaUserModificada=
	new Date().getFullYear() + "-" + (fechaUser.getMonth()+1) + "-" + (fechaUser.getDate()+1);
	alert(fechaUserModificada + " " + typeof(fechaUserModificada));//convierto fecha a string
	
	var convertirFechaUser = new Date(fechaUserModificada);//la conviertoen fecha para poder restar. y asi si pq es numer ya
	
	var fechaSistema= new Date();
	//alert(fechaSistema + " " + typeof(fechaSistema));
	if (fechaSistema > convertirFechaUser){
	var resta = (fechaSistema - convertirFechaUser);//528963114 devuelve SIEMPRE milisegundos y necesito transformarlo 
	}else{
		var resta = (convertirFechaUser-fechaSistema);
		}
	//alert(resta);
	var dias =(((( resta / 1000) / 60) / 60) /24); //transformo el nº de miliseg si /1000seg/60min/60horas/24para dia/Number
	alert(dias + typeof(dias));
	var decimalesDia = dias.toString().indexOf(".");//convierto a string(o cadena) solo se cambia aqui
	var numeroFinal = dias.toString().substring(0 , decimalesDia); //desde la posicion inicial 0 hasta el . quie es la variabl decimalesdia
	
	alert(numeroFinal + " " + typeof(numeroFinal)); //esta en posicion "2"poir ejem
	document.getElementById("etiqueta").innerHTML= numeroFinal;
	

	}

	/*function diaHoraMinuto() {
		
		var fechaUsuario = document.getElementById("date111").value; //1980/11/15
		//alert(fechaUsuario + " " + typeof(fechaUsuario));
		
		var nuevaFechaUsuario = new Date(fechaUsuario);
		//alert(nuevaFechaUsuario + " " + typeof(nuevaFechaUsuario));//object
		
		var fechaSistema = new Date();
		//alert (fechaSistema + " " + typeof(fechaSistema));
		
		if(fechaSistema > nuevaFechaUsuario){
			var resta = fechaSistema - nuevaFechaUsuario;
		}else{
			alert("por favor introduce una fecha correcta") ;
			}
			/*1000mili =1 segundos      
			1min=60 seg
			1 hora = 60 min
			1 dia = 24 horas
			1 año = 365*/
		/*var anos = (((((resta / 1000) / 60) / 60) /24) / 365 );
		// alert(" años "+ anos + " " + typeof(anos));
		var anosRedondeado = anos.toString().indexOf(".");
		var extraerAnos = anos.toString().substring(0,anosRedondeado);//0 es donde empieza hasta el punto
		
		var dias = ((((resta / 1000) / 60) / 60) /24); 
		// alert(" dias "+ dias + " " + typeof(dias));
		var diasRedondeado = dias.toString().indexOf(".");
		var extraerDias = dias.toString().substring(0,diasRedondeado);
		
		
		var horas = ((((resta / 1000) / 60) / 60) ; 
		//alert(" horas "+ horas + " " + typeof(horas));
		var horasRedondeado = horas.toString().indexOf(".");
		var extraerHoras = horas.toString().substring(0,horasRedondeado);
		
		var minutos = ((resta / 1000) / 60); 
		//alert(" minutos "+ minutos + " " + typeof(minutos));
		var minutosRedondeado = minutos.toString().indexOf(".");
		var extraerMinutos = minutos.toString().substring(0,minutosRedondeado);
		
		var segundos = (resta / 1000); 
		//alert(" segundos "+ segundos + " " + typeof(segundos));
		var segundosRedondeado = segundos.toString().indexOf(".");
		var extraerSegundos = segundos.toString().substring(0,segundosRedondeado);
		
		
		document.getElementById("cumplean").innerHTML =
			"Has vivido : " + extraerAnos + " Años" + "<br>"+ 
			"Has vivido : " + extraerDias + " Dias" + "<br>"+
			"Has vivido : " + extraerHoras + " Horas" + "<br>"+
			"Has vivido : " + extraerMinutos + " Minutos" + "<br>"+
			"Has vivido : " + extraerSegundos+ " Segundos" + "<br>";
		}
		*/
		
	function trimestre(){
	var fechaUser=document.getElementById("datos").value;
	var convertirFecha= new Date (fechaUser);
		
	var trimestre ;
	switch(convertirFecha.getMonth()+1) {
    case 0:
    case 1:  
    case 2:
       trimestre = "Primer Trimestre";
        break;
	case 3:
    case 4:  
    case 5:
       trimestre = "segundo Trimestre";
        break;	
	case 6:
    case 7:  
    case 8:
       trimestre = "Tercer Trimestre";
        break;	
	case 9:
    case 10:  
    case 11:
       trimestre = "Cuarto Trimestre";
        break;	
    
}
document.getElementById("datosTri").innerHTML= trimestre;

	}
	/*Acuario: 20 Enero – 18 Febrero
Piscis: 19 Febrero – 20 Marzo
Aries: 21 Marzo – 19 Abril
Tauro: 20 Abril – 20 Mayo / Géminis: 21 Mayo – 20 Junio / Cáncer: 21 Junio – 22 Julio
Leo: 23 Julio – 22 Agosto /Virgo: 23 Agosto – 22 Septiembre
Libra: 23 Septiembre – 22 Octubre
Escorpio: 23 Octubre – 21 Noviembre
Sagitario: 22 Noviembre – 21 Diciembre
Capricornio: 22 Diciembre – 19 Enero */

function signoZodiaco(){
	var fecha = new Date (document.getElementById("zodiacoFecha").value);
	var dia = fecha.getDate() + 1;
	var mes = fecha.getMonth() + 1;
	
	var signo= "";
	var foto = "";
	
	if ((mes == 1) && ( dia >= 20) || (mes == 2) && (dia <=18 )){
		var signo = "Acuario";
		var foto = "aquarius.jpg"; 
		
		}else if( (mes == 2) && (dia >= 19) || (mes == 3)&& (dia <= 20)) {
			var signo = "Pisces";
			var foto = "piscis.jpg";
		
		}else if( (mes == 3) && (dia >= 21) || (mes == 4)&& (dia <= 19)) {
			var signo = "Aries";
			var foto = "aries.jpg";
			
		}else if( (mes == 4) && (dia >= 20) || (mes == 5)&& (dia <= 20)) {
			var signo = "Tauro";
			var foto = "tauro.jpg";
		
		}else if( (mes == 5) && (dia >= 21) || (mes == 6)&& (dia <= 20)) {
			var signo = "Géminis";
			var foto = "geminis.jpg";
		
		}else if( (mes == 6) && (dia >= 21) || (mes == 7)&& (dia <= 22)) {
			var signo = "Cancer";
			var foto = "cancer.jpg";
		
		}else if( (mes == 7) && (dia >= 23) || (mes == 8)&& (dia <= 22)) {
			var signo = "Leo";
			var foto = "leo.jpg";
			
		}else if( (mes == 8) && (dia >= 23) || (mes == 9)&& (dia <= 22)) {
			var signo = "Virgo";
			var foto = "virgo.jpg";
		
		}else if( (mes == 9) && (dia >= 23) || (mes == 10)&& (dia <= 22)) {
			var signo = "Libra";
			var foto = "libra.jpg";
		
		}else if( (mes == 10) && (dia >= 23) || (mes == 11)&& (dia <= 21)) {
			var signo = "Escorpio";
			var foto = "escorpio.jpg";
		
		}else if( (mes == 11) && (dia >= 22) || (mes == 12)&& (dia <= 21)) {
			var signo = "Sagitario";
			var foto = "sagitario.jpg";
		
			}	else if( (mes == 12) && (dia >= 22) || (mes == 1)&& (dia <= 19)) {
					var signo = "Capricornio";
					var foto = "capricornio.jpg";
	
	}else{
		document.getElementById("signoNombre").innerHTML=
		"datos incorrectos, introducelos de nuevo.";
		}
	document.getElementById("fotos").src= foto;
	document.getElementById("signoNombre").innerHTML=
	"Tu signo del zodiaco es :" + "<br>" + signo;
	}