//La note était de 275, le pourboire de 41,25 et la valeur totale était de 316,25

const bill = 275;

let percent = 15;

if (bill < 50 || bill > 300) {
  percent = 20;
}

const tip = bill * percent / 100;
const total  = bill + tip;

console.log(`La note était de ${bill}, le pourboire de ${tip} et la valeur totale était de ${total}`);
