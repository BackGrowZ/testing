
import { describe, it, expect } from "vitest";
import { filterProductsByCategory } from "../script/FilterProducts";

// Données de test
const products = [
  { name: "Produit 1", category: "Électronique" },
  { name: "Produit 2", category: "Vêtements" },
  { name: "Produit 3", category: "Électronique" },
  { name: "Produit 4", category: "Alimentation" },
  { name: "Produit 5", category: "Vêtements" },
];

// Test 1 - Filtrer les produits par catégorie "Électronique"
describe("Filtrer les produits par catégorie 'Électronique'", () => {
  it("devrait retourner les produits de la catégorie 'Électronique'", () => {
    const filteredProducts = filterProductsByCategory(products, "Électronique");
    expect(filteredProducts).toEqual([
      { name: "Produit 1", category: "Électronique" },
      { name: "Produit 3", category: "Électronique" },
    ]);
  });
});

// Test 2 - Filtrer les produits par catégorie "Vêtements"
describe("Filtrer les produits par catégorie 'Vêtements'", () => {
  it("devrait retourner les produits de la catégorie 'Vêtements'", () => {
    const filteredProducts = filterProductsByCategory(products, "Vêtements");
    expect(filteredProducts).toEqual([
      { name: "Produit 2", category: "Vêtements" },
      { name: "Produit 5", category: "Vêtements" },
    ]);
  });
});

// Test 3 - Filtrer les produits par catégorie inexistante
describe("Filtrer les produits par une catégorie inexistante", () => {
  it("devrait retourner un tableau vide", () => {
    const filteredProducts = filterProductsByCategory(products, "Inexistante");
    expect(filteredProducts).toEqual([]);
  });
});

// Test 4 - Filtrer les produits par catégorie "Alimentation"
describe("Filtrer les produits par catégorie 'Alimentation'", () => {
  it("devrait retourner les produits de la catégorie 'Alimentation'", () => {
    const filteredProducts = filterProductsByCategory(products, "Alimentation");
    expect(filteredProducts).toEqual([
      { name: "Produit 4", category: "Alimentation" },
    ]);
  });
});
