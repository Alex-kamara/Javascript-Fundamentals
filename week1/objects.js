// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "cappuccino",
//         "latte",
//         "filter coffee",
//         "tea",
//         "hot chocolate"

//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with suprisingly priced sandwhich",
//     noOffer: "Sorry no offer",

//     openCafe(){
//         if(this.hasSpecialOffers){
//         return "Time for a specoial offer";
//         }   
//     },
//     closeCafe(){
//         return "we are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe());

// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// const person = {
//     name: "Alex",
//     age: 33,
//     favSongs: [
//         "Rock n Roll",
//         "FML",
//         "Wolves"
//     ]
// }

// console.log(person.favSongs)


// const alarmTypes = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am"
// }

// let day = "Monday"
// let alarm;

// if (day === "Saturday" || (day === "Sunday")){
//     console.log(alarmTypes.weekendAlarm)
// }else{
//     console.log(alarmTypes.weekdayAlarm)
// }

// Activity 1
// Let’s edit our person object to include...
// A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”

const person = {
    name: "Alex",
    age: 33,
    favSongs: [
        "Rock n Roll",
        "FML",
        "Wolves"
    ],
    sayHi(){
        return `Hello my name is ${this.name}`
    }
};

console.log(person.sayHi())


// activity 2

const pet = {
    name: "Ralph",
    typeOfPet: "Dog",
    age: 2,
    colour: "Brown",
    eat(){
        return `${this.name} is eating`},
        drink(){
            return `${this.name} is drinking`
        }
};

console.log(pet.eat());
console.log(pet.drink());

// activity 3

let order = [];
const coffeeShop = {
    branch:"manchester",
    drinksWithPrices:{"tea":1.00,"americano":2.00,"mocha":3.00,"latte":3.00,water:0},
    foodWithPrices:{"salad":2.00,"sandwich":3.00,"tunaJacket":4.50,"grape":15.00},
    drinksOrdered(drink1,drink2){
        let drinks = Object.keys(this.drinksWithPrices); 
        let drinkValues = Object.values(this.drinksWithPrices); 
        order.push(drinkValues[drinks.indexOf(drink1)]);
        order.push(drinkValues[drinks.indexOf(drink2)]);
        return `For drinks you've ordered ${drink1} and ${drink2}`;},
    foodOrdered(food1,food2){
        let foods = Object.keys(this.foodWithPrices); 
        let foodValues = Object.values(this.foodWithPrices); 
        order.push(foodValues[foods.indexOf(food1)]);
        order.push(foodValues[foods.indexOf(food2)]);
        return `For food you've ordered ${food1} and ${food2}`;
    }
}
console.log(coffeeShop.drinksOrdered("tea","mocha"));
console.log(coffeeShop.foodOrdered("salad","grape"));
let total = 0;
for(i=0;i<order.length;i++){
    total+=order[i];
}

console.log(`Your total comes to £${total}.`);