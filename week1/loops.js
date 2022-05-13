// let favouriteDrinks = [
//     "coke",
//     "Fanta",
//     "Ribena",
//     "Redbull"
// ];

// // console.log(favouriteDrinks[0]);
// // console.log(favouriteDrinks[1]);
// // console.log(favouriteDrinks[2]);

// // for(let i = 0; i < favouriteDrinks.length; i++) {
// //     console.log(favouriteDrinks[i]);
// // }

// let multiplesTwo = []

// for(let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`)

// let age = 15;

// while(age < 18) {
//     console.log("You're a child!");
//     age++;
// }

// console.log("You're an adult");

// let cards = ["diamond", "spade", "heart", "club"];
// let currentCard = "club";

// while(currentCard != "spade") {
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);

// Activity 1
// Create an array that lists your favourite films, up to
// 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array

let favouriteFilms = [
    "The OC",
    "Stranger Things",
    "American History X",
    "Training day"
];

favouriteFilms.push("The Godfather", "Scarface")

for(let i = 0; i < favouriteFilms.length; i++) {
    console.log(favouriteFilms[i]);
}

// Activity 2:
// Generate 6 random numbers between 1-50 and log them to the console.

for (let i = 0; i <6; i++) {
    console.log(Math.floor(Math.random() * 50))
}

// Activity 3:
// If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

for (let i = 9; i>=0; i--) {
    console.log(i)
}

// activity 4

let myFilms = ["batman", "superman", "star wars", "avengers"]

for (let i = 0; i <myFilms.length; i++){
    if (myFilms[2] === "Ghostbusters"){
        console.log("yay, its ghostbusters!")
        break
    } else {
        console.log("Boo! WWe want Ghostbusters!")
        break
    }
}

// activity 5

let num = Math.floor(Math.random() * 30)
for (let i = 0; i < 6; i++){
    console.log(num)
    if (num % 7 == 0){
    console.log(` ----- ${num} is divisble by 7!`)
    }
  num = Math.floor(Math.random() * 30)
}

// // Activity 6 

let chrisFollowers = ['Ben', 'Jordan', 'Dan', 'John'];
let johnFollowers = ['Ben', 'Jordan', 'Dan', 'Chris'];
for (let i = 0; i<chrisFollowers.length; i++){
    for (let j = 0; j<johnFollowers.length; j++){
    }
    if (chrisFollowers[i] === johnFollowers[i]){
        console.log(`${chrisFollowers[i]} is in both arrays!`)
    }
}

// activity 7

let result = '';
let i = 0;
do {
    i = i + 1;
    result = result + i;
} while (i < 5);
console.log(result);

let age=24;
if(age>18){
console.log(`${age} - £8`)

} else if (age>18){
console.log(`${age} - £10.95`)
}
else {
console.log(`${age} -£7.50`)
}

let favSongs = [
    "Grace",
    "Something",
    "Stairway To Heaven"
];

console.log(favSongs[0]);
console.log(favSongs[1]);
console.log(favSongs[2]);