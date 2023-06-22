// get value from textbox
let usernameValue = document.getElementById("usernameID").value;
let phoneNumberValue = document.getElementById("phoneNumberId").value;
let emailValue = document.getElementById("emailId").value;
let locationValue = document.getElementById("locationID").value;
let passwordValue = document.getElementById("passwordID").value;
let passwordConfirmValue = document.getElementById("passwordConfirmID").value;

// class define user object
class user {
    name;
    phoneNumber;
    email;
    location;
    password;
    constructor(name, phoneNumber, email, location, password) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.location = location;
        this.password = password;
    }
}
// get fieldName
function getFieldName(input){
    return input.id.chec
}
// show input error message
function showError(input){

}
// show input successfull message
function showSuccessfull(input){

}
// check input length
function checklength(input, min, max){
    if(input.length < min){
        showError();
    }else if(input.length > max){
        showError();
    }else{
        showSuccessfull();
    }
}

// check required fields

// check password match
function checkPassMatch(input1, input2){
    if(input1 != input2){
        showError();
    }
}