// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// var temp = 35
// var temp = 350
// var temp = 212
// var temp = "hello"

// write a conditional statement based on the input of a number
// the number can be above boiling, at boiling, or below
// specific first - at boiling, doesn't matter which on is next
// based on the prompt, don't need an else right now
// added error handling in the else statement

if(temp === 212){
  console.log("212 is at boiling point")
} else if(temp < 212){
  console.log(`${temp} is below boiling point`)
} else if(temp > 212){
  console.log(`${temp} is above boiling point`)
} else {
  console.log("something went wrong")
}


// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

// concat two variables and call length, console.log result
console.log(myNumbers1.concat(myNumbers2).length)

// var allMyNumbers = myNumbers1.concat(myNumbers2)
// console.log(allMyNumbers.length)

// myNumbers1.push(myNumbers2)
// console.log(myNumbers1.flat().length)


// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"

// JavaScript has a reverse method but it only works on arrays
// console.log(myString1.reverse())
// TypeError: myString1.reverse is not a function
// Split the stiring into an array, then reverse, then join

// var splitMyString1 = myString1.split("")
// console.log(splitMyString1)
// var reverseMyString1 = splitMyString1.reverse()
// console.log(reverseMyString1)
// console.log(reverseMyString1.join(""))


console.log(myString1.split("").reverse().join(""))

// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

var number1 = 42
var number2 = 27

// var number1 = 7
// var number2 = 19

// conditional statement that evaluates which number is larger
// executable code is subtracting the numbers appropriately
// two statements needed

if(number1 > number2){
  console.log(number1 - number2)
} else {
  console.log(number2 - number1)
}

// console.log(Math.max(number1, number2) - Math.min(number1, number2))


// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

// var numberRefactor1 = 27
// var numberRefactor2 = 24

// if(numberRefactor1 > numberRefactor2){
//   console.log(numberRefactor1 - numberRefactor2)
// } else if(numberRefactor1 < numberRefactor2){
//   console.log(numberRefactor2 - numberRefactor1)
// } else {
//   console.log("your input is not a number")
// }

// if(isNaN(numberRefactor1) || isNaN(numberRefactor2)){
//   console.log("Your input is not a number")
// } else if(numberRefactor1 > numberRefactor2){
//   console.log(numberRefactor1 - numberRefactor2)
// } else if(numberRefactor1 < numberRefactor2){
//   console.log(numberRefactor2 - numberRefactor1)
// }

if(typeof numberRefactor1 !== "number" || typeof numberRefactor2 !== "number"){
  console.log("Your input is not a number")
} else if(numberRefactor1 > numberRefactor2){
  console.log(numberRefactor1 - numberRefactor2)
} else if(numberRefactor1 < numberRefactor2){
  console.log(numberRefactor2 - numberRefactor1)
}
