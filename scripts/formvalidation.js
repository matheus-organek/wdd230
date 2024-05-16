const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const feedback = document.querySelector("#feedback");

password2.addEventListener('focusout', controlar)

function controlar() {

    if (password1.value !== password2.value) {
        password1.value = "";
        password2.value = "";
        password1.focus()
        feedback.textContent = "Passwords do not match. Try again!"
    }
    else {
        feedback.textContent = ""
    }
}


const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("pagerating");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}