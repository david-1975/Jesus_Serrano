// JavaScript Document



//
function newgetFullYear() {
var d = new Date();
document.getElementById("demo2").innerHTML = "fecha inicial: " + d + 
	"<br>Devuelve el año de una fecha como un número de cuatro dígitos: " + 
	"<br>" + d.getFullYear();

}
// Metodo toString()
function newgetMonth() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getMonth();
}

function newgetDate() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getDate();
}

function newgetHours() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getHours();
}
//
function newgetMinutes() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getMinutes();
}

function newgetSeconds() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getSeconds();
}
//
function newgetMilliseconds() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getMilliseconds();
}
//
function newgetTime() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getTime();
}
//
function newgetDay() {
var d = new Date();
document.getElementById("demo2").innerHTML = d.getDay();
}

