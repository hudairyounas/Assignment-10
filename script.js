//? Loop Exercise:
//? 1. Write a js program to print all natural numbers from 1 to n. - using while loop

// let naturalNum = 0;
// while (naturalNum <= 100) {
//     console.log(naturalNum);
//     naturalNum++;
// };

//? Write a js program to print all natural numbers in reverse (from n to 1). - using while loop

// let reverseNum = 100;
// while (reverseNum >= 0) {
//     console.log(reverseNum);
//     reverseNum--;
// }

//? 3. Write a js program to print all alphabets from a to z. - using while loop

// let alphabet = 'a';
// while (alphabet <= 'z') {
//     console.log(alphabet);
//     alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
// };

//? 4. Write a js program to print all even numbers between 1 to 100. - using while loop

// let evenNum = 0;
// while (evenNum <= 100) {
//     if (evenNum % 2 == 0) {
//         console.log(evenNum);
//     }
//     evenNum++;
// };

//? 5. Write a js program to print all odd number between 1 to 100.

// let oddNum = 0;

// while (oddNum <= 100) {
//     if (oddNum % 2 !== 0) {
//         console.log(oddNum);
//     }
//     oddNum++;
// };

//? 6. Write a js program to find sum of all natural numbers between 1 to n.

// let sumNaturalNum = 0;
// let naturalNum = 0;
// while (naturalNum < 100) {
//     sumNaturalNum += naturalNum;
//     naturalNum++;
//     console.log(sumNaturalNum);
// };

//? 7. Write a js program to find sum of all even numbers between 1 to n.

// let sumEvenNaturalNum = 0;
// let naturalNum = 0;

// while (naturalNum < 100) {
//     sumEvenNaturalNum += naturalNum;
//     naturalNum++
//     if (sumEvenNaturalNum % 2 === 0) {
//         console.log(sumEvenNaturalNum);
//     }
// }

//? 8. Write a js program to find sum of all odd numbers between 1 to n.

// let oddEvenNaturalNum = 0;
// let naturalNum = 0;

// while (naturalNum < 100) {
//     oddEvenNaturalNum += naturalNum;
//     naturalNum++;
//     if (oddEvenNaturalNum % 2 != 0) {
//         console.log(oddEvenNaturalNum);
//     }
// };

//? If-else exercise

//? 1. Write a js program to find maximum between two numbers.

// let num1 = 10;
// let num2 = 30;

// if (num1 >= num2) {
//     console.log(num1);
// } else {
//     console.log(num2);
// }

//? 2. Write a js program to find maximum between three numbers.

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// if (num1 >= num2) {
//     console.log(num1);
// } else if (num2 >= num3) {
//     console.log(num2);
// } else {
//     console.log(num3);
// }

//? 3. Write a js program to check whether a number is negative, positive or zero.


// let num1 = parseInt(0.1);

// if (num1 > 0) {
//     console.log("this number is positive");
// } else if (num1 === 0 ) {
//     console.log("This Number is 0");
// } else {
//     console.log("This number is negative");
// }


//? 4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// let num = 15;

// if (num % 5 === 0) {
//     console.log("This num is divided by 5");
// } else if (num % 11 === 0) {
//     console.log("This num is divided by 11");
// } else {
//     console.log("cannot divided");
// }

//? 5. Write a js program to check whether a number is even or odd.

// let num = 17;

// if (num % 2 === 0) {
//     console.log("This Number is even");
// } else {
//     console.log("This Number is odd");
// }

//? 6. Write a js program to check whether a year is leap year or not.a js program to check whether a character is alphabet or not.

// let year = 2024;
// if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//     console.log(year + ' is a leap year');
// } else {
//     console.log(year + ' is not a leap year');
// }


// let alphabet = "a";
// let charCode = alphabet.charCodeAt(0);

// if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     console.log(true);
// } else {
//     console.log(false);
// }

//? 8. Write a js program to input any alphabet and check whether it is vowel or consonant.

// let alphabet = "b";
// let charCode = alphabet.charCodeAt(0);

// if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     if (charCode == 97 || charCode == 101 || charCode == 105 || charCode == 111 || charCode == 117) {
//         console.log("Consonant");
//     } else {
//         console.log("Vowel");
//     }
// };

//? 9. Write a js program to input any character and check whether it is alphabet, digit or special character.

// let charCode = "7";
// charCode = charCode.charCodeAt(0);

// if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//     console.log("Alphabet");
// } else if (charCode >= 48 && charCode <= 57) {
//     console.log("Digit");
// } else {
//     console.log("Special Character");
// }

//? 10. Write a js program to check whether a character is uppercase or lowercase alphabet.

// let character = "B".charCodeAt(0);

// if (character >= 65 && character <= 90) {
//     console.log("UpperCase");
// } else {
//     console.log("Lowercase");
// };

//? 11. Write a js program to input week number and print week day.

// let weekNumber = 1;
// let weekDay;

// if (weekNumber === 1) {
//     console.log("Monday");
// } else if (weekNumber === 2) {
//     console.log("Tuesday");
// } else if (weekNumber === 3) {
//     console.log("Wednesday");
// } else if (weekNumber === 4) {
//     console.log("Thursday");
// } else if (weekNumber === 5) {
//     console.log("Friday");
// } else if (weekNumber === 6) {
//     console.log("Saturday");
// } else if (weekNumber === 7) {
//     console.log("Sunday");
// };

//? 12. Write a js program to input month number and print number of days in that month.

// let monthNum = 2;

// if (monthNum === 1) {
//     console.log("31 Days");
// } else if (monthNum === 2) {
//     console.log("28 Days");
// } else if (monthNum === 3) {
//     console.log("31 Days");
// } else if (monthNum === 4) {
//     console.log("30 Days");
// } else if (monthNum === 5) {
//     console.log("31 Days");
// } else if (monthNum === 6) {
//     console.log("30 Days");
// } else if (monthNum === 7) {
//     console.log("31 Days");
// } else if (monthNum === 8) {
//     console.log("31 Days");
// } else if (monthNum === 9) {
//     console.log("30 Days");
// } else if (monthNum === 10) {
//     console.log("31 Days");
// } else if (monthNum === 11) {
//     console.log("30 Days");
// } else if (monthNum === 12) {
//     console.log("31 Days");
// }

//? 13. Write a js program to count total number of notes in given amount.

// let angel1 = 60;
// let angel2 = 60;
// let angel3 = 60;

// if (angel1 + angel2 + angel3 === 180 && angel1 > 0 && angel2 > 0 && angel3 > 0) {
//     console.log("The triangle is valid.");
// } else {
//     console.log("The triangle is not valid.");
// };

//? 16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

// let angel1 = 60;
// let angel2 = 60;
// let angel3 = 60;

// if (angel1 + angel2 + angel3 === 180 && angel1 > 0 && angel2 > 0 && angel3 > 0) {
//     console.log("This is Equilateral Triangle");
// } else if ((angel1 === angel2 && angel1 !== angel3) || (angel1 === angel3 && angel1 !== angel2) || (angel2 === angel3 && angel2 !== angel1)) {
//     console.log("This is isosceles Triangle");
// } else if (angel1 !== angel2 && angel2 !== angel3 && angel1 !== angel3) {
//     console.log("This is scalene Triangle");
// }

//? 17. Write a js program to find all roots of a quadratic equation.

//? 18. Write a js program to calculate profit or loss.

//? 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//* Percentage >= 90% : Grade A
//* Percentage >= 80% : Grade B
//* Percentage >= 70% : Grade C
//* Percentage >= 60% : Grade D
//* Percentage >= 40% : Grade E
//* Percentage < 40% : Grade F


// let physics = 50;
// let Chemistry = 40;
// let Biology = 30;
// let Mathematics = 20;
// let Computer = 80;

// let totalMarks = physics + Chemistry + Biology + Mathematics + Computer;
// let percentage = (totalMarks / 500) * 100;
// console.log(percentage);

// if (percentage >= 90) {
//     console.log("Grade A");
// } else if (percentage >= 80) {
//     console.log("Grade B");
// } else if (percentage >= 70) {
//     console.log("Grade C");
// } else if (percentage >= 60) {
//     console.log("Grade D");
// } else if (percentage >= 40) {
//     console.log("Grade E");
// } else if (percentage < 40) {
//     console.log("Grade F");
// }


//? 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
//* Basic Salary <= 10000 : HRA = 20%, DA = 80%
//* Basic Salary <= 20000 : HRA = 25%, DA = 90%
//* Basic Salary > 20000 : HRA = 30%, DA = 95%

// let basicSalary = 20000;
// let hra, da;
// if (basicSalary <= 10000) {
//     hra = 0.2 * basicSalary;
//     da = 0.8 * basicSalary;
// } else if (basicSalary <= 20000) {
//     hra = 0.25 * basicSalary;
//     da = 0.9 * basicSalary;
// } else {
//     hra = 0.3 * basicSalary;
//     da = 0.95 * basicSalary;
// }

// let grossSalary = basicSalary + hra + da;

// console.log(`Basic Salary: $${basicSalary.toFixed(2)}`);
// console.log(`HRA: $${hra.toFixed(2)}`);
// console.log(`DA: $${da.toFixed(2)}`);
// console.log(`Gross Salary: $${grossSalary.toFixed(2)}`);


//? 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:

//* For first 50 units Rs. 0.50/unit
//* For next 100 units Rs. 0.75/unit
//* For next 150 units Rs. 1.20/unit
//* For unit above 250 Rs. 1.50/unit


// let units = 90;

// if (units >= 50) {
//     console.log(`Electricity Bill is ${0.50 * units}`);
// } else if (units <= 100) {
//     console.log(`Electricity Bill is ${0.75 * units}`);
// } else if (units <= 150) {
//     console.log(`Electricity Bill is ${1.20 * units}`);
// } else if (units > 250) {
//     console.log(`Electricity Bill is ${1.50 * units}`);
// }


