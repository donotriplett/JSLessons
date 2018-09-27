/*
IF ELSE
*/

weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
} else {
    console.log("No jacket necessary")
}

let x = 'donovan'

if (x === 'donovan'){
    console.log('Hello, my name is donovan!');
} else {
    console.log('Hello, what is your name?')
}

function name(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(name('josh'));

let name = 'tYlEr';

if (name[0] == name[0].toUpperCase()){
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

let age = 22;

if (age <= 17){
    console.log('Sorry, youre too young to do anything.')
} else if (age >= 18 && age < 21){
    console.log('Yay! You can vote!')
} else if (age >= 21 && age < 25){
    console.log('Yay! You can drink!')
} else {
    console.log('Yay! You can rent a car!')
}