function pulgadas(){

  var dato = parseInt( document.getElementById("numero").value);
  var pulga= dato * 2.54;

    document.getElementById("pulgadas").innerHTML=
    dato + " " + " Estos centímetros son : "+"<br>" +
     pulga + " pulgadas" + ".";   
}
function conversion(){
    var dato = parseInt(document.getElementById("numero1").value)
    var resto = dato %=0;
    if(dato >= 0+1){
        document.getElementById("conversion").innerHTML=
        dato + " Es un número impar. ";
    }else{
        document.getElementById("conversion").innerHTML=
        dato + " Es un número par. "
    }


}

function precioFinal(){
var dato=parseInt( document.getElementById("numero2").value);
var precio = dato;
var descuento =  dato * 0.2;
var impuesto = dato * 0.21;
var total =dato - descuento + impuesto;
document.getElementById("precioFinal").innerHTML=
dato + " euros : " + " precio inicial " + "<br>" +
descuento + " euros : " +  " descuento" + "<br>" + 
impuesto + " euros : " + " impuesto" + "<br>" +
total + " euros : " + "total" +"." + "<br>" ;

}
function gigabytes (){
var dato = parseInt(document.getElementById("numero3").value);
var megabytes = dato * 1024;
var kilobytes= megabytes * 1024;
var bytes = kilobytes *1024;
var bit = bytes * 8;

document.getElementById("gigas").innerHTML=
dato + " Gigabytes son : " + "<br>" +
megabytes + " megabytes"+ "."  + "<br>" +
kilobytes + " kilobytes"+ "."  + "<br>" +
bytes + " bytes"+ "."  + "<br>" +
bit+ " bit" + "." 

}

function dias(){
var dato = parseInt(document.getElementById("numero4").value);
var dias = dato * 365;
var semanas= dato *  52.142857142857146 ; 
var meses = dato * 12;


document.getElementById("diasemana").innerHTML=
dato + " Año son :" + "<br>" +
dias + " dias" +  "."  + "<br>" +
semanas + " semanas" + "."  + "<br>" +
meses + " meses" +  "." ;

}