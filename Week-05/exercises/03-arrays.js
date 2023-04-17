/* 2. Arrays */

    console.log('Exercise 3 - Arrays');

    /* a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

    console.log('3.a');
    
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"];
    console.log('The months 5 and 11 are: ' + months[4], 'and', months[10]);

    /* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

    console.log('3.b');
    
    console.log('The alphabetic order of months is: ' + months.sort());

    /* c. Agregar un elemento al principio y al final del array (utilizar unshift y push). */

    console.log('3.c');

    months.unshift('January');
    months.push('December');
    console.log('The result is: ' + months);

    /* d. Quitar un elemento del principio y del final del array (utilizar shift y pop). */

    console.log('3.d');

    months.shift('January');
    months.pop('December');
    console.log('The result is: ' + months);

    /* e. Invertir el orden del array (utilizar reverse). */

    console.log('3.e');

    months.reverse();
    console.log(months);

    /* f. Unir todos los elementos del array en un único string donde cada mes este
    separado por un guión - (utilizar join). */

    console.log('3.f');

    console.log(months.join('-'));

    /* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

    console.log('3.f');

    months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"];
    var fewMonths = months.slice(4,11)
    console.log(fewMonths);

    /* Exercise 03 finished */