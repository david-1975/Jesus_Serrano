//Funciones para trabajar con arrays

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function creamatriz(){
	var texto=(document.getElementById("text1").value);
	var matriz=texto.split(" ");
	document.getElementById("etiqueta1").innerHTML="<b>RESULTADO:</b><br>"+"Los coches que has escrito son: "+matriz;
	//var longitud=texto.length;
//	var posicion1=texto.indexOf(" ");
//	var posicion2=texto.lastIndexOf(" ");
//	alert(texto+" "+posicion1+" "+posicion2+" "+longitud) //3 5 7
//	matriz[0]=texto.slice(0,(posicion1+1));
//	matriz[1]=texto.slice((posicion1+1),posicion2);
//	matriz[2]=texto.slice((posicion2+2),longitud);
//	//alert(matriz.join(" \n* "));
//	
}

function creamatriz2(){
	var texto=(document.getElementById("text2").value);
	var matriz1=texto.split(" ");
	var matriz2=["Seat","Audi","Skoda"];
	alert(matriz1+"\n"+ matriz2);
}