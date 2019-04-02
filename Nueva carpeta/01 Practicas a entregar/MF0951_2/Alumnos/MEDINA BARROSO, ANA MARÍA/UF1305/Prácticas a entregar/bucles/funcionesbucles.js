
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

function nif(){
	var dni=document.getElementById("text1").value;
	var numero=dni.substr(0,dni.length-1);
	var letra=dni.substr(dni.length-1,1).toUpperCase();

	var numdni=numero%23;
	var letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
	var letraok=letras[numdni].toString();
	if (letra===letraok){
		document.getElementById("etiqueta1").innerHTML="<b>RESULTADO:</b><br>"+"PERFECTO!!!!!";
		
	}else{
		document.getElementById("etiqueta1").innerHTML="<b>RESULTADO:</b><br>"+"Has introducido mal la letra del DNI";
		}
}

function horoscopo(){
	var fecha=new Date(document.getElementById("date2").value);
	var mes=fecha.getMonth()+1;
	var dia=fecha.getDate();
	var imagen="";
	var signo="";
	var mal="";
	//alert(fecha+"\n"+mes+"\n"+dia)
	if ((dia>=21 && mes==3) || (dia<=20 && mes==4)){
		signo="ERES ARIES"
		imagen="img/aries.jpg"
	}else if((dia>=21 && mes==4) || (dia<=20 && mes==5)){
		signo="ERES TAURO"
		imagen="img/tauro.jpg"
			
	}else if((dia>=21 && mes==5) || (dia<=21 && mes==6)){
		signo="ERES GEMINIS"
		imagen="img/geminis.jpg"
		
	}else if((dia>=22 && mes==6) || (dia<=22 && mes==7)){
	signo="ERES CANCER"
	imagen="img/cancer.jpg"
	
	}else if((dia>=23 && mes==7) || (dia<=22 && mes==8)){
		signo="ERES LEO"
		imagen="img/leo.jpg"
	
	}else if((dia>=23 && mes==8) || (dia<=22 && mes==9)){
	signo="ERES VIRGO"
	imagen="img/virgo.jpg"
	
	}else if((dia>=23 && mes==9) || (dia<=22 && mes==10)){
		signo="ERES LIBRA"
		imagen="img/libra.jpg"
		
	}else if((dia>=23 && mes==10) || (dia<=22 && mes==11)){
		signo="ERES ESCORPIO"
		imagen="img/escorpio.jpg"
		
	}else if((dia>=23 && mes==11) || (dia<=21 && mes==12)){
		signo="ERES SAGITARIO"
		imagen="img/sagitario.jpg"
		
	}else if((dia>=22 && mes==12) || (dia<=19 && mes==1)){
		signo="ERES CAPRICORNIO"
		imagen="img/capricornio.jpg"
		
	}else if((dia>=20 && mes==1) || (dia<=19 && mes==2)){
		signo="ERES ACUARIO"
		imagen="img/acuario.jpg"
		
	}else if((dia>=20 && mes==2) || (dia<=20 && mes==3)){
		signo="ERES PISCIS"
		imagen="img/piscis.jpg"
	}else{
		mal="HAS INTRODUCIDO MAL LA FECHA";
		imagen="img/error.jpg"
	}
	

	
	document.getElementById("etiqueta2").innerHTML="<b>RESULTADO:</b><br>"+signo+ mal+"<br><img src="+"'"+imagen+"'"+"width=100px height=100px text-align=center>";
}

function categoria(){
	var fecha=new Date(document.getElementById("date3").value);
	var fechaact=new Date();
	var anios=parseInt((fechaact-fecha)/1000/60/60/24/365);
	var categor="";
	switch (anios){
		default:
			categor="CATEGORIA<br>AFICIONADO";
			break;
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
			categor="AUN NO TIENES EDAD PARA APUNTARTE";
			break;
		case 5:
		case 6:
		case 7:
			categor="CATEGORIA<br>PREBENJAMIN";
			break;
		case 8:
		case 9:
			categor="CATEGORIA<br>BENJAMIN";
			break;
		case 10:
		case 11:
			categor="CATEGORIA<br>ALEVIN";
			break;
		case 12:
		case 13:
			categor="CATEGORIA<br>INFANTIL";
			break;
		case 14:
		case 15:
			categor="CATEGORIA<br>CADETE";
			break;
		case 16:
		case 17:
		case 18:
			categor="CATEGORIA<br>JUVENIL";
			break;
				
			
	}
	
	document.getElementById("etiqueta3").innerHTML="<b>RESULTADO:</b><br>"+categor;
		
}

function frutas(){
	var texto=(document.getElementById("text4").value);
	var frutas=texto.split(" ");
	var longitud=frutas.length;
	var i=0;
	document.getElementById("etiqueta4").innerHTML="<b>RESULTADO:</b><br>"+"<ul>";
	for (i=0;i<longitud;i++){
		document.getElementById("etiqueta4").innerHTML+="<li>"+frutas[i]+"</li>"
	}
	document.getElementById("etiqueta4").innerHTML+="</ul>";
}

function tabla(){
	var num=Number(document.getElementById("number5").value);
	num=parseInt(num);
	var i = 0;
	document.getElementById("etiqueta5").innerHTML+="<table ><tbody><tr><td><strong>Tabla de multiplicar</strong></td></tr>"; //style="+'"'+"border:1px solid black"+'"'+"
	while (i <= 10) {
  		document.getElementById("etiqueta5").innerHTML+="<br><tr><td>"+ num+ " x "+ i +" = "+ (num*i)+"</td>";
//		</tr>
		i++;
	}
	document.getElementById("etiqueta5").innerHTML+="</tbody></table>"
}

