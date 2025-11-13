/**
 * Additionne deux nombres avec validation des types
 * @param {number} a - Premier nombre à additionner
 * @param {number} b - Deuxième nombre à additionner
 * @returns {number} La somme des deux nombres
 * @throws {TypeError} Si l'un des arguments n'est pas un nombre
 * @example
 * sum(2, 3) // returns 5
 * sum(-1, 1) // returns 0
 */
export function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    return a + b;
}
// test protection branche
