// console.log("All Around the World".charAt(7).toUpperCase())

// let i = 10;
// i += 2;
// console.log(i);

// let favouriteDrink = "coffee";

// console.log("My favourite drink is " + favouriteDrink);

// let name = "Alex";
// let age = 33;
// let favDrink = "coffee"

// age = 100
// favDrink = "Orange Juice"

// console.log(`My name is ${name} I am ${age} years old and my favourite drink is ${favDrink}.`)

// age = 100
// favDrink = "Orange Juice"

// activity 1

// let name = "Steve";
// let age = 33;
// let favColour = "blue";

// console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favColour}.`)

// name = "George";
// age = 21;
// favColour = "red";

// console.log(`My name is ${name}, I am ${age} years old and my favourite colour is ${favColour}.`)

// activity 2

// let breakfast = "oats"
// let lunch = "burgers"
// let dinner = "pasta"

// console.log(`Today I am eating ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`)

// breakfast = "toast"
// lunch = "baked patato"
// dinner = "chicken"

// console.log(`Tomorrow I am eating ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`)

// activity 3

// today=new Date();
// var cmas=new Date(today.getFullYear(), 3, 26);
// if (today.getMonth()==3 && today.getDate()>26) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }
// var one_day=10006060*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until my birthday!");

// Activity 3 - Create a program that calculates the number of days from today to your birth date.

// let myBirthday = new Date("2022-08-02")
// let dateToday = new Date()
// let calculateTime = myBirthday.getTime() - dateToday.getTime()
// let timeDifference = calculateTime / (10006060*24)
// console.log(`There are ${Math.round(timeDifference)} till my birthday`)


// activity 4

let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);