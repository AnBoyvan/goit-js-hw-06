const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
list: document.querySelector('#ingredients'),
}

const ingredientsArr = [];

ingredients.forEach((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  ingredientsArr.push(itemEl);
})

refs.list.append(...ingredientsArr);