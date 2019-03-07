// JavaScript Document



//<p><strong>Introducir la fecha de nacimiento y calcular la edad.
//mejorar
function  fun1() {
	var dato = document.getElementById("campo1").value;
	var fechasys = new Date();//leemos la fecha del sistema
	var anosys = fechasys.getFullYear();// extraemos el año del sistema
	var fechanac = new Date(dato);// convierte la cadena con la fecha en una fecha de sistema valida
	var anonac = fechanac.getFullYear();//extraemos el año de la fecha formato sistema
	var resto = 0;
	
	if (fechanac.getMonth() < fechasys.getMonth()){
		resto = 0;}
	else if (fechanac.getMonth() > fechasys.getMonth()){
		resto = 1;}
	else if(fechanac.getDate() < fechasys.getDate()){
		resto = 0;}
	else {resto = 1;}
	
	document.getElementById("idres1").innerHTML = "Tienes " + (anosys - anonac - resto) + " años";
}
//Introducir el año y mostrar el año anterior, el año introducido y el año posterior
function  fun2() {
	var dato = parseInt(document.getElementById("campo2").value) ;
 
 	document.getElementById("idres2").innerHTML = " El introducido es: " + dato +
	" el año antrior es: " + (dato - 1) + " el ño siguiente es: " + (dato + 1); 
}
//<p><strong>A partir de 3 campos de formulario, día, mes y año, mostar la fecha  en este formato 
//dd/mm/aaaa  
//mejorar
function  fun3() {
	var dato = parseInt(document.getElementById("campo3").value);
	var dato2 = parseInt(document.getElementById("campo3_2").value);
	var dato3 = parseInt(document.getElementById("campo3_3").value);
	var error = "                 ";

	if (dato < 1 || dato > 31 || dato2 < 1 || dato2 > 12 ){
		error = ", Fecha erronea";}

	document.getElementById("idres3").innerHTML = dato + "\/" + dato2 + "\/" + dato3 + error;
	}
//A partir de 3 campos de formulario, hora, minutos y segundos, mostar la hora en este formato hh:mm:ss
// mejorar
function  fun4() {
	var dato = parseInt(document.getElementById("campo4").value);
	var dato2 = parseInt(document.getElementById("campo4_2").value);
	var dato3 = parseInt(document.getElementById("campo4_3").value);
	var error = "                 ";
// validarHora()
	if (dato < 0 || dato > 23 || dato2 < 0 || dato2 > 59 || dato3 < 0 || dato3 > 59){
		error = ", Hora erronea";}

	document.getElementById("idres4").innerHTML = dato + ":" + dato2 + ":" + dato3 + error;
}
//<p><strong>Introducir una fecha y mostrarla en este formato: Hoy es martes, 11 de Noviembre de 2018
function  fun5() {
	var dato = document.getElementById("campo5").value;
	var fecha = new Date(dato);// convierte la cadena con la fecha en una fecha de sistema valida
	var ano = parseInt(fecha.getFullYear());//extraemos el año de la fecha formato sistema
	var mes = parseInt(fecha.getMonth());//extraemos el mes de la fecha formato sistema
	var dia = parseInt(fecha.getDate());//extraemos el día de la fecha formato sistema
	var diasem = parseInt(fecha.getDay());//extraemos el día de la semana de la fecha formato sistema
//validarfecha()
	var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
	var dias_semana = ["domingo", "lunes", "martes", "miércoles",
           "jueves", "viernes", "sábado"];
		   
	if (dia < 1 || dia > 31 || mes < 1 || mes > 12 ){
		document.getElementById("idres5").innerHTML = "Fecha erronea";
		document.getElementById("idres5").style.color = "red";
		}
	else {
		document.getElementById("idres5").innerHTML = "Hoy es " + dias_semana[diasem] + 
		", " + dia +  " de " + meses[mes] + " de " + ano;
		document.getElementById("idres5").style.color = "blue";
	}

}
//Mostrar la fecha y hora actual en este formato: &quot;Has iniciado sesión el día 13/11/2018 a las 15:30:25
function  fun6() {
	var fecha = new Date();// convierte la cadena con la fecha en una fecha de sistema valida
	var ano = parseInt(fecha.getFullYear());//extraemos el año de la fecha formato sistema
	var mes = parseInt(fecha.getMonth());//extraemos el mes de la fecha formato sistema
	var dia = parseInt(fecha.getDate());//extraemos el día de la fecha formato sistema
	var hora = parseInt(fecha.getHours());//extraemos el día de la fecha formato sistema
	var minuto = parseInt(fecha.getMinutes());//extraemos el día de la fecha formato sistema
	var segundo = parseInt(fecha.getSeconds());//extraemos el día de la fecha formato sistema

	document.getElementById("idres6").innerHTML = "Has iniciado sesión el día " + 
	dia + "\/" + mes +  "\/" + ano + " a las " + 
	hora + ":" + minuto + ":" + segundo; 
	document.getElementById("idres6").style.color = "blue";
}
//  Calcular los días que faltan para tu cumpleaños a partir de una fecha de nacimiento introducida.</strong>
function  fun7() {
	var diamillisegundos = 86400000; // 24 * 60 * 60 * 1000
	var dato = document.getElementById("campo7").value; // aaaa-mm-dd string
	var fecha = new Date(dato);// convierte la cadena con la fecha en una fecha de sistema valida
	var fechasys = new Date();//leemos la fecha del sistema
	var dias = (fechasys - fecha) / diamillisegundos;
	
	document.getElementById("idres7").innerHTML = "Faltan " + 
	parseInt(Math.trunc(dias)) + " días para tu cumpleaños";
}
//Calcular cuantos días, horas, minutos y segundos ha vivido una persona a partir de su fecha de nacimiento.
function  fun8() {
	var diamili = 86400000; // 24 * 60 * 60 * 1000
	var horamili = 3600000 ; // 60 * 60 * 1000
	var minutomili = 60000; // 60 * 1000
	var segundomili = 1000; // 1000  

	var dato = document.getElementById("campo8").value; // aaaa-mm-dd string
	var fecha = new Date(dato);// convierte la cadena con la fecha en una fecha de sistema valida
	var fechasys = new Date();//leemos la fecha del sistema

	var diasmil = ( (fechasys - fecha) / (diamili) ); // dias en milisegundos
//	var dias = parseInt(Math.trunc(diasmil));//dias enteros sin decimales
	var dias = parseInt(Math.trunc(diasmil));//dias enteros sin decimales
//alert(diasmil + " " + dias);
	var horasmil = ((diasmil * diamili) - (dias * diamili)) / horamili; //horas en milisegundos
	var horas = parseInt(Math.trunc(horasmil));//horas enteras sin decimales
//alert(horasmil + " = " + "(" + diasmil + "-" + "(" + dias + " * " + diamili + ")) \/ " + horamilisegundos);

	var minmil = ((horasmil * horamili) - (horas * horamili)) / minutomili; //minutos en milisegundos
	var minutos = parseInt(Math.trunc(minmil));//minutos enteras sin decimales
	
	var segmil = ((minmil * minutomili) - (minutos * minutomili)) / segundomili; //segundoa en milisegundos
	var segundos = parseInt(Math.trunc(segmil));//segundos enteras sin decimales

//    var diff_ =dias/(1000 * 60 * 60 * 24);
	
	document.getElementById("idres8").innerHTML = "Has vivido " + 
	dias + " días, " + horas + " horas, " + minutos + " minutos y " + segundos + " segundos.";
}
//Mostrar a que  trimestre pertenece una fecha introducida.
function  fun9() {
	var dato = document.getElementById("campo9").value; // aaaa-mm-dd string
	var fecha = new Date(dato);// convierte la cadena con la fecha en una fecha de sistema valida
	var mes = parseInt(fecha.getMonth()) + 1;//extraemos el mes de la fecha formato sistema
	var trimestre = "            ";
	
	if (mes >= 1 && mes <=3){
		trimestre = "primer trimestre";}
	else if (mes >= 4 && mes <=6) {
		trimestre = "segundo trimestre";}
	else if (mes >= 7 && mes <=9) {
		trimestre = "tercer trimestre";}
	else if (mes >= 10 && mes <=12) {
		trimestre = "cuarto trimestre";}
	else  {
		trimestre = " trimestre erroneo, fecha erronea";}
	
	document.getElementById("idres9").innerHTML = "La fecha: " + dato + " pertenece a: " + trimestre;
}
//>Mostrar el signo del zodiaco según la fecha de nacimiento introducida por el usuario.
function  fun10() {
	var dato = document.getElementById("campo10").value; // aaaa-mm-dd string
	var fecha = new Date(dato);// convierte la cadena con la fecha en una fecha de sistema valida
	var mes = parseInt(fecha.getMonth()) + 1;//extraemos el mes de la fecha formato sistema
	var dia = parseInt(fecha.getDate()) + 1;//extraemos el mes de la fecha formato sistema;
	var imagen = "error.jpg";
	var titulo = "  ";
	
switch(mes) {		
  case 1: 
    // Enero
    if (dia>=20)
      {imagen = "acuario01.jpg";
	  titulo = "Acuario";} 
    else
      {imagen = "capricornio12.jpg";
	  titulo = "Capricornio";}				
    break;
  case 2:
    // Febrero
    if (dia>=19)
      {imagen = "piscis02.jpg";
	  titulo = "Piscis";}
    else
      {imagen = "acuario01.jpg";
	  titulo = "Acuario";}
    break;
   case 3:
    // Marzo
    if (dia>=21)
      {imagen = "aries03.jpg";
	  titulo = "Aries";}
    else
      {imagen = "piscis02.jpg";
	  titulo = "Piscis";}
    break;
  case 4:
    // Febrero
    if (dia>=20)
      {imagen = "tauro04.jpg";
	  titulo = "Tauro";}
    else
      {imagen = "aries03.jpg";
	  titulo = "Aries";}
    break;
  case 5:
    // Febrero
    if (dia>=21)
      {imagen = "geminis05.jpg";
	  titulo = "Geminis";}
    else
      {imagen = "tauro04.jpg";
	  titulo = "Tauro";}
    break;
  case 6:
    // Febrero
    if (dia>=21)
      {imagen = "cancer06.jpg";
	  titulo = "Cancer";}
    else
      {imagen = "geminis05.jpg";
	  titulo = "Geminis";}
    break;
  case 7:
    // Febrero
    if (dia>=23)
      {imagen = "leo07.jpg";
	  titulo = "Leo";}
    else
      {imagen = "cancer06.jpg";
	  titulo = "Cancer";}
    break;
  case 8:
    // Febrero
    if (dia>=23)
      {imagen = "virgo08.jpg";
	  titulo = "Virgo";}
    else
      {imagen = "leo07.jpg";
	  titulo = "Leo";}
    break;
  case 9:
    // Febrero
    if (dia>=23)
      {imagen = "libra09.jpg";
	  titulo = "Libra";}
    else
      {imagen = "virgo08.jpg";
	  titulo = "Virgo";}
    break;
  case 10:
    // Febrero
    if (dia>=23)
      {imagen = "escorpio10.jpg";
	  titulo = "Escorpio";}
    else
      {imagen = "libra09.jpg";
	  titulo = "Libra";}
    break;
  case 11:
    // Febrero
    if (dia>=22)
      {imagen = "sagitario11.jpg";
	  titulo = "Sagitario";}
    else
      {imagen = "escorpio10.jpg";
	  titulo = "Escorpio";}
    break;
  case 12:
    // Febrero
    if (dia>=22)
      {imagen = "capricornio12.jpg";
	  titulo = "Capricornio";}
    else
       {imagen = "sagitario11.jpg";
	  titulo = "Sagitario";}
   break;
   default:
        {imagen = "error.jpg";
  		  titulo = "ERROR";}
   break;

}

document.getElementById("idres10").width = "50";
document.getElementById("idres10").height = "50";
document.getElementById("idres10").title = "\"" + imagen + "\"";
document.getElementById("idres10").src= "./img/" + imagen;
document.getElementById("idres10").innerHTML= "./img/" + imagen;

document.getElementById("idres10_02").style.color = "red";
document.getElementById("idres10_02").innerHTML= titulo;

//document.images[indice].nombre_propiedad
}


function validarfecha(){

	}	


