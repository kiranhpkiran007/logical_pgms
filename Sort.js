//52. descending
var arr = [1, 2, 3, 9, 8];
var temp = 0;
for (var i = 1; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

//53. ascending
var arr = [1, 2, 3, 9, 8];
var temp = 0;
for (var i = 1; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

// 54.sort object by age
let info = [
  {
    name: "kart",
    age: 25,
  },
  {
    name: "agok",
    age: 24,
  },
];
let data = info.sort((a, b) => {
  return a.age - b.age;
});
console.log(data);

//55. program to sort array by property name

function sortName(a, b) {
  // converting to uppercase to have case-insensitive comparison
  const name1 = a.name.toUpperCase();
  const name2 = b.name.toUpperCase();

  let comparingValue = 0;

  if (name1 > name2) {
    comparingValue = 1;
  } else if (name1 < name2) {
    comparingValue = -1;
  }
  return comparingValue;
}

const students = [
  { name: "cra", age: 24 },
  { name: "aohn", age: 24 },
  { name: "back", age: 25 },
];

console.log(students.sort(sortName));

//56. Second Largest Number in Array

let arr = [55, 89, 45, 96, 25, 17, 96, 96];
let assc = [];
for (let i = 1; i < arr.length; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
for (let k = arr.length - 2; k >= 0; k--) {
  if (arr[k] != arr[arr.length - 1]) {
    console.log("second largest number is ", arr[k]);
    return;
  }
}
console.log(arr[arr.length - 2]);

//57. 2nd smallest NUmber using Sort
let arr = [55, 89, 45, 96, 25, 17, 96, 96];
let assc = [];

arr.sort((a, b) => b - a);
console.log(arr);
for (let k = arr.length - 2; k >= 0; k--) {
  if (arr[k] != arr[arr.length - 1]) {
    console.log("second smallest number is ", arr[k]);
    break;
  }
}

//58. program to sort words in alphabetical order


const string = prompt('Enter a sentence: ');

const words = string.split(' ');

words.sort();


console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}