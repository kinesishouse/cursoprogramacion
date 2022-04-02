var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
// para tener un ciclo y formar varias lineas
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#AAA";

while( l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l +1);
    dibujarLinea("colorcito", 0, yi, xf, 300);
    l = l + 1;
}

dibujarLinea("colorcito", 1, 1, 1, 300);
dibujarLinea("colorcito", 1, 299, 299, 299);


function dibujarLinea(color, xinicial, yinicial, xifinal, yfinal)
{

lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicial, yinicial);
lienzo.lineTo(xifinal, yfinal);
lienzo.stroke();
lienzo.closePath();

}