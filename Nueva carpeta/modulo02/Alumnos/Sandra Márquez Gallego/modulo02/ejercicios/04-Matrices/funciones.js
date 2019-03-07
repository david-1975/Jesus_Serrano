function crearArray(){
var valores = document.getElementById("texto1").value;
var crearMatriz = new Array(valores);
document.getElementById("demo1").innerHTML= "Grupo Volkskwagen: " + crearMatriz;
document.getElementById("demo1").style.color= "red";	
	
}

function finalMatriz(){
var coches = ["Seat", "Audi", "Skoda"];
var valores = document.getElementById("texto2").value;
coches.push(valores);

document.getElementById("demo2").innerHTML= "Grupo Volkskwagen: " + "<ul>" + 
					"<li>" + coches[0] + "</li>" + 
					"<li>" + coches[1] + "</li>" + 
					"<li>" + coches[2] + "</li>" +
					"<li>" + coches[3] + "</li>" +
					"<li>" + coches[4] + "</li>" +
					"<li>" + coches[5] + "</li>" + 
					"</ul>" ;	
}


function comienzoMatriz(){
var coches = ["Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
var valores = document.getElementById("texto3").value;
coches.unshift(valores);
document.getElementById("demo3").innerHTML= "Grupo Volkskwagen: " + 
					"<table>" +
	"<tr>" +
      "<td>" + coches[0] + "</td>" +
	  "<td>" + coches[1] + "</td>" +
	  "<td>" + coches[2] + "</td>" +
    "</tr>"+
	"<tr>" +
      "<td>" + coches[3] + "</td>" +
	  "<td>" + coches[4] + "</td>" +
	  "<td>" + coches[5] + "</td>" +
    "</tr>"+
	"<tr>" +
      "<td>" + coches[6] + "</td>" +
	  "<td>" + coches[7] + "</td>" +
	  "<td>" + coches[8] + "</td>" +
    "</tr>"+
    
 "</table>";
	
}

function entreMedias(){
	var coches = ["Ducati", "Lamborghini", "Porsche","Seat", "Audi", "Skoda", "Volkswagen", "Bentley", "Bugatti"];
	var valores = document.getElementById("texto4").value;
	coches.splice(2,4);
	document.getElementById("demo4").innerHTML= "Grupo Volkskwagen: " + valores;
}

function numerico(){
	var numeros = [8,1,7,5,4,3,6,2,0,9];
	
	var array1 = [8,1,7,5,4,3,6,2,0,9];
	var ascendente=array1.sort();
	
	var array2 = [8,1,7,5,4,3,6,2,0,9];
	var descendente = array2.sort().reverse();
	
	var array3 = [8,1,7,5,4,3,6,2,0,9];
	var largo = array3.length;
	
	document.getElementById("demo5").innerHTML= "El valor más bajo es: " + ascendente(0) + "<br>" + 
												"El valor más alto es: " + descendente(0)+ "<br>" +
												"El total es: " + largo;
	 
} 

function aleatorio(){
	var numeros = [8,1,2,3,4,5,6,7,8,9];
	
	var array1 = [8,1,2,3,4,5,6,7,8,9];
	var impares = array1.sort();
	
	var array2 = [8,1,2,3,4,5,6,7,8,9];
	var pares = array2.sort().reverse();
	
	/*var array3 = [8,1,2,3,4,5,6,7,8,9];
	var aleatorio = array3.Math.random();*/
	
	document.getElementById("demo6").innerHTML= impares + pares; 

}
/*var primer= principal.sort();
	var ulti= principal.sort().reverse();
	document.getElementById("demo5").innerHTML= primer + " " + ulti  ;*/
	
	function objeto1(){
		var frase = "Juan tiene 50 años y está casado";
		var nombre = frase.String("Juan");
		alert(nombre);
		/*var edad = frase.splice (11,2);
		var estado = frase.splice (26,6);	
		document.getElementById("demo7").innerHTML= "persona {nombre: " + nombre+ ", " + "edad: " +  edad + ", " +  "estado: " + estado + "}"; */
	}