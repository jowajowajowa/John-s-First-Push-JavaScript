// Comment, this is my first JavaScript code
console.log('Hello World');

// let name = 'John'; 
// console.log(name);

// Cannot be a reserved keyword (ex. let, if)
// Should be meaningful
// Cannot start with a number (ex. 2name)
// Cannot contain space or hyphen
// Are case-sensitive

// let firstName = 'John';
//let lastName = 'Wang';


// const interestRate = 0.3;  // can't say something is constant but then also a different value
interestRate = 1;
console.log(interestRate);


//let name = 'John';  // string literal
//let age = 23;       // number literal
let isApproved = false;   // Boolean (true or false) literal
let firstName = undefined;
let selectedColor = null;

// person object can containg multiple variables that we can group together
let person = {              // curly brackets = object literal
    name: 'John',
    age: 23
}; 

// Dot notation
person.name = 'John'; 

// Bracket notation
//let selected = 'name';
//person[selection] = 'Lulu';


console.log(person.name);


// arrays 
let selectedColors = ['red', 'blue'];   //square bracket = empty array
selectedColors[2] = 1;    
console.log(selectedColors.length);



//functions
//performing a task
function greet(name, lastName) {          //parameter is at time of declaration
    console.log('Hello ' + name + ' ' + lastName);
}


//calculated a value
function square(number) {
    return number*number;
}

console.log(square(2));

//function is set of statements that either performs a task or calculated a value


greet('John', 'Wang');        //argument is the actual value of the supply for the parameter
greet('Lulu', 'Lu');  //Testing a pr from second branch to main
// to be or not to be, that is the question, whether tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles, and by opposing end them