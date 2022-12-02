
type arrayDeEnteros = Array<number>;

function introPos(miArray: arrayDeEnteros, ce: number, dato: number, pos: number): number {

    let index: number;


    for (index = ce; index >= pos; index--)
        miArray[index + 1] = miArray[index]
    miArray[pos] = dato;
    ce += 1;

    return ce;
}

let arreglo: number[] = [1, 2, 3, 4, 5]

console.log("***************************** Arreglo original ");

arreglo.forEach(element =>
    console.log(`${arreglo.indexOf(element)}) ${element}`)
);

introPos(arreglo, arreglo.length - 1, 18, 2);

console.log("***************************** Ingreso el 18 en la segunda posicion");

arreglo.forEach(element =>
    console.log(`${arreglo.indexOf(element)}) ${element}`)
);
