var f = document.getElementById('question');
var email = document.getElementById('lname');
var emailR = document.getElementById('fname');

function required() {
    if (f.value == '' || email.value == '' || emailR == '') {
        alert("All fields are required");
    }

    else{
    window.open("home.html");
    }
    }





