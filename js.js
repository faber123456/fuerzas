
var date = Number(prompt("Indica el numero de datos"));
document.write("El numero de datos es: " + date);
console.log("El numero de datos es:" + date);

var x = Number(prompt("Ingresa numero guia"));
document.write("El numero x es: " + x);
console.log("el numero x es:" + x);

var rep = new Array();
var rnm = new Array();
var rfp = new Array();
var rfn = new Array();
var narray = new Array();

for (let i = 0; i < date; i++) {
    var y = Number(prompt("Ingresa numero guia"));
    document.write("El numero x es: " + x);
    document.write("El numero y es: " + y);
    console.log("el numero x es:" + x);
    console.log("el numero y es:" + y);
    if (x === y) {
        rep.push(i + 1);
        rnm.push(x);
        document.write("Repericion en el evento : " + i);
        console.log("Repeticion en el evento: " + i);
        document.getElementById('rtas').innerHTML = 'Rep: ' + '[ ' + rep + ' ]' + '( ' + rnm + ' )  ';
        narray.push(x,y);


    } else if ((x % 2 === 0) && (x - 1 === y) || (x !== 0) && (x + 1 === y)) {

        rfp.push(i + 1);
        rfn.push(x,y);
        narray.push(x,y);

        document.getElementById('rfps').innerHTML = 'Rfp: ' + '[ ' + rfp + ' ]' + '( ' +rfn + ' )';


    }
    x = y;


}