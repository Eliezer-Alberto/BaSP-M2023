/* 4. If-Else */

console.log('Exercise 4 - If-Else');

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual 
que 0,5 mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje
“Lower than 0,5”. */

console.log('4.a');

var anyNumber = Math.random();
if (anyNumber >= 0.5) {
    alert('The number: ' + anyNumber + ' Greater than or equal to 0,5');
} else {
    alert('The number: ' + anyNumber + ' Lower than 0,5');
}

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
i.   “Bebe” si la edad es menor a 2 años;
ii.  “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv.  “Joven” entre 20 y 30 años;
v.   “Adulto” entre 31 y 60 años;
vi.  “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años. */

console.log('4.b');

var age = 28; 
console.log('The age number is: ' + age);
if (age < 2) {
    alert('The age number: ' + age + ' The result is: Bebe');
} else if (age > 2 && age < 12) {
    alert('The age number: ' + age + ' The reslt is: Niño');
} else if (age > 13 && age < 19) {
    alert('The age number: ' + age + ' The result is: Adolescente');
} else if (age > 20 && age < 30) {
    alert('The age number: ' + age + ' The result is: Joven');
} else if (age > 31 && age < 60) {
    alert('The age number: ' + age + ' The result is: Adulto');
} else if (age > 61 && age < 75) {
    alert('The age number: ' + age + ' The result is: Adulto mayor');
} else {
    alert('The age number: ' + age + ' The result is: Anciano');
}