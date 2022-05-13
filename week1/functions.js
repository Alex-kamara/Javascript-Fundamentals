// const pressGrindBeans = () => {
//     console.log("grinding for 20 seconds");
// };

// pressGrindBeans();

// let coffeeIsGrinding = false

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("stopping the grind");
//         coffeeIsGrinding = false;
//     } else { 
//         console.log("grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }

// pressGrindBeans();


// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// }

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log("the temperature is " + getFahrenheit(15) + "°F");

// activity 1

const factorial = (n) => {
    if ((n === 0) || (n === 1)){
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(33));

// activity 2

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
    console.log(`order count = ${orderCount}`)
}

takeOrder("Pineapple", "Ham");
takeOrder("Cheese", "Tomatoe");
takeOrder("Chicken", "Bacon");

// activity 3

let pinNumber = 1066;
let balance = 2000;


const cashMachine = (pin, amount) => {
    if(pin === pinNumber && amount <= balance) {
        const newBalance = balance - amount;
        console.log(
            `Succesfull! You have withdrawn £${amount}, your new balance is £${newBalance}`
            );
    } else if (pin === pinNumber && amount > balance) {
        console.log(`You cannot withdraw more than your current balance of £${balance}`);
    } else if (pin != pinNumber) {
        console.log("Your pin is incorrect!");
    } else{
        console.log(`Your pin is incorrect or your balance isn't high enough`);
    }
};

cashMachine(1066, 3000); //Output you can not withdraw more than your current balance of £2000
cashMachine(1066, 200); //Succesfull! You have withdrawn £200, your new balance is £1800
cashMachine(1234, 200); //Your pin is incorrect
