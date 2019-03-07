// JavaScript Document
function crearArray(){
	var marca= document.getElementById("marcas").value;
	//if (){
		
	var coma1 = marca.indexOf(",");
	var extrae1=marca.substring((0,coma1).trim());
	var coma2 = marca.indexOf()
	
	document.getElementById("union").innerHTML=
	
	/*var crearMatriz	= new Array(marca);
	var quitarEspacioBlanco= marca.replace(/ /g , ",");
	
	"Grupo Volkswagen :" + "\"" + quitarEspacioBlanco + "\"";*/
	//}//else{
		
		//}
	
	}

	
function añadir(){
	var añadeDatos= document.getElementById("marcas1").value;
	var reemplazar=añadeDatos.replace(/ /g , ",");
	var coches=["Seat", "Audi", "Skoda"];
	coches.push(reemplazar);
	document.getElementById("final").innerHTML=
	"Grupo Volkswagen :" + "\"" + coches + "\"" ;
/*"<ul>" + "Grupo Volkswagen :" + 
	"<li>" + coches[0] + "</li>" + 
	 "<li>" + coches[0] + "</li>" +
	 "<li>" + coches[1] + "</li>" +
	 "<li>" + coches[2] + "</li>" + 
	 "<li>" + coches[3] + "</li>" +
	 "<li>" + coches[4] + "</li>" +
	  "<li>" + coches[5] + "</li>" +
	  "<li>" + coches[6] + "</li>"+ 
"</ul>";*/
	
	
	}
function añadirDelante(){
	var añadeDatos= document.getElementById("marcas2").value;
	var coches=["Seat", "Audi", "Skoda"];
	coches.unshift(añadeDatos.replace(/ / , ","));
	document.getElementById("principio").innerHTML=
	"Grupo Volkswagen :" + "\"" + coches + "\"" ;
	
	}
	
function inserta(){
	var añadeDatos= document.getElementById("marcas3").value;
	var reemplazar=añadeDatos.replace(/ / , ",");
	var coches=[ "Ducati", "Lamborghini", "Porsche", "Seat", "Audi", "Skoda", "Volkswagen", "Bentley"," Bugatti"];
	coches.splice(4 , 0 ,reemplazar);
	document.getElementById("medio").innerHTML=
	"Grupo Volkswagen :" + coches;	
// con esto para hacer la lista desordenada.
var txt="<ul>";
coches.forEach(transforma);
txt+="</ul>";
document.getElementById("demo1").innerHTML = txt;
	function transforma(value){
		txt+="<li>" + value + "</li>";
	}



}
function numeros(){
	/*var number = document.getElementById("marcas4").value;
	alert(number+ " " + typeof(number));
	var cambiar = new Array (number);
	alert(cambiar+ " " + typeof(cambiar));*/
	var prinicipalArray = [0,1,3,2,4,5,8,7,6,9];
	
	var array1 = [0,1,3,2,4,5,8,7,6,9];	
	var ascendente = array1.sort();
	
	var array2 = [0,1,3,2,4,5,8,7,6,9];	
	var descendente = array2.sort().reverse();
	
	var array3 = [0,1,3,2,4,5,8,7,6,9];	
	var largo = array3.length;
	
	document.getElementById("numero").innerHTML= 
	
	prinicipalArray +  " El valor más bajo de la matríz es : " + ascendente[0] + " el más alto " + descendente[0] + " y el total de los valores son : " + largo;
	}
	
// la de numeros par e impar falta
function parImpar(){
    var dato = parseInt(document.getElementById("par").value)
    
    if(dato % 2 == 0){
        document.getElementById("impar").innerHTML=
        dato + " Es un número par. ";
    }else{
        document.getElementById("impar").innerHTML=
        dato + " Es un número impar. "
	}
	var numeroPar=[0,2,4,6,8];
	var numeroImpar=[1,3,5,7,9];
	document.getElementById("demo").innerHTML=
	" Matriz impar: " + numeroImpar + ";" + " Matriz par: " + numeroPar ;


}

function colocacion(){
	var prinicipalArray = [0,1,2,3,4,5,6,7,8,9];
	
	var asciende= [0,1,2,3,4,5,6,7,8,9];
	var asciende1=asciende.sort();
	
	var desciende= [0,1,2,3,4,5,6,7,8,9];
	var desciende1= desciende.sort().reverse();
	
	var aleatorio=[0,1,2,3,4,5,6,7,8,9];
	var aleatorio1= aleatorio;
	
	document.getElementById("orden").innerHTML=
	" Representación de  la matríz: " +   " ascendente : " + asciende1 + " descendente : " + desciende1  +
	 " aleatorio : " + aleatorio1 ;
	
	}//Juan tiene 50 años y está casado
	
	function objetoArray(){
		var dato = document.getElementById("nombre").value;
		var persona = { nombre:"Juan" , edad:50 , estado:"casado"};
		
		document.getElementById("objeto").innerHTML=
		
		"Representación del objeto : " + "<br>" +
		 " persona { " + persona.nombre + " tiene " + persona.edad +  " años  y está " + persona.estado + "}";
		//para luego de la frase search  busca la palabra ejem tiene y seria el largo 5
		}
	function introduceValores(){
		var datos= document.getElementById("nombre2").value;	
		var anadir= new String(datos);

		var persona = { nombre:"Juan" , edad:50 , estado:"casado"};
		var persona2 = {pais: "España", idioma: "Español", dni: "52125874N" };
		

			document.getElementById("valores").innerHTML=
		persona.nombre + "," + " " + persona.edad  + " " + " años" +  "," +  " "+ persona.estado + ","+ " " + persona2.pais + ","+ " "+ persona2.idioma + ","+ " " + "dni :" + persona2.dni + ","+ " " + anadir;
		
	}
	function nuevoValor(){
		var dato=document.getElementById("nombre3").value;
		var cadena=new String(dato);

		var persona3= {nombre: "Juan", edad: "50", estado:" casado", país: "España", idioma: "Español", dni:"52125874N" };
		var persona4 = {nombre: "María", edad: "35", estado: "soltera", país: "Francia", idioma: "Francés", dni: "52114587H" };

		document.getElementById("cad1").innerHTML=
		persona3.nombre+ " " + persona3.edad + " " + persona3.estado + " " + persona3.idioma + " " + persona3.dni + "<br>" + 
		persona4.nombre+ " " + persona4.edad + " " + persona4.estado + " " + persona4.idioma + " " + persona4.dni + "<br>" + 
		cadena;
		



	}

	

	
	