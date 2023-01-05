'use strict';



var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

// 3 4 6
// 'string', "string", `string`;
// true / false

// let a;
// console.log(a);

// const obj = {
//     name: 'Alex'
// }
//             0   1  2  3
// const arr = [1, 3, 5, 6];

// - to String

// 1)
console.log(typeof(String(4)));
// 2)
console.log(typeof("f" + false));
console.log('https://vk.com/catalog/' + 5);

// - to Number

// 1)
console.log(typeof(Number('5')));
// 2)
console.log(typeof(5 + +'5'));
// 3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt("Hello?", '');

// 0, '', null, undefined, NaN

let switcher = null;

if (switcher) {
    console.log("Working..")
}

switcher = 1;

if (switcher) {
    console.log("Working..")
}

// 2)
console.log(typeof(Boolean('5')));
// 3)
console.log(typeof(!!'5'));

let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log("2" === 2);

let isChecker = true,
    isClose = true;

console.log(isChecked && isClose);