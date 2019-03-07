function fecha(){
var dato = parseInt(document.getElementById("numero").value);
var fechas = new Date();
var ano = fechas.getFullYear();
var edad = ano - dato;	
document.getElementById("demo1").innerHTML= "Tu edad es: " + edad + " años.";
}

function posterior(){
var dato =parseInt(document.getElementById("numero2").value);
var post = dato+1;
var ant = dato-1;
document.getElementById("demo2").innerHTML= "El año actual es: " + dato +  "<br>" + "el año anterior es: " + ant +  "<br>" + " y el año posterior es: " + post ;
}


function calendario(){
var dia =parseInt(document.getElementById("numero3").value);
var mes =parseInt(document.getElementById("numero4").value);
var ano =parseInt(document.getElementById("numero5").value);

document.getElementById("demo3").innerHTML= dia + "/" + mes + "/" + ano;
}



function hora(){
var hora =parseInt(document.getElementById("numero6").value);
var minutos =parseInt(document.getElementById("numero7").value);
var segundos =parseInt(document.getElementById("numero8").value);

document.getElementById("demo4").innerHTML= hora + ":" + minutos + ":" + segundos;
}


function introducirFecha(){
var d =parseInt(document.getElementById("numero9").value);
var m =parseInt(document.getElementById("numero10").value);
var a =parseInt(document.getElementById("numero11").value);
var semana = [ "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Lunes", "Martes", "Miércoles"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempbre", "Octubre", "Noviembre", "Diciembre"];
document.getElementById("demo5").innerHTML= "Hoy es " + semana[d-1] + ", " + d + " de " + meses[m-1] + " de " + a; 
}



function iniciado(){
var fecha= new Date();
var dia= fecha.getDate();
var mes= fecha.getMonth();
var ano= fecha.getFullYear();
var hora =new Date();
var ahora= hora.getHours();
var minu= hora.getMinutes();
var secon= hora.getSeconds();
document.getElementById("demo6").innerHTML=  "\"" + "Has iniciado sesión el día " + dia + "/" + mes + "/" + ano +  " a las " + ahora + ":" + minu + ":" + secon + "\"" + "." ;
}



function cumple(){
var fechaUser = new Date (document.getElementById("fecha").value);  
var fechaUserModificada= new Date().getFullYear() + " " + (fechaUser.getMonth()+1) + " " + (fechaUser.getDate()+1);
var convertirFechaUser =new Date(fechaUserModificada); 
var fechaSistema = new Date();
//alert (fechaSistema + " " + typeof(fechaSistema));
	if(fechaSistema > convertirFechaUser){
		var resta = (fechaSistema - convertirFechaUser); 
	} else {
		var resta = (convertirFechaUser - fechaSistema);
	}
//alert (resta + " " + typeof(resta));
var dias = ((((resta/1000)/60)/60)/24);//días
//alert (dias + " " + typeof(dias));
var decimalesDia = dias.toString().indexOf(".");
var numeroFinal = dias.toString().substring(0,decimalesDia);
//alert (decimalesDia + " " + typeof(decimalesDia));

document.getElementById("demo7").innerHTML= numeroFinal;
}



function vida(){
var fechaUser =document.getElementById("dato").value;  //1984/06/21 String
//alert (fechaUser + " " + typeof(fechaUser));
var nuevaFechaUser = new Date(fechaUser);
//alert (nuevaFechaUser + " " + typeof(nuevaFechaUser)); //Object
var fechaSistema = new Date();	
//alert (fechaSistema + " " + typeof(fechaSistema));//Object
 	if(fechaSistema > nuevaFechaUser){
		var resta = (fechaSistema - nuevaFechaUser); 
	} else {
	alert("Introduce una fecha válida, coño.");
	}

var anos =(((((resta /1000)/60)/60)/24)/365);
var anosRedondeados =anos.toString().indexOf(".");
var extraerAnos = anos.toString().substring(0,anosRedondeados);

var dias =((((resta /1000)/60)/60)/24);
var diasRedondeados =dias.toString().indexOf(".");
var extraerDias = dias.toString().substring(0,diasRedondeados);

var horas =(((resta /1000)/60)/60);
var horasRedondeados =horas.toString().indexOf(".");
var extraerHoras = horas.toString().substring(0,horasRedondeados);

var minu =((resta /1000)/60);
var minuRedondeados =minu.toString().indexOf(".");
var extraerMinu = minu.toString().substring(0,minuRedondeados);

var segu =(resta/1000);
var seguRedondeados =segu.toString().indexOf(".");
var extraerSegu = segu.toString().substring(0,seguRedondeados);

document.getElementById("demo8").innerHTML= "Has vivido " + extraerAnos + " años." + "<br>" +
											"Has vivido " + extraerDias + " días." + "<br>" +
											"Has vivido " + extraerHoras + " horas." + "<br>" +
											"Has vivido " + extraerMinu + " minutos." + "<br>" +
											"Has vivido " + extraerSegu + " segundos." + "<br>" ;
}


	
function trim(){
	var fechaUser= document.getElementById("tri").value;
	var convertirFecha = new Date(fechaUser);
	
	var trimestre;
	switch (convertirFecha.getMonth()+1) {
    case 0:
    case 1:
    case 2:
        trimestre = "Primer trimestre";
        break;
    case 3:
    case 4:
    case 5:
        trimestre = "Segundo trimestre";
        break;
    case 6:
	case 7:
    case 8:
        trimestre = "Tercer trimestre";
	    break;
    case 9:
	case 10:
    case 11:
		trimestre = "Cuarto trimestre";

}
document.getElementById("demo9").innerHTML = trimestre;
}




function signos(){
	var fechaUser= new Date(document.getElementById("zodiaco").value;
	var dia=fecha.getDate();
	var mes= fecha.getMonth()+1;
	var signo= "";
	var imagen="";
	
	if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
		
		signo= "Acuario";
		imagen= "img/aquarius.jpg";
	
	} else if ((mes ==2 && dia >= 20) || (mes == 3 && dia <= 21)) {
	     
		 signo= "Piscis";
		imagen= "img/pisces.jpg";
	
	}else if ((mes == 3 && dia >= 22) || (mes == 4 && dia <= 20)) {
	    
		signo= "Aries";
		imagen= "img/aries.jpg";
	
	}else if ((mes == 4 && dia >= 22) || (mes == 5 && dia <= 21)) {
		
		signo= "Tauro";
		imagen= "img/taurus.jpg";
	
	}else if ((mes == 5 && dia >= 22) || (mes == 6 && dia <= 21)) {
		
		signo= "Geminis";
		imagen= "img/gemini.jpg";
	
	}else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 23)) {
		
		signo= "Cancer";
		imagen= "img/cancer.jpg";
	
	}else if ((mes == 7 && dia >= 24) || (mes == 8 && dia <= 23)) {
		
		signo= "Leo";
		imagen= "img/leo.jpg";
	
	}else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
		
		signo= "Virgo";
		imagen= "img/virgo.jpg";
	
	}else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
		
		signo= "Libra";
		imagen= "img/libra.jpg";
	
	}else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
		
		signo= "Escorpio";
		imagen= "img/scorpio.jpg";
	
	}else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 22)) {
		
		signo= "Sagitario";
		imagen= "img/sagitarius.jpg";
	
	}else if ((mes == 12 && dia >= 23) || (mes == 1 && dia <= 20)) {
		
		signo= "Capricornio";
		imagen= "img/capricorn.jpg";
	
	}else {"Lo sentimos, no tiene signo del zodiaco"}

document.getElementById("demo10").innerHTML=signo;
document.getElementById("imagen").scr=imagen;
		
}




/*
Enero 20 – Febrero 18 ACUARIO
Febrero 19 – Marzo 20 PISCIS
Marzo 21 –Abril 19 ARIES	
Abril 20 – Mayo 20 TAURO
Mayo 21 – Junio 20 GEMINIS 
Junio 21 – Julio 22 CANCER
Julio 23–Agosto 22 LEO
Agosto 23 – Septiembre 22 VIRGO
Septiembre 23 – Octubre 22 LIBRA
Octubre 23 – Noviembre 21 ESCORPIO 
Noviembre 22 - Diciembre 21 SAGITARIO
Diciembre 22 – Enero 19 CAPRICORNIO
*/