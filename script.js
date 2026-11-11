
// PART 1: PRIMITIVE DATA TYPES------


// Task 1
let studentName = "Vijay sarathy";
console.log(typeof(studentName)); 
// output = string

// Task 2
let employeeAge = 25;
console.log(typeof(employeeAge));
 // output = number

// Task 3
let isWorking = true;
console.log(typeof(isWorking)); 
// output = boolean

// Task 4
let a;
console.log(a); 
// output = undefined

// Task 5
let b = "name";
let c = 21;
let d = true;
let e;
let f = null;

// Task 6
console.log(typeof(b)); // output = string
console.log(typeof(c)); // output = number
console.log(typeof(d)); // output = boolean
console.log(typeof(e)); // output = undefined
console.log(typeof(f)); // output = object

// Task 7
let courseName = "JavaScript";
console.log(courseName);
 // output = JavaScript

// Task 8
let batchNumber = 42;
console.log(typeof(batchNumber));
 // output = number



// PART 2: ARRAYS------

// Task 9
let fruits = ["Apple", "Orange", "Strawberry", "Grapes", "Banana"];
console.log(fruits);
 // output = ["Apple", "Orange", "Strawberry", "Grapes", "Banana"]

// Task 10
console.log(fruits[0]);
 // output = Apple

// Task 11
console.log(fruits[2]);
 // output = Strawberry

// Task 12
console.log(fruits[fruits.length - 1]);
 // output = Banana

// Task 13
let info = ["Vijay sarathy", 25, "Chennai", "Front End Developer"];

// Task 14
console.log(info[0]); // output = Vijay sarathy
console.log(info[1]); // output = 25
console.log(info[2]); // output = Chennai
console.log(info[3]); // output = Front End Developer

// Task 15
let define = ["Vijay sarathy", 25, true, false];
console.log(define);
 // output = ["Vijay sarathy", 25, true, false]

// Task 16
console.log(define.length);
 // output = 4

// Task 17
let MobileBrands = ["Redmi", "oppo", "vivo", "apple", "Nokia"];

console.log(MobileBrands[1]);
 // output = oppo
// Task 18
let programmingLanguages = ["C", "C++", "Java", "Python", "JavaScript", "ReactJS"];
console.log(programmingLanguages[programmingLanguages.length - 1]); 
// output = ReactJS


// PART 3: OBJECTS------

// Task 19
let student = {
    Name: "Vijay sarathy",
    Age: 25,
    city: "Chennai"
};

// Task 20
console.log(student.Name);
// output = Vijay sarathy

// Task 21
console.log(student.Age); 
// output = 25

// Task 22
let employee = {
    Name: "Vijay sarathy",
    salary: 30000,
    Designation: "Front End Developer"
};

// Task 23
let skills = {
    skillset: ["SQL", "Python", "REACTJS", "HTML", "JavaScript"]
};

console.log(skills.skillset[2]);
// output = REACTJS

// Task 24
let container = {
    fruit: "Apple",
    Number: 3,
    Boolean: true,
    toy: "Puzzel"
};

// Task 25
console.log(container.toy); 
// output = Puzzel

// Task 26
let company = {
    companyname: "Stackly",
    location: "chennai",
    employeecount: 1000
};


// PART 4: ARITHMETIC OPERATORS------

// Task 27
let g = 4;
let h = 6;
console.log(g + h); 
// output = 10

// Task 28
let k = 34;
let m = 20;
console.log(k - m); 
// output = 14

// Task 29
let num1 = 4;
let num2 = 2;
let num3 = 5;
console.log(num1 * num2 * num3); 
// output = 40

// Task 30
console.log(100 / 5); 
// output = 20

// Task 31
const remainder = 25 % 4;
console.log(remainder); 
// output = 1

// Task 32
let expo = 3 ** 4;
console.log(expo); 
// output = 81

// Task 33
let num4 = 5;
let num5 = 2;

console.log("Add:", num4 + num5); // output = Add: 7
console.log("Sub:", num4 - num5); // output = Sub: 3
console.log("Multi:", num4 * num5); // output = Multi: 10
console.log("Div:", num4 / num5); // output = Div: 2.5
console.log("Mod:", num4 % num5); // output = Mod: 1
console.log("Expo:", num4 ** num5); // output = Expo: 25



// PART 5: INCREMENT AND DECREMENT------

// Task 34
let pre = 10;
console.log(++pre); 
// output = 11

// Task 35
let post = 30;
console.log(post++); 
// output = 30

// Task 36
let predec = 45;
console.log(--predec); 
// output = 44

// Task 37
let postdec = 47;
console.log(postdec--); 
// output = 47

// Task 38
let ai = 10;
let si = ai++;

console.log(ai); // output = 11
console.log(si); // output = 10

// Task 39
let x = 15;
let y = ++x;

console.log(x); // output = 16
console.log(y); // output = 16

// Task 40
let num11 = 25;
let num21 = --num11;
let num31 = num21++;
let num41 = ++num31;

console.log(num11); // output = 24
console.log(num21); // output = 25
console.log(num31); // output = 25
console.log(num41); // output = 25