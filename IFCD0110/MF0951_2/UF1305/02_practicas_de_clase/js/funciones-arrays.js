// JavaScript Document



//Método new Array()

function nuevaMatriz(){
	var color1 = prompt("Introduce un color");
	var color2 = prompt("Introduce otro color");
	var color3 = prompt("Introduce un tercer color");
	
	var colores = new Array("\"" + color1 + "\","  +  "\"" + color2 + "\"," + "\"" +  color3 + "\"");
	
	
	
	var colores2 = new Array ("color1" , "color2" , "color3");
	
	alert("Con los datos introducidos tenemos las variables: " + "\n" + "var color1= " + color1 + ";\n" + 
		  "var color2= " + color2 + ";\n" + "var color3= " + color3 + ";\n" + 
		  "Hemos generado la matriz con la var colores[" + colores + "], que es de tipo: " + typeof(colores) + 
		  "y tiene " + colores.length + " valores" + "\n" +	"Y hemos generado la matriz con la var colores2[" + colores2 + "], que es de tipo: " + typeof(colores2)+ " y tiene " + colores.length + " valores"  );

}