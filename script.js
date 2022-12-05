const bernardWeight = 78;
const bernardHeight = 1.69;

const marcelWeight = 92;
const marcelHeight = 1.95;

let bernardImc = bernardWeight / (bernardHeight * bernardHeight);
let marcelImc = marcelWeight / (marcelHeight * marcelHeight);

const bernardHigherIMC = bernardImc > marcelImc;

if (bernardImc === marcelImc) {
  console.log('Bernard et Marcel ont le même IMC');
} else if (bernardHigherIMC) {
  console.log('Bernard a un IMC plus élevé que Marcel');
} else {
  console.log('Marcel a un IMC plus élevé que Bernard');
}




