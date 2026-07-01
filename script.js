//CHAPTER 1

let obj = {
  name: "aman",
  phn_number: 7054764217,
  marks: 97,
};

obj.age = 65;

console.log(obj);

let str = "65";

console.log(typeof str);

const obj1 = {
  name: "aman",
};

obj1.num = 65;

console.log(obj1);

// CHAPTER 2

let age = 21;

if (age >= 10 && age <= 20) {
  console.log("age between 10 to 20");
} else {
  console.log("error");
}

let age = "10";

switch (age) {
  case "5":
    console.log("age under 5");

    break;
  case "10":
    console.log("age above 5");

    break;

  case "15":
    console.log(" age below 10");

    break;

  default:
    break;
}

let num = 30;

if (num % 2 === 0 && num % 3 === 0) {
  console.log("number divi by 2 and 3");
} else {
  console.log(" not divisible");
}

let num = 9;

if (num % 2 === 0 || num % 3 === 0) {
  console.log("number divi by 2 or 3");
} else {
  console.log(" not divisible");
}

let age = 17;

let result = age >= 18 ? "can drive" : "not drive";

console.log(result);

// CHAPTER 3

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (const key in obj) {
    console.log(key);
}

let arr = ["aman","singh","sweety","sharma"]

for (const ele of arr) {
    console.log(ele);

}
let i = 1;
do {
    console.log(i);
    i++

} while ( i < 5)

let obj = { aman: 99, sweety: 97, sonali: 95 };

for (const key in obj) {
  console.log(obj[key]);
}

let key = Object.keys(obj);
console.log(key);

for (let i = 0; i < key.length; i++) {
  console.log(obj[key[i]]);
}

function guessNum(para1){
    if(para1 == 55){
        console.log("Number Guessed");

    } else {
        console.log("try again");

    }

}

guessNum(prompt("enter the number"));


let arr = [10, 20, 30, 40, 50];

function mean() {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];

  }
  let avg = result / arr.length
  console.log(avg);
}

mean();

// CHAPTER 4

console.log("har\"".length);

let str = "Hello Which is the popular language"

let result = str.includes("popular")

console.log(result);

let str = "AmAn"

let a = str.toUpperCase();
console.log(a);

let str = "Please give rs 1000"

let result = str.slice(15)
console.log(result);

let result = str.replace('a','t')
console.log(result);
