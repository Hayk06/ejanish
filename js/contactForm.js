const feedbackField = document.getElementById(feedback);
const emailField = document.getElementById(email);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function required() {
    if (emailField.value === '') {
        alert("This field is required");
    }

    if(!emailRegex(emailField.value)) {
        alert("Enter a valid email");
    }

    if(feedbackField.value === '') {
        alert("This field is required");
    }
}
