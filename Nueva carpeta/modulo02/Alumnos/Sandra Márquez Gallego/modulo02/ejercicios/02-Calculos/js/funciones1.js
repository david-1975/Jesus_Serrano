

function pulgadas(){
var dato = parseInt(document.getElementById("numero").value);
var ctm = dato*2.54;
document.getElementById("demo1").innerHTML= "<strong>" + dato + " pulgadas son: </strong>" + "<br>" + ctm + " centímetros.";
}

/*function numero(){
var dato = parseInt(document.getElementById("numero2").value);
if (dato==)
}*/

function precio(){
var pvp = prompt ("Introduce un precio");
var descuento = prompt ("Introduce un descuento");
var iva = prompt ("Introduce un iva");
var resta = descuento/100;
var suma = iva/100;
var total=(pvp-resta)+suma;
alert("El precio final es: " + total);
}

function bytes(){
var dato = parseInt(document.getElementById("numero4").value);
var mega = dato*1024;
var kilo = mega*1024;
var bytes= kilo*1024;
var bit = bytes*1024;
document.getElementById("demo4").innerHTML= "<strong>" + dato + " gigabytes son: </strong>" + "<br>" + mega + " megabytes." + "<br>" + kilo + " kilobytes." + "<br>" + bytes + " bytes." + "<br>" + bit + " bits.";
}