let myNumber1, myNumber2, result: number;

myNumber1 = parseInt(prompt('please enter the first number '));

myNumber2 = parseInt(prompt('please enter the second number'));

result = myNumber1 * myNumber2;

if (result == 0) {
  console.log('THE TWO NUMBERS ARE MISSING');
} else if (result > 0) {
  console.log('HITTING THE TWO NUMBERS IS POSITIVE');
} else {
  console.log('HIT THE NUMBERS IS NEGATIVE');
}
