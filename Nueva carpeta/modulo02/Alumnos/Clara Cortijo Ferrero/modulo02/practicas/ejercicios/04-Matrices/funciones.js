// JavaScript Document


matrizGlobal = "";

function fun_crearmatriz () {
	
	//var campo1 = document.getElementById("campo1").value;
	//var campo2 = document.getElementById("campo2").value;
	//var campo3 = document.getElementById("campo3").value;
	//var matriz = [campo1,campo2,campo3];
	
	
	var matriz = (document.getElementById("campo1").value).split(",");

	
	document.getElementById("crearmatriz").innerHTML = "Representación de la matriz: " + "<strong>"+matriz +"</strong>";
	
	matrizGlobal = matriz;

	
	
	
	}
	
	
		
	
function fun_agregar() {
	

	var nuevos = prompt("Por favor, introduce los nuevos elementos separados por una coma." + "\n"+ "Ejemplo: Volkswagen,Bentley,Bugatti");

	//var matriz = ["Seat","Audi","Skoda"];
	//var matriz = fun_crearmatriz();
	//var matriz =(document.getElementById("matriz1").value).split(",");
	
	var arraynuevo = nuevos.split(",");
	
	
	for (i=0;i<arraynuevo.length;i++) {
		matrizGlobal.push(arraynuevo[i]);
		
		}	
	// Alternativa al for
	//matrizGlobal.push(...arraynuevo);
	
	

	
	
	document.getElementById("agregar").innerHTML = "Representación de la matriz: " + "<strong>Grupo Volkswagen: </strong>" + matrizGlobal + "<br> Vista en forma de lista ordenada: <br>";
		
		
	text = "<ol>";
for (i = 0; i < matrizGlobal.length; i++) {
    text += "<li>" + matrizGlobal[i] + "</li>";
}
    text += "</ol>";
		

	
	document.getElementById("agregar").innerHTML += text;
   

	
	}
	
	



function fun_agregarini() {
	
	var nuevosini = prompt("Por favor, introduce los nuevos elementos separados por una coma." + "\n"+ "Ejemplo: Ducati,Lamborghini,Porsche");

	var arraynuevoini = nuevosini.split(",");
	
	//var matriz = ["Seat","Audi","Skoda","Volkswagen","Bentley","Bugatti"];
	
	//var total = arraynuevoini.concat(matrizGlobal);
	matrizGlobal =arraynuevoini.concat(matrizGlobal);
	
	
	document.getElementById("agregarini").innerHTML = "Representación de la matriz: " + "<strong>Grupo Volkswagen: </strong>" + matrizGlobal + "<br> Vista en forma de tabla: <br>";
		
		
	text = "<table>";
for (i = 0; i < matrizGlobal.length; i++) {
    text += "<tr><td>" + matrizGlobal[i] + "</td></tr>";
}
    text += "</table>";
		

	
	document.getElementById("agregarini").innerHTML += text;

	
	}
	
	
	

function fun_agregarentre() {
	
	var nuevosen = prompt("Por favor, introduce los nuevos elementos separados por una coma." + "\n"+ "Ejemplo: Scania, MAN");


    var nuevosentre = nuevosen.split(",");

	


    for (i=(nuevosentre.length-1);i>-1;i--) {
		
		matrizGlobal.splice(4,0,nuevosentre[i]);
	
		}
		
	//Alternativa al for
	//matrizGlobal.splice(4,0,...nuevosentre);

	
	document.getElementById("agregarentre").innerHTML = "Representación de la matriz: " + "<strong>Grupo Volkswagen: </strong>" + matrizGlobal + "<br> Vista en forma de lista desordenada: <br>";
		
		
	text = "<ul>";
for (i = 0; i < matrizGlobal.length; i++) {
    text += "<li>" + matrizGlobal[i] + "</li>";
}
    text += "</ul>";
		

	
	document.getElementById("agregarentre").innerHTML += text;

	
	}
	
	
	
function fun_minmax () {
	
		var valores = document.getElementById("nums").value;
		
		var array_valores= valores.split(",");
		
		var suma = 0;
		for (i=0;i<array_valores.length;i++) {
			suma = suma + Number(array_valores[i]);
			
			}

		document.getElementById("minmax").innerHTML ="El valor más bajo de la matriz introducida es <strong>"+ Math.min(...array_valores)+ "</strong>, el más alto es <strong>" + Math.max(...array_valores)+ "</strong>, y la suma total de los valores introducidos es <strong>"+ suma+ "</strong>. El número total de valores introducidos, es decir, la longitud del array es de <strong>"+array_valores.length +"</strong> elementos.";

	
	
		
		}
		



	
function fun_parimpar () {
	
	var valores = document.getElementById("lista").value;
			
	var array_valores= valores.split(",");
	
	var pares= []; 
	var impares= [];

	for (i=0;i<array_valores.length;i++){

		
		if (array_valores[i]%2 === 0){

			pares.push(array_valores[i]);
		}

		else {

		impares.push(array_valores[i]);

		}

	} 
	
	document.getElementById("parimpar").innerHTML = "Matriz par: <strong>"+ pares+ "</strong>. Matriz impar:  <strong>"+ impares+ "</strong>.";
	
		
		
			
			}




	
function fun_ordenar () {
	
	var valores = document.getElementById("listaord").value;
						
	var array_valores= valores.split(",");
	var ascen = array_valores.sort(function(a, b){return a - b});
	var descen= (ascen.slice()).reverse();
	var aleatorio = (array_valores.slice()).sort(function(a, b){return 0.5 - Math.random()});		

				
	document.getElementById("ordenar").innerHTML = "Orden ascendente: <strong>"+ ascen+ "</strong>. Orden descendente:  <strong>"+descen + "</strong>. Orden aleatorio: <strong>"+aleatorio + "</strong>.";
				
					
					
					
	}
			
		

var persona = new Object();

	function fun_crearobjeto() {
	
		var obj = prompt("Por favor, introduce una sentencia del tipo: 'Juan tiene 50 años y está casado'");
	
		var arrobj = obj.split(" ");

		//var persona = new Object();  // la he definido fuera, para que sea global
		persona.nombre = arrobj[0];
		persona.edad = arrobj[2];
		persona.ecivil = arrobj[6];

	
	
		
		document.getElementById("crearobjeto").innerHTML ="El objeto creado es el siguiente: <br>" + "persona = {nombre: "+persona.nombre+", edad: "+persona.edad+", estado: "+persona.ecivil+"}";

	}
			

function fun_ampliarobj() {
	
		var obj = prompt("Por favor, introduce país de nacimiento, idioma y DNI separados por comas. Ej: España, Español, 52125478N");
	
		var arrobj = obj.split(",");


		persona.pais=arrobj[0];
		persona.idioma = arrobj[1];
		persona.dni=arrobj[2];
		//var persona = {nombre:arrobj[0], edad:arrobj[2], ecivil:arrobj[6]};
		
		
	
		
		document.getElementById("ampliarobj").innerHTML ="El objeto ampliado es el siguiente: <br>" + "persona = {nombre: "+persona.nombre+", edad: "+persona.edad+", estado: "+persona.ecivil+ ", país: "+persona.pais+ ", idioma: "+persona.idioma+", DNI: " +persona.dni+"}<br><br>";


		document.getElementById("ampliarobj").innerHTML +="En forma de tabla: <br><br><table width=\"80%\"><tr><th>Nombre</th><th>Edad</th><th>E.civil</th><th>País</th><th>Idioma</th><th>DNI</th></tr>"+ "<tr>"+"<td>"+persona.nombre+"</td>"+"<td>"+persona.edad+"</td>"+"<td>"+persona.ecivil+"</td>"+"<td>"+persona.pais+"</td>"+"<td>"+persona.idioma+"</td>"+"<td>"+persona.dni+"</td>"+"</tr></table>";
		
		
		

	}
			




	function crear_tabla() {
	
		
		document.getElementById("perso2").innerHTML ="La tabla quedaría así: <br><br><table id=\"tab\" width=\"80%\"><tr><th>Nombre</th><th>Edad</th><th>E.civil</th><th>País</th><th>Idioma</th><th>DNI</th></tr>"+ "<tr>"+"<td>"+persona.nombre+"</td>"+"<td>"+persona.edad+"</td>"+"<td>"+persona.ecivil+"</td>"+"<td>"+persona.pais+"</td>"+"<td>"+persona.idioma+"</td>"+"<td>"+persona.dni+"</td>"+"</tr>"+"</table><br>";	
		
				/*document.getElementById("perso2").innerHTML += "persona = {nombre: "+persona.nombre+", edad: "+persona.edad+", estado: "+persona.ecivil+ ", país: "+persona.pais+ ", idioma: "+persona.nacionalidad+", DNI: " +persona.dni+"}<br>";*/
	
		

	}
	


	

	
	
function ampliar_tabla() {
	
	    
	   
		var obj = prompt("Por favor, introduce valores análogos a los anteriores para otra persona en forma de: nombre, edad, estado civil, país, idioma y DNI. Ej: Clara, 33, soltera, España, Español, 46509718W");
	
		var arrobj = obj.split(",");

		var persona2=new Object;
		persona2.nombre=arrobj[0];
		persona2.edad = arrobj[1];
		persona2.ecivil=arrobj[2];
		persona2.pais=arrobj[3];
		persona2.idioma = arrobj[4];
		persona2.dni=arrobj[5];
	
	
		
		/*document.getElementById("perso2").innerHTML += "persona_new = {nombre: "+persona2.nombre+", edad: "+persona2.edad+", estado: "+persona2.ecivil+ ", país: "+persona2.pais+ ", idioma: "+persona2.nacionalidad+", DNI: " +persona2.dni+"}<br>";*/


		document.getElementById("tab").innerHTML += "<tr>"+"<td>"+persona2.nombre+"</td>"+"<td>"+persona2.edad+"</td>"+"<td>"+persona2.ecivil+"</td>"+"<td>"+persona2.pais+"</td>"+"<td>"+persona2.idioma+"</td>"+"<td>"+persona2.dni+"</td>"+"</tr>";
		
		
		

	}
	
