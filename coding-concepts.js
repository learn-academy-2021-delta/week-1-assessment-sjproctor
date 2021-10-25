// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2021"
// console.log(cohort.length)
// console.log("yo".length)

// a) Your answer: 10
// b) Verify and explain: Counts every character including spaces


// --------------------2) What will this log?

var greeting = "Hello World!"
// console.log(greeting[3])

// a) Your answer: l (the second one)
// b) Verify and explain: the index is the address, the values is what lives at the address


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: languages[1]


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"] TypeError: weekendDays.toUpperCase is not a function
// b) Verify and explain: Can't call a string method on an array


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)
// console.log(dataTypes.length)

// a) Your answer: 29 or 3
// b) Verify and explain: "number" - typeof you'll get back the name of the data type
