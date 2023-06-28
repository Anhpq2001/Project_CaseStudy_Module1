// get value from textbox
let usernameValue = document.getElementById("usernameId");
let phoneNumberValue = document.getElementById("phoneNumberId");
let passwordValue = document.getElementById("passwordId");
let passwordConfirmValue = document.getElementById("passwordConfirmId");
var form = document.querySelector("form");
// class User
class User{
    name;
    phoneNumber;
    password;
    constructor(name, phoneNumber, password) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}
//  function check error
function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.add("error");
    small.innerText = message;
}
// function check successful
function showSuccessful(input){
    let parent = input.parentElement;
    let small = parent.querySelector("small");
    parent.classList.remove("error");
    small.innerText = "";
}
// function check empty
function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
       input.value = input.value.trim();
        if(!input.value){
            isEmptyError = true;
            showError(input, "Not Empty");
        }else{
            showSuccessful(input);
        }
    });
    return isEmptyError;
}
// function check digit
function checkDigit(input, min, max){
    input.value = input.value.trim();
    if(input.value.length <= min){
        showError(input, "Must have 10 digits");
        return true;
    }
    else if(input.value.length >= max){
        showError(input, "Must have 10 digits");
        return true;
    }

    showSuccessful(input);

    return false;
}
// function check match password
function checkMatchPassword(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput, "Confirm password not match");
        return true;
    }
    return false;
}
// even
form.addEventListener("submit", function(e){
    e.preventDefault();
    let isEmptyError = checkEmptyError([usernameValue, phoneNumberValue, passwordValue, passwordConfirmValue]);
    let checkDigits = checkDigit(phoneNumberValue, 9, 11);
    let matchpassword = checkMatchPassword(passwordValue, passwordConfirmValue);
    if(isEmptyError || checkDigits || matchpassword){
        alert("Enter data error");
    }else{
        let user = new User();
        user.name = usernameValue.value;
        user.phoneNumber = phoneNumberValue.value;
        user.password = passwordValue.value;
        console.log(user);
        localStorage.setItem("USER_INFO", JSON.stringify(user));
        alert("SignIn Successfull!");
    }
})




