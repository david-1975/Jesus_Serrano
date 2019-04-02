//Funciones para trabajar con arrays

function arraycolores(){
	var color1 =prompt("introduce un color:");
	var color2 =prompt("introduce otro color:");
	var color3 =prompt("introduce un color más:");
	var colores= new Array(color1,color2,color3);
	var variable1= colores[0];
	var variable2= colores[1];
	var variable3= colores[2];
	alert("Los colores que has tecleado son: "+colores+"\nEl primer color es: "+variable1+"\nEl segundo color es: "+variable2+"\nY el tercer color es: "+variable3+"\nLa variable colores es de tipo: "+ typeof(colores)+"\ny su longitud: "+ colores.length);
	
}


function inserta(){
	var fruta1 =prompt("introduce una fruta:");
	var fruta2 =prompt("introduce otra fruta:");
	var frutas= new Array(fruta1,fruta2);
	var añadir=confirm("¿Quieres añadir otra fruta? :");
	if (añadir==true) {
		var fruta3=prompt("Escribe la fruta que quieres añadir:");
		var cuantas=frutas.push(fruta3);
	}
	alert("Estas son las frutas que has introducido: \n* "+ frutas.join(" \n* ")+"\nTenemos "+cuantas+" frutas");
}

function inserta2(){
	var fruta1 =prompt("introduce una fruta:");
	var fruta2 =prompt("introduce otra fruta:");
	var frutas= new Array(fruta1,fruta2);
	var añadir=confirm("¿Quieres añadir otra fruta? :");
	if (añadir==true) {
		var fruta3=prompt("Escribe la fruta que quieres añadir:");
		var cuantas=frutas.unshift(fruta3);
	}
	alert("Estas son las frutas que has introducido: "+ frutas+"\nTenemos "+cuantas+" frutas");
}

function inserta3(){
	var fruta1 ="Melón";
	var fruta2 ="Sandía";
	var fruta3= "Fresa";
	var fruta4="Coco";
	var fruta5="Plátano";
	var frutas= new Array(fruta1,fruta2,fruta3,fruta4,fruta5);
	alert("Tenemos estas frutas :\n* " + frutas.join(" \n* ")+"\nVamos a añadir Pera y Manzana después de Sandia");
	frutas.splice(2, 0, "Pera", "Manzana");
	//var posicion=confirm("Desde¿Quieres eliminar la última fruta? :"+fruta5);
//	if (respuesta==true) {
//		var cual=frutas.pop(frutas.length-1);
//	}
	//	alert("Estas son las frutas que quedan: "+ frutas+"\nEliminamos "+cual);
	alert("Estas son las frutas que has introducido: \n* "+ frutas.join(" \n* "));
	alert("Ahora vamos a eliminar Fresa y coco\n* "+ frutas.join(" \n* "));
	frutas.splice(4, 2);
	alert("Este es el resultado :\n* "+ frutas.join(" \n* "));
	
}
function elimina(){
	var fruta1 ="Melón";
	var fruta2 ="Sandía";
	var fruta3= "Fresa";
	var fruta4="Coco";
	var fruta5="Plátano";
	var frutas= new Array(fruta1,fruta2,fruta3,fruta4,fruta5);
	alert("Tenemos estas frutas :" + frutas);
	var respuesta=confirm("¿Quieres eliminar la última fruta? :"+fruta5);
	if (respuesta==true) {
		var cual=frutas.pop(frutas.length-1);
	}
	alert("Estas son las frutas que quedan: "+ frutas+"\nEliminamos "+cual);
}

function elimina2(){
	var fruta1 ="Melón";
	var fruta2 ="Sandía";
	var fruta3= "Fresa";
	var fruta4="Coco";
	var fruta5="Plátano";
	var frutas= new Array(fruta1,fruta2,fruta3,fruta4,fruta5);
	alert("Tenemos estas frutas :\n* " + frutas.join(" \n* "));
	var respuesta=confirm("¿Quieres eliminar la primera fruta? "+fruta1);
	if (respuesta==true) {
		var cual=frutas.shift();
	}
	alert("Estas son las frutas que quedan: \n* " +frutas.join(" \n* ")+"\n\nEliminamos "+cual);
}
	
function elimina3(){
	var fruta1 ="Melón";
	var fruta2 ="Sandía";
	var fruta3= "Fresa";
	var fruta4="Coco";
	var fruta5="Plátano";
	var frutas= new Array(fruta1,fruta2,fruta3,fruta4,fruta5);
	alert("Tenemos estas frutas :\n* " + frutas.join(" \n* "));
	var posicion=prompt("¿Dime la posición de la fruta que quieres eliminar: ");
	var eliminada=frutas[posicion-1];
	delete frutas[posicion-1];
	alert("Estas son las frutas que quedan: \n* " +frutas.join(" \n* ")+"\n\nEliminamos "+ eliminada);
}

function concatena(){
	alert("Vamos a hacer una lista de compra.\nPulsa Aceptar para continuar");
	var frutas=[];
	var verduras=[];
	var otros=[];
	var n=0;
	var respuesta=prompt("Introduce una fruta");
	while (respuesta!=null){
		frutas[n]=respuesta;
		n++;
		var respuesta=prompt("Introduce otra fruta");
	}
	//alert(frutas);
	n=0;
	var respuesta2=prompt("Ahora vamos a incluir verduras. Introduce una verdura: ")
	while (respuesta2!=null){
		verduras[n]=respuesta2;
		n++;
		var respuesta2=prompt("Introduce otra verdura");
	}
	//alert(verduras);
	n=0;
	var respuesta3=prompt("Ahora escribe otros productos: ")
	while (respuesta3!=null){
		otros[n]=respuesta3;
		n++;
		var respuesta3=prompt("Mas productos:");
	}
	//alert(otros);
	var lista= frutas.concat(verduras, otros); 
	alert("LISTA DE LA COMPRA:" +"\n* "+ lista.join(" \n* "));
	
}

function corta(){
	var frutas=["coco","pera","manzana","kiwi"];
	var verduras=["tomate","lechuga","judias"];
	var carnes=["filetes ternera","cinta de lomo","carrilleras"];
	var lista= frutas.concat(verduras, carnes); 
	var respuesta=prompt("Que productos quieres en la lista (FRUTAS/VERDURAS/CARNES?");
	var respuesta= respuesta.toUpperCase();
	alert(respuesta);
	if (respuesta="FRUTAS"){
		alert("F")}
		else{
			//if (respuesta="VERURAS"){
			alert("V")}
//			else if{alert("C")}
//		}
}

function ordena(){
	var alumnos=[];
	n=0;
	var respuesta=prompt("Introduce los alumnos de tu clase: ");
	while (respuesta!=null){
		alumnos[n]=respuesta;
		n++;
		var respuesta=prompt("Mas alumnos:");
	}
	alumnos.sort();
	alumnos.reverse();
	alert(" LISTA DE ALUMNOS ORDENADA:" +"\n*"+ alumnos.join("\n*"));
	alumnos.constructor;
	alert(constructor);
}


	