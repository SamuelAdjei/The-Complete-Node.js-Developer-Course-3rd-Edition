const fs = require('fs'); //loads fs module

//fs.writeFileSync('notes.txt', 'My name is Samuel.', 'utf8'); //writes text to a file 


fs.appendFileSync('notes.txt', ' The umbrella is up.', 'utf8'); //appends file to a file 



// Challenege
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text


