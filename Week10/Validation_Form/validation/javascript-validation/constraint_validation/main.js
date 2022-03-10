const email = document.createElement("mail");
email.addEventListener("input", function(event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});

//implementation of the custom error validation

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];

const email = document.getElementsById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function(event) {
    // Each time the user types something, we check if the
    // form fields are valid.
    if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ''; //Reset the content of the message
        emailError.className = 'error'; //Reset the visual state
    } else {
        //If there is still an error, show the correct error
        showError();
    }

});

form.addEventListener('submit', function(event) {
    //if the email field is valid, we let the form submit

    if (!email.validity.valid) {
        showError();
        //then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});

function showError() {
    if (email.validity.valueMissing) {
        //if the field is empty,
        //display the following error message
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = 'Entered value needs to be an e-mail address.';

    } else if (email.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `Emailshould be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
    //set the styling appropriately
    emailError.className = 'error active';
}