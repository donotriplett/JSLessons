/*
CLASSIC FOR LOOPS
*/

//Loop Variations
//For statement
//Do while statement
//While statement
//Labeled statement
//Break statement
//Continue statement
//For in statement
//For of statement

//counted from 0 - 9 by 1's
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//count from 0 - 20, by 2's
for (let i = 0; i <= 20; i+=2) {
    console.log(i);
}

//count from 10 - 0, by 1's
for (let i = 10; i >= 0; i-=1) {
    console.log(i)
}


let name = 'donovan'

for (let i = 0; i < name.length; i+=1){
    console.log(name[i])
}

let num = 0

for (let i = 1; i <= 50; i++) {
    num = num + i;
}
console.log(num)