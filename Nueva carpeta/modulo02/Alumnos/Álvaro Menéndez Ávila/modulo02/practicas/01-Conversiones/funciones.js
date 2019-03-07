//Document JavaScript

//Volumen

function litros () {
var dato = document.getElementById("number").value;


var decilitros = dato * 10;
var centilitros = dato * 100;
var mililitros = dato * 1000;

document.getElementById('volumen').innerHTML = dato + " litro(s) son " + "<br>" + decilitros + " decilitros"+ "<br>" + centilitros + " centilitros"+ "<br>" + mililitros + " mililitros";
}

//Longitud

function longitud () {
var dato = document.getElementById("number1").value;

var metros = dato * 1000;
var centimetros = metros * 100;
var milimetros = centimetros * 10;

document.getElementById('longitud').innerHTML = dato + " kilometro(s) son " + "<br>" + metros + " metros"+ "<br>" + centimetros + " centimetros"+ "<br>" + milimetros + " milimetros";
}

//Tiempo
function tiempo () {
var dato = document.getElementById("number2").value;

var horas = dato * 24;
var minutos = horas * 60;
var segundos = minutos * 60;

document.getElementById('tiempo').innerHTML = dato + " dia(s) son " + "<br>" + horas + " horas"+ "<br>" + minutos + " minutos" + "<br>" + segundos + " segundos";
}

//Temperatura
function temperatura () {
var dato = parseInt(document.getElementById("number3").value);

var fahrenheit = (dato * 1.8) + 32;
var kelvin = dato + 273.15;

document.getElementById('temperatura').innerHTML = dato + " grados centigrados son " + "<br>" + fahrenheit + " grados fahrenheit" + "<br>" + kelvin + " grados kelvin";
}

//Peso
function peso () {
var dato = document.getElementById("number4").value;

var kilogramos = dato * 1000;
var gramos = kilogramos * 1000;
var miligramos = gramos * 1000;

document.getElementById('peso').innerHTML = dato + " toneladas(s) son " + "<br>" + kilogramos + " kilogramos"+ "<br>" + gramos + " gramos" + "<br>" + miligramos + " miligramos";
}

//Pesaje
function pesaje() {
var dato = document.getElementById("number5").value;

var piedras = dato * (1000 * 0.1575);
var libras = dato * (1000 * 2.2046);
var onzas = dato * (1000 * 35.274);
var kilates = dato * (1000 * 5000);

var piedras1 = dato * 0.1575;
var libras1 = dato * 2.2046;
var onzas1 = dato * 35.274;
var kilates1 = dato * 5000;

document.getElementById('pesaje').innerHTML = dato + " tonelada(s) son " + "<br>" + piedras + " piedras" + "<br>" + libras + " libras" + "<br>" + onzas + " onzas" + "<br>" + kilates + " kilates" + "<br><br>" + 

dato +  " kilogramo(s) son " + "<br>" + piedras1 + " piedras" + "<br>" + libras1 + " libras" + "<br>" + onzas1 + " onzas" + "<br>" + kilates1 + " kilates";
}

//Distancia
function distancia() {
var dato = document.getElementById("number6").value;

var millas = dato * 0.621371;
var yardas = dato * 1093.61;
var pies = dato * 3280.84 ;
var pulgadas = dato * 39370.1;

document.getElementById('distancia').innerHTML = dato + " kilometros(s) son " + "<br>" + millas + " millas" + "<br>" + yardas + " yardas" + "<br>" + pies + " pies" + "<br>" + pulgadas + " pulgadas";

}

//Moneda
function moneda () {
var dato = document.getElementById("number7").value;

var dolares = dato * 1.13;
var libras = dato * 0.88;
var yen = dato * 128.27;
var yuanes = dato * 7.85 ;

document.getElementById('moneda').innerHTML = dato + " euro(s) son " + "<br>" + dolares + " dolares" + "<br>" + libras + " libras" + "<br>" + yen + " yen" + "<br>" + yuanes + " yuanes";
}

//Velocidad
function velocidad () {
var dato = document.getElementById("number8").value;


var millas = dato * 0.621371 ;
var nudos = dato *  0.539957;
var metrosSeg = dato *  0.277778;
var pieSeg = dato *  0.911344;

document.getElementById('velocidad').innerHTML = dato + " kilometro(s) por hora son " + "<br>" + millas + " millas por hora" + "<br>" + nudos + " nudos" + "<br>" + metrosSeg + " metros por segundo" + "<br>" + pieSeg + " pies por segundo";
}

//Areas
function areas () {
var dato = document.getElementById("number9").value;

var hectareas = dato * 100 ;
var acres = dato * 247.105;
var millas = dato * 0.386102;

document.getElementById('areas').innerHTML = dato + " kilometro(s) cuadrados son " + "<br>" + hectareas + " hectareas" + "<br>" + acres + " acres" + "<br>" + millas + " millas" + "<br>";
}
