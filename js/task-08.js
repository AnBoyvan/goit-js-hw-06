const refs = {
    form: document.querySelector('.login-form'),
}



function handleSubmitBtn(e) {
    e.preventDefault();
    const { elements: { email, password } } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    }
    console.log({ Login: email.value, Password: password.value });
    e.currentTarget.reset();
    }

refs.form.addEventListener("submit", handleSubmitBtn);