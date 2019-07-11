
// Challenge : Define and use a function in  new file 

// 1. Create a new file called notes.js
// 2. Create getNotes functions that returns "Your notes..."
// 3. Export getNotes function 
//  4. From app.js, load in and call the function printing message to console

const validator = require('validator');

const getNotes = require('./notes.js');
const notes = getNotes();
console.log(notes);

console.log(validator.isURL('https://samuel.io'))
console.log(validator.isEmail('samuel@example.com'))



