window.onload = function(){
    var nameInput = document.getElementById('name');
    var surNameInput = document.getElementById('surname');
    var idNum = document.getElementById('idNumber');
    var birthDate = document.getElementById('birth');
    var phoneNum = document.getElementById('phone');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var postalCode = document.getElementById('postal');
    var passwordConfirm = document.getElementById('passwordValid');
    var emailInput = document.getElementById('email')
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    function validateEmail(email) {
    var regex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    return regex.test(email);
    }
    emailInput.addEventListener('blur',function () {
    if (validateEmail(emailInput.value)) {
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
    nameInput.addEventListener('blur', function () {

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
    }
    if (minuscula && mayuscula && numeros)
        return true  
    else 
        return false
}
    var form = document.getElementById('form');
    form.addEventListener('submit', function(event) {
    event.preventDefault()
    var date = birthDate.value;
    var dateEl = date.split('-');
    var formattedDate = dateEl[1]+'/'+dateEl[2]+'/'+dateEl[0];
    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
        alert('Your solicitude was successful. Welcome to MegaRocket!');
        fetch('https://api-rest-server.vercel.app/signup?email=' 
            + emailInput.value + '&password=' 
            + passwordInput.value + '&name=' 
            + nameInput.value + '&lastName=' 
            + surNameInput.value + '&dni=' 
            + idNum.value + '&dob=' 
            + formattedDate + '&phone=' 
            + phoneNum.value + '&address=' 
            + address.value + '&city='
            + location.value + '&zip=' 
            + postalCode.value + '&password=' 
            + passwordConfirm.value)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            if(data.success){
                alert(data.msg)
                localStorage.setItem('email', emailInput.value);
                localStorage.setItem('password', passwordInput.value);
                localStorage.setItem('name', nameInput.value);
                localStorage.setItem('lastName', surNameInput.value);
                localStorage.setItem('dni', idNum.value);
                localStorage.setItem('dob', formattedDate.value);
                localStorage.setItem('phone', phoneNum.value);
                localStorage.setItem('address', address.value);
                localStorage.setItem('city', location.value);
                localStorage.setItem('zip', postalCode.value);
                localStorage.setItem('password', passwordConfirm.value);
            } else{
                alert('Something went wrong. ' + data.msg)
            var error='';
            for (var i = 0; i < data.errors.length; i++) {
                error=error +' '+ JSON.stringify(data.errors[i].msg);
            }
                throw new Error(error) 
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
}