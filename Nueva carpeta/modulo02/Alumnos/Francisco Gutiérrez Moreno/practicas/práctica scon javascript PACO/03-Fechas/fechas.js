// JavaScript Document

function edad(Fecha){
	var fecha = new Date(Fecha);
	var hoy = new Date();
	var ed = parseInt((hoy -fecha)/365/24/60/60/1000);
	document.getElementById('pepe').value = "tienes " + ed + " años";
	document.getElementById('pepe').style.color = "red";
}
function ano() {
	var dato = parseInt(document.getElementById("number").value);
	var anoposterior = dato + 1;
	var anoanterior = dato - 1;
document.getElementById("anomasomenos").innerHTML = "El año anterior es " + anoanterior +
 "<br>" + "El año introducido es " + dato + "<br>" + 
 "El año siguiente es " + anoposterior;
 document.getElementById('anomasomenos').style.color = "red";
	
}


function fechacompuesta() {
	var dia = parseInt(document.getElementById("dia").value);
	if (dia > 31) {
   alert("Introduce un numero de dia entre 1 y 31");
}
else if (dia < 1) {
   alert("Introduce un numero de dia entre 1 y 31");
}
else {
   alert("Día correcto continua");
}
	var mes = parseInt (document.getElementById("mes").value);
if (mes > 12) {
   alert("Introduce un numero de mes entre 1 y 12");
}
else if (mes < 1) {
   alert("Introduce un numero entre 1 y 12");
}
else {
   alert("Mes correcto continua");
}
	
	var ano = parseInt (document.getElementById ("ano").value);
	

	
	if (ano > 9999) {
   alert("Introduce un numero de año entre 1 y 9999");
}
else if (ano < 1) {
   alert("Introduce un numero entre 1 y 9999");
}
else {
   alert("Año correcto continua");
}
/*var hoy = new Date();
	var edu = parseInt((hoy)/365/24/60/60/1000)
if (ano =< edu) {alert "Año correcto continúa")}
else { alert "Introduce un valor de año inferior al actual"};
	*/
	
	document.getElementById("juan").value = dia + "/" + mes + "/" + ano; 
	document.getElementById("juan").style.color = "red";
	}
	
	
	
function diasQueFaltan() {
		var fechaUser = new Date (document.getElementById("date11").value); 
		var fechaSistema = new Date();
var fechaUserModificada = fechaSistema.getFullYear() + "-" + (fechaUser.getMonth()+1) + "-" + fechaUser.getDate();
		//alert (fechaUserModificada + " " + typeof (fechaSistema));
		var convertirFechaUser = new Date(fechaUserModificada);
		//alert (convertirFechaUser + " " + typeof (convertirFechaUser));
		if (fechaSistema > convertirFechaUser) {
		var resta = (fechaSistema - convertirFechaUser);
		} else {
		var resta = (convertirFechaUser - fechaSistema);
		}
		
		//alert (resta + " " + typeof(resta));
		var dias = ((((resta / 1000) / 60) / 60) / 24);
		//alert (dias + " " + typeof(dias));
		var decimalesDia = dias.toString().indexOf(".");
		//alert (decimalesDia + " " + typeof(decimalesDia));
		var numeroFinal = dias.toString().substring(0,decimalesDia);
		//alert (numeroFinal + " " + typeof(numeroFinal));

		
		document.getElementById("cumple").value = numeroFinal;
		document.getElementById("cumple").style.color = "red";
		}
		
		
		
		
	function diasHorasMinutosSegundos() {
		var fechaUser = document.getElementById("date12").value; //1960/11/12 String
		//alert ( fechaUser + " " + typeof(fechaUser));
		var nuevaFechaUser = new Date(fechaUser);
		//alert ( nuevaFechaUser + " " + typeof(nuevaFechaUser)); // Object
		var fechaSistema = new Date ();
		//alert ( fechaSistema + " " + typeof(fechaSistema)); // Object
		var resta;
		if(fechaSistema > nuevaFechaUser) {
			var resta = (fechaSistema - nuevaFechaUser);
			} else { 
			var resta = (nuevaFechaUser - fechaSistema);
			}
		var anos = (((((resta / 1000) / 60) / 60) / 24)/365); 
		var anosRedondeados = anos.toString().indexOf(".");
		var extraerAno = anos.toString().substring(0,anosRedondeados);
		//alert (extraerAno + " " + typeof(extraerAno)); // Object
		var dias = ((((resta / 1000) / 60) / 60) / 24); 
		var diasRedondeados = dias.toString().indexOf(".");
		var extraerDia = dias.toString().substring(0,diasRedondeados);
		//alert (extraerDia + " " + typeof(extraerDia));
		var horas = (((resta / 1000) / 60) / 60) ; 
		var horasRedondeados = horas.toString().indexOf(".");
		var extraerHora = horas.toString().substring(0,horasRedondeados);
		//alert (extraerHora + " " + typeof(extraerHora));
		var minutos = ((resta / 1000) / 60) ; 
		var minutosRedondeados = minutos.toString().indexOf(".");
		var extraerMinuto = minutos.toString().substring(0,minutosRedondeados);
		//alert (extraerMinuto + " " + typeof(extraerMinuto));
		var segundos = (resta / 1000)  ; 
		var segundosRedondeados = segundos.toString().indexOf(".");
		var extraerSegundo = segundos.toString().substring(0,segundosRedondeados);
		//alert (extraerSegundo + " " + typeof(extraerSegundo));
		
		document.getElementById("etiqueta2").innerHTML = 
			"Has vivido " + extraerAno + " años." + "\n" +
			"Has vivido " + extraerDia + " días." + "\n" +
			"Has vivido " + extraerHora + " horas." + "\n" +
			"Has vivido " + extraerMinuto + " minutos." + "\n" +
			"Has vivido " + extraerSegundo + " segundos." + "\n";
			
		}
		
function buscarTrimestre() {
	var fechaUser = document.getElementById("date16").value;
	//alert(fechaUser);
	var convertirFecha = new Date(fechaUser);
	//alert(convertirFecha);
	var trimestre = "";
	
switch (convertirFecha.getMonth()) {
    case 0:
    case 1:
    case 2:
        trimestre = "Primer Trimestre";
        break;
	case 3:
    case 4:
    case 5:
        trimestre = "Segundo Trimestre";
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
	default:
		trimestre = "Algo salió mal";
		}
	document.getElementById("datos16").innerHTML = trimestre;
}



	/* Los 12 signos zodiacales
		21.01. - 19.02. Acuario
		20.02. - 20.03. Piscis
		21.03. - 20.04. Aries
		21.04. - 20.05. Tauro
		21.05. - 21.06. Géminis
		22.06. - 22.07. Cáncer
		23.07. - 23.08. Leo
		24.08. - 23.09. Virgo
		24.09. - 23.10. Libra
		24.10. - 22.11. Escorpio
		23.11. - 21.12. Sagitario
		22.12. - 20.01. Capricornio */
	
	function signoZodiaco1() {
	var fecha = new Date(document.getElementById("date10").value);
		//alert(fecha + " " + typeof(fecha));
	var dia = fecha.getDate();
		//alert(dia + " " + typeof(dia));
	var mes = fecha.getMonth()+1;
		//alert(mes + " " + typeof(mes));
    var signo = "";
	var imagen = "";
			if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
			  var signo = "Acuario";
			  var imagen = "aquarius.jpg";
	 } else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
			  var signo = "Piscis";
			  var imagen = "pisces.jpg";
	 } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
			  var signo = "Aries";
			  var imagen = "aries.jpg";
	 } else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 05)) {
			  var signo = "Tauro";
			  var imagen = "taurus.jpg";
	 } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 21)) {
			  var signo = "Géminis";
			  var imagen = "gemini.jpg";
	 } else if ((mes == 6 && dia >= 22) || (mes == 7 && dia <= 22)) {
			  var signo = "Cáncer";
			  var imagen = "cancer.jpg";
	 } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
			  var signo = "Leo";
			  var imagen = "leo.jpg";
	 } else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 23)) {
			  var signo = "Virgo";
			  var imagen = "virgo.jpg";
	 } else if ((mes == 9 && dia >= 24) || (mes == 10 && dia <= 23)) {
			  var signo = "Libra";
			  var imagen = "libra.jpg";
	 } else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
			  var signo = "Escorpio";
			  var imagen = "scorpio.jpg";
	 } else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
			  var signo = "Sagitario";
			  var imagen = "sagittarius.jpg";
	 } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
			  var signo = "Capricornio";
			  var imagen = "capricorn.jpg";
	 } else {
			  var signo = "Algo salió mal";
		 }

    document.getElementById("etiqueta10").innerHTML = signo;
	document.getElementById("imagen").src = imagen;
	
} // Cierre de función
	
    //<img id="imagen" src="signo.jpg" width="76" height="76" alt="Acuario"/>

	/* Los 12 signos zodiacales
		21.01. - 19.02. Acuario
		20.02. - 20.03. Piscis
		21.03. - 20.04. Aries
		21.04. - 20.05. Tauro
		21.05. - 21.06. Géminis
		22.06. - 22.07. Cáncer
		23.07. - 23.08. Leo
		24.08. - 23.09. Virgo
		24.09. - 23.10. Libra
		24.10. - 22.11. Escorpio
		23.11. - 21.12. Sagitario
		22.12. - 20.01. Capricornio */
	
	function signoZodiaco2() {
	var fecha = new Date(document.getElementById("date10").value);
		//alert(fecha + " " + typeof(fecha));
	var dia = fecha.getDate();
		//alert(dia + " " + typeof(dia));
	var mes = fecha.getMonth()+1;
		//alert(mes + " " + typeof(mes));
	var signo = "";
    switch (mes) {
        case 1:
				if (dia > 21) {
					signo = "Acuario";

				} else {
					signo = "Capricornio";
				}
				break;
        case 2:
                if (dia > 19) {
                    signo = "Piscis";
                } else {
                    signo = "Acuario";
                }
                break;
        case 3:
                if (dia > 20) {
                    signo = "Aries";
                } else {
                    signo = "Piscis";
                }
                break;
        case 4:
                if (dia > 20) {
                    signo = "Tauro";
                } else {
                    signo = "Aries";
                }
                break;
        case 5:
                if (dia > 21) {
                    signo = "Géminis";
                } else {
                    signo = "Tauro";
                }
                break;
        case 6:
                if (dia > 20) {
                    signo = "Cáncer";
                } else {
                    signo = "Géminis";
                }
                break;
        case 7:
                if (dia > 22) {
                    signo = "Leo";
                } else {
                    signo = "Cáncer";
                }
                break;
        case 8:
                if (dia > 21) {
                    signo = "Virgo";
                } else {
                    signo = "Leo";
                }
                break;
        case 9:
                if (dia > 22) {
                    signo = "Libra";
                } else {
                    signo = "Virgo";
                }
                break;
        case 10:
                if (dia > 22) {
                    signo = "Escorpio";
                } else {
                    signo = "Libra";
                }
                break;
        case 11:
                if (dia > 21) {
                    signo = "Sagitario";
                } else {
                    signo = "Escorpio";
                }
                break;
        case 12:
                if (dia > 21) {
                    signo = "Capricornio";
                } else {
                    signo = "Sagitario";
                }
				break;
		default:
			    signo = "Algo ha fallado";
    }

    document.getElementById("etiqueta10").innerHTML = signo;
} // Cierre de función
	
   // <img id="imagen" src="signo.jpg" width="76" height="76" alt="Acuario"/>