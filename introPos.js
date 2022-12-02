function introPos(miArray, ce, dato, pos) {
    var index;
    for (index = ce; index >= pos; index--)
        miArray[index + 1] = miArray[index];
    miArray[pos] = dato;
    ce += 1;
    return ce;
}
var arreglo = [1, 2, 3, 4, 5];
console.log("***************************** Arreglo original ");
arreglo.forEach(function (element) {
    return console.log("".concat(arreglo.indexOf(element), ") ").concat(element));
});
introPos(arreglo, arreglo.length - 1, 18, 2);
console.log("***************************** Ingreso el 18 en la segunda posicion");
arreglo.forEach(function (element) {
    return console.log("".concat(arreglo.indexOf(element), ") ").concat(element));
});
