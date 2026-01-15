==> introduction to javascript
==>pages.

use of java
==> user interactivity. how to interact web page scroll click hover.

==> Reactivity
automatic loading. vanilla javascript

== WHERE TO WRITE JS..
==>internal js in html using css. using script tag <script></script>
** head section
**body section(most common)
==>external js

wis javascript same as java ?
build data types.

**INTRODUCTION TO JAVASCRIPT**
-> A web application has the following building blocks:
1.HTML - defines the structure / content of the webpage
2.CSS - defines the appearance of the webpage
3.JS  - enable user interactivity

**What do we use JS for?**
1.User Interactivity - webpage responding to user actions e.g typing, clicking buttons,
scrolling,hovering e.t.c
2.Reactivity - making our pages dynamic -> the page content is able to change itself 
without reloading

**JS can run in two environments:
1. In the browser -> client side JS
2. In the server -> NodeJS


**Where can we write JS?**
-> depends on how much JS code you have to write
1.Internal JS -> witing JS inside a HTML document
        a) In the head section - if you want to run JS before HTML
        b) In the body section - right above the closing body tag (common)
2.External JS -( best way)
----> for a large JS codebase
---> create an external JS file with a .js extension
---->link your external script to html using src attribute in script element

** JS is a high level, interpreted language that makes web applications interactive

1.VARIABLES
-> Named container / memory space used to store values
-> How to declare variables in JS
1. Using the let keyword 
    -> the most common way
    -> used when you want to reassign / change the value of a variable
    e.g let x = 5 // declaration & assignment
        x = 12 // reassignment

2. Using the const keyword
    -> represents constant values
    -> values here cant be changed or reassigned
    -> e.g. const pi = 3.142

3. Using the var keyword - outdated
    -> works just like 'let'
    -> was replaced by let
    -> works in older browsers 

**DATA TYPES**
1.String - sequence of characters / text enclosed in quotations
2.Number - represents numeric values - both whole (integers) and decimal
3.Boolean - represents Truth values - true and false

->How to output in JS?
**console.log()

-> Checking for data type in JS
** typeof()



**Comments**
-> A way of documenting code -commented lines are ignored by the interpreter
->Types of comments:
1.Multiline comment -> /* */
2.Single line comment - //

**STRING METHODS & OPERATIONS**
-Methods are inbuilt functions used to manipulate data

1.Concatenation - joining or combining strings 
            a) Using "+" operator
            b) using concat() method
2.Template literals - a way of embedding or including variables inside strings
        -use backticks, $ and {}
3.Accessing characters in a string - strings are ordered - use indexing
        N/B:- In accessing string characters in JS , we dont have -ve indexing
4.Determine no of characters in a string - .length
5. .slice() - returns the portion / substring of a full string
        .slice(start,end)
        **slice allows -ve indexing
6. .toUpperCase() - converts a string to uppercase format
7. .toLowerCase() - converts a string to lowercase format
8. .includes() - determines whether a specified character or substring is part of a string
            -returns a Boolean value
9. .startsWith() - checks whether a string begins with a specified character or substring
10. .endsWith() - checks whether a string ends with a specified character or substring
                - return Boolean values
11. .indexOf() - returns the first occurrence of a specified character or characters
        e.g "Hello"
12. .replace() - replaces  specified character/s with a new value
            .replace(old_value, new_value)
13. .trim() - removing whitespaces from a string
            - trimLeft() or trimStart()
            - trimRight() or trimEnd()
14.split()


**NUMERIC OPERATIONS**
1.addition -> +
2.subtraction -> -
3.division - /
4.multiplication - *
6.exponent - **
7.modulus - %
8.increment -> ++ -> increase by 1
9. decrement -> -- -> decrease by 1
10. .toString() - changes a number to a string
11. .toFixed() - rounds off a number to specified decimal places
12. Math.round() - rounds a number to the nearest integer
13. Math.floor() - round down
14. Math.ceil() - round up

**TASK**
1.slide 53
2.slide 57

                        **LESSON 2**
**User Input**
-Makes programs interactive and dynamic
-In JS we take user input using prompt()
-Any data coming from user input is always a string
**Changing Data Type**
**String -> Number
**Number -> String
**Boolean conversions

1.Type conversion -> manual changing of data from one type to another
                -> explicitly done by the programmer
        **Convert string to number**
        a)Number() - convert string to number
        b)parseInt() - convert string to integer
        c)parseFloat() -convert string to decimal number

        **Convert number to string**
        a) String()
        b).toString()

2.Type coercion - where data is automatically changed from one type to another by 
                the language / interpreter 
                -> not changed by the programmer
        -> Polymorphism -> operator overloading -> an operator takes more than one form
        + -> concat -> addition

**JS OPERATORS**
-> Operators are symbols used to perfom specific tasks
-> We have 4 categories of operators:
1.Arithmetic Operators -numeric operations
-> + (addition)
-> - (subtract)
-> / (divide)
-> * (multiply)
-> ** (exponential)
-> % (modulus)
-> ++(increment) - increases by 1
-> --(decrement) - decreases by 1

2.Comparison Operators -compares values
-> == (loose equality) -> type coercion happens -> checks only for the value not data type
-> ===(strict equality) -> no type coercion -> checks for both value and data type
-> != (loose inequality)
-> !==(strict inequality)
-> > (greater than)
-> < (less than)
-> >= (greater than or equal to)
-> <= (less than or equal to)

3.Logical Operators - logical operations
-> Logical and - && ->  returns true only if both conditions are true
-> Logical or -> || -> returns true if t least on condition is true
-> Logical not -> ! - returns the opposite of a Boolean value


4.Assignment Operators - assigns values
-> = (assign)
-> += (add and assign)
-> -= (subtract nd assign)
-> *= (multiply and assign)
-> /= (divide and assign)
-> **= (raise to a number and assign)
-> %= (get remainder and assign)


**Task**
1.Find out what the 'in' operator does and illustrate with Javascript code - use w3schools or geeksforgeeks as references
2. Write a program that takes 2 numeric user inputs and outputs the following:
  -> their sum
  -> their subtraction
  -> their modulus
  -> their exponent
3.review & redo any undone task on slide 57


       **CONDITIONAL STATEMENTS**
-> Enables us to write programs that make decisions based on inputs
-> if-else statements 
-> syntax:
{} - represents blocks

scenario -> you have one condition e.g. check whether number is even
if (condition){
    //what haappens if condition is true / met
} else{
   // what happens if condition is false / not met
}

scenario -> you have multiple conditions
if , else if , else

if (condition 1){
        what happens if condition 1 is met
} else if (condition 2){
        what happens if condition 2 is met
} else if (condition 3){
        what happens if condition 3 is met
} else{
      what happens if all conditions are false 
}


                **In class task**
1.Using an if statement write a program that checks
 whether a number is even or odd

2.Write a Javascript program that checks which number is the largest
among 3 numbers -> take 3 user inputs and determine which number is the largest.

 **ternary operator**
-> ?
-> shorthand for if-else statements
-> works only when there is one condition
-> syntax:
   condition ? expression if condition is true : expression if condition is false

   In class task
1.Write a program using ternary operator that checks whether a person is an
eligible voter -> criteria: an eligible voter has to be 18 years old or older

**Task**
-Slide 66
-> leap year
Create a variable called year and enter the a random year.
 Check if the year is a leap year or not. A leap year is a
  year that is divisible by 4  not divisible by 100 or divisible  by 400.
-> 1800 - not leap
-> 1600 - leap
-> 2000 - leap
-> 2008 - leap
1800  / 4 -> 450 
If it is divisible by 4 it cant be divisible by 100 
-> And if that year is divisible by 100 , it has to be divisible by 400
-> Every year divisible by 400 is always a leap year

Nested if
-> An if statement within another if statement
e.g.Write a js program that checks if a variable student_score
 is greater than 90. If true, check if the attendance is greater than 80. 
 If both conditions are true, display"Excellent student", otherwise display
  "Good score, but attendance needs improvement"



**TASK**
1. Write if…else to print:
"Empty" if string length is 0
"Short" if 1–5 characters
"Medium" if 6–10 characters
"Long" if more than 10 characters


2. Write a program that calculates the ticket price 
based on age with the following conditions: age below
12 pay a ticket price of 5, age below 18 pay a ticket 
price of 10, age below 60 pay a ticket price of 20,
age over 60 play a ticket price of 15.


3.Write a program that calculates a discount based on the
 purchase amount.Prices equal or over 100 discount have a 
 discount of 20. Prices equal or over 50 have a discount of 10.
Otherwise discount is 0


4.Write an if…else that prints "Match" if a variable val is the 
number 5 or the string "5", but does not match "05" or 5.0.


5.Given a variable str, write an if…else that prints:
"Empty" if it’s an empty string or whitespace only
"Number" if it can be converted to a number (e.g., "123")
"Text" otherwise

"" -> length == 0 -> empty
"  " -> trim -> "" -length == 0

6.Write if…else to handle a variable num such that:
Print "Integer" if it’s a whole number
Print "Float" if it’s a number but has decimals
Print "Not a number" otherwise

12 - 12.45 -> Number

7.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer

September -> september -> 

8.Write a JavaScript that takes 3 numeric inputs and outputs them
in ascending order from smallest to largest


9.Write a program to check whether the last digit entered by a user is divisible by 3


                **JS DATA STRUCTURES**
-> Use d/ss to store multiple values in variables
1.Arrays
2.Objects

                **JS ARRAYS**
-> A data structure used to hold muliple values in an ordered manner
-> represented using []
-> this is the equivalent of lists in Python

                **Properties of Arrays**
1.They are ordered  - uses indexing
        N/B:- *No -ve indexing in JS arrays
2.They are mutable - values can be changed
3.They can contain multiple values of any data type

-> Values in an array are comma-separated

                **Array Operations**
1.Creating an array 
2.Accessing values in an array - use indexing 
        -> indexing is zero based 
3.Updating values in an array - use index 
4.Determine the no of values in an array => length
5.Adding items to an array:
        a) Add at the end - push()
        b) Add at the beginning - unshift()
6.Removing items from an array:
        a) Remove the first item - shift()
        b) Remove the last item - pop()

        **task**
        **Research on what each of the methods below do and how they're used:
7.splice() - adds , removes or replaces elements depending on parameter signature
        -> .splice(start, delete count, items to add)
8.slice() - takes a portion of an array to create a new array
        -> slice(start,end)
9.indexOf() - returns the position of the first occurrence of a value in an array
10.lastIndexOf() - returns the position of the last occurrence of a value in an array
11.includes() - checks for the existence of a value in an array and returns boolean
12.sort() - sorts an array alphabetically by default
13.reverse() - reverses the order of the array elements
14.join() - joins array elements to a string
15.toString() - converts an array into a comma-separated string
16.copyWithin() - extracts a portion of an array and copies that portion within the same array
                -> copyWithin(target,start,end)
17.at()-returns an element at a specified position 
        -> allows -ve indexing



                **OBJECTS**
-> Objects are data structures that store data in key-value pairs
-> Equivalent of Python 
                **Properties of Objects**
1.They store data in key-value pairs
2.They use keys to access values
3.Keys are unique 
4.Keys have to be strings
5.Values can be of any data type

-> represented using {}
-> properties are comma-separated

let person ={
        "name":"Alice",
        "age":25,
        "address":"123 Kimathi St"
}

*Properties - this is the combination of keys and values
property = key + value

Object Operations
1.Creating an Object
2.Accessing values in an object -> use keys
        a)Dot notation
        -> use dot operator (.) followed by the key
        -> dot notation can only be used with keys that follow identifier (variables) naming rules
        -> dot notation cant work for keys with spaces

        b)Bracket notation
        -> uses square brackets taking keys as strings ["key"]
        -> can accept keys with spaces

Object Methods
1. .keys() - returns all keys of on object in an array
2. .values() - returns all values of an oobject in an array
3. .entries() - returns all key-value pairs in an array of arrays

**TASK**
1.slide 69 & 70 -> arrays
2.slide 75 & 76 -> objects

3. In the object below , output the following values:
a) "Deploy to Netlify"
b.)"updates"
c.)"Lake View Road" 
d.)"PostgreSQL"


const userProfile = {
  id: 101,
  name: {
    first: "Brian",
    last: "Letting"
  },
  contact: {
    email: "jeff@example.com",
    phones: ["+254700000001", "+254700000002"]
  },
  address: {
    current: {
      city: "Nairobi",
      street: "Westlands Ave",
      postalCode: "00100"
    },
    previous: [
      {
        city: "Eldoret",
        street: "Main Street",
        postalCode: "30100"
      },
      {
        city: "Kisumu",
        street: "Lake View Road",
        postalCode: "40100"
      }
    ]
  },
  preferences: {
    theme: "dark",
    language: "en",
    notifications: {
      email: true,
      sms: false,
      push: ["promotions", "updates"]
    }
  },
  projects: [
    {
      id: 1,
      name: "POS System",
      technologies: ["React", "FastAPI", "PostgreSQL"],
      tasks: [
        { title: "Set up DB", done: true },
        { title: "Design UI", done: false }
      ]
    },
    {
      id: 2,
      name: "Portfolio Website",
      technologies: ["HTML", "CSS", "JavaScript"],
      tasks: [
        { title: "Create About Page", done: true },
        { title: "Deploy to Netlify", done: false }
      ]
    }
  ]
};


**SPREAD & REST OPERATOR**
1.Spread(...)
-> used to expand or unpack items in arrays or objects - unpacks elements
2.Rest (...)
-> used to group many items or values into a single array - packs elements

**Optional Chaining
- Is a way to safely access deeply nested properties in objects without running into errors
-uses ? operator

Kisumu ----- Nakuru ----- Nairobi ----- Voi ------ Mombasa


***Task***
1.Without using loops or reverse() method , reverse the following array
        const arr = [10,20,30,40,50]

2.Split an array into chunks of size n using spread and rest.
        const arr2 = [1,2,3,4,5,6,7,8]

3.
const userProfile = {
  id: 101,
  name: "John Doe",
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  posts: [
    { id: 1, title: "Hello", comments: [{ text: "Nice post!" }] },
    { id: 2, title: "World" },
  ],
  getStatus: () => "Active",
};

// TASKS:

// 1. Get the user's preferred theme, default to "light" if missing.
// 2. Check if the user has SMS notifications enabled; default to false.
// 3. Get the text of the first comment of the second post; default to "No comments".
// 4. Call the getStatus function safely; default to "Unknown" if missing.
// 5. Safely access a deeply nested field that doesn't exist (e.g., userProfile.settings.layout.mode); default to "standard".


**Coalesce**
-> used to provide a default value when data is null or undefined
-> uses ?? operator


**LOOPING**
-A block of code that executes repeatedly until a specified condition is met
**types of loops**
1.for loop - uses the for keyword
        -used when the no of iterations is known or can be predicted
2.while loop - uses the while keyword
        - will keep executing as long as the condition is true 

for loop syntax:
for(initialization; condition; update){
        //block of code executing repeatedly
}
*initialization - defines the starting point of your loop
*condition - defines the condition to be met 
         - as long this condition is true , the loop continues executing
*update -> increment or decrement

1.Loop through an array
2.Sum numbers from 1 to 10
4.Loop backwards using --


**Task**
1.Read on nested loops && break in JS - research
2.Use while loop to sum numbers from 1 to 10
3.Task on slide 79 

**Nested Loops**
-A loop within another loop
-For every single iteration of the outer loop , the inner loop executes to completion

**Break**
-A keyword used to stop the loop immediately
-breaks out of a loop stopping the repititive process

**Functions**
-> A block of reusable code that performs a specific task
**Why use Functions?**
1.Reusability of code
2.Modularity - breaking a large codebase into smaller manageable chunks
3.Code Organization & Readability

**syntax of functions in JS

function function_name(){
       //block of code to be executed - function body
}

function_name() -> function call

**parts of a function**
1.function definition - function keyword + function_name + parameters(optional)
2.function body- block of code to be executed by the function
3.function call- calling  function by its naame to execute code in the function body


**conventinally functions work with the return keyword
--> return - gives a value back and signifies the end of a function

**Variable Scopes**
-> Defines where a variable is accessible in a program
-> 1.Global scope /global variables - accessible anywhere in the program
-> 2.Local scope / Block scope / Local variables - accessible only within their defined blocks 

**Parameters && Arguments**
->Parameter -- placeholder variable passed in the function definition as a placeholder 
                to real values
->Argument -- the real values passed in place of placeholders when calling a function


**TASK**
1.Slide 80 - questions 1 to 20 provided in the link 
->no.14,
About
No description, website, or topics provided.
Resources
 Readme
 Activity
Stars
 0 stars
Watchers
 0 watching
Forks
 1 fork
Report repository
Releases
No releases published
Packages
No packages published
Languages
JavaScript
82.7%
 
HTML
17.3%
Footer
© 2026 GitHub