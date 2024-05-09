"use strict";
// task 18 :  print a message indicating the number of people you are inviting to dinner
const guests4 = ["Ali", "Ahmed", "Hamza", "Shabir"];
console.log("I am inviting " + guests4.length + " people to dinner.");
// Changing Guest List
const guestWhoCantMakeIt = "Shabir";
const newGuest1 = "Sahil";
guests4[guests4.indexOf(guestWhoCantMakeIt)] = newGuest1;
console.log("I am sorry, " + guestWhoCantMakeIt + " cant make it to dinner.");
console.log("I am now inviting " + guests4.length + " people to dinner.");
// More Guests
const newGuests1 = ["Usman", "Faizan", "Taimur"];
guests4.unshift(newGuests1[0]);
guests4.splice(1, 0, newGuests1[1]);
guests4.push(newGuests1[2]);
console.log("I found a bigger dinner table, so I am inviting " + guests4.length + " people to dinner.");
// Shrinking Guest List
console.log("I can only invite two people to dinner.");
while (guests4.length > 2) {
    const guest = guests4.pop();
    console.log(`Sorry, ${guest}, I can't invite you to dinner.`);
}
console.log(`I am still inviting ${guests4[0]} and ${guests4[1]} to dinner.`);
// Printing the number of guests
console.log("I am inviting " + guests4.length + " people to dinner.");
