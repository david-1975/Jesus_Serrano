
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

function vivido(){
	var fecha=new Date(document.getElementById("date1").value);
	var fechaact=new Date();
	var minutos=parseInt((fechaact-fecha)/1000/60);
	var horas=parseInt(minutos/60)
	var dias=parseInt(horas/24);
	años=(dias/365).toPrecision(4)
	var años=parseInt(dias/365);
	//alert(typeof(fecha)+" "+fecha+"\n "+fechaact+"\n "+edad+" años")
		
	document.getElementById("etiqueta1").innerHTML="<b>RESULTADO:</b><br>"+"Tienes "+años+" años y esto es lo que has vivido:<ul><li>"+dias+" dias</li><li>"+horas+" horas</li><li>"+minutos+" minutos</li></ul>";
		
}

function formarfecha(){
	var dia=Number(document.getElementById("dia").value);
	var mes=Number(document.getElementById("mes").value);
	var anio=Number(document.getElementById("anio").value);
	
	if (dia<10){
		document.getElementById("etiqueta2").innerHTML="<b>RESULTADO:</b><br>"+"0"+dia;
	}else{
		document.getElementById("etiqueta2").innerHTML="<b>RESULTADO:</b><br>"+dia;
	}
	
	if (mes<10){
		document.getElementById("etiqueta2").innerHTML+="/0"+mes+"/"+anio;
	}else{
		document.getElementById("etiqueta2").innerHTML+="/"+mes+"/"+anio;
	}
	var fechaact=new Date();
	var horas=fechaact.getHours();
	var min=fechaact.getMinutes();
	var seg=fechaact.getSeconds();
	if (horas<10){
		document.getElementById("etiqueta2").innerHTML+="<br>"+"0"+horas;
	}else{
		document.getElementById("etiqueta2").innerHTML+="<br>"+horas;
	}
	if (min<10){
		document.getElementById("etiqueta2").innerHTML+=":0"+min;
	}else{
		document.getElementById("etiqueta2").innerHTML+=":"+min;
	}
	if (seg<10){
		document.getElementById("etiqueta2").innerHTML+=":0"+seg;
	}else{
		document.getElementById("etiqueta2").innerHTML+=":"+seg;
	}
	
}


function fechalarga() {
	var fecha=new Date(document.getElementById("date3").value);
	var diasemana=fecha.getDay(); //comienza por lunes
	var dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
	var dia=fecha.getDate();
	var mes=fecha.getMonth();
	var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var anio=fecha.getFullYear();
	//alert(fecha+"\n"+dia+"\n"+dias[diasemana]+mes)
	document.getElementById("etiqueta3").innerHTML="<b>RESULTADO:</b><br>"+"Hoy es "+dias[diasemana]+"<br>"+dia+" de "+meses[mes]+" de "+anio;
}

function saludousuario(){
	var usuario=document.getElementById("usuar").value;
	var fecha=new Date();
	var dia=fecha.getDate();
	var mes=fecha.getMonth();
	var anio=fecha.getFullYear();
	var horas=fecha.getHours();
	var min=fecha.getMinutes();
	var seg=fecha.getSeconds();
	document.getElementById("etiqueta4").innerHTML="<b>RESULTADO:</b><br>"+"Hola "+usuario+", has iniciado sesión el día "+dia+"/"+mes+"/"+anio+" a las "+horas+":"+min+":"+seg;
}

function cumpleanyo(){
	var fechanac=new Date(document.getElementById("date5").value);
	var anioact=new Date().getFullYear();
	var mesact=new Date().getMonth();
	var diact=new Date().getDate();
	var mescum=fechanac.getMonth();
	var diacum=fechanac.getDate();

	var fechanueva=new Date(anioact,mescum,diacum);
	var fechaact=new Date(anioact,mesact,diact);
	alert("mes cumple: "+mescum+"\n"+"mes actual: "+mesact)
	alert(fechanac+typeof(fechanac) + "\n" + fechanueva + typeof(fechanueva) + "\n" + fechaact + typeof(fechaact));
	//fechanueva.setFullYear(anioact);
//	fechanueva.setMonth(mescum);
//	fechanueva.setDate(diacum);
	//alert(fechaact+fechanueva+"\n"+diasact+" "+diascum);
	
	if (mescum == mesact && diact == diacum){
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+"FELICIDADES !!!!!!!!<br>HOY ES TU CUMPLEAÑOS.<br>PASA UN GRAN DIA";
	}else if (mescum==mesact && diact>diacum){
		var diasact=parseInt((fechaact-fechanueva)/1000/60/60/24);
		var diascum=parseInt((fechaact-fechanueva)/1000/60/60/24);
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+"Hace "+diascum+" ha sido tu cumpleaños";
	}else if (mescum==mesact && diact<diacum){
		var diasact=parseInt((fechanueva-fechaact)/1000/60/60/24);
		var diascum=parseInt((fechanueva-fechaact)/1000/60/60/24);
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+"Quedan "+diascum+" para tu cumpleaños";
	}else if (mescum>mesact){
		var diasact=parseInt((fechanueva-fechaact)/1000/60/60/24);
		var diascum=parseInt((fechanueva-fechaact)/1000/60/60/24);
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+"Aun no ha sido tu cumpleaños.<br>Te quedan "+diascum+ " dias";
	}else if(mescum<mesact){
		var diasact=parseInt((fechaact-fechanueva)/1000/60/60/24);
		var diascum=parseInt((fechaact-fechanueva)/1000/60/60/24);
		//alert(fechaact+fechanueva+"\n"+diasact+" "+diascum);
		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+"Tu cumpleaños ya ha sido hace "+diascum+ " dias";}

	///////////////////////////////////////////////////////////////////////////////
	
	
	
//else if (mescum==mesact {
//		var diasact=parseInt((fechaact-fechanueva)/1000/60/60/24);
//		var diascum=parseInt((fechaact-fechanueva)/1000/60/60/24);
//		//alert(fechaact+fechanueva+"\n"+diasact+" "+diascum);
//		document.getElementById("etiqueta5").innerHTML="<b>RESULTADO:</b><br>"+"Aun no ha sido tu cumpleaños.<br>Te quedan "+diascum+ " dias";
//	}
}