"use strict";
// task 16:Shrinking Guest list
var guests3 = ['danial', 'sahil', 'Ahmed', 'Mahad', 'Hassan', 'dawood'];
console.log("I can only invite two people for dinner.");
while (guests3.length > 2) {
    const guest = guests3.pop();
    console.log(`Sorry, ${guest}, I can't invite you to dinner.`);
}
console.log(`I'm still inviting ${guests3[0]} and ${guests3[1]} to dinner.`);
guests3.pop();
guests3.pop();
console.log("My guest list is now empty.");
