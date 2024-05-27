const isFormValid = (email) => {
    const isEmailValid = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (email === "" || !isEmailValid) {
        return false;
    }

    return true;
};

const handleSubmit = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("email-address");
    const emailAddressError = document.querySelector(".email-address-error");

    if (isFormValid(emailInput.value)) {
        window.location.href = "success-message.html";
    } else {
        if (!emailInput.classList.contains("error")) {
            emailInput.classList.toggle("error");
            emailAddressError.classList.toggle("hidden");
        }
    }
};

const main = () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", handleSubmit);
};

main();
