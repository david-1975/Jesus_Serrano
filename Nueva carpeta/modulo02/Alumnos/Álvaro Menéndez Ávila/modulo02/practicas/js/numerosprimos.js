// JavaScript Document

function numerosPrimos() {
var bucle;
var text = [];
var compuestos = [];
var primos = [];

for(bucle = 0; bucle<=100; bucle++){
	text.push(bucle);
	if((text[bucle] * 2) && 
	(text[bucle] !== 2) && 
	(text[bucle] * 3) && 
	(text[bucle] !== 3) &&
	(text[bucle] * 5) &&
	(text[bucle] !== 5) &&
	(text[bucle] * 7) &&
	(text[bucle] !== 7) &&
	(text[bucle] * 11) &&
	(text[bucle] !== 11)){
		compuestos.push(text[bucle]);
		} else {
			primos.push(text[bucle]);
		}	
	}
	
var dato = parseInt(document.getElementById("number").value);
if (dato === primos){
	document.getElementById("resultado").innerHTML = "es primo";
	} else {
		document.getElementById("resultado").innerHTML = "no es primo";
	}

/*var x;for (x = 0; x < primos.length; x++){
document.getElementById("resultado").innerHTML += primos[x] + " es un número primo.<br>";
}
var y;
for (y = 0; y < compuestos.length; y++){
document.getElementById("resultado2").innerHTML += compuestos[y] +  " es un número compuesto.<br>" ;
}*/
}