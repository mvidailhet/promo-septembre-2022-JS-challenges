const dauphinsScore = (105 + 108 + 89) / 3;
const koalasScore = (88 + 91 + 110) / 3;

console.log(`score des Dauphins ${dauphinsScore}`);
console.log(`score des Koalas ${koalasScore}`);

if (dauphinsScore < 100 && koalasScore < 100) {
  console.log('pas de gagnant !');
} else {
  if (dauphinsScore === koalasScore) {
    console.log('Egalite !');
  } else if (dauphinsScore > koalasScore) {
    console.log('Les Dauphins ont gagné');
  } else {
    console.log('Les Koalas ont gagné');
  }
}



