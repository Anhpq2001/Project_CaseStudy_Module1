let username = document.getElementById("username");
let password = document.getElementById("password");
// ham check validate
function checkValue(){
    let data = JSON.parse(localStorage.getItem("USER_INFO"));
    console.log(data.phoneNumber)
    console.log(data.password)
    if(data.phoneNumber === username.value && data.password === password.value){
        window.location.replace("../Html/index.html");
    }else {
        alert("Password incorrect!");
    }
}
