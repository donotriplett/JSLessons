/*
FOR OF LOOPS

better for arrays
*/

let student = {name: 'Emily', awesome: true, degree: 'JavaScript', week: 1};
for (let key of student) {
    console.log(key)
}

let catArray = ['tabby', 'britsh shorthair', 'burmese', 'maine coon'];
//value
for (cat of catArray) {
    console.log(cat, 'says meow');
}
//index number
for (cat in catArray) {
    console.log(cat, 'says meow');
}