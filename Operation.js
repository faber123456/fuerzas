/* global n */

var posiciones = parseInt(prompt("Ingrese numero de posiciones"));
document.write("Espacios para consultar " + posiciones);
document.write("\n");
document.write("\n");
document.write("\n");



var g = parseInt(prompt("Ingrese numero guia"));
var cr = 0;
for (let i = 0; i < posiciones; i++) {
    var y = parseInt(prompt("Ingrese siguiente numero"));

    if (g === y) {

        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("\n");

        document.write(" Evento Rep " + "[ " + cr + " ]" + "numero " + "( " + y + " )");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("\n");

        cr = 0;

        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("saliente " + "[ " + g + " ]" + "  Entrante " + "[ " + y + " ]");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write(" Evento Rep " + "[ " + cr + " ]" + "numero " + "( " + y + " )");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("\n");


        y = g;
    } else {

        cr++;
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("saliente " + "[ " + g + " ]" + "  Entrante " + "[ " + y + " ]");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write(" CNR " + "[ " + cr + " ]" + "numero " + "( " + y + " )");
        document.write("\n");
        document.write("\n");
        document.write("\n");
        document.write("\n");


        g = y;
    }


}
    