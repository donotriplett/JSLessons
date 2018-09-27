/*
FOR IN LOOPS

Great for iterating over values in an object
*/

let student = {name: 'Christian', awesome: true, degree: 'JavaScript', week: 1};

for (let item in student) {
    console.log(item);
    console.log(student[item])
}

let catArray = ['tabby', 'british shorthair', 'burmser', 'maine coon']

for (cat in catArray){
    console.log(catArray[cat])
}

let name = 'donovan'
let first = ''
for (let ch in name){
    if (ch == 0) {
        first = name(ch).toUpperCase();
    } else {
        first = first + name(ch).toLowerCase();
    }
    console.log(first);
}
console.log(first)