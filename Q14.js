"use strict";
const guests1 = ["Ahmed", "Ali", "Hassan"];
const newGuest = "Mahad";
for (let i = 0; i < guests1.length; i++) {
    if (guests1[i] === "Ali") {
        guests1[i] = newGuest;
    }
    else {
        console.log("not found");
    }
}
for (let i = 0; i < guests1.length; i++) {
    const message = `Dear ${guests1[i]},\n\nI would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.\n\nSincerely,\nDaniyal`;
    console.log(message);
}
console.log("Unfortunately, Ali can't make it to dinner.");
console.log(`I have invited ${newGuest} instead.`);
