window.onload = function(){
    var nameInput = document.getElementById('name');
    var surNameInput = document.getElementById('surname');
    var idNum = document.getElementById('idNumber');
    var birthDate = document.getElementById('birth');
    var phoneNum = document.getElementById('phone');
    var address = document.getElementById('address');
    var location = document.getElementById('location');
    var postalCode = document.getElementById('postal');
    var passwordInput = document.getElementById('password')
    var passwordConfirm = document.getElementById('passwordValid');
    var emailInput = document.getElementById('email')
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    
    if (localStorage.getItem('email') !== null){
        emailInput.value = localStorage.getItem('email');
        passwordInput.value = localStorage.getItem('password');
        nameInput.value = localStorage.getItem('name');
        surNameInput.value = localStorage.getItem('lastName');
        idNum.value = localStorage.getItem('dni');
        birthDate.value = localStorage.getItem('dob');
        phoneNum.value =localStorage.getItem('phone');
        address.value = localStorage.getItem('address');
        location.value = localStorage.getItem('city');
        postalCode.value = localStorage.getItem('zip');
        passwordConfirm.value = localStorage.getItem('password');
    }

    function validateEmail(email) {
    var regex = new RegExp(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/);
    return regex.test(email);
    }
    emailInput.addEventListener('blur',function () {
    if (validateEmail(emailInput.value)) {
    } else {
        var spanError = emailInput.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Email.';
        spanError.classList.remove('hidden');
    }
    if (emailInput.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    emailInput.addEventListener('focus', function () {
    var spanError = emailInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })
    
    function validateName(name) {
        if (name.length > 3 ) {
            return true
        }else{
        return false
    } 
    }
    nameInput.addEventListener('blur',function () {
    if (validateName(nameInput.value)) {
    } else {
        var spanError = nameInput.parentElement.querySelector('span');
        spanError.textContent = 'Required Name';
        spanError.classList.remove('hidden');
    }
    if (nameInput.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    nameInput.addEventListener('focus', function () {
    var spanError = nameInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })

    function validateLastName(surname) {
        if (surname.length > 3 ) {
            return true
        }else{
        return false
    } 
    }
    surNameInput.addEventListener('blur',function () {
    if (validateLastName(surNameInput.value)) {
    } else {
        var spanError = surNameInput.parentElement.querySelector('span');
        spanError.textContent = 'Required Last Name';
        spanError.classList.remove('hidden');
    }
    if (surNameInput.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    surNameInput.addEventListener('focus', function () {
    var spanError = surNameInput.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })

    function validateId(idNumber) {
        if (idNumber.length > 7) {
            return true
        }else{
        return false
    } 
    }
    idNum.addEventListener('blur',function () {
    if (validateId(idNum.value)) {
    } else {
        var spanError = idNum.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Id Number. Required';
        spanError.classList.remove('hidden');
    }
    if (idNum.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    idNum.addEventListener('focus', function () {
    var spanError = idNum.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })

    function validateNumber(phoneNum) {
        if (phoneNum.length > 9) {
            return true
        }else{
        return false
    } 
    }
    phoneNum.addEventListener('blur',function () {
    if (validateNumber(phoneNum.value)) {
    } else {
        var spanError = phoneNum.parentElement.querySelector('span');
        spanError.textContent = 'Invalid Phone Number. Required';
        spanError.classList.remove('hidden');
    }
    if (phoneNum.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    phoneNum.addEventListener('focus', function () {
    var spanError = phoneNum.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })

    function validateBirth(birthDate) {
        if (birthDate.length > 9) {
            return true
        }else{
        return false
    } 
    }
    birthDate.addEventListener('blur',function () {
    if (validateBirth(birthDate.value)) {
    } else {
        var spanError = birthDate.parentElement.querySelector('span');
        spanError.textContent = 'Required Date';
        spanError.classList.remove('hidden');
    }
    if (birthDate.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    birthDate.addEventListener('focus', function () {
    var spanError = birthDate.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })

    function validateLocation(location) {
        if (location) {
            return true
        }else{
        return false
    } 
    }
    location.addEventListener('blur',function () {
    if (validateLocation(location.value)) {
    } else {
        var spanError = location.parentElement.querySelector('span');
        spanError.textContent = 'Required Location.';
        spanError.classList.remove('hidden');
    }
    if (location.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    location.addEventListener('focus', function () {
    var spanError = location.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })

    function validateAddress(address) {
        if (address) {
            return true
        }else{
        return false
    } 
    }
    address.addEventListener('blur',function () {
    if (validateAddress(address.value)) {
    } else {
        var spanError = address.parentElement.querySelector('span');
        spanError.textContent = 'Required Address.';
        spanError.classList.remove('hidden');
    }
    if (address.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    address.addEventListener('focus', function () {
    var spanError = address.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })
    
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
    }
    if (minuscula && mayuscula && numeros)
        return true  
    else 
        return false
    }

    passwordConfirm.addEventListener('blur',function () {
        if (!validatePassword(passwordConfirm.value)) {
            var spanError = passwordConfirm.parentElement.querySelector('span');
            spanError.textContent = 'Invalid Password';
            spanError.classList.remove('hidden');
        }
        })
        passwordConfirm.addEventListener('focus', function () {
        var spanError = passwordConfirm.parentElement.querySelector('span');
        spanError.classList.add('hidden');
        })
    
        function validatePassword(passwordValid) {
        var minuscula = false
        var mayuscula = false
        var numeros = false
        if (!password){
            return false
        }
        for (var i=0; i<passwordValid.length; i++) {
            if ((passwordValid[i] >= 'a' && passwordValid[i] <= 'z') || (passwordValid[i] >= 'A' && passwordValid[i]
                <= 'Z') || (passwordValid[i] >=
                '0' && passwordValid[i] <= '9'))  {
            if (passwordValid[i] >= 'a' && passwordValid[i] <= 'z')
                minuscula = true
            if (passwordValid[i] >= 'A' && passwordValid[i] <= 'Z')
                mayuscula = true
            if (passwordValid[i] >= '0' && passwordValid[i] <= '9')
                numeros = true
            }
        }
        if (minuscula && mayuscula && numeros)
            return true  
        else 
            return false
    }

    function validateCode(postal) {
        if (postal.length > 3 && postal.length < 5) {
            return true
        }else{
        return false
    } 
    }
    postalCode.addEventListener('blur',function () {
    if (validateCode(postalCode.value)) {
    } else {
        var spanError = postalCode.parentElement.querySelector('span');
        spanError.textContent = 'Postal Code Required; 4 numbers';
        spanError.classList.remove('hidden');
    }
    if (postalCode.value.indexOf('') === -1){
        alert('Wrong');
    }
    })
    postalCode.addEventListener('focus', function () {
    var spanError = postalCode.parentElement.querySelector('span');
    spanError.classList.add('hidden');
    })

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
                localStorage.setItem('dob', birthDate.value);
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
}