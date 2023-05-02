var login = document.getElementsByClassName('.main-login')
var signin = document.getElementsByClassName('.sign-in');
var title = document.getElementsByClassName('.title');
var contLogin = document.getElementsByClassName('.cont-login');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
function validateEmail(email) {
    var regex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    return regex.test(email);
}
function validatePassword(password) {
    var minuscula = false
    var mayuscula = false
    var numeros = false
    if (!password){
        return false
    }
    for (var i=0; i<password.length; i++) {
        if ((password[i] >= 'a' && password[i] <= 'z') || (password[i] >= 'A' && password[i] <= 'Z') || (password[i] >= '0' && password[i] <= '9'))  {
        if (password[i] >= 'a' && password[i] <= 'z')
            minuscula = true
        if (password[i] >= 'A' && password[i] <= 'Z')
            mayuscula = true
        if (password[i] >= '0' && password[i] <= '9')
            numeros = true
        }
    }
    if (minuscula && mayuscula && numeros)
        return true  
    else 
        return false
}
var emailInput = document.getElementById('email')
emailInput.addEventListener('blur',function (event) {
    if (!validateEmail(emailInput.value)) {
        var spanError = emailInput.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Email';
        spanError.classList.remove('hidden');
    }
})
emailInput.addEventListener('focus', function (event) {
    var spanError = emailInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
})
var passwordInput = document.getElementById('password')
passwordInput.addEventListener('blur',function (event) {
    if (!validatePassword(passwordInput.value)) {
        var spanError = passwordInput.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Password';
        spanError.classList.remove('hidden');
    }
})
passwordInput.addEventListener('focus', function (event) {
    var spanError = passwordInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
})
var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault()
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        alert('Your solicitude was successful. Welcome to MegaRocket!');
        fetch('https://api-rest-server.vercel.app/login?email=' 
        + emailInput.value + '&password=' 
        + passwordInput.value)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            if(data.success){
                alert(data.msg)
                localStorage.setItem('email', emailInput.value);
                localStorage.setItem('password', passwordInput.value);
            } else{
                alert('Something went wrong. ' + data.msg)
            }
        })
        .catch(function(error){
            alert(error)
        });
    }
});

