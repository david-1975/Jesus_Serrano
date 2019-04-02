// JavaScript Document


function nuevaFecha(){
	var fecha=new Date();	
	alert("la fecha actual es : " + "\n" + fecha);
}

function nuevoAño(){
	var fecha= new Date()
	var año = fecha.getFullYear();
	alert("El año actual es : " + "\n" + año);
	
}

function obtenerMes(){
	
	var fecha = new Date();
	var mes = fecha.getMonth();
	var meses = ["enero", "febrero" , "marzo", "abril", "mayo" , "junio" , "julio" , "agosto" , "septiembre", "noviembre", "diciembre"]
	alert("El mes actual es : " + "\n" + mes + "\n" + "su nombre es : " + meses [fecha.getMonth()] );
}

function obtenerHora(){
	var fecha= new Date();
	var hora = fecha.getHours();
	alert("La hora actual es : " + "\n" + hora );
}