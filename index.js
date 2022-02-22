  //Logging something on the console

 // let name = 'John';
  //console.log(name);

  // variables cannot be a reserved keyword
  //should be meaningful   
  //cannot start with a number
  //cannot contain a space or hyphen (-)
  //are case senstive 

  let firstName = 'John';
  let lastName = 'Smith';

  let interestRate = 0.3;
  interestRate = 1;
  console.log(interestRate);

  // if you ever need to reassign a variable, use let
  // if you need to reassign a variable, use const

  //primitive types
  //string, number, boolean, null, undefined, symbol

  //string
  let secondName = 'Paul'; //string literal
  let age = 30; //number literal
  let isApproved = true; //boolean literal
  let thirdName = undefined; //undefined literal
  let selectedColor = null; //null literal
  // null is when we want to clear the value of a variable

  //dynamic typing - variable can change type
  //static typing  - variable cannot be changed to a different type

  // in js we don't have a different between int and float - they are all number\

  //reference types 
  //object, array, function, date, regexp, error

  //an object is a collection of properties and methods

  let person = {
    firstName: 'John',
    age = 30,
  } //object literal

  console.log(person);

  //dot notation -- is more efficient than bracket notation --
  person.lastName = 'Smith';
  console.log(person.lastName);

  //bracket notation

  person['lastName'] = 'Smith';

  let selectedColors = ['red', 'blue', 'green'];
  selectedColors[2] = 'yellow';
  console.log(selectedColors[0]);

  //an array is an object  that contains a list of items

  //functions - it peformas a task or calcuates a value 
  //a function is a block of code that can be reused

  function greet (name. lastName) {
    console.log('Hello, ' + name + ' ' + lastName);
  }

  //calucating a value
  function square (number) {
    return number * number;
  }

 //let number = square(2);
  //console.log(number);

greet("jon", "doe");

//a parameter is a variable that is passed into a function
// an argument is the value that is passed into a parameter


//fuctions perform a task or calculate a value