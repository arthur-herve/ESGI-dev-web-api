/**
 * Exercice 1
 */
console.log("Exercice 1");
const tabNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
tabNumbers.forEach((element) => {
  console.log(element);
});
console.log("\n================================\n");

/**
 * Exercice 2
 */
console.log("Exercice 2");
const tabDays = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
console.log(tabDays[0]);
console.log("\n================================\n");

/**
 * Exercice 3
 */
console.log("Exercice 3");
const tabPairs = [2, 4, 6, 8, 10];
let tabPairsAddition = 0;
tabPairs.forEach((element) => {
  tabPairsAddition += element;
});
console.log(tabPairsAddition);
console.log("\n================================\n");

/**
 * Exercice 4
 */
console.log("Exercice 4");
const tabFruits = ["pomme", "cerise", "mûres", "coing", "cerise"];
tabFruits.push("abricot");
console.log(tabFruits);
console.log("\n================================\n");

/**
 * Exercice 5
 */
console.log("Exercice 5");
const tabNotes = [12, 16, 19, 5, 8];
let totalNotes = 0;
tabNotes.forEach((element) => {
  totalNotes += element;
});
const moyNotes = totalNotes / tabNotes.length;
console.log(moyNotes);
console.log("\n================================\n");

/**
 * Exercice 6
 */
console.log("Exercice 6");
const tabBirds = ["pie", "mésange", "hibou", "chouette", "pivert"];
tabBirds.includes("pie")
  ? console.log("pie est danbs le tableau")
  : console.log("pie n'est pas dans le tableau");
tabBirds.includes("colombe")
  ? console.log("colombe est danbs le tableau")
  : console.log("colombe n'est pas dans le tableau");
console.log("\n================================\n");

/**
 * Exercice 7
 */
console.log("Exercice 7");
const tabCountries = [
  "France",
  "Angleterre",
  "Suisse",
  "Chine",
  "Chili",
  "Argentines",
  "Togo",
];
tabCountries.sort();
console.log(tabCountries);
console.log("\n================================\n");

/**
 * Exercice 8
 */
console.log("Exercice 8");
const tabMonths = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Aout",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];
console.log(tabMonths[2]);
console.log("\n================================\n");

/**
 * Exercice 9
 */
console.log("Exercice 9");
function gRN(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

const tabRandomNumbers = [
  gRN(5),
  gRN(2),
  gRN(13),
  gRN(90),
  gRN(8),
  gRN(5),
  gRN(10),
];
console.log(tabRandomNumbers);
console.log(Math.max(...tabRandomNumbers));
console.log(Math.min(...tabRandomNumbers));
console.log("\n================================\n");

/**
 * Exercice 10
 */
console.log("Exercice 10");
const tabSentences = [
  "Quand il fut question d’avoir pour la première fois M. de Norpois à dîner, ayant exprimé le regret que le Professeur Cottard fût en voyage et qu’elle-même eût entièrement cessé de fréquenter Swann, car l’un et l’autre eussent sans doute intéressé l’ancien ambassadeur, mon père répondit qu’un convive éminent, un savant illustre, comme Cottard, ne pouvait jamais mal faire dans un dîner, mais que Swann, avec son ostentation, avec sa manière de crier sur les toits ses moindres relations, était un vulgaire esbroufeur que le Marquis de Norpois eût sans doute trouvé, selon son expression, « puant ».",
  "Or cette réponse de mon père demande quelques mots d’explication, certaines personnes se souvenant peut-être d’un Cottard bien médiocre et d’un Swann poussant jusqu’à la plus extrême délicatesse, en matière mondaine, la modestie et la discrétion.",
  "Mais pour ce qui regarde celui-ci, il était arrivé qu’au « fils Swann » et aussi au Swann du Jockey, l’ancien ami de mes parents avait ajouté une personnalité nouvelle (et qui ne devait pas être la dernière), celle de mari d’Odette. Adaptant aux humbles ambitions de cette femme l’instinct, le désir, l’industrie, qu’il avait toujours eus, il s’était ingénié à se bâtir, fort au-dessous de l’ancienne, une position nouvelle et appropriée à la compagne qui l’occuperait avec lui.",
  "Or il s’y montrait un autre homme. Puisque (tout en continuant à fréquenter seul ses amis personnels, à qui il ne voulait pas imposer Odette quand ils ne lui demandaient pas spontanément à la connaître) c’était une seconde vie qu’il commençait, en commun avec sa femme, au milieu d’êtres nouveaux, on eût encore compris que pour mesurer le rang de ceux-ci, et par conséquent le plaisir d’amour-propre qu’il pouvait éprouver à les recevoir, il se fût servi, comme un point de comparaison, non pas des gens les plus brillants qui formaient sa société avant son mariage, mais des relations antérieures d’Odette.",
  "Mais, même quand on savait que c’était avec d’inélégants fonctionnaires, avec des femmes tarées, parure des bals de ministères, qu’il désirait se lier, on était étonné de l’entendre, lui qui autrefois et même encore aujourd’hui dissimulait si gracieusement une invitation de Twickenham ou de Buckingham Palace, faire sonner bien haut que la femme d’un sous-chef de cabinet était venue rendre sa visite à Mme Swann",
];

let long = "";
tabSentences.forEach((element) => {
  console.log(
    "Longueur de l'élément du tableau ",
    tabSentences.indexOf(element),
    " => ",
    element.length
  );
  element.length > long.length ? (long = element) : null;
});
console.log(long.length, " => ", long);
