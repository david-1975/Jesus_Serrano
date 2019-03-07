 // JavaScript Document
function ejercicio1() {
	
	}
function ejercicio2() {
  var f = document.getElementById("fecha").value;
  //alert (f + " " + typeof(f));
  var f2 = new Date(f);
 // alert (f2  + " " + typeof(f2));
  var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
//var f=new Date();
document.getElementById("fecha2").innerHTML=(diasSemana[f2.getDay()] + ", " + f2.getDate() + " de " + meses[f2.getMonth()] + " de " + f2.getFullYear());
}
function ejercicio3() {
var valorfrutas = document.getElementById("frutas1").value;
//alert (valorfrutas + " " + typeof(valorfrutas));
var primeracoma = valorfrutas.indexOf(",");
//alert (primeracoma + " " + typeof(primeracoma));
var ultimacoma = valorfrutas.lastIndexOf(",");
//alert (ultimacoma + " " + typeof(ultimacoma));

var inputfruta1= valorfrutas.substring(0, primeracoma);
var inputfruta2= valorfrutas.substring(primeracoma + 1, ultimacoma - 1);
var inputfruta3= valorfrutas.substring(ultimacoma +1);

document.getElementById("fruta1").innerHTML= 
   "<ul>" + 
    "<li>" + inputfruta1 + "</li>" +
	"<li>" + inputfruta2 + "</li>" +
	"<li>" + inputfruta3 + "</li>" +
   "</ul>";
}
/*function ejercicio4() {
var fecha = new Date();
alert("Hora: "+fecha.getHours()+"\nMinuto: "+fecha.getMinutes()+"\nSegundo: "+fecha.getSeconds()+"\nMilisegundo: "+fecha.getMilliseconds());
document.getElementById("fechayhora").innerHTML = fecha;
}*/
function ejercicio5() {
	var dato = parseFloat(document.getElementById("number2").value);
	var datodescuento = dato * 20/100;
	var datoneto = dato - datodescuento;
	var datoiva = datodescuento * 21/100;
	var precioneto = datoneto + datoiva;
	
	document.getElementById("total").innerHTML= "Subtotal: " + dato + "€" + "<br>" + "Descuento 20%: " + datodescuento + "€" + 
	"<br>" + "IVA: " + datoiva+ "€" + "<br>" + "Total: "  +  precioneto.toFixed(2) + "€";
	
	}
/*function ejercicio6 () {
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
      {imagen = "/img/aquarius.jpg/";
	  titulo = "Acuario";} 
    else
      {imagen = "/img/capricorn.jpg";
	  titulo = "Capricornio";}				
    break;
  case 2:
    // Febrero
    if (dia>=19)
      {imagen = "/img/pisces.jpg";
	  titulo = "Piscis";}
    else
      {imagen = "/img/aquarius.jpg";
	  titulo = "Acuario";}
    break;
   case 3:
    // Marzo
    if (dia>=21)
      {imagen = "/img/aries.jpg";
	  titulo = "Aries";}
    else
      {imagen = "/img/pisces.jpg";
	  titulo = "Piscis";}
    break;
  case 4:
    // Febrero
    if (dia>=20)
      {imagen = "/img/taurus.jpg";
	  titulo = "Tauro";}
    else
      {imagen = "/img/aries.jpg";
	  titulo = "Aries";}
    break;
  case 5:
    // Febrero
    if (dia>=21)
      {imagen = "/img/gemini.jpg";
	  titulo = "Geminis";}
    else
      {imagen = "/img/taurus.jpg";
	  titulo = "Tauro";}
    break;
  case 6:
    // Febrero
    if (dia>=21)
      {imagen = "/img/cancer.jpg";
	  titulo = "Cancer";}
    else
      {imagen = "/img/gemini.jp";
	  titulo = "Geminis";}
    break;
  case 7:
    // Febrero
    if (dia>=23)
      {imagen = "/img/leo.jpg";
	  titulo = "Leo";}
    else
      {imagen = "/img/cancer.jpg";
	  titulo = "Cancer";}
    break;
  case 8:
    // Febrero
    if (dia>=23)
      {imagen = "/img/virgo.jpg";
	  titulo = "Virgo";}
    else
      {imagen = "/img/leo.jpg";
	  titulo = "Leo";}
    break;
  case 9:
    // Febrero
    if (dia>=23)
      {imagen = "/img/libra.jpg";
	  titulo = "Libra";}
    else
      {imagen = "/img/virgo.jpg";
	  titulo = "Virgo";}
    break;
  case 10:
    // Febrero
    if (dia>=23)
      {imagen = "/img/scorpio.jpg";
	  titulo = "Escorpio";}
    else
      {imagen = "/img/libra.jpg";
	  titulo = "Libra";}
    break;
  case 11:
    // Febrero
    if (dia>=22)
      {imagen = "/img/sagittarius.jpg";
	  titulo = "Sagitario";}
    else
      {imagen = "/img/scorpio.jp";
	  titulo = "Escorpio";}
    break;
  case 12:
    // Febrero
    if (dia>=22)
      {imagen = "/img/capricorn.jpg";
	  titulo = "Capricornio";}
    else
       {imagen = "/img/sagittarius.jpg";
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
}

*/
function ejercicio7() {
	  var multiplicando=parseInt(document.getElementbyId("number3").value);
	  alert (multiplicando +  " " + typeof(multiplicando));
	 /* var por0  = multiplicando * 0;	
	  var por1  = multiplicando * 1;	
	  var por2  = multiplicando * 2;	
	  var por3  = multiplicando * 3;	
	  var por4  = multiplicando * 4;	
	  var por5  = multiplicando * 5;	
	  var por6  = multiplicando * 6;	
	  var por7  = multiplicando * 7;	
	  var por8  = multiplicando * 8;	
	  var por9  = multiplicando * 9;	
	 
	  
	  document.getElementById("tabla").innerHTML =
	  multiplicando + "X 0 = " + por0 + "<br>" +
	  multiplicando + "X 1 = " + por1 + "<br>" +
	  multiplicando + "X 2 = " + por2 + "<br>" +
	  multiplicando + "X 3 = " + por3 + "<br>" +
	  multiplicando + "X 4 = " + por4 + "<br>" +
	  multiplicando + "X 5 = " + por5 + "<br>" +
	  multiplicando + "X 6 = " + por6 + "<br>" +
	  multiplicando + "X 7 = " + por7 + "<br>" +
	  multiplicando + "X 8 = " + por8 + "<br>" +
	  multiplicando + "X 9 = " +por9 + "<br>" ;
	 */
	
	}
	
	
	



function ejercicio10() {
	var cookies = "Según el apartado 2 del artículo 22 de la LSSI le informamos que utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publiciad relacionada con sus prefernacias mediante el análisis de sus hábitos de navegación. Al continuar con la navegación entendemos que se acepta nuestra  Política de Cookies."
	alert(cookies);
	
	}