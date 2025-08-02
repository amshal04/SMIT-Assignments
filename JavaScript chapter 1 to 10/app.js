// ************************* Chapter 1 ALERTS Start *******************************************

// Question 1. Write a script to greet your website visitor using JS alert box.
alert("Welcome to our website! We hope you have a great experience.");

// Question 2. Write a script to display following message on your web page:
alert("Error! Please enter a valid password.");

// Question 3. Write a script to display following message on your web page: (Hint : Use line break) 
alert("Welcome to JS Land.... \n Happy Coding!");

// Question 4. Write a script to display following messages in sequence: 
alert("Welcome to JS Land....");
alert("Happy Coding!");

// Question 5. Generate the following message through browser’s developer console:
console.log("Hello... I can run JS through my web browser's console")

// Question 6 & 7 solve in index.html file 


// ************************* Chapter 1 ALERTS End *******************************************




// ************************* Chapter 2 VARIABLES FOR STRINGS Start *******************************************

// Question 1. Declare a variable called username.
var username = "Amshal Tariq";
alert("username")


// Question 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var a = "myName";
var b = "Amshal Tariq"; 
alert(b)

// Question 3.  Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message.
// c) Display the message in alert box.
var message;
message = "Hello World";
alert(message);


// Question 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var studentName = "Jhone Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(studentName);
alert(age);
alert(course);

// Question 5. Write a script to display the following alert using one JS variable:
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(pizza);


// Question 6.  Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = "example@example.com";
alert("My email address is " + email);

// Question 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book;
book = "A smarter \n way to learn JavaScript"
alert("I am trying to learn from the Book " + book)

// Question 8. Write a script to display this in browser through JS
document.write("Yah! I can write HTML content through JavaScript");


// Question 9. Store following string in a variable and show in alert and browser through JS

// var design = “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”;
// alert(design);


// ************************* Chapter 2 VARIABLES FOR STRINGS End *******************************************



// ************************* Chapter 3 VARIABLES FOR NUMBERS  Start *******************************************


// Question 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 15;
alert("I am " +  age + " years old");

// Question 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitCount = 14;
alert("You have visited this site " + visitCount + " times")

// Question 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1990;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is " + typeof birthYear + "<br>");

// Question 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: a. Visitor’s name  b. Product title  c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;

document.write("<b>" + visitorName + "</b> ordered <b>" + quantity + " " + productTitle + "(s)</b> on XYZ Clothing store");


// ************************* Chapter 3 VARIABLES FOR NUMBERS  End *******************************************





// ************************* Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL  Start *******************************************

// Question 1. Declare 3 variables in one statement.
var1 = "Hello", var2 = "World", var3 = 2025;


// Question 2. Declare 5 legal & 5 illegal variable names.

 // ************************* Legal variable names**********************
//   myVar;
//   _privateVar;
//   $money;
//   userName1;
//   camelCaseExample;

 //  ************************* Illegal variable names***************** 
//   123name;      
//   my-name;      
//  let var;          
//  let let;          
//   user name;    


// *********Question 3 solve in index.html file***********


 

// ************************* Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL  End *******************************************




// ************************* Chapter 5 MATH EXPRESSIONS Start *******************************************

// Question 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = 10;
  var num2 = 5;
  var sum = num1 + num2;
  document.write("Sum of " + num1 + " and " + num2 + " is " + sum);

// Question 2. Repeat task1 for subtraction, multiplication, division & modulus.
 var num1 = 10;
  var num2 = 5;

  document.write("Subtraction: " + (num1 - num2) + "<br>");
  document.write("Multiplication: " + (num1 * num2) + "<br>");
  document.write("Division: " + (num1 / num2) + "<br>");
  document.write("Modulus: " + (num1 % num2) + "<br>");


// Question 3. Do the following using JS Mathematic Expressions  a. Declare a variable.  b. Show the value of variable in your browser like “Value after variable declaration is: ??”.  c. Initialize the variable with some number.  d. Show the value of variable in your browser like “Initial value: 5”.  e. Increment the variable.  f. Show the value of variable in your browser like “Value  after increment is: 6”.  g. Add 7 to the variable.  h. Show the value of variable in your browser like “Value after addition is: 13”.  i. Decrement the variable.  j. Show the value of variable in your browser like “Value after decrement is: 12”. k. Show the remainder after dividing the variable’s value by 3.  l. Output : “The remainder is : 0”.
var a;
  document.write("Value after variable declaration is: " + a + "<br>");

  a = 5;
  document.write("Initial value: " + a + "<br>");

  a++;
  document.write("Value after increment is: " + a + "<br>");

  a = a + 7;
  document.write("Value after addition is: " + a + "<br>");

  a--;
  document.write("Value after decrement is: " + a + "<br>");

  var remainder = a % 3;
  document.write("The remainder is: " + remainder);


// Question 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
 var ticketPrice = 600;
  var totalCost = ticketPrice * 5;
  document.write("Total cost to buy 5 tickets is: " + totalCost + " PKR");


// Question 5. Write a script to display multiplication table of any number in your browser. E.g
var number = 4;
  document.write("Multiplication Table of " + number + "<br>");
  for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
  }



// Question 6.  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.  a. Store a Celsius temperature into a variable.  b. Convert it to Fahrenheit & output “NNoC is NNoF”.  c. Now store a Fahrenheit temperature into a variable.  d. Convert it to Celsius & output “NNoF is NNoC”. Conversion Formulae:
 var celsius = 25;
  var fahrenheit = (celsius * 9 / 5) + 32;
  document.write(celsius + "°C is " + fahrenheit + "°F<br>");

  var fahren = 70;
  var celsiusConverted = (fahren - 32) * 5 / 9;
  document.write(fahren + "°F is " + celsiusConverted + "°C");



// Question 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables  a. Price of item 1  b. Price of item 2  c. Ordered quantity of item 1  d. Ordered Quantity of item 2  e. Shipping charges  Compute the total cost & show the receipt in your browser.
 var price1 = 650;
  var price2 = 100;
  var quantity1 = 3;
  var quantity2 = 7;
  var shipping = 100;

  var total = (price1 * quantity1) + (price2 * quantity2) + shipping;

  document.write("Price of item 1 is " + price1 + "<br>");
  document.write("Quantity of item 1 is " + quantity1 + "<br>");
  document.write("Price of item 2 is " + price2 + "<br>");
  document.write("Quantity of item 2 is " + quantity2 + "<br>");
  document.write("Shipping Charges " + shipping + "<br><br>");
  document.write("Total cost of your order is " + total + " PKR");



// Question 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var totalMarks = 980;
  var marksObtained = 604;
  var percentage = (marksObtained / totalMarks) * 100;

  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + marksObtained + "<br>");
  document.write("Percentage: " + percentage + "%");




// Question 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
 var dollars = 10;
  var riyals = 25;
  var totalPKR = (dollars * 104.80) + (riyals * 28);
  document.write("Total Currency in PKR: " + totalPKR);



// Question 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:  a. Add 5  b. Multiply by 10  c. Divide the result by 2  Perform all calculations in a single expression
var result = ((5 + 5) * 10) / 2;
  document.write("Result of ((5 + 5) * 10) / 2 is: " + result);



// Question 11. The Age Calculator: Forgot how old someone is?  Calculate it!  a. Store the current year in a variable.  b. Store their birth year in a variable.  c. Calculate their 2 possible ages based on the stored values.  Output them to the screen like so: “They are either NN or NN  years old”.
var currentYear = 2025;
  var birthYear = 2005;
  var age1 = currentYear - birthYear;
  var age2 = age1 - 1;

  document.write("They are either " + age2 + " or " + age1 + " years old.");



// Question 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable.  b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142)Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 20;
  var pi = 3.142;

  var circumference = 2 * pi * radius;
  var area = pi * radius * radius;

  document.write("<h3>The Geometrizer</h3>");
  document.write("Radius of the circle is: " + radius + "<br>");
  document.write("The circumference is: " + circumference + "<br>");
  document.write("The area is: " + area + "<br>");



// Question 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.  a. Store your favorite snack into a variable  b. Store your current age into a variable.  c. Store a maximum age into a variable.  d. Store an estimated amount per day (as a number).  e. Calculate how many would you eat total for the rest of your life. Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var favoriteSnack = "Chocolate Chip Cookies";
  var currentAge = 20;
  var maxAge = 80;
  var amountPerDay = 3;

  var yearsLeft = maxAge - currentAge;
  var totalSnacks = yearsLeft * 365 * amountPerDay;

  document.write("<h3>The Lifetime Supply Calculator</h3>");
  document.write("Favorite snack: " + favoriteSnack + "<br>");
  document.write("Current age: " + currentAge + "<br>");
  document.write("Estimated maximum age: " + maxAge + "<br>");
  document.write("Amount per day: " + amountPerDay + "<br>");
  document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");



// ************************* Chapter 5 MATH EXPRESSIONS End *******************************************



// ************************* Chapter 6 - 9 Start *******************************************

// Question 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var number = 10;

  document.write("The value of number is: " + number + "<br><br>");

  document.write("The value of ++number is: " + (++number) + "<br>");
  document.write("Now the value of number is: " + number + "<br><br>");

  document.write("The value of number++ is: " + (number++) + "<br>");
  document.write("Now the value of number is: " + number + "<br><br>");

  document.write("The value of --number is: " + (--number) + "<br>");
  document.write("Now the value of number is: " + number + "<br><br>");

  document.write("The value of number-- is: " + (number--) + "<br>");
  document.write("Now the value of number is: " + number + "<br><br>");
  
  

// Question 2. What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;  Explain the output at each stage: --a; --a - --b;  --a - --b + ++b; --a - --b + ++b+b--;
 document.write("Explanation:<br>");
  document.write("--a = 1<br>");
  document.write("--a - --b = 1 - 0 = 1<br>");
  document.write("1 + ++b = 1 + 1 = 2<br>");
  document.write("2 + b-- = 2 + 1 = 3<br>");
  document.write("Final result: 3<br>");
  document.write("Final a: " + a + "<br>");
  document.write("Final b: " + b);                                                                                                                                        
// Question 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter your name:");
  document.write("Hello " + userName + ", welcome to JavaScript!");


// Question 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.
 var tableNumber = prompt("Enter a number for multiplication table:", 5);
  tableNumber = +tableNumber || 5; 

  document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");
  for (var i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
  }



// Question 5. Take  a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var subject1 = prompt("Enter subject 1:");
  var subject2 = prompt("Enter subject 2:");
  var subject3 = prompt("Enter subject 3:");

  var totalMarks = 100;

  var marks1 = +prompt("Enter marks for " + subject1 + ":");
  var marks2 = +prompt("Enter marks for " + subject2 + ":");
  var marks3 = +prompt("Enter marks for " + subject3 + ":");

  var totalObtained = marks1 + marks2 + marks3;
  var overallTotal = totalMarks * 3;
  var percentage = (totalObtained / overallTotal) * 100;

  document.write("<h3>Marksheet</h3>");
  document.write("<table border='1' cellpadding='5'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
  document.write("<tr><td><strong>Total</strong></td><td>" + overallTotal + "</td><td>" + totalObtained + "</td></tr>");
  document.write("</table><br>");
  document.write("Percentage: " + percentage.toFixed(2) + "%");

// ************************* Chapter 6 - 9 End *******************************************