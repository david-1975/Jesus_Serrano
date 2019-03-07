// JavaScript Document


// Volumen

function volumen (){
    var dato = parseInt (document.getElementById ("number1").value);
    var decilitro = dato * 10;
    var centilitro = dato * 100;
    var mililitro = dato * 1000;
    
    document.getElementById ("volumen").innerHTML = 
    dato + " litros es igual a: "+ "<br>" + decilitro + " " +" decilitros " 
    +"<br>"+ centilitro + " " + "centilitros"
    + "<br>"+ mililitro + " " + "mililitros";

    console.log (volumen);
}

// Longitud

function longitud(){
    var dato = parseInt (document.getElementById ("number2").value);
    var metros = dato * 1000;
    var centimetros = dato * 100;
    var milimetros = dato * 10;
    
    document.getElementById ("longitud").innerHTML = 
    dato + " kilometros es igual a: " + metros + " " + " metros "
    + "<br>"+ dato + " metros es igual a: " + centimetros + " " + "centimetros" 
    + "<br>"+ dato + " centímetros es igual a: " + milimetros + " " + "milimetros";

    console.log (longitud);
}


// Tiempo

function tiempo(){
    var dato = parseInt (document.getElementById ("number3").value);
    var horas  = dato * 24;
    var minutos = dato * 60;
    var segundos = dato * 60;
        
    document.getElementById ("tiempo").innerHTML = 
    dato + " días es igual a: " + horas  + " " + " horas "
    + "<br>"+ dato + " horas es igual a: " + minutos  + " " + " minutos "
    + "<br>"+ dato + " minutos es igual a: " + segundos + " " + " segundos";
    console.log (tiempo);
}


// Temperatura

function temperatura(){
    var dato = parseInt (document.getElementById ("number4").value);
    var fahrenheit  = (dato * 1.8 ) + 32;
    var kelvin = ( dato + 273.15 );
        
    document.getElementById ("temperatura").innerHTML = 
    dato + " grados centígrados es igual a: " + fahrenheit  + " " + " grados fahrenheit "
    + "<br>"+ dato + " grados centígrados es igual a: " + kelvin  + " " + " grados kelvin ";

    console.log (temperatura);
}

// Peso

function peso(){
    var dato = parseInt (document.getElementById ("number5").value);
    var kilogramos  = dato * 1000;
    var gramos = kilogramos * 1000;
    var miligramos = gramos * 1000;
        
    document.getElementById ("peso").innerHTML = 
    dato + " toneladas es igual a: " + kilogramos   + " " + "kilogramos  "
    + "<br>" + gramos  + " " + " gramos "
    + "<br>" + miligramos + " " + " miligramos ";

    console.log (peso);
}

// Pesaje

function pesaje(){
    var dato = parseInt (document.getElementById ("number6").value);
    var onzas  = dato * 35.274;
    var libras = dato * 2.2046;
    var piedras = dato * 0.1575;
    var kilates =dato * 5000;
        
    document.getElementById ("pesaje").innerHTML = 
    dato + " toneladas es igual a: " + onzas  + " " + " onzas "
    + "<br>" + libras  + " " + " libras "
    + "<br>" + piedras + " " + " piedras "
    + "<br>" + kilates + " " + " kilates ";

    console.log (pesaje);
}

// Distancia

function distancia(){
    var dato = parseInt (document.getElementById ("number7").value);
    var millas  = dato * 0.621371 ;
    var yardas= dato * 1093.61 ;
    var pies = dato * 3280.84 ;
    var pulgadas =dato * 39370.1 ;
        
    document.getElementById ("distancia").innerHTML = 
    dato + " kilómetros es igual a: " + millas  + " " + " millas "
    + "<br>" + yardas  + " " + " yardas "
    + "<br>" + pies + " " + " pies "
    + "<br>" + pulgadas + " " + " pulgadas ";

    console.log (distancia);
}

// Moneda

function moneda(){
    var dato = parseInt (document.getElementById ("number8").value);
    var dolares  = dato * 1.13;
    var libras = dato * 0.88;
    var yen = dato * 128.27 ;
    var yuanes =dato * 7.85;
        
    document.getElementById ("moneda").innerHTML = 
    dato + " euros es igual a: " + dolares + " " + " dolares "
    + "<br>" + libras  + " " + " libras "
    + "<br>" + yen + " " + " yen "
    + "<br>" + yuanes + " " + " yuanes ";

    console.log (moneda);
}

// Velocidad

function velocidad(){
    var dato = parseInt (document.getElementById ("number9").value);
    var millas  = dato * 0.621371;
    var nudos = dato * 0.539957;
    var metros = dato *  0.277778;
    var pies =dato * 0.911344;
        
    document.getElementById ("velocidad").innerHTML = 
    dato + " kilómetros por hora es igual a: " + millas  + " " + " millas "
    + "<br>" + nudos  + " " + " nudos "
    + "<br>" + metros + " " + " metros "
    + "<br>" + pies + " " + " pies ";

    console.log (velocidad);
}
// Áreas

function areas(){
    var dato = parseInt (document.getElementById ("number10").value);
    var hectareas  = dato * 100;
    var acres = dato *247.105 ;
    var millas = dato * 0.386102;
        
    document.getElementById ("areas").innerHTML = 
    dato + " km cuadrados es igual a: " + hectareas  + " " + " hectareas "
    + "<br>" + acres  + " " + " acres "
    + "<br>" + millas + " " + " millas cuadradas";

    console.log (areas);
}