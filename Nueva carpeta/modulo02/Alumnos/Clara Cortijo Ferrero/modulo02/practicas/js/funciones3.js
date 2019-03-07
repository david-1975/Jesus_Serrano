// JavaScript Document

// metodo split()

function convertir(){
	var colores = prompt("Introduce 5 colores");
	var matriz = colores.split(" ");
	
	alert(matriz + " es del tipo " + typeof(matriz)+ " y antes era de tipo " + typeof(colores));
	
	
	}
	
	
	
//metodo toString()

function acadena() {
	var frutas = ["mandarina", "melón","sandía", "uvas"];
	var cadena =frutas.toString()
	
	alert(frutas + " es de tipo: " + typeof(frutas) + "\n" + cadena + " es de tipo: " + typeof(cadena));
	
	
	}
	
	
	
//metodo juntar()

function unir() {
	var frutas = ["mandarina", "melón","sandía", "uvas"];
	var cadena =frutas.join("*|*")
	
	alert(frutas + " es de tipo: " + typeof(frutas) + "\n" + cadena + " es de tipo: " + typeof(cadena));
	
	
	}
	
	
	
	
//metodo eliminar()

function eliminar() {
	var frutas = ["mandarina", "melón","sandía", "uvas"];
	var frutasorig=["mandarina", "melón","sandía", "uvas"];
	var frutas2 =frutas.pop()
	
	alert("Matriz original= " + frutasorig + "\n" + "Matriz después del pop= " + frutas + "\n" + "El elemento eliminado ha sido: " + frutas2);
	
	
	}
	
	
	
	

	
	
//metodo añadir()

function añadir() {
	var frutas = ["mandarina", "melón","sandía", "uvas"];
	var nueva = prompt("La variable frutas es: " + frutas + "\n" + " Añade una nueva, por favor:")
	frutas.push(nueva);
	
	alert("La nueva matriz de frutas es: " + "\n" +frutas);
	
	
	}
	
	
	
	
//metodo shift()

function desplaza() {
	var frutas = ["mandarina", "melón","sandía", "uvas"];
    var frutasoriginal = ["mandarina", "melón","sandía", "uvas"];
	var frutaeli= frutas.shift()
	
	alert("Matriz original= " + frutasoriginal + "\n" + "Matriz después del shift= " + frutas + "\n" + "El elemento eliminado ha sido: " + frutaeli + "\n" + "El elemento en el índice 0 de la matriz es ahora: " + frutas[0]);
	
	
	}
	
	
//metodo unshift()

function añadirprincipio() {
	var frutas = ["mandarina", "melón","sandía", "uvas"];
    var frutasoriginal = ["mandarina", "melón","sandía", "uvas"];
	var nueva = prompt("Las frutas que tenemos ahora son: " + frutasoriginal + "\n" + "Introduce una nueva:");
	frutas.unshift(nueva);
	
	alert("Matriz original= " + frutasoriginal + "\n" + "Matriz después del unshift= " + frutas + "\n" + "El elemento añadido ha sido: " + nueva + "\n" + "El elemento en el índice 0 de la matriz es ahora: " + frutas[0]);
	
	
	}
	
	
//metodo splice()

function anadir() {
	var frutas = ["mandarina", "melón","sandía", "uvas"];	
	var frutasoriginal = ["mandarina", "melón","sandía", "uvas"];
	//var mas = frutas.splice(0, 0, "fresa","kiwi");
	var mas = frutas.splice(1, 2);
	alert("Matriz original= " + frutasoriginal + "\n" + "Matriz después del splice = " + frutas);
	
	
	}
	
	
	
//metodo concat 

function concatmatrices() {
	var nombres1 = ["Sara", "Laura", "María"];
	var nombres2 = ["Javier", "Antonio", "Federico"];	
	var nombres3 = ["Rubén", "Mónica"];
	
	var todosnombres = nombres1.concat(nombres2,nombres3);
	
	alert("La primera matriz es = "+nombres1 +"\n" + "La segunda matriz es = "+ nombres2+ "\n" + "La tercera matriz es = " + nombres3+ "\n"+"La matriz total de nombres es = "+todosnombres);
	
	
	
	}
	
	
	
	
//metodo slice()

function eliminarelementos() {
	var frutas = ["mandarina", "melón","sandía", "uvas","fresas", "kiwi"];	
	var frutasoriginal = ["mandarina", "melón","sandía", "uvas","fresas", "kiwi"];
	//var mas = frutas.splice(0, 0, "fresa","kiwi");
	var rebanada = frutas.slice(2,5);
	alert("Matriz original= " + frutasoriginal + "\n" + "Matriz después del slice = " + rebanada);
	
	
	}
	
	
	
//metodo sort()

function ordenar() {
	var frutas = ["mandarina", "uvas", "melón","sandía", "fresas", "kiwi","albaricoque","brevas"];	
	var frutasoriginal = ["mandarina", "uvas", "melón","sandía", "fresas", "kiwi","albaricoque","brevas"];
	var fruordenada = frutas.sort();
	var fruordenada_ascen = fruordenada.slice();
	
	var frureverse = fruordenada.reverse();
	
	alert("Matriz original= " + frutasoriginal + "\n" + "Matriz después del sort = " + fruordenada_ascen + "\n" + "Matriz ordenada después del reverse = " + frureverse);
	
	
	}
	