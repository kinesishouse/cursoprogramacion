//var ruta = window.location;
        //document es un objeto en js, write es funcion de document, cuando las funciones son parte de un objeto  se llama metodo
       // document.write("estas en:" + ruta);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.stroke();
lienzo.closePath();