let feedbackField = document.getElementsByClassName(feedbackField);
let emailField = document.getElementsByClassName(emailField);
let validationEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function required() {
    if (emailField.value === '') {
        alert("This field is required");
    }

    if(!validationEmail(emailField.value)) {
        alert("Enter a valid email");
    }

    if(feedbackField.value === '') {
        alert("This field is required");
    }
}
