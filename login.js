// Importing Navbar
$(function () {
    $("#nav-placeholder").load("navbar.html");
});


let LoginForm = document.querySelector("#loginForm")
LoginForm.addEventListener("submit", login)

let LoginData = JSON.parse(localStorage.getItem('Users')) || []

function login() {
    event.preventDefault()
    let isLogged;
    if(LoginForm.email.value =="" || LoginForm.password.value == ""){
        alert("Please Fill All The Details")
        return
    }
    LoginData.forEach(user => {
        if (LoginForm.email.value == user.email && LoginForm.password.value == user.password) {
            alert("Welcome Back! "+user.firstName+" "+user.lastName+" Redirecting To Dashboard")
            isLogged = user.firstName
            localStorage.setItem('isLogged',isLogged)
            window.location.href = 'index.html'
            return
        }
    });
    if (isLogged==undefined) {
        alert("Invalid Credentials Please Try Again")
    }
}