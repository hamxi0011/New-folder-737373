"use strict";
// task 2 :store pesron name and print it in title case lower case and upper case
let name2 = "Hamza";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
let firstLetter = name2.slice(0, 1).toUpperCase();
let restLetter = name2.slice(1, name2.length).toLowerCase();
let titleCaseName = firstLetter + restLetter;
console.log(titleCaseName);
