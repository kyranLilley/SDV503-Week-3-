//const let = require('let');
let x = 10;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

//arithmeticOperators.js

let xy = 10;

console.log(xy);
console.log(++xy);
console.log(xy);
console.log(++xy);
console.log(xy);
console.log(++xy);
console.log(xy);

let yx = 10;

console.log(yx);
console.log(yx++);
console.log(yx);
console.log(yx++);
console.log(yx);
console.log(yx++);
console.log(yx);

let xc = 10;
let cx = xc;

console.log("pre - increment")

cx = ++xc;
console.log(xc);
console.log(cx);

console.group("Post- Increment")

cx = xc++;
console.log(xc);
console.log(cx);



let xs = 10;

console.log(xs);
console.log(--xs);
console.log(xs);
console.log(--xs);
console.log(xs);
console.log(--xs);
console.log(xs);

let sx = 10;

console.log(sx);
console.log(sx--);
console.log(sx);
console.log(sx--);
console.log(sx);
console.log(sx--);
console.log(sx);


let sxs = 10
let xsx = sxs;

console.log("Pre-Decrement");

xsx = --sxs;
console.log(sxs)
console.log(xsx);

console.log("Post-Decrement");

xsx = sxs--;
console.log(sxs);
console.log(xsx)


for (let i = 0; i <= 20; i++){
    console.log(i)
}

for (let l = 10; l >= -10; --l){
    console.log(l)
}



const d = "Hello";
const e = "World";

console.log(d + e);
console.log(`${d} ${e}`);



console.log()