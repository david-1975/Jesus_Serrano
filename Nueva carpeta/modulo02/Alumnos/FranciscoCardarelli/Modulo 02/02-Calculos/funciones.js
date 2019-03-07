// JavaScript Document

function pulgada() {
	var dato = parseInt(document.getElementById("idCampo").value);
	var centimetro = dato * 2.45;
	
	document.getElementById("demo").innerHTML = dato + " Pulgadas. Son: " + centimetro + " Centimetros ";
	}

function neto() {
	var dato = parseInt(document.getElementById("idCampo1").value);
	var ss = dato - (dato * 6.4 / 100);
	var irpf = dato - (dato * 15 / 100);
	var total = dato - (ss + irpf);
	var pagas = total * 14;
	
	document.getElementById("demo1").innerHTML = dato + " Es tu sueldo bruto. <br> Tu sueldo neto es tu sueldo bruto: " + dato + "<br>" + 
	" Menos la Seguridad Social: " + ss + "<br>" + 
	" Menos el IRPF: " + irpf + "<br>" + " TOTAL: " + total + "<br>" + 
	" Tu sueldo neto anual es: " + pagas;
	}
	
function pfinal() {
	var dato = parseInt(document.getElementById("idCampo2").value);
	var descuento = dato - (dato * 20 / 100);
	var impuesto = descuento + (descuento * 21 / 100);
	var total = impuesto
	
	document.getElementById("demo2").innerHTML = dato + " Euros. " + "<br>" + 
	" Menos el 20% de descuento son: " + descuento + " € " + "<br>" +
	" Más el 21% de IVA son: " + impuesto + " €";
	}
	
function bytebit() {
	var dato = parseInt(document.getElementById("idCampo3").value);
	var megabytes = dato * 1024;
	var kilobytes = megabytes * 1024;
	var bytes = kilobytes * 1024;
	var bits = bytes * 8; 
		
	document.getElementById("demo3").innerHTML = dato + " Gigabytes son: " + "<br>" + 
	megabytes + " Megabytes " + "<br>" +
	kilobytes + " Kilobytes. " + "<br>" + 
	bytes + " Bytes. " + "<br>" + 
	bits + " Bits.";
	}
	
function dsm() {
	var dato = parseInt(document.getElementById("idCampo4").value);
	var dias = dato * 365;
	var semanas = dato * 52.142857142857146;
	var meses = dato * 12;

	document.getElementById("demo4").innerHTML = dato + " Años son: " + "<br>" + 
	dias + " Días. " + "<br>" + 
	semanas + " Semanas. " + "<br>" + 
	meses + " Meses.";
	}
	
function velocidad() {
	var dato = parseInt(document.getElementById("idCampo5").value);
	var metros = dato * 1000 / 3600;
		
	document.getElementById("demo5").innerHTML = dato + " Kilometros por hora son: " + "<br>" + 
	metros + " metros por segundo. ";
	}
	
function desplazamiento() {
	var dato = parseInt(document.getElementById("idCampo6").value);
	var coste = dato * 0.5;

	document.getElementById("demo6").innerHTML = dato + " Kilometros de desplazamiento son: " + "<br>" + 
	coste + " Euros. ";
	}
	
	function espacio() {
	var dato = parseInt(document.getElementById("idCampo7").value);
	var dato2 = parseInt(document.getElementById("idCampo7b").value);
	var megabytes = dato * dato2;
	var almacen = dato2 * 4812.8;
	
	document.getElementById("demo7").innerHTML = dato + " canciones de: " + dato2 + " megabytes." + "<br>" +
	"Ocupan: " + megabytes + " Megabytes " + "<br>" + " Se pueden almacenar: " + almacen + " canciones de " + dato2 + " megabytes";
	}
	
function distancia() {
	var dato = parseInt(document.getElementById("idCampo8").value);
	var dato2 = parseInt(document.getElementById("idCampo8b").value);
	var kmh = dato / dato2;
	var tiempo = dato2 / dato2;
	
	document.getElementById("demo8").innerHTML = dato + " Kilometros a: " + dato2 + " kilometros por hora." + "<br>" +
	"Se recorren en: " + kmh + " horas.";
	}

function descarga() {
	var dato = parseInt(document.getElementById("idCampo9").value);
	var size = dato * 1024 * 8;
	var speed = size / 1000; 
	var tiempo = speed / 10;
	
	document.getElementById("demo9").innerHTML = dato + " Megabytes a 10mbps: " + "<br>" + 
	" Se descargan en " + tiempo + " horas.";
	}

	//Calcular cuanto tiempo tardaría en descargar un archivo de X megabytes con una velocidad de descarga de 10 mbps
	//(kilobit por segundo).(Fórmula: tamaño de archivo / tasa de transferencia = tiempo en segundos) 
	//(1*1024*8) / 10) = 819,2 segundos; 819,2 / 60 = 13,65 minutos y segundos.
	//(Almacenamiento 1024 byte, transferencia 1000 bps)
	

	
	
	