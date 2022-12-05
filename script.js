const calcTipPercent = (bill) => {
  if (bill > 100 && bill < 200) return 10;
  if (bill > 50 && bill < 300) return 15;
  return 20;
}

const bills = [125, 555, 44];

/* let tips = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = bills[i] * calcTipPercent(bills[i]) / 100;
}

bills.forEach((bill) => {
  tips.push(bill * calcTipPercent(bill) / 100);
}); */

const tips = bills.map((bill) => {
  return bill * calcTipPercent(bill) / 100;
});

let totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}





console.log(bills);
console.log(tips);
console.log(totals);


/* const bill = 275;
let percent = 15;

if (bill < 50 || bill > 300) {
  percent = 20;
}

const tip = bill * percent / 100;
const total  = bill + tip;

console.log(`La note était de ${bill}, le pourboire de ${tip} et la valeur totale était de ${total}`);
 */