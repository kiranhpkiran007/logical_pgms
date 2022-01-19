// 27.Find larget number among three numbers
let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let num3 = parseFloat(prompt("Enter third number: "));
let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log("The largest number is " + largest);


//28. To Find Largest Character in A String

let array = ["dhoni", "virat", "williamson", "root", "shewag"];
let temp = "";
for (let i = 1; i <= array.length - 1; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i].length < array[j].length) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
console.log(array);
console.log(array[array.length - 1]);