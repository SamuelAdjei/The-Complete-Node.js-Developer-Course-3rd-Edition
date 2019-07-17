
// Challenge : Use the chalk library in your project 

// 1. Install version 2.4.1 of chalk
// 2. CLoad chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work 


// Bonus : Make text bold

const chalk = require('chalk');

const getNotes = require('./notes.js');
const notes = getNotes();
console.log(notes);

console.log(chalk.green.bold.inverse("Success!"));

console.log(process.argv[2]);

