// JavaScript Document
function imagen(a){	
	var foto = 	"img" + a;
	var tit = "titulo" + a;
							//Damos el titulo de cada imagen en laa caja modelo
	document.getElementById("titulo").innerHTML = document.getElementById(tit).innerHTML;
	
							//Damos la direccion la foto a la caja modelo
	document.getElementById("fotoaqui").src = document.getElementById(foto).src;
			//Dado que con esta dirección no funciona lo hacemos extrayendo la direccion completa
	var resultado = document.getElementById("fotoaqui").outerHTML; //Extraigo la direccion de la imagen
	
	var indice1 = resultado.lastIndexOf("img/");	//recorto exactamente el nombre de la imagen
	var indice2 = resultado.lastIndexOf(".jpg");
	var busqueda = resultado.substring(indice1,indice2+4); // sacamos img/nombredelaimagen.jpg
	
	document.getElementById("fotoaqui").src = busqueda;  //damos en fotoaqui el src de la imagen
	
	document.getElementById("imagen1").style.display = "block";
	document.getElementById("todo").style.display = "block";	
}

function cerrar(){
	document.getElementById("todo").style.display="none";
	document.getElementById("imagen1").style.display="none";
}
