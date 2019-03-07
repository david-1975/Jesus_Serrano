// JavaScript Document


function crearArray() {
	var valores = document.getElementById("formulario").value;
	var creamatriz = new Array (valores);
	// alert (creamatriz);
	
	document.getElementById("demo").innerHTML = "Grupo Volkswagen: " + creamatriz;
	document.getElementById("formulario1").value = creamatriz;	
	}
	
function sumarArray() {
	var valores1 = new Array (document.getElementById("formulario1").value);
	var sumartriz = valores1.push("Volkswagen", "Bentley", "Bugatti");
	//alert (valores1 + " " + typeof(valores1));
			
	document.getElementById("demo1").innerHTML = valores1;
	document.getElementById("formulario2").value = valores1;	
	}
	
function sumarAntes() {
	var valores2 = new Array (document.getElementById("formulario2").value);
	var sumartriz = valores2.unshift("Ducati", "Lamborghini", "Porsche");
	//alert (valores2 + " " + typeof(valores2));
	document.getElementById("demo2").innerHTML = valores2;
	document.getElementById("formulario3").value = valores2;
	}	
	
function sumarEntre() {
	var matriz = ["Ducati", "Lamborghini", "Porsche", "Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
	//var valores3 = new Array (document.getElementById("formulario3").value);
	//var entreTriz = matriz.splice(4, 0, "Scania", "MAN");
	//valores3.splice(4, 0, "Scania", "MAN");
	matriz.splice(4, 0, "Scania", "MAN");
	//alert (valores3 + " " + typeof(valores3));
	//document.getElementById("demo3").innerHTML = valores3;
	document.getElementById("demo3").innerHTML = matriz;
	
	}	
	
function altoBajo() {
	var arrayHoy = [1,9,2,7,3,6,4,5,0,8];
	
	var arrayMenor = [1,9,2,7,3,6,4,5,0,8];
	arrayMenor.sort();
	
	var arrayMayor = [1,9,2,7,3,6,4,5,0,8];
	arrayMayor.sort().reverse();
	
	var arrayHoy2 = [1,9,2,7,3,6,4,5,0,8];
	var ascendente = arrayHoy2.sort();
	
	var arrayHoy3 = [1,9,2,7,3,6,4,5,0,8];
	var descendente = arrayHoy3.sort().reverse();
	//var arrayAbajo = arrayHoy.reverse();
	//var valor = document.getElementById("formulario4").value;
	//var valores4 = new Array (valor);
	//valores4.sort();
	//valores4.reverse();
	//alert(valor);
	//var desorden = valores4.sort()
	document.getElementById("demo4").innerHTML = "Los valores dados son: " + arrayHoy;	
	document.getElementById("demo5").innerHTML = "El valor más bajo es: " + arrayMenor[0];
	document.getElementById("demo6").innerHTML = "El valor más alto es el: " + arrayMayor [0];
	document.getElementById("demo7").innerHTML = "Los valores ordenados de menor a mayor: " + ascendente;
	document.getElementById("demo8").innerHTML = "Los valores ordenados de mayor a menor: " + descendente;
	}	
	
function parImpar() {
	var arrayDoy = [1,9,2,7,3,6,4,5,0,8];
	var pares =	[2,4,6,8];
	var nones = [1,3,5,7,9];
			
	document.getElementById("demo9").innerHTML = "Los valores dados son: " + arrayDoy;	
	document.getElementById("demo10").innerHTML = "Los valores impares son : " + nones;
	document.getElementById("demo11").innerHTML = "Los valores pares son : " + pares;
	}	
	
function ordenar() {
	var arrayDado = [1,9,2,7,3,6,4,5,0,8];
	
	var arrayMenor = [1,9,2,7,3,6,4,5,0,8];
	arrayMenor.sort();
	
	var arrayMayor = [1,9,2,7,3,6,4,5,0,8];
	arrayMayor.sort().reverse();
	
	document.getElementById("demo12").innerHTML = "Los valores ordenados aleatoriamente son: " + arrayDado;	
	document.getElementById("demo13").innerHTML = "Los valores ordenados ascendentemente son: " + arrayMenor;
	document.getElementById("demo14").innerHTML = "Los valores ordenados descendentemente son: " + arrayMayor;
	}	
	
function juanTiene() {
	var juan = new Array (document.getElementById("formulario15").value);
	var nombre = juan.indexOf("Juan")
	var edad = juan.indexOf("50")
	var estado = juan.indexOf("casado")		
	document.getElementById("demo15").innerHTML = "Los datos asctuales son Nombre: " + nombre + <br> + "Edad: " + <br> + "Estado: " + edad;	
	}	
	