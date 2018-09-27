// ternaries

let x = 6;

(x > 0) ? console.log('x is greater than 0.') : console.log('x is not greater than 0')

if (x > 0) {
    console.log("greater")
} else {
    console.log('lesser')
}
4
let x = 10;
(x == 0) ? console.log('x equals 0') : (x < 0) ? console.log('x is less than 0') : console.log('x is greater than 0')

let age = 22;
(age <= 17) ? console.log('Sorry, youre too young to do anything.') 
: (age >= 18 && age < 21) ? console.log('Yay! You can vote!') 
: (age >= 21 && age < 25) ? console.log('Yay! You can drink!') 
: console.log('Yay! You can rent a car!')

let yep = 8;

(yep < 0 && yep > -10) ? console.log('yep is between 0 and -10') 
: (yep > 0) ? console.log('yep is greater than 0') 
: console.log('yep is greater than 0');