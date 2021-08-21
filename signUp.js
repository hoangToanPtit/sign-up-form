
var password = document.querySelector('#password');
var passwordConfirmation = document.querySelector('#confirm-password');

var togglePassword = document.querySelector('#password ~ .toggle-password i');
var togglePasswordConfirmation = document.querySelector('#confirm-password ~ .toggle-password i');

togglePassword.onclick = function(){
    if(this.className == 'far fa-eye-slash'){
        this.className = 'far fa-eye';
        password.type='text';
    }
    else{
        this.className = 'far fa-eye-slash';
        password.type='password';
    }
}

togglePasswordConfirmation.onclick = function(){
    if(this.className == 'far fa-eye-slash'){
        this.className = 'far fa-eye';
        passwordConfirmation.type='text';
    }
    else{
        this.className = 'far fa-eye-slash';
        passwordConfirmation.type='password';
    }
}

// solve userName

function checkEmpty(element){
    if(element.value.trim().length==0)
    return true;
    return false;
}

function checkLength(element, length){
    if(element.value.trim().length>=length)
    return true;
    return false;
}
var btnSubmit = document.querySelector('.form-submit');

function checkSubmit(){
    if(checkUsername && checkEmail && checkPassWord && checkConfirm){
        btnSubmit.classList.remove('invalid');
    }
    else{
        btnSubmit.classList.add('invalid');
    }
}

var checkUsername=false;
var userName = document.querySelector('#fullName');
var messOfUserName = document.querySelector('#fullName ~ .form-message');
var lengthUsername = 6;
userName.onfocus = function(){
    messOfUserName.innerText = '';
}

userName.onblur = function(){
    if(checkEmpty(this)){
        messOfUserName.innerText ='* Enter the username';
    }
    else if(!checkLength(this, lengthUsername)){
        messOfUserName.innerText = `* Username must be at least ${lengthUsername} characters`;
    }
    else{
        checkUsername=true;
        messOfUserName.innerText = '';
    }
    checkSubmit();
}

// solve Email
var checkEmail = false;
var email = document.querySelector('#email');
var messOfEmail = document.querySelector('#email ~ .form-message');
email.onfocus = function(){
    messOfEmail.innerText = '';
}

email.onblur = function(){
    if(checkEmpty(this)){
        messOfEmail.innerText ='* Enter the email';
    }
    else if(!this.value.endsWith('@gmail.com')){
        messOfEmail.innerText = '* Email is not valid';
    } 
    else{
        checkEmail=true;
        messOfEmail.innerText= '';
    }
    checkSubmit();
}

// solve password
var checkPassWord = false;
var lengthPassword = 8;
var messOfPassWord = document.querySelector('#password ~ .form-message');

function confirmPassword(password, confirmPassword){
    if(confirmPassword.value === password.value)
        return true;
    return false;
}

password.onfocus = function(){
    messOfPassWord.innerText = '';
}
password.onblur = function(){
    if(this.value.length==0){
        messOfPassWord.innerText ='* Enter the password';
    }  
    else if(!checkLength(this, lengthPassword)){
        messOfPassWord.innerText = `* Password must be at least ${lengthPassword} characters`;
    }
    else{
        checkPassWord=true;
        messOfPassWord.innerText='';
    }

    if(passwordConfirmation.value.length>0 && this.value.length>0){
        if(!confirmPassword(this, passwordConfirmation)){
            checkConfirm=false;
            messOfConfirmPassword.innerText ='* Repeat password is not correct';    
        }
        else{
            checkConfirm=true;
            messOfConfirmPassword.innerText ='';    
        }
    }
    checkSubmit();
}

//solve confirm password
var checkConfirm = false;
var messOfConfirmPassword = document.querySelector('#confirm-password ~ .form-message');

passwordConfirmation.onfocus = function(){
    messOfConfirmPassword.innerText = '';
}
passwordConfirmation.onblur = function(){
    if(this.value.length==0){
        messOfConfirmPassword.innerText ='* Repeat the password';
    } 
    else if(!confirmPassword(password, this)){
        messOfConfirmPassword.innerText ='* Repeat password is not correct';
    }
    else{
        messOfConfirmPassword.innerText='';
        checkConfirm = true;
    }
    checkSubmit();
}


//solve submit

btnSubmit.onclick = function(e){
    e.preventDefault();
    if(!btnSubmit.className.includes('invalid')){
        var notifyElement = document.querySelector('.notifySubmit');
        notifyElement.classList.remove('invisible');
        setTimeout(() => {
            notifyElement.classList.add('invisible');
            var inputElement = document.querySelectorAll('input');
            for(x of inputElement)
                x.value='';
        }, 1500);
    }
}
