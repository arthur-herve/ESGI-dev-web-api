/**
 * Liens pour l'aide @link https://nodejs.org/docs/latest https://developer.mozilla.org/enf
 */
console.log("hello world!");
/**i
 * Interdiction d'utiliser var
 * Donc : var maVariable = 'Hello world!';
 * donne
 */
let maVariable = "Hello world!";
/**
 * COnsole log pour tester la déclaration de variable.
 */
console.log(maVariable);

/**
 * Pour let on peut réaffecter à tout moment.
 * POur const on ne peut pas réaffecter la variable.
 */
const constanteDeTest = 1;
/**
 * Pour :
 * constanteDeTest = 2;
 * TypeError: Assignment to constant variable.
 */

/**
 * Le typage
 */
if (1 == "1") {
  console.log("avec '==' => ça marche quand même");
}
if (1 === "1") {
  console.log("avec '===' =>ça marche quand même");
} else {
  console.log("avec '===' =>ça marche plus");
}

/**
 * Les back ticks permettent de déclarer des strings sur plusieurs lignes.
 */

let backTicksString = `''""`;
console.log(backTicksString);

/**
 * Concaténation de string.
 */
let arthur = "arthur";
let espace = " ";
let herve = "herve";
let nomPrenom = arthur + espace + herve;
console.log("La concaténation nomPrenom est => ", nomPrenom);
/**
 * ATTENTION
 * Concaténation avec variable.concat(prems, deux)
 * Retourne une concaténation, ne modifie pas le contenu de la variable de départ.
 * Attention donc différence de modification et retour de variable.
 */

/**
 * Chaîne de caractère est considéré comme un tableau, on peut faire monString.length
 * Notation monString[0] et monString.charAt(0) sont équivalent.
 */

/**
 * On peut avoir divers types de variables dans différents index d'un tableau, c'est pénélisé sur la note.
 */
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("1 myArra => )", myArray);
const deletedEl = myArray.splice(1, 1);
console.log("2 splice myArray => ", myArray);
console.log("deletedEl => ", deletedEl);
myArray.splice(1, 0, 2);
console.log("3 splice retrait = 0 : myArray => ", myArray);

/**Opérateur ternaire */
1 === 1 ? console.log("1===1") : console.log("1!=a");
1 !== 1 ? console.log("1===1") : console.log("1!=a");

Object.hasOwnProperty