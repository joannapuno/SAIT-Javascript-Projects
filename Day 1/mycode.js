// different ways to print something on your browser
// alert('Hello World'); 
console.log('This is a Secret Message');
document.write('Hello again World!');

// This is a single line comment
/* this is a longer one for 
multiple lines.*/
   

// Variables + Calling them--------------------
var birthdayGirl = 'Jane Doe';
var num = 30;
console.log(birthdayGirl);
console.log(num);

// Math in JS---------------------------------
var numOfApples = 50;
var numOfOranges = 30;
console.log(numOfApples + numOfOranges);
console.log(numOfApples - numOfOranges);
console.log(numOfApples * numOfOranges);
console.log(numOfApples / numOfOranges);
console.log(numOfApples % numOfOranges);

// String + Number----------------------------
console.log('Number of Apples:', numOfApples);

// What's Your  Name--------------------------
// Option 1:
var firstName = 'Joanna ';
firstName += 'Puno';
console.log(firstName);

// Option 2:
var firstName = 'Joanna';
var lastName = 'Puno';
var fullName = firstName + ' ' + lastName;
console.log(fullName);


// Functions---------------------------------
function callingName() {
    console.log('Hi ' + firstName + ' ' + lastName);
}

// Arguments. User puts in the arguments when it's being called
function introduction(nickName, age) {
    // console.log('Good morning, you can call me ' + nickName + 
    // ' and I am ' + age + ' years old');
    return 'Good morning, you can call me ' + nickName + 
    ' and I am ' + age + ' years old';
}

// Returning Values-----------------------
// Will immediately end a function. Will exit right away

function square(x) {
    return x*x;
}
var ans = square(5);
// You can use the function as a value for your other variables. It will always be stored in that function so you can access it later.

function name(first, last) {
    return first + ' ' + last;
}


// IF Statements
var age = 30;
if(age > 18) {
    console.log('You may enter!');
}

// Exercise

var temperature = 30;

// Option 1, one condition
if(temperature <= -20) {
    console.log ('Stay inside!!!')
} else if(temperature <= 0) {
    console.log('Wear your coat and hat!')
} else if(temperature <= 10) {
    console.log('Wear your coat!!!')
} else {
    console.log('Wear whatever you want!');
}

// LOGICAL OPERATORS. 
// Option 2, comparing conditions

var hasCoat = true;
var snow = true;

if(temperature <= -20 && hasCoat ) {
    console.log ('Stay inside!!!')
} else if(temperature <= 0 || snow) {
    console.log('Wear your coat and hat!')
} else if(temperature <= 10) {
    console.log('Wear your coat!!!')
} else {
    console.log('Wear whatever you want!');
}

// What To Wear Program

var simple = true;
var formal = false;

if(temperature <= -20 && simple) {
    console.log ('Long sleeve all the way')
} else if(temperature <= 0 || formal) {
    console.log('Trench coat with a long sleeve shirt inside.')
} else if(temperature <= 10) {
    console.log('Simple long sleeve with jeans and leather coat.')
} else {
    console.log('DRESS!!! WEAR A DRESS!!!!');
}

