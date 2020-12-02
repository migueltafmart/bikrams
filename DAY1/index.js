// 1
let variableSinValor;
// 2
let booleano1 = true;
let booleano2 = false;
// 3
const PI = 3.14;
// 4
const TAU = PI * 2;
// 5
let booleanoAnd = booleano1 && booleano2;
// 6
let booleanoNot = !booleano1;
// 7
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2)) ;
// 8
let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;
// 9
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;
// 10
let contarHasta10_2 = 0;
for (i = 0; i < 10; i++) {
    contarHasta10_2++;
};
// 11
let postI = 0;
let postJ = 0;
for (i = 0; i < 11; i++) {
    postI += postJ++;
}
// 12
let sumaPares = 0;
for (i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        sumaPares += i;
    };
};
// 13
let variableValorNumerico = 0;
// 14
const MiNombre = "Miguel";
// 15
const MiNumeroFav = 7;
// 16
let booleanoOr = (booleano1 || booleano2);
// 17
let booleanoMix1 = (booleano1 && (TAU / 2 === PI) || (variableValorNumerico >= MiNumeroFav));
// 18
let seisNoEsNueve = 6 !== 9;
// 19
let booleanoMix2 = ((variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU)));
// 20
let valorSuma = MiNumeroFav + variableValorNumerico;
// 21
let valorResta = MiNumeroFav - variableValorNumerico;
// 22
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
// 23
let valorDivision = MiNumeroFav / 3;
// 24
let contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10++;
};
// 25
let preI = 0;
let preJ = 0;
for (i = 0; i < 11; i++) {
    preI += ++preJ;
};
// 26
let sumaImpares = 0;
for (i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        sumaImpares += i;
    };
};