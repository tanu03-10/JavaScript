// Array
// let fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);

// Array method
// push- add an element in last
let fruits = ["Apple", "Mango"];

fruits.push("Banana");

console.log(fruits);

// fruits.pop(); // pop - remove last elemnet
// fruits.unshift("Orange"); // unshift - add in beginning
// fruits.shift(); //shift- remove from beginning

// include
let fruit = ["Apple", "Mango", "Banana"];

console.log(fruit.includes("Mango"));

// indexof
console.log(fruit.indexOf("Banana"));

// more array methods
// forEach()
// let numbers = [10, 20, 30];

// numbers.forEach(function(num) {
//     console.log(num);
// });


// Map()
// let Numbers = [1, 2, 3];
// let result = Numbers.map(function(num) {
//     return num * 2;
// });
// console.log(result);


// filter()
// let numbers = [10, 15, 20, 25];

// let result = numbers.filter(function(num) {
//     return num > 15;
// });

// console.log(result);


// reduce 
// let numbers = [10, 20, 30];

// let total = numbers.reduce(function(sum, num) {
//     return sum + num;
// }, 0);

// console.log(total);


// sort()
// let numbers = [30, 10, 20];

// numbers.sort();

// console.log(numbers);


// Array Dimensions
// one dimensional array

// let numbers = [10, 20, 30];
// console.log(numbers[0]);

// two dimensional array
// let numbers = [
//     [10, 20],
//     [30, 40]
// ];

// console.log(numbers[0][1]);


// three dimensional array
let numbers = [
    [
        [10, 20],
        [30, 40]
    ]
];

console.log(numbers[0][1][0]);




// regular expression
// 1. Basic pattern
let text = "Hello JavaScript";

let pattern1 = /JavaScript/;

console.log(pattern1.test(text));


// 2. Check only numbers
let number = "12345";

let pattern2 = /^[0-9]+$/;

console.log(pattern2.test(number));


// 3. Check only letters
let name = "Tanu";

let pattern3 = /^[A-Za-z]+$/;

console.log(pattern3.test(name));


// 4. Check mobile number (10 digits)
let mobile = "9876543210";

let pattern4 = /^[0-9]{10}$/;

console.log(pattern4.test(mobile));


// 5. Check email
let email = "tanu@gmail.com";

let pattern5 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(pattern5.test(email));


// 6. Check password
let password = "Tanu123";

let pattern6 = /^(?=.*[A-Za-z])(?=.*[0-9]).{6,}$/;

console.log(pattern6.test(password));


// 7. Search a word
let sentence = "I am learning JavaScript";

console.log(sentence.match(/JavaScript/));


// 8. Replace a word
let msg = "Hello Tanu. Hello Tanu.";

let result = msg.replace(/Tanu/g, "Student");

console.log(result);


// 9. Case-insensitive search
let word = "JavaScript";

console.log(/javascript/i.test(word));


// 10. Find all numbers
let data = "I have 10 apples and 20 bananas.";

console.log(data.match(/[0-9]+/g));


// this keyword - this generally current object/context ko refer karta hai.
// let student = {
//     name: "Tanu",

//     showName: function() {
//         console.log(this.name);
//     }
// };

// student.showName();


// call() - call() se function ko kisi specific object ke saath call kar sakte hain.
let Student = {
    name: "Tanu"
};

function greet() {
    console.log("Hello " + this.name);
}

greet.call(Student);

// apply() - apply() bhi call() jaisa hai, difference arguments dene ka hai.
let studentt = {
    name: "Tanu"
};

function greet(city, course) {
    console.log(this.name);
    console.log(city);
    console.log(course);
}

greet.apply(studentt, ["Jaipur", "CSE"]);


// bind() - bind() function ko permanently ek object ke this ke saath bind karta hai.
let student = {
    name: "Tanu"
};

function greet() {
    console.log("Hello " + this.name);
}

let newFunction = greet.bind(student);

newFunction();

// Async - await :- Async/await Promises ko easy way mein handle karne ke liye use hota hai.
function getData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Data received");
        }, 2000);
    });
}

async function showData() {
    let result = await getData();

    console.log(result);
}

showData();

// Async-Await with try/catch
function getData() {
    return new Promise(function(resolve, reject) {

        let success = true;

        if (success) {
            resolve("Data received");
        } else {
            reject("Something went wrong");
        }

    });
}

async function showData() {

    try {
        let result = await getData();
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }

}

showData();