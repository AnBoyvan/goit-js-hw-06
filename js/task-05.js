const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}



refs.nameInput.addEventListener('input', (event) => {
    if (event.currentTarget.value.trim() !== '') {
        refs.nameOutput.textContent = event.currentTarget.value;
    } else {
        refs.nameOutput.textContent = "Anonymous";
    }    
});