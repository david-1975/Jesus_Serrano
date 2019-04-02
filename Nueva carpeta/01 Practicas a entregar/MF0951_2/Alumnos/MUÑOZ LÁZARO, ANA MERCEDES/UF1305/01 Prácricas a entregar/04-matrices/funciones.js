// JavaScript Document

//Ejercicio 1 (Array)---------------
function creararray(){
	var coches = document.getElementById("text1").value;
	var cochesarray = coches.split(" ");
	
	document.getElementById("etiqueta1").innerHTML = "<i>" + "Grupo Wolkswagen: "  + cochesarray+ "<i>";
	}

//Ejercicio 2 (Array) ------------------------
 
function anadircoches(){
	var coches = document.getElementById("text2").value;
	var cochescoma= new Array(coches);
	var coche1 = prompt("Añade otros tres coches");
	var coche1coma = new Array(coche1);
	var suma = cochescoma.concat(coche1coma);
	var sumacoma= new Array(suma);
	var final= sumacoma.split(" ");
	document.getElementById("etiqueta2").innerHTML = "<i>" + "Grupo Wolkswagen: " + final + "<i>";
}
