

function pulgadas(){
var dato = parseInt(document.getElementById("numero").value);
var ctm = dato*2.54;
document.getElementById("demo1").innerHTML= "<strong>" + dato + " pulgadas son: </strong>" + "<br>" + ctm + " centímetros.";
}


function sueldo(){
var dato = parseInt(document.getElementById("numero2").value);
var social = (dato*6.4)/100;
var irpf= (dato*15)/100;
var resta = irpf + social;
var neto= dato - resta;
document.getElementById("demo2").innerHTML= "<strong>" + "Tu sueldo neto es: " + neto + " € al año.";
}

function precio(){
var pvp = parseInt(document.getElementById("numero3").value);
var descuento = parseInt(document.getElementById("numero4").value);
var iva = parseInt(document.getElementById("numero5").value);
var resta = (pvp*descuento)/100;
var suma = (pvp*iva)/100;
var total = resta + suma;
document.getElementById("demo3").innerHTML= "<strong>" + "El precio final es de : " + total + " €.";
}

function bytes(){
var dato = parseInt(document.getElementById("numero6").value);
var mega = dato*1024;
var kilo = mega*1024;
var byte= kilo*1024;
var bit = bytes*1024;
document.getElementById("demo4").innerHTML= "<strong>" + dato + " gigabytes son: </strong>" + "<br>" + mega + " megabytes." + "<br>" + kilo + " kilobytes." + "<br>" + byte + " bytes." + "<br>" + bit + " bits.";
}


function dias(){
var dato = parseInt(document.getElementById("numero7").value);
var meses = dato*12;
var semana = dato*52.142857142857146;
var dia= dato*365;
document.getElementById("demo5").innerHTML= "<strong>" + dato + " años son: </strong>" + "<br>" + meses + "meses." + "<br>" + semana + " semanas." + "<br>" + dia + " días.";
}


function velocidad(){
var dato = parseInt(document.getElementById("numero8").value);
var metros = (dato*1000/3600);
document.getElementById("demo6").innerHTML= "<strong> " + dato + " km/h serían:  </strong>" + "<br>"  + metros + " metros/segundo.";
}


function coste(){
var dato = parseInt(document.getElementById("numero9").value);
var costo = (dato*0.5);
document.getElementById("demo7").innerHTML= "<strong> " + dato + " km serían:  </strong>" + "<br>"  + costo + " €/km.";
}


function espacio(){
var dato = parseInt(document.getElementById("numero10").value);
var giga = dato*1024;
var almacen = 4.7/giga;
document.getElementById("demo8").innerHTML= "<strong> " + dato + " megabytes puede almacenar " + almacen + " en un DVD de 4,7 gigabytes.</strong>";
}


function distancia(){
var km = parseInt(document.getElementById("numero11").value);
var tiempo = parseInt(document.getElementById("numero12").value);
 var total = (km/tiempo);
document.getElementById("demo9").innerHTML= "<strong> Se necesita " +total+ "</strong>";
}


function descarga(){
var dato = parseInt(document.getElementById("numero13").value);
document.getElementById("demo10").innerHTML= "<strong> " + dato + " megabytes puede almacenar " + almacen + "e un DVD de 4,7 gigabytes.</strong>";
}