// JavaScript Document
function grupoW(){
	var vw = document.getElementById("text1").value ;
	var vwMatriz = vw.split(" ");
	
	document.getElementById("etiqueta1").innerHTML=
		"Grupo Volkswagen :" + " " + vwMatriz ;
	
}
 function bb(){
	 
	var vw = document.getElementById("text1").value ;
	var vwMatriz = vw.split(" ");
	var bb = document.getElementById("text2").value;
	var bbMatriz = bb.split(" ");
	var vwBb = vwMatriz.concat(bbMatriz);
	 
	document.getElementById("etiqueta2").innerHTML=
		"Grupo Volkswagen :" + " " + vwBb ;
	
 }

function dlp(){
	var vw = document.getElementById("text1").value ;
	var vwMatriz = vw.split(" ");
	
	var bb = document.getElementById("text2").value;
	var bbMatriz = bb.split(" ");
	
	var vwBb = vwMatriz.concat(bbMatriz);
	
	var dLP = document.getElementById("text3").value;
	var dlpMatriz = dLP.split(" ");
	var vwBbDlp = dlpMatriz.concat(vwBb);

	
	document.getElementById("etiqueta3").innerHTML=
		 " Representación de la matriz : "  + " " + vwBbDlp ;
	
	
}

function sM(){
	var vw = document.getElementById("text1").value ;
	var vwMatriz = vw.split(" ");
	/*alert(vwMatriz);*/
	var bb = document.getElementById("text2").value;
	var bbMatriz = bb.split(" ");
	
	var vwBb = vwMatriz.concat(bbMatriz);
	
	var dLP = document.getElementById("text3").value;
	var dlpMatriz = dLP.split(" ");
	
	var vwBbDlp = dlpMatriz.concat(vwBb);
	/*alert(vwBbDlp);*/
	
	var sm = document.getElementById("text4").value;
	var matrizSm = sm.split(" ");
	var marca1 = sm.slice(0, 1);
	alert (marca1);
	var marca2 = sm.slice(1);
	alert(marca2);
	
  
	var vwBbDlpSm = vwBbDlp.splice(4,0, marca1,marca2);
	alert(vwBbDlpSm);
	
   document.getElementById("etiqueta4").innerHTML=
	   "Grupo Volkswagen :" + " " + vwBbDlpSm ;
}

function ordenada(){
	
	var numeros = document.getElementById("text5").value;
	alert(numeros);
	var numerosM = numeros.split(" ");
	var numerosOrdenados = numerosM.sort();
	alert (numerosOrdenados);
	var descendiente = numerosOrdenados.sort(function(a, b){return b-a});
	alert(descendiente);
	function func (a,b) {return 0.5 - Math.random();}
	var aleatorio = numeros.split(" ").sort (func);
	alert(aleatorio);
	
	document.getElementById("etiqueta5").innerHTML =
		"Valores introducidos : " + " " + numeros + "<br>" +
		"Valores en ascendiente : " + " " + numerosOrdenados + "<br>" +
		"Valores en descendiente : " + " " + descendiente + "<br>" +
		"Valores orden aleatorio : " + " " + aleatorio ;
	     
}
	
