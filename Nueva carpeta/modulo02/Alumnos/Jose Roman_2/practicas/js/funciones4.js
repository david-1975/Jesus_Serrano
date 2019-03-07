// JavaScript Document

// Método new Date()
function nuevaFecha(){
var fecha = new Date();
alert("La fecha es :"+"\n"+fecha);
}

// Método getFullYear(){
function cogerAño(){
var fecha = new Date();
var año = fecha.getFullYear();

alert("El año actual es : "+"\n"+año);
}

// Método getMonth()
function cogerMes(){
var fecha = new Date();
var mes = fecha.getMonth();
//Note:</strong> 0=January, 1=February etc.
alert("El mes es :"+"\n"+mes+"\n"+"Nota: 0=January, 1=February etc");
}
// Método getDate()
function cogerFecha(){
var fecha = new Date();
var dia = fecha.getDate();

alert("El dia del mes es :"+"\n"+dia+"\n"+"Nota: Del 1 al 31");
}
// Método getHours()
function cogerHoras(){
var fecha = new Date();
var hora = fecha.getHours();

alert("La hora es  :"+"\n"+hora+"\n"+"Nota: Del 0 al 23");
}
// Método getMinutes()
function cogerMinutos(){
var fecha = new Date();
var hora = fecha.getMinutes();

alert("Los minutos son :"+"\n"+hora+"\n"+"Nota: Del 0 al 59");
}
// Método getSeconds()
function cogerSegundos(){
var fecha = new Date();
var hora = fecha.getSeconds();

alert("Los segundos son :"+"\n"+hora+"\n"+"Nota: Del 0 al 59");
}
// Método getMillisecond()
function cogerMilisegundos(){
var fecha = new Date();
var hora = fecha.getMilliseconds();

alert("Los milisegundos son :"+"\n"+hora+"\n"+"Nota: Del 0 al 999");
}
// Método getSeconds()
function cogerTiempo(){
var fecha = new Date();
var hora = fecha.getTime();

alert("Los milisegundos son :"+"\n"+hora+"\n"+"Nota: Desde 1 enero 1970");
}
// Método getDay()
function cogerDia(){
var fecha = new Date();
var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
var hora = weekday[fecha.getDay()];

alert("El dia es  :"+"\n"+hora+"\n"+"Nota: Del 0 al 6");
}
// Método Date.Now()
function cogerAhora(){

var hora = Date.now();

alert(hora+"\n"+"Nota: Desde 1 enero 1970");
}