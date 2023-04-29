
var title = document.getElementsByClassName('.title');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    var regex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    return regex.test(email);
}

var emailInput = document.getElementById('email')
emailInput.addEventListener('blur',function (event) {
    if (validateEmail(emailInput.value)) {
        alert('Valid Email')
    } else {
        var spanError = emailInput.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Email';
        spanError.classList.remove('hidden');
    }
    if (emailInput.value.indexOf('') === -1){
        console.log('Wrong');
    }
})

emailInput.addEventListener('focus', function (event) {
    var spanError = emailInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
})
 var pass = getElementById('password')
function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  }
  
var passwordInput = document.getElementById('password')
passwordInput.addEventListener('blur',function (event) {
    if (validatePassword(passwordInput.value)) {
        alert('Password valid')
    } else {
        var spanError = passwordInput.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Password';
        spanError.classList.remove('hidden');
    }
})

passwordInput.addEventListener('focus', function (event) {
    var spanError = passwordInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
})

function validatePassword(password) {
    if (!password){
        return false
    }
    for (var i=0; i<password.length; i++) {
        var char = password.charCodeAt(i);
        if (!(char >= 97 && char <= 122) || !(char >= 48 && char <= 57) || !(char >= 65 && char <= 90)) {
            return false
        }
    }
    return true
}

var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault()
})

function isValidDate(dateString) {
    var dateObj = new Date(dateString);
    return !isNaN(dateObj.getTime()) && dateObj.toString() !== 'Invalid Date';
  }
  console.log(isValidDate());
  console.log(isValidDate());
  