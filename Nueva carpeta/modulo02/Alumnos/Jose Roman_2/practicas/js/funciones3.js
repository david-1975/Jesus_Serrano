// JavaScript Document


// Método split()
function convertir (){
	
	var colores = prompt("Introduce 5 colores");
	var matriz = colores.split(" ");
	alert (matriz+"\n"+typeof(colores)+"\n"+typeof(matriz));
	
}

// Método toString()
function frutas() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var cesto =  frutas.toString();
	alert("frutas"+"\n"+typeof(frutas)+"\n"+typeof(cesto));
}

// Método join()
function unir() {
	var frutas = ["manzana","pera","naranja","fresa"];
	var cesto =  frutas.join(" * ");
	alert("frutas"+"\n"+typeof(frutas)+"\n"+ cesto+"\n"+typeof(cesto)+"\n");
}
// Método pop()
function elimina() {
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var cadena = fruits.pop();
    alert(fruits +"\n"+typeof(frutas)+"\n"+ cadena+"\n"+typeof(cadena)+"\n");
	
}
// Método push()
function adicion() {
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var cadena = fruits.push("Kiwi");
    alert(fruits+cadena+"\n"+typeof(fruits)+"\n"+ typeof(cadena) );
}
// Método shift()
function cambio() {
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var cadena = fruits.shift();
    alert(fruits+"\n"+"Elimina: "+cadena+"\n"+typeof(fruits)+"\n"+ typeof(cadena) );
}
// Método unshift()
function principio() {
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	alert(fruits);
	var cadena = fruits.unshift("Kiwi","Lemon");
    alert(fruits+"\n"+"Añade: "+cadena+"\n"+typeof(fruits)+"\n"+ typeof(cadena) );
}
// Método splice()
function empalme() {
	var fruits = ["Banana", "Orange", "Apple", "Mango"];
	var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
	var cadena = fruits.splice(2,0,"Kiwi","Lemon");/* 1º la posicion donde añadir y el 2º eliminar.-Ejem.= var removed = fruits.splice(2, 2, "Lemon", "Kiwi"); añade 2 y borra otras dos y fruits.splice(0, 1); sin elementos
	quita el primero elemento cada vez que se ejecuta.*/
	alert(fruits+"\n"+fruits2+"\n"+cadena);
}
// Método concat()
function concatenar() {
	var arr1 = ["Cecilie", "Lone"];
	var arr2 = ["Emil", "Tobias", "Linus"];
	var arr3 = ["Robin", "Morgan"];
	var myChildren = arr1.concat("+",arr2,"+", arr3);
	alert( myChildren);
}
// Método slice()
function extrae() {
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.slice(1);// extrae desde la pos 1º hasta el fin
	//var citrus = fruits.slice(1,3); extrae desde pos 1 hasta la 3 sin incluirla
	alert( fruits+"\n"+citrus);
}
// Método sort()
function ordenar() {
	var frutas = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var citrus = fruits.sort();
	alert(frutas+"\n"+citrus+"\n"+alreves);
}
// Método reverse()
function inversa() {
	var frutas = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
	var ordena =  (fruits.sort()).slice();
	var citrus = fruits.reverse();
	alert(ordena+"\n"+citrus);
}