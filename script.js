const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = (dauphinsScore, koalaScore) => {
  if (dauphinsScore > koalaScore) {
    console.log(`L’équipe Dauphins gagne (${dauphinsScore} vs ${koalaScore})`);
    return;
  }
  console.log(`L’équipe Koalas gagne (${koalaScore} vs ${dauphinsScore})`);
}

const dauphinsScore = calcAverage(44, 23, 71);
const koalaScore = calcAverage(65, 54, 49);

checkWinner(dauphinsScore, koalaScore);