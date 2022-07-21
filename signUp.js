// Importing Navbar
$(function () {
    $("#nav-placeholder").load("navbar.html");
});

// SignUp Page

let signUpForm = document.querySelector("#signUpForm")
signUpForm.addEventListener("submit", signUP)

let signUpData = JSON.parse(localStorage.getItem('Users')) || []

function signUP() {
    event.preventDefault()
    let signedUp = false
    signUpData.forEach(user => {
        if (signUpForm.email.value == user.email) {
            alert("You Are Already Registered!")
            signedUp = true
            return
        }
    });
    if (signedUp==false) {
        let signUpObj = {
            firstName: signUpForm.firstName.value,
            lastName: signUpForm.lastName.value,
            email: signUpForm.email.value,
            password: signUpForm.password.value,
        }

        for (key in signUpObj) {
            if (signUpObj[key] == '') {
                alert("Fill All The Details")
            }
        }
        if (signUpForm.password.value == '') {

        } else if (signUpForm.password.value != signUpForm.cpassword.value) {
            alert("Password Not Matched Please ReEnter Your Password")
            return
        }


        signUpData.push(signUpObj)
        localStorage.setItem('Users', JSON.stringify(signUpData))
        alert("Congrats! " + signUpObj.firstName + " You Account Is Created Click On Ok To Login")
        window.location.href = "login.html"
    }else{
        return
    }
}


// Login Page

