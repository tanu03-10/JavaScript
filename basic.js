console.log("heyyyy");

// numberss
// let age = 20;
// let marks = 95;
// let price = 99.50;

// console.log(age);
// console.log(marks);
// console.log(price);

// number operations
let a = 10;
let b = 5;

console.log(a + b);  // 15
console.log(a - b);  // 5
console.log(a * b);  // 50
console.log(a / b);  // 2
console.log(a % b);  // 0
console.log(a ** b); // 100000

// number methods
let num = 10.5678;

console.log(num.toFixed(2));
console.log(Number.isInteger(num));
console.log(num.toPrecision(5));

// name (string use for name)
// let name = "Tanu";
// name = ' tanu kumari'  //we can change name like this

// let firstName = "Tanu";
// let lastName = "Kumari";
// let fullName = firstName + " " + lastName; //string concatenation
// console.log(fullName);

// console.log(name);
// console.log(typeof name);

//template literals
// let name = "Tanu";
// let age = 20;

// console.log(`My name is ${name} and I am ${age} years old.`);

// string method 
let text = "JavaScript";

console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(0));
console.log(text.includes("Script"));

// statement
let agee = 20;          // declaration statement

if (agee >= 18) {       // if statement
    console.log("Adult");
}

for (let i = 1; i <= 3; i++) {   // loop statement
    console.log(i);
}

// expression
let x = 10;
let y = 20;

let z = x + y;
console.log(z);

// literals
let age = 20; //number literals
let name = "Tanu"; //string
let result = true; // boolean
let fruits = ["Apple", "Mango", "Banana"]; // array literals

let STUDENT = {  //object letarals
    name: "Tanu",
    age: 20
};

// function  
function greet() {
    console.log("Hello Tanu");
}

greet();

// function with parameter
function add(a, b) {
    console.log(a + b);
}

add(10, 20);

// object 
let studentt = {
    name: "Tanu",
    age: 20,
    course: "CSE"
};

console.log(studentt.name);
console.log(studentt.age);

// retrieval from object
// let Student = {
//     name: "Tanu",
//     age: 20
// };

// console.log(Student.name);
// console.log(Student["age"]);

// update object
let student = {
    name: "Tanu",
    age: 20
};

student.age = 21;

console.log(student.age);

// Reference
let student1 = {
    name: "Tanu"
};

let student2 = student1;

student2.name = "Riya";

console.log(student1.name);

