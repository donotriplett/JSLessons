/*
ARROW FUNCTIONS
*/

function coffee() {
    console.log('coffee rules.');
}

let tea = () => {
    console.log('tea is awesome.');
}

coffee();

tea();

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cats, and ${puppy} dogs.`);
}

cats(2, 3)


//Arrow function body styles
//concise
let apples = x => console.log(`There are ${x} apples.`)
apples(5);

//block
let peaches = (x) => {console.log(`There are ${x} peaches.`)}
peaches(6);
