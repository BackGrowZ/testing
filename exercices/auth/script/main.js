
import { filterPromotionalProducts } from "./filterPromotionalProducts.js";

document.addEventListener("DOMContentLoaded", function () {
  const mainElement = document.querySelector("main");
  const products = [
    { nom: "Produit 1", prix: 10, promotion: true },
    { nom: "Produit 2", prix: 20, promotion: false },
    { nom: "Produit 3", prix: 15, promotion: true },
    // Ajoutez d'autres produits ici...
  ];

  const promotionalProducts = filterPromotionalProducts(products);

  promotionalProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("promotional-product");

    const productNameElement = document.createElement("h2");
    productNameElement.textContent = product.nom;

    const productPriceElement = document.createElement("p");
    productPriceElement.textContent = `Prix : ${product.prix}€`;
    productPriceElement.classList.add("price");

    productElement.appendChild(productNameElement);
    productElement.appendChild(productPriceElement);

    mainElement.appendChild(productElement);
  });
});
