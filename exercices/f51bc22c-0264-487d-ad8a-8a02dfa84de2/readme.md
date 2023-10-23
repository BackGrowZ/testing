# Exercice: Utilisation de parseInt()

**Objectif de l'exercice:** Créer des fonctions réutilisables pour effectuer des opérations de conversion de chaînes en nombres en utilisant `parseInt()`.

## Instructions

1. **Création du fichier :** Créez un fichier `parseIntExercises.js` et ouvrez-le dans votre éditeur de code.

2. **Initialisation des données:** Créez les variables suivantes pour les cas d'exercice :

```js
// Cas 1: Conversion d'une chaîne en nombre entier
const numberString1 = "42";

// Cas 2: Conversion d'une chaîne en nombre entier avec une base spécifiée
const numberString2 = "1010";
const base = 2;

// Cas 3: Conversion d'une chaîne avec des caractères non numériques
const invalidNumberString = "abc123";
```

3. **Création de la fonction pour le Cas 1 :** Créez une fonction nommée `convertToInteger` qui prend en paramètre une chaîne de caractères `str` et utilise `parseInt()` pour la convertir en un nombre entier. Renvoyez ce nombre.

4. **Création de la fonction pour le Cas 2 :** Créez une fonction nommée `convertToIntegerWithBase` qui prend en paramètre une chaîne de caractères `str` et une base `base`, puis utilise `parseInt()` avec la base spécifiée pour la conversion. Renvoyez le nombre entier converti.

5. **Création de la fonction pour le Cas 3 :** Créez une fonction nommée `handleInvalidConversion` qui prend en paramètre une chaîne de caractères `str` et utilise `parseInt()` pour tenter de la convertir en un nombre entier. Si la conversion échoue (en renvoyant `NaN`), renvoyez le message "Conversion impossible". Sinon, renvoyez le nombre entier converti.

6. **Retourner le résultat :** Assurez-vous que chaque fonction renvoie le résultat approprié en fonction du cas.

7. **Exporter :** Exportez les fonctions pour les rendre accessibles depuis d'autres fichiers.

```js
export { convertToInteger, convertToIntegerWithBase, handleInvalidConversion };
```

## Conseils

- Assurez-vous d'utiliser la fonction `parseInt()` avec les paramètres appropriés selon le cas.
- Pour le Cas 2, n'oubliez pas de spécifier la base lors de l'appel à `parseInt()`.
- Pour le Cas 3, vous pouvez utiliser la fonction `isNaN()` pour vérifier si la conversion a réussi.
- Utilisez des commentaires pour expliquer la logique de chaque fonction.
