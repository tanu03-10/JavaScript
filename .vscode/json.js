// JSON and JavaScript Object
// javascript object
let student = {
    name: "Tanu",
    age: 20
};

console.log(student.name);

// JSON - JSON mein keys double quotes mein hoti hain.
let data = {
    "name": "Tanu",
    "age": 20
};

// Object → JSON
let Student = {
    name: "Tanu",
    age: 20
};

let jsonData = JSON.stringify(Student);

console.log(jsonData);

// JSON → Object
let jsondata = '{"name":"Tanu","age":20}';

let students = JSON.parse(jsondata);

console.log(students.name);