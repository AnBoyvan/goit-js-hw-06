const refs = {
    input: document.querySelector('#validation-input'),
}


refs.input.addEventListener('blur', (event) => {
    event.currentTarget.classList.remove('invalid')
    if (event.currentTarget.value.length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add('valid')
    } else {
        event.currentTarget.classList.add('invalid')
    }    
})
