const refs = {
  body: document.body,
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickBtn() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = getRandomHexColor();
}

refs.btn.addEventListener('click', onClickBtn);

