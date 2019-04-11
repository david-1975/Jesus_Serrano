// JavaScript Document
function imagen(a){	
	var foto = 	"img" + a;
	var tit = "titulo" + a;
							//Damos el titulo de cada imagen en la caja modelo
	document.getElementById("titulo").innerHTML = document.getElementById(tit).innerHTML;	
							
					//Damos la direccion la foto a la caja modelo
	document.getElementById("fotoaqui").src = document.getElementById(foto).src;
	//http://127.0.0.1:62788/content/HIfzCvxefkQBFSvWAAAK/pK3YRqE/2M1U4Zv/YQ9FmFk/GDQ7vBT/3zOhCJt/nTlxVYz/nBPGlVQ/233Ou3T/tobusXN/eU1LH6d/hAM3Gwg/img/house1.jpg	
	
			//Dado que con esta dirección no funciona lo hacemos extrayendo la direccion completa
	var resultado = document.getElementById("fotoaqui").outerHTML; //Extraigo la direccion de la imagen
	//<img id="fotoaqui"src="http://127.0.0.1:62788/content/HIfzCvxefkQBFSvWAAAK/pK3YRqE/2M1U4Zv/YQ9FmFk/GDQ7vBT/3zOhCJt/nTlxVYz/nBPGlVQ/233Ou3T/tobusXN/eU1LH6d/hAM3Gwg/img/house1.jpg" alt="House" style="width:100%" data_liveedit_tagid="00000000125B8EC0">
	
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
