// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("better take an umbrella")
// }

// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let place = "Manc";
// let weather = "cloudy";

// if (place == "Manc" && weather == "sunny") {
//     console.log("check again");
// }
// else if (place == "Manc" && weather == "rain") {
//     console.log("obvs");
// }
// else {
//     console.log("what it isn't raining?")
// }

// let car = "Peugeot";

// switch(car) {
//     case "Ford":
//     case "GM":
//             console.log("you've got an American car!");
//             break;
//     case "Peugeot":
//     case "Citroen":
//         console.log("You've got a French boy!");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese cars are dead quiet");
//         break
//     default:
//         console.log("Your car is not in the top ten companies in the world!!");

// }

// activity 1

// let age = 19

// if (age > 17) {
//     console.log("yes i can serve you")
// }
// else {
//     console.log("You aren't old enough")
// }

// let country = "UK"

// if (age > 17 && country == "UK") {
//     console.log("yes i can serve you")
// }
// else {
//     console.log("You aren't old enough")
// }

// activity 2

// let topping = "pineapple";

// switch(topping) {
//     case "pepporoni":
//     case "ham":
//         console.log("These are important ingredients for my pizza");
//         break;
//     case "tuna":
//     case "olives":
//         console.log(`I dont mind having ${topping} on my pizza`);
//         break;
//     case "anchovies":
//     case "pineapple":
//         console.log(`${topping} should not be on a pizza`);
// }

// activity 3

// let password = "hocuspocus"

// if (password.length < 8) {
//     console.log("password too short")
// }
// else {
//     console.log(password)
// }

// activity 4

// let num = 15

// if (num % 3 === 0 || num % 5 === 0) {
//     console.log("This number is divisible by 3 or 5")
// }
// else {
//     console.log("This number is not divisible by 3 or 5")
// }

// activity 5

// let num = 15

// if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizzbuzz")
// }
// else if (num % 5 === 0) {
//     console.log("buzz")
// }
// else if (num % 3 === 0) {
//     console.log("fizz")
// }

// activity 6

let num = 7261;
let numString = num.toString(); 
let reverseNumString = numString.split('').reverse().join('');

if (num == reverseNumString){
    console.log(`Yes ${num} is a palindrome`)
} else {
    console.log(`No ${num} is not a palindrome`)
}

// activity 7

let time = 9
let placeOfWork = "The pub"
let townOfHome = "Stockport"

if (time == 7) {
    console.log(`I'm home in ${townOfHome}`)
}
else if (time == 8) {
    console.log("I'm commuting")
}
else if (time == 9) {
    console.log(`I'm at ${placeOfWork} doing all the business`)
}
else {
    console.log("I'm somewhere else buddy")
}

// activity 8

let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
// counter go through whole array using length as limiter
for (let i = 0; i < vowelArr.length; i++){
//  console.log(string.lastIndexOf(vowelArr[i]));
// gets index of vowel in current iteration
    index = string.lastIndexOf(vowelArr[i]);
// compares current index to find highest index
if (index >= highestIndex ){
// so new highestindex becomes index
    highestIndex = index;
// won't reach last two nums in vowelarray
    lastVowel = vowelArr[i];
}
}

// This like logs the last Vowel to the console. 
console.log(lastVowel); 
// This line logs the index number of the last vowel. 
console.log(highestIndex)

// activity 9

let word = "ABBA";
if (word.charAt(0) == word.charAt(word.length-1)){
    console.log("True")
} else {
    console.log("False")
}

// activity 10

let num1 = 7;
let num2 = 7;
let sum = num1 + num2;

if (sum % 2 == 0){
    console.log(`The sum = ${sum} and is even.`)
} else {
    console.log(`${num1 * num2}`)
}