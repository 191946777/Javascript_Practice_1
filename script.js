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
