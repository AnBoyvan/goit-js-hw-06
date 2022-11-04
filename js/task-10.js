const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxStorage: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = refs.input.value;
  for (let i = 0; i < amount; i += 1) {
    let boxSize = 30 + 10 * i;
    let element = `<div style="height: ${boxSize}px; width: ${boxSize}px;  background-color: ${getRandomHexColor()};"></div>`;
    refs.boxStorage.insertAdjacentHTML("beforeend", element);
  }
}

function destroyBoxes() {
  refs.boxStorage.innerHTML = "";
}

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);
