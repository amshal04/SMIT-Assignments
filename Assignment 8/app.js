// ASSIGNMENT 8 

// Chapter 17 to 20 Start

// Question 1. Declare and initialize an empty multidimensional array.

let emptyArr = [[], [], []];
console.log("Empty Multidimensional Array:");
console.log(emptyArr);

// Question 2. Declare and initialize a multidimensional array representing the following matrix:

let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
console.log("Initialized Matrix:");
console.log(matrix);


// Question 3. Write a program to print numeric counting from 1 to 10.

document.write("<h2>Numeric Counting:</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Question 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

let table = +prompt("Enter a table number");

let length = +prompt("Enter length of table");

document.write("<h2>Multiplication Table Of " + table + "</h2>" + "<h2>Length Of Table " + length + "</h2>");
for (let i = 1; i <= length; i++) {
    document.write(table,  " x " , i , " = " , (table * i) , "<br>");
}

// Question 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
    document.write("<br>" + fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
    document.write("</br></br>" + "Element at index " + i + " is " + fruits[i] + "");
}


// Question 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

document.write("<h3>Counting</h3>");
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<h3>Reverse counting</h3>");
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<h3>Even</h3>");
for (let i = 0; i <= 20; i += 2) {
    document.write(i + ", ");
}

document.write("<h3>Odd</h3>");
for (let i = 1; i <= 19; i += 2) {
    document.write(i + ", ");
}

document.write("<h3>Series</h3>");
for (let i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

// Question 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

let bakeryArr = ["cake", "apple pie", "cookie", "chips", "patties"];

let items = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();

let index = bakeryArr.indexOf(items);

if (index !== -1) {
    document.write("<br><br>" + items + " is <b>available</b> at index " + index + " in our bakery.");
} else {
    document.write("<br><br>" + "We are sorry. " + items + " is <b>not available</b> in our bakery.");
}

// Question 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

let x = [24, 53, 78, 91, 12];
document.write("<br><br>" + "<b>Array items:</b> " + x.join(", ") + "<br>");

let largest = Math.max(...x);
document.write("<b>The largest number is</b> " + largest);

// Question 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

let y = [24, 53, 78, 91, 12];
document.write("<br><br>" + "<b>Array items:</b> " + y.join(", ") + "<br>");

let smallest = Math.min(...y);
document.write("<b>The smallest number is</b> " + smallest + "<br><br>");

// Question 10. Write a program to print multiples of 5 ranging 1 to 100.

for (let i = 5; i <= 100; i += 5) {
    document.write(i + ", ");
}

// Chapter 17 to 20 End
