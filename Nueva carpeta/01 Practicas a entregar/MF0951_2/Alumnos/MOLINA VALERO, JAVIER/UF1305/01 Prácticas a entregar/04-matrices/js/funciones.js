// JavaScript Document
//ejercicio 1
var GrupoVolkswagen=new Array();
function matriz(){
	var anadir=document.getElementById("text1").value;
	var comas=anadir.replace(/,/g," ");
	
	var matriz=comas.split(" ");
	
	document.getElementById("etiqueta1").innerHTML="Grupo Volkswagen: "+matriz;
	
}
var origen=["Seat","Audi","Skoda"];

//ejercicio2
function anadir(){
	var anadir=document.getElementById("text2").value;
	var comas=anadir.replace(/,/g," ");
	var matriz=comas.split(" ");
	
	var concatenar=origen.concat(matriz);
	document.getElementById("etiqueta2").innerHTML="Grupo Volkswagen: "+concatenar;
	console.log(concatenar+" "+concatenar.length);
}

//ejercicio3
function alprincipio(){
	var origenDos=["Seat","Audi","Skoda","Volkswagen","Bentley","Bugatti"];
	var anadir=document.getElementById("text3").value;
	var comas=anadir.replace(/,/g," ");
	var matriz=comas.split(" ");
	/*var res=matriz.substring(0,matriz.length);*/
	origenDos.unshift(matriz[0],matriz[1],matriz[2]);
	document.getElementById("etiqueta3").innerHTML="Grupo Volkswagen: "+origenDos;
	console.log(origenDos+" "+origenDos.length);
}

//ejercicio4
function medio(){
	var origenTres=["Ducati","Lamborghini","Porsche","Seat","Audi","Skoda","Volkswagen","Bentley","Bugatti"];
	var anadir=document.getElementById("text4").value;
	var comas=anadir.replace(/,/g," ");
	var matriz=comas.split(" ");
	origenTres.splice(4,0,matriz[0],matriz[1]);
	document.getElementById("etiqueta4").innerHTML="Grupo Volkswagen: "+origenTres;
	
	console.log(origenTres+" "+origenTres.length);
}

//ejercicio5
function ordenar(){
	var numeros=document.getElementById("text5").value;
	var comas=numeros.replace(/,/g," ");
	var matriz=comas.split(" ");
	var matrizDos=comas.split(" ");
	var matrizTres=comas.split(" ");
	var matrizCuatro=comas.split(" ");
	
	var ascendente=matrizDos.sort(function(a,b){return a-b;});
	var descendente=matrizTres.sort(function(a,b){return b-a;});
	var aleatorio=matrizCuatro.sort(function(a, b){return 0.5 - Math.random()});
	document.getElementById("etiqueta5").innerHTML="Matriz original: "+matriz+" Longitud: "+matriz.length+"<br>"+"Ascendente: "+ascendente+" Longitud: "+ascendente.length+"<br>"+"Descente: "+descendente+" Longitud: "+descendente.length+"<br>"+"Aleatorio: "+aleatorio+" Longitud: "+aleatorio.length;
	
	
	
}