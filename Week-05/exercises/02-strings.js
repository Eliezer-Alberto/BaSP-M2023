
/* 2. Strings */

    console.log('Exercise 2 - Strings')

    /* a. Crear una variable de tipo string con al menos 10 caracteres y 
    convertir todo el texto en mayúscula (utilizar toUpperCase). */
    
    console.log('2.a')
    
    var upName = 'radium rocket';
    console.log(upName);
    console.log(upName.toUpperCase());

    /* b. Crear una variable de tipo string con al menos 10 caracteres y
    generar un nuevo string con los primeros 5 caracteres guardando el resultado
    en una nueva variable (utilizar substring) */    
    
    console.log('2.b') 
    
    var nickName = 'Albertirry';
    console.log(nickName);
    var resultFive = (nickName.substring(0, 5));
    console.log('The result of this substring is: ' + resultFive);

    /* c. Crear una variable de tipo string con al menos 10 caracteres y generar 
    un nuevo string con los últimos 3 caracteres guardando el resultado en una 
    nueva variable (utilizar substring). */
    
    console.log('2.c')
    
    var nameOne = 'Radium Rocket';
    console.log(nameOne);
    var resultThree = (nameOne.substring(10, 13));
    console.log('The result of this substring is: ' + resultThree);
    
    /* d. Crear una variable de tipo string con al menos 10 caracteres y generar
    un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
    Guardar el resultado en una nueva variable (utilizar substring, toUpperCase,
    toLowerCase y el operador +). */
    
    console.log('2.d')
    
    var soft = 'softwareDev';
    var softWare = soft.substring(0,1).toUpperCase(0) + (soft.substring(1,11).toLowerCase(1,11));
    console.log(softWare);

    /* e. Crear una variable de tipo string con al menos 10 caracteres 
    y algun espacio en blanco. Encontrar la posición del primer espacio 
    y guardarla en una variable (utilizar indexOf). */

    console.log('2.e')
    
    var name1 = 'Eliezer Alberto';
    var resul = (name1.indexOf(' '));
    console.log('The result is: ' + resul);

    /* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primer letra de
    ambas palabras en mayúscula y las demas letras en minúscula (Utilizar indexOf,substring, toUpperCase,
    toLowerCase y el operador +). */
    
    console.log('2.f');
    
    var finalString = 'software professional';
    var strOne = finalString.toUpperCase(0).substring(0,1) + (finalString.substring(1,8).toLowerCase(1,8));
    var strSpace = finalString.indexOf(' ');
    var strTwo = finalString.toUpperCase(9).substring(9,10) + (finalString.substring(10,21).toLowerCase(10,21));
    console.log(strOne);
    console.log(strSpace);
    console.log(strTwo);
    console.log(strOne + ' ' + strTwo);

    /* Exercise 02 finished */