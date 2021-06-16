const moneyAmount = prompt('How much money do you have?');
const chocolatePrice = prompt('What is the price of 1 chocolate?');

let chocolateAmount = Math.trunc(moneyAmount / chocolatePrice);
let moneyRest = moneyAmount % chocolatePrice;

alert('You can buy ' + chocolateAmount + ' chocolates and the rest in your wallet will be ' + moneyRest);