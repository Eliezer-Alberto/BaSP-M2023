var newElement = document.createElement('Input');
newElement.setAttribute('name', 'myInput');


var emailInput = document.querySelector('input[email="email"]')
emailInput.onblur = function () {
    console.log('Blur')
}
//     emailInput.classList.add('backround-color-black')
// }