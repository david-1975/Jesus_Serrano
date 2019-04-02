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

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function horaIf(){
	var fecha=new Date();
	var hora=fecha.getHours();
	//var hora=5;
	
	if (hora>= 7 && hora<13){
		alert("Buenos dias!!!!!!!\nSon las "+hora+" horas");
	}
	if (hora>=13 && hora<20){
		alert("Buenos tardes!!!!!!\nSon las "+hora+" horas");
	}
	if (hora>=20 || hora<=7 ){
		alert("Buenas noches !!!!!!!\nSon las "+hora+" horas");
	}
}

function horaElse(){
	var fecha=new Date();
	var hora=fecha.getHours();
	if (hora>= 7&& hora<13){
		alert("Buenos dias!!!!!!!\nSon las "+hora+" horas");
	} else { 
		alert("Buenos tardes!!!!!!\nSon las "+hora+" horas");
	}
	
}

function horaElseIf(){
	var fecha=new Date();
	var hora=fecha.getHours();
	if (hora>= 7&& hora<13){
		alert("Buenos dias!!!!!!!\nSon las "+hora+" horas");
	} else if (hora>=13 && hora<20){
		alert("Buenos tardes!!!!!!\nSon las "+hora+" horas");
		} else {
			alert("Buenas noches !!!!!!!\nSon las "+hora+" horas");
		} 
	
}

function switchCase(){
	switch (new Date().getDay()) { 
		case 0: 
			dia = "Domingo.\nDescanso "; 
			break; 
		case 1: 
			dia = "Lunes.\nComienza la semana. A por ella"; 
			break; 
		case 2: 
			dia = "Martes.\nHoy puede ser un gran dia"; 
			break; 
		case 3: 
			dia = "Miércoles.\nYa estamos en la mitad de la semana"; 
			break; 
		case 4: 
			dia = "Jueves. \n Que rápio ha pasado. Mañana Viernes"; 
			break; 
		case 5: 
			dia = "Viernes. Biennnnnnn!!!\nEmpieza el finde"; 
			break; 
		case  6: 
			dia = "Sábado. Biennnnnnn!!!\nHoy no se madruga"; 
		
		default:  
    		text = "Error"; 
	}
	alert("Hoy es : "+dia);
}

function bucleFor(){
	var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var mes=prompt("Cuantos meses quieres mostrar? ");
	var i;
	var texto="";
	mes=parseInt(mes);
	for (i = 0; i < mes; i++) { 
	  texto += meses[i] + "\n";
	}
	alert(texto);
}

function mientrasWhile(){
	var num=prompt("Que tabla de multiplicar quieres mostrar ?")
	num=parseInt(num);
	var texto = "";
	var i = 0;
	while (i <= 10) {
  		texto += num+ "X"+ i +"="+ (num*i)+"\n";
		i++;
	}
	alert(texto)
}

function hacerMientrasDoWhile(){
	var texto = "";
	var i = 0;

	do {
	  texto += "\n El número es " + i;
	  i++;
	}
	while (i < 10); 
	alert(texto);
}

function romperBucle(){
	var sigue=confirm("Te voy a mostrar los meses del año"+"\nSi quieres continuar pulsa aceptar"+"\nEn caso contrario cancelar");
	var i=0
	var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var texto="";
	if (sigue==true){
		for (i = 0; i < 12; i++) {
  			texto=meses[i]+"\n";
			var sigue2=confirm(texto);
			if (sigue2==true){
				continue;
				
			}else{
				break;
			}
		}
	}
}

function romperBucle2(){
	var sigue=confirm("Te voy a mostrar los dias de la semana"+"\nSi quieres continuar pulsa aceptar"+"\nEn caso contrario cancelar");
	var i=0
	var dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
	var texto="";
	if (sigue==true){
		for (i = 0; i < 7; i++) {
  			texto=dias[i]+"\n";
			var sigue2=confirm(texto);
			if (sigue2==true){
				continue;
				
			}else{
				break;
			}
		}
	}
}

