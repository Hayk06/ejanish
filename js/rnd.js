
const password = document.getElementById('pass');
const login = document.getElementById('login');


function myFunction() {
    if (password.value == '' || login.value == '' ) {
    alert("Please fill in these fields");

    }
    else{

    window.open("home.html")
    }
    }

