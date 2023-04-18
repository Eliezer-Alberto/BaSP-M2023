/* 6. Functions */

console.log('Exercise 6 - Functions');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, mostrando el valor 
de dicha variable en la consola del navegador. */

console.log('6.a');

function sumFunction(a,b) {
    return a + b;
}
var sumResult = sumFunction(70, 30);
console.log(sumResult);

/* b. Copiar la función suma anterior y agregarle una validación para controlar
si alguno de los parámetros no es un número; de no ser un número, mostrar un alert aclarando 
que uno de los parámetros tiene error y retornar el valor NaN como resultado.  */

console.log('6.b');

function sumFunction(a,b) {
    if (typeof a!='number' || typeof b!='number') {
        alert('There is a mistake with one of the parameters ');
        return NaN;
    } else {
        return a + b; 
    }
}
console.log(sumFunction(50,'A'));

/* c. Crear una función “validateInteger” que reciba un número como parámetro
y devuelva verdadero si es un número entero. */

console.log('6.c');

function validateInteger(c) { 
    return Number.isInteger(c);
}
var c = 10
console.log(Number.isInteger(c));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del
ejercicio 6c.y que valide que los números sean enteros. En caso que haya decimales mostrar un alert
con el error y retornar el número convertido a entero (redondeado). */

console.log('6.d');

function sumFunctionD(a,b) {
    if (typeof a!='number' || typeof b!='number') {
        alert('There is a mistake with one of the parameters ');
        return NaN;
    } else {
        validateInteger(a,b);
        if (validateInteger(a)==true && validateInteger(b)==true) {
            return a + b;
        } else {
            alert('One of the parameters is not an integer number ');
        }
        a = Math.random(a)
        b = Math.random(b)
        return a + b; 
    }
}
console.log(sumFunctionD(70,30));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva
función probando que todo siga funcionando igual que en el apartado anterior. */

console.log('6.e');

function validateInteger(a,b) {
    if ((a)==true && (b)==true) {
        return a + b;
    } else {
        alert('One of the parameters is not an integer number ');
    }
    a = Math.random(a)
    b = Math.random(b)
    return a + b; 
}
function newSum(a,b) {
    if (isNaN(a) || isNaN(b)) {
        alert('There is a mistake with one of the parameters ')
        return NaN;
    } else {
        return validateInteger(a,b);
    }
}
var finalResult = newSum(a=70,b=30);
console.log(finalResult)