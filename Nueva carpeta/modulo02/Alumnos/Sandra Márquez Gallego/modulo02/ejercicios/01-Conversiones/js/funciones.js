
function litros(){
var dato = parseInt(document.getElementById("numero").value);
var decilitros = dato*10;
var centilitros = dato*100;
var mililitros = dato*1000;
 document.getElementById("demo1").innerHTML= "<strong>" + dato + " litros son: </strong>" + "<br>" + decilitros + " decilitros. " + "<br>" + centilitros + " centilitros." + "<br>" + mililitros + " mililitros.";
}

function longitud(){
var dato = parseInt(document.getElementById("numero2").value);
var metro = dato*1000;
var centimetros = dato*100;
var milimetros = dato*10;
 document.getElementById("demo2").innerHTML= "<strong>" + dato + " kilometros son: </strong>" + "<br>" + metro + " metros. " + "<br>" + centimetros + " centimetros." + "<br>" + milimetros + " milimetros.";	
}

function tiempo(){
var dato = parseInt(document.getElementById("numero3").value);
var hora = dato*24;
var minutos = hora*60;
var segundos = minutos*60;
 document.getElementById("demo3").innerHTML= "<strong>" + dato + " días son: </strong>" + "<br>" + hora + " horas. " + "<br>" + minutos + " minutos." + "<br>" + segundos + " segundos.";	
}

function temperatura(){
var dato = parseInt(document.getElementById("numero4").value);
var fah = (dato*1.8 +32);
var kelvin = (dato+273.15);
document.getElementById("demo4").innerHTML= "<strong>" + dato + " grados centígrados son: </strong>" + "<br>" + fah + " grados fahrenheit. " + "<br>"  + kelvin + " grados kelvin.";	
}

function peso(){
var dato = parseInt(document.getElementById("numero5").value);
var kilogramos = dato*1000;
var gramos = kilogramos*1000;
var miligramos = gramos*1000;
document.getElementById("demo5").innerHTML= "<strong>" + dato + " toneladas son: </strong>" + "<br>" + kilogramos + " kilogramos. " + "<br>"  + gramos + " gramos." + "<br>"  + miligramos + " miligramos.";	
} 


function pesaje(){
var dato = parseInt(document.getElementById("numero6").value);
var piedras = dato/6.35;
var libras = dato*2.205;
var onzas = dato*35.274;
var kilates = dato*5000;
document.getElementById("demo6").innerHTML= "<strong>" + dato + " kilogramos son: </strong>" + "<br>" + piedras + " piedras. " + "<br>"  + libras + " libras." + "<br>"  + onzas + " onzas." + "<br>"  + kilates + " kilates.";	
}


function distancia(){
var dato = parseInt(document.getElementById("numero7").value);
var millas = dato/1.609;
var yardas = dato*1093.613;
var pies = dato*3280.84;
var pulgadas = dato*39370.079;
document.getElementById("demo7").innerHTML= "<strong>" + dato + " kilometros son: </strong>" + "<br>" + millas + " millas. " + "<br>"  + yardas + " yardas." + "<br>"  + pies + " pies." + "<br>"  + pulgadas + " pulgadas.";	
}


function moneda(){
var dato = parseInt(document.getElementById("numero8").value);
var dolares = dato*1.13;
var libras = dato*0.87;
var yen = dato*128.02;
var yuan = dato*7.84;
document.getElementById("demo8").innerHTML= "<strong>" + dato + " euros son: </strong>" + "<br>" + dolares + " dólares. " + "<br>"  + libras + " libras." + "<br>"  + yen + " yenes." + "<br>"  + yuan + " yuanes.";	
}

function velocidad(){
var dato = parseInt(document.getElementById("numero9").value);
var milla = dato/1.609;
var nudos = dato/1.852;
var segundo = dato/3.6;
var pies = dato/1.097;
document.getElementById("demo9").innerHTML= "<strong>" + dato + " kilometros por hora son: </strong>" + "<br>" + milla + " millas/h. " + "<br>"  + nudos + " nudos." + "<br>"  + segundo + " metros/segundos." + "<br>"  + pies + " pies/segundos.";	
}

function areas(){
var dato = parseInt(document.getElementById("numero10").value);
var hectarea = dato*100;
var acres = dato*247.105;
var millas = dato/2.59;
document.getElementById("demo10").innerHTML= "<strong>" + dato + " kilometros cuadrados son: </strong>" + "<br>" + hectarea + " hectáreas. " + "<br>"  + acres + " acres." + "<br>"  + millas + " millas." ;	
}
