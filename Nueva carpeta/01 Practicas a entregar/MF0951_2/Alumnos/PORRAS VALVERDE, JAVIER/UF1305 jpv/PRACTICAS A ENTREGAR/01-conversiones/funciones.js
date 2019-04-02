// JavaScript Document
function obtenerlitros(){
	
	var litros = Number(document.getElementById("number1").value);
	
	var decilitros = litros * 10;
	var centilitros = litros * 100;
	var mililitros = litros * 1000;
	
	document.getElementById("etiqueta1").innerHTML=
		"Número de litros " + litros + "<br>" +
		litros + " litros son " + decilitros + " decilitros" + "<br>" +
		litros + " litros son " + centilitros + " centilitros" + "<br>" +
		litros + " litros son " + mililitros + " mililitros";
}

function obtenerlongitud(){
	
	var kilometros = Number(document.getElementById("number2").value);
	
	var metros = kilometros * 1000;
	var centimetros = metros * 100;
	var milimetros = centimetros * 100;
	
	document.getElementById("etiqueta2").innerHTML=		
		"numero de kilometros" + kilometros  + "<br>" +
	
	kilometros + " kilometros son " + metros + " metros " + "<br>" +
	kilometros + " kilometros son " + centimetros + " centimetros " + "<br>" +
	kilometros + " kilometros son " + milimetros + " milimetros " ;
	
}

function obtenerTiempo(){
	
	var dias = Number(document.getElementById("number3").value);
	
	var horas = dias * 24;
	var minutos = horas * 60;
	var segundos = minutos * 60;
	
	document.getElementById("etiqueta3").innerHTML=	
		"Numero de dias" + dias + "<br>" +
		
		dias + " dias son " + horas + " horas" + "<br>" +
		dias + " dias son " + minutos + " minutos " + "<br>" +
		dias + " dias son " + segundos +" segundos " ;
	
}

function obtenerTemperatura(){
	var gradosCent = Number(document.getElementById("number4").value);
	
	var fah = gradosCent * 1.8 + 32;
	var kel = gradosCent + 273.15 ;
	
	document.getElementById("etiqueta4").innerHTML=
		" Numero de grados centigrados " + gradosCent + "<br>" +
		
		gradosCent + " grados centigrados son : " + fah + " grados fahrenheit " + "<br>" +
		gradosCent + " grados centigrados son : " + kel + " grados kelvin " ;
	
}

function obtenerPeso(){
	
	var tonelada = Number(document.getElementById("number5").value);
	
	var kilo = tonelada * 1000 ;
	var gramo = kilo * 1000 ;
	var miligramo = gramo * 1000 ;
	
	document.getElementById("etiqueta5").innerHTML=
		/*tonelada + "toneladas son : " + "<br>" +*/
		
		tonelada  + " toneladas son : " + kilo + " kilos " + "<br>" +
	    tonelada  + " toneladas son : " + gramo + " gramos " + "<br>" +
	    tonelada  + " toneladas son : " + miligramo + " miligramos " ;	
	
}

function obtenerPesaje(){
	
	var xkilogramos = Number(document.getElementById("number6").value);

    var piedras = xkilogramos * 0.1575 ;
	var libras = xkilogramos * 2.2046 ;
    var onzas = xkilogramos * 35.274 ;
    var kilates  = xkilogramos * 5000 ;

    document.getElementById("etiqueta6").innerHTML =
		xkilogramos + " kilogramos  son : " + piedras + " piedras " + "<br>" +
		xkilogramos + " kilogramos son : " + libras + " librass " + "<br>" +
		xkilogramos + " kilogramos son : " + onzas + " kilos " + "<br>" +
		xkilogramos + " kilogramos son : " + kilates + " kilos " ;
		
}


function obtenerDistancia(){
	var km =  Number(document.getElementById("number7").value);
	 
	var milla = km * 0.621371 ;
	var yarda = km * 1093.61 ;
	var pies = km * 3280.81 ;
	var pulgada = km * 39370.1 ;
	
	document.getElementById("etiqueta7").innerHTML=
	km + " kilometros son : " + milla + " millas " + "<br>" +
	km + " kilometros son : " + yarda + " yardas " + "<br>" +
	km + " kilometros son : " + pies + " pies " + "<br>" +
	km + " kilometros son : " + pulgada + " pulgadas "  ;
}


function obtenerMoneda(){
	var euro = Number(document.getElementById("number8").value);
	
	var dolar = euro * 1.13 ;
	var libra = euro * 0.88 ;
	var yen = euro * 128.27 ;
	var yuan = euro * 7.82 ;
	
	document.getElementById("etiqueta8").innerHTML=
		euro + " euros son : " + dolar + " dolares " + "<br>" +
		euro + " euros son : " + libra + " libras " + "<br>" +
		euro + " euros son : " + yen + " yenes " + "<br>" +
		euro + " euros son : " + yuan + " yuanes "  ;
}

function obtenerVelocidad(){
     var kmHora = Number(document.getElementById("number9").value);
	 
	var milla = kmHora * 0.621371;
	var nudo = kmHora * 0.539957 ;
	var metro = kmHora * 0.277778;
	var pulgada = kmHora * 0.911344;
	
	document.getElementById("etiqueta9").innerHTML=
		kmHora + " kilometros por hora son : " + milla + " millas por hora " + "<br>" +
		kmHora + " kilometros por hora son : " + nudo + " nudos por hora " + "<br>" +
		kmHora + " kilometros por hora son : " + metro + " metros por segundo " + "<br>" +	
		kmHora + " kilometros por hora son : " + pulgada + " pulgadas por segundo " ;	
 	
	
}

function obtenerArea(){
	var km2 = Number(document.getElementById("number10").value); 
	
	var hectarea2 = km2 * 100 ;
	var acre2 = km2 * 247.105 ;
	var millas2 = km2 * 0.386102 ; 
	
	document.getElementById("etiqueta10").innerHTML=
		
		km2 + " kilometros cuadrado son : " + hectarea2 + " hectareas " + "<br>" +
		km2 + " kilometros cuadrado son : " + acre2 + " acres " + "<br>" +
		km2 + " kilometros cuadrado son : " + millas2 + " millas cuadradas" ;
}
