const inputNumber = prompt('Type the number of 3 digits');
let digitArr = [];

digitArr[0] = inputNumber % 10;
const middleNumber = Math.trunc(inputNumber / 10);
digitArr[1] = middleNumber % 10;
digitArr[2] = Math.trunc (middleNumber / 10);

alert(String(digitArr[0])+String(digitArr[1])+String(digitArr[2]));