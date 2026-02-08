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

let age = parseInt(prompt("Enter your age:"));
let weight = parseFloat(prompt("Enter your weight:"));
let height = parseFloat(prompt("Enter your height:"));

if (age > weight && age > height) {
  console.log("Large value is:" + age);
} else if (weight > age && weight > height) {
  console.log("Largest value is:" + weight);
} else {
  console.log("Largest value is:" + height);
}

// option 2 using function.

let userAge = parseInt(prompt("Enter your age:"));
let userWeight = parseFloat(prompt("Enter your weight:"));
let userHeight = parseFloat(prompt("Enter your height:"));

function find_large(userAge, userWeight, userHeight) {
  if (userAge > userWeight && userAge > userHeight) {
    console.log("Largest value is:" + userAge);
  } else if (userWeight > userAge && userWeight > userHeight) {
    console.log("Largest value is:" + userWeight);
  } else {
    console.log("Largest value is:" + userHeight);
  }
}

find_large(userAge, userWeight, userHeight);

/*TASK 6:Using Python or PHP or Java or Ruby or JavaScript
Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against “admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.*/

// option 1 without function.
let correctPassword = "admin@123";
let attempts = 0;
let user_pass = prompt("Enter your password:");

if (user_pass === correctPassword) {
  console.log("Access granted");
} else if (user_pass !== correctPassword && attempts < 3) {
  attempts++;
  console.log(
    "Incorrect password. You have " + (4 - attempts) + " attempts left.",
  );
  user_pass = prompt("Enter your password:");
} else if (user_pass !== correctPassword && attempts >= 3) {
  console.log("Account blocked");
}

// option 2 using function.
let rightPassword = "admin@123";
let tries = 0;

/* TASK 7: Using Python or PHP or Java or Ruby or JavaScript
Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40
*/

// option 1 without function.

let marks = Number(prompt("Enter student marks (0 - 100):"));

if (marks < 0 || marks > 100) {
  console.log("Invalid marks");
} else if (marks > 79) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else {
  console.log("Grade E");
}
// option 2 using function.

function getGrade(marks) {
  if (marks < 0 || marks > 100) {
    console.log("Invalid marks");
  } else if (marks > 79) {
    console.log("Grade A");
  } else if (marks >= 60) {
    console.log("Grade B");
  } else if (marks >= 50) {
    console.log("Grade C");
  } else if (marks >= 40) {
    console.log("Grade D");
  } else {
    console.log("Grade E");
  }
}

let marks_result = Number(prompt("Enter student marks (0 - 100):"));
getGrade(marks_result);

/*Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.*/

// option 1 without function.
let speed = Number(prompt("Enter car speed:"));
let speedLimit = 70;

if (speed < speedLimit) {
  console.log("Ok");
} else {
  let points = Math.floor((speed - speedLimit) / 5);

  if (points > 12) {
    console.log("License suspended");
  } else {
    console.log("Points:", points);
  }
}

// option 2 using function.

function checkSpeed(speed) {
  let speedLimit = 70;

  if (speed < speedLimit) {
    console.log("Ok");
  } else {
    let points = Math.floor((speed - speedLimit) / 5);

    if (points > 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", points);
    }
  }
}

let speed_final = Number(prompt("Enter car speed:"));
checkSpeed(speed_final);

/*TASK 9: Using Python or PHP or Java or Ruby or JavaScript
Write a program called stars. It should prompt the user for a number, and it should print the number of stars till the number entered.
Example If rows is 5, it should print the following:
*
**
***
****
*****.....*/

// option 1 without function.
let rows = Number(prompt("Enter number of rows:"));

for (let i = 1; i <= rows; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
// option 2 using function.

function printStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

let totalRows = Number(prompt("Enter number of rows:"));
printStars(totalRows);

/* TASK 10: Using Python or PHP or Java or Ruby or JavaScript
Write a program that calculates the total stock in a company from the array/list below if we know that the stock is the last digit in every array/list.

prods = [[‘omo’,’30kshs’,’300’], [‘milk’,’50kshs’,’200’],[‘bread’,’45kshs’,’359’], [‘coffee’,’5kshs’,’79’]]

NB: ONCE YOU COPY AND PASTE THE LIST ABOVE,REWRITE THE SINGLE QUOTES AS THE ABOVE LIST WILL GIVE YOU AN ERROR.
*/

// option 1 without function.
let prods = [
  ["omo", "30ks", "300"],
  ["milk", "50ks", "200"],
  ["bread", "45ks", "359"],
  ["coffee", "5ks", "79"],
];

let totalStock = 0;

for (let i = 0; i < prods.length; i++) {
  totalStock += Number(prods[i][2]); //convert
}

console.log("Total stock:", totalStock);

/*TASK 11: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes the date of birth of a person and the program outputs the age in terms of years,months,days TODAY.datetime*/

let dobInput = prompt("Enter your date of birth (YYYY-MM-DD):");
let dob = new Date(dobInput);
let today = new Date();

let diff = today - dob;

let days = Math.floor(diff / (1000 * 60 * 60 * 24));

let years = Math.floor(days / 365);
let months = Math.floor((days % 365) / 30);
let remainingDays = (days % 365) % 30;

console.log("Age:", years, "years,", months, "months,", remainingDays, "days");

/* TASK 12: Using Python or PHP or Java or Ruby or JavaScript
Write a program that prints the largest of 4 inputs taken as input from a user.
*/

// Take 4 numbers as input
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));
let num4 = Number(prompt("Enter fourth number:"));

// Find the largest
let largest = num1;

if (num2 > largest) largest = num2;
if (num3 > largest) largest = num3;
if (num4 > largest) largest = num4;

console.log("The largest number is:", largest);

/*TASK 13: Using Python or PHP or Java or Ruby or JavaScript or C# or Go
Write a program that takes the email and password as input from a user and checks if they are equal to “admin@mail.com” and password is “Admin@123” , if so then print  “Login is Successful” and if not print “Invalid username or password”. ONLY accept 3 tries after which it notifies you that you have been blocked.*/
let correctEmail = "admin@mail.com";
let correctPass_word = "Admin@123";
let trials = 0;
let maxAttempts = 3;

while (trials < maxAttempts) {
  let email = prompt("Enter email:");
  let password = prompt("Enter password:");

  if (email === correctEmail && password === correctPass_word) {
    console.log("Login is Successful");
    break;
  } else {
    trials++;
    console.log("Invalid username or password");

    if (trials === maxAttempts) {
      console.log("You have been blocked");
    }
  }
}

/* TASK 14: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of 2 values and adds them. The program should only accept numbers and floats only or otherwise display an error “invalid character entered” and take the user to re-enter the inputs 
*/

let num_1, num_2;
let validInput = false;

while (!validInput) {
  num_1 = prompt("Enter first number:");
  num_2 = prompt("Enter second number:");

  // Convert inputs to numbers
  num_1 = Number(num_1);
  num_2 = Number(num_2);

  if (isNaN(num_1) || isNaN(num_2)) {
    console.log("Invalid character entered. Please enter numbers only."); // inputs validation
  } else {
    validInput = true;
  }
}

let sum = num_1 + num_2;
console.log("The sum is:", sum);

/*TASK 15: Using Python or PHP or Java or Ruby or JavaScript
Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
To find the Kenya NHIF Rate using THIS LINK: */

let basic = Number(prompt("Enter basic salary:"));
let benefits_add = Number(prompt("Enter benefits:"));

let gross = basic + benefits;
let n_hif;

// N_HIF contribution by gross salary (Kenya)
if (gross <= 5999) {
  n_hif = 150;
} else if (gross <= 7999) {
  n_hif = 300;
} else if (gross <= 11999) {
  n_hif = 400;
} else if (gross <= 14999) {
  n_hif = 500;
} else if (gross <= 19999) {
  n_hif = 600;
} else if (gross <= 24999) {
  n_hif = 750;
} else if (gross <= 29999) {
  n_hif = 850;
} else if (gross <= 34999) {
  n_hif = 900;
} else if (gross <= 39999) {
  n_hif = 950;
} else if (gross <= 44999) {
  n_hif = 1000;
} else if (gross <= 49999) {
  n_hif = 1100;
} else if (gross <= 59999) {
  n_hif = 1200;
} else if (gross <= 69999) {
  n_hif = 1300;
} else if (gross <= 79999) {
  n_hif = 1400;
} else if (gross <= 89999) {
  n_hif = 1500;
} else if (gross <= 99999) {
  n_hif = 1600;
} else {
  n_hif = 1700;
}

console.log("Gross Salary: " + gross);
console.log("N_HIF Contribution: " + n_hif);

/*TASK 16: Using Python or PHP or Java or Ruby or JavaScript
Continue with the program above, then use  the gross salary to find the NSSF. 
To find the Kenya N_SSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. */


// Input basic salary and benefits  
let basic_salary = Number(prompt("Enter basic salary:"));
let benefits_totals = Number(prompt("Enter benefits:"));

// Calculate gross salary
let gros_salary = basic_salary + benefits_totals;

//N_HIF
let nh_if;

if (gros_salary <= 5999) {
    nh_if = 150;
} else if (gros_salary <= 7999) {
    nh_if = 300;
} else if (gros_salary <= 11999) {
    nh_if = 400;
} else if (gros_salary <= 14999) {
    nh_if = 500;
} else if (gros_salary <= 19999) {
    nh_if = 600;
} else if (gros_salary <= 24999) {
    nh_if = 750;
} else if (gros_salary <= 29999) {
    nh_if = 850;
} else if (gros_salary <= 34999) {
    nh_if = 900;
} else if (gros_salary <= 39999) {
    nh_if = 950;
} else if (gros_salary <= 44999) {
    nh_if = 1000;
} else if (gros_salary <= 49999) {
    nh_if = 1100;
} else if (gros_salary <= 59999) {
    nh_if = 1200;
} else if (gros_salary <= 69999) {
    nh_if = 1300;
} else if (gros_salary <= 79999) {
    nh_if = 1400;
} else if (gros_salary <= 89999) {
    nh_if = 1500;
} else if (gros_salary <= 99999) {
    nh_if = 1600;
} else {
    nh_if = 1700;
}

//N_SSF Calculation
let n_ssf = 0;
if (gros_salary >= 18000) {
    n_ssf = gros_salary * 0.06;  // 6%
}

console.log("Gross Salary: " + gros_salary);
console.log("N_HIF Contribution: " + nh_if);
console.log("N_SSF Contribution: " + n_ssf.toFixed(2));
