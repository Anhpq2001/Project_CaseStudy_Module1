// get value from textbox
let usernameValue = document.getElementById("usernameId").value;
let phoneNumberValue = document.getElementById("phoneNumberId").value;
let passwordValue = document.getElementById("passwordId").value;
let passwordConfirmValue = document.getElementById("passwordConfirmId").value;
let form = document.querySelector("form");
// function to show error
function showError(input, message){
    //let parent = input.parentElement;
    let small = document.querySelector("small");
    small.classList.add("error");
    small.innerText = message;
}
// function to show successfull
function showSuccessfull(input){
    //let parent = input.parentElement;
    let small = document.querySelector("small");
    small.classList.remove("error");
    small.innerText = "";
}
// function check empty
function checkEmpty(listInput){
    let isEmptyValue =  false;
    listInput.forEach(input =>{
        input = input.value;

        if(!input){
            showError(input,"Not empty!");
            isEmptyValue = true;
        }else{
            showSuccessfull(input);
        }
    });
    return isEmptyValue;
}
// function check length of value
function checkLength(){

}
// function compare password with passwordConfirm
function checkPasswordConfirm(password, passwordConfirm){
    let isEqual = false;
    if(password === passwordConfirm){
        isEqual =  true;
    }else{
        showError(passwordConfirm, "Not fit with password")
    }
}
// fuction to check even
form.addEventListener("submit", function (e){
    e.preventDefault();
    checkPasswordConfirm(password, passwordConfirmValue);
})