// Cascade/ Method chaining
// Ek method ke baad directly doosra method call karna.
let name = "  Tanu  ";

let result = name.trim().toUpperCase();

console.log(result);

let text = "hello";

console.log(text.toUpperCase().replace("HELLO", "TANU"));


// Currying - Function ko multiple small functions mein break karna
function add(a) {
    return function(b) {
        return a + b;
    };
}

let Result = add(10)(20);

console.log(Result);


// Memoization - Same calculation dobara na karni pade, result store kar lena.
function square() {
    let memory = {};

    return function(num) {
        if (memory[num]) {
            console.log("From memory");
            return memory[num];
        }

        let result = num * num;
        memory[num] = result;

        return result;
    };
}

let findSquare = square();

console.log(findSquare(5));
console.log(findSquare(5));


// Inheritance - Ek object/class ki properties aur methods doosre ko milna = inheritance.
// class inheritance
class Person {
    greet() {
        console.log("Hello");
    }
}

class student extends Person {
    study() {
        console.log("Student is studying");
    }
}

let s = new student();

s.greet();
s.study();

// type of inheritance
// single inheritance
class person {
    show() {
        console.log("Person");
    }
}

class studentt extends person {
    study() {
        console.log("Student");
    }
}

// Multilevel inheritance
class Human {
    showHuman() {
        console.log("Human");
    }
}

class Student extends Human {
    showStudent() {
        console.log("Student");
    }
}

class CollegeStudent extends Student {
    showCollege() {
        console.log("College Student");
    }
}

let S = new CollegeStudent();

S.showHuman();
S.showStudent();
S.showCollege();


// Hierarchical inheritance
class PERSON {
    show() {
        console.log("PERSON");
    }
}

class STUDENT extends PERSON {
}

class Teacher extends PERSON {
}