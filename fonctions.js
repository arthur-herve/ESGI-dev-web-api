function gRN(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}
/**
 * Exercice 1
 */
console.log("Exercice 1");
function addition(a, b) {
  return a + b;
}
console.log(addition(5, 9));
console.log("\n================================\n");

/**
 * Exercice 2
 */
console.log("Exercice 2");
function maxNumberInArray(tableauDeNombre) {
  return Math.max(...tableauDeNombre);
}
console.log(
  maxNumberInArray([8, 21, 6, 1, 3, 16, 2, 0, 3, 46, 21, 3, 45, 321, 8, 4, 23])
);
console.log("\n================================\n");

/**
 * Exercice 3
 */
console.log("Exercice 3");
function voyelleSuppression(stringAvecVoyelles) {
  return stringAvecVoyelles.replace(
    /[àäâæaéèëêeîïiíìùüöœoAEIOUYÀÁÂÃÄÅÆÈÉÊËÌÍÎÏÒÓÔÕÖØÙÚÛÜÝ]/g,
    ""
  );
}
const phraseAvecVoyelles =
  "Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées. + Rambo";
console.log(voyelleSuppression(phraseAvecVoyelles));
console.log("\n================================\n");

/**
 * Exercice 4
 */
console.log("Exercice 4");
const chaineOrdonner = [
  ..."oihpooijfeoèéèèéàààijoijoîsejfôijssefoijijsvsergsyqryrtut",
];
function ordonnerLettres(tableauChaineDesordonnee) {
  return tableauChaineDesordonnee.sort();
}
console.log(ordonnerLettres(chaineOrdonner));
console.log("\n================================\n");

/**
 * Exercice 5
 */
console.log("Exercice 5");

const nombreAConvertir = 28;
const motsDizaineTab = [
  "dix",
  "vingt",
  "trente",
  "quarante",
  "cinquante",
  "soixante",
  "soixante",
  "quatre-vingts",
  "quatre-vingts",
];
const motsDixTab = [
  "dix",
  "onze",
  "douze",
  "treize",
  "quatorze",
  "quinze",
  "seize",
  "dix-sept",
  "dix-huit",
  "dix-neuf",
];
const motsUniteTab = [
  "zero",
  "un",
  "deux",
  "trois",
  "quatre",
  "cinq",
  "six",
  "sept",
  "huit",
  "neuf",
];
function nombreVersMots(nombre) {
  let nombreEnMot = "";
  nombreStr = nombre.toString();
  switch (nombreStr.length) {
    case 3:
      return +nombreStr[0] > 1
        ? (nombreEnMot =
            nombreEnMot +
            motsUniteTab[+nombreStr[0]] +
            "-cent" +
            "-" +
            nombreVersMots(nombreStr.substring(1)))
        : (nombreEnMot =
            nombreEnMot +
            "cent" +
            "-" +
            nombreVersMots(nombreStr.substring(1)));
      break;
    case 2:
      switch (nombreStr[0]) {
        case "0":
          return nombreVersMots(nombreStr.substring(1));
          break;
        case "1":
          return motsDixTab[+nombreStr[1]];
          break;
        case "7":
          return (
            motsDizaineTab[+nombreStr[0] - 1] + "-" + motsDixTab[+nombreStr[1]]
          );
          break;
        case "9":
          return (
            "-" +
            motsDizaineTab[+nombreStr[0] - 1] +
            "-" +
            motsDixTab[+nombreStr[1]]
          );
          break;
        default:
          return (
            motsDizaineTab[+nombreStr[0] - 1] +
            "-" +
            nombreVersMots(nombreStr.substring(1))
          );
          return;
          break;
      }
      break;
    case 1:
      return motsUniteTab[+nombreStr];
      break;
    default:
      break;
  }
}

console.log(nombreVersMots(nombreAConvertir));
console.log("\n================================\n");

/**
 * Exercice 6
 */
console.log("Exercice 6");
const leTableauDObjets = [
  { prenom: "Arthur", nom: "Herve" },
  { prenom: "Lino", nom: "Ventura" },
  { prenom: "Jean", nom: "Gabin" },
  { prenom: "Edouard", nom: "Leclerc" },
  { prenom: "Jeanne", nom: "Calment" },
  { prenom: "Brice", nom: "DeNice" },
];
function extractValue(tabObjets, clef) {
  let tabValues = [];
  tabObjets.forEach((element) => {
    Object.hasOwnProperty.call(element, clef)
      ? tabValues.push(element[clef])
      : tabValues.push(null);
  });
  return tabValues;
}
console.log(extractValue(leTableauDObjets, "prenom"));
console.log("\n================================\n");

/**
 * Exercice 7
 */
console.log("Exercice 7");
const tabNbrCroissant = [
  gRN(100),
  gRN(1000),
  gRN(1000),
  gRN(1000),
  gRN(1000),
  gRN(1000),
  gRN(1000),
  gRN(1000),
  gRN(1000),
  gRN(1000),
];

function ordonnerCroissant(tableauNbrDesordre) {
  return tableauNbrDesordre.sort((a, b) => b - a); //Je me suis trompé d'énoncé, j'avaius fait croissant, j'ai juste changé
}
console.log(ordonnerCroissant(tabNbrCroissant));
console.log("\n================================\n");

/**
 * Exercice 8
 */
console.log("Exercice 8");
const chaineMinuscule =
  "moqzseishvgfmopiqhgôiqzeoiqhzegoihqezr zqeruoigh pqoezrh ôiqzerhr oîqhzeoiuh zeqgôih gqezroi hqgezr";
function enMajuscule(chaineMinuscule) {
  return chaineMinuscule.toUpperCase();
}
console.log(enMajuscule(chaineMinuscule));
console.log("\n================================\n");

/**
 * Exercice 9
 */
console.log("Exercice 9");
const chaineVoyelleACompter = "zeomifhoihazeihjàaàtrhezrjfqzrgeqezrgh";
function voyelleCompteur(chaineACompter) {
  return chaineACompter.match(
    /[àäâæaéèëêeîïiíìùüöœoAEIOUYÀÁÂÃÄÅÆÈÉÊËÌÍÎÏÒÓÔÕÖØÙÚÛÜÝ]/g
  ).length;
}
console.log(voyelleCompteur(chaineVoyelleACompter));
console.log("\n================================\n");

/**
 * Exercice 10
 */
console.log("Exercice 10");
const chaineConsonneMaj =
  "qpimzrgbpiqesrubgpsoeirugnoseirfnopizepzerjpjergpojhezrteh";
function consToMaj(chaine) {
  return chaine.replace(
    /[^àäâæaéèëêeîïiíìùüöœoAEIOUYÀÁÂÃÄÅÆÈÉÊËÌÍÎÏÒÓÔÕÖØÙÚÛÜÝ]/g,
    (a) => a.toUpperCase()
  );
}
console.log(consToMaj(chaineConsonneMaj));
console.log("\n================================\n");
