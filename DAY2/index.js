// 1
let arrayVacio =[];
// 2
let arrayNumeros =[0,1,2,3,4,5,6,7,8,9];
// 3
let arrayNumerosPares = [0,2,4,6,8];
// 4
let arrayBidimensional = [[0,1,2],['a','b','c']];
// 5
function suma (a, b){
   return a + b;
};
// 6
function potenciacion(a,b){
    return a ** b;
};
// 7
function separarPalabras(string){
    return string.split(" ");
}
// 8
function repetirString( string, a){
   return string.repeat(a)
}
// 9
function esPrimo(a){
    for(let i = a-1; i > 1; i--){
        if (a % i === 0){
            return false;
        }
    }
    return true;
};
// 10
function ordenarArray (array){
    return array.sort();
}
// 11
function obtenerPares(array){
   for(let i = 0; i < array.length; i++){
        if((array[i] % 2) !== 0){
            array.splice(i,1);
            i--;
        } 
   }
   return array;
}
// 12
function pintarArray(array){
   return JSON.stringify(array).replace(/,/g, ', ')
   
}
// 13
function arrayMapi(array, f){
    return res=array.map(element =>f(element));
}
// 14
function eliminarDuplicados(array){
return Array.from(new Set(array))//Ejemplo de Miguel, repetir
}
// 15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
// 16
let holaMundo = ["Hola", "Mundo"];
// 17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
// 18
let arrayDeArrays = [[756, "nombre"], [225, "apellido"], [298, "direccion"]];
// 19
function multiplicacion(a,b){
    return a * b;
}
// 20
function division(a,b){
    return a / b;
}
// 21
function esPar(a){
    if( a% 2 === 0){
        return true;
    }else{
        return false;
    }
}
// 22
let arrayFunciones = [
    suma,
    function resta(a,b){
        return a - b;
    },
    multiplicacion
];
// 23
function ordenarArray2(array){
    return array.sort();
};
// 24
function obtenerImpares(array){
    for(let i = 0; i < array.length; i++){
         if((array[i] % 2) === 0){
             array.splice(i,1);
             i--;
         } 
    }
    return array; 
 };
// 25
function sumarArray(array){
    return array.reduce((a,b)=> a + b, 0)
};
// 26
function multiplicarArray(array){
    return array.reduce((a,b)=> a * b, 1)
};
