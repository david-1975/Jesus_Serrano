// JavaScript Document



function conv_edad(){
	var nacimiento = parseInt(document.getElementById("num_edad").value);
	
	var fecha = new Date();
	var anio = fecha.getFullYear();
	
	var edad = anio - nacimiento;
	
	document.getElementById("edad").innerHTML = "Tienes <strong>" + edad + "</strong> años";
	document.getElementById("edad").style.color ="green";
	
	
	}
	
	
	
	
	
function conv_year(){
	var year = parseInt(document.getElementById("num_year").value);
	var anterior = year -1;
	var posterior = year + 1;
	
	document.getElementById("year").innerHTML = "Has introducido el año <strong>" + year + "</strong>.<br> El año anterior al introducido fue <strong>" + anterior + "</strong> y el posterior <strong>" + posterior + "</strong>";
	
	
	
	}
	
	
	
function conv_ff(){
	var dia = parseInt(document.getElementById("num_dia").value);
	var mes = parseInt(document.getElementById("num_mes").value);
	var anio = parseInt(document.getElementById("num_anio").value);
	
	if ((dia<0) || (mes<0)) {
       
	   document.getElementById("ff").innerHTML = "Revisa tus datos, el día debe ser < 31, y el mes < 12.";
	}
	
	
	
	if (mes<10) {
		mes="0"+mes;
		document.getElementById("ff").innerHTML = "Has introducido: <strong>" + dia + "/" +mes+"/"+ anio + "</strong>";
		}
	
	if (dia<10) {
		dia="0"+dia;
		document.getElementById("ff").innerHTML = "Has introducido: <strong>" + dia + "/" +mes+"/"+ anio + "</strong>";
		}
		
	
	
	if ((dia>31) || (mes>12)) {
       
	   document.getElementById("ff").innerHTML = "Revisa tus datos, el día debe ser < 31, y el mes < 12.";
	}
	
	

	
	/*if ((mes>=10) && (mes<=12)) {
		mes = mes;
		document.getElementById("ff").innerHTML = "Has introducido: <strong>" + dia + "/" +mes+"/"+ año + "</strong>";
		}	*/
		
		
	else {
		
		document.getElementById("ff").innerHTML = "Has introducido: <strong>" + dia + "/" +mes+"/"+ anio + "</strong>";
		}	
		


	
	}
	
	
	
	
	
function conv_hora(){
	var hora = parseInt(document.getElementById("num_hora").value);
	var minuto = parseInt(document.getElementById("num_min").value);
	var segundo = parseInt(document.getElementById("num_sec").value);
	
	

    if (hora<10) {
       hora = "0"+hora;
	   document.getElementById("hora").innerHTML = "Has introducido las: <strong>" + hora + ":" +minuto+":"+ segundo+"</strong>";
	}
	
	
	if (minuto<10) {
	   minuto = "0"+ minuto;
	   document.getElementById("hora").innerHTML = "Has introducido las: <strong>" + hora + ":" +minuto+":"+ segundo+"</strong>";
	}
	
	
	if (segundo<10) {

	   segundo ="0"+segundo;
	   document.getElementById("hora").innerHTML = "Has introducido las: <strong>" + hora + ":" +minuto+":"+ segundo+"</strong>";
	}
	
	
	if ((hora>23) || (minuto>60) || (segundo>60)) {
       
	   document.getElementById("hora").innerHTML = "Revisa tus datos, la hora debe ser < 23, los minutos < 60 y los segundos < 60.";
	}
	
	
	else  {
	
		document.getElementById("hora").innerHTML = "Has introducido las: <strong>" + hora + ":" +minuto+":"+ segundo+"</strong>";
		}	
		
	
	}
	
	


	
		
function conv_fecha(){
	var fechaspain = document.getElementById("num_fecha").value;
	//alert(fechaspain); ya lo recoge en formato standard internacional ISO
	var isodate = new Date(fechaspain);
	

	
	var nombredia = isodate.getDay();
	var numdia = isodate.getDate();
	var nummes= isodate.getMonth();
	var nommes;
	var numyear= isodate.getFullYear();
	
   switch (nombredia) {
    case 0:
        nombredia = "Domingo";
        break;
    case 1:
        nombredia = "Lunes";
        break;
    case 2:
        nombredia = "Martes";
        break;
    case 3:
        nombredia = "Miércoles";
        break;
    case 4:
        nombredia = "Jueves";
        break;
    case 5:
        nombredia = "Viernes";
        break;
    case 6:
        nombredia = "Sábado";
}



   switch (nummes) {
    case 0:
        nommes = "Enero";
        break;
    case 1:
        nommes = "Febrero";
        break;
    case 2:
        nommes = "Marzo";
        break;
    case 3:
        nommes = "Abril";
        break;
    case 4:
        nommes = "Mayo";
        break;
    case 5:
        nommes = "Junio";
        break;
    case 6:
        nommes = "Julio";
		break;
    case 7:
        nommes = "Agosto";
		break;    
	case 8:
        nommes = "Septiembre";
		break;    
	case 9:
        nommes = "Octubre";
		break;		
		
	case 10:
        nommes = "Noviembre";
		break;		
		
	case 11:
        nommes = "Diciembre";

		
		
		
}

	
   document.getElementById("fecha").innerHTML = "Hoy es <strong>" + nombredia + ", " + numdia + " de " + nommes + " de " + numyear + "</strong>";
   
  
	}
	
	

function conv_actual(){
	
	var fecha = new Date();
	
	var dia = fecha.getDate();
	var anio = fecha.getFullYear();
	var mes = fecha.getMonth() +1;
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();
	var segundos = fecha.getSeconds();
	

	
	document.getElementById("actual").innerHTML = "Has iniciado sesión el día <strong>" + dia +"/" + mes + "/" + 
	anio + " a las " + hora+":"+minutos+":"+segundos+"</strong";
	
	}	



function conv_nacimiento(){
	
	
	var naci = document.getElementById("num_nacimiento").value;
	//alert(fechaspain); ya lo recoge en formato standard internacional ISO
	var fechanaci = new Date(naci);
	var mes = fechanaci.getMonth()+1;
	var dia = fechanaci.getDate();
	

	
	
	var actual = new Date();
	var mesactual = actual.getMonth()+1;
	var diaactual = actual.getDate();

	var yearactual =actual.getFullYear();
	var yearnext = yearactual+1;

	
	var naciactual = new Date(yearactual+"/"+mes+"/"+dia);
	var nacinext = new Date(yearnext+"/"+mes+"/"+dia);
	
	var actnew =new Date(yearactual+"/"+mesactual+"/"+diaactual);
	

    var dif=actnew - naciactual;
	var dif_dias = dif/(1000*60*60*24); 
	
	
	
	var difn=nacinext - actnew;
	var difn_dias = difn/(1000*60*60*24); 
	

    if (dif_dias<0) {
		
		document.getElementById("nacimiento").innerHTML = "Faltan <strong>" + (-dif_dias.toFixed(0)) + " días</strong> para tu cumpleaños.";
		
		}
	
	else if (dif_dias>0) {
		
		document.getElementById("nacimiento").innerHTML = "Tu cumple ya pasó este año. Faltan <strong>" + difn_dias.toFixed(0) + " días</strong> para tu próximo cumpleaños.";
		
		}


    else {
		
	document.getElementById("nacimiento").innerHTML = "<strong>Hoy es tu cumpleaños. ¡¡!Felicidades!!</strong>";
		}


	
	
	}	
	
	

function conv_vivir(){
	
	
	var naci = document.getElementById("num_vivir").value;
	//alert(fechaspain); ya lo recoge en formato standard internacional ISO
	var fechanaci = new Date(naci);
	var fechactual = new Date();
	
	tiempo = fechactual - fechanaci; //milisegundos
	anios = tiempo/(1000*60*60*24*365); 
	dia = tiempo/(1000*60*60*24);
	horas = tiempo/(1000*60*60);
	minutos = tiempo/(1000*60);
	segundos = tiempo *0.001;
	
	var part_entera_dias = Math.floor(dia); 
	var part_decimal_dias = dia -part_entera_dias;
	
	var horas_new=part_decimal_dias*24;
	var part_decimal_horas_new = horas_new -Math.floor(horas_new);
	
	var minutos_new = part_decimal_horas_new *60;
	var part_decimal_minutos_new = minutos_new -Math.floor(minutos_new);
	
	var segundos_new = part_decimal_minutos_new *60;
	

	if (fechanaci < fechactual) {
		
			document.getElementById("vivir").innerHTML = "Has vivido <br><strong>" + Math.floor(anios) + "</strong> años.<br><strong>" +Math.floor(dia) + "</strong> días.<br><strong>" + Math.floor(horas) + "</strong> horas.<br><strong>" + Math.floor(minutos) + "</strong> minutos.<br><strong>" + Math.floor(segundos) + "</strong> segundos." + "<br><br>" + "Es decir: " + "<br><strong>" + part_entera_dias + " días " + Math.floor(horas_new) + " horas " + Math.floor(minutos_new) + " minutos "+ Math.floor(segundos_new)+ "segundos </strong>";
		
		}
	
	else {
		document.getElementById("vivir").innerHTML = "<strong>Por favor, introduce una fecha de nacimiento correcta.</strong>"
		
		
		}

	

	
	}
	
	
	
	
	
	
function conv_trim(){	
	
	var fechaint= document.getElementById("num_trim").value;
	//alert(fechaspain); ya lo recoge en formato standard internacional ISO
	var fecha = new Date(fechaint);
	var mes= fecha.getMonth();
    var trim;


   switch (mes) {
    case 0: case 1: case 2:
        trim = "Pertenece al <strong>primer trimestre del año</strong>: Enero, Febrero o Marzo.";
        break;
    case 3: case 4: case 5:
        trim = "Pertenece al <strong>segundo trimestre del año</strong>: Abril, Mayo o Junio.";
        break;
    case 6: case 7: case 8:
        trim = "Pertenece al <strong>tercer trimestre del año</strong>: Julio, Agosto o Septiembre.";
        break;
    case 9: case 10: case 11:
        trim = "Pertenece al <strong>cuarto trimestre del año</strong>: Octubre, Noviembre o Diciembre.";
        break;		
}


	
	document.getElementById("trimestre").innerHTML = trim;
	
	}	
	
	
	
function conv_zodia(){	
	
	var fechaint= document.getElementById("num_zodia").value;
	//ya lo recoge en formato standard internacional ISO
	var fechazodia = new Date(fechaint);
	var dia = fechazodia.getDate();
	var mes= fechazodia.getMonth()+1;
	
	var naci = new Date("????"+"-"+mes+"-"+dia);
	
	
	if (dia < 10) {
		dia = "0"+dia;
		}
	
  
	if ( (naci>=new Date("????-03-21")) && (naci<=new Date("????-04-20"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Aries.</strong>";
		
	
		}
		
	else if ( (naci>=new Date("????-04-21")) && (naci<=new Date("????-05-20"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Tauro.</strong>";
		
	
		}
		
		
		else if ( (naci>=new Date("????-05-21")) && (naci<=new Date("????-06-21"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Géminis.</strong>";
		}
		
		else if ( (naci>=new Date("????-06-22")) && (naci<=new Date("????-07-22"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Cáncer.</strong>";
	
	
		}
		
		
	else if ( (naci>=new Date("????-07-23")) && (naci<=new Date("????-08-23"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Leo.</strong>";
	
	
		}
		
		
	else if ( (naci>=new Date("????-08-24")) && (naci<=new Date("????-09-23"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Virgo.</strong>";
	
	
		}
			
			
				
	else if ( (naci>=new Date("????-09-24")) && (naci<=new Date("????-10-22"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres Libra.</strong>";
	
	
		}
		
	
	else if ( (naci>=new Date("????-10-23")) && (naci<=new Date("????-11-22"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres Escorpio.</strong>";
	
	
		}	
		
	
	else if ( (naci>=new Date("????-11-23")) && (naci<=new Date("????-12-21"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres Sagitario.</strong>";
	
	
		}	
		
		
	/*else if ( (naci>=new Date("????-12-22")) && (naci<=new Date("2002-01-19"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres Capricornio.</strong>";
	
	
		}	*/
		
		
		
	else if ( (naci>=new Date("????-01-20")) && (naci<=new Date("????-02-19"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Acuario.</strong>";
	
	
		}	
		
		
	else if ( (naci>=new Date("????-02-20")) && (naci<=new Date("????-03-20"))  ) {
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/0" + mes +"<br><br>" +"<strong>Eres Piscis.</strong>";
	
	
		}	
		
		
		else {document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres Capricornio.</strong>";
			
			
			}
					
	
	}	
	
	

function conv_zodia2(){	
	
	var fechaint= document.getElementById("num_zodia").value;
	//ya lo recoge en formato standard internacional ISO
	var fechazodia = new Date(fechaint);
	var dia = fechazodia.getDate();
	var mes= fechazodia.getMonth()+1;
	
	var naci = new Date("????"+"-"+mes+"-"+dia);
	var signo;
	var imagen;
	
	if ( (mes==3 && dia>21)||(mes==4 && dia<=20)) {
		signo="Aries";
		imagen ="aries.jpg";
		}
	
  else if ( (mes==4 && dia>=21)||(mes==5 && dia<=20)) {
		signo="Tauro";
		imagen ="tauro.jpg";
		}
	
	
  else if ( (mes==5 && dia>=21)||(mes==6 && dia<=21)) {
		signo="Géminis";
		imagen ="geminis.jpg";
		}
			
  else if ( (mes==6 && dia>=22)||(mes==7 && dia<=22)) {
		signo="Cáncer";
		imagen ="cancer.jpg";
		}
			

  else if ( (mes==7 && dia>=23)||(mes==8 && dia<=23)) {
		signo="Leo";
		imagen ="leo.jpg";
		}
			
  else if ( (mes==8 && dia>=24)||(mes==9 && dia<=23)) {
		signo="Virgo";
		imagen ="virgo.jpg";
		}
			
			
  else if ( (mes==9 && dia>=24)||(mes==10 && dia<=22)) {
		signo="Libra";
		imagen ="libra.jpg";
		}
			
  else if ( (mes==10 && dia>=23)||(mes==11 && dia<=22)) {
		signo="Escorpio";
		imagen ="escorpio.jpg";
		}
	
			
  else if ( (mes==11 && dia>=23)||(mes==12 && dia<=21)) {
		signo="Sagitario";
		imagen ="sagitario.jpg";
		}
	
		
 else if ( (mes==12 && dia>=22)||(mes==01 && dia<=19)) {
		signo="Capricornio";
		imagen ="capricornio.jpg";
		}
	
			
			
  else if ( (mes==01 && dia>=20)||(mes==02 && dia<=19)) {
		signo="Acuario";
		imagen ="acuario.jpg";
		}
		
		
 else if ( (mes==02 && dia>=20)||(mes==03 && dia<=20)) {
		signo="Piscis";
		imagen ="piscis.jpg";
		}
		
					
					
		//document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres "+ signo +" </strong>" + "<br>" + "<img src='./img/"+imagen+"' width=100px height=100px>";
		
		document.getElementById("zodiaco").innerHTML = "Naciste un " + dia + "/" + mes +"<br><br>" +"<strong>Eres "+ signo +" </strong>" + "<br>" + "<img id ='pru' src='' width=100px height=100px>";
		
		
		document.getElementById("pru").src = "./img/"+imagen;			
					
	
	}	
