
var nameInput = name;
var surNameInput = surname;
var idNum = idnumber;
var birthDate = birth;
var phoneNum = phone
var address = addr
var location = locate 
var postalCode = postal
var passwordConfirm = confirmPass
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    var regex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    return regex.test(email);
}

var emailInput = document.getElementById('email')
emailInput.addEventListener('blur',function () {
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

emailInput.addEventListener('focus', function () {
    var spanError = emailInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
})
    function validatePassword(password) {
    if (!password){
        return false
    }
    for (var i=0; i<password.length; i++) {
        var char = password.charCodeAt(i);
        if (!(char >= 97 && char <= 122) && !(char >= 65 && char <= 90) && !(char >= 48 && char <= 57)) {
            return false
        }
    }
    return true
  }
  
var passwordInput = document.getElementById('password')
    passwordInput.addEventListener('blur',function () {
    if (!validatePassword(passwordInput.value)) {
        var spanError = passwordInput.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Password';
        spanError.classList.remove('hidden');
    }
})

passwordInput.addEventListener('focus', function () {
    var spanError = passwordInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
})

function validatePassword(password) {
    var minuscula = false
    var mayuscula = false
    var numeros = false
    if (!password){
        return false
    }
    for (var i=0; i<password.length; i++) {
        if ((password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z') || (password[i] >=
            '0' && password[i] <= '9'))  {
        if (password[i] >= 'a' && password[i] <= 'z')
            minuscula = true
        if (password[i] >= 'A' && password[i] <= 'Z')
            mayuscula = true
        if (password[i] >= '0' && password[i] <= '9')
            numeros = true
        }
    }   console.log(minuscula, mayuscula, numeros)
    if (minuscula && mayuscula && numeros)
        return true  
    else 
        return false
}

var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault()
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        alert('Valid email and valid password');
        fetch(' https://api-rest-server.vercel.app/signup?email=' + emailInput.value + '&password=' 
        + passwordInput.value + '&name=' + nameInput.value + '&surname=' + surNameInput.value + '&idNumber=' 
        + idNum.value + '&birth=' + birthDate.value + '&phone=' + phoneNum.value + '&addr=' + address.value + '&locate='
        + location.value + '&postal=' + postalCode.value + '&confirmPass=' + passwordConfirm.value)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            if(data.success){
                alert(data.msg)
            } else{
                if(data.msg){
                    throw new Error(data.msg)
                }
            }
        })
        .catch(function(error){
            alert(error)
        });
    }
})

function isValidDate(dateString) {
    var dateObj = new Date(dateString);
    return !isNaN(dateObj.getTime()) && dateObj.toString() !== 'Invalid Date';
  }
  
  var button = document.querySelector('button[type="submit"]');
    button.addEventListener('click', function(event) {
    event.preventDefault()
});