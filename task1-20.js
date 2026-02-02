//quiz task 1
// Write a program that prompts the user to enter the base and height of a triangle and returns its area.

// option 1 without function
let base1 = parseFloat(prompt("Enter the base of the triangle:"));
let height1 = parseFloat(prompt("Enter the height of the triangle:"));

let area_1 = 0.5 * base1 * height1;
console.log("The area is: " + area_1 + "units squared");

// option 2 using function.
let base2 = parseFloat(prompt("Enter the base of the triangle:"));
let height2 = parseFloat(prompt("Enter the height of the triangle:"));

function triangleArea(base2, height2) {
  return 0.5 * base2 * height2;
}

let area2 = triangleArea(base2, height2);
console.log("The area of the triangle is: " + area2 + "units squared");

triangleArea(base2, height2);

// quiz task 2

/*Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
Hint: how does an even / odd number react differently when divided by 2?
Once you learn functions,revisit this and write this code inside a function.
Extras:
If the number is a multiple of 4, print out “divisible by 4”.
Once you learn functions,revisit this and write this code inside a function.*/

// option 1 without function
// Prompt user for a number
let number = parseInt(prompt("Enter a number:"));

if (number % 2 === 0) {
  console.log("even");

  // divisible by 4
  if (number % 4 === 0) {
    console.log("divisible by 4");
  }
} else {
  console.log("odd");
}

// option 2 using function
let num = parseInt(prompt("Enter a number:"));

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("even number");
    if (num % 4 === 0) {
      console.log("divisible by 4");
    }
  } else {
    console.log("odd number");
  }
}

checkEvenOdd(num);

/*TASK 3: Using Python or PHP or Java or Ruby or JavaScript
Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
e.g if a user enters “0712345678”, the program should display “+254712345678”
e.g if a user enters “0112345678”, the program should display “+254112345678”
e.g if a user enters “712345678”, the program should display “+254712345678”*/

// option 1 without function.
let phone = prompt("Enter your phone number:");
let validate = "+254";

if (phone.startsWith(validate) && phone.length === 13) {
  console.log(phone);
} else if (phone.startsWith("07") && phone.length === 10) {
  console.log(validate + phone.slice(1));
} else if (phone.startsWith("7") && phone.length === 9) {
  console.log(validate + phone);
} else if (phone.startsWith("1") && phone.length === 9) {
  console.log(validate + phone);
} else if (phone.startsWith("01") && phone.length === 10) {
  console.log(validate + phone.slice(1));
} else if (phone.startsWith("254") && phone.length === 12) {
  console.log("+" + phone);
} else {
  console.log("Invalid phone number");
}

// option 2 using function.
let phoneNumber = prompt("Enter your phone number:");
let value = "+254";

function validateNo(phoneNumber) {
  if (phoneNumber.startsWith(value) && phoneNumber.length === 13) {
    console.log(phoneNumber);
  } else if (
    phoneNumber.startsWith("07") ||
    (phoneNumber.startsWith("01") && phoneNumber.length === 10)
  ) {
    console.log(value + phoneNumber.slice(1));
  } else if (
    phoneNumber.startsWith("7") ||
    (phoneNumber.startsWith("1") && phoneNumber.length === 9)
  ) {
    console.log(value + phoneNumber);
  } else if (phoneNumber.startsWith("254") && phoneNumber.length === 12) {
    console.log("+" + phoneNumber);
  } else {
    console.log("Invalid phone number");
  }
}

validateNo(phoneNumber);

/* TASK 4: Using Python or PHP or Java or Ruby or JavaScript
Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
Hint: Check if it contains an “@” symbol and “.” symbol*/

// option 1 without function.
let email = prompt("Enter your email address:");

if (email.includes("@")) {
  console.log("valid email");
} else {
  console.log;
}

// option 2 using function
let emailAddress = prompt("Enter your email address:");

function validate_Email(emailAddress) {
  if (emailAddress.includes("@")) {
    console.log("valid email");
  } else {
    console.log("invalid email");
  }
}

validate_Email(emailAddress);

/*TASK 5: Using Python or PHP or Java or Ruby or JavaScript
Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables. Return the largest of the three. Do this without using the the inbuilt max () function!
The goal of this exercise is to think about some internals that programs normally take care of for us. */



// option 1 without function.

let age = parseFloat(prompt("Enter your age:"))
let weight = parseFloat(prompt("Enter your weight:"))
let height = parseFloat(prompt("Enter your height:"))