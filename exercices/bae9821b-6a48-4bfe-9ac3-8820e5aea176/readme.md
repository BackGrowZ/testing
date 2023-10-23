# Exercice: Utilisation de `Array.indexOf()`

**Objectif de l'exercice:** Apprendre à utiliser la méthode `indexOf()` d'un tableau en JavaScript pour rechercher la position d'un élément donné dans le tableau.

## Instructions

1. **Création du fichier :** Créez un fichier `IndexOfExample.js` et ouvrez-le dans votre éditeur de code.

2. **Initialisation des données:** Créez un tableau nommé `fruits` contenant les éléments suivants : "pomme", "banane", "orange", "fraise" et "kiwi".

```js
const fruits = ["pomme", "banane", "orange", "fraise", "kiwi"];
```

3. **Créez une fonction `findFruitIndex` :** Écrivez une fonction nommée `findFruitIndex` qui prend deux paramètres, un tableau `arr` et un élément `fruit`, et utilise la méthode `indexOf()` pour retourner l'index de l'élément `fruit` dans le tableau `arr`. Si l'élément n'est pas trouvé, la fonction doit renvoyer -1.

```js
function findFruitIndex(arr, fruit) {
  // Utilisez la méthode indexOf() pour trouver l'index de 'fruit' dans 'arr'
  // Retournez l'index ou -1 s'il n'est pas trouvé
}
```

4. **Testez la fonction `findFruitIndex` :** Appelez la fonction `findFruitIndex` avec le tableau `fruits` et quelques fruits différents comme argument. Affichez les résultats dans la console.

5. **Créez une fonction `checkIfFruitExists` :** Écrivez une fonction nommée `checkIfFruitExists` qui prend deux paramètres, un tableau `arr` et un élément `fruit`, et utilise la méthode `indexOf()` pour vérifier si l'élément `fruit` existe dans le tableau `arr`. La fonction doit renvoyer `true` si l'élément existe et `false` sinon.

6. **Testez la fonction `checkIfFruitExists` :** Appelez la fonction `checkIfFruitExists` avec le tableau `fruits` et quelques fruits différents comme argument. Affichez les résultats dans la console.

7. **Exporter :** Exportez les deux fonctions `findFruitIndex` et `checkIfFruitExists` pour les rendre disponibles pour un test unitaire.

```js
export { findFruitIndex, checkIfFruitExists };
```

## Conseils

- Assurez-vous de bien comprendre comment la méthode `indexOf()` fonctionne et comment elle retourne l'index de l'élément trouvé ou -1 s'il n'est pas présent.
- Utilisez des fruits différents lors de vos tests pour vérifier si les fonctions fonctionnent correctement.
