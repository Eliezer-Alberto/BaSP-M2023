/* 5. For */

console.log('Exercise 5 - For');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de 
JavaScript para mostrar una alerta utilizando cada una de las palabras. */

console.log('5.a');

var fiveArray = ['leer', 'detenidamente', 'la', 'problematica', 'planteada']
for (var i = 0; i < fiveArray.length; i++) {
    var arResult = fiveArray[i];
    alert(arResult + '!');
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una 
alerta por cada palabra modificada. */

console.log('5.b');

fiveArray = ['leer', 'detenidamente', 'la', 'problematica', 'planteada']
for (var i = 0; i < fiveArray.length; i++) {
    var arResult = fiveArray[i];
    var arrayCap = arResult.substring(0,1);
    var arrayLow = arrayCap.substring(1);
    arrayCap = arrayCap.toUpperCase();
    alert(arrayCap + arrayLow + '!')
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo 
con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta
con la cadena completa. */

console.log('5.c');

var sentence = ' ';
for (var i = 0; i < fiveArray.length; i++) {
    var arResult = fiveArray; [i];
    sentence = sentence + ' ' + arResult;
}   alert(sentence);

/* d. Crear un array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición,
es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 
0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log). */

console.log('5.d');

var emptyArray = [];
for (var i = 0; i < 10; i++) {
    emptyArray.push(i);
}
console.log('The result is: ' + emptyArray);