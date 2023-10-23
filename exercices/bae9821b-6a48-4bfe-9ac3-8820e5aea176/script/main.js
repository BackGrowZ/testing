
import { findFruitIndex, checkIfFruitExists } from "./IndexOfExample.js";

document.addEventListener("DOMContentLoaded", () => {
  const fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
  const mainContainer = document.querySelector("main");

  const fruitToFind = "orange";
  const fruitIndex = findFruitIndex(fruits, fruitToFind);
  const isFruitFound = checkIfFruitExists(fruits, fruitToFind);

  const ul = document.createElement("ul");
  ul.classList.add("fruit-list");

  fruits.forEach((fruit, index) => {
    const li = document.createElement("li");
    li.classList.add("fruit-list-item");

    if (index === fruitIndex && isFruitFound) {
      li.classList.add("fruit-found");
    } else {
      li.classList.add("fruit-not-found");
    }

    li.textContent = `Fruit ${index + 1}: ${fruit}`;
    ul.appendChild(li);
  });

  mainContainer.appendChild(ul);
});
