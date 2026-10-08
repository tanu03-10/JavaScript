// prototype
// let person = {
//     greet: function() {
//         console.log("Hello");
//     }
// };

// let student = Object.create(person);

// student.greet();

// reflection
// let Student = {
//     name: "Tanu",
//     age: 20
// };

// console.log(Object.keys(Student));
// console.log(Object.values(Student));
// console.log(Object.entries(Student));

// Enumeration
let student1 = {
    name: "Tanu",
    age: 20,
    course: "CSE"
};

for (let key in student1) {
    console.log(key, student1[key]);
}

// delete
let student2 = {
    name: "Tanu",
    age: 20,
    city: "Jaipur"
};

delete student2.city;

console.log(student2);

// Global variable / Global object
// unnecessarily global variables banana avoid karna better hai.  
let name = "Tanu";
function showName() {
    console.log(name);
}
showName();


// Function Object  JavaScript mein functions bhi objects ki tarah properties rakh sakte hain.
// function Student() {
//     console.log("Student function");
// }

// student.name = "Tanu";

// console.log(Student.name);


// Function Literals - Function ko variable mein store karna:
let addition = function(a, b) {
    return a + b;
};

console.log(addition(10, 20));

// Function Invocation / Calling
// Function ko execute karna = invocation/calling.
function hello() {
    console.log("Hello");
}

hello();

// Arguments 
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

// Return
function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);

// Exception - Error ko handle karne ke liye try...catch.
try {
    let x = y + 10;
}
catch (error) {
    console.log("Something went wrong");
}

// throww
let age = 15;

try {
    if (age < 18) {
        throw "You are not eligible";
    }
}
catch (error) {
    console.log(error);
}


// Arguments Types - JavaScript functions mein different types ke arguments pass kar sakte hain.
function show(value) {
    console.log(value);
}

show(10);
show("Tanu");
show(true);
// function mulltiple arguments v le skta hai 
function student(name, age, course) {
    console.log(name);
    console.log(age);
    console.log(course);
}

student("Tanu", 20, "CSE");

// Function khud ko call kare = recursion.
function count(n) {
    if (n == 0) {
        return;
    }

    console.log(n);
    count(n - 1);
}

count(5);

// Factorial
function factorial(n) {
    if (n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5));

// Scope
// Local Scope - x function ke bahar access nahi hoga.
// function test() {
//     let x = 10;

//     console.log(x);
// }

// test(); 
// Globle scope
let x = 10;

function test() {
    console.log(x);
}

test();


// closure - Inner function outer function ke variables ko remember karta hai.
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();

// SetTimeOut - Code ko delay ke baad execute karta hai.
console.log("Start");

setTimeout(function() {
    console.log("Hello");
}, 2000);

console.log("End");


// Callback-  ek function ko doosre function mein argument ke form mein dena.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Bye");
}

greet("Tanu", bye);




// Callback Hell -jab bahut saare callbacks ek ke andar ek aa jayein, code difficult ho jata hai.
setTimeout(function() {
    console.log("Step 1");

    setTimeout(function() {
        console.log("Step 2");

        setTimeout(function() {
            console.log("Step 3");

        }, 1000);

    }, 1000);

}, 1000);

// promises - Promise ka matlab hai ki asynchronous operation ka result future mein milega.
// three state of promises - pending , fullfilled and rejected.
let promise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Work completed");
    } else {
        reject("Work failed");
    }
});

promise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });