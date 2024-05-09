// task 15:More guests
let guests2 = ['Ahmed', 'Ali', 'Hassan'];

console.log('I found a bigger dinner table!');

// Add one new guest to the beginning of the array
guests2.unshift('Usman');

// Add one new guest to the middle of the array
guests2.splice(2, 0, 'Faizan');

// Add one new guest to the end of the array
guests2.push('Waleed');


for (let i =0 ; i<guests2.length; i++) {
  console.log(`Dear ${guests2[i]},

  I would be honored if you would join me for dinner. I would love to hear your stories and learn from your experiences.

  Sincerely,
  Daniyal
`);
}