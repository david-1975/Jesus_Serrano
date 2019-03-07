// JavaScript Document


// Pulgadas

function pulgadas (){
    var dato = parseInt (document.getElementById ("number1").value);
    var centimetro = dato * 2.54;
     
    document.getElementById ("pulgadas").innerHTML = 
    dato + " pulgadas es igual a: "+ "<br>" + centimetro + " " +" centimetros ";
  
    console.log (pulgadas);
}

// Número par o impar

function  par(){
    var dato = parseInt (document.getElementById ("number2").value);
  if (dato%2==0) {
      dato = " Es par ";
  } else {
      dato = " Es impar ";
  }
    
    document.getElementById ("par").innerHTML = 
    dato;

    console.log (par);
}


// Precio final

function precio(){
    var dato = parseInt (document.getElementById ("number3").value);
    var descuento = (dato * 20)/100;
    var precio = dato - descuento;
    var impuesto = (precio * 21)/100;
    var precioFinal = precio + impuesto;
        
    document.getElementById ("precio").innerHTML = 
   precioFinal;
    console.log (precio);
}


// Byte y bit

function bit(){
    var dato = parseInt (document.getElementById ("number4").value);
    var megabytes  = dato * 1024;
    var kilobytes = megabytes * 1024;
    var bytes = kilobytes * 1024;
    var bit = bytes * 8;
        
    document.getElementById ("bit").innerHTML = 
    dato + " gigabytes es igual a: " + megabytes  + " " + " megabytes "
    + "<br>" + kilobytes  + " " + " kilobytes "
    + "<br>" + bytes  + " " + " bytes "
    + "<br>" + bit  + " " + " bit "
    ;

    console.log (bit);
}

// Días, semanas, meses

function ano(){
    var dato = parseInt (document.getElementById ("number5").value);
    var dias  = dato * 365;
    var semanas = dato * 52.142857142857146;
    var meses = dato * 12;
        
    document.getElementById ("ano").innerHTML = 
    dato + " año es igual a: " + dias   + " " + " dias  "
    + "<br>" + semanas  + " " + " semanas "
    + "<br>" + meses + " " + " meses ";

    console.log (ano);
}

// Velocidad

function velocidad(){
    var dato = parseInt (document.getElementById ("number6").value);
    var metros  = (dato * 1000)/3600;
   
    document.getElementById ("velocidad").innerHTML = 
    dato + " km/h: " + metros   + " " + " metros por segundo ";

    console.log (velocidad);
}


// Coste desplazamiento

function desplazamiento(){
    var dato = parseInt (document.getElementById ("number7").value);
    var euros  = dato * 0.5;
   
    document.getElementById ("desplazamiento").innerHTML = 
    " El coste de recorrer " + dato + " km es : " + euros  + " " + " euros ";

    console.log (desplazamiento);
}

// Espacio de almacén

function espacio(){
    var dato = parseInt (document.getElementById ("number8").value);
    var capacidad  = 1024 / 4.7;
    var almacen = capacidad * dato;
   
    document.getElementById ("espacio").innerHTML = 
    " En un DVD de 4,7 gigabytes caben " + almacen  + " " + " canciones ";

    console.log (espacio);
}

// Distancia

function distancia () {
    
    var kmDistancia = parseInt (document.getElementById ("number9").value);
    var kilometrosporhora = parseInt (document.getElementById ("number10").value);
    var dato = kmDistancia / kilometrosporhora;

    document.getElementById ("distancia").innerHTML = 
    " Para recorrer " + kmDistancia + " km " + " a " + kilometrosporhora  + " km/h " + " empleo " + dato + " horas ";

    console.log (distancia);
}

// Tiempo de descarga

function descarga () {
    
    var dato = parseInt (document.getElementById ("number11").value);
    var tiempoDescarga = dato / 10;
    
    document.getElementById ("descarga").innerHTML = 
    " Para descargar " + dato + " megabytes " + "  con una velocidad de descarga de  10 mbps, tardamos " + tiempoDescarga  + " segundos ";

    console.log (descarga);
}

// Sueldo Neto

function sueldo () {
    
    var dato = parseInt (document.getElementById ("number12").value);
    var sueldoBrutoMes = dato / 14;
    var sueldoIRPF = (sueldoBrutoMes*15)/100;
    var sueldoSS = (sueldoBrutoMes*6.4)/100;
    var sueldoNetoMes = sueldoBrutoMes - (sueldoIRPF + sueldoSS);
    
    document.getElementById ("sueldo").innerHTML = 
    " El sueldo neto mensual a recibir por una persona que cobra " + dato + " euros brutos al año es  " + sueldoNetoMes + " euros/mes " ;

    console.log (sueldo);
}

