const refs = {
  categories: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${refs.categories.length}`);
refs.categories.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
