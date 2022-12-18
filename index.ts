let myNumber1, myNumber2, result: number;

myNumber1 = parseInt(prompt('please enter the first number'));

myNumber2 = parseInt(prompt('please enter the second number'));

if (myNumber1 > myNumber2) {
  result = myNumber1 - myNumber2;
} else {
  result = myNumber2 - myNumber1;
}
console.log(result);
